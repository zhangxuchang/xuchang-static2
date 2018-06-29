/**
Three4One -- t4o_playpanel.js

Play panel of Three4One. 
 
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
@subpackage Playpanel
@author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
@version 2.3
@copyright Copyright (c) 2011, Domes

**/

/**
 * Counter um regelmäßig Google-Anzeigen einblenden zu können
 */
var googlePlayCount = 0;

var generateUniqueRandoms = function(min, max, count)  {
    if(count > max)  {  // this prevents an infinite loop
    	alert(_('ERROR1'));
        return;
    }   
    var numArray = [];
    for(var i = 0; i < count; i++)  {       
        numArray[i] = Math.round(Math.random() * (max-min) + min);         // set random number
        for(var j = 0; j < i; j++)                 // for each number, check for duplicates
        {
            if(numArray[i] == numArray[j]) {
                numArray[i] = Math.round(Math.random() * (max-min) + min);         // if duplicate, generate new random
                j = -1;                                // go back through and check new number
            }
        }
    }
    return numArray;
};

var playResetGame = function() {
	drag1.setOffset(0,0);
	drag2.setOffset(0,0);
	drag3.setOffset(0,0);
	drop.el.removeCls(['dragOK', 'dragERR']);
	drag1.el.parent().removeCls(['dragERR']);
	drag2.el.parent().removeCls(['dragERR']);
	drag3.el.parent().removeCls(['dragERR']);
	drag1.enable();
	drag2.enable();
	drag3.enable();
};

var playSetGame = function(data) {
    if ( typeof(data) != "undefined" )
    {
        soundexists = data.soundexists;
    	okBild = lzw_decode(data.b64bild);
    	Ext.get('dropImg').set({'src' :okBild});
    	Ext.get('dropImg').removeCls("transition");
    	okIndex = Math.round(Math.random() * 2);
    	errIndex1 = ((okIndex+1) % 3);
    	errIndex2 = ((okIndex+2) % 3);
    	Ext.get('draggable' + okIndex).update(data.oktext);
    	Ext.get('draggable' + errIndex1).update(data.fehltext1);
    	Ext.get('draggable' + errIndex2).update(data.fehltext2);
//    	if ( ++googlePlayCount >= 3 && okIndex != 2)
//    	{
//    	  Ext.get('draggable-outer-2').hide();
//    	  Ext.get('google-ads').show();
//    	  googlePlayCount = 0;
//    	}
//    	else
//    	{
//          Ext.get('draggable-outer-2').show();
//          Ext.get('google-ads').hide();
//    	}
    //	Ext.get('debug').update(data.bild);
    	playResetGame();
    }
}

var playMakeAjaxRequest = function (){
	Ext.getBody().mask('Loading...', 'x-mask-loading', false);
	
	if ( t4oConfig.getOnlineFlag() )
	{
		Ext.get('dataMode').update(_('CONNECTION') + (navigator.onLine ? _('online') : _('offline')) + '<BR>' + _('DATAONLINE'));
		var timeOutTimer = window.setTimeout(function (){
		  console.log(_('TIMEOUT'));
		  Ext.util.JSONP.callback();
		  }, 5000);
		Ext.util.JSONP.request({
			url: t4oConfig.getDataUrl() + 'php/t4o_spiel.php',
			params: { lang : t4oConfig.getConfigParam('lang'),
			          email: t4oConfig.confAccess.getEmail(t4oConfig.getConfigParam('lang')),
			          code: t4oConfig.confAccess.getCode(t4oConfig.getConfigParam('lang')),
			          packageId: t4oConfig.getPackageId(),
			          _dc: new Date().getTime(),  // Disable caching
					  command: 'GAME'},
			callbackKey: 'callback',
			callback: function(response) {
			    window.clearTimeout(timeOutTimer);
			    playSetGame(response);
//				if ( success )
//				{
//					var data = Ext.decode(response.responseText);
//					playSetGame(data);
//				}
//				else
//				{
//					alert('Cannot load data from server');
//				}
				Ext.getBody().unmask();
			}
		});
	}
	else if ( t4oDb.getTotalCount() > 3 )
	{
		var resultRandom = generateUniqueRandoms(0,t4oDb.getTotalCount()-1,3);
		Ext.get('dataMode').update(_('CONNECTION') + (navigator.onLine ? 'online' : 'offline') + '<BR>' + _('DATAOFFLINE'));
		var xx = t4oDb.getBwbData(resultRandom, t4oConfig.getConfigParam('lang'));
		playSetGame(xx);
		Ext.getBody().unmask();
	}
	else
	{
	  var me = this;
	  this.infoWindow = new T4OInfoWindow({ 
	    centered: true,
	    width: Ext.Element.getViewportWidth() * 0.9,
//	    listeners:{
//	      click: { // @TODO
//	        element: 'body',
//            scope: this,
//            fn: function(y) {
//              this.infoWindow.hide();
//            }
//	      }
//	    }
	  });
	  this.infoWindow.showInfoWindow({
	    html: 'Es stehen keine Spieldaten zur Verfügung. Bitte gehen Sie online oder laden Sie Offline-Daten herunter',
	  });
     //Ext.getBody().unmask();

	}
};

var addCount = function(isOk) {
	
  dateIndex = t4oCounter.countStore.findExact("date", today);
  if(dateIndex == -1)
  {
    wrongForm = new Date(today)
    wrongform = wrongForm.format('d.m.Y')
    dateIndex = t4oCounter.countStore.findExact("date", wrongForm);
  }
  dateModel = t4oCounter.countStore.getAt(dateIndex);
  
	if ( isOk )
	{
		okCount++;
		Ext.get('okCount').update(okCount);
		dateModel.set("okCount", okCount);
		t4oCounter.countStore.sync();
	}
	else
	{
		errCount++;
		Ext.get('errCount').update(errCount);
		dateModel.set("errCount", errCount);
		t4oCounter.countStore.sync();
	}
	tabBar.doComponentLayout();
	if(okCount > 99 )
    {
      Ext.get("okCount").addCls("hundred");
      if(okCount > 999)
      {
        Ext.get("okCount").addCls("thousand");
      }
    }
    if(errCount > 99 )
    {
      Ext.get("errCount").addCls("hundred");
      if(errCount > 999)
      {
        Ext.get("errCount").addCls("thousand");
      }
    }
};

var playResetPos = new Ext.util.DelayedTask(function(dragEl){
	playResetGame();
	dragEl.parent().addCls('dragERR');
});

var playPanel = new Ext.Panel({
	title: _('Spiel'),
	iconCls: 'compose',
	id : 'spiel',
	width: '300px',
    scroll: false,	
	listeners : {
  	    deactivate: function(el, e) {
		    drop.clearListeners();
	    },
		activate : function() {
			// Create a new draggable for the div with
			// an
			// id of 'draggable'
			drag1 = drag1 || new Ext.util.Draggable('draggable0', {
				revert: true
			});
			drag2 = drag2 || new Ext.util.Draggable('draggable1', {
				revert: true
			});
			drag3 = drag3 || new Ext.util.Draggable('draggable2', {
				revert: true
			});
			// Create a new Droppable for the div with
			// an
			// id of 'droppable'
			drop = drop || new Ext.util.Droppable('droppable', {
				// Change the validDropMode from the
				// default of 'intersect' to
				// 'contains' this ensures that a
				// Draggable must be completed
				// contained by the Droppable in order
				// to perform a drop
				validDropMode: 'intersect',
				});

			drop.addListener('drop', function(droppable, draggable, e) {
					if ( draggable.el.id == 'draggable' + okIndex)
					{
						droppable.el.addCls('dragOK');
						addCount(true);
						if(t4oConfig.getConfigParam('animationFlag'))
						{
							Ext.get('dropImg').addCls("transition");
							Ext.get('dropImg').on('webkitTransitionEnd', function(){							
								t4oOkWindow.showOkWindow(draggable, okBild, soundexists);
								Ext.get('okDivImg').removeCls('notransition');
							});
						}
						else
						{
							t4oOkWindow.showOkWindow(draggable, okBild, soundexists);
							Ext.get('okDivImg').addCls('notransition');
						}
					}
					else if ( draggable.el.id == 'draggable' + errIndex1 || draggable.el.id == 'draggable' + errIndex2 )
					{
						droppable.el.addCls('dragERR');
						playResetPos.delay(500, null, null, [draggable.el]);
						addCount(false);
					}

				}, this
			);
			playMakeAjaxRequest();
			
		}
	},
	contentEl: 'panelcontent'
});

playPanel.addListener('doubletap', function(e) {
  var x=e;
  alert('X');
}, this);

	//Ext.getCmp('spiel').addManagedListener(Ext.get('audioPlayButton'), 'click', audioPlay(), this);
 playBodyClicked = function(e,t) {
	var  okDiv = Ext.get("okDiv");
	if ( okDiv )
	{
//		alert('playBodyClicked');
		Ext.get('dropImg').un('webkitTransitionEnd');
		/*?ÄQYPTEN?*/
		Ext.get('droppable').un(); //@TODO
		Ext.get('okWindow').un('click');	//@TODO

		
//		Ext.get('audioPlayButton').un('click', playAudio());
		Ext.getBody().unmask();
		playMakeAjaxRequest();
//		alert('Clicked: ' + okDiv.dom.hidden);
	}
}

