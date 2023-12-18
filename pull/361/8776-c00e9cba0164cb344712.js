"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[8776],{48776:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(87462),l=n(44925),o=n(67294),r=n(81254),m=n(43824),d=["components"],c={};function i(e){var t=e.components,n=(0,l.Z)(e,d);return(0,r.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport { ThemeContext } from 'terra-application/lib/theme';\n\nimport styles from './ThemedComponent.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Themed = () => {\n  const theme = React.useContext(ThemeContext);\n  return (\n    <div className={cx('themed', theme.className)}>\n      <h1>\n        {`Theme Name: ${theme.name}`}\n      </h1>\n      <div className={cx('themed-block')} />\n    </div>\n  );\n};\n\nexport default Themed;\n\n")))}i.isMDXComponent=!0;var u=n(82778),s=["components"],p={};function f(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"//Themes\n@import './clinical-lowlight-theme/ThemedComponent.module';\n@import './orion-fusion-theme/ThemedComponent.module';\n\n:local {\n  .themed {\n    height: 100%;\n    overflow: auto;\n    padding: 24px;\n    position: relative;\n  }\n\n  .themed-block {\n    background-color: var(--terra-application-themed-component-block-background-color, #0079be);\n    height: 24px;\n  }\n}\n\n")))}f.isMDXComponent=!0;const h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(u.Z,{title:t||"Themed Component",description:n,example:o.createElement(m.Z,null),exampleCssSrc:o.createElement(f,null),exampleSrc:o.createElement(i,null),isExpanded:a})};var _=["components"],x={},v="wrapper";function b(e){var t=e.components,n=(0,l.Z)(e,_);return(0,r.mdx)(v,(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"themecontext"},"ThemeContext"),(0,r.mdx)("p",null,"The ThemeContext defines an interface for access to the framework's current theme."),(0,r.mdx)("p",null,"This context can be used to apply any theme related changes to a component."),(0,r.mdx)("p",null,"The most common use would be to apply a theme class to the root tag of the component to apply theme variables. See below for an example."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note: An ThemeContextProvider is rendered by ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/361/application/terra-application/components/application-base"},"ApplicationBase"),".\nAny components rendered within ApplicationBase can access a ThemeContext without rendering additional providers.")),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)(h,{description:"This example pulls the current theme from the theme context and adds the theme class name to apply theme variables.",isExpanded:!0,mdxType:"ThemedComponent"}),(0,r.mdx)("h2",{id:"context-value"},"Context Value"),(0,r.mdx)("p",null,"The ThemeContext provides an object with the following values:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"DefaultValue"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,r.mdx)("td",{parentName:"tr",align:null},"The current application theme name. This field requires use of the terra-toolkit webpack config.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"className")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,r.mdx)("td",{parentName:"tr",align:null},"The current application theme className. The default theme is indicated as undefined or empty string.")))))}b.isMDXComponent=!0},43824:(e,t,n)=>{var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(47166)),r=n(48720),m=a(n(50684)),d=o.default.bind(m.default);t.Z=function(){var e=l.default.useContext(r.ThemeContext);return l.default.createElement("div",{className:d("themed",e.className)},l.default.createElement("h1",null,"Theme Name: ".concat(e.name)),l.default.createElement("div",{className:d("themed-block")}))}},82778:(e,t,n)=>{var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var m=o?Object.getOwnPropertyDescriptor(e,r):null;m&&(m.get||m.set)?Object.defineProperty(a,r,m):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(67294)),m=a(n(45697)),d=a(n(47166)),c=n(48720),i=a(n(33864)),u=a(n(23399)),s=n(51051),p=a(n(95507));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=d.default.bind(p.default),_={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,m=e.description,d=e.isExpanded,p=(0,r.useState)(d),f=(0,o.default)(p,2),_=f[0],b=f[1],g=(0,r.useState)(!1),N=(0,o.default)(g,2),y=N[0],T=N[1],E=r.default.useContext(c.ThemeContext),C=void 0!==a,w=function(){T(!y),_&&b(!_)},k=function(){b(!_),y&&T(!y)},O=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:h("template",E.className)},r.default.createElement("div",{className:h("header")},l&&r.default.createElement("h2",{className:h("title")},l)),r.default.createElement("div",{className:h("content")},m&&r.default.createElement("div",{className:h("description")},m),t),r.default.createElement("div",{className:h("footer")},n?r.default.createElement("div",{className:h("button-container")},C&&r.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return O(e,w)},onBlur:x,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(i.default,{className:h("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:h("chevron")})),r.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":_}),onClick:k,onKeyDown:function(e){return O(e,k)},onBlur:x,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(i.default,{className:h("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:h("chevron")}))):null,r.default.createElement("div",null,y&&r.default.createElement("div",{className:h("css")},a),_&&r.default.createElement("div",{className:h("code")},n))))};b.propTypes=_,b.defaultProps={isExpanded:!1};t.Z=b},50684:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"ThemedComponent-module__clinical-lowlight-theme___Henrj","orion-fusion-theme":"ThemedComponent-module__orion-fusion-theme___gjZq-",themed:"ThemedComponent-module__themed___W1CLb","themed-block":"ThemedComponent-module__themed-block___Twt-n"}},95507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___FATtk","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___s6uZH",template:"ExampleTemplate-module__template___ffP6g",header:"ExampleTemplate-module__header___vIWDI",content:"ExampleTemplate-module__content___rbhnH",description:"ExampleTemplate-module__description___+FEIq",footer:"ExampleTemplate-module__footer___D7QJv","button-container":"ExampleTemplate-module__button-container___3zfGj",css:"ExampleTemplate-module__css___i6lpu",code:"ExampleTemplate-module__code___-yR3s","css-toggle":"ExampleTemplate-module__css-toggle___DsZuN","code-toggle":"ExampleTemplate-module__code-toggle___3pWSV","is-selected":"ExampleTemplate-module__is-selected___UZtM1",item:"ExampleTemplate-module__item___56MkH",chevron:"ExampleTemplate-module__chevron___ljb6a",title:"ExampleTemplate-module__title___GjcWJ","dynamic-content":"ExampleTemplate-module__dynamic-content___SslvG"}},33864:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var m=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=m},87462:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},44925:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:()=>a})}}]);