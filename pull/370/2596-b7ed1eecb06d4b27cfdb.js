"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[2596],{70215:(e,t,n)=>{var a=n(24994),u=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=u(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(96540)),o=a(n(80129)),f=a(n(44952));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}t.default=function(){var e=(0,l.useState)(!1),t=(0,r.default)(e,2),n=t[0],a=t[1],u=(0,l.useState)(!1),i=(0,r.default)(u,2),c=i[0],d=i[1],p=(0,l.useState)(!1),b=(0,r.default)(p,2),s=b[0],y=b[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement("button",{id:"reset-button",type:"button",onClick:function(){a(!1),d(!1),y(!1)}},"Reset"),l.default.createElement("button",{id:"clear-button",type:"button",onClick:function(){a(!0)}},"Show Clear Loading Overlay"),l.default.createElement("button",{id:"light-button",type:"button",onClick:function(){d(!0)}},"Show Light Loading Overlay"),l.default.createElement("button",{id:"dark-button",type:"button",onClick:function(){y(!0)}},"Show Dark Loading Overlay"),l.default.createElement(f.default,null,l.default.createElement(o.default,{isOpen:n}),l.default.createElement(o.default,{isOpen:c,backgroundStyle:"light"}),l.default.createElement(o.default,{isOpen:s,backgroundStyle:"dark"})))}}}]);