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
if (typeof BWBCodesDb === "undefined") {
	BWBCodesDb = {};
}

BWBCodesDb = Ext.extend(Object, { 	
  	
  controlerObj: {},
	modelObj: {},
	storeObj: {},

	onlineStore: {},
	offlineStore: {},
	
	loadedCodes: [],
	
	getTotalCount: function() { var myStoreObj = this.storeObj; return myStoreObj.getCount(); },

	getStore: function () { return this.offlineStore; },

	getGroupString : function(record) {
      return record.get('thema')[0];
	},

	setThemesCode: function(thema, code) {
	  var rec = this.offlineStore.findRecord('thema', thema, undefined, false);
	  if ( rec == null || rec == -1 )
	  {
	    this.offlineStore.add({thema: thema, code: code});
	  }
	  else
	  {
	    rec.set('code', code);
	  }
	  this.offlineStore.sync();
	},
	
	getThemesCode: function(thema) {
    var rec = this.offlineStore.findRecord('thema', thema, undefined, false);
    return ( rec == null ? null : rec.get('code'));
	},
	
	constructor: function(config) {
		Ext.apply(this, config);

		this.modelObj = new Ext.regModel('DBcodes', {
								fields: [
									        {name: 'id',       type: 'int'},
									        {name: 'thema',    type: 'string'},
									        {name: 'packageId', type: 'string'},
									        {name: 'code',   type: 'string'}	
									    ]
							});

	    this.offlineStore = new Ext.data.Store({
	        model: 'DBcodes',
	        proxy: {
	            type: 'localstorage',
	            id  : 'BWBCodesDb'
	        },
	        listeners: {
	        }
	      });

	    this.offlineStore.load();
	}

});