!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var o=n(7);function i(e,n,r){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=i=Reflect.get:t.exports=i=function(t,e,n){var i=o(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}},i(e,n,r||e)}t.exports=i},function(t,e,n){var o=n(8);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e,n){var o=n(9),i=n(10);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?i(t):e}},function(t,e,n){t.exports=n(11)},function(t,e,n){var o=n(2);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=o(t)););return t}},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(1),a=n.n(r),u=n(3),l=n.n(u),s=n(4),c=n.n(s),f=n(5),d=n.n(f),p=n(2),h=n.n(p);function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=h()(t);if(e){var i=h()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return d()(this,n)}}var y=function(t){c()(n,t);var e=g(n);function n(t,o,r,a){var u;return i()(this,n),(u=e.call(this,t,"js-tm-editor-dialog",o)).toggle=o.find(".js-toggle-tm-editor"),u.toggle.on("change",(function(){return u.open()})),u.dialogElement.on("dialogclose",(function(){return u.onClose()})),u.saveSetting=r,u.setLinks=a,u}return a()(n,[{key:"open",value:function(){this.toggle.prop("checked")?this.setTitle(this.dialogElement.data("tm-editor")):this.setTitle(this.dialogElement.data("wp-editor")),l()(h()(n.prototype),"open",this).call(this),this.applyingChanges=!1}},{key:"onClose",value:function(){var t=this;this.applyingChanges||(this.toggle.off("change"),this.toggle.prop("checked",!this.toggle.prop("checked")),this.toggle.on("change",(function(){return t.open()})))}},{key:"getButtons",value:function(){var t=this;return[this.getDefaultCancelButton(),{class:"button-primary alignright "+this.dialogId+"-ok",text:this.dialogElement.data("apply-text"),click:function(){return t.okApply()}}]}},{key:"okApply",value:function(){var t=this;this.applyingChanges=!0,this.setSaveButtonDisabled(!0),this.saveSetting.save(this.find('input[name="tm-editor-mode"]:checked').val(),this.toggle.prop("checked"),this.dialogElement.data("nonce"),(function(){return t.onSaved()}))}},{key:"onSaved",value:function(){this.setLinks.setMode(this.toggle.prop("checked")),this.close(),this.setSaveButtonDisabled(!1),this.applyingChanges=!1}},{key:"setSaveButtonDisabled",value:function(t){this.dialogElement.parent(".ui-dialog").find(".button-primary").prop("disabled",t)}}]),n}(function(){function t(e,n,o){i()(this,t),this.$=e,this.dialogId=n,this.content=o,this.maxWidth="95%",this.setupDialog()}return a()(t,[{key:"setupDialog",value:function(){this.dialogElement=this.content.find("#".concat(this.dialogId)),this.dialogElement.dialog({autoOpen:!1,resizable:!1,draggable:!1,modal:!0,width:"auto",dialogClass:"wpml-dialog otgs-ui-dialog",closeText:this.dialogElement.data("cancel-text"),closeOnEscape:!0,buttons:this.getButtons()})}},{key:"getButtons",value:function(){return[this.getDefaultCancelButton()]}},{key:"getDefaultCancelButton",value:function(){var t=this;return{class:"button-secondary alignleft ".concat(this.dialogId,"-cancel"),text:this.dialogElement.data("cancel-text"),click:function(){return t.onCancel()}}}},{key:"onCancel",value:function(){this.close()}},{key:"open",value:function(){var t=this;this.$(window).on("resize.repositionDialog",(function(){return t.repositionDialog()})),this.dialogElement.dialog("open"),this.repositionDialog()}},{key:"close",value:function(){this.$(window).off("resize.repositionDialog"),this.dialogElement.dialog("close")}},{key:"destroy",value:function(){this.dialogElement.dialog("destroy").remove()}},{key:"repositionDialog",value:function(){this.$(".otgs-ui-dialog .ui-dialog-content").css({"max-height":this.$(window).height()-180}),this.$(".otgs-ui-dialog").css({"max-width":this.maxWidth});var t=this.getFullWidthElements();t.length&&this.dialogElement.find(t.join()).css({"max-width":"100%"}),this.setPosition({my:"center",at:"center",of:window})}},{key:"getFullWidthElements",value:function(){return[]}},{key:"setTitle",value:function(t){this.dialogElement.dialog("option","title",t)}},{key:"setMaxWidth",value:function(t){this.maxWidth=t,this.repositionDialog()}},{key:"setPosition",value:function(t){this.dialogElement.dialog("option","position",t)}},{key:"find",value:function(t){return this.dialogElement.find(t)}}]),t}()),v=function(){function t(e,n){i()(this,t),this.ajax=e,this.postId=n}return a()(t,[{key:"save",value:function(t,e,n,o){this.ajax({type:"POST",url:ajaxurl,dataType:"json",data:{action:"wpml-tm-editor-mode",mode:t,useTMEditor:e,postId:this.postId,nonce:n},success:function(t){t.success&&o()}})}}]),t}(),m=function(){function t(e){i()(this,t),this.content=e}return a()(t,[{key:"setMode",value:function(t){var e="originalLink";t&&(e="tmEditorLink"),this.content.find(".js-wpml-translate-link").toArray().forEach((function(t){t.href=t.dataset[e]}))}}]),t}();function b(){document.getElementById("post_ID")&&new y(jQuery,jQuery("#icl_div"),new v(jQuery.ajax,document.getElementById("post_ID").value),new m(jQuery("#icl_div")))}document.addEventListener("DOMContentLoaded",(function(){return b()})),document.addEventListener("WPMLLanguagesMetaBoxesRefreshed",(function(){return b()}))}]);