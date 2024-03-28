"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[8970],{78970:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(87462),l=n(44925),o=n(67294),r=n(81254),d=n(24673),m=n(28078),c=["components"],s={};function u(e){var t=e.components,n=(0,l.Z)(e,c);return(0,r.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst TagComp = () => (\n  <h1>\n    I am a test\n  </h1>\n);\n\nexport default TagComp;\n\n")))}u.isMDXComponent=!0;var p=n(82778);const i=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(p.Z,{title:t||"Example 2",description:n,example:o.createElement(m.Z,null),exampleSrc:o.createElement(u,null),isExpanded:a})};var f=["components"],_={},x="wrapper";function v(e){var t=e.components,n=(0,l.Z)(e,f);return(0,r.mdx)(x,(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(d.Z,{mdxType:"Example"}),(0,r.mdx)("h1",{id:"custom-title-and-description"},"Custom title and description"),(0,r.mdx)(d.Z,{title:"Custom Title",description:"Custom description",mdxType:"Example"}),(0,r.mdx)("h1",{id:"expanded-by-default"},"Expanded by default"),(0,r.mdx)(d.Z,{isExpanded:!0,mdxType:"Example"}),(0,r.mdx)("h1",{id:"no-imported-css-file"},"No Imported CSS File"),(0,r.mdx)(i,{mdxType:"ExampleTwo"}))}v.isMDXComponent=!0},16220:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),l=n(44925),o=(n(67294),n(81254)),r=["components"],d={},m="wrapper";function c(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.mdx)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport styles from './example.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst TagComp = () => (\n  <h1 className={cx('body')}>\n    I am a test\n  </h1>\n);\n\nexport default TagComp;\n\n")))}c.isMDXComponent=!0},4366:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),l=n(44925),o=(n(67294),n(81254)),r=["components"],d={},m="wrapper";function c(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.mdx)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .body {\n    height: 100%;\n  }\n}\n\n")))}c.isMDXComponent=!0},24673:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),l=n(47589),o=n(16220),r=n(82778),d=n(4366);const m=function(e){var t=e.title,n=e.description,m=e.isExpanded;return a.createElement(r.Z,{title:t||"Example",description:n,example:a.createElement(l.Z,null),exampleCssSrc:a.createElement(d.Z,null),exampleSrc:a.createElement(o.Z,null),isExpanded:m})}},47589:(e,t,n)=>{var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(19845)),r=a(n(69731)),d=o.default.bind(r.default);t.Z=function(){return l.default.createElement("h1",{className:d("body")},"I am a test")}},28078:(e,t,n)=>{var a=n(64836);t.Z=void 0;var l=a(n(67294));t.Z=function(){return l.default.createElement("h1",null,"I am a test")}},82778:(e,t,n)=>{var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var d=o?Object.getOwnPropertyDescriptor(e,r):null;d&&(d.get||d.set)?Object.defineProperty(a,r,d):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(67294)),d=a(n(45697)),m=a(n(19845)),c=n(48720),s=a(n(33864)),u=a(n(23399)),p=n(51051),i=a(n(95507));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=m.default.bind(i.default),x={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},E=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,d=e.description,m=e.isExpanded,i=(0,r.useState)(m),f=(0,o.default)(i,2),x=f[0],y=f[1],b=(0,r.useState)(!1),g=(0,o.default)(b,2),h=g[0],T=g[1],Z=r.default.useContext(c.ThemeContext),N=void 0!==a,w=function(){T(!h),x&&y(!x)},C=function(){y(!x),h&&T(!h)},O=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",Z.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},d&&r.default.createElement("div",{className:_("description")},d),t),r.default.createElement("div",{className:_("footer")},n?r.default.createElement("div",{className:_("button-container")},N&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":h}),onClick:w,onKeyDown:function(e){return O(e,w)},onBlur:v,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":x}),onClick:C,onKeyDown:function(e){return O(e,C)},onBlur:v,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:_("chevron")}))):null,r.default.createElement("div",null,h&&r.default.createElement("div",{className:_("css")},a),x&&r.default.createElement("div",{className:_("code")},n))))};y.propTypes=x,y.defaultProps={isExpanded:!1};t.Z=y},69731:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={body:"example-module__body___O+dIx"}},95507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___FATtk","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___s6uZH",template:"ExampleTemplate-module__template___ffP6g",header:"ExampleTemplate-module__header___vIWDI",content:"ExampleTemplate-module__content___rbhnH",description:"ExampleTemplate-module__description___+FEIq",footer:"ExampleTemplate-module__footer___D7QJv","button-container":"ExampleTemplate-module__button-container___3zfGj",css:"ExampleTemplate-module__css___i6lpu",code:"ExampleTemplate-module__code___-yR3s","css-toggle":"ExampleTemplate-module__css-toggle___DsZuN","code-toggle":"ExampleTemplate-module__code-toggle___3pWSV","is-selected":"ExampleTemplate-module__is-selected___UZtM1",item:"ExampleTemplate-module__item___56MkH",chevron:"ExampleTemplate-module__chevron___ljb6a",title:"ExampleTemplate-module__title___GjcWJ","dynamic-content":"ExampleTemplate-module__dynamic-content___SslvG"}},33864:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var d=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d},87462:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},44925:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:()=>a})}}]);