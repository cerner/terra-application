"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[7900],{87900:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(87462),l=r(44925),a=(r(67294),r(81254)),o=r(2010),d=["components"],u={},i="wrapper";function p(e){var t=e.components,r=(0,l.Z)(e,d);return(0,a.mdx)(i,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.ZP,{mdxType:"PropsTable"},(0,a.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"isOpen"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A boolean value indicating whether the loading overlay should be visible or not."))),(0,a.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"backgroundStyle"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'dark'\n  'light'\n  'clear'\n],\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A string indicating the background style for the overlay. One of: ",(0,a.mdx)("inlineCode",{parentName:"p"},"dark"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"light"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"clear"),".")))))}p.isMDXComponent=!0;var c=["components"],f={},s="wrapper";function m(e){var t=e.components,r=(0,l.Z)(e,c);return(0,a.mdx)(s,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"applicationloadingoverlay"},"ApplicationLoadingOverlay"),(0,a.mdx)("p",null,"The ApplicationLoadingOverlay is used to render loading overlays within the application."),(0,a.mdx)("p",null,"When mounted, the ApplicationLoadingOverlay will communicate with an ancestor\n",(0,a.mdx)("a",{parentName:"p",href:"/terra-application/pull/362/application/terra-application/components/application-loading-overlay-provider"},"ApplicationLoadingOverlayProvider")," to\npresent a loading overlay."),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"See the ",(0,a.mdx)("a",{parentName:"p",href:"/terra-application/pull/362/application/terra-application/how-to/show-loading-overlays"},"How to Show Loading Overlays")," page for usage information.")),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';\n")),(0,a.mdx)("h2",{id:"props"},"Props"),(0,a.mdx)(p,{mdxType:"ApplicationLoadingOverlayProps"}))}m.isMDXComponent=!0},2010:(e,t,r)=>{var n=r(64836),l=r(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return i.Row}}),t.ZP=t.Di=void 0;var a=f(r(67294)),o=n(r(45697)),d=n(r(19845)),u=r(48720),i=f(r(98364)),p=n(r(50007));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(n,o,d):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}var s=d.default.bind(p.default),m={children:o.default.node},y={isRequired:o.default.bool};(t.O=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("bold")},t)}).propTypes=m,(t.Di=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("code-block-override")},t)}).propTypes=m,(t.dS=function(e){var t=e.isRequired;return a.default.createElement(i.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")}).propTypes=y,(t.mW=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("code-block-override")},t)}).propTypes=m,(t.Ex=function(e){var t=e.children;return a.default.createElement(i.Cell,null,t)}).propTypes=m;var b=function(e){var t=e.children,r=(0,a.useContext)(u.ThemeContext);return a.default.createElement(i.default,{paddingStyle:"compact",className:s("table",r.className)},a.default.createElement(i.Header,{className:s("header")},a.default.createElement(i.HeaderCell,null,"Prop"),a.default.createElement(i.HeaderCell,null,"Type"),a.default.createElement(i.HeaderCell,null,"Required"),a.default.createElement(i.HeaderCell,null,"Default"),a.default.createElement(i.HeaderCell,null,"Description")),a.default.createElement(i.Body,null,t))};b.propTypes=m;t.ZP=b},17893:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},50007:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},89650:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(r(67294)),l=p(r(45697)),a=p(r(93967)),o=p(r(19845)),d=p(r(50026)),u=p(r(17893)),i=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=o.default.bind(u.default),m={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,r=e.disableStripes,l=e.paddingStyle,o=f(e,i),u=n.default.useContext(d.default),p=(0,a.default)(s("table",{striped:!r},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},u.className),o.className);return n.default.createElement("table",c({},o,{className:p}),t)};y.propTypes=m,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},51523:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),l=o(r(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("tbody",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},58741:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),l=o(r(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("td",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},90703:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(67294)),l=d(r(45697)),a=d(r(96576)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i={children:l.default.node},p=function(e){var t=e.children,r=u(e,o);return n.default.createElement("thead",r,n.default.createElement("tr",null,a.default.addScope(t,"col")))};p.propTypes=i,p.defaultProps={children:[]};t.default=p},8078:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),l=o(r(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("th",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},73045:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),l=i(r(45697)),a=i(r(19845)),o=i(r(17893)),d=i(r(96576)),u=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var f=a.default.bind(o.default),s={children:l.default.node},m=function(e){var t=e.children,r=c(e,u),l=f(["row"]);return n.default.createElement("tr",p({},r,{className:r.className?"".concat(l," ").concat(r.className):l}),d.default.addScope(t,"row"))};m.propTypes=s,m.defaultProps={children:[]};t.default=m},96576:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=r(67294))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var r=[];return l.default.Children.forEach(e,(function(e){r.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=a},98364:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=i(r(89650)),l=i(r(51523)),a=i(r(73045)),o=i(r(58741)),d=i(r(90703)),u=i(r(8078));function i(e){return e&&e.__esModule?e:{default:e}}t.default=n.default},87462:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:()=>n})},44925:(e,t,r)=>{function n(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}r.d(t,{Z:()=>n})}}]);