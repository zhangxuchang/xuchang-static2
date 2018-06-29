/**
 * 
 */

if (typeof BWBThemesView === "undefined") {
  BWBThemes = {};
}

BWBThemes = Ext.extend(Object, {
  
  serverAddress: '',

  codeObj:    {},
  bwbdbObj:   {},
  themesView: {},
  themesDb:   {},
  
  show: function() {

	this.themesDb.setLoadedThemes(this.bwbdbObj.getLoadedThemesList());
	this.themesView.show();
  },

  getThemesStore: function() {
    return this.themesDb.getStore();
  },
  
  onBwbdbloaded: function (records) {
    var r = records;
    this.themesDb.setLoadedThemes(this.bwbdbObj.getLoadedThemesList());
  },
  
  constructor: function(config) {
	Ext.apply(this, config);

	this.codeObj = new BWBCodesDb();
	
  this.themesDb = new BWBThemesDb({controlerObj: this, serverAddress: this.serverAddress,
    loadedThemes: this.bwbdbObj.getLoadedThemesList()});

  this.themesView = new BWBThemesView({controlerObj: this, bwbdbObj: this.bwbdbObj, codeObj: this.codeObj});

  this.bwbdbObj.on('bwbdbloaded', this.onBwbdbloaded ,this);
  }
});