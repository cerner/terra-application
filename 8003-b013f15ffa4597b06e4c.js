"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[8003],{78003:(e,t,a)=>{var n=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}(a(67294)),o=n(a(50826)),i=n(a(5170)),c=n(a(75852)),d=n(a(99743)),f=n(a(77227)),s=n(a(87491)),v=n(a(78878)),p=n(a(43891)),m=n(a(54576)),y=n(a(29564));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}var _={title:"My Application"},g={name:"My Name",initials:"MN"},b=[{icon:l.default.createElement(o.default,null),key:"search",text:"Search",metaData:{test:"search"}},{icon:l.default.createElement(i.default,null),key:"manufacturer",text:"View Manufacturers",metaData:{test:"manufacturers"}},{icon:l.default.createElement(c.default,null),key:"trends",text:"View Trends",metaData:{test:"trends"}},{icon:l.default.createElement(d.default,null),key:"inbox",text:"View Inbox",metaData:{test:"inbox"}}],w=[{key:"/home",text:"Home",metaData:{display:"Home"}},{key:"/products",text:"Products",metaData:{display:"Products"}},{key:"/management",text:"Management",metaData:{display:"Management"}},{key:"/documentation",text:"Documentation",metaData:{display:"Documentation"}},{key:"/continuing_education",text:"Continuing Education",metaData:{display:"Continuing Education"}},{key:"/support",text:"Support",metaData:{display:"Support"}},{key:"/resources",text:"Resources",metaData:{display:"Resources"}},{key:"/archives",text:"Archives",metaData:{display:"Archives"}}],O=[{icon:l.default.createElement(f.default,null),key:"save",text:"Save",metaData:{test:"save"}},{icon:l.default.createElement(s.default,null),key:"print",text:"Print",metaData:{test:"print"}},{icon:l.default.createElement(v.default,null),key:"bookmark",text:"Bookmark",metaData:{test:"bookmark"}},{icon:l.default.createElement(p.default,null),key:"attachment",text:"Add Attachment",metaData:{test:"attachment"}}];t.default=function(){var e=(0,l.useState)(w[0].key),t=(0,u.default)(e,2),a=t[0],n=t[1],r=(0,l.useState)(null),o=(0,u.default)(r,2),i=o[0],c=o[1];function d(e){c("Current Action: ".concat(e))}return l.default.createElement(y.default,{titleConfig:_,userConfig:g,extensionItems:b,onSelectExtensionItem:d,navigationItems:w,activeNavigationItemKey:a,onSelectNavigationItem:function(e){return n(e)},utilityItems:O,onSelectUtilityItem:d,onSelectSettings:function(){return d("settings")},onSelectHelp:function(){return d("help")},onSelectLogout:function(){return d("logout")}},l.default.createElement(m.default,{title:a,subtitle:i}))}},54576:(e,t,a)=>{var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),u=n(a(19845)),l=n(a(25988)),o=u.default.bind(l.default);t.default=function(e){var t=e.title,a=e.subtitle;return r.default.createElement("div",{className:o("outer")},r.default.createElement("div",{className:o("inner")},r.default.createElement("div",{className:o("center")},r.default.createElement("button",{className:o("button")},t),r.default.createElement("div",null,a))))}},25988:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={outer:"PageContent-module__outer___UeFK4",inner:"PageContent-module__inner___uF8eS",center:"PageContent-module__center___YhMJI",button:"PageContent-module__button___yIuQH"}},43891:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var o=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M32 8v29a8 8 0 0 1-16 0V8a5 5 0 0 1 10 0v29a2 2 0 0 1-4 0V15h-3v22a5 5 0 0 0 10 0V8a8 8 0 0 0-16 0v29a11 11 0 0 0 22 0V8z"}))};o.displayName="IconAttachment",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},78878:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var o=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"m24 34 14 14V0H10v48z"}))};o.displayName="IconBookmark",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},5170:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var o=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M34 0v26l-5.773-8-5.614 7.778L17 18l-5.613 7.778L5.773 18 0 26v22h48V0z"}))};o.displayName="IconManufacturer",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},87491:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var o=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};o.displayName="IconPrinter",o.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},77227:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var o=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"m46.5 10.4-8.9-8.9A6.38 6.38 0 0 0 33.9 0H2.2A2.22 2.22 0 0 0 0 2.2v43.7A2.2 2.2 0 0 0 2.2 48h43.7a2.22 2.22 0 0 0 2.2-2.2V14.1a7.26 7.26 0 0 0-1.6-3.7zM31 18H8V3h23zM24 6h4v9h-4z"}))};o.displayName="IconSave",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},99743:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var o=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M40.7 5H7.3c-.5 0-.9.3-1.1.7L0 20v21c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V20.1L41.8 5.7c-.2-.4-.6-.7-1.1-.7zm-11 15c0 3.1-2.6 5.6-5.7 5.6s-5.6-2.5-5.7-5.6h-15L8.5 8h31.1l5.2 12H29.7z"}))};o.displayName="IconScratchPad",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},75852:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}var o=function(e){var t=l({},e);return n.default.createElement(r.default,t,n.default.createElement("path",{d:"M48 8v16h-6v-5.7L25.31 35l-4.56-4.56L9.18 42H48v6H0V0h6v36.7l14.75-14.76 4.56 4.56L37.82 14H32V8z"}))};o.displayName="IconVisualization",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o}}]);