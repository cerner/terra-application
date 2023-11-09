"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[1541],{61541:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(87462),o=n(44925),l=n(67294),m=n(81254),r=n(44514),i=["components"],s={};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,m.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport { ThemeContext } from 'terra-application/lib/theme';\nimport styles from './ExampleComponent.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ExampleComponent = () => {\n  const theme = React.useContext(ThemeContext);\n\n  return (\n    <div className={cx('example-component', theme.className)}>\n      This is an example component.\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n\n")))}p.isMDXComponent=!0;var c=n(82778),d=["components"],u={},h="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,d);return(0,m.mdx)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},"// Import each theme.\n@import './clinical-lowlight-theme/ExampleComponent.module';\n@import './orion-fusion-theme/ExampleComponent.module';\n\n:local {\n  .example-component {\n    background-color: var(--terra-application-example-component-background-color, #fff);\n    color: var(--terra-application-example-component-color, inherit);\n    font-size: var(--terra-application-example-component-font-size, 1rem);\n  }\n}\n\n")))}f.isMDXComponent=!0;const x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:t||"Example Component",description:n,example:l.createElement(r.Z,null),exampleCssSrc:l.createElement(f,null),exampleSrc:l.createElement(p,null),isExpanded:a})};var g=["components"],b={},v="wrapper";function _(e){var t=e.components,n=(0,o.Z)(e,g);return(0,m.mdx)(v,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .clinical-lowlight-theme {\n    --terra-application-example-component-background-color: rgb(34, 42, 46);\n    --terra-application-example-component-color: rgb(178, 181, 182);\n    --terra-application-example-component-font-size: 1rem;\n  }\n}\n\n")))}_.isMDXComponent=!0;var y=["components"],T={},C="wrapper";function E(e){var t=e.components,n=(0,o.Z)(e,y);return(0,m.mdx)(C,(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .orion-fusion-theme {\n    --terra-application-example-component-background-color: #f6f8fa;\n    --terra-application-example-component-color: rgb(36, 41, 46);\n    --terra-application-example-component-font-size: 2rem;\n  }\n}\n\n")))}E.isMDXComponent=!0;var N=["components"],w={},S="wrapper";function k(e){var t=e.components,n=(0,o.Z)(e,N);return(0,m.mdx)(S,(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"theming-guide"},"Theming Guide"),(0,m.mdx)("p",null,"Welcome to the Terra theming strategy guide. This guide will walk through the recommended approach for theming custom components."),(0,m.mdx)("h2",{id:"summary"},"Summary"),(0,m.mdx)("p",null,"Terra provides a default, clinical-lowlight-theme, and orion-fusion-theme. This guide is for theming custom components. Custom components are any non Terra-UI component created by teams that need to be integrated into an application using a supported Terra theme. Teams should not create new themes or theme Terra components."),(0,m.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,m.mdx)("p",null,"This guide will walk through theming an example component. The example component is using the base component from terra-application to provide an API for interacting with the theme."),(0,m.mdx)("h2",{id:"theme-context"},"Theme Context"),(0,m.mdx)("p",null,"An application's theme is provided through ",(0,m.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React context")," by a theme provider. ",(0,m.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-base"},"Application Base")," initializes a theme provider automatically. The theme value is accessed using the ",(0,m.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/contexts/theme-context"},"theme context")," from terra-application."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeContext } from 'terra-application/lib/theme';\n")),(0,m.mdx)("p",null,"Use the theme context to read the active theme value."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeContext } from 'terra-application/lib/theme';\n\nconst ExampleComponent = () => {\n  // Access the active theme context value.\n  const theme = React.useContext(ThemeContext);\n};\n")),(0,m.mdx)("p",null,"The active theme's class name is stored in a ",(0,m.mdx)("inlineCode",{parentName:"p"},"className")," key in the context value. To apply the theme, bind the className to the component using ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/JedWatson/classnames#alternate-bind-version-for-css-modules"},"classnames/bind"),". Some additional documentation for CSS Modules and classNames can be found on the ",(0,m.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/contributing/conventions"},"conventions page"),". Please note that generally an empty or undefined className indicates the default theme is active. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"className")," key maps directly to the anticipated theme css class name. Using the correct theme className is required."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport { ThemeContext } from 'terra-application/lib/theme';\nimport styles from './ThemedComponent.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ExampleComponent = () => {\n  const theme = React.useContext(ThemeContext);\n\n  return (\n    <div className={cx('example-component', theme.className)}>\n      This is an example component.\n    </div>\n  );\n};\n")),(0,m.mdx)("h2",{id:"scss"},"SCSS"),(0,m.mdx)("p",null,"Once the theme className has been bound, the component can be appropriately themed. Start by defining the variables for the CSS properties that are expected to change between themes. SCSS variables are defined using ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"custom properties"),". These values should utilize the SCSS ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/var"},"var()")," functionality. The var() function works by applying a variable if the value has been set. If no value has been set the default value is used."),(0,m.mdx)("h3",{id:"examplecomponentmodulescss"},"ExampleComponent.module.scss"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},"// The values in this file represent the default theme. The default theme is applied using the default values in the var() function.\n:local {\n  .example-component {\n    background-color: var(--terra-application-example-component-background-color, #fff);\n    color: var(--terra-application-example-component-color, inherit);\n    font-size: var(--terra-application-example-component-font-size, 1rem);\n  }\n}\n")),(0,m.mdx)("p",null,"To add themes, create new files for each theme and include them in the original SCSS file. Theme are regular SCSS files that define variables to be applied when the theme becomes active. Themes must be locally scoped and must use a supported theme class name. It is recommended to define all available theme variables for each theme. If the component, example component in this case, defines three themable variables, all three variables should be assigned a value in each of the created theme files. This ensures a more robust theme."),(0,m.mdx)("h3",{id:"orion-fusion-themeexamplecomponentmodulescss"},"orion-fusion-theme/ExampleComponent.module.scss"),(0,m.mdx)(E,{mdxType:"OrionFusionThemeSCSS"}),(0,m.mdx)("h3",{id:"clinical-lowlight-themeexamplecomponentmodulescss"},"clinical-lowlight-theme/ExampleComponent.module.scss"),(0,m.mdx)(_,{mdxType:"ClinicalLowLightSCSS"}),(0,m.mdx)("p",null,"Include the new theme files in the original SCSS file."),(0,m.mdx)(f,{mdxType:"ExampleComponentSCSS"}),(0,m.mdx)("p",null,"The recommended file structure looks like this:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},".\n├── example-component\n│   ├── ExampleComponent.jsx\n│   ├── ExampleComponent.module.scss\n│   ├── clinical-lowlight-theme\n│   │   └── ExampleComponent.module.scss\n│   └── orion-fusion-theme\n│       └── ExampleComponent.module.scss\n")),(0,m.mdx)("h2",{id:"webpack"},"Webpack"),(0,m.mdx)("p",null,"To enable themes a ",(0,m.mdx)("inlineCode",{parentName:"p"},"terra-theme.config.js")," configuration file must be defined. This file is read by the ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit-boneyard/tree/main/config/webpack/postcss"},"terra-toolkit postcss loader")," to apply default themes. The loader runs automatically for webpack configurations using ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit-boneyard/blob/main/config/webpack/webpack.config.js"},"terra-toolkit's webpack config"),"."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-js"},"const themeConfig = {\n  theme: 'terra-dark-theme', // The default theme to be enabled on page load.\n  scoped: ['terra-light-theme', 'terra-lowlight-theme'], // An array of scoped themes. Note: Scoped themes do not work in IE 10.\n};\n\nmodule.exports = themeConfig;\n")),(0,m.mdx)("h2",{id:"example"},"Example"),(0,m.mdx)("p",null,"Toggle the theme from the dropdown at the top of the page to see changes."),(0,m.mdx)(x,{isExpanded:!0,mdxType:"ExampleComponent"}),(0,m.mdx)("h2",{id:"testing"},"Testing"),(0,m.mdx)("p",null,"Applications can opt into running WDIO tests against multiple themes."),(0,m.mdx)("p",null,"Themes testing can be enabled via the CLI using ",(0,m.mdx)("inlineCode",{parentName:"p"},"--themes"),"."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},"{\n  \"test:wdio\": \"npm run pack; tt-wdio --config ./wdio.conf.js --locales ['en','es'] --themes ['orion-fusion-theme']; rm -rf ./build\"\n}\n")),(0,m.mdx)("p",null,"See the ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit-boneyard/tree/main/scripts/wdio#terra-toolkit-wdio-helpers"},"WDIO documentation")," for additional configuration options."),(0,m.mdx)("h2",{id:"faq"},"FAQ"),(0,m.mdx)("h3",{id:"are-terra-theme-variables-reusable"},"Are Terra Theme Variables Reusable?"),(0,m.mdx)("p",null,"No, theme variables are considered private and should never be used by consuming applications. Do not use Terra theme variables in custom CSS."),(0,m.mdx)("h3",{id:"is-it-okay-to-override-terra-component-styles"},"Is It Okay To Override Terra Component Styles?"),(0,m.mdx)("p",null,"It is not recommended to override Terra component styles. The exceptions are layout and positioning concerns such as width or margins."),(0,m.mdx)("h3",{id:"do-i-have-to-use-terra-toolkits-webpack-configuration"},"Do I Have To Use Terra Toolkit's Webpack Configuration?"),(0,m.mdx)("p",null,"It is highly recommended that teams use the terra-toolkit webpack configuration to ensure the appropriate loaders are used."),(0,m.mdx)("h3",{id:"can-i-use-multiple-themes-providers-at-once"},"Can I Use Multiple Themes Providers At Once?"),(0,m.mdx)("p",null,"Technically yes, officially no. Multiple themes will apply all CSS styles for all themes to the root element. This will result in style collisions, specifically the base font-size themes depend on. An incorrect font-size will impact all rem based CSS (padding, margins, line-heights, etc...). The theme context supports a single theme in context at a time."),(0,m.mdx)("h3",{id:"can-i-create-an-entirely-new-theme"},"Can I Create An Entirely New Theme?"),(0,m.mdx)("p",null,"No, the internal implementation of Terra components is considered private and changes frequently. All Terra component theme variables must be maintained by the Terra team."))}k.isMDXComponent=!0},44514:(e,t,n)=>{var a=n(64836);t.Z=void 0;var o=a(n(67294)),l=a(n(47166)),m=n(48720),r=a(n(90872)),i=l.default.bind(r.default);t.Z=function(){var e=o.default.useContext(m.ThemeContext);return o.default.createElement("div",{className:i("example-component",e.className)},"This is an example component.")}},82778:(e,t,n)=>{var a=n(64836),o=n(18698);t.Z=void 0;var l=a(n(27424)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var r=l?Object.getOwnPropertyDescriptor(e,m):null;r&&(r.get||r.set)?Object.defineProperty(a,m,r):a[m]=e[m]}return a.default=e,n&&n.set(e,a),a}(n(67294)),r=a(n(45697)),i=a(n(47166)),s=n(48720),p=a(n(33864)),c=a(n(23399)),d=n(51051),u=a(n(95507));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}var f=i.default.bind(u.default),x={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,r=e.description,i=e.isExpanded,u=(0,m.useState)(i),h=(0,l.default)(u,2),x=h[0],v=h[1],_=(0,m.useState)(!1),y=(0,l.default)(_,2),T=y[0],C=y[1],E=m.default.useContext(s.ThemeContext),N=void 0!==a,w=function(){C(!T),x&&v(!x)},S=function(){v(!x),T&&C(!T)},k=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return m.default.createElement("div",{className:f("template",E.className)},m.default.createElement("div",{className:f("header")},o&&m.default.createElement("h2",{className:f("title")},o)),m.default.createElement("div",{className:f("content")},r&&m.default.createElement("div",{className:f("description")},r),t),m.default.createElement("div",{className:f("footer")},n?m.default.createElement("div",{className:f("button-container")},N&&m.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":T}),onClick:w,onKeyDown:function(e){return k(e,w)},onBlur:g,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(p.default,{className:f("chevron")}),m.default.createElement("span",null,"CSS"),m.default.createElement(c.default,{className:f("chevron")})),m.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":x}),onClick:S,onKeyDown:function(e){return k(e,S)},onBlur:g,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(p.default,{className:f("chevron")}),m.default.createElement("span",null,"Code"),m.default.createElement(c.default,{className:f("chevron")}))):null,m.default.createElement("div",null,T&&m.default.createElement("div",{className:f("css")},a),x&&m.default.createElement("div",{className:f("code")},n))))};v.propTypes=x,v.defaultProps={isExpanded:!1};t.Z=v},90872:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"ExampleComponent-module__clinical-lowlight-theme___FnE-+","orion-fusion-theme":"ExampleComponent-module__orion-fusion-theme___o6Evx","example-component":"ExampleComponent-module__example-component___u95Ev"}},95507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___FATtk","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___s6uZH",template:"ExampleTemplate-module__template___ffP6g",header:"ExampleTemplate-module__header___vIWDI",content:"ExampleTemplate-module__content___rbhnH",description:"ExampleTemplate-module__description___+FEIq",footer:"ExampleTemplate-module__footer___D7QJv","button-container":"ExampleTemplate-module__button-container___3zfGj",css:"ExampleTemplate-module__css___i6lpu",code:"ExampleTemplate-module__code___-yR3s","css-toggle":"ExampleTemplate-module__css-toggle___DsZuN","code-toggle":"ExampleTemplate-module__code-toggle___3pWSV","is-selected":"ExampleTemplate-module__is-selected___UZtM1",item:"ExampleTemplate-module__item___56MkH",chevron:"ExampleTemplate-module__chevron___ljb6a",title:"ExampleTemplate-module__title___GjcWJ","dynamic-content":"ExampleTemplate-module__dynamic-content___SslvG"}},33864:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),o=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}var r=function(e){var t=m({},e);return a.default.createElement(o.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};r.displayName="IconChevronLeft",r.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=r},87462:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},44925:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:()=>a})}}]);