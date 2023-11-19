"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[8443],{40996:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),o=d(n(47166)),l=d(n(50026)),i=d(n(66983)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(i.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:r.default.string},h=function(e){var t=e.children,n=s(e,u),r=a.default.useContext(l.default),i=(0,o.default)(p(["button",r.className]),n.className);return a.default.createElement("button",c({},n,{type:"button",className:i,onBlur:m,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;t.default=h},59278:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),o=u(n(47166)),l=u(n(50026)),i=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(i.default),c={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,o=a.default.useContext(l.default);return a.default.createElement("div",{className:d("notice",n,o.className)},a.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:d("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=c,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},47306:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),o=c(n(94184)),l=c(n(47166)),i=c(n(50026)),u=c(n(42620)),d=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=l.default.bind(u.default),f={title:r.default.string},_=function(e){var t=e.title,n=p(e,d),r=a.default.useContext(i.default),l=(0,o.default)(m(["placeholder",r.className]),n.className),u=m(["inner"]);return a.default.createElement("div",s({},n,{className:l}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:m("title")},t)))};_.propTypes=f,_.defaultProps={title:""};t.default=_},34261:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=l(n(59278)),r=l(n(47306)),o=l(n(40996));function l(e){return e&&e.__esModule?e:{default:e}}},28443:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(87462),r=n(44925),o=(n(67294),n(81254)),l=(n(34261),["components"]),i={},u="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.mdx)(u,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"v800-upgrade-guide"},"v8.0.0 Upgrade Guide"),(0,o.mdx)("p",null,"This document will provide information on upgrading from ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"7.x.x")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"8.0.0"),"."),(0,o.mdx)("h2",{id:"dependency-updates"},"Dependency updates"),(0,o.mdx)("p",null,"Terra Dev Site was updated to use React-Intl ",(0,o.mdx)("inlineCode",{parentName:"p"},"v5")," and drops support for React-Intl ",(0,o.mdx)("inlineCode",{parentName:"p"},"v4")," and lower.\nProjects consuming terra-dev-site version 8 should use React Intl version >= 5."),(0,o.mdx)("p",null,"React-intl V5 no longer exports the ",(0,o.mdx)("inlineCode",{parentName:"p"},"intlShape")," consuming project should replace the ",(0,o.mdx)("inlineCode",{parentName:"p"},"intlShape")," with ",(0,o.mdx)("inlineCode",{parentName:"p"},"PropTypes.shape()")," containing the functions that are utilized by the component. See ",(0,o.mdx)("a",{parentName:"p",href:"https://formatjs.io/docs/intl#the-intl-object"},"doc")," for most complete and up to date intl shape."),(0,o.mdx)("p",null,"Follow the upgrade guides of react-intl to know more about the breaking changes : "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"v5 Upgrade Guide - ",(0,o.mdx)("a",{parentName:"li",href:"https://formatjs.io/docs/react-intl/upgrade-guide-5x"},"https://formatjs.io/docs/react-intl/upgrade-guide-5x")),(0,o.mdx)("li",{parentName:"ul"},"v4 Upgrade Guide - ",(0,o.mdx)("a",{parentName:"li",href:"https://formatjs.io/docs/react-intl/upgrade-guide-4x"},"https://formatjs.io/docs/react-intl/upgrade-guide-4x")),(0,o.mdx)("li",{parentName:"ul"},"v3 Upgrade Guide - ",(0,o.mdx)("a",{parentName:"li",href:"https://formatjs.io/docs/react-intl/upgrade-guide-3x"},"https://formatjs.io/docs/react-intl/upgrade-guide-3x"))))}d.isMDXComponent=!0},66983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},87462:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},44925:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:()=>a})}}]);