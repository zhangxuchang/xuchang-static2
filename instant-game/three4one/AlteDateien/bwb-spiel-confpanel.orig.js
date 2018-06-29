/**
 * Three4One Config Panel Class
 *
 * Configuration (and extra) entries of Three4One. 
 *
 * @package Three4One
 * @subpackage Copyright
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * @author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
 * @version 2.0
 * @copyright Copyright (c) 2011, Domes
 *
 */
if (typeof T4OConfig === "undefined") {
	T4OConfig = {};
}

T4OConfig = Ext.extend(Object, {
	store:       {},
	getAnimValue: function(){
	  		var result;
	  		
	  		try
	  		{
	  		  result = this.store.first().get('animationFlag');
	  		}
	  		catch(e)
	  		{
	  		  result = !Ext.is.Android;
	  		}
	  		return (result);
	}, 
	confData:  {lang: "de",animationFlag: !Ext.is.Android },
	configPanel: {},



	formBase:	 {},

	resetForm:   {},

	showResetForm: function () {
		this.resetForm.show();
	},

	getConfigParam: function(paramName) {
		return this.store.first().get(paramName);
	},

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

	resetConfig: function() {
		for (var key in this.confData) {
			this.store.first().set(key, this.confData[key]);
		}				
//		this.store.insert(this.store.indexOfId(1), this.confData);
		this.store.sync();
		this.configPanel.loadModel(this.store.first());
		this.modifyLanguageSelectionField();
		
		this.store.proxy.clear();
	},

	constructor: function() {
		Ext.apply(this, {confData: this.confData});
		
		
		Ext.regModel('langSelect', {
			fields: [
			         {name: 'lang',     type: 'string'},
			         {name: 'title',    type: 'string'}
			         ]
		});

		var langStore = new Ext.data.JsonStore({
			data : [
			        { lang : 'de', title : '<img src="pict/flags/de.png"> Deutsch'},
			        { lang : 'fr', title : '<img src="pict/flags/fr.png"> Français'},
			        { lang : 'en', title : '<img src="pict/flags/en.png"> English'},
			        { lang : 'es', title : '<img src="pict/flags/es.png"> Español'},
			        { lang : 'pl', title : '<img src="pict/flags/pl.png"> Polnisch'},
			        { lang : 'it', title : '<img src="pict/flags/it.png"> Italiano'},
			        { lang : 'tr', title : '<img src="pict/flags/tr.png"> Türkisch'},
			        { lang : 'ru', title : '<img src="pict/flags/ru.png"> Russisch'},
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
			         {name: 'animationFlag', type: 'boolean'}
			         ] 
		});


		this.store = new Ext.data.Store({
			model: "T4O-Config",
			autoSave: true,
			proxy: {
				type: 'localstorage',
				id  : 'ConfigParams'
			}
		});

		this.store.load({
			scope: this,
			callback: function(records, operation, success) 
			{
				// the operation object contains all of the details of the load
				// operation
				if (records["length"] == 0)
				{
					this.store.add(this.confData);
					this.store.sync();				
				}	
			}
		});

		var resetFormToolbar = {
				xtype: 'toolbar',
				dock: 'bottom',
				items: [
				        {
				        	//text: 'Cancel',
				        	icon: 'pict/egore_Thumb_Down_small.png',
				        	iconCls: 'confResetCancelImg',
				        	scope: this,
				        	handler: function() {
				        		this.resetForm.hide();
				        	}
				        },
				        {xtype: 'spacer'},
				        {
				        	//text: 'Reset items',
				        	icon: 'pict/egore_Thumb_Up_small.png',
				        	iconCls: 'confResetOkImg',
				        	ui: 'confirm',
				        	scope: this,
				        	handler: function() {
				        		var valueArr = this.resetForm.getValues();
				        		if ( valueArr['configuration'] != null )
				        		{
				        			this.resetConfig();
				        		}
				        		if ( valueArr['offlinedata'] != null )
				        		{
				        			t4oDb.resetStorage();
				        		}
				        		if ( valueArr['counter'] != null )
				        		{
				        			t4oCounter.resetCounter()
				        		}
				        		this.resetForm.hide();
				        	}
				        }
				        ]
		};

		this.resetForm =  new Ext.form.FormPanel({
			floating: true,
			modal: true,
			centered: true,
			width: (Ext.is.Phone ? 260 : 400),
			height: (Ext.is.Phone ? 220 : 400),
			styleHtmlContent: true,
			scroll: 'vertical',
			cls: 'htmlcontent',
			dockedItems: [ resetFormToolbar ],

			defaults: {
				labelWidth: '80%',
				checked: true
			},
			items: [
			        {
			        	xtype: 'checkboxfield',
			        	name : 'configuration',
			        	label: 'Konfiguration'

			        },
			        {
			        	xtype: 'checkboxfield',
			        	name : 'offlinedata',
			        	label: 'Offline Daten'
			        },
			        {
			        	xtype: 'checkboxfield',
			        	name : 'counter',
			        	label: 'Erfolgszähler'
			        }
			        ]
		});

		formBase  = {
				title: 'Konfig',
				iconCls: 'settings',
				id : 'config',
				fullscreen: true,
				standardSubmit: false,
				scroll: 'vertical',
				listeners: {
					afterlayout: {
						scope: this,
						fn : function(thisObj, layout) {
							this.modifyLanguageSelectionField();
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
								this.configPanel.updateRecord(this.store.first(), true);
								this.store.sync();
							}
						}
					}
				},
				items: [
				        {
				        	xtype: 'toolbar',
				        	name: 'confToolbar',
				        	height: '54px',
				        	margin: '5 0 5 0',
				        	baseCls: 'hueber-toolbar',
				        	titleCls: 'hueber-toolbar-title',
				        	defaults: {
				        		ui: 'hueber',
				        		dock: 'left',
		        	        	stretch: false,
		        	        	align: 'left',
		        	        	margin: '0 0 0 0'
				        	},
				        	items: [
				        	        {
				        	        	xtype: 'button',
				        	        	iconCls: 'reply',
				        	        	iconMask: true,
				        	        	scope: this,
				        	        	handler: this.showResetForm,
				        	        	text: 'Zurücksetzen',
				        	        	id: 'confResetButton'
				        	        },
				        	        {
				        	        	xtype: 'spacer'
				        	        },
                          {
                            xtype: 'button',
	        	        	icon: 'pict/statistics_cedric_bosdon_01.png',
	        	        	iconMask: false,
                            scope: t4oStatistics,
                            handler: t4oStatistics.showStats,
                            text: 'Statistiken',
                            id: 'confShowStatsButton'
                          },
				        	        {
				        	        	xtype: 'button',
				        	        	icon: loadFromServerImg,
				        	        	iconMask: false,
			                            scope: bwbThemes,
//			                            handler: bwbThemes.show,
				        	        	text: 'Laden',
				        	        	id: 'confLoadDataButton'
				        	        }
                          ]
				        },

				        {
				        	xtype: 'hiddenfield',
				        	name:  'confid',
				        	id:	'configIdHiddenField'
				        },
				        {
				        	// margin: '5 5 5 5',
				        	margin: '5 0 5 0',
				        	xtype: 'selectfield',
				        	name : 'lang',
				        	label: 'Language<div style="float: right;" id="flagsImgDiv"><img  src="pict/flags/de.png"></div>',
				        	valueField : 'lang',
				        	displayField : 'title',
				        	store : langStore,
				        	hiddenName: 'langHidden',
				        	hidden: false,
				        	id: 'langInput',
				        	listeners: {
				        		afterlayout : {
				        			scope: this,
				        			fn : function(obj){
				        				alert('value vorher: ' + inputValueVorher + ', nachher: ' + obj.fieldEl.dom.value );
				        			}
				        		},
				        		change: {
				        			scope: this,
				        			fn : function(obj, value){
				        				this.configPanel.updateRecord(this.store.first(), true);
				        				this.store.sync();
				        				this.modifyLanguageSelectionField();
				        			}
				        		}
				        	}
				        },
				        {
				        	xtype: 'togglefield',
				        	name: 'animationFlag',
				        	label: 'Animationen: ',
				        	hidden: false,
				        	scope: this,
				        	value: this.getAnimValue(),
//				        	value: true,
				        	id: 'animationFlagInput',
				        	listeners: {
				        		change: {
				        			scope: this,
				        			fn : function(slider, thumb, newValue){
				        				//alert('getAnimValue is ' + this.getAnimValue());
				        				this.store.first().set('animationFlag', newValue);
				        				this.store.sync();
				        				//alert('changed:' + newValue);
				        			},
				        		}
				        	}
				        }
				        ]


		};


		this.configPanel = new Ext.form.FormPanel(formBase);

		this.configPanel.load(this.store.first());

	}
});