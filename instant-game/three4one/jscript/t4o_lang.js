/**
Three4One -- t4o_lang.js

International language support

http://three4one.domes-muc.de

Copyright (c) Kilian Domes <Kilian . domes /at\ gmx /dot\ de>, 
              Franz Domes <franz . domes \at/ gmx \dot/ de>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of Three4One nor the names of its contributors may be 
      used to endorse or promote products derived from this software without 
      specific prior written permission.
    * You are not allowed to charge money neither for Three4One as software nor 
      for the use of it (i.e. only free content is permitted) without specific
      prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL KILIAN DOMES BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

@package Three4One
@subpackage Language
@author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
@version 2.3
@copyright Copyright (c) 2011, Domes

**/
var t4o_lang = 'de';

var langHash = {
    'de': {
      ERROR1: "FEHLER: Es sind nicht genügend Werte im Array<br>\n" +
      		"Deshalb können nicht genügend Werte ausgewählt werden<br>\n",
      TIMEOUT: 'Timeout',
      CONNECTION: 'Verbindung: ',
      DATAOFFLINE: 'Daten: offline',
      DATAONLINE: 'Daten: online',
      Reload: 'Laden',
      Spiel: 'Spiel',
      Extras: 'Extras',
      "E-Mail": 'E-Mail',
      Code: 'Code',
      DATA_DOWNLOADED: "Es wurden %s zufällig ausgewählte Wörter heruntergeladen.<br /> Jetzt ist <span>%s</span> auch offline spielbar!",
      'Load data offline': 'Daten lokal laden',
      'Buy language': 'Sprache kaufen',
      Configuration: 'Einstellungen',
      Shop: 'Shop',
      Reset: 'Zurücksetzen',
      Statistics: 'Statistik',
      'Offline data': 'Offline Daten',
      'Success counter': 'Erfolgszähler',
      'RESET_TEXT': '%s zurücksetzen',
      'Abort': 'Abbrechen',
      Package: 'Paket',
      Language: 'Sprache',
      Animation: 'Animationen',
      Online: 'Online',
      online: 'online',
      Offline: 'Offline',
      offline: 'offline',
      'No. Offline data: ': 'Anzahl Offline-Daten: ',
      Graph: 'Graph',
      'List': 'List',
      'all drops': 'alle Drops',
      'correct drops': 'richtige Drops',
      'error drops': 'falsche Drops',
      'Date': 'Datum',
      'Load demo data': 'Lade Demodaten',
      'Load data': 'Lade Spieldaten',
      'Loading': 'Lade',
      "Data Load Error!": "Fehler beim Laden der Daten!",
      'Cannot check code': 'Kann Zugriffscode nicht überprüfen',
      "Cannot load data, while offline !": "Kann Daten nicht laden, weil Offline!",
      "no text set!": 'Kein Text',
      'To the game': 'Zum Spiel',
      'Copyright notice': 'Copyright',
      'Back': 'Zurück',
      'Play': 'Spiel',
      'Help': 'Hilfe',
      'Program version:': 'Programmversion:',

    },
    'en': {
      ERROR1: "ERROR: The array count is greater than the random number maximum.<br>\nTherefore, it is impossible to build an array of unique random numbers.<br>\n",
      TIMEOUT: 'time out.',
      CONNECTION: 'connection: ',
      DATAOFFLINE: 'data: offline',
      DATAONLINE: 'data: online',
      Reload: 'Reload',
      Spiel: 'Game',
      Extras: 'Options',
      "E-Mail": 'E-Mail',
      Code: 'Code',
      DATA_DOWNLOADED: "%s random data successfully downloaded<br />You can now play <span>%s</span> offline!",
      'Load data offline': 'Load data offline',
      'Buy language': 'Buy language',
      Configuration: 'Configuration',
      Shop: 'Shop',
      Statistics: 'Statistiken',
      Reset: 'Reset',
      'Offline data': 'Offline data',
      'Success counter': 'Success counter',
      'RESET_TEXT': 'Reset %s',
      'Abort': 'Abort',
      Package: 'Package',
      Language: 'Language',
      Animation: 'Animation',
      Online: 'Online',
      online: 'online',
      Offline: 'Offline',
      offline: 'offline',
      'No. Offline data: ': 'No. Offline data: ',
      Graph: 'Graph',
      'List': 'List',
      'all drops': 'all drops',
      'correct drops': 'correct drops',
      'error drops': 'error drops',
      'Date': 'Date',
      'Load demo data': 'Load demo data',
      'Load data': 'Load data',
      'Loading': 'Loading',
      "Data Load Error!": "Data Load Error!",
      'Cannot check code': 'Cannot check code',
      "Cannot load data, while offline !": "Cannot load data, while offline !",
      "no text set!": "no text set!",
      'To the game': 'To the game',
      'Copyright notice': 'Copyright',
      'Back': 'Back',
      'Play': 'Play',
      'Help': 'Help',
      'Program version:': 'Program version:',
      
    },
    'fr': {
      ERROR1: "ERREUR: Erreur interne 1<br>\n",
      TIMEOUT: 'délai de connexion dépassé',
      CONNECTION: 'connexion: ',
      DATAOFFLINE: 'données: hors ligne',
      DATAONLINE: 'données: en ligne',
      Reload: 'Recharger',
      Spiel: 'Jeux',
      Extras: 'Outils',
      "E-Mail": 'E-mail',
      Code: 'Code',
      DATA_DOWNLOADED: "%s données téléchargées avec succés<br />Maintenant vous pouvez jouer <span>%s</span> hors ligne!",
      'Load data offline': 'Télécharger les données',
      'Buy language': 'Achetez la langue',
      Configuration: 'Configuration',
      Shop: 'Magasin',
      Statistics: 'Statistiques',
      Reset: 'Réinitialiser',
      'Offline data': 'Données hors ligne',
      'Success counter': 'Compteur du succès',
      'RESET_TEXT': 'Réinitialiser «%s»',
      'Abort': 'Annuler',
      Package: 'Paquet',
      Language: 'Langue',
      Animation: 'Animation',
      Online: 'En ligne',
      online: 'en ligne',
      Offline: 'Hors ligne',
      offline: 'hors ligne',
      'No. Offline data: ': 'Nombre des données hors ligne: ',
      Graph: 'Graphique',
      'List': 'Liste',
      'all drops': 'Tous les Drops',
      'correct drops': 'Drops corrects',
      'error drops': 'Drops faux',
      'Date': 'Date',
      'Load demo data': 'Télécharger données démo',
      'Load data': 'Télécharger données de jeux',
      'Loading': 'Chargement',
      "Data Load Error!": "Erreur de chargement!",
      'Cannot check code': 'Erreur en vérifiant le code d\'accès',
      "Cannot load data, while offline !": "Impossible de télécharger des données en mode hors ligne!",
      "no text set!": 'pas de texte',
      'To the game': 'Jeux',
      'Copyright notice': 'Copyright',
      'Back': 'Retour',
      'Play': 'Jeux',
      'Help': 'Aide',      
      'Program version:': 'Version du programme:',
    }
};

function _(text)
{
  var model = langStore.first()
  var t4o_lang = model['data']['t4oLang'];
      
//  var t4o_lang = t4oConfig.getConfigParam('t4oLang');
//	return function(text) 
	{
	  if ( langHash[t4o_lang][text] )
	  {
	    return "<span class='trans' tag='" + text + "'>" + langHash[t4o_lang][text] + "</span>";
	  }
	  else
	  {
	    return "<span class='trans' tag='" + text + "'>" + text + "</span>";
	  }
	};
}

/*
 * Langugage Store
 */
  var langModel = Ext.regModel('LangStore', {
    idProperty: 'langId',
    fields: [
             {name: 'langId', type: 'int'},
             {name: 't4oLang', type: 'string'}
             ],
    proxy: {
      type: 'localstorage',
      id  : 't4o-lang'
  }
});

var langStore = new Ext.data.Store({
    model: "LangStore"
});

langStore.load({
  scope: this,
  callback: function(records, operation, success) 
  {
      // the operation object contains all of the details of the load
      // operation
      if (records["length"] == 0)
      {
          langStore.add({t4oLang: 'de'});
          langStore.sync();              
      }
      t4o_lang = records[0]['data']['t4oLang'];
  }
});

function changeLang(newLang)
{
    var model = langStore.first()
    ret = model['data']['t4oLang'];
    model.set('t4oLang', newLang);
    langStore.sync();
    
    location.reload(true);
};
  
//	t4o_lang = newLang;
//	
//	var els = Ext.DomQuery.select('.trans');
//	var ln = els.length, el;
//	
//	for (i = 0; i < ln; i++) {
//        el = els[i];
//
//        el.innerHTML = langHash[t4o_lang][el.getAttribute('tag')] ? langHash[t4o_lang][el.getAttribute('tag')] : el.getAttribute('tag');
//        //alert(el.getAttribute('tag'));
//	}
//}