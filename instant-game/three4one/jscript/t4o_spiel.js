/**
Three4One -- t4o_spiel.js

Main Module

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
@subpackage Game
@author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
@version 2.3
@copyright Copyright (c) 2011, Domes

**/

var okIndex, errIndex1, errIndex2;
var okCount = 0, errCount = 0;
var drop, drag1, drag2, drag3;
var okBild;
var tabBar;
var t4oConfig, t4oDb, copyrightObj, t4oStatistics, t4oOkWindow, t4oCounter, t4oInfoWindow;
var titleBar;
var countStore;
var countModel;
var today;
var serverAddress = '';
//var serverAddress = 'localhost';
//var serverAddress = 'https://extranet1.hueber.de/Sencha/BWB-Spiel/';
//var serverAddress = 'http://192.168.160.215/Sencha/BWB-Spiel/';
var version = "V2.4 BUILD 1";
var progName = 'Three4One';

if(navigator.userAgent.match(/iPhone/i)) {
  document.write("<link type=\"text\/css\" rel=\"stylesheet\" media=\"all\" href=\"css/t4o_spiel-iphone.css\" charset=\"utf-8\" \/>");
}

//LZW-compress a string
function lzw_encode(s) {
  var dict = {};
  var data = (s + "").split("");
  var out = [];
  var currChar;
  var phrase = data[0];
  var code = 256;
  for (var i=1; i<data.length; i++) {
    currChar=data[i];
    if (dict[phrase + currChar] != null) {
      phrase += currChar;
    }
    else {
      out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
      dict[phrase + currChar] = code;
      code++;
      phrase=currChar;
    }
  }
  out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
  for (var i=0; i<out.length; i++) {
    out[i] = String.fromCharCode(out[i]);
  }
  return out.join("");
}

//Decompress an LZW-encoded string
function lzw_decode(s) {
  var dict = {};
  var data = (s + "").split("");
  var currChar = data[0];
  var oldPhrase = currChar;
  var out = [currChar];
  var code = 256;
  var phrase;
  for (var i=1; i<data.length; i++) {
    var currCode = data[i].charCodeAt(0);
    if (currCode < 256) {
      phrase = data[i];
    }
    else {
      phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
    }
    out.push(phrase);
    currChar = phrase.charAt(0);
    dict[code] = oldPhrase + currChar;
    code++;
    oldPhrase = phrase;
  }
  return out.join("");
}


function initShowDemo() {
  var lang = t4oConfig.confParam.configParamsStore.first().get('lang');
  var ret =  t4oConfig.confAccess.checkIfValidByLang(lang);
  return ret;
};
function showDemo(demo){
  if(demo)
  {
    Ext.getCmp('demoContainer').show();
  }
  else
  {
    Ext.getCmp('demoContainer').hide();
  }
};

