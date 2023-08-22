"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[4900],{24900:(e,r,t)=>{t.r(r),t.d(r,{default:()=>m});var n=t(87462),l=t(44925),a=(t(67294),t(81254)),o=t(2010),d=["components"],i={},u="wrapper";function p(e){var r=e.components,t=(0,l.Z)(e,d);return(0,a.mdx)(u,(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)(o.ZP,{mdxType:"PropsTable"},(0,a.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The components to be rendered within the context of the ApplicationLoadingOverlayProvider.\nComponents rendered here are able to interact with ApplicationLoadingOverlayProvider through\nthe ApplicationLoadingOverlayContext."))),(0,a.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"scrollRefCallback"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A function to be called with the current ref of the scrollable element rendered within the\nApplicationLoadingOverlayProvider.")))))}p.isMDXComponent=!0;var c=["components"],f={},s="wrapper";function m(e){var r=e.components,t=(0,l.Z)(e,c);return(0,a.mdx)(s,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"applicationloadingoverlayprovider"},"ApplicationLoadingOverlayProvider"),(0,a.mdx)("p",null,"The ApplicationLoadingOverlayProvider defines a container within which loading overlays may be presented."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/terra-application/pull/346/application/terra-application/components/application-loading-overlay"},"ApplicationLoadingOverlay")," components rendered by children of the ApplicationLoadingOverlayProvider will cause the\nApplicationLoadingOverlayProvider to render a loading overlay on top of those children. A single loading overlay will be rendered,\neven if multiple ApplicationLoadingOverlay components are rendered at the same time."),(0,a.mdx)("p",null,"The style of the overlay will be determined by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"backgroundStyle")," prop specified for each ApplicationLoadingOverlay,\nwith the darkest specified style being honored."),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Note: The ApplicationLoadingOverlayProvider has a default height of ",(0,a.mdx)("inlineCode",{parentName:"p"},"100%"),". This allows the overlay to be appropriately\npositioned over the rest of the provider's content. If a different height is desired, a custom class can be provied to\nthe ApplicationOverlayProvider to overwrite the default value.")),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ApplicationLoadingOverlayProvider } from 'terra-application/lib/application-loading-overlay';\n")),(0,a.mdx)("h2",{id:"props"},"Props"),(0,a.mdx)(p,{mdxType:"ApplicationLoadingOverlayProviderProps"}))}m.isMDXComponent=!0},2010:(e,r,t)=>{var n=t(64836),l=t(18698);r.dS=r.O=r.Ex=r.mW=void 0,Object.defineProperty(r,"X2",{enumerable:!0,get:function(){return u.Row}}),r.ZP=r.Di=void 0;var a=f(t(67294)),o=n(t(45697)),d=n(t(47166)),i=t(48720),u=f(t(98364)),p=n(t(50007));function c(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:r})(e)}function f(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=c(r);if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(n,o,d):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}var s=d.default.bind(p.default),m={children:o.default.node},y={isRequired:o.default.bool},v=function(e){var r=e.children;return a.default.createElement(u.Cell,{className:s("bold")},r)};r.O=v,v.propTypes=m;var b=function(e){var r=e.children;return a.default.createElement(u.Cell,{className:s("code-block-override")},r)};r.Di=b,b.propTypes=m;var h=function(e){var r=e.isRequired;return a.default.createElement(u.Cell,{className:s([r?["required"]:[]])},r?"required":"optional")};r.dS=h,h.propTypes=y;var O=function(e){var r=e.children;return a.default.createElement(u.Cell,{className:s("code-block-override")},r)};r.mW=O,O.propTypes=m;var g=function(e){var r=e.children;return a.default.createElement(u.Cell,null,r)};r.Ex=g,g.propTypes=m;var _=function(e){var r=e.children,t=(0,a.useContext)(i.ThemeContext);return a.default.createElement(u.default,{paddingStyle:"compact",className:s("table",t.className)},a.default.createElement(u.Header,{className:s("header")},a.default.createElement(u.HeaderCell,null,"Prop"),a.default.createElement(u.HeaderCell,null,"Type"),a.default.createElement(u.HeaderCell,null,"Required"),a.default.createElement(u.HeaderCell,null,"Default"),a.default.createElement(u.HeaderCell,null,"Description")),a.default.createElement(u.Body,null,r))};_.propTypes=m;var x=_;r.ZP=x},17893:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},50007:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});const n={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},89650:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=p(t(67294)),l=p(t(45697)),a=p(t(94184)),o=p(t(47166)),d=p(t(50026)),i=p(t(17893)),u=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=o.default.bind(i.default),m={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},y=function(e){var r=e.children,t=e.disableStripes,l=e.paddingStyle,o=f(e,u),i=n.default.useContext(d.default),p=(0,a.default)(s("table",{striped:!t},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},i.className),o.className);return n.default.createElement("table",c({},o,{className:p}),r)};y.propTypes=m,y.defaultProps={disableStripes:!1,paddingStyle:"none"};var v=y;r.default=v},51523:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=o(t(67294)),l=o(t(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i={children:l.default.node},u=function(e){var r=e.children,t=d(e,a);return n.default.createElement("tbody",t,r)};u.propTypes=i,u.defaultProps={children:[]};var p=u;r.default=p},58741:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=o(t(67294)),l=o(t(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i={children:l.default.node},u=function(e){var r=e.children,t=d(e,a);return n.default.createElement("td",t,r)};u.propTypes=i,u.defaultProps={children:[]};var p=u;r.default=p},90703:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=d(t(67294)),l=d(t(45697)),a=d(t(96576)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u={children:l.default.node},p=function(e){var r=e.children,t=i(e,o);return n.default.createElement("thead",t,n.default.createElement("tr",null,a.default.addScope(r,"col")))};p.propTypes=u,p.defaultProps={children:[]};var c=p;r.default=c},8078:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=o(t(67294)),l=o(t(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i={children:l.default.node},u=function(e){var r=e.children,t=d(e,a);return n.default.createElement("th",t,r)};u.propTypes=i,u.defaultProps={children:[]};var p=u;r.default=p},73045:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=u(t(67294)),l=u(t(45697)),a=u(t(47166)),o=u(t(17893)),d=u(t(96576)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var f=a.default.bind(o.default),s={children:l.default.node},m=function(e){var r=e.children,t=c(e,i),l=f(["row"]);return n.default.createElement("tr",p({},t,{className:t.className?"".concat(l," ").concat(t.className):l}),d.default.addScope(r,"row"))};m.propTypes=s,m.defaultProps={children:[]};var y=m;r.default=y},96576:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n,l=(n=t(67294))&&n.__esModule?n:{default:n};var a={addScope:function(e,r){var t=[];return l.default.Children.forEach(e,(function(e){t.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?r:void 0}))})),t}};r.default=a},98364:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(r,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(r,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(r,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(r,"Row",{enumerable:!0,get:function(){return a.default}}),r.default=void 0;var n=u(t(89650)),l=u(t(51523)),a=u(t(73045)),o=u(t(58741)),d=u(t(90703)),i=u(t(8078));function u(e){return e&&e.__esModule?e:{default:e}}var p=n.default;r.default=p},87462:(e,r,t)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:()=>n})},44925:(e,r,t)=>{function n(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(r,{Z:()=>n})}}]);