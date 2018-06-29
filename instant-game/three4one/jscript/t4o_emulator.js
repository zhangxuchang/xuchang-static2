/**
Three4One -- t4o_emulator.js

Three4One emulator to replay demo data

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
@subpackage Emulator
@author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
@version 2.3
@copyright Copyright (c) 2011, Domes

**/

Ext.ns('demos');

demos.isSimulatorEnabled = false;

demos.isSimulatorDemoing = false;

demos.Simulator = new Ext.util.Observable({
//        {
//            text: 'Dump',
//            handler: function() {
//                var events = Ext.getCmp('simulator').getRecorder().getEventSet('main');
//                console.log(JSON.stringify(events));
//                Ext.Ajax.request({
//                    url: '../../dump.php',
//                    method: 'POST',
//                    params: {data: JSON.stringify(events)}
//                });
//            }
//        },
        recorderEvents: ['touchstart', 'touchmove', 'touchend', 'mousedown', 'mousemove', 'mouseup', 'click'],

        doSave: function() {
          var events = JSON.stringify(this.getRecorder().getEventSet('main'));
          console.log(JSON.stringify(events));
          Ext.Ajax.request({
              url: 'php/t4o_emulator.php',
              method: 'POST',
              params: { orientation: Ext.getOrientation(),
                        width: window.innerWidth,
                        height: window.innerHeight,
                        data: events,
                        command: 'SAVEEVENTS'
                      }
          });
        },
        
        getEvents: function() {
          console.log("EMULATOR: Start getEvents()");
          Ext.Ajax.request({
            url: 'php/daw-emulator.php',
            method: 'POST',
            params: { orientation: Ext.getOrientation(),
                      width: window.innerWidth,
                      height: window.innerHeight,
                      command: 'READEVENTS'
                    },
            scope: this,
            success: function(response, opts) {
              var events = Ext.decode(response.responseText);
              console.dir(events);
              if (events) {
                this.getRecorder().setEventSet('main', events);
              }
              this.getRecorder().replay('main');
            }                    
        });
          
        },
        
        doRecord: function(e) {
            var target = e.target;

            if (target.nodeType == 3)
            target = target.parentNode;

            if (Ext.get(target).hasCls('x-button-label')) {
                target = target.parentNode;
            }

            if (!Ext.get(target).hasCls('recorderButton')) {
                this.getRecorder().record('main', e);
            }
        },
        getRecorder: function() {
            if (!this.recorder) {
                this.recorder = new Ext.util.EventRecorder();
                this.recorder.on({
                    replaystart: this.onReplayStart,
                    replayend: this.onReplayEnd,
                    beforecalculatetarget: this.onBeforeCalculateTarget,
                    aftercalculatetarget: this.onAfterCalculateTarget,
                    beforefire: this.onBeforeFire,
                    afterfire: this.onAfterFire,
                    interrupted: this.onInterrupted,
                    scope: this
                });
            }

            return this.recorder;
        },
        startRecorder: function() {
            if (demos.isSimulatorDemoing) {
                return;
            }

            var me = this;

            if (!this.doRecordWrap) {
                this.doRecordWrap = Ext.createDelegate(me.doRecord, me);
            }

            this.getRecorder().start('main');
            this.recorderEvents.forEach(function(name) {
                document.addEventListener(name, me.doRecordWrap, true);
            });
            this.isRecording = true;
            Ext.getCmp('recordContainer').show();

        },
        stopRecorder: function() {
            if (demos.isSimulatorDemoing) {
                return;
            }
            
            var me = this;

            if (!this.doRecordWrap) {
                this.doRecordWrap = Ext.createDelegate(me.doRecord, me);
            }

            this.recorderEvents.forEach(function(name) {
                document.removeEventListener(name, me.doRecordWrap, true);
            });

            window.localStorage.setItem('recordedEvents', JSON.stringify(this.getRecorder().getEventSet('main')));
            this.doSave();
            Ext.getCmp('recordContainer').hide();
        },
        eraseRecorder: function() {
            this.getThumb().hide();
            this.getRecorder().erase('main');
            window.localStorage.setItem('recordedEvents', null);
        },
        replayRecorder: function() {
            if (this.isRecording) {
                this.stopRecorder();
                this.isRecording = false;
            }

            this.getEvents();
//            var events = window.localStorage.getItem('recordedEvents');
//            if (events) {
//                this.getRecorder().setEventSet('main', JSON.parse(events));
//            }
//            this.getRecorder().replay('main');
        },
        showToolbar: function() {
            sink.Main.ui.addDocked(this.getToolbar());
        },
        hideToolbar: function() {
            sink.Main.ui.removeDocked(this.getToolbar(), false);
        },
        onEventDuringReplay: function(e) {
            if (!e.isSimulated) {
                e.preventDefault();
                e.stopPropagation();
                e.stopped = true;

                if (e.type == 'touchstart' || e.type == 'mousedown') {
                    this.getRecorder().stopReplay();
                }
                
                return false;
            }
        },
        getThumb: function() {
            if (!this.thumb) {
                this.thumb = Ext.getBody().createChild({
                    cls: 'x-simulator-thumb'
                });
                this.thumb.hide();
            }

            return this.thumb;
        },
        onReplayStart: function(name) {
            if (name == 'demo') {
                demos.isSimulatorDemoing = true;
            }

            if (!this.onEventDuringReplayWrap) {
                this.onEventDuringReplayWrap = Ext.createDelegate(this.onEventDuringReplay, this);
            }

            Ext.gesture.Manager.detachListeners();
            this.recorderEvents.forEach(function(name) {
                document.addEventListener(name, this.onEventDuringReplayWrap, true);
            }, this);
            Ext.gesture.Manager.attachListeners();
            
            this.getThumb().show();
        },
        onReplayEnd: function(name, isInterrupted) {
            var me = this;

            if (name == 'demo') {
                demos.isSimulatorDemoing = false;
            }

            this.recorderEvents.forEach(function(name) {
                document.removeEventListener(name, this.onEventDuringReplayWrap, true);
            }, this);
            
            this.getThumb().hide();
            
            if (isInterrupted) {
                if (!confirm("Do you want to stop this playback?")) {
                    setTimeout(function() {
                        me.getRecorder().resumeReplay(name);
                    }, 100);
                }
            } else {
            }
        },
        onBeforeCalculateTarget: function() {
            this.getThumb().dom.style.visibility = 'hidden';
        },
        onAfterCalculateTarget: function() {
            this.getThumb().dom.style.visibility = 'visible';
        },
        onAfterFire: Ext.emptyFn,
        onInterrupted: function() {
            this.getThumb().removeCls('pressed');
        },
        onBeforeFire: function(type, target, event) {
            var point = Ext.util.Point.fromEvent(event);
            point.translate(-20, -20);
            
            Ext.Element.cssTranslate(this.getThumb(), point);

            if (type == 'touchstart' || type == 'mousedown') {
                this.getThumb().addCls('pressed');
            } else if (type == 'touchend' || type == 'mouseup') {
                this.getThumb().removeCls('pressed');
            }
        }
});

Ext.Element.fromPoint = function(x, y) {
    if (!demos.isSimulatorEnabled) {
        return Ext.get(document.elementFromPoint(x, y));
    } else {
        var thumb = Ext.getCmp('simulator').getThumb(),
            target;

        thumb.dom.style.visibility = 'hidden';
        target = Ext.get(document.elementFromPoint(x, y));
        thumb.dom.style.visibility = 'visible';

        return target;
    }
}
