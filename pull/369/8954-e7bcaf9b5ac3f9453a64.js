/*! For license information please see 8954-e7bcaf9b5ac3f9453a64.js.LICENSE.txt */
(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[8954],{38954:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(58168),a=n(53986),o=(n(96540),n(36665)),i=n(98709),l=["components"],u={},c="wrapper";function s(e){var t=e.components,n=(0,a.A)(e,l);return(0,o.mdx)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"faq"},"FAQ"),(0,o.mdx)("h2",{id:"my-components-are-visible-in-the-raw-test-route-but-cut-off-when-displayed-in-the-dev-site-frame"},"My components are visible in the raw test route but cut off when displayed in the dev site frame"),(0,o.mdx)("p",null,"When components are displayed in the raw route there is an unbroken chain of height 100%s set on the components such that test components with 100% height will fill the available area. With pages, for aesthetic reasons we do not provide a 100% height on all wrapping components. To ensure components display correctly in both raw routes and pages either use block layout or define a fixed hight above any components expecting 100% height."),(0,o.mdx)("h2",{id:"i-get-the-webpack-error-invalid-configuration-object-webpack-has-been-initialised-using-a-configuration-object-that-does-not-match-the-api-schema"},"I get the webpack error: Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema."),(0,o.mdx)("p",null,"You can get this error when using webpack 4. Part of the TerraDevSite webpack plugin we inject an entry to build the site. Webpack requires an entry to function but when the check is performed changed between webpack 4 and 5. In webpack 4 an entry is checked prior to running the plugin where as in webpack 5 the check is performed after."),(0,o.mdx)("p",null,"To solve this issue you have two options. Upgrade to webpack 5 or add a dummy entrypoint that TerraDevSite will remove before bundling. Upgrading to webpack 5 is recommended."),(0,o.mdx)(i.$T,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,o.mdx)("p",null,"If you chose to add the dummy entry point it will have to resolve to a real file. It doesn't matter what file since TerraDevSite will remove it, but webpack 4 does check that the entrypoint file is real.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"  entry: {\n    terraDevSiteDummy: './dummy.js',\n  },\n")))}s.isMDXComponent=!0},15627:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___4bEP7","orion-fusion-theme":"Button-module__orion-fusion-theme___-asQG",button:"Button-module__button___ApsLA","is-active":"Button-module__is-active___qQ0Ws"}},54307:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___5BChI","orion-fusion-theme":"Notice-module__orion-fusion-theme___aSsY6",notice:"Notice-module__notice___vIBYD",children:"Notice-module__children___EfVK8",accessory:"Notice-module__accessory___mxcmK",title:"Notice-module__title___r-Kpl","ux-recommendation":"Notice-module__ux-recommendation___8s9jC",caution:"Notice-module__caution___acpOX",deprecation:"Notice-module__deprecation___dIaS-",maintenance:"Notice-module__maintenance___HExH2",important:"Notice-module__important___IEMi3","not-supported":"Notice-module__not-supported___yw6wc",paragraph:"Notice-module__paragraph___noqZV",list:"Notice-module__list___gn8WL"}},48138:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___RnXWM","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___qaxyr",placeholder:"Placeholder-module__placeholder___-1tdS",inner:"Placeholder-module__inner___T2qCz",title:"Placeholder-module__title___Qsy1W"}},86689:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(96540)),a=c(n(46028)),o=c(n(18707)),i=c(n(67887)),l=c(n(15627)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(l.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:a.default.string},_=function(e){var t=e.children,n=d(e,u),a=r.default.useContext(i.default),l=(0,o.default)(p(["button",a.className]),n.className);return r.default.createElement("button",s({},n,{type:"button",className:l,onBlur:f,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};_.propTypes=h;t.default=_},9545:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),a=u(n(46028)),o=u(n(18707)),i=u(n(67887)),l=u(n(54307));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),s={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,o=r.default.useContext(i.default);return r.default.createElement("div",{className:c("notice",n,o.className)},r.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:c("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};d.propTypes=s,d.defaultProps={ariaLevel:"2",variant:"important"};t.default=d},25896:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(96540)),a=s(n(46028)),o=s(n(73522)),i=s(n(18707)),l=s(n(67887)),u=s(n(48138)),c=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=i.default.bind(u.default),m={title:a.default.string},h=function(e){var t=e.title,n=p(e,c),a=r.default.useContext(l.default),i=(0,o.default)(f(["placeholder",a.className]),n.className),u=f(["inner"]);return r.default.createElement("div",d({},n,{className:i}),r.default.createElement("div",{className:u},r.default.createElement("p",{className:f("title")},t)))};h.propTypes=m,h.defaultProps={title:""};t.default=h},98709:(e,t,n)=>{"use strict";Object.defineProperty(t,"$T",{enumerable:!0,get:function(){return r.default}});var r=i(n(9545)),a=i(n(25896)),o=i(n(86689));function i(e){return e&&e.__esModule?e:{default:e}}},49326:(e,t,n)=>{"use strict";var r=n(3381);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},46028:(e,t,n)=>{e.exports=n(49326)()},3381:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},67887:(e,t,n)=>{"use strict";var r=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.themeContextShape=t.default=void 0;var a=r(n(96540)),o=r(n(46028)),i=a.default.createContext({});t.themeContextShape=o.default.shape({className:o.default.string,density:o.default.string}),t.default=i},18707:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o.call(this,n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return this&&this[e]||e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(this,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,this&&this[n]||n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},73522:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},58168:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{A:()=>r})},53986:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{A:()=>r})}}]);