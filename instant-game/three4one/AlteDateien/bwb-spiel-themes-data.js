/**
 * 
 */
if (typeof BWBThemesDb === "undefined") {
	BWBThemesDb = {};
}

BWBThemesDb = Ext.extend(Object, { 	
  	
  controlerObj: {},
	modelObj: {},
	storeObj: {},

	onlineStore: {},
	offlineStore: {},
	
	loadedThemes: [],
	
	getTotalCount: function() { var myStoreObj = this.storeObj; return myStoreObj.getCount(); },

	getStore: function () { return this.offlineStore; },

	getGroupString : function(record) {
      return record.get('thema')[0];
	},

	setLoadedThemes: function(loadedThemes) {
	  this.offlineStore.each(function(record) {
		record.set('loaded', (loadedThemes.indexOf(record.get('thema')) != -1 ? true : false));
	  }, this);
	  
//	  Ext.each(loadedThemes, function(theme) {
//		var rind = this.offlineStore.findExact('thema', theme);
//		var rmod = this.offlineStore.getAt(rind);
//		rmod.set('loaded', true);
//	  }, this);
	},
	
	constructor: function(config) {
		Ext.apply(this, config);

		this.modelObj = new Ext.regModel('DBthemes', {
								fields: [
									        {name: 'id',       type: 'int'},
									        {name: 'thema',    type: 'string'},
									        {name: 'loaded',   type: 'boolean'}	
									    ]
							});

	    this.offlineStore = new Ext.data.Store({
	        model: 'DBthemes',
	        proxy: {
	            type: 'localstorage',
				id  : 'BWBThemesDb'
	        },
	        listeners: {
	          add: {
	        	scope: this,
	        	fn: function (obj, record, idx) {
	        		if ( this.loadedThemes.indexOf(record[0].get('thema')) != -1 )
	        		{
	        		  record[0].set('loaded', true);
	        		}
	        		else
	        		{
	        		  record[0].set('loaded', false);
	        		}
	        	}
	          },
	          load: {
	        	scope: this,
	        	fn: function (obj, records, successful) {
	        	  if ( typeof records !== "undefined" )
	        	  {
    	        	  Ext.each(records, function(record) {
    	        		var rind = obj.findExact('thema', record.thema);
    	        		if ( rind != -1 )
    	        		{
        	        		var rmod = obj.GetAt(rind);
        	        		if ( bwbdbObj.indexOf(record.thema) )
        	        		{
        	        		  rmod.set('loaded', true);
        	        		}
        	        		else
        	        		{
        	        		  rmod.set('loaded', false);
        	        		}
    	        		}
    	        	  })
	        	  }
	        	}
	          }
	        }
	      });
	    
		this.onlineStore =  new Ext.data.Store({
	        model: 'DBthemes',
	        proxy: {
	            type: 'scripttag',
				id  : 'BWBThemesDb',
	            url: this.serverAddress + 'php/bwb-spiel.php?command=THEMA',
	            reader: new Ext.data.JsonReader({
	                root: 'data'
	            }),
	            timeout: 5000,
	            listeners: {
	                exception:{
						scope: this,
						fn : function() {
	                    console.log("THEMA: I think we are offline");
	                    this.offlineStore.load();
						}
	                }
	            }
	        }
	    });
	 
        this.onlineStore.addListener('load', function (obj, records, successful) {
            console.log("THEMA: I think we are online");
            this.offlineStore.proxy.clear();
            Ext.each(records, function (record) {
                this.offlineStore.add(record.data);
            }, this);
            this.offlineStore.sync();
        }, this);

        this.onlineStore.load();

		}
	});
