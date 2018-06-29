/**
Three4One -- t4o_conf-panel.js

Three4One Config Panel Class

Configuration (and extra) entries of Three4One. 

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
@subpackage Configuration
@author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
@version 2.3
@copyright Copyright (c) 2011, Domes

**/
if (typeof T4OConfig === "undefined") {
	T4OConfig = {};
}

T4OConfig = Ext.extend(Ext.util.Observable, {
	store: {},
  configTabPanel: {},
  confData: {},

  confReset: {},
  confParam: {},
  confAccess: {},
  
  destroy: function() {
	
  },
  
  // store with data
  data: {
	    text: 'Config',
	    items: [{
	        text: _('Configuration'),
	          id: 'Einstellungen',
	        leaf: true
	    	},{
	        text: _('Shop'),
	          id: 'Shop',
	        items: [{
	            text: '<div class="langShop"><img src="pict/flags/de.png" /></div>Deutsch',
	              id: 'de',
	        langCode: 'de', 
	            leaf: true
	        },{
	            text: '<div class="langShop"><img src="pict/flags/fr.png" /></div>Français',
              id: 'fr',
	        langCode: 'fr', 
	            leaf: true
	        },{
	            text: '<div class="langShop"><img src="pict/flags/en.png" /></div>English',
              id: 'en',
	        langCode: 'en', 
	            leaf: true
	        },{
	            text: '<div class="langShop"><img src="pict/flags/es.png" /></div>Español',
              id: 'es',
	        langCode: 'es', 
	            leaf: true
	        },{
	            text: '<div class="langShop"><img src="pict/flags/pl.png" /></div>Polski',
              id: 'pl',
	        langCode: 'pl', 
	            leaf: true
	        },{
	            text: '<div class="langShop"><img src="pict/flags/it.png" /></div>Italiano',
              id: 'it',
	        langCode: 'it', 
	            leaf: true
	        },{
	            text: '<div class="langShop"><img src="pict/flags/tr.png" /></div>Türk',
              id: 'tr',
	        langCode: 'tr', 
	            leaf: true
	        },{
	            text: '<div class="langShop"><img src="pict/flags/ru.png" /></div>Pусский',
              id: 'ru',
	        langCode: 'ru', 
	            leaf: true
	        }]
	    },{
	        text: _('Reset'),
	          id: 'Reset',
	        items: [{
	          text: '<div class="resetSpacer"></div>' + _('Configuration'),
	            id: 'resetConfiguration',
	          leaf: true
	        },{
	          text: '<div class="resetSpacer" id="resetData"></div>' + _('Offline data'),
            id: 'resetOfflineData',
	          leaf: true
	        },{
	          text: '<div class="resetSpacer"></div>' + _('Success counter'),
            id: 'resetSuccessCounter',
	          leaf: true
	        }
	        ]
	    },{
	      text: _('Statistics'),
	      leaf: true,
	        id: 'Statistik'
	    }]
	},
  
  getConfigParam: function(paramName) {
	return this.confParam.getConfigParam(paramName);
	},

	getOnlineFlag: function() {
	  return this.confParam.getOnlineFlag();
	},
	
	getPackageId: function() {
	  return this.confParam.getPackageId();
	},
	
	resetOnlineFlag: function() {
	  return this.confParam.resetOnlineFlag();
	},
	
	getDataUrl: function() {
	  return this.confParam.getDataUrl();
	},
	
  constructor: function(config)
  {
	var me = this;

	Ext.apply(this, config);
	
    this.confAccess = new T4OConfigAccess(this);
	this.confReset = new T4OConfigReset(this);
	this.confParam = new T4OConfigParam(this);

	Ext.regModel('ListItem', {
	    fields: [{name: 'text', type: 'string'},
               {name: 'langCode', type: 'string' },
               {name: 'id', type: 'string' },
	    		]
	});
	
	var store = new Ext.data.TreeStore({
	    model: 'ListItem',
	    root: this.data,
	    proxy: {
	        type: 'memory',
	        reader: {
	            type: 'tree',
	            root: 'items'
	        }
	    }
	});
	


	
//	this.accessCode = new T4OConfigAccess();
	
	this.configTabPanel = new Ext.NestedList({
	    fullscreen: true,
		title: _('Extras'),
		iconCls: 'more',
		id : 'config',
		selectedItemCls: 'hueber-list-selected',
		cls: 'hueber-conf-list',
	    displayField: 'text',
	    store: store,
	    hidden: true,
//	    getItemTextTpl: function(node) {
//	        return '{id}:{text}';
//	    },
	    getItemTextTpl: function() {
	      return '<div class="iconDiv" id="{id}IconDiv"></div>{' + this.displayField + '}';
	    },
	    getDetailCard: function(item, parent) { 
	        var itemData = item.attributes.record.data; 
	        if ( typeof parent.attributes.record != 'undefined' )
	        {
    	        var parentData = parent.attributes.record.data;
    	        if ( parentData['id'] == 'Shop')
    	        {
    	          this.toolbar.setTitle(itemData['text']);
      	          this.backButton.setText(parentData.text); 
    	          me.confAccess.setFlag(itemData);
      	          return me.confAccess.accessCodeDetailCard; 
    	        }
	        }
	        else if ( itemData['id'] == 'Einstellungen' )
	        {
  	          this.backButton.setText(this.title); 
	          return me.confParam.configDetailCard;
	        }
	        else if ( itemData['id'] == 'Statistik' )
	        {
  	          this.backButton.setText(this.title); 
	          return t4oStatistics;
	        }
	    },
	
	  listeners: {
			cardswitch: {
			  scope: this,
			  fn: function(obj, newCard, oldCard, animation) {
			  	var e=1;
					if ( newCard['text'] )
					{
					  obj.toolbar.setTitle(newCard['text']);
					}
					else if(newCard.title){
						obj.toolbar.setTitle(newCard.title);
					}
			  }
			},
//			show: {
//			  scope: this,
//			  fn: this.addListItemDiv
//			},
			leafitemtap: {
			  scope: this,
			  fn: function(subList, subIdx, el, e, card)
			  {
//					if ( ['Erfolgszähler', 'Offline Daten', 'Konfiguration'].indexOf(el.textContent) != -1 )
			    if ( ['resetSuccessCounterIconDiv', 'resetOfflineDataIconDiv', 'resetConfigurationIconDiv'].indexOf(Ext.get(el).down('.iconDiv').id) != -1 )
					{
					  this.confReset.show(el.textContent, Ext.get(el).down('.iconDiv').id);
					}
			  }
			},
			listchange: {
				scope: this,
				fn: function (obj, listitem)
				{
					this.addListItemDiv(item);
					var x = e;
				}
			},
			itemtap: {
				scope: this,
				fn: function () {
					var e=1;
				}
			}
	  }
	});
	
    //this.confParam.resetOnlineFlag();

	}
});