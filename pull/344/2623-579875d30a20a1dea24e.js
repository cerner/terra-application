/*! For license information please see 2623-579875d30a20a1dea24e.js.LICENSE.txt */
"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[2623],{40996:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(67294)),a=d(r(45697)),o=d(r(47166)),l=d(r(50026)),i=d(r(66983)),c=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.default.bind(i.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:a.default.string},_=function(e){var t=e.children,r=u(e,c),a=n.default.useContext(l.default),i=(0,o.default)(p(["button",a.className]),r.className);return n.default.createElement("button",s({},r,{type:"button",className:i,onBlur:m,onMouseDown:h,"data-focus-styles-enabled":!0}),t)};_.propTypes=f;var x=_;t.default=x},59278:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(67294)),a=c(r(45697)),o=c(r(47166)),l=c(r(50026)),i=c(r(30866));function c(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(i.default),s={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},u=function(e){var t=e.ariaLevel,r=e.variant,a=e.children,o=n.default.useContext(l.default);return n.default.createElement("div",{className:d("notice",r,o.className)},n.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(r))),n.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:d("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(r),n.default.Children.map(a,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};u.propTypes=s,u.defaultProps={ariaLevel:"2",variant:"important"};var p=u;t.default=p},47306:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(67294)),a=s(r(45697)),o=s(r(94184)),l=s(r(47166)),i=s(r(50026)),c=s(r(42620)),d=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=l.default.bind(c.default),h={title:a.default.string},f=function(e){var t=e.title,r=p(e,d),a=n.default.useContext(i.default),l=(0,o.default)(m(["placeholder",a.className]),r.className),c=m(["inner"]);return n.default.createElement("div",u({},r,{className:l}),n.default.createElement("div",{className:c},n.default.createElement("p",{className:m("title")},t)))};f.propTypes=h,f.defaultProps={title:""};var _=f;t.default=_},34261:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var n=l(r(59278)),a=l(r(47306)),o=l(r(40996));function l(e){return e&&e.__esModule?e:{default:e}}},42623:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(87462),a=r(85893),o=r(11151),l=r(34261);function i(e){var t=(0,n.Z)({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",pre:"pre",ul:"ul",li:"li",hr:"hr",em:"em",strong:"strong",h3:"h3"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"writing-documentation",children:"Writing Documentation"}),"\n",(0,a.jsxs)(t.p,{children:["Writing component documentation with ",(0,a.jsx)(t.code,{children:"terra-dev-site"})," is easy. We support github style markdown and mdx. Simply add a ",(0,a.jsx)(t.code,{children:".doc.mdx"})," file to ",(0,a.jsx)(t.code,{children:"terra-dev-site"})," and it will be converted into react for you."]}),"\n",(0,a.jsx)(t.h2,{id:"loaders",children:"Loaders"}),"\n",(0,a.jsxs)(t.p,{children:["Terra Dev Site offer several webpack loaders to help write easier documentation. The loaders are all accessed through the use of webpacks ",(0,a.jsx)(t.a,{href:"https://webpack.js.org/configuration/module/#ruleresourcequery",children:"resource query"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["For example to use the example loader you would require your example with the ",(0,a.jsx)(t.code,{children:"?dev-site-example"})," resource query."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"import Example from './example?dev-site-example';\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/terra-application/pull/344/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/codeblock-loader",children:"Codeblock Loader"}),": Import a component into a syntax highlighted codeblock."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/terra-application/pull/344/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/example-loader",children:"Example Loader"}),": Render and example and display the code in a hidden section below it."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/terra-application/pull/344/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/package-loader",children:"Package Loader"}),": Convert package.json information into badges."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/terra-application/pull/344/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/props-table-loader",children:"Props Table Loader"}),": Create a props table for react components."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"terra-documentation-components",children:"Terra Documentation Components"}),"\n",(0,a.jsx)(t.p,{children:"Terra offers several light weight react components to help enrich your documentation from the terra-docs package."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/terra-application/pull/344/dev_tools/cerner/documentation-components/button",children:"terra-docs documentation"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"mdx",children:"MDX"}),"\n",(0,a.jsx)(t.p,{children:"Terra dev site uses MDX as a markdown loader. MDX allows you to mix JSX syntax into your markdown documents. This is very helpful for pulling in examples and richer content for documentation."}),"\n",(0,a.jsx)(t.p,{children:"To use mdx syntax you must use a .mdx file extension."}),"\n",(0,a.jsx)(t.p,{children:"For example the following block will render into:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-md",children:'import { Notice } from \'@cerner/terra-docs\';\n\n# Hello, *terra*!\n\nBelow is an example of JSX embedded in Markdown.\n\n<Notice variant="important" ariaLevel="3">\n\nIf you leave spaces between your component and it\'s content, the content will be parsed by **mdx**.\n\n</Notice>\n'})}),"\n",(0,a.jsx)(t.p,{children:"With the output below:"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.h1,{id:"hello-terra",children:["Hello, ",(0,a.jsx)(t.em,{children:"terra"}),"!"]}),"\n",(0,a.jsx)(t.p,{children:"Below is an example of JSX embedded in Markdown."}),"\n",(0,a.jsx)(l.Notice,{variant:"important",ariaLevel:"3",children:(0,a.jsxs)(t.p,{children:["If you leave spaces between your component and it's content, the content will be parsed by ",(0,a.jsx)(t.strong,{children:"mdx"}),"."]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:["For more information see ",(0,a.jsx)(t.a,{href:"https://mdxjs.com/",children:"https://mdxjs.com/"})]}),"\n",(0,a.jsx)(t.h3,{id:"mdx-loader",children:"MDX loader"}),"\n",(0,a.jsx)(t.p,{children:"Mdx is loaded at build time rather than interpreted at run time. The mdx loader that is used is more strict that the 'marked' library previously used."}),"\n",(0,a.jsx)(t.p,{children:"The MDX loader requires closing tags. For example the before markdown would fail because the img tag was not closed."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:'- <img height="128" width="128" src="https://github.com/cerner/terra-dev-site/raw/main/terra.png" alt="terra logo" >\n+ <img height="128" width="128" src="https://github.com/cerner/terra-dev-site/raw/main/terra.png" alt="terra logo" />\n'})}),"\n",(0,a.jsx)(t.p,{children:"MDX also has a bug where a comment cannot directly follow a closing tag."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:"-<h1>\n-hi mom\n-</h1>\n-\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n+<h1>\n+hi mom\n+</h1>\n\n+\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n"})})]})}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,n.Z)({},(0,o.ah)(),e.components).wrapper;return t?(0,a.jsx)(t,(0,n.Z)({},e,{children:(0,a.jsx)(i,e)})):i(e)}},66983:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},75251:(e,t,r)=>{var n=r(67294),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,o={},d=null,s=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:d,ref:s,props:o,_owner:l.current}}t.jsx=d,t.jsxs=d},85893:(e,t,r)=>{e.exports=r(75251)},87462:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:()=>n})}}]);