/**
Three4One -- t4o_conf-access.js

Three4One Config Access Class
 
Administration of access codes for Three4One.
 
The access codes can be entered by a form and are saved to localstorage.

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
if (typeof T4OConfigAccess === "undefined")
{
  T4OConfigAccess = {};
}

T4OConfigAccess = Ext
    .extend(
        Ext.util.Observable,
          {
            confPanelObj : {},
            confirmPanel : {},
            confirmText : '',
            configAccessCodeStore : {},
            itemData : {},
            isValidCode : [],

            getAccessInfoWindowHTML : function()
            {
              // alert('HTML');
              var recCount = t4oDb.offlineStore.getCount();
              var ret = sprintf(_("DATA_DOWNLOADED"), recCount, progName);
              return ret;

            },
            accessInfoWindow : new Ext.Panel(
                  {
                    id : 'accessInfoPanel',
                    modal : true,
                    floating : true,
                    centered : true,
                    styleHtmlContent : true,
                    listeners :
                      {
                        beforeshow : function()
                        {
                          var recCount = t4oDb.offlineStore.getCount();
                          var html = sprintf(_("DATA_DOWNLOADED"), recCount, progName);
                          this.update(html);
                        },
                        show: function() {
                          Ext.get('accessInfoPanel').on('click', function()
                          {
                            this.hide();
                          }, this);
                        },
                        click : function()
                        {
                          this.hide();
                        }
                      }
                  }),

            /**
             * liefert die gespeicherte E-Mailadresse zu einer Sprache. Ist
             * keine E-Mailadresse gespeichert wird der leere String
             * zurückgegeben
             * 
             * @param lang
             * @returns
             */
            getEmail : function(lang)
            {
              var xLang = lang || this.itemData.langCode;
              var xRec = this.configAccessCodeStore.findRecord('lang', xLang);
              return ((xRec != null) ? xRec.get('email') : '');
            },

            /**
             * liefert den gespeichert Accesscode zu einer Sprache. Ist kein
             * Accesscode gespeichert wird der leere String zurückgegeben
             * 
             * @param lang
             * @returns
             */
            getCode : function(lang)
            {
              var xLang = lang || this.itemData.langCode;
              var xRec = this.configAccessCodeStore.findRecord('lang', xLang);
              return ((xRec != null) ? xRec.get('code') : '');
            },

            /**
             * Liefert ein Array aus allen Access-Codes. Jeder Arrayeintrag
             * besteht aus einem Hash {lang: xx, email: yyy, code: zzz}
             * 
             * @returns {Array} Array of Accesscode-Hashes
             */
            getAllCodes : function()
            {
              var accessCodesArr = [];
              this.configAccessCodeStore.each(function(record)
              {
                accessCodesArr.push(Ext.encode(
                  {
                    lang : record.data.lang,
                    email : record.data.email,
                    code : record.data.code,
                    packageId : record.data.packageId
                  }));
              });

              return accessCodesArr;
            },

            /**
             * setze Daten für AccessCode-Detailcard.
             * 
             * itemData enthält die Elemente text und langCode
             * 
             * @param itemData
             *            Array
             */
            setFlag : function(itemData)
            {
              this.itemData = itemData;
              this.accessCodeDetailCard.text = itemData['text'];
            },

            /**
             * Speichermodell für Accesscode-Daten
             */
            t4oAccesCodeModel : new Ext.regModel('T4O-AccessCode',
              {
                fields : [
                  {
                    name : 'id',
                    type : 'int'
                  },
                  {
                    name : 'lang',
                    type : 'string'
                  },
                  {
                    name : 'email',
                    type : 'string'
                  },
                  {
                    name : 'code',
                    type : 'string'
                  },
                  {
                    name : 'packageId',
                    type : 'int'
                  }, ]
              }),

            /**
             * Lokaler Store für Accesscodes
             */
            configAccessCodeStore : new Ext.data.Store(
              {
                model : "T4O-AccessCode",
                autoSave : true,
                proxy :
                  {
                    type : 'localstorage',
                    id : 'AccessCode'
                  }
              }),

            /**
             * Uebeprüft, ob der angegebene Code zur E-Mail-Adresse und Sprache
             * passt. setzt die Klassenvariable isValidCode[lang] auf true oder
             * false Ist der Load-Button des Objekts accessCodeDetailCard
             * bereits gerendert, so wird dieses enabled oder disabled.
             * 
             * @param lang
             */
            checkIfValidByLang : function(lang)
            {
              var email = this.getEmail(lang);
              var code = this.getCode(lang);
              var packageId = this.confPanelObj.getPackageId();
              this.checkIfValid(lang, email, code, packageId, false);
              /* Ergebnis per Event accescodevalid */
            },

            /**
             * Übeprüft, ob die übergebene Sprache, E-Mailadresse und Code
             * gültig sind. Ist der Parameter isShop true, wird der Button
             * "Download Offline-Daten" angezeigt
             * 
             * @param lang
             *            string Sprache, die untersucht werden soll
             * @param email
             *            string E-Mail, die untersucht werden soll
             * @param code
             *            string Code, der untersucht werden soll
             * @param isShop
             *            boolean Wenn gesetzt, dann wird "Download
             *            Offline-Daten"-Button angezeigt
             */
            checkIfValid : function(lang, email, code, packageId, isShop)
            {
              Ext.Ajax.request(
                {
                  url : 'php/t4o_spiel.php',
                  params :
                    {
                      lang : lang,
                      email : email,
                      code : code,
                      packageId : packageId,
                      command : 'CHECK'
                    },
                  scope : this,
                  callback : function(o, success, response)
                  {
                    if (success)
                    {
                      var data = Ext.decode(response.responseText);
                      this.isValidCode[lang] = data.success;
                      this.fireEvent('accesscodevalid', data.success);
                      if (isShop)
                      {
                        var loadButton = this.accessCodeDetailCard.child('#loadOfflineButton');
                        if (Ext.isObject(loadButton) && loadButton.rendered)
                        {
                          data.success ? loadButton.show() : loadButton.hide();
                        }
                        var buyButton = this.accessCodeDetailCard.child('#buyButton');
                        if (Ext.isObject(buyButton) && buyButton.rendered)
                        {
                          data.success ? buyButton.hide() : buyButton.show();
                        }
                      }
                    }
                    else
                    {
                      alert(_('Cannot check code'));
                    }
                  }
                });
            },

            languageButtonHandler : function()
            {
              t4oDb.loadData();
            },

            constructor : function(confPanelObj, config)
            {
              this.confPanelObj = confPanelObj;

              T4OConfigAccess.superclass.constructor.call(this, config);
              this.accessCodeDetailCard = new Ext.form.FormPanel(
                {
                  id : 'accessCodeDetailCardPanel',
                  text : 'accessCode',
                  // styleHtmlContent: true,

                  defaults :
                    {
                      labelWidth : '45%',
                      autoComplete : false,
                      autoCapitalize : false,
                      autoCorrect : false,
                      autofocus : false,
                      grouped : false,
                      listeners :
                        {
                          change :
                            {
                              scope : this,
                              fn : function()
                              {
                                this.configAccessCodeStore.clearFilter(true);
                                this.configAccessCodeStore.filter('packageId', this.confPanelObj.getPackageId());
                                var xRec = this.configAccessCodeStore.findRecord('lang', this.itemData.langCode);
                                if (xRec == null)
                                {
                                  xRec = this.configAccessCodeStore.add(
                                    {
                                      'lang' : this.itemData.langCode,
                                      'email' : '',
                                      'code' : '',
                                      'packageId' : this.confPanelObj.getPackageId()
                                    })[0];
                                }
                                this.accessCodeDetailCard.updateRecord(xRec, true);
                                this.configAccessCodeStore.sync();
                                this.checkIfValid(this.itemData.langCode, xRec.get('email'), xRec.get('code'), this.confPanelObj
                                    .getPackageId(), true);
                              }
                            }
                        }
                    },
                  items : [
                    {
                      html : 'Textsdfsdf',
                      id : 'accessCodeDetailCardLanguageFlagId' // ich liebe
                                                                // deine
                                                                // ID-Namen KD
                                                                // :-)
                    },
                    {
                      xtype : 'textfield',
                      name : 'email',
                      label : _('E-Mail')
                    },
                    {
                      xtype : 'textfield',
                      name : 'code',
                      label : _('Code')
                    },
                    {
                      xtype : 'button',
                      name : 'load',
                      id : 'loadOfflineButton',
                      text : _('Load data offline'),
                      hidden : true,
                      scope : this,
                      margin : '5 0 0 0',
                      handler : function()
                      {
                        this.languageButtonHandler();
                      }
                    },
                    {
                      xtype : 'button',
                      name : 'load',
                      id : 'buyButton',
                      text : _('Buy language'),
                      hidden : false,
                      margin : '5 0 0 0',
                      handler : function()
                      {
                        alert('BUY');
                      }
                    }

                  ],
                  // tpl: ["<h3>{text}</h3>", "<img height='50px' width='50px'
                  // src='pict/flags/{langCode}.png'>" ],
                  listeners :
                    {
                      beforeDestroy : function()
                      {
                        return false; // for some reason, if i dont do this, the
                                      // card wont get recreated after the first
                                      // time
                      },
                      added : function()
                      {
                        this.doComponentLayout();
                      },
                      show :
                        {
                          scope : this,
                          fn : function()
                          {
                            this.accessCodeDetailCard.setValues(
                              {
                                email : '',
                                code : '',
                                packageId : this.confPanelObj.getPackageId()
                              });
                            this.configAccessCodeStore.clearFilter(true);
                            this.configAccessCodeStore.filter('packageId', this.confPanelObj.getPackageId());
                            this.accessCodeDetailCard.loadModel(this.configAccessCodeStore.findRecord('lang',
                                this.itemData.langCode));
                            var xRec = this.configAccessCodeStore.findRecord('lang', this.itemData.langCode);
                            if (xRec != null)
                            {
                              this.checkIfValid(this.itemData.langCode, xRec.get('email'), xRec.get('code'), this.confPanelObj
                                  .getPackageId(), true);
                            }
                            else
                            {
                              // Check if Free data (so we do not need a code to
                              // download data)
                              this.checkIfValid(this.itemData.langCode, '', '', this.confPanelObj.getPackageId(), true);
                            }
                            Ext.get('accessCodeDetailCardLanguageFlagId').setHTML(
                                '<img src="pict/flags/' + this.itemData.langCode + '.png">');
                            // alert(this.flagId);
                          }
                        }
                    }
                });

              this.addEvents('accesscodevalid');

              this.configAccessCodeStore.load();
            }
          });