function playground(display) {

  titleBar = new Ext.Toolbar(
      {
        dock : 'top',
        xtype: 'toolbar',
        title: '',
        baseCls: 'hueber-toolbar',
        id: 'toolbar-title-bar',
        titleCls: 'hueber-toolbar-title',
//        height: '35px',
        align: 'left',
        items: [ {
          xtype: 'container',
          dock: 'left',
          hidden: t4oConfig.getConfigParam('logoIcon') == '',
          html: '<img style="height: 35px;" src="' + t4oConfig.getConfigParam('logoIcon') + '" alt="">',
          id: 'logoIconContainer'
        },
        {
          xtype: 'spacer'
        },
        {
          xtype: 'container',
          dock: 'center',
          html: 'DEMO',
          id: 'demoContainer'
        },
        {
          xtype: 'container',
          dock: 'center',
          html: 'R',
          hidden: true,
          id: 'recordContainer'
        },
        {
          xtype: 'spacer'
        },
        {
          xtype: 'container',
          ui: 'hueber',
          dock: 'right',
          stretch: false,
          html: 'unknown',
          id: 'dataMode',
          style: {
            'font-size': '8px',
            'color': 'white',
            'margin-top': 'auto',
            'text-align': 'right'
          }
        }]
      });

  t4oConfig.confAccess.on('accesscodevalid', function(isValid) {
    showDemo(!isValid);
  });

  t4oConfig.confParam.on('onpackageselect', function(packageId) {
    var logoIcon = t4oConfig.getConfigParam('logoIcon');
    if ( logoIcon != '' )
    {
      var iconImg = Ext.get('logoIconContainer').down('img');
      iconImg.set({src: logoIcon});
      Ext.get('logoIconContainer').show();
    }
    else
    {
      Ext.get('logoIconContainer').hide();
    }
  });
  
  var tabPanel = new Ext.TabPanel({
    fullscreen: true,
    tabBar: {
      baseCls: 'hueber',
      ui: 'hueber',
      dock: 'bottom',
      iconMask: true,
      showAnimation: 'slide',
      layout: {
        ui: 'hueber',
        pack: 'center'
      }
    },
    cardSwitchAnimation: {
      type: 'slide',
      cover: true
    },
    defaults: {
      scroll: false,
      iconMask: true,
      ui: 'dark'
    },
//  sortable  : true,
    id : 'content',
    layout: {
      type: 'vbox',
      align: 'left'

    },
    dockedItems: [
                  titleBar
                  ],                        
                  items: [
                          playPanel,
                          t4oConfig.configTabPanel
                          ],
                          listeners : {
                            orientationchange : function(obj, orientation, width, height) {
                              obj.doLayout();
                              obj.getTabBar().doComponentLayout();
                              return true;
                            },
                            beforecardswitch: function(myObj, newCard, oldCard, index, animated)
                            {
                              if ( newCard.getId() == 'spiel' )
                              {
                                tabBar.getDockedComponent('actionButton').show();
                                tabBar.doComponentLayout();
                              }
                              else if ( newCard.getId() == 'config' )
                              {
                                while (t4oConfig.configTabPanel.items.indexOf(t4oConfig.configTabPanel.getActiveItem()) > 0) {
                                  t4oConfig.configTabPanel.onBackTap();
                                }
                                tabBar.getDockedComponent('actionButton').hide();
                              } 
                            }
                          }
  });
    
  if(initShowDemo())
  {
    Ext.getCmp('demoContainer').show();
  }
  else
  {
    Ext.getCmp('demoContainer').hide();
  }
  tabBar = tabPanel.getTabBar();

  tabBar.addDocked({
    xtype: 'button',
    ui: 'hueber',
    iconMask: true,
    dock: 'left',
    stretch: false,
    iconCls: 'refresh',
    handler: playMakeAjaxRequest,
    align: 'left',
    text: _('Reload'),
    id: 'actionButton'
  });

  tabBar.addDocked({
    xtype: 'container',
    ui: 'hueber',
    iconMask: true,
    dock: 'right',
    stretch: false,
    align: 'right',
    contentEl: resultContainer
  });

  Ext.get('toolbar-title-bar').on('doubletap', function() { alert('Y'); demos.Simulator.stopRecorder();}, this);
  tabPanel.doComponentLayout();
  tabBar.doComponentLayout();

  if (display == 'extra' )
  {
    tabPanel.setActiveItem(t4oConfig.configTabPanel);
  }
}

function createClasses()
{

  Ext.destroy(t4oConfig, t4oCounter, t4oStatistics, t4oOkWindow, t4oInfoWindow);
  
  t4oConfig = new T4OConfig({'serverAddress': serverAddress});

  if ( typeof t4oDb === "undefined" )
  {
    t4oDb = new T4ODb({'serverAddress': serverAddress});    
  }
  
  t4oCounter = new T4OCounter();
  t4oStatistics = new T4OStatistics();

  t4oOkWindow = new T4OOkWindow();
  t4oInfoWindow = new T4OInfoWindow();
}

Ext.setup ({
  tabletStartupScreen: 'pict/tablet_startup.png',
  phoneStartupScreen: 'pict/phone_startup.png',
//addMetaTags: false,   // FD20110606
  icon: 'icon.png',
  glossOnIcon: true,

  onReady: function() {

    document.title = progName;
    
    
    createClasses();
    
    startingPageObj = new T4OStartingPage();
    startingPageObj.show();
//    alert('ahhhhhhhhhhhhhhhhhhhhhhh');
  }  
});