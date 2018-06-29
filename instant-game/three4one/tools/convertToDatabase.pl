#!/usr/bin/perl
use strict;
use DBI;
use MIME::Base64;
use Getopt::Std;
use File::Find;

my $state = 0;
my @line;
my $eintrag;
#my $imageBaseDir = "/srv100/Intranet/www/htdocs/Sencha/BWB-Spiel/img";
#my $imageBaseDir = "/srv/www/htdocs/Sencha/BWB-Spiel/img";
my $imageBaseDir = "../img";
my $soundBaseDir = "../mp3";

my $dsn = "DBI:mysql:database=bwbspiel;host=localhost;";

my $dbh = DBI->connect( $dsn, 'bwbspiel', 'bwbspiel' );

our $opt_t;
getopts('t:');

our $imageFile;
our $imageFilePath;

sub wanted {
	$File::Find::dir !~ /tmp$/ && 
		$_ =~ /^$imageFile$/ && do { $imageFilePath = $File::Find::name; };
}

sub convertImg {
	my $fileName = shift;
	my $mimeType = 'image/jpeg';
	my $var;

	local ( *INPUT, $/ );
	open( INPUT, $fileName ) || warn "can't open $fileName: $!";
	$var = <INPUT>;
	my $b64bild = encode_base64($var);

	return "data:" . $mimeType . ";base64," . $b64bild;
}

sub findSound {
	my $name = shift;
	
	my $subdir = lcfirst(substr($name,0,1));
	
	my $path = $soundBaseDir . "/" . $subdir . "/" . $name . ".mp3";
	
	return ((-e $path) ? -1 : 0);
}

# Lese Thema aus Dateiname:
# Der Dateiname hat das Format DaFde0x_BW_[THEMA].xml
sub getThema {
  my $filename = shift;
  my $thema;
  
  ($thema = $filename) =~ s/^.*_([^_]*)\.xml/$1/;
  
  return $thema;
}

#if ( !defined($opt_t) ) {
#	die "Bitte mit Option -t das Thema angeben";
#}

while (<>) {

	/<eintrag>/ && do {
		print("eintrag found\n");
		$state = 0;
		undef $eintrag;
	};
	m%</eintrag>% && do {
#		if ( defined( $eintrag->{'bild'} ) ) {
      $eintrag->{'thema'} = getThema($ARGV);
      $eintrag->{'soundExists'} = findSound($eintrag->{'lemma'});
			push( @line, $eintrag );
#		}
		undef $eintrag;
	};
	m%<lemma[^>]*>([^<]*)</lemma>%
	  && do { print "lemma found: $1\n"; $eintrag->{'lemma'} = $1; };
	m%<bild\s+name-a="([^"]*)"\s*/>% && do {
		print "bild found: $1\n\t$_";
		$eintrag->{'bild'} = $1 . ".jpg";
	};

	#<trans xml:lang="en">body</trans>
	m%<trans\s+xml:lang="([^"]*)"\s*>([^<]*)</trans>%
	  && do { print "trans found: $1\n\t$_"; $eintrag->{ 'lemma_' . $1 } = $2; };

	#<wokla wokla-a="N"/>
	m%<wokla\s+wokla-a="([^"]*)"\s*/>%
	  && do { print "wokla found: $1\n\t$_"; $eintrag->{'wokla'} = $1; };
}

my $updated = 0;
my $inserted = 0;

foreach my $zeile (@line) {

#print $zeile->{'bild'},"', "', $zeile->{'lemma'},"', "', $zeile->{'lemma_fr'},"', "', $zeile->{'lemma_en'},"', "', $zeile->{'lemma_es'},"', "', $zeile->{'wokla'}, "\n";

	$imageFilePath = undef;
	if ( defined( $zeile->{'bild'} ) ) {
		$imageFile = $zeile->{'bild'};
		find( \&wanted, $imageBaseDir );	
	}
	
	if ( !defined($imageFilePath) ) {
		$imageFile = $zeile->{'lemma'} . ".jpg";
		find( \&wanted, $imageBaseDir );
	}	

	if ( defined($imageFilePath) ) {
#		print("BILD: $imageFilePath\n");
		
		my $b64bild = convertImg($imageFilePath);

		my $sql = "SELECT * FROM daw_elemente WHERE bild = " . $dbh->quote($imageFile) . " AND lemma_de = " . $dbh->quote($zeile->{'lemma'}) ;

		my $ary_ref = $dbh->selectcol_arrayref($sql);

		if ( !@{$ary_ref} ) {
			$sql =
"INSERT INTO daw_elemente (bild, lemma_de, lemma_fr, lemma_en, lemma_es, lemma_pl, lemma_it, lemma_tr, lemma_ru, wokla, b64bild, thema, soundexists) VALUES ("
			  . $dbh->quote($imageFile) . ", "
			  . $dbh->quote($zeile->{'lemma'}) . ", "
			  . $dbh->quote($zeile->{'lemma_fr'}) . ", "
			  . $dbh->quote($zeile->{'lemma_en'}) . ", "
			  . $dbh->quote($zeile->{'lemma_es'}) . ", "
			  . $dbh->quote($zeile->{'lemma_pl'}) . ", "
			  . $dbh->quote($zeile->{'lemma_it'}) . ", "
			  . $dbh->quote($zeile->{'lemma_tr'}) . ", "
			  . $dbh->quote($zeile->{'lemma_ru'}) . ", "
			  . $dbh->quote($zeile->{'wokla'}) . ", "
			  . "'" . $b64bild . "', "
			  . $dbh->quote($zeile->{'thema'}) . ", "
			  . $dbh->quote($zeile->{'soundExists'})
			  . ")";


			$dbh->do($sql) || die "Inserting failed: $@\n\t$sql\n";

      $inserted++;
      print "$zeile->{thema}: $imageFile, $zeile->{lemma} inserted\n";
#			print $ary_ref;
		}
		else {
			$sql =
			    "UPDATE daw_elemente SET  lemma_fr = "
			  . $dbh->quote($zeile->{'lemma_fr'})
			  . ", lemma_en = "
			  . $dbh->quote($zeile->{'lemma_en'})
			  . ", lemma_es = "
			  . $dbh->quote($zeile->{'lemma_es'})
			  . ", lemma_pl = "
			  . $dbh->quote($zeile->{'lemma_pl'})
			  . ", lemma_it = "
			  . $dbh->quote($zeile->{'lemma_it'})
			  . ", lemma_tr = "
			  . $dbh->quote($zeile->{'lemma_tr'})
			  . ", lemma_ru = "
			  . $dbh->quote($zeile->{'lemma_ru'})
			  . ", wokla = "
			  . $dbh->quote($zeile->{'wokla'})
			  . ", b64bild = '"
			  . $b64bild
			  . "',  thema = "
			  . $dbh->quote($zeile->{'thema'})
			  . ",  soundexists = "
			  . $dbh->quote($zeile->{'soundExists'})			  
			  . " WHERE bild = "
			  . $dbh->quote($imageFile)
			  . " AND lemma_de = "
			  . $dbh->quote($zeile->{'lemma'});

			$dbh->do($sql) || die "Updating failed: $@\n\t$sql\n";
      $updated++;
      print "$zeile->{thema}: $imageFile, $zeile->{lemma} updated\n";
		}
	}
	else
	{
		print "$zeile->{thema}: Kein Bild für $zeile->{lemma}\n";
	}
}

print "INSERTED: $inserted, UPDATED: $updated\n";
