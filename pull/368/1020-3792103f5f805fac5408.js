"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[1020],{86159:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(96540)),r=u(a(5556)),o=u(a(67967)),l=u(a(52103)),i=u(a(36605)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},_=function(e){var t=e.children,a=m(e,d),r=n.default.useContext(l.default),i=(0,o.default)(s(["button",r.className]),a.className);return n.default.createElement("button",c({},a,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};_.propTypes=h;t.default=_},20999:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(96540)),r=d(a(5556)),o=d(a(67967)),l=d(a(52103)),i=d(a(17269));function d(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(i.default),c={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},m=function(e){var t=e.ariaLevel,a=e.variant,r=e.children,o=n.default.useContext(l.default);return n.default.createElement("div",{className:u("notice",a,o.className)},n.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:u("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(r,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};m.propTypes=c,m.defaultProps={ariaLevel:"2",variant:"important"};t.default=m},18778:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(96540)),r=c(a(5556)),o=c(a(46942)),l=c(a(67967)),i=c(a(52103)),d=c(a(16576)),u=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.default.bind(d.default),f={title:r.default.string},h=function(e){var t=e.title,a=s(e,u),r=n.default.useContext(i.default),l=(0,o.default)(p(["placeholder",r.className]),a.className),d=p(["inner"]);return n.default.createElement("div",m({},a,{className:l}),n.default.createElement("div",{className:d},n.default.createElement("p",{className:p("title")},t)))};h.propTypes=f,h.defaultProps={title:""};t.default=h},74647:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var n=l(a(20999)),r=l(a(18778)),o=l(a(86159));function l(e){return e&&e.__esModule?e:{default:e}}},91020:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(58168),r=a(53986),o=(a(96540),a(36665)),l=a(74647),i=["components"],d={},u="wrapper";function c(e){var t=e.components,a=(0,r.A)(e,i);return(0,o.mdx)(u,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"writing-documentation"},"Writing Documentation"),(0,o.mdx)("p",null,"Writing component documentation with ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," is easy. We support github style markdown and mdx. Simply add a ",(0,o.mdx)("inlineCode",{parentName:"p"},".doc.mdx")," file to ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," and it will be converted into react for you."),(0,o.mdx)("h2",{id:"loaders"},"Loaders"),(0,o.mdx)("p",null,"Terra Dev Site offer several webpack loaders to help write easier documentation. The loaders are all accessed through the use of webpacks ",(0,o.mdx)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module/#ruleresourcequery"},"resource query"),"."),(0,o.mdx)("p",null,"For example to use the example loader you would require your example with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"?dev-site-example")," resource query."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Example from './example?dev-site-example';\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/terra-application/pull/368/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/codeblock-loader"},"Codeblock Loader"),": Import a component into a syntax highlighted codeblock."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/terra-application/pull/368/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/example-loader"},"Example Loader"),": Render and example and display the code in a hidden section below it."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/terra-application/pull/368/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/package-loader"},"Package Loader"),": Convert package.json information into badges."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/terra-application/pull/368/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/props-table-loader"},"Props Table Loader"),": Create a props table for react components.")),(0,o.mdx)("h2",{id:"terra-documentation-components"},"Terra Documentation Components"),(0,o.mdx)("p",null,"Terra offers several light weight react components to help enrich your documentation from the terra-docs package."),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/368/dev_tools/cerner/documentation-components/button"},"terra-docs documentation"),"."),(0,o.mdx)("h2",{id:"mdx"},"MDX"),(0,o.mdx)("p",null,"Terra dev site uses MDX as a markdown loader. MDX allows you to mix JSX syntax into your markdown documents. This is very helpful for pulling in examples and richer content for documentation."),(0,o.mdx)("p",null,"To use mdx syntax you must use a .mdx file extension."),(0,o.mdx)("p",null,"For example the following block will render into:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-md"},'import { Notice } from \'@cerner/terra-docs\';\n\n# Hello, *terra*!\n\nBelow is an example of JSX embedded in Markdown.\n\n<Notice variant="important" ariaLevel="3">\n\nIf you leave spaces between your component and it\'s content, the content will be parsed by **mdx**.\n\n</Notice>\n')),(0,o.mdx)("p",null,"With the output below:"),(0,o.mdx)("hr",null),(0,o.mdx)("h1",{id:"hello-terra"},"Hello, ",(0,o.mdx)("em",{parentName:"h1"},"terra"),"!"),(0,o.mdx)("p",null,"Below is an example of JSX embedded in Markdown."),(0,o.mdx)(l.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,o.mdx)("p",null,"If you leave spaces between your component and it's content, the content will be parsed by ",(0,o.mdx)("strong",{parentName:"p"},"mdx"),".")),(0,o.mdx)("hr",null),(0,o.mdx)("p",null,"For more information see ",(0,o.mdx)("a",{parentName:"p",href:"https://mdxjs.com/"},"https://mdxjs.com/")),(0,o.mdx)("h3",{id:"mdx-loader"},"MDX loader"),(0,o.mdx)("p",null,"Mdx is loaded at build time rather than interpreted at run time. The mdx loader that is used is more strict that the 'marked' library previously used."),(0,o.mdx)("p",null,"The MDX loader requires closing tags. For example the before markdown would fail because the img tag was not closed."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},'- <img height="128" width="128" src="https://github.com/cerner/terra-dev-site/raw/main/terra.png" alt="terra logo" >\n+ <img height="128" width="128" src="https://github.com/cerner/terra-dev-site/raw/main/terra.png" alt="terra logo" />\n')),(0,o.mdx)("p",null,"MDX also has a bug where a comment cannot directly follow a closing tag."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"-<h1>\n-hi mom\n-</h1>\n-\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n+<h1>\n+hi mom\n+</h1>\n\n+\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n")))}c.isMDXComponent=!0},36605:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},17269:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},16576:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},58168:(e,t,a)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{A:()=>n})},53986:(e,t,a)=>{function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{A:()=>n})}}]);