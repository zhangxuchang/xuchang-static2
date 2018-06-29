if (typeof T4OStartingPage === "undefined") {
    T4OStartingPage = {};
}

T4OStartingPage = Ext.extend(Ext.Panel, {

  constructor: function(config){
    this.logoBar = new Ext.Toolbar({
      dock: 'top',
      html: '<img src="pict/logos/Logo.png" />',
      id: 'startLogoBar'
    });
    this.button1 = new Ext.Button({
      text: _('Play'),
      centered: true,
      id: 'startPlayButton',
      baseCls: 'start-button',
        handler: function () {
          playground('play');
        }
    });
    this.button2 = new Ext.Button({
      text: _('Copyright'),
      centered: true,
      id: 'startCopyrightButton',
      baseCls: 'start-button',
      handler: function () {
        if ( typeof copyrightObj === 'undefined' )
        {
        }
        copyrightObj.show();
      }
    });
    this.button3 = new Ext.Button({
      text: _('Extras'),
      centered: true,
      id: 'startExtrasButton',
      baseCls: 'start-button',
        handler: function () {
          playground('extra');
        }
    });
    this.button4 = new Ext.Button({
      text: _('Help'),
      centered: true,
      id: 'startHelpButton',
      baseCls: 'start-button',
      handler: function () {
        if ( typeof this.helpWindow === 'undefined' )
        {
          this.helpWindow = new T4OHelpWindow();
        }
        this.helpWindow.showInfoWindow({
          contentEl: 'helpTextDiv',
          }); 
      }
    });
    this.initSysLang = function () {
    	Ext.getCmp('startButton-' + t4o_lang).addCls('x-lang-selected');
    };
    this.changeSysLang = function (newLang) {
    	if(t4o_lang != newLang)
		{
    		Ext.getCmp('startButton-' + t4o_lang).removeCls('x-lang-selected');
    		Ext.getCmp('startButton-' + newLang).addCls('x-lang-selected');
    		changeLang(newLang);
//    		alert(t4o_lang);
		}
    };
    this.startLangBar = new Ext.Toolbar({
    		id: 'startLangBar',
    		dock: 'bottom',
    		centered: true,
    		width: '250px',
    		fullscreen: false,
    		items: [
    		        	{xtype: 'spacer'},
    		        	{
    		        		xtype: 'button',
    		        		id:'startButton-fr',
    		        		text:'français',
    		        		iconAlign: 'top',
    		        		iconCls: 'startLangIcon',
    		        		icon: 'pict/flags/fr.png',
    		        		scope: this,
    		        		handler: function() { this.changeSysLang('fr')}
    		        	},
    		        	{
    		        		xtype: 'button',
    		        		id:'startButton-de',
    		        		text:'deutsch',
    		        		iconAlign: 'top',
    		        		iconCls: 'startLangIcon',
    		        		icon: 'pict/flags/de.png',
    		        		scope: this,
    		        		handler: function() { this.changeSysLang('de'); createClasses(); this.doLayout();}
    		        	},
    		        	{
    		        		xtype: 'button',
    		        		id:'startButton-en',
    		        		text:'english',
    		        		iconAlign: 'top',
    		        		iconCls: 'startLangIcon',
    		        		icon: 'pict/flags/en.png',
    		        		scope: this,
    		        		handler: function() { this.changeSysLang('en'); createClasses(); this.doLayout();}
    		        	},
    		        	{xtype: 'spacer'},
	       ],
    });
    this.buttonContainer = new Ext.Container ({
      centered: true,
      id: 'startContainer',
      items: [
              this.button1,
              this.button3,
              this.button2,
              this.button4
            ],
      layout: 'vbox',
    });
    config = Ext.apply({
      fullscreen: true,
      modal: true,
      id: 'startingPage',
      showAnimation: 'slide',
//      html: 'test',
     items: [
       this.logoBar,
       this.buttonContainer,
     ],
     dockedItems: [
       this.startLangBar
     ],
    layout: 'vbox'
    }, config);

    copyrightObj = new T4OCopyright();          

    T4OStartingPage.superclass.constructor.call(this, config);
    this.initSysLang();
    }
  });
