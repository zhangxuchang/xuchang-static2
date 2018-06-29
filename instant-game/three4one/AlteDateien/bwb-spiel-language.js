/**
 * 
 */

if (typeof BWBlanguage === "undefined") {
  BWBlanguage = {};
}

BWBlanguage = Ext.extend(Object, {
  
		Ext.regModel('langSelect', {
			fields: [
			         {name: 'lang',     type: 'string'},
			         {name: 'title',    type: 'string'},
			         {name: 'email',    type: 'string'},
			         {name: 'code',     type: 'string'}
			         ]
		})

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
		})
});

if (typeof BWBaccessCode === "undefined") {
  BWBaccessCode = {};
}
BWBaccessCode.confData =  {id: 1, lang: "de",name: "kiki"};


T4OConfig = Ext.extend(Object, {
  
        var store = new Ext.data.TreeStore({
            model: 'File',
            proxy: {
                type: 'ajax',
                url: 'getSourceFiles.php',
                reader: {
                    type: 'tree',
                    root: 'children'
                }
            }
        }),


        var nestedList = new Ext.NestedList({
            fullscreen: true,
            title: 'src/',
            displayField: 'fileName',
            // add a / for folder nodes in title/back button
            getTitleTextTpl: function() {
                return '{' + this.displayField + '}<tpl if="leaf !== true">/</tpl>';
            },
            // add a / for folder nodes in the list
            getItemTextTpl: function() {
                return '{' + this.displayField + '}<tpl if="leaf !== true">/</tpl>';
            },
            // provide a codebox for each source file
            getDetailCard: function(record, parentRecord) {
                return new Ext.ux.CodeBox({
                    value: 'Loading...',
                    scroll: {
                        direction: 'both',
                        eventTarget: 'parent'
                    }
                });
            },
            store: store
        }),
});
