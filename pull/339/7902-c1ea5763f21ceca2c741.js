"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[7902],{77902:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(87462),l=a(44925),r=(a(67294),a(81254)),o=a(24673),d=["components"],m={},s="wrapper";function p(e){var t=e.components,a=(0,l.Z)(e,d);return(0,r.mdx)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"example-loader"},"Example Loader"),(0,r.mdx)("p",null,"The Example loader will take the passed in file, add it to an example template then locate the source for the file in the src folder and render the example output.\nThe file must be a react component that requires no additional props to render. The Example loader will also look for the first css file import and also provide\nthe scss snippet."),(0,r.mdx)("h2",{id:"resource-query"},"Resource query"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"?dev-site-example")),(0,r.mdx)("h2",{id:"props"},"Props"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Prop"),(0,r.mdx)("th",{parentName:"tr",align:null},"type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"title"),(0,r.mdx)("td",{parentName:"tr",align:null},"string")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"description"),(0,r.mdx)("td",{parentName:"tr",align:null},"string")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"isExpanded"),(0,r.mdx)("td",{parentName:"tr",align:null},"bool")))),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import Example from \'./example?dev-site-example\';\n\n<Example />\n\n// A custom title and description can be added.\n<Example title="Custom Title" description="Custom description" />\n\n// The code can be expanded by default\n<Example isExpanded />\n')),(0,r.mdx)("h2",{id:"rendered-example"},"Rendered Example"),(0,r.mdx)(o.Z,{mdxType:"Example"}))}p.isMDXComponent=!0},16220:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),l=a(44925),r=(a(67294),a(81254)),o=["components"],d={},m="wrapper";function s(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.mdx)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport styles from './example.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst TagComp = () => (\n  <h1 className={cx('body')}>\n    I am a test\n  </h1>\n);\n\nexport default TagComp;\n\n")))}s.isMDXComponent=!0},4366:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),l=a(44925),r=(a(67294),a(81254)),o=["components"],d={},m="wrapper";function s(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.mdx)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .body {\n    height: 100%;\n  }\n}\n\n")))}s.isMDXComponent=!0},24673:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),l=a(47589),r=a(16220),o=a(82778),d=a(4366);const m=function(e){var t=e.title,a=e.description,m=e.isExpanded;return n.createElement(o.Z,{title:t||"Example",description:a,example:n.createElement(l.Z,null),exampleCssSrc:n.createElement(d.Z,null),exampleSrc:n.createElement(r.Z,null),isExpanded:m})}},47589:(e,t,a)=>{var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=n(a(47166)),o=n(a(69731)),d=r.default.bind(o.default);t.Z=function(){return l.default.createElement("h1",{className:d("body")},"I am a test")}},82778:(e,t,a)=>{var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=r?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(n,o,d):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}(a(67294)),d=n(a(45697)),m=n(a(47166)),s=a(48720),p=n(a(33864)),u=n(a(23399)),c=a(51051),i=n(a(95507));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var x=m.default.bind(i.default),_={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},E=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,d=e.description,m=e.isExpanded,i=(0,o.useState)(m),f=(0,r.default)(i,2),_=f[0],b=f[1],h=(0,o.useState)(!1),y=(0,r.default)(h,2),g=y[0],N=y[1],T=o.default.useContext(s.ThemeContext),w=void 0!==n,O=function(){N(!g),_&&b(!_)},C=function(){b(!_),g&&N(!g)},Z=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",T.className)},o.default.createElement("div",{className:x("header")},l&&o.default.createElement("h2",{className:x("title")},l)),o.default.createElement("div",{className:x("content")},d&&o.default.createElement("div",{className:x("description")},d),t),o.default.createElement("div",{className:x("footer")},a?o.default.createElement("div",{className:x("button-container")},w&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":g}),onClick:O,onKeyDown:function(e){return Z(e,O)},onBlur:E,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(u.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":_}),onClick:C,onKeyDown:function(e){return Z(e,C)},onBlur:E,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(u.default,{className:x("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:x("css")},n),_&&o.default.createElement("div",{className:x("code")},a))))};b.propTypes=_,b.defaultProps={isExpanded:!1};t.Z=b},69731:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={body:"example-module__body___O+dIx"}},95507:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___FATtk","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___s6uZH",template:"ExampleTemplate-module__template___ffP6g",header:"ExampleTemplate-module__header___vIWDI",content:"ExampleTemplate-module__content___rbhnH",description:"ExampleTemplate-module__description___+FEIq",footer:"ExampleTemplate-module__footer___D7QJv","button-container":"ExampleTemplate-module__button-container___3zfGj",css:"ExampleTemplate-module__css___i6lpu",code:"ExampleTemplate-module__code___-yR3s","css-toggle":"ExampleTemplate-module__css-toggle___DsZuN","code-toggle":"ExampleTemplate-module__code-toggle___3pWSV","is-selected":"ExampleTemplate-module__is-selected___UZtM1",item:"ExampleTemplate-module__item___56MkH",chevron:"ExampleTemplate-module__chevron___ljb6a",title:"ExampleTemplate-module__title___GjcWJ","dynamic-content":"ExampleTemplate-module__dynamic-content___SslvG"}},33864:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d},87462:(e,t,a)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:()=>n})},44925:(e,t,a)=>{function n(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}a.d(t,{Z:()=>n})}}]);