/**
Three4One -- t4o_counter.js

Three4One Counter Class

Administration of the succes/mistakes counter of Three4One. 

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
@subpackage Counter
@author Kilian Domes <kilian.domes@gmx.de>, Franz Domes <franz.domes@gmx.de>
@version 2.3
@copyright Copyright (c) 2011, Domes

**/
if (typeof T4OCounter === "undefined") {
	T4OCounter = {};
}
T4OCounter = Ext.extend(Object, {
	countModel: {},
	countStore: {},
	resetCounter: function ()
	{
		this.countStore.last().set('okCount', 0);
		Ext.get("okCount").update(0);
		okCount = 0;
		errCount = 0;
		this.countStore.last().set('errCount', 0);
		Ext.get("errCount").update(0);
		this.countStore.sync();
		this.countStore.getProxy().clear();
	},
	constructor: function ()
	{
	
		 this.countModel = new Ext.regModel ('counts', {
		 	fields: ["id", "date", "formatedDate", "okCount", "errCount"],
			proxy: {
				type: 'localstorage',
				id  : 'counts'
			}
		 });
		 this.countStore = new Ext.data.Store ({
		 	model: 'counts'
		 });
		dateRaw = new Date();
		today = dateRaw.format('Y-m-d');
		this.countStore.load({
			scope: this,
			callback: function (records, operation, success){
			var formatedDate;
			if(records["length"] != 0 && this.countStore.last().get("date") == today)
			{
		//		alert('length:' + records["length"]);
				var dateIndex = this.countStore.findExact("date", today);
				var dateModel = this.countStore.getAt(dateIndex);
				okCountValue = dateModel.get("okCount");
				Ext.get("okCount").update(okCountValue);
				errCountValue = dateModel.get("errCount");
				Ext.get("errCount").update(errCountValue);
				okCount = okCountValue;
				errCount = errCountValue;
			    if(okCount > 99 )
			    {
			      Ext.get("okCount").addCls("hundred");
			      if(okCount > 999)
			      {
			        Ext.get("okCount").addCls("thousand");
			      }
			    }
			    if(errCount > 99 )
			    {
			      Ext.get("errCount").addCls("hundred");
			      if(errCount > 999)
			      {
			        Ext.get("errCount").addCls("thousand");
			      }
			    }

			}
			else
			{
		//		alert('else');
				var arr = today.split(/-/)
				formatedDate= new Date(arr[0], arr[1]-1, arr[2]);
				formatedDate = formatedDate.format('d.m.Y');
				this.countStore.add({'date': today, 'formatedDate':formatedDate, 'okCount' : 0, 'errCount' : 0});
				this.countStore.sync();
				okCount = 0;
				errCount = 0;
			}
		}
		});
		
	}	
})