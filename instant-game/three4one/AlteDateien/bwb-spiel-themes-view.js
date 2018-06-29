/**
 * 
 */
var loadFromServerImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAABZwAAAWcBcp21pQAAAAd0SU1FB9sGGBEpLbK9xkUAAATlSURBVEjHvZa9bxzXFcV/983szmpnl9rlEpSZgjITOFyARhiQlAKwV2EggdwECAI4Vbq0SeXAblIkRYo0+QMCuLHaFAqiwoCBCJC0UqHIVRBbHxEtmxru98fMvHtd7C7FGLRMgUwGeMV8YM6c8865Z4T/49FsNq+ZWQX4cfg/wpDZArDZotFobKRpehGQswKOtra24iiKosFgUBmNRkvAIiCqelAqlb5MkmRfVfHeq/feTg28ubm56px7e2lp6Se1Wu3NOI4rcRwHURTlIqJpmtpgMEiHw0Gyt/d5tdvtTrz3q6cGjuP4L7u7u7sXL65mFy4sS6PRcHEcS6FQKADmvbfRaFRMkqSwv7/ffvToSXL9+vU/nRq4Vqu9cfXq25Yk4/L+fsbBQYZZgqphBmYAFCEq12qr9bfe+kH31q1b6Vns8WR5+bXiBx98RLH4I/M+FzND9egCcPbFF7d5773XFszs9MBm5ofDIWHYoNt1IhIcMTPYjDIEUi6vWLvdw8z8WTBWELz3RJHHTFGdJmgqtc3kVvI8FxE5G2Azy8FQVZxTVD3OvQB9wVrIc3/4sWfC2Ay8V4JAcc7PjPV11m4GbCdi7La2tj4WkS+BX7Zarf3j9hhAVQHPZDLBOcdUUj1iMEeW6dzlLwfe3t6uAruz08uXLl36xe3bt28cxzhJBrTbj3HOEBGKxZBKpUQUhahOPZBl+VyB/FWkXlHVv+3s7PxxNBr99sGDB+nsugcjTT2jUUoYgoiQpjnD4YQgcBSLBUQc43E+Z6zuVYe/mf2mVCr94/Lly98/KnWWKd4b3uvhyjLPZJLT643odEaMxxkihplpuL29/eE3oogEL3J42DoA2977T3Z2dn43lzrPp6AAzulhQYnMM+3IskNX+xD46Uui8jL2gZm9n2XZramRPKoekemYFJlGaPoKw0zIsgxwh67+97fI+92X3Ps4DEPfaNS4cOGAOAbvPd5PY+T9NN/eG3kOy8vPef317yCCD1ut1ve+xdl2/LTi3Var9YcrV67cKBQc77yzyZMnjwjDaAo2mSBAoVyhUChgpqysbFAuFzA72QAZAPGR856Z/fzu3bt/nZvrs88ecuPGR6yvr6MaMBwMWGp3EWC4ElNtLFEsFPj00ydAAVU9UZyOgv5LVa/eu3fvk+MGyOPHj3HOYd6zfO4cosrne3sc9HoEzpHn+Wyw2CuNzL8Xi8Wf3bx5M/ma83VtbY3V1VWCYNpMeZ7zz04HgKVGg3NRhAsCJpMJzWYTETlRSfxKRN5YW1v79bVr1/xxJXFwcECxWGRxcZHBYMBwOOSHm5sEzrG3t0c5jqlWq4zHY549e3aydmq1Wn8GuHPnzjdFTpMk4eHDh6RpSr/fp9vtEoYhzjmePn1KvV4nTVOGwyELCwuo6pnUog/DkFqtRq1WIwgCRIR6vY5zjl6vR61WY3FxkSiKZg43PRNg7z3tdptSqUS/36ff75MkCSJCp9NBRFBVhsMhjUbj7P5AnHNUKhWq1Spzh1erVZxzdDodFhYWOH/+PGEYEgQBZpa7s2A8LXozVZ2Vvv3X34eqMrs3f+b0UouIj+M4H4/H4dzR4/GYXq+Hc47RaES/35/vt2xsbGQi4uW0wOvr679vNpsX6/V62czUplRVpi2hZqYyrSgF7Pnz5+379+//5yttYRhGknVEMgAAAABJRU5ErkJggg==';
var deleteFromPhoneImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAABZwAAAWcBcp21pQAAAAd0SU1FB9sHCQc7A9vxfdEAAAT7SURBVEjHrZfNb5xXFYefe9/3ne8ZZ2YcjxMrqV3i2G4irDStAAnYgLqosmFThBBl3Q39D9jCP8GCbtnAJliAoBIIlDZC1MZOnJQ2dhXXE3vGng/P+3E/Dos4iFWm0syVzubq6jz6nXt+576vYoprdXX1NyJSAe7s7u66l50NxyXrrq+HQISIa2xuZufb6jwA5DxoNRo3bZZdfce56H2YDIzIT6zInVjr3Z+/+eavf5umPo7jWaABKO/9SaFQOPpBkmRX0rQ5b23uW/Dj9+FXL0urxnGfra//R8NiqpTfaDbjv129qsrlcpDP561SymdZJmdnZ9l3957wvaPj2ZyIFvi8tbn56kSKD5S6OK+UDsJQfadWKy3fedvlFhaIoigCxDkn5uDLfOuDD8Ko10es9W3vG+PyjgV/WKv5H4FkYU6p2AbZXz4Jdm4W8V4QARG4vn0fN7CklRnyLvMfet+bGPzXUun0ncsLM6cP9tAJ6IcdPk0rDIMq3gvFtM/1/WOyWBha4eLakv7zl08Px+XV4w6MlDLDW68TAc5raqNjltr/Jk1DjIlY7m7TSDsIAXmlOFq7yZlS2cRgwMc3v04vqqCVUJCYpdFjZnyXmuuyNHpMwSeA5ySo0l9ZQ0TcxGARsb5WZbOxRigZgmIuOWBp+IjF4S5zyQEeRegz7hVXsZUqgJ+KYlGa3eoiw6gGeIpuxHJvi+u9LQouRsQzCGt8Er0CWk1NsQPoBUV2mq8TeoNDsdR/xNLgMR5FJIZ/1dY59kVEgDFT66srFjg6TflDp07bFrBJSiEbULJDtFhOgyo7ha8RW84tJnYaYAdCljn20xL39DVKEpMXQ86mRNkZH4XLPInzJIl9odhP7OMXpTbGM/Ihn6lZEFDink9cL+xmFzhyjiQxKCWIyOTgF6W2VnDOI8qDCKLU+aAXxBkcFmPc/1VpCnZSSiHiKPozbrh9DBpHgBWNEc1r9gty2QBjDKC/UlePVayUcs3mBVqtExqR5xvdz8gIME6B0qRKc5tP+UfUROY8i4uXUQo3jTv2UaT56Q/XqNz9PfPG4IIAL2UQoRFoAuf52coxZ3feplSKEJnCABER9+TJHvc3/sSlz/exQYhYx8mFOqf1BjhB8gUu7z+lvf2IBw8e4r230xkg1nL96AhJEkyWMQgCTubn6bZaDIKANElwwyGNnR20c9PpaqWUX6pUaPb7qFyOUITh7Cx/r1YB+P7sLOV2G4kiXj04oNxsopSawh17b7ONDXLOoaKINAx5dukSr73xBoHWdIxhbjAgby2htSR374L3k9vpmjHl8N49YmuxxtCOIj4SoX14yOHhIf8MQ47zeZwxZCJEH3/MqrW1icHfzLKL2hjCIMCXSrSvXaPUbFKv16nX6xQbDTpra0i1ShgEBNbybWOuTAyec66EUjhr6RYKbFcq9Pt9ut0unU6HXq/HTrXKabGItRYBWt5XJwbvhGFbooikVOLgxg0q1SqlUolqtUqtVqNcLlObmeH41i1MpYJEEdta708M/mMut//Fe++xcfu2PGu1EJH/xbnd8N7TXVjg/ltvycN33+V3QfB44q7OtDaF+Xl76n0YxTGj0YgkSRgMBmitieOY4XCI1ppBHKvlK1dMqvXYj72xfxIrKyu/XF1dfaVer5dExMtzqV4pJc9fLvFKqRdvsHQ6ndOtra2ne3t7v3hZ3v8CxUHDVDOcR64AAAAASUVORK5CYII=';

