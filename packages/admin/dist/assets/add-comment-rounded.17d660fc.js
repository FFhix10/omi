import{b as tag,W as WeElement,h,g as extractClass,j as require$$0,k as commonjsGlobal}from"./vendor.c4d80dea.js";var r=Object.defineProperty,t=Object.getOwnPropertyDescriptor;let i=class extends WeElement{constructor(){super(...arguments),this.css=':host {\n  display: inline-block;\n}\n\n:host([block]) {\n  display: block;\n}\n\n.o-card {\n  display: flex;\n  flex-direction: column;\n  background: #FFF;\n}\n\n.o-card-header {\n  min-height: 48px;\n  padding: 0 24px;\n  border-bottom: 1px solid #EFEFEF;\n  border-radius: 2px 2px 0 0;\n}\n\n.o-card-title {\n  float: left;\n  padding: 16px 0;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.o-card-extra {\n  float: right;\n  margin-left: auto;\n  padding: 16px 0;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.o-card-body {\n  margin: 12px 24px;\n  font-weight: 200;\n  font-size: 14px;\n  line-height: 1.6;\n}\n\n.o-card-footer {\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  background: #FFF;\n}\n\n.o-card-btn.selected {\n  color: #07C160;\n}\n\n.o-card-btn:last-child {\n  flex: 1;\n  appearance: none;\n  -webkit-appearance: none;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  border-top: 1px solid #EFEFEF;\n  border-right: none;\n  border-left: none;\n  border-bottom: none;\n  background: #FFF;\n  color: rgba(0, 0, 0, 0.54);\n  padding: 6px 12px 8px;\n}\n\n.o-card-btn {\n  flex: 1;\n  appearance: none;\n  -webkit-appearance: none;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  border-top: 1px solid #EFEFEF;\n  border-right: 1px solid #EFEFEF;\n  border-left: none;\n  border-bottom: none;\n  background: #FFF;\n  color: rgba(0, 0, 0, 0.54);\n  padding: 6px 12px 8px;\n}\n\n.o-card-btn:last-child:hover {\n  flex: 1;\n  appearance: none;\n  -webkit-appearance: none;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  border-top: 1px solid #EFEFEF;\n  border-right: none;\n  border-left: none;\n  border-bottom: none;\n  background: #EFEFEF;\n  color: rgba(0, 0, 0, 0.54);\n  padding: 6px 12px 8px;\n}\n\n.o-card-btn:hover {\n  flex: 1;\n  appearance: none;\n  -webkit-appearance: none;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  border-top: 1px solid #EFEFEF;\n  border-right: 1px solid #EFEFEF;\n  border-left: none;\n  border-bottom: none;\n  background: #EFEFEF;\n  color: rgba(0, 0, 0, 0.54);\n  padding: 6px 12px 8px;\n}\n\n.icon {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: block;\n  margin: 0 auto;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n}\n\n.icon:hover {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: block;\n  margin: 0 auto;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  color: #07C160;\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n}',this.onIconClick=(n,e)=>{this.fire("change",{action:this.props.actions[e],index:e,evt:n.currentTarget})},this.handleBorder=()=>{this.props.bordered&&(this.css=this.css+".o-card {\n        display: flex;\n        flex-direction: column;\n        background: #FFF;\n        border: 1px solid #EFEFEF;\n      }")},this.handleMousemove=()=>{const n=this.props.hoverable;n&&("always"===n?this.css=this.css+".o-card {\n        display: flex;\n        flex-direction: column;\n        box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;\n        transition: all .3s;\n        background: #FFF;\n      }":"true"===n&&(this.css=this.css+".o-card:hover {\n        display: flex;\n        flex-direction: column;\n        box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;\n        transition: all .3s;\n        background: #FFF;\n      }"))}}beforeRender(){this.handleBorder(),this.handleMousemove()}render(n){return h(h.f,null,h("div",{class:"o-card",onMousemove:this.handleMousemove},h("slot",{name:"cover"},h("div",{class:"o-card-header"},h("div",{class:"o-card-title"},n.title),h("div",{class:"o-card-extra"},h("slot",{name:"extra"})))),h("div",{class:"o-card-body"},h("slot",null)),n.actions?h("div",{class:"o-card-footer"},n.actions.map(((n,e)=>(this._iconTag="o-icon-"+n.icon,h("button",{onClick:n=>{this.onIconClick(n,e)},class:"o-card-btn"},h(this._iconTag,{class:"icon"})))))):null))}};i.defaultProps={title:"",hoverable:"true",bordered:!0},i.propTypes={title:String,hoverable:String,actions:Array,bordered:Boolean},i=((n,e,o,t)=>{for(var r,i=e,a=n.length-1;a>=0;a--)(r=n[a])&&(i=r(i)||i);return i})([tag("o-card")],i);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var extendStatics$1=function(n,e){return(extendStatics$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o])})(n,e)};function __extends$1(n,e){function o(){this.constructor=n}extendStatics$1(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}var __assign=function(){return(__assign=Object.assign||function(n){for(var e,o=1,t=arguments.length;o<t;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)};function __decorate$1(n,e,o,t){var r,i=arguments.length,a=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,o,t);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}var css$1=":host {\n  display: inline-block; }\n\n* {\n  box-sizing: border-box; }\n\n.o-link {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  position: relative;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: 14px;\n  font-weight: 500;\n  border-bottom: 1px solid transparent; }\n\n.o-link:hover {\n  color: #07c160;\n  color: var(--o-primary, #07c160); }\n\n.o-link.is-underline:hover {\n  border-bottom: 1px solid #07c160;\n  border-bottom: 1px solid var(--o-primary, #07c160); }\n\n.o-link:active {\n  color: #059048;\n  color: var(--o-primary-active, #059048); }\n\n.o-link-primary {\n  color: #07c160;\n  color: var(--o-primary, #07c160); }\n\n.o-link-primary:hover {\n  color: rgba(7, 193, 96, 0.618);\n  color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618)); }\n\n.o-link-primary:active {\n  color: #059048;\n  color: var(--o-primary-active, #059048); }\n\n.o-link-primary.is-underline:hover {\n  border-bottom: 1px solid rgba(7, 193, 96, 0.618);\n  border-bottom: 1px solid var(--o-primary-fade-little, rgba(7, 193, 96, 0.618)); }\n\n.o-link-danger {\n  color: #fa5151;\n  color: var(--o-danger, #fa5151); }\n\n.o-link-danger:hover {\n  color: rgba(250, 81, 81, 0.618);\n  color: var(--o-danger-fade-little, rgba(250, 81, 81, 0.618)); }\n\n.o-link-danger:active {\n  color: #f91f1f;\n  color: var(--o-danger-active, #f91f1f); }\n\n.o-link-danger.is-underline:hover {\n  border-bottom: 1px solid rgba(250, 81, 81, 0.618);\n  border-bottom: 1px solid var(--o-danger-fade-little, rgba(250, 81, 81, 0.618)); }\n\n.o-link.is-disabled,\n.o-link.is-disabled:focus,\n.o-link.is-disabled:hover {\n  color: #c0c4cc;\n  cursor: not-allowed;\n  text-decoration: none;\n  border-bottom: 1px solid transparent; }\n";!function(n){function e(){return null!==n&&n.apply(this,arguments)||this}__extends$1(e,n),e.prototype.render=function(n){var e;return h("a",__assign({disabled:n.disabled,href:n.href,target:n.target},extractClass(n,"o-link",((e={})["o-link-"+n.type]=n.type,e["o-link-"+n.size]=n.size,e["is-underline"]=n.underline,e["is-disabled"]=n.disabled,e))),h("span",null,h("slot",null)))},e.css=css$1,e.defaultProps={underline:!0,disabled:!1},e.propTypes={type:String,disabled:Boolean,underline:Boolean,href:String,target:String},e=__decorate$1([tag("o-link")],e)}(WeElement);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics=function(n,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])})(n,e)};function __extends(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}extendStatics(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}function __decorate(n,e,o,t){var r,i=arguments.length,a=i<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,o,t);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}var css="/**\n * omiu tip css based on element ui css\n * Licensed under the MIT License\n * https://github.com/ElemeFE/element/blob/dev/LICENSE\n *\n * modified by dntzhang\n */\n:host {\n  display: inline-block; }\n\nimg {\n  width: 100%;\n  height: 100%; }\n\n.placeholder,\n.error {\n  width: 100%;\n  height: 100%;\n  display: block;\n  text-align: center;\n  font-size: 0.875em;\n  color: #bdc5d4;\n  background-color: #f5f7fa; }\n";!function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.loaded=!1,e.loadError=!1,e.onLoad=function(){e.loaded=!0,e.update()},e.onError=function(){e.loaded=!1,e.loadError=!0,e.update()},e}__extends(e,n),e.prototype.installed=function(){var n=this.getBoundingClientRect().height+"px";this.error&&(this.error.style.lineHeight=n),this.placeholder&&(this.placeholder.style.lineHeight=n)},e.prototype.updated=function(){var n=this.getBoundingClientRect().height+"px";this.error&&(this.error.style.lineHeight=n),this.placeholder&&(this.placeholder.style.lineHeight=n)},e.prototype.render=function(n){var e=this;return h(h.f,null,h("img",{onload:this.onLoad,onerror:this.onError,src:n.src,style:{objectFit:n.fit,display:this.loaded?"block":"none"}}),this.loadError&&h("slot",{ref:function(n){return e.error=n},class:"error",name:"error"},n.errorMsg),!this.loadError&&h("slot",{name:"placeholder",style:{display:this.loaded?"none":"block  "},ref:function(n){return e.placeholder=n},class:"placeholder"}))},e.css=css,e.defaultProps={errorMsg:"加载失败"},e.propTypes={src:String,fit:String,errorMsg:String},e=__decorate([tag("o-image")],e)}(WeElement);var addAPhotoRounded={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s="./esm/add-a-photo-rounded.js")}({"./esm/add-a-photo-rounded.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h(omi_1.h.f, null, omi_1.h("path", {\n    d: "M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2z"\n}), omi_1.h("circle", {\n    cx: "13",\n    cy: "14",\n    r: "3"\n}), omi_1.h("path", {\n    d: "M21 6h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65h-6.4c.17.3.28.63.28 1 0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"\n})), \'AddAPhotoRounded\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/add-a-photo-rounded.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, '-$1').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    var _a;\n    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {\n            __extends(class_1, _super);\n            function class_1() {\n                return _super !== null && _super.apply(this, arguments) || this;\n            }\n            class_1.prototype.render = function () {\n                return omi_1.h('svg', {\n                    viewBox: '0 0 24 24',\n                }, path);\n            };\n            return class_1;\n        }(omi_1.WeElement)),\n        _a.css = \":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}\",\n        _a));\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?")},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(require$$0)})(addAPhotoRounded);var addCommentRounded={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s="./esm/add-comment-rounded.js")}({"./esm/add-comment-rounded.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-6 7h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V6c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"\n}), \'AddCommentRounded\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/add-comment-rounded.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, '-$1').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    var _a;\n    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {\n            __extends(class_1, _super);\n            function class_1() {\n                return _super !== null && _super.apply(this, arguments) || this;\n            }\n            class_1.prototype.render = function () {\n                return omi_1.h('svg', {\n                    viewBox: '0 0 24 24',\n                }, path);\n            };\n            return class_1;\n        }(omi_1.WeElement)),\n        _a.css = \":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}\",\n        _a));\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?")},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(require$$0)})(addCommentRounded);
