"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[3682],{83682:(t,e,n)=>{var a=n(64836),u=n(18698);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(27424)),o=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=u(t)&&"function"!=typeof t)return{default:t};var n=i(e);if(n&&n.has(t))return n.get(t);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var l=r?Object.getOwnPropertyDescriptor(t,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=t[o]}return a.default=t,n&&n.set(t,a),a}(n(67294)),l=a(n(24536)),f=a(n(30187));function i(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(i=function(t){return t?n:e})(t)}e.default=function(){var t=(0,o.useState)("error"),e=(0,r.default)(t,2),n=e[0],a=e[1],u=(0,o.useState)("no-data"),i=(0,r.default)(u,2),c=i[0],d=i[1],p=(0,o.useState)("not-authorized"),s=(0,r.default)(p,2),b=s[0],m=s[1],v=(0,o.useState)(!1),w=(0,r.default)(v,2),y=w[0],h=w[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement("button",{id:"show-status",type:"button",onClick:function(){h(!0)}},"Show Status Views"),o.default.createElement("button",{id:"button1",type:"button",onClick:function(){a("no-data")}},"Change Status View 1"),o.default.createElement("button",{id:"button2",type:"button",onClick:function(){d("no-matching-results")}},"Change Status View 1"),o.default.createElement("button",{id:"button3",type:"button",onClick:function(){m("error")}},"Change Status View 1"),o.default.createElement(f.default,null,y&&o.default.createElement(l.default,{variant:n}),y&&o.default.createElement(l.default,{variant:c}),y&&o.default.createElement(l.default,{variant:b})))}}}]);