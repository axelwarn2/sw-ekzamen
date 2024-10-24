this.BX=this.BX||{},function(e,t,i){"use strict";var s,n,l,a,r,o=function(){function e(){babelHelpers.classCallCheck(this,e),babelHelpers.defineProperty(this,"values",[]),this.clear()}return babelHelpers.createClass(e,[{key:"clear",value:function(){this.values=[]}},{key:"set",value:function(e){this.values=this.validateValues(e)}},{key:"get",value:function(){return this.values}},{key:"validateValues",value:function(e){return e}}]),e}(),u=function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(t).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"validateValues",value:function(e){var t=[];return e.forEach((function(e){i.Type.isInteger(e)&&e>0&&t.push(e)})),t}}]),t}(o),c=function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(t).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"validateValues",value:function(e){var t=[];return e.forEach((function(e){if(i.Type.isString(e)){var s=e.trim();""!==s&&t.push(s)}})),t}}]),t}(o),h=function(){function e(t){var s;babelHelpers.classCallCheck(this,e),babelHelpers.defineProperty(this,"state",!0),babelHelpers.defineProperty(this,"containerId",""),babelHelpers.defineProperty(this,"fieldName",""),babelHelpers.defineProperty(this,"multiple",!1),babelHelpers.defineProperty(this,"iblockId",0),babelHelpers.defineProperty(this,"userType",""),babelHelpers.defineProperty(this,"entityId",""),babelHelpers.defineProperty(this,"searchMessages",{}),babelHelpers.defineProperty(this,"changeEvents",[]);var n=i.Type.isPlainObject(t)?t:{};this.resetState(),this.setContainerId(n.containerId),this.setFieldName(n.fieldName),this.setMultiple(n.multiple),this.initValueCollection(null!==(s=n.collectionType)&&void 0!==s?s:"int"),this.setValues(i.Type.isArray(n.selectedItems)?n.selectedItems:[n.selectedItems]),this.setIblockId(n.iblockId),this.setUserType(n.userType),this.setEntityId(n.entityId),this.setSearchMessages(n.searchMessages),this.setChangeEvents(n.changeEvents)}return babelHelpers.createClass(e,[{key:"resetState",value:function(){this.state=!0}},{key:"isStateSuccess",value:function(){return this.state}},{key:"showError",value:function(e){this.state=!1,i.Type.isStringFilled(e)&&console.error("BX.Iblock.FieldSelector: ".concat(e))}},{key:"showWarning",value:function(e){this.state=!1,i.Type.isStringFilled(e)&&console.warn("BX.Iblock.FieldSelector: ".concat(e))}},{key:"setContainerId",value:function(e){this.containerId=i.Type.isStringFilled(e)?e:"",""===this.containerId&&this.showError("containerId is empty. Selector is can't be used")}},{key:"getContainerId",value:function(){return this.containerId}},{key:"setFieldName",value:function(e){this.fieldName=i.Type.isStringFilled(e)?e:"",""===this.fieldName&&this.showError("fieldName is empty. Selector is can't be used")}},{key:"getFieldName",value:function(){return this.fieldName}},{key:"setMultiple",value:function(e){this.multiple=!!i.Type.isBoolean(e)&&e}},{key:"getMultiple",value:function(){return this.multiple}},{key:"getTagSelectorContainerId",value:function(){return"".concat(this.getContainerId(),"_selector")}},{key:"getTagResultContainerId",value:function(){return"".concat(this.getContainerId(),"_results")}},{key:"getTagSelectorControlId",value:function(){return"".concat(this.getContainerId(),"Control")}},{key:"initValueCollection",value:function(e){this.valueCollection="string"===e?new c:new u}},{key:"setValues",value:function(e){this.valueCollection.set(e)}},{key:"getValues",value:function(){return this.valueCollection.get()}},{key:"getTagSelectorItems",value:function(){var e=this.getEntityId(),t=[];return this.getValues().forEach((function(i){var s=[e,i];t.push(s)})),t}},{key:"setIblockId",value:function(e){this.iblockId=0,i.Type.isInteger(e)&&e>0&&(this.iblockId=e)}},{key:"getIblockId",value:function(){return this.iblockId}},{key:"setUserType",value:function(e){this.userType="",i.Type.isStringFilled(e)&&(this.userType=e)}},{key:"getUserType",value:function(){return this.userType}},{key:"setEntityId",value:function(e){this.entityId=i.Type.isStringFilled(e)?e:"",""===this.entityId&&this.showError("entityI id is empty. Selector is can't be used")}},{key:"getEntityId",value:function(){return this.entityId}},{key:"setSearchMessages",value:function(e){i.Type.isPlainObject(e)?(this.searchMessages.title=i.Type.isStringFilled(e.title)?e.title:"",this.searchMessages.subtitle=i.Type.isStringFilled(e.subtitle)?e.subtitle:""):(this.searchMessages.title="",this.searchMessages.subtitle="")}},{key:"getSearchTabTitle",value:function(){return this.searchMessages.title}},{key:"getSearchSubtitle",value:function(){return this.searchMessages.subtitle}},{key:"setChangeEvents",value:function(e){var t=this;this.changeEvents=[],i.Type.isArrayFilled(e)&&e.forEach((function(e){i.Type.isStringFilled(e)&&t.changeEvents.push(e)}))}},{key:"getChangeEvents",value:function(){return this.changeEvents}},{key:"render",value:function(){if(this.isStateSuccess()){var e=this.getContainerId(),l=document.getElementById(e);i.Type.isElementNode(l)||this.showError("dom-container ".concat(e," is absent. Selector is can't be used"));var a=i.Tag.render(s||(s=babelHelpers.taggedTemplateLiteral(['\n\t\t\t<div id="','"></div>\n\t\t'])),this.getTagSelectorContainerId());i.Dom.append(a,l);var r=i.Tag.render(n||(n=babelHelpers.taggedTemplateLiteral(['\n\t\t\t<div id="','"></div>\n\t\t'])),this.getTagResultContainerId());i.Dom.append(r,l),this.renderSelectedItems(this.getValues());var o={id:this.getTagSelectorControlId(),multiple:this.getMultiple(),dialogOptions:{id:this.getTagSelectorControlId(),multiple:this.getMultiple(),preselectedItems:this.getTagSelectorItems(),entities:[{id:this.getEntityId(),dynamicLoad:!0,dynamicSearch:!0,options:{iblockId:this.getIblockId(),propertyType:this.getUserType()}}],searchOptions:{allowCreateItem:!1},searchTabOptions:{stub:!0,stubOptions:{title:i.Text.encode(this.getSearchTabTitle()),subtitle:i.Text.encode(this.getSearchSubtitle()),arrow:!1}},events:{"Item:onSelect":this.updateSelectedItems.bind(this),"Item:onDeselect":this.updateSelectedItems.bind(this)}}};new t.TagSelector(o).renderTo(a)}}},{key:"renderSelectedItems",value:function(e){var t=document.getElementById(this.getTagResultContainerId());if(i.Type.isDomNode(t)){var s=this.getFieldName();if(t.innerHTML="",e.length>0)e.forEach((function(e){var n=i.Tag.render(l||(l=babelHelpers.taggedTemplateLiteral(['\n\t\t\t\t\t<input type="hidden" name="','" value="','">\n\t\t\t\t'])),s,i.Tag.safe(a||(a=babelHelpers.taggedTemplateLiteral(["",""])),e.toString()));i.Dom.append(n,t)}));else{var n=i.Tag.render(r||(r=babelHelpers.taggedTemplateLiteral(['\n\t\t\t\t<input type="hidden" name="','" value="">\n\t\t\t'])),s);i.Dom.append(n,t)}}}},{key:"updateSelectedItems",value:function(e){var t=e.getTarget();t.isMultiple()||t.hide();var s=t.getSelectedItems();if(i.Type.isArray(s)){var n=[];s.forEach((function(e){n.push(e.getId())})),this.renderSelectedItems(n),this.getChangeEvents().forEach((function(e){BX.Event.EventEmitter.emit(e)}))}}}]),e}();e.FieldSelector=h}(this.BX.Iblock=this.BX.Iblock||{},BX.UI.EntitySelector,BX);
//# sourceMappingURL=field-selector.bundle.js.map