if (typeof BWBThemesView === "undefined") {
  BWBThemesView = {};
}

BWBThemesView = Ext.extend(Ext.Panel, {

  controlerObj: {},
  themesStore: {}, 
  list: {},
  bwbdbObj: {},
  codeObj:  {},
  
  show: function() {
    BWBThemesView.superclass.show.call(this);
  },
  
  loadButtonEventHandler: function() {
    t4oDb.loadTheme(Ext.util.Format.trim(this.innerText ));
},

  loadButtonEventHandlerByTheme: function(theme, code) {
    this.bwbdbObj.loadTheme(Ext.util.Format.trim(theme), code);
  },

  deleteButtonEventHandlerByTheme: function(theme) {
    this.bwbdbObj.deleteTheme(Ext.util.Format.trim(theme));
  },
  
  handleCodeChange: function(e) {
    var x = e;
  },
  
  constructor: function(config) { 
	Ext.apply(this, config);

	  this.itemTplCode = new Ext.XTemplate(
	    '<div class="themesSelectionClass">',
      '<div class="themesSelectionTextClass">',
      '{thema}',
    '</div>',
    '<div id="themesActionDiv{#}" themeTag="{thema}" class="themesSelectionActionClass">',
      '<div>',
      '<input type="text" style="width: 4em;" name="themesCode{#}" id="themesCode{#}" value="Code">',
      '</div>',
      '<div>',
      '<tpl if="loaded !== true"><img id="themesActionImg{#}" src="{[loadFromServerImg]}"></tpl>',
      '<tpl if="loaded === true"><img id="themesDeleteActionImg{#}" src="{[deleteFromPhoneImg]}"></tpl>',
      '</div>',
    '</div>',
      '</div>'
    ),
	    
    this.list = new Ext.List ({
      id: 'themenlisteList',
      width: (Ext.is.Phone ? 260 : 500),
      height: (Ext.is.Phone ? 300 : 400),
      centered: true,
      singleSelect: false,
      disableSelection: true,
      store: this.controlerObj.getThemesStore(), //getRange(0, 9),
         itemTpl: this.itemTplCode,
       listeners: {
           update: {
             scope: this,
             fn: function(list) {
                var nodes = list.getNodes();
                Ext.each(nodes, function(node) {
                  var themeDiv = Ext.getDom(Ext.select('.themesSelectionActionClass', node).item(0));
                  var themeTag = themeDiv.getAttribute('themeTag');
                  var code = this.codeObj.getThemesCode(themeTag);
                  var inputElem = Ext.getDom(Ext.select('input', Ext.getDom(themeDiv)).item(0));
                  inputElem.value = this.codeObj.getThemesCode(themeTag);
                  
                  var self=this;
                  Ext.EventManager.on(inputElem, 'change', function(e) { 
                    var target = e.getTarget(undefined, undefined, true);
                    var code = target.getValue();
                    if ( target.id.match(/^themesCode(\d+)$/gi) )
                    {
                      var themeNumber = RegExp.$1;
                      var parTarget = target.parent('.themesSelectionActionClass', false);
                      if ( parTarget !== null )
                      {
                        this.codeObj.setThemesCode(parTarget.getAttribute('themeTag'), code );
                      }
                    } 
                    }, this);
                }, this);
             }
           },
           itemtap: {
          	 scope: this,
          	 fn: function(obj, index, item, e) {
          	   var target = e.getTarget(undefined, undefined, true);
          	   if ( target.id.match(/^themesActionImg(\d+)$/gi) )
          	   {
          	     var themeNumber = RegExp.$1;
          	     var parTarget = target.parent('.themesSelectionActionClass', false);
          	     if ( parTarget !== null )
          	     {
                   var codeTarget = parTarget.down('#themesCode' + themeNumber);
                   var code = codeTarget.getValue();
          	       this.loadButtonEventHandlerByTheme(parTarget.getAttribute('themeTag'), code);
          	     }
          	   }
          	   else if ( target.id.match(/^themesDeleteActionImg(\d+)$/gi) )
          	   {
          	     var themeNumber = RegExp.$1;
          	     var parTarget = target.parent('.themesSelectionActionClass', false);
          	     if ( parTarget !== null )
          	     {
          	       this.deleteButtonEventHandlerByTheme(parTarget.getAttribute('themeTag'));
          	     }
          	   }
          	 }
           }
       }
    });
    
    this.overlayTb = new Ext.Toolbar({
      title: 'Themenliste',
        dock: 'top'
    });
    
    this.buttonTb = new Ext.Toolbar({
		xtype: 'toolbar',
		dock: 'bottom',
		items: [
		        {
		        	//text: 'Reset items',
		        	icon: 'pict/egore_Thumb_Up_small.png',
		        	iconCls: 'confResetOkImg',
		        	ui: 'confirm',
		        	scope: this,
		        	handler: function() {
		        	  	this.hide();
		        	}
		        }
		        ]      
    });
    
    config = Ext.apply({
      floating: true,
      modal: true,
      hideOnMaskTap: false,
      centered: true,
      width: (Ext.is.Phone ? 300 : 550),
//      height: (Ext.is.Phone ? 260 : 500),
      styleHtmlContent: true,
      dockedItems: [this.overlayTb, this.buttonTb],
      scroll: 'vertical',
      items: this.list,
      //contentEl: 'copyrightText',
      cls: 'htmlcontent',
      id: 'themeIdPanel'
    }, config);
  
    BWBThemesView.superclass.constructor.call(this, config);

  }
});
