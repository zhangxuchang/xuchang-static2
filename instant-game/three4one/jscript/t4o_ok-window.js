/**
Three4One -- t4o_ok-windows.js

Three4One OK Panel Class

Display of OK Panel for Three4One. Also does sound handling
 
This class gets and displays the items to play with.

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
@subpackage OK Window
@author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
@version 2.3
@copyright Copyright (c) 2011, Domes

**/
if (typeof T4OOkWindow === "undefined") {
  T4OOkWindow = {};
}
T4OOkWindow = Ext.extend(Ext.Panel, {

  audioElement: {},
  audioButton: {},

  text: '',
  soundfile: '',
  inPlayFlag: false,

  hideOkWindow: function(e) {
	this.hide();
	Ext.get('okWindow').un('webkitTransitionEnd');
	Ext.get('okDivImg').removeCls("transition");
	playBodyClicked();
  },

  delayedHide: function(e) {
	var target = e.getTarget(undefined, undefined, true);
	if ( target.id == 'audioPlayButtonImg' )
	{
	  this.playSound(); 
	}
	else
	{
	  var animationFlag = t4oConfig.getConfigParam('animationFlag');
	  if(animationFlag)
	  {
		var okWindow = Ext.get('okWindow');
		okWindow.addCls('transition');
		okWindow.on('webkitTransitionEnd', this.hideOkWindow, this);
	  }
	  else
	  {
		this.hideOkWindow();
	  }
	}
  },

  showOkWindow : function(draggable, okBild, soundexists) {
//	var language = t4oConfig.getConfigParam('lang');

	this.text = draggable.el.getHTML();
	this.soundfile = (soundexists == "-1" ? this.text : soundexists); 
	
	Ext.getBody().mask();
	Ext.get('okDivImg').set({'src' : okBild});
	Ext.get('okDivText').setHTML(this.text);	
//	alert(soundexists + ":" + this.soundfile + ":" + (soundexists != "0" && soundexists != ''));
	(soundexists != "0" && soundexists != '') ? Ext.get('audioPlayButton').removeCls('x-no-soundexists') : Ext.get('audioPlayButton').addCls('x-no-soundexists');
	this.show();
	Ext.get('okWindow').removeCls(['transition', 'x-hidden-display']); //@TODO
  },

   playStarted: function() {
	this.inPlayFlag = true;
	Ext.get('audioPlayButtonImg').set({src: 'pict/audio_white.png'});	
  },

  playStopped: function() {
	this.inPlayFlag = false;
	Ext.get('audioPlayButtonImg').set({src: 'pict/audio.png'});
  },

  playSound: function() {
	var e;
	var me = this;

	if ( !this.inPlayFlag )
	{
	  var link;
	  me.playStarted();

	  me.audioElement = document.getElementById('audioTag');

	  link = t4oConfig.getDataUrl() + "php/t4o_playsound.php" + 
	          "?lang=" + t4oConfig.getConfigParam('lang') +
	          "&packageId=" + t4oConfig.getPackageId() +
	          "&file=" + this.soundfile;
	  me.audioElement.setAttribute('src', link);

	  try {
		me.audioElement.load();
	  }
	  catch(e)
	  {
		me.audioElement.play();
	  }
	}
	else
	{
//	  alert('TRUE');
	}
	if (!e) 
	  e = window.event;    
	e.cancelBubble = true;
	if (e.stopPropagation) 
	  e.stopPropagation();

  },

  constructor: function(config) {

	var me = this;

	config = Ext.apply({
	  floating: true,
	  modal: true,
	  centered: true,
	  hideOnMaskTap: false,
	  hidden: true,			
	  styleHtmlContent: true,
//	  cls: t4oConfig.getAnimValue() ? 'transition' : '',
		listeners: {show: {
				scope: this,
				fn: function() {
					var anim = t4oConfig.getAnimValue();
					if(anim)
					{
						this.addCls('transition');
					}
					else
					{
						removeCls('transition');
					}
				}
			}
		},
	  items: [
	          {
	        	id   : 'okHTMLArea',
	        	contentEl: 'okDiv'
	          }
	          ],
	          listeners: {
	        	orientationchange : {
	        	  scope: this,
	        	  fn: function ( obj, orientation, width, height ) {
	        		this.doComponentLayout();
	        		this.doLayout();
	        	  }
	        	}, 
	        	show: {
	        	  scope: this,
	        	  fn: function() {
	        		Ext.get('okWindow').on('click', this.delayedHide, this);
	        		var language = t4oConfig.getConfigParam('lang');
	        		me.playStopped();
//	        		if (navigator.onLine && language == 'de') 
//	        		{
//	        		  me.playStopped();
//	        		  Ext.get('audioPlayButton').show();
//	        		}
//	        		else 
//	        		{
//	        		  Ext.get('audioPlayButton').hide();
//	        		}
	        		this.doComponentLayout();
	        		this.doLayout();
    	        	if(t4oConfig.getConfigParam('animationFlag'))
    	        	{
    	        	  Ext.get('okDivImg').addCls('transition');
    	        	}
	        	  }
	        	}
	          },
	          id: 'okWindow'
	}, config);

	T4OOkWindow.superclass.constructor.call(this, config);

	me.audioElement = document.getElementById('audioTag');

	if (Ext.is.iOS) {
      me.audioElement.addEventListener('timeupdate', function () {
        if ( me.audioElement.currentTime >= me.audioElement.duration )
        {
          Ext.get('audioPlayButtonImg').set({src: 'pict/audio.png'});
          me.inPlayFlag = false;
//          me.playStopped();
        }
      });
  }
  else
  {
    me.audioElement.addEventListener('ended', function () {
      Ext.get('audioPlayButtonImg').set({src: 'pict/audio.png'});
      me.inPlayFlag = false;
//    me.audioElement.addEventListener('ended', me.playStopped, false);
    });
  }
	
    me.audioElement.addEventListener('error', function () {
      alert('ERROR');
      Ext.get('audioPlayButtonImg').set({src: 'pict/audio.png'});
      me.inPlayFlag = false;
    });

  }
}
);
