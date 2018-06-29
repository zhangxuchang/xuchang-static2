/**
Three4One -- t4o_info-window.js

Information windows

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
@subpackage Info Window
@author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
@version 2.3
@copyright Copyright (c) 2011, Domes

**/
if (typeof T4OInfoWindow === "undefined") {
  T4OInfoWindow = {};
}
T4OInfoWindow = Ext.extend(Ext.Panel, {
	html: _("no text set!"),
	listenerList: [],
	cls:'',
	ifItem: false,
	config: {},
	/*showInfoWindow() lässt den InfoWindow anzeigen.
	 * Mit der Variable html kann man den Anzeigetext als String übergeben (normales HTML);
	 * Durch listeners kann man dem InfoWindow event-handler zuweisen. Diese müssen in folgender form übergeben werden:
	 *  [{handler: 'click', fn: (function () {foo})}];
	 * Durch items kann man dem InfoWindow items hinzufügen.
	 * aCls fügt dem infoWindow eine zusätzliche CSS-Klasse hinzu
	 * alle Parameter müssen in einem numerischen array übergeben werden.
	 */
	showInfoWindow: function (params) {
		var listeners = params['listeners'] || [];
		var items = params['items'];
        this.html = params['html'];
        this.contentEl = params['contentEl'];

        if(listeners.length > 0)
		{
			for(i=0; i<listeners.length; i++)
			{
				this.addListener(listeners[i]['handler'], listeners[i]['fn'], this);
				this.listenerList[i] = listeners[i];
			}
		}
		if(items)
		{
			this.add(items);
			this.ifItem = true;
		}
		if(params['aCls'])
		{
			this.cls= aCls;
		}
	    this.doLayout();
		T4OInfoWindow.superclass.show.call(this, false);
	},
	hideInfoWindow: function() {
		for(i=0;i<this.listenerList.length;i++)
		{
			this.un(this.listenerList[i]['handler'], this.listnerList[i]['fn']);
		}
		this.html=_("no text set!");
		this.cls = '';
		if(this.ifItem)
		{
			this.removeAll();
		}
		Ext.get('infoWindowPanel').un('click');
		this.hide();
	},
	constructor: function (config) {
		
		this.config = Ext.apply({
			floating: true,
			modal: true,
			hidden: true,
//			centered: true,
//			id: 'infoWindowPanel',
		//	fullscreen: true,
//			width: (Ext.is.Phone ? 260 : 600),
//			height: (Ext.is.Phone ? 260 : 400),
			styleHtmlContent: true,
			scroll: 'vertical',
			cls: this.cls + ' infoWindowPanel',
			listeners:{
//			    orientationchange: { // @TODO
//			      scope: this,
//			      fn: function() {
//			        alert('X');
//			        this.doComponentLayout();
//			        this.doLayout();
//			      }
//			    },
				show:{scope: this,
					fn: function() 
					{
//						Ext.get('infoWindowPanel').on('click', this.hideInfoWindow, this);
					}
				}
			}
		}, config);

		T4OInfoWindow.superclass.constructor.call(this, this.config);
//				Ext.get('infoWindowPanel').on('click', this.hideInfoWindow(), this)
	}
	
});
