"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[4015],{46396:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(58168),l=r(53986),a=r(96540),o=r(36665),u=r(3919),d=["components"],c={},i="wrapper";function p(e){var t=e.components,r=(0,l.A)(e,d);return(0,o.mdx)(i,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(u.Ay,{mdxType:"PropsTable"},(0,o.mdx)(u.fI,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(u.dt,{mdxType:"PropNameCell"},"children"),(0,o.mdx)(u.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,o.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Components to render within the context of the ApplicationErrorBoundary. Exceptions thrown\nby these components during their render lifecycle will be caught by the ApplicationErrorBoundary.")))))}p.isMDXComponent=!0;var s=r(11205),f=["components"],m={};function _(e){var t=e.components,r=(0,l.A)(e,f);return(0,o.mdx)("wrapper",(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\n\nimport ApplicationErrorBoundary from 'terra-application/lib/application-error-boundary/ApplicationErrorBoundary';\nimport styles from './ApplicationErrorBoundaryExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ErrorThrowingComponent = () => {\n  const [throwError, setThrowError] = useState(false);\n\n  if (throwError) {\n    throw new Error('whoops');\n  }\n\n  return (\n    <>\n      <p>Press the button below to trigger an error.</p>\n      <button type=\"button\" onClick={() => { setThrowError(true); }}>Trigger Error</button>\n    </>\n  );\n};\n\nconst ApplicationErrorBoundaryExampleWrapper = ({ children }) => {\n  const [refresh, setRefresh] = useState(false);\n\n  return (\n    <div className={cx('example')}>\n      <button type=\"button\" onClick={() => { setRefresh(!refresh); }}>Refresh Component</button>\n      <ApplicationErrorBoundary>\n        {children}\n      </ApplicationErrorBoundary>\n    </div>\n  );\n};\n\nApplicationErrorBoundaryExampleWrapper.propTypes = {\n  children: PropTypes.node,\n};\n\nconst ApplicationErrorBoundaryExample = () => (\n  <ApplicationErrorBoundaryExampleWrapper>\n    <ErrorThrowingComponent />\n  </ApplicationErrorBoundaryExampleWrapper>\n);\n\nexport default ApplicationErrorBoundaryExample;\n\n")))}_.isMDXComponent=!0;var y=r(27277),b=["components"],v={};function h(e){var t=e.components,r=(0,l.A)(e,b);return(0,o.mdx)("wrapper",(0,n.A)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .example {\n    height: 30rem;\n    width: 100%;\n  }\n}\n\n")))}h.isMDXComponent=!0;const E=function(e){var t=e.title,r=e.description,n=e.isExpanded;return a.createElement(y.A,{title:t||"Application Error Boundary Example",description:r,example:a.createElement(s.A,null),exampleCssSrc:a.createElement(h,null),exampleSrc:a.createElement(_,null),isExpanded:n})};var x=["components"],g={},O="wrapper";function w(e){var t=e.components,r=(0,l.A)(e,x);return(0,o.mdx)(O,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"applicationerrorboundary"},"ApplicationErrorBoundary"),(0,o.mdx)("p",null,"The ApplicationErrorBoundary catches exceptions thrown during its children's render lifecycle and renders the error for the user's benefit. The ApplicationErrorBoundary can be rendered at various levels of an application to isolate errors to various parts of the component tree."),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ApplicationErrorBoundary from 'terra-application/lib/application-error-boundary';\n")),(0,o.mdx)("h2",{id:"props"},"Props"),(0,o.mdx)(p,{mdxType:"PropsTable"}),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)(E,{mdxType:"ApplicationErrorBoundaryExample"}))}w.isMDXComponent=!0},11205:(e,t,r)=>{var n=r(24994),l=r(73738);t.A=void 0;var a=n(r(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(96540)),u=n(r(5556)),d=n(r(67967)),c=n(r(39459)),i=n(r(11582));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}var s=d.default.bind(i.default),f=function(){var e=(0,o.useState)(!1),t=(0,a.default)(e,2),r=t[0],n=t[1];if(r)throw new Error("whoops");return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",null,"Press the button below to trigger an error."),o.default.createElement("button",{type:"button",onClick:function(){n(!0)}},"Trigger Error"))},m=function(e){var t=e.children,r=(0,o.useState)(!1),n=(0,a.default)(r,2),l=n[0],u=n[1];return o.default.createElement("div",{className:s("example")},o.default.createElement("button",{type:"button",onClick:function(){u(!l)}},"Refresh Component"),o.default.createElement(c.default,null,t))};m.propTypes={children:u.default.node};t.A=function(){return o.default.createElement(m,null,o.default.createElement(f,null))}},27277:(e,t,r)=>{var n=r(24994),l=r(73738);t.A=void 0;var a=n(r(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(96540)),u=n(r(16917)),d=n(r(80720)),c=r(67016),i=n(r(49558)),p=n(r(53665)),s=r(25966),f=n(r(66253));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}var _=d.default.bind(f.default),y={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,r=e.exampleSrc,n=e.exampleCssSrc,l=e.title,u=e.description,d=e.isExpanded,f=(0,o.useState)(d),m=(0,a.default)(f,2),y=m[0],h=m[1],E=(0,o.useState)(!1),x=(0,a.default)(E,2),g=x[0],O=x[1],w=o.default.useContext(c.ThemeContext),T=void 0!==n,j=function(){O(!g),y&&h(!y)},P=function(){h(!y),g&&O(!g)},C=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",w.className)},o.default.createElement("div",{className:_("header")},l&&o.default.createElement("h2",{className:_("title")},l)),o.default.createElement("div",{className:_("content")},u&&o.default.createElement("div",{className:_("description")},u),t),o.default.createElement("div",{className:_("footer")},r?o.default.createElement("div",{className:_("button-container")},T&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":y}),onClick:P,onKeyDown:function(e){return C(e,P)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:_("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:_("css")},n),y&&o.default.createElement("div",{className:_("code")},r))))};h.propTypes=y,h.defaultProps={isExpanded:!1};t.A=h},3919:(e,t,r)=>{var n=r(24994),l=r(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return c.Row}}),t.Ay=t.$d=void 0;var a=s(r(96540)),o=n(r(16917)),u=n(r(80720)),d=r(67016),c=s(r(26984)),i=n(r(94089));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}var f=u.default.bind(i.default),m={children:o.default.node},_={isRequired:o.default.bool};(t.dt=function(e){var t=e.children;return a.default.createElement(c.Cell,{className:f("bold")},t)}).propTypes=m,(t.$d=function(e){var t=e.children;return a.default.createElement(c.Cell,{className:f("code-block-override")},t)}).propTypes=m,(t.YZ=function(e){var t=e.isRequired;return a.default.createElement(c.Cell,{className:f([t?["required"]:[]])},t?"required":"optional")}).propTypes=_,(t.NZ=function(e){var t=e.children;return a.default.createElement(c.Cell,{className:f("code-block-override")},t)}).propTypes=m,(t.Hd=function(e){var t=e.children;return a.default.createElement(c.Cell,null,t)}).propTypes=m;var y=function(e){var t=e.children,r=(0,a.useContext)(d.ThemeContext);return a.default.createElement(c.default,{paddingStyle:"compact",className:f("table",r.className)},a.default.createElement(c.Header,{className:f("header")},a.default.createElement(c.HeaderCell,null,"Prop"),a.default.createElement(c.HeaderCell,null,"Type"),a.default.createElement(c.HeaderCell,null,"Required"),a.default.createElement(c.HeaderCell,null,"Default"),a.default.createElement(c.HeaderCell,null,"Description")),a.default.createElement(c.Body,null,t))};y.propTypes=m;t.Ay=y},78482:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},11582:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={example:"ApplicationErrorBoundaryExample-module__example___Apc56"}},66253:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___FATtk","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___s6uZH",template:"ExampleTemplate-module__template___ffP6g",header:"ExampleTemplate-module__header___vIWDI",content:"ExampleTemplate-module__content___rbhnH",description:"ExampleTemplate-module__description___+FEIq",footer:"ExampleTemplate-module__footer___D7QJv","button-container":"ExampleTemplate-module__button-container___3zfGj",css:"ExampleTemplate-module__css___i6lpu",code:"ExampleTemplate-module__code___-yR3s","css-toggle":"ExampleTemplate-module__css-toggle___DsZuN","code-toggle":"ExampleTemplate-module__code-toggle___3pWSV","is-selected":"ExampleTemplate-module__is-selected___UZtM1",item:"ExampleTemplate-module__item___56MkH",chevron:"ExampleTemplate-module__chevron___ljb6a",title:"ExampleTemplate-module__title___GjcWJ","dynamic-content":"ExampleTemplate-module__dynamic-content___SslvG"}},94089:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},85444:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(96540)),l=i(r(5556)),a=i(r(46942)),o=i(r(67967)),u=i(r(52103)),d=i(r(78482)),c=["children","disableStripes","paddingStyle"];function i(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var f=o.default.bind(d.default),m={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},_=function(e){var t=e.children,r=e.disableStripes,l=e.paddingStyle,o=s(e,c),d=n.default.useContext(u.default),i=(0,a.default)(f("table",{striped:!r},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},d.className),o.className);return n.default.createElement("table",p({},o,{className:i}),t)};_.propTypes=m,_.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=_},61452:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},c=function(e){var t=e.children,r=u(e,a);return n.default.createElement("tbody",r,t)};c.propTypes=d,c.defaultProps={children:[]};t.default=c},86472:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},c=function(e){var t=e.children,r=u(e,a);return n.default.createElement("td",r,t)};c.propTypes=d,c.defaultProps={children:[]};t.default=c},97441:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(96540)),l=u(r(5556)),a=u(r(10767)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c={children:l.default.node},i=function(e){var t=e.children,r=d(e,o);return n.default.createElement("thead",r,n.default.createElement("tr",null,a.default.addScope(t,"col")))};i.propTypes=c,i.defaultProps={children:[]};t.default=i},22417:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),l=o(r(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d={children:l.default.node},c=function(e){var t=e.children,r=u(e,a);return n.default.createElement("th",r,t)};c.propTypes=d,c.defaultProps={children:[]};t.default=c},36142:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(96540)),l=c(r(5556)),a=c(r(67967)),o=c(r(78482)),u=c(r(10767)),d=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.default.bind(o.default),f={children:l.default.node},m=function(e){var t=e.children,r=p(e,d),l=s(["row"]);return n.default.createElement("tr",i({},r,{className:r.className?"".concat(l," ").concat(r.className):l}),u.default.addScope(t,"row"))};m.propTypes=f,m.defaultProps={children:[]};t.default=m},10767:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=r(96540))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var r=[];return l.default.Children.forEach(e,(function(e){r.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=a},26984:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=c(r(85444)),l=c(r(61452)),a=c(r(36142)),o=c(r(86472)),u=c(r(97441)),d=c(r(22417));function c(e){return e&&e.__esModule?e:{default:e}}t.default=n.default},49558:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(96540)),l=a(r(25365));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},58168:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{A:()=>n})},53986:(e,t,r)=>{function n(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}r.d(t,{A:()=>n})}}]);