/**
Three4One -- t4o_help-window.js

Help windows

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

/**
 * 
 */
if (typeof T4OHelpWindow === "undefined") {
  T4OHelpWindow = {};
}
T4OHelpWindow = Ext.extend(T4OInfoWindow, {
    config: {},
    
    calculateDesiredHeight: function() {
        var viewHeight = Ext.Element.getViewportHeight(),
            desiredHeight = viewHeight * 0.9;  
        return desiredHeight;
    },
    
    constructor: function (config) {

      this.config = Ext.apply({
        centered: true,
        height: this.calculateDesiredHeight(),
      
        dockedItems: [{
          xtype: 'toolbar',
          title: _('Help'),
          margin: '0 0 2 0',
          id: 'helpToolbarId',
          items: [{xtype: 'spacer'},
                  {
		              ui: 'round',
		              iconCls: 'valid',
		              iconMask: true,
		              scope: this,
		              handler: function(){
		                  this.hide();
		              }
		            }
                 ]
        }],  

        listeners:{
          orientationchange: { // @TODO
//        scope: this,
            fn: function() {
              this.setHeight(this.calculateDesiredHeight());
            }
          }
        }
      }, config);

      T4OHelpWindow.superclass.constructor.call(this, this.config);
    }
});
