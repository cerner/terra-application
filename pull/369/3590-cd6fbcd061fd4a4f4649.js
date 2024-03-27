"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[3590],{43590:(e,t,a)=>{var n=a(24994),r=a(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(85715)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,a&&a.set(e,n),n}(a(96540)),o=n(a(37122)),i=n(a(62607)),c=n(a(19564)),d=n(a(20293)),f=n(a(16303)),s=n(a(52820)),v=n(a(1810)),p=n(a(78527)),m=n(a(34042)),y=n(a(87312));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}var _={title:"My Application"},g={name:"My Name",initials:"MN"},b=[{icon:u.default.createElement(o.default,null),key:"search",text:"Search",metaData:{test:"search"}},{icon:u.default.createElement(i.default,null),key:"manufacturer",text:"View Manufacturers",metaData:{test:"manufacturers"}},{icon:u.default.createElement(c.default,null),key:"trends",text:"View Trends",metaData:{test:"trends"}},{icon:u.default.createElement(d.default,null),key:"inbox",text:"View Inbox",metaData:{test:"inbox"}}],w=[{key:"/home",text:"Home",metaData:{display:"Home"}},{key:"/products",text:"Products",metaData:{display:"Products"}},{key:"/management",text:"Management",metaData:{display:"Management"}},{key:"/documentation",text:"Documentation",metaData:{display:"Documentation"}},{key:"/continuing_education",text:"Continuing Education",metaData:{display:"Continuing Education"}},{key:"/support",text:"Support",metaData:{display:"Support"}},{key:"/resources",text:"Resources",metaData:{display:"Resources"}},{key:"/archives",text:"Archives",metaData:{display:"Archives"}}],O=[{icon:u.default.createElement(f.default,null),key:"save",text:"Save",metaData:{test:"save"}},{icon:u.default.createElement(s.default,null),key:"print",text:"Print",metaData:{test:"print"}},{icon:u.default.createElement(v.default,null),key:"bookmark",text:"Bookmark",metaData:{test:"bookmark"}},{icon:u.default.createElement(p.default,null),key:"attachment",text:"Add Attachment",metaData:{test:"attachment"}}];t.default=function(){var e=(0,u.useState)(w[0].key),t=(0,l.default)(e,2),a=t[0],n=t[1],r=(0,u.useState)(null),o=(0,l.default)(r,2),i=o[0],c=o[1];function d(e){c("Current Action: ".concat(e))}return u.default.createElement(y.default,{titleConfig:_,userConfig:g,extensionItems:b,onSelectExtensionItem:d,navigationItems:w,activeNavigationItemKey:a,onSelectNavigationItem:function(e){return n(e)},utilityItems:O,onSelectUtilityItem:d,onSelectSettings:function(){return d("settings")},onSelectHelp:function(){return d("help")},onSelectLogout:function(){return d("logout")}},u.default.createElement(m.default,{title:a,subtitle:i}))}},34042:(e,t,a)=>{var n=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(96540)),l=n(a(67967)),u=n(a(83871)),o=l.default.bind(u.default);t.default=function(e){var t=e.title,a=e.subtitle;return r.default.createElement("div",{className:o("outer")},r.default.createElement("div",{className:o("inner")},r.default.createElement("div",{className:o("center")},r.default.createElement("button",{className:o("button")},t),r.default.createElement("div",null,a))))}},83871:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={outer:"PageContent-module__outer___UeFK4",inner:"PageContent-module__inner___uF8eS",center:"PageContent-module__center___YhMJI",button:"PageContent-module__button___yIuQH"}},78527:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(96540)),r=l(a(95865));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M32 8v29a8 8 0 0 1-16 0V8a5 5 0 0 1 10 0v29a2 2 0 0 1-4 0V15h-3v22a5 5 0 0 0 10 0V8a8 8 0 0 0-16 0v29a11 11 0 0 0 22 0V8z"}))};o.displayName="IconAttachment",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},1810:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(96540)),r=l(a(95865));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"m24 34 14 14V0H10v48z"}))};o.displayName="IconBookmark",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},62607:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(96540)),r=l(a(95865));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M34 0v26l-5.773-8-5.614 7.778L17 18l-5.613 7.778L5.773 18 0 26v22h48V0z"}))};o.displayName="IconManufacturer",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},52820:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(96540)),r=l(a(95865));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};o.displayName="IconPrinter",o.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},16303:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(96540)),r=l(a(95865));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"m46.5 10.4-8.9-8.9A6.38 6.38 0 0 0 33.9 0H2.2A2.22 2.22 0 0 0 0 2.2v43.7A2.2 2.2 0 0 0 2.2 48h43.7a2.22 2.22 0 0 0 2.2-2.2V14.1a7.26 7.26 0 0 0-1.6-3.7zM31 18H8V3h23zM24 6h4v9h-4z"}))};o.displayName="IconSave",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},20293:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(96540)),r=l(a(95865));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M40.7 5H7.3c-.5 0-.9.3-1.1.7L0 20v21c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V20.1L41.8 5.7c-.2-.4-.6-.7-1.1-.7zm-11 15c0 3.1-2.6 5.6-5.7 5.6s-5.6-2.5-5.7-5.6h-15L8.5 8h31.1l5.2 12H29.7z"}))};o.displayName="IconScratchPad",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},37122:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(96540)),r=l(a(95865));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"m47.4 43.2-13-13A19.66 19.66 0 0 0 38 19a19 19 0 1 0-7.9 15.4l13 13a2.05 2.05 0 0 0 2.9 0l1.4-1.4a1.93 1.93 0 0 0 0-2.8zM3 19a16 16 0 1 1 16 16A16 16 0 0 1 3 19z"}))};o.displayName="IconSearch",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},19564:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(96540)),r=l(a(95865));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M48 8v16h-6v-5.7L25.31 35l-4.56-4.56L9.18 42H48v6H0V0h6v36.7l14.75-14.76 4.56 4.56L37.82 14H32V8z"}))};o.displayName="IconVisualization",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o}}]);