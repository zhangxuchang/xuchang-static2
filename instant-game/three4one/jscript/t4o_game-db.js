/**
Three4One -- t4o_bwbdb.js

Three4One Database Class

Storage of play data for Three4One. 

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
@subpackage Database
@author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
@version 2.3
@copyright Copyright (c) 2011, Domes

**/

/**
 * 
 */
if (typeof T4ODb === "undefined") {
	T4ODb = {};
}

T4ODb = Ext.extend(Ext.util.Observable, { 	
	serverAddress : '',
	selectedLang: '',

	loadMask: {},
	modelObj: {},
	onlineStore: {},
	offlineStore: {},

	/**
	 * Anzahl der Datensätze für die Demoversion
	 */
	bwbDefaultDataCount: 0,
	
    abortOnlineLoad: function() {
      if (this.delayedTask === undefined) {
        this.delayedTask = new Ext.util.DelayedTask(function () {
          this.delayedTask = undefined;
          alert("Load Error");
          Ext.getBody().unmask();
          // Do tap stuff here
        }, this);

        //invoke (with reasonable time to cancel)
        this.delayedTask.delay(30000);
      }
    },
	
	/**
	 * Liefert Liste der vorhandenen Themen im Offline-Store
	 * 
	 * @returns Array mit Themen
	 */
	getLoadedThemesList: function() {
	  var themesLists = this.offlineStore.collect('thema');
	  
	  return themesLists;
	},
	
	/**
	 * Liefert aus dem Offline-Store die Spieldaten zu den übergebenen Indexen und der übergeben Sprache. 
	 * 
	 * Der Hash enthält folgende Schlüssel:
	 * <ul>
	 * <li>bild: Dateiname des anzuzeigenden Bildes</li>
	 * <li>oktext: Wort das zu dem angezeigten Bild gehört</li>
     * <li>fehltext1: 1. zufälliges Wort, das nicht zu dem angezeigten Bild gehört</li>
     * <li>fehltext2: 2. zufälliges Wort, das nicht zu dem angezeigten Bild gehört</li>
     * <li>b64bild: Anzuzeigendes Bild als base64 kodierter Datenstrom</li>
     * <li>soundexists: True wenn eine Sounddatei für dieses Wort existiert, false, wenn nicht</li>
     * </ul>
     * 
	 * @param indexArr Array mit 3 Elementen, deren Werte die Indexe in die Spieldatenbank sind. Range von 0 bis count(Datensätze)
	 * @param lang String, der die Sprache angibt (de, fr, es, en, it, pl, ru)
	 * @returns array mit Spieldaten
	 */
	getBwbData: function(indexArr, lang) {
		var modelArr = [];
		var data = {};
		
		Ext.each(indexArr, function(val) { modelArr.push(this.offlineStore.getAt(val)); }, this);
		
		data['bild'] = modelArr[0].get('bild');
		data['oktext'] = modelArr[0].get('lemma_' + lang);
		data['fehltext1'] = modelArr[1].get('lemma_' + lang);
		data['fehltext2'] = modelArr[2].get('lemma_' + lang);
		data['b64bild'] = modelArr[0].get('b64bild');
		data['soundexists'] = modelArr[0].get('soundexists');
		
		return data;
	},
	
	loadDemoData: function() {
      Ext.getBody().mask(_('Load demo data') + ' ...', 'x-mask-loading', false);
      this.bwbDefaultData.getProxy().extraParams = {
        'packageId': t4oConfig.getPackageId(),
        'GETDEMODATA': true
      };
      this.bwbDefaultData.load({
        scope   : this,
        callback: function(records, operation, success) {
            //the operation object contains all of the details of the load operation
            //console.log(records);
            this.addDefaultData();
            Ext.getBody().unmask();
        }
    });    	  
      
      this.addDefaultData();
      Ext.getBody().unmask();

	},
	loadData: function() {
	  Ext.getBody().mask(_('Load data') + ' ...', 'x-mask-loading', false);
	  this.loadMask = Ext.select('div.x-mask-loading');
	  this.onlineStore.getProxy().extraParams = {
	    'packageId': t4oConfig.getPackageId(),
		'codes[]'  : t4oConfig.confAccess.getAllCodes() };
	  this.resetStorage();
	  this.abortOnlineLoad();
	  this.onlineStore.load();	  
	},
	
	loadDataByLanguage: function(lang, email, code) {
	  Ext.getBody().mask(_('Loading')+ ' ' + lang + ' ...', 'x-mask-loading', false);
	  this.onlineStore.getProxy().extraParams = {
        'packageId': t4oConfig.getPackageId(),
		'email'    : email,
		'lang'     : lang,
		'code'     : code,
		'test[]'   : t4oConfig.confAccess.getAllCodes() };
	  this.onlineStore.load();
	},
	
	resetStorage: function ()
	{
		this.offlineStore.removeAll();
		this.offlineStore.getProxy().clear();
		for (var i=0 ; i< 2000; i++)
		{
		  try {
			this.offlineStore.getProxy().removeRecord(i);
		  }
		  catch(e) {
		  }
		}
		this.addDefaultData();
		this.offlineStore.sync();
	},

	getDataFromServer: function() {
		Ext.getBody().mask(_('Loading') + ' ...', 'x-mask-loading', false);
		this.onlineStore.load();		
		return true;
	},

    getTotalCount: function() {
      //alert(t4oConfig.getConfigParam('lang'));
      return this.offlineStore.getCount();
    },
	
    offlineDataAvailable: function() {
      return this.getTotalCount() > this.bwbDefaultDataCount;
    },

    addDefaultData: function() {
      this.offlineStore.sync();
      this.bwbDefaultData.each(function(record) {
        var recIdx = this.offlineStore.findExact('id',record.data.id);
        record.data.b64bild = lzw_encode(record.data.b64bild);
        delete record.data['localstoreId'];
        if ( recIdx == -1 )
        {
          this.offlineStore.add(record.data);
        }
        else
        {
          this.offlineStore.getAt(recIdx).set(record.data);
        }
      }, this);
      this.offlineStore.sync();
      
    },
	constructor: function(config) {

		Ext.apply(this, config);
		this.modelObj = new Ext.regModel('DBcontent', {
		  					idProperty: 'localstoreId',
								fields: [
								         	{name: 'localstoreId', type: 'int'},
									        {name: 'id',       type: 'int'},
									        {name: 'bild',     type: 'string'},
									        {name: 'lemma_de', type: 'string'},
									        {name: 'lemma_fr', type: 'string'},
									        {name: 'lemma_es', type: 'string'},
									        {name: 'lemma_en', type: 'string'},
									        {name: 'lemma_pl', type: 'string'},
									        {name: 'lemma_it', type: 'string'},
									        {name: 'lemma_tr', type: 'string'},
									        {name: 'lemma_ru', type: 'string'},
									        {name: 'wokla',    type: 'string'},
									        {name: 'b64bild',  type: 'string'},
                                            {name: 'thema',    type: 'string'},
                                            {name: 'soundexists',    type: 'string'},
									    ]
							});
		
		this.bwbDefaultData = new Ext.data.Store({
		  model: 'DBcontent',
//		  data : bwbDefaultDataArray
		  proxy: {
		    scope: this,
		    id  : 'bwbspieldb',
		    type: 'scripttag',
		    url: this.serverAddress + 'php/t4o_loaddata.php',
		    extraParams: { 
		      'GETDEMODATA': true,
		      'packageId'  : t4oConfig.getPackageId()
		    },
		    reader: new Ext.data.JsonReader({
		      root: 'data',
		      model: 'DBcontent',
		      successProperty: 'success'
		    })
		  },

		});
		this.bwbDefaultData.load();
		this.bwbDefaultDataCount = this.bwbDefaultData.getCount();

		this.offlineStore = new Ext.data.Store({
		    clearOnPageLoad: false,
		    model : 'DBcontent',
			proxy: {
				type: 'localstorage',
				id  : 'bwbspieldb'
			}
		});

		this.onlineStore = new Ext.data.Store({
		    model: 'DBcontent',
		    proxy: {
		    	scope: this,
				id  : 'bwbspieldb',
		        type: 'scripttag',
		        url: this.serverAddress + 'php/t4o_loaddata.php',
//				extraParams: { thema: 'Masse_Gewichte'  },
		         reader: new Ext.data.JsonReader({
		           root: 'data',
		    	    model: 'DBcontent',
		    	    successProperty: 'success'
		        })
		    },
	        timeout: 2000,
	        listeners: {
	            exception: {
	    		    scope: this,
	            	callback: function () {
			                console.log("I think we are offline");
			                this.offlineStore.load();
			                alert(_("Cannot load data, while offline!"));
			                Ext.getBody().unmask();
	            	}
	            }
	        }
		});		

		this.addEvents('bwbdbloaded');

		/*
		 * Filtert Offline-Spieledaten nach Verfügbarkeit
		 * 
		 * Es werden nur solche Daten gefiltert, die einen Eintrag in der jeweiligen Sprache besitzen
		 * Dies sind im Normalfall für gekaufte Sprachen alle und für Demo-Sprachen die Default-Daten. 
		 */
		this.filterByLanguage = function(lang) {
		  this.selectedLang = lang;
		  this.offlineStore.filterBy(function(record, id) {
		    var x = record.data['lemma_' + this.selectedLang];
		    return (x != '');
		  }, this);
		},
		
		
		this.onlineStore.addListener('load', function (obj, records, successful) {
		  // successful liefert für scripttag-Proxy immer true zurück, ausser bei timeout, aber der wird im exception-handler abgefangen
		  // Den "richtigen" Returcode gibt es unter obj.getProxy().getReader().rawData.success
		  if ( obj.getProxy().getReader().rawData.success )
		  {
		    var insertCount = 0;
		    
            console.log("I think we are online");

            this.offlineStore.proxy.clear();
            this.addDefaultData();
            this.offlineStore.load();
            Ext.each(records, function (record) {
                // @TODO: Anzeige funktioniert nicht !!!
                this.loadMask.elements[0].innerHTML = _('Loading data') + ' ...<BR>' + (insertCount++);
                var recId = this.offlineStore.findExact('id',record.data.id);
                record.data.b64bild = lzw_encode(record.data.b64bild);
              	if ( recId == -1 )
              	{
                  this.offlineStore.add(record.data);
              	}
              	else
              	{
              	  this.offlineStore.getAt(recId).set(record.data);
              	}
            }, this);
            this.offlineStore.sync();
			//alert("Data Load OK !");
            t4oConfig.resetOnlineFlag();
			this.fireEvent('bwbdbloaded', records);
		  }
		  else
		  {
			alert(_("Data Load Error!") + "\r\n" + obj.getProxy().getReader().rawData.errorMsg);
		  }
          if (this.delayedTask !== undefined) {
            this.delayedTask.cancel();
            this.delayedTask = undefined;
          }

		  Ext.getBody().unmask();
          t4oConfig.confAccess.accessInfoWindow.show();
		}, this);

        this.offlineStore.addListener('load', function() {
          if ( this.getTotalCount() < this.bwbDefaultDataCount )
          {
            this.addDefaultData();
          }
        }, this);
        
		this.offlineStore.load();
	    this.filterByLanguage(t4oConfig.getConfigParam('lang'));
		
		t4oConfig.confParam.on('onpackageselect', function(x) { 
		  this.resetStorage();
		  this.loadDemoData();
        }, this);
	  }
	});
