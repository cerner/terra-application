"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[6336],{86336:(t,e,n)=>{var u=n(24994),a=n(73738);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n(85715)),r=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=a(t)&&"function"!=typeof t)return{default:t};var n=c(e);if(n&&n.has(t))return n.get(t);var u={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if("default"!==r&&{}.hasOwnProperty.call(t,r)){var l=o?Object.getOwnPropertyDescriptor(t,r):null;l&&(l.get||l.set)?Object.defineProperty(u,r,l):u[r]=t[r]}return u.default=t,n&&n.set(t,u),u}(n(96540)),l=u(n(44929)),i=u(n(13336));function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(c=function(t){return t?n:e})(t)}e.default=function(){var t=(0,r.useState)(),e=(0,o.default)(t,2),n=e[0],u=e[1],a=(0,r.useState)(!1),c=(0,o.default)(a,2),f=c[0],d=c[1];return r.default.createElement(r.default.Fragment,null,r.default.createElement("button",{id:"reset-button",type:"button",onClick:function(){d(!1)}},"Reset"),r.default.createElement("button",{id:"no-data-button",type:"button",onClick:function(){d(!0),u("no-data")}},"Show No Data Status View"),r.default.createElement("button",{id:"error-button",type:"button",onClick:function(){d(!0),u("error")}},"Show Error Status View"),r.default.createElement("button",{id:"no-matching-results-button",type:"button",onClick:function(){d(!0),u("no-matching-results")}},"Show No Matching Results Status View"),r.default.createElement("button",{id:"not-authorized-button",type:"button",onClick:function(){d(!0),u("not-authorized")}},"Show Not Authorized Status View"),r.default.createElement(i.default,{id:"test-status-view-container"},f&&r.default.createElement(l.default,{variant:n})))}}}]);