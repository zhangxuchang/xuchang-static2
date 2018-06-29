/**
Three4One -- t4o_game-statistic.js

Statistical analysis of Three4One.

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
@subpackage Help Window
@author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
@version 2.3
@copyright Copyright (c) 2011, Domes

**/
if (typeof T4OStatistics === "undefined")
{
  T4OStatistics = {};
}
var statRecords;
var ctx;
T4OStatistics = Ext.extend(
        Ext.Panel,
        {

          showStats : function()
          {
            Ext.get('stat_countOfflineDaten').setHTML(_('No. Offline data: ') + t4oDb.getTotalCount());
            this.show();
            Ext.get('canvas_container').hide();
            Ext.get('statTable').show();
//            this.doComponentLayout();
            this.doLayout();
            Ext.getCmp('statToggleButton').setText(_('Graph'));
            Ext.getCmp('statToggleButton').setHandler(this.drawGraph, this);
          },
          hideStats : function()
          {
            this.hide();
            Ext.get('canvas_container').hide();
            ctx.clearRect(0, 0, 300, 170);

          },
          statTb : {},
          gridStore : {},
          gridModel : {},
          showStatTable : function()
          {
            Ext.get('canvas_container').hide();
            Ext.get('statTable').show();
            Ext.getCmp('statToggleButton').setText(_('Graph'));
            Ext.getCmp('statToggleButton').setHandler(this.drawGraph, this);
            ctx.clearRect(0, 0, 300, 170);

          },
          drawGraph : function()
          {
            Ext.get('statTable').hide();
            Ext.get('canvas_container').show();
            Ext.getCmp('statToggleButton').setText(_('List'));
            Ext.getCmp('statToggleButton').setHandler(this.showStatTable, this);
            var canvas = document.getElementById('graph');
            if (canvas.getContext)
            {
              ctx = canvas.getContext('2d');
              var countFilter = new Ext.util.Filter({
                filterFn: function(item) {
                    return item.okCount > 0 && item.errCount > 0;
                }
              });
              t4oCounter.countStore.filter(countFilter);
              t4oCounter.countStore.load({
                scope : this,
                callback : function(records)
                {
                  ctx.beginPath();
                  ctx.moveTo(40, 10);
                  ctx.lineTo(40, 111);
                  ctx.lineTo(250, 111);
                  ctx.moveTo(35, 20);
                  ctx.lineTo(45, 20);
                  ctx.strokeStyle = "#000";
                  ctx.stroke();
                  ctx.fillText("100%", 5, 23);

                  var i = records['length'];
                  var k = 0;
                  if (i > 10)
                  {
                    k = i-10; // k=i-10;
                  }
                  if (i >= 2)
                  {
                    var allDrops = 0;
                    var allOks = 0;
                    var allErrs = 0;
                    for ( var j = k; j < i; j++)
                    {
                      // alert("j=" + j + "i=" + i);
                      var xMulti = Math.round(210 / ((k == 0) ? i : 10));
                      var thisDate = records[j]["data"]["formatedDate"];
                      thisDate = thisDate.substring(0, thisDate.length - 5);
                      var oks = records[j]['data']["okCount"];
                      var errs = records[j]['data']["errCount"];
                      var totalDrops = oks + errs;

                      if (totalDrops != 0)
                      {
                        // var oky = (90 - (Math.round((oks / totalDrops)*90))) + 30;
                        var erry = (90 - (Math.round((errs / totalDrops) * 90))) + 20;
                        var okHeight = 90;
                        var errHeight = 110 - erry;

                      }
                      else
                      {
                        var oky = 130;
                        var erry = 130;
                        var okHeight = 0;
                        var errHeight = 0;
                      }
                      ctx.fillStyle = "green";
                      ctx.fillRect((j-k + 1) * xMulti + 25, 20, 10, okHeight);
                      ctx.fillStyle = "red";
                      ctx.fillRect((j-k + 1) * xMulti + 25, erry, 10, errHeight);
                      ctx.strokeStyle = "blue";
                      ctx.beginPath();
                      ctx.moveTo((j-k + 1) * xMulti + 30, 105);
                      ctx.lineTo((j-k + 1) * xMulti + 30, 115);
                      ctx.closePath();
                      ctx.stroke();
                      ctx.fillStyle = "black";
                      ctx.font = "8px Arial";
                      ctx.fillText(thisDate, (j-k + 1) * xMulti + 20, 125);
                      allDrops = allDrops + totalDrops;
                      allOks = allOks + oks;
                      allErrs = allErrs + errs;
                      var html = "<table id='statInfoTable'><tr><td>" + _('all drops') + ":</td><td>" + allDrops
                          + "</td></tr><tr><td>" + _('correct drops') + ":</td><td>" + allOks + "</td></tr><tr><td>" +
                          _('error drops') + ":</td><td>"
                          + allErrs + "</td></tr></table>";
                      Ext.get('statInfo').update(html)
                    }
                  }
                  t4oCounter.countStore.clearFilter();
                }
              })
            }

          },
          size1 : (Ext.is.Phone ? 300 : 800),
          size2 : (Ext.is.Phone ? 450 : 600),
          // size1: 300,
          // size2: 450,

          constructor : function(config)
          {
            this.gridStore = t4oCounter.countStore;
            this.statGridPanel = new Ext.ux.TouchGridPanel({
              id : 'statTable',
              scope : this,
              store : this.gridStore,
              height: '200',
              width: '100%',
  //            height : '100%',
              fullscreen : false,
              colModel : [ {
                header : _('Date'),
                mapping : "formatedDate",
                style : "text-align: center;"
              /*
               * renderer : function(val) { var date = new Date(val); var newDate = date.format('d.m.Y'); return newDate; }
               */
              }, {
                header : _('correct drops'),
                mapping : "okCount",
                style : "color:green; text-align: center;"
              }, {
                header : _('error drops'),
                mapping : "errCount",
                style : "color:red; text-align: center;"
              }
              ]

            });

            config = Ext.apply({

              scope : this,
              // fullscreen: true,
//              width : ((Ext.getOrientation() == 'portrait') ? this.size1 : this.size2),
//              height : ((Ext.getOrientation() == 'portrait') ? this.size2 : this.size1),
              styleHtmlContent : false,
              title : _('Statistics'),
              // dockedItems: this.statTb,
              contentEl : 'Statistics',
              cls : 'htmlcontent',
              listeners : {
                show : function()
                {
                  Ext.get('stat_countOfflineDaten').setHTML('<span style="font-size: 10px;">' + _('No. Offline data: ') + t4oDb.getTotalCount() + "</span>");

                  // Ext.get('statPanel').on('click', this.hideStats, this);
                },
                orientationchange : function()
                {

                  this.doComponentLayout();
                  this.doLayout();
                },
                beforeDestroy : function()
                {
                  return false; // for some reason, if i dont do this, the card wont get recreated after the first time
                }

              },
              id : 'statPanel',
              layout: {
                type: 'vbox',
                align: 'left'
              },
              items: [this.statGridPanel,
              {
                id: 'stat_countOfflineDaten',
                bodyStyleq: { 'font-size': '10px'},
                html:'<span style="font-size: 10px;">' + _('No. Offline data: ') + t4oDb.getTotalCount() + "</span>"
              },
              
              new Ext.Container(
                  {
                    id : 'canvas_container',
                    html : "<table id='graphPos'><tr><td><div id='canvasDiv'><canvas id='graph' width='260' height='170px' ></canvas></div><div id='statInfo'></div></td><tr></table>"
                  // style: "margin-top: 20px;"
                  })
]
            }, config);
            T4OStatistics.superclass.constructor.call(this, config);

            this.addDocked({
              xtype : 'toolbar',
              dock : 'bottom',
              items : [ {
                xtype : 'button',
                text : _('Graph'),
                scope : this,
                id : 'statToggleButton',
                handler : this.drawGraph
              },

              ]
            });
            this.doComponentLayout();
            this.doLayout();
          }

        });