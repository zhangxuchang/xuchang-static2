/**
Three4One -- t4o_conf-param.js

Parameter configuration class. 

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
if (typeof T4OConfigParam === "undefined") {
  T4OConfigParam = {};
}

T4OConfigParam = Ext.extend(Ext.Component, {

    confPanelObj: {},
  	configParamsStore: {},
  	configPackageStore: {},
  	
	resetConfigParam: function() {
		for (var key in this.confData) {
			this.configParamsStore.first().set(key, this.confData[key]);
		}				
		this.configParamsStore.sync();
        this.setConfigParam('dataUrl', this.configPackageStore.findRecord('packageId', this.getConfigParam('packageId')).get('dataUrl'));
        this.setConfigParam('copyrightNotice', this.configPackageStore.findRecord('packageId', this.getConfigParam('packageId')).get('copyrightNotice'));
		
		if (this.configDetailCard.rendered )
		{
  		this.configDetailCard.loadModel(this.configParamsStore.first());
  		this.configDetailCard.modifyLanguageSelectionField();
		}
//		this.configParamsStore.proxy.clear();
	},
  
	  getConfigParam: function(paramName) {
	  	var model = this.configParamsStore.first()
	  	var ret = model['data'][paramName];
			return ret;
		},

	  setConfigParam: function(paramName, value) {
	  	var model = this.configParamsStore.first()
	  	ret = model['data'][paramName];
	  	model.set(paramName, value);
	  	
	  	return ret;
	  },

	  getPackageId: function(){
	    return this.getConfigParam('packageId');
	  },
	  
	  getDataUrl: function() {
	    var dataUrl = this.getConfigParam('dataUrl');
	    if ( dataUrl.length > 0 &&  ! dataUrl.match("/$"))
	    {
	      dataUrl += "/";
	    }
	    return dataUrl;
	  },
	  
	  setOnlineFlag: function(value) {
		return this.setConfigParam('onlineFlag', value);
	  },

	  resetOnlineFlag: function() {
        if ( !t4oDb.offlineDataAvailable() )
        {
          this.confPanelObj.confAccess.addListener('accesscodevalid', function(isValid) {
            if ( isValid == true )
            {
              this.setOnlineFlag(true);
            }
          }, this, {single: true, scope: this } );
          this.confPanelObj.confAccess.checkIfValidByLang(this.getConfigParam('lang'));
        }
	  },
	  testEl: [{xtype: 'button', text: 'Test', id: 'testEl'}],

	  constructor: function(confPanelObj)
	  {
	    me = this;
	    
	    this.confPanelObj = confPanelObj;
	    
	    this.addEvents('onlangselect', 'onpackageselect');
	    
		this.confData = {
			 lang:          "de", 
       animationFlag: !Ext.is.Android, 
			 onlineFlag:    true,
			 packageId:      2,
			 dataUrl:        '',
			 t4oLang:        'de',
			};

		Ext.regModel('langSelect', {
			fields: [
			         {name: 'lang',     type: 'string'},
			         {name: 'title',    type: 'string'}
			         ]
		});
		
		var langStore = new Ext.data.JsonStore({
			data : [
			        { lang : 'de', title : '<img class="selectFlagsImgDiv" src="pict/flags/de.png"> Deutsch'},
			        { lang : 'fr', title : '<img class="selectFlagsImgDiv" src="pict/flags/fr.png"> Français'},
			        { lang : 'en', title : '<img class="selectFlagsImgDiv" src="pict/flags/en.png"> English'},
			        { lang : 'es', title : '<img class="selectFlagsImgDiv" src="pict/flags/es.png"> Español'},
			        { lang : 'pl', title : '<img class="selectFlagsImgDiv" src="pict/flags/pl.png"> Polski'},
			        { lang : 'it', title : '<img class="selectFlagsImgDiv" src="pict/flags/it.png"> Italiano'},
			        { lang : 'tr', title : '<img class="selectFlagsImgDiv" src="pict/flags/tr.png"> Türk'},
			        { lang : 'ru', title : '<img class="selectFlagsImgDiv" src="pict/flags/ru.png"> Pусский'},
			        ],
			        model : 'langSelect',
			        autoLoad : true,
			        autoDestroy : true
		});

		var t4oConfigModel = Ext.regModel('T4O-Config', {
			idProperty: 'confid',
			fields: [
			         {name: 'confid',   type: 'int'},
			         {name: 'lang', type: 'string'},
			         {name: 'animationFlag', type: 'boolean'},
			         {name: 'onlineFlag', type: 'boolean'},
                     {name: 'packageId', type: 'int'},			         
                     {name: 'dataUrl', type: 'string'},
                     {name: 'copyrightNotice', type: 'string'},
                     {name: 'logoIcon', type: 'string'},
                     {name: 't4oLang', type: 'string'}
			         ] 
		});

		this.configParamsStore = new Ext.data.Store({
			model: "T4O-Config",
			autoSave: true,
			proxy: {
				type: 'localstorage',
				id  : 'ConfigParams'
			}
		});

		this.configParamsStore.load({
			scope: this,
			callback: function(records, operation, success) 
			{
				// the operation object contains all of the details of the load
				// operation
				if (records["length"] == 0)
				{
					this.configParamsStore.add(this.confData);
					this.configParamsStore.sync();				
				}	
			}
		});

		/*
		 * Package Store
		 */
	      var packageModel = Ext.regModel('T4O-Package', {
            idProperty: 'confid',
            fields: [
                     {name: 'id',            type: 'int'},
                     {name: 'packageId',     type: 'int'},
                     {name: 'packageName',   type: 'string'},
                     {name: 'dataUrl',       type: 'string'},
                     {name: 'copyrightNotice', type: 'string'},   
                     {name: 'logoIcon', type: 'string'},
                     {name: 'cssTag', type: 'string'}
                     ]
        });

        this.configPackageStore = new Ext.data.Store({
            model: "T4O-Package",
            autoSave: true,
            proxy: {
              type: 'scripttag',
              id  : 'T4OPackageDb',
              url: this.confPanelObj.serverAddress + 'php/t4o_spiel.php?command=GETPACKAGES',
              reader: new Ext.data.JsonReader({
                  root: 'data'
              }),
//              timeout: 5000,
              listeners: {
                  exception:{
                      scope: this,
                      fn : function() {
                      }
                  }
              }
          }
        });

        this.configPackageStore.load({
            scope: this,
            callback: function(records, operation, success) 
            {
              this.setConfigParam('dataUrl', this.configPackageStore.findRecord('packageId', this.getConfigParam('packageId')).get('dataUrl'));
              this.setConfigParam('copyrightNotice', this.configPackageStore.findRecord('packageId', this.getConfigParam('packageId')).get('copyrightNotice'));
              this.setConfigParam('logoIcon', this.configPackageStore.findRecord('packageId', this.getConfigParam('packageId')).get('logoIcon'));
              this.configParamsStore.sync();
            }
        });

		this.getAnimValue = function(){
			var result;
			
			try
			{
			  result = this.configParamsStore.first().get('animationFlag');
			}
			catch(e)
			{
			  result = !Ext.is.Android;
			}
			return (result);
		};
			
		this.getOnlineFlag = function(){
			var result;
			
			try
			{
			  result = this.configParamsStore.first().get('onlineFlag');
			}
			catch(e)
			{
			  result = navigator.onLine;
			}
			return (result);
		}; 
			
	    this.showDemoHint = function(isValid) {
	        if ( isValid )
	        {
	          alert('LOAD CODE');
	        }
	        else
	        {
	          alert('DEMO');
	        }       
	      };
	      

	      this.configDetailCard   = new Ext.form.FormPanel({
			id : 'configDetailCardPanel',
			scroll: 'vertical',
			cls: 'hueber-config-detail-card',
			title: _('Configuration'),
			text: _('Configuration'),
			modifyLanguageSelectionField : function(){
				try {
					var obj = Ext.get('langInput').select('input').first();
					var re = new RegExp("(<[^>]*>) *");
			
					var inputValueVorher = obj.dom.value;
					var inputValueNachher = inputValueVorher.replace(re,'');
					var pictTag = re.exec(inputValueVorher)[1];
					if ( pictTag != '' )
					{
						Ext.get('flagsImgDiv').update(pictTag);
					}
					obj.dom.value = inputValueNachher;
				}
				catch(e) {};
			},
			
			listeners: {
	        	beforeDestroy: function() { 
	        	    t4oConfig.confAccess.un('accesscodevalid', this.showDemoHint);
		        	  return false; //for some reason, if i dont do this, the card wont get recreated after the first time 
		        	},
	        	  	show: {
	        	  	  scope: this,
	        	  	  fn: function(obj) {
	        	  	    this.resetOnlineFlag();
//                        t4oConfig.confAccess.on('accesscodevalid', this.showDemoHint);
                        obj.modifyLanguageSelectionField();
//	        	  		t4oInfoWindow.showInfoWindow('test', [{handler: 'show', fn: (function(){alert('function')})}], this.testEl);
                        if ( t4oDb.getTotalCount() <= 3 )
                        {
                          Ext.getCmp('onlineFlagInput').setValue(1);
                          Ext.getCmp('onlineFlagInput').disable();
                        }
                        else
                        {
                          Ext.getCmp('onlineFlagInput').enable();
                        }
	        	  	  }
	        	  	}, 
				afterlayout: {
					scope: this,
					fn : function(thisObj, layout) {
					  	thisObj.load(this.configParamsStore.first());
					}
				}
			},
			defaults: {
				labelWidth: '45%',
				autoComplete: false,
				autoCapitalize: false,
				autoCorrect: false,
				autofocus: false,
				grouped: false,
				listeners: {
					change: {
						scope: this,
						fn : function(){
							this.configDetailCard.updateRecord(this.configParamsStore.first(), true);
							this.configParamsStore.sync();
						}
					}
				}
			},
			items: [
                    {
                      // margin: '5 5 5 5',
                      margin: '5 0 5 0',
                      xtype: 'selectfield',
                      name : 'packageId',
                      label: _('Package'),
                      valueField : 'packageId',
                      displayField : 'packageName',
                      store : this.configPackageStore,
                      id: 'packageIdInput',
                      listeners: {
                          change: {
                              scope: this,
                              fn : function(obj, value){
                                      this.configDetailCard.updateRecord(this.configParamsStore.first(), true);
                                      this.setConfigParam('dataUrl', this.configPackageStore.findRecord('packageId', value).get('dataUrl'));
                                      this.setConfigParam('copyrightNotice', this.configPackageStore.findRecord('packageId', value).get('copyrightNotice'));
                                      this.setConfigParam('logoIcon', this.configPackageStore.findRecord('packageId', value).get('logoIcon'));
                                      this.configParamsStore.sync();
                                      t4oConfig.confAccess.checkIfValidByLang(this.getConfigParam('lang'));
                                      this.fireEvent('onpackageselect', value);
                                      copyrightObj.show();
                              }
                          }
                      }
                  },
                  {
                    // margin: '5 5 5 5',
                    margin: '5 0 5 0',
                    xtype: 'selectfield',
                    name : 'lang',
                    label: _('Language') + '<div style="float: right;" id="flagsImgDiv"><img  src="pict/flags/de.png"></div>',
                    valueField : 'lang',
                    displayField : 'title',
                    store : langStore,
                    hiddenName: 'langHidden',
                    hidden: false,
                    id: 'langInput',
                    listeners: {
                        change: {
                            scope: this,
                            fn : function(obj, value){
                              this.configDetailCard.updateRecord(this.configParamsStore.first(), true);
                                    this.configParamsStore.sync();
                                    this.configDetailCard.modifyLanguageSelectionField();
                                    this.fireEvent('onlangselect', t4oConfig.confAccess.checkIfValidByLang(value));
                                    t4oDb.filterByLanguage(this.getConfigParam('lang'));                                
                            }
                        }
                    }
                },
			        {
			        	xtype: 'togglefield',
			        	name: 'animationFlag',
			        	label: _('Animation'),
			        	hidden: false,
			        	scope: this,
			        	value: this.getAnimValue(),
//			        	value: true,
			        	id: 'animationFlagInput',
			        	listeners: {
			        		change: {
			        			scope: this,
			        			fn : function(slider, thumb, newValue){
			        				//alert('getAnimValue is ' + this.getAnimValue());
			        				this.configParamsStore.first().set('animationFlag', newValue);
			        				var win = Ext.get('okWindow');
			        				if(!newValue && win){
			        					win.removeCls('transition');
			        				}
			        				else if(win){
			        					win.addCls('transition');
			        				}
			        				this.configParamsStore.sync();
			        				//alert('changed:' + newValue);
			        			}
			        		}
			        	}
			        },
			        {
			        	xtype: 'togglefield',
			        	name: 'onlineFlag',
			        	label: _('Online'),
			        	hidden: false,
			        	scope: this,
			        	value: this.getOnlineFlag(),
//			        	disabled:  t4oDb.getTotalCount() <= 3 /* false */, 
//			        	value: true,
			        	id: 'onlineFlagInput',
			        	listeners: {
			        		change: {
			        			scope: this,
			        			fn : function(slider, thumb, newValue){
			        				//alert('getAnimValue is ' + this.getAnimValue());
			        				this.configParamsStore.first().set('onlineFlag', newValue);
			        				this.configParamsStore.sync();
			        				if ( !newValue )
			        				{
			        				  t4oConfig.confAccess.checkIfValidByLang(this.getConfigParam('lang'));
			        				}
			        			}
			        		}
			        	}
			        }         
			        ]
		});
	  }
});
