function initAudio(name){
	if (navigator.onLine ) {
		//		alert('ding!');
		var link;
		
//		name = "aha";
		
		firstCaseName = name.substring(0, 1);
		firstCaseName = firstCaseName.toLowerCase();
		link = "/Sencha/BWB-Spiel/mp3/" + firstCaseName + "/" + name + ".mp3";
		
		var audio = 0;
		 audio = new Audio(link);
		
		
		var playButton = document.getElementById('audioPlayButton');
		

			if (!e) var e = window.event;
			e.cancelBubble = true;
			if (e.stopPropagation) e.stopPropagation();
		
	}
	
	else {
		document.getElementById('audioPlayButton').hide();
		alert('nooooooooot');
	}
}
