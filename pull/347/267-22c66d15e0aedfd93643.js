/*! For license information please see 267-22c66d15e0aedfd93643.js.LICENSE.txt */
"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[267],{20267:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var n=t(87462),l=t(85893),a=t(11151),o=t(2010);function d(e){var r=(0,n.Z)({p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,l.jsxs)(o.ZP,{children:[(0,l.jsxs)(o.X2,{children:[(0,l.jsx)(o.O,{children:(0,l.jsx)(r.p,{children:"isOpen"})}),(0,l.jsx)(o.Di,{children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-javascript",children:"bool\n"})})}),(0,l.jsx)(o.dS,{isRequired:!1}),(0,l.jsx)(o.mW,{children:(0,l.jsx)(r.p,{children:"none"})}),(0,l.jsx)(o.Ex,{children:(0,l.jsx)(r.p,{children:"A boolean value indicating whether the loading overlay should be visible or not."})})]},"ROW1"),(0,l.jsxs)(o.X2,{children:[(0,l.jsx)(o.O,{children:(0,l.jsx)(r.p,{children:"backgroundStyle"})}),(0,l.jsx)(o.Di,{children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-javascript",children:"enum: [\n  'dark'\n  'light'\n  'clear'\n],\n"})})}),(0,l.jsx)(o.dS,{isRequired:!1}),(0,l.jsx)(o.mW,{children:(0,l.jsx)(r.p,{children:"none"})}),(0,l.jsx)(o.Ex,{children:(0,l.jsxs)(r.p,{children:["A string indicating the background style for the overlay. One of: ",(0,l.jsx)(r.code,{children:"dark"}),", ",(0,l.jsx)(r.code,{children:"light"}),", ",(0,l.jsx)(r.code,{children:"clear"}),"."]})})]},"ROW2")]})}const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,n.Z)({},(0,a.ah)(),e.components).wrapper;return r?(0,l.jsx)(r,(0,n.Z)({},e,{children:(0,l.jsx)(d,e)})):d(e)};function u(e){var r=(0,n.Z)({h1:"h1",p:"p",a:"a",blockquote:"blockquote",h2:"h2",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h1,{id:"applicationloadingoverlay",children:"ApplicationLoadingOverlay"}),"\n",(0,l.jsx)(r.p,{children:"The ApplicationLoadingOverlay is used to render loading overlays within the application."}),"\n",(0,l.jsxs)(r.p,{children:["When mounted, the ApplicationLoadingOverlay will communicate with an ancestor\n",(0,l.jsx)(r.a,{href:"/terra-application/pull/347/application/terra-application/components/application-loading-overlay-provider",children:"ApplicationLoadingOverlayProvider"})," to\npresent a loading overlay."]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:["See the ",(0,l.jsx)(r.a,{href:"/terra-application/pull/347/application/terra-application/how-to/show-loading-overlays",children:"How to Show Loading Overlays"})," page for usage information."]}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-jsx",children:"import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';\n"})}),"\n",(0,l.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,l.jsx)(i,{})]})}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,n.Z)({},(0,a.ah)(),e.components).wrapper;return r?(0,l.jsx)(r,(0,n.Z)({},e,{children:(0,l.jsx)(u,e)})):u(e)}},2010:(e,r,t)=>{var n=t(64836),l=t(18698);r.dS=r.O=r.Ex=r.mW=void 0,Object.defineProperty(r,"X2",{enumerable:!0,get:function(){return u.Row}}),r.ZP=r.Di=void 0;var a=f(t(67294)),o=n(t(45697)),d=n(t(47166)),i=t(48720),u=f(t(98364)),c=n(t(50007));function p(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(p=function(e){return e?t:r})(e)}function f(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=p(r);if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(n,o,d):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}var s=d.default.bind(c.default),h={children:o.default.node},v={isRequired:o.default.bool},b=function(e){var r=e.children;return a.default.createElement(u.Cell,{className:s("bold")},r)};r.O=b,b.propTypes=h;var y=function(e){var r=e.children;return a.default.createElement(u.Cell,{className:s("code-block-override")},r)};r.Di=y,y.propTypes=h;var m=function(e){var r=e.isRequired;return a.default.createElement(u.Cell,{className:s([r?["required"]:[]])},r?"required":"optional")};r.dS=m,m.propTypes=v;var _=function(e){var r=e.children;return a.default.createElement(u.Cell,{className:s("code-block-override")},r)};r.mW=_,_.propTypes=h;var O=function(e){var r=e.children;return a.default.createElement(u.Cell,null,r)};r.Ex=O,O.propTypes=h;var j=function(e){var r=e.children,t=(0,a.useContext)(i.ThemeContext);return a.default.createElement(u.default,{paddingStyle:"compact",className:s("table",t.className)},a.default.createElement(u.Header,{className:s("header")},a.default.createElement(u.HeaderCell,null,"Prop"),a.default.createElement(u.HeaderCell,null,"Type"),a.default.createElement(u.HeaderCell,null,"Required"),a.default.createElement(u.HeaderCell,null,"Default"),a.default.createElement(u.HeaderCell,null,"Description")),a.default.createElement(u.Body,null,r))};j.propTypes=h;var g=j;r.ZP=g},17893:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},50007:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},75251:(e,r,t)=>{var n=t(67294),l=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;l=a("react.element"),r.Fragment=a("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,a={},u=null,c=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)d.call(r,n)&&!i.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:l,type:e,key:u,ref:c,props:a,_owner:o.current}}r.jsx=u,r.jsxs=u},85893:(e,r,t)=>{e.exports=t(75251)},89650:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=c(t(67294)),l=c(t(45697)),a=c(t(94184)),o=c(t(47166)),d=c(t(50026)),i=c(t(17893)),u=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=o.default.bind(i.default),h={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},v=function(e){var r=e.children,t=e.disableStripes,l=e.paddingStyle,o=f(e,u),i=n.default.useContext(d.default),c=(0,a.default)(s("table",{striped:!t},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},i.className),o.className);return n.default.createElement("table",p({},o,{className:c}),r)};v.propTypes=h,v.defaultProps={disableStripes:!1,paddingStyle:"none"};var b=v;r.default=b},51523:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=o(t(67294)),l=o(t(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i={children:l.default.node},u=function(e){var r=e.children,t=d(e,a);return n.default.createElement("tbody",t,r)};u.propTypes=i,u.defaultProps={children:[]};var c=u;r.default=c},58741:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=o(t(67294)),l=o(t(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i={children:l.default.node},u=function(e){var r=e.children,t=d(e,a);return n.default.createElement("td",t,r)};u.propTypes=i,u.defaultProps={children:[]};var c=u;r.default=c},90703:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=d(t(67294)),l=d(t(45697)),a=d(t(96576)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u={children:l.default.node},c=function(e){var r=e.children,t=i(e,o);return n.default.createElement("thead",t,n.default.createElement("tr",null,a.default.addScope(r,"col")))};c.propTypes=u,c.defaultProps={children:[]};var p=c;r.default=p},8078:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=o(t(67294)),l=o(t(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i={children:l.default.node},u=function(e){var r=e.children,t=d(e,a);return n.default.createElement("th",t,r)};u.propTypes=i,u.defaultProps={children:[]};var c=u;r.default=c},34847:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=u(t(67294)),l=u(t(45697)),a=u(t(47166)),o=u(t(17893)),d=u(t(96576)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var f=a.default.bind(o.default),s={children:l.default.node},h=function(e){var r=e.children,t=p(e,i),l=f(["row"]);return n.default.createElement("tr",c({},t,{className:t.className?"".concat(l," ").concat(t.className):l}),d.default.addScope(r,"row"))};h.propTypes=s,h.defaultProps={children:[]};var v=h;r.default=v},96576:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n,l=(n=t(67294))&&n.__esModule?n:{default:n};var a={addScope:function(e,r){var t=[];return l.default.Children.forEach(e,(function(e){t.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?r:void 0}))})),t}};r.default=a},98364:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(r,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(r,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(r,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(r,"Row",{enumerable:!0,get:function(){return a.default}}),r.default=void 0;var n=u(t(89650)),l=u(t(51523)),a=u(t(34847)),o=u(t(58741)),d=u(t(90703)),i=u(t(8078));function u(e){return e&&e.__esModule?e:{default:e}}var c=n.default;r.default=c},87462:(e,r,t)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:()=>n})}}]);