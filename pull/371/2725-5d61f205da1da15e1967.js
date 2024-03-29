"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[2725],{22725:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(58168),l=r(53986),a=(r(96540),r(36665)),o=r(3919),d=["components"],u={},i="wrapper";function p(e){var t=e.components,r=(0,l.A)(e,d);return(0,a.mdx)(i,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.Ay,{mdxType:"PropsTable"},(0,a.mdx)(o.fI,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.dt,{mdxType:"PropNameCell"},"isOpen"),(0,a.mdx)(o.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A boolean value indicating whether the loading overlay should be visible or not."))),(0,a.mdx)(o.fI,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.dt,{mdxType:"PropNameCell"},"backgroundStyle"),(0,a.mdx)(o.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'dark'\n  'light'\n  'clear'\n],\n"))),(0,a.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A string indicating the background style for the overlay. One of: ",(0,a.mdx)("inlineCode",{parentName:"p"},"dark"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"light"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"clear"),".")))))}p.isMDXComponent=!0;var c=["components"],f={},s="wrapper";function m(e){var t=e.components,r=(0,l.A)(e,c);return(0,a.mdx)(s,(0,n.A)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"applicationloadingoverlay"},"ApplicationLoadingOverlay"),(0,a.mdx)("p",null,"The ApplicationLoadingOverlay is used to render loading overlays within the application."),(0,a.mdx)("p",null,"When mounted, the ApplicationLoadingOverlay will communicate with an ancestor\n",(0,a.mdx)("a",{parentName:"p",href:"/terra-application/pull/371/application/terra-application/components/application-loading-overlay-provider"},"ApplicationLoadingOverlayProvider")," to\npresent a loading overlay."),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"See the ",(0,a.mdx)("a",{parentName:"p",href:"/terra-application/pull/371/application/terra-application/how-to/show-loading-overlays"},"How to Show Loading Overlays")," page for usage information.")),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';\n")),(0,a.mdx)("h2",{id:"props"},"Props"),(0,a.mdx)(p,{mdxType:"ApplicationLoadingOverlayProps"}))}m.isMDXComponent=!0},3919:(e,t,r)=>{var n=r(24994),l=r(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return i.Row}}),t.Ay=t.$d=void 0;var a=f(r(96540)),o=n(r(5556)),d=n(r(67967)),u=r(67016),i=f(r(26984)),p=n(r(94089));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(n,o,d):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}var s=d.default.bind(p.default),m={children:o.default.node},y={isRequired:o.default.bool};(t.dt=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("bold")},t)}).propTypes=m,(t.$d=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("code-block-override")},t)}).propTypes=m,(t.YZ=function(e){var t=e.isRequired;return a.default.createElement(i.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")}).propTypes=y,(t.NZ=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("code-block-override")},t)}).propTypes=m,(t.Hd=function(e){var t=e.children;return a.default.createElement(i.Cell,null,t)}).propTypes=m;var b=function(e){var t=e.children,r=(0,a.useContext)(u.ThemeContext);return a.default.createElement(i.default,{paddingStyle:"compact",className:s("table",r.className)},a.default.createElement(i.Header,{className:s("header")},a.default.createElement(i.HeaderCell,null,"Prop"),a.default.createElement(i.HeaderCell,null,"Type"),a.default.createElement(i.HeaderCell,null,"Required"),a.default.createElement(i.HeaderCell,null,"Default"),a.default.createElement(i.HeaderCell,null,"Description")),a.default.createElement(i.Body,null,t))};b.propTypes=m;t.Ay=b},78482:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},94089:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},85444:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(r(96540)),l=p(r(5556)),a=p(r(46942)),o=p(r(67967)),d=p(r(52103)),u=p(r(78482)),i=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=o.default.bind(u.default),m={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,r=e.disableStripes,l=e.paddingStyle,o=f(e,i),u=n.default.useContext(d.default),p=(0,a.default)(s("table",{striped:!r},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},u.className),o.className);return n.default.createElement("table",c({},o,{className:p}),t)};y.propTypes=m,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},61452:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("tbody",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},86472:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("td",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},97441:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(96540)),l=d(r(5556)),a=d(r(10767)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i={children:l.default.node},p=function(e){var t=e.children,r=u(e,o);return n.default.createElement("thead",r,n.default.createElement("tr",null,a.default.addScope(t,"col")))};p.propTypes=i,p.defaultProps={children:[]};t.default=p},22417:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u={children:l.default.node},i=function(e){var t=e.children,r=d(e,a);return n.default.createElement("th",r,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},36142:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(96540)),l=i(r(5556)),a=i(r(67967)),o=i(r(78482)),d=i(r(10767)),u=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var f=a.default.bind(o.default),s={children:l.default.node},m=function(e){var t=e.children,r=c(e,u),l=f(["row"]);return n.default.createElement("tr",p({},r,{className:r.className?"".concat(l," ").concat(r.className):l}),d.default.addScope(t,"row"))};m.propTypes=s,m.defaultProps={children:[]};t.default=m},10767:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=r(96540))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var r=[];return l.default.Children.forEach(e,(function(e){r.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=a},26984:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=i(r(85444)),l=i(r(61452)),a=i(r(36142)),o=i(r(86472)),d=i(r(97441)),u=i(r(22417));function i(e){return e&&e.__esModule?e:{default:e}}t.default=n.default},58168:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{A:()=>n})},53986:(e,t,r)=>{function n(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}r.d(t,{A:()=>n})}}]);