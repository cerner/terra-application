"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[3074],{86159:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(96540)),l=u(a(5556)),r=u(a(67967)),o=u(a(52103)),i=u(a(36605)),c=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=r.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:l.default.string},h=function(e){var t=e.children,a=s(e,c),l=n.default.useContext(o.default),i=(0,r.default)(m(["button",l.className]),a.className);return n.default.createElement("button",d({},a,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;t.default=h},20999:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(96540)),l=c(a(5556)),r=c(a(67967)),o=c(a(52103)),i=c(a(17269));function c(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(i.default),d={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,a=e.variant,l=e.children,r=n.default.useContext(o.default);return n.default.createElement("div",{className:u("notice",a,r.className)},n.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:u("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(l,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},18778:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(96540)),l=d(a(5556)),r=d(a(46942)),o=d(a(67967)),i=d(a(52103)),c=d(a(16576)),u=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=o.default.bind(c.default),f={title:l.default.string},_=function(e){var t=e.title,a=m(e,u),l=n.default.useContext(i.default),o=(0,r.default)(p(["placeholder",l.className]),a.className),c=p(["inner"]);return n.default.createElement("div",s({},a,{className:o}),n.default.createElement("div",{className:c},n.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};t.default=_},74647:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var n=o(a(20999)),l=o(a(18778)),r=o(a(86159));function o(e){return e&&e.__esModule?e:{default:e}}},63074:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(58168),l=a(53986),r=(a(96540),a(36665)),o=a(74647),i=["components"],c={},u="wrapper";function d(e){var t=e.components,a=(0,l.A)(e,i);return(0,r.mdx)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"polyfills"},"Polyfills"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/367/application/terra-application/application"},"terra-application")," package requires polyfills to function in some of its supported browsers. We recommend using the ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@cerner/terra-polyfill"},"terra-polyfill")," package to ensure the minimum requirements are met for a project."),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import '@cerner/terra-polyfill';\n")),(0,r.mdx)(o.Notice,{variant:"caution",ariaLevel:"3",mdxType:"Notice"},"The polyfill should be imported only once for an application. Duplication may lead to increased bundle sizes and decreased performance of an application."),(0,r.mdx)(o.Notice,{ariaLevel:"3",mdxType:"Notice"},"The polyfill should be imported as early as possible in an application's lifecycle to ensure that the polyfilled features are available when they are needed."),(0,r.mdx)("h2",{id:"included-polyfills"},"Included Polyfills"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/zloirock/core-js"},(0,r.mdx)("inlineCode",{parentName:"a"},"core-js"))," - Includes polyfills for ECMAScript up to 2021: promises, symbols, collections, iterators, typed arrays, many other features",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Only stable features are included by default. Any ES features under proposal will require additional polyfills if they are used."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/regenerator-runtime"},(0,r.mdx)("inlineCode",{parentName:"a"},"regenerator-runtime"))," - Standalone runtime for Regenerator-compiled generator and async functions"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/whatwg-fetch"},"'whatwg-fetch'")," - A window.fetch polyfill"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/abortcontroller-polyfill"},"'abortcontroller-polyfill'")," - An AbortController polyfill"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/mutationobserver-shim/v/0.3.3"},"'mutationobserver-shim'")," - A polyfill for the MutationObserver API"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/wicg-inert"},"HTMLElement.inert")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/contains"},"Node.contains")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/matches"},"Element.matches")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Intl"))),(0,r.mdx)("h3",{id:"filtering-core-js-with-babel"},"Filtering ",(0,r.mdx)("inlineCode",{parentName:"h3"},"core-js")," with Babel"),(0,r.mdx)("p",null,"The set of polyfills included by core-js an be customized by modifying the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@babel/preset-env")," configuration. See ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js#babelpreset-env"},"core-js documentation")," for more details."),(0,r.mdx)("p",null,"For example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"module.exports = (api) => {\n  api.cache(false);\n  api.assertVersion('^7.4.4');\n\n  return {\n    presets: [\n-     '@babel/preset-env',\n+     ['@babel/preset-env', { useBuiltIns: 'entry', corejs: { version: 3.14 } }], // version should match core-js dependency version\n      '@babel/preset-react',\n    ],\n  };\n};\n")))}d.isMDXComponent=!0},36605:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},17269:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},16576:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},58168:(e,t,a)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{A:()=>n})},53986:(e,t,a)=>{function n(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}a.d(t,{A:()=>n})}}]);