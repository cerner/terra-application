/*! For license information please see 3444-efa65b5e7f14f5e9b3f0.js.LICENSE.txt */
"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[3444],{23444:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(87462),o=n(85893),a=n(11151),i=n(2010);function l(e){var t=(0,r.Z)({p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,o.jsxs)(i.ZP,{children:[(0,o.jsxs)(i.X2,{children:[(0,o.jsx)(i.O,{children:(0,o.jsx)(t.p,{children:"children"})}),(0,o.jsx)(i.Di,{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"node\n"})})}),(0,o.jsx)(i.dS,{isRequired:!1}),(0,o.jsx)(i.mW,{children:(0,o.jsx)(t.p,{children:"none"})}),(0,o.jsx)(i.Ex,{children:(0,o.jsx)(t.p,{children:"Components to render within the context of the NavigationPromptCheckpoint. Any NavigationPrompts rendered within\nthese child components will be registered to this NavigationPromptCheckpoint instance."})})]},"ROW1"),(0,o.jsxs)(i.X2,{children:[(0,o.jsx)(i.O,{children:(0,o.jsx)(t.p,{children:"onPromptChange"})}),(0,o.jsx)(i.Di,{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"func\n"})})}),(0,o.jsx)(i.dS,{isRequired:!1}),(0,o.jsx)(i.mW,{children:(0,o.jsx)(t.p,{children:"none"})}),(0,o.jsxs)(i.Ex,{children:[(0,o.jsx)(t.p,{children:"A function that will be executed when NavigationPrompts are registered to or unregistered from the NavigationPromptCheckpoint instance.\nThis can be used to track registered prompts outside of a NavigationPromptCheckpoint and handle prompt resolution directly, if necessary.\nThe function will be provided with an array of data objects representing the registered NavigationPrompts as the sole argument. An empty\nArray will be provided when no prompts are registered."}),(0,o.jsx)(t.p,{children:"Function Example:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"(arrayOfPrompts) => {\n  arrayOfPrompts.forEach((prompt) => {\n    console.log(prompt.description);\n    console.log(prompt.metaData);\n  })\n  this.myLocalPromptRegistry = arrayOfPrompts;\n}\n"})})]})]},"ROW2")]})}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,r.Z)({},(0,a.ah)(),e.components).wrapper;return t?(0,o.jsx)(t,(0,r.Z)({},e,{children:(0,o.jsx)(l,e)})):l(e)};function d(e){var t=(0,r.Z)({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",h3:"h3",blockquote:"blockquote"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"navigationpromptcheckpoint",children:"NavigationPromptCheckpoint"}),"\n",(0,o.jsxs)(t.p,{children:["The NavigationPromptCheckpoint serves as a registration gateway for ",(0,o.jsx)(t.a,{href:"/terra-application/pull/343/application/terra-application/components/navigation-prompt",children:"NavigationPrompts"}),"\nrendered within it. Any NavigationPrompt rendered within the context of a NavigationPromptCheckpoint will register itself with the NavigationPromptCheckpoint\n(and any other ancestor checkpoints). The component that implements the NavigationPromptCheckpoint can use the presence of registered NavigationPrompts to\ninfluence its navigational workflows as necessary."]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"import { NavigationPromptCheckpoint } from 'terra-application/lib/navigation-prompt';\n"})}),"\n",(0,o.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(t.h2,{id:"details",children:"Details"}),"\n",(0,o.jsx)(t.p,{children:"Any component that navigates between stateful child components should render NavigationPromptCheckpoints around those children.\nEach NavigationPrompt rendered by a child will be registered to the NavigationPromptCheckpoints above it in the component tree.\nThe implementer of each NavigationPromptCheckpoint can use the registered data to prompt the user before navigating or prevent navigation altogether."}),"\n",(0,o.jsx)(t.h3,{id:"onpromptchange",children:(0,o.jsx)(t.code,{children:"onPromptChange"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"onPromptChange"})," function prop is used to communicate NavigationPrompt registrations to the implementer of a NavigationPromptCheckpoint.\nThe function is called with an array of objects containing each registered NavigationPrompt's ",(0,o.jsx)(t.code,{children:"description"})," and ",(0,o.jsx)(t.code,{children:"metaData"})," properties."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note: The ",(0,o.jsx)(t.code,{children:"onPromptChange"})," prop will be called after each NavigationPrompt registration and removal.\nIt may be called more than once with the same array of NavigationPrompt data. Calls to ",(0,o.jsx)(t.code,{children:"setState"})," within onPromptChange\nshould be performed only when necessary to minimize component updates."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"resolveprompts",children:(0,o.jsx)(t.code,{children:"resolvePrompts"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"resolvePrompts"})," function can be accessed from the ref to a NavigationPromptCheckpoint. Calling ",(0,o.jsx)(t.code,{children:"resolvePrompts"})," results in a\nPromise being returned and a NotificationDialog being presented to the user with options to either confirm or cancel their action.\nIf the user confirms the action, the dialog will close, and the returned Promise will be resolved. If the user cancels the action,\nthe dialog will close, and the returned Promise will be rejected. If no NavigationPrompts are detected, no dialog is presented, and\nthe returned Promise will be resolved."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"resolvePrompts"})," accepts either an Object or function argument. The Object should contain the text strings used to render the NotificationDialog.\nThe function should return an Object containing the text strings used to render the NotificationDialog. Additionally, the function will receive\nan array of registered NavigationPrompts as an argument. The array of prompts can be used to create dynamic strings based on the current set of registered prompts."]}),"\n",(0,o.jsx)(t.p,{children:"The keys expected in the resolvePrompts Object or return value include:"}),"\n",(0,o.jsxs)(t.p,{children:["|Key|Type|Description|\n|---|---|---|\n|",(0,o.jsx)(t.code,{children:"title"}),"|String|The title of the NotificationDialog.|\n|",(0,o.jsx)(t.code,{children:"startMessage"}),"|String|The starting message of the NotificationDialog.|\n|",(0,o.jsx)(t.code,{children:"content"}),"|Node|The content of the NotificationDialog.|\n|",(0,o.jsx)(t.code,{children:"endMessage"}),"|String|The ending message of the NotificationDialog.|\n|",(0,o.jsx)(t.code,{children:"acceptButtonText"}),"|String|The text to render within the NotificationDialog's accept button.|\n|",(0,o.jsx)(t.code,{children:"rejectButtonText"}),"|String|The text to render within the NotificationDialog's reject button.|\n|",(0,o.jsx)(t.code,{children:"buttonOrder"}),"|String|A string indicating which action should be rendered first, required. Supported values include: ",(0,o.jsx)(t.code,{children:"acceptFirst"}),", ",(0,o.jsx)(t.code,{children:"rejectFirst"}),".|\n|",(0,o.jsx)(t.code,{children:"emphasizedAction"}),"|String|A string indicating which action should be rendered as emphasized. Supported values include: ",(0,o.jsx)(t.code,{children:"accept"}),", ",(0,o.jsx)(t.code,{children:"reject"}),", and ",(0,o.jsx)(t.code,{children:"none"}),". Defaults to ",(0,o.jsx)(t.code,{children:"none"}),".|"]}),"\n",(0,o.jsxs)(t.p,{children:["A utility function called ",(0,o.jsx)(t.code,{children:"getUnsavedChangesPromptOptions"})," allows direct consumers of the NavigationPromptCheckpoint\nto match the prompt messaging provided by the components within ",(0,o.jsx)(t.code,{children:"terra-application"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"import React, { useContext, useRef } from 'react';\nimport { ApplicationIntlContext } from 'terra-application/lib/application-intl';\nimport { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from 'terra-application/lib/navigation-prompt';\n\nconst ExampleComponent = () => {\n  const checkpointRef = useRef();\n  const applicationIntl = useContext(ApplicationIntlContext);\n\n  function resolvePrompts() {\n    checkpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => { ... });\n  }\n\n  return (\n    <NavigationPromptCheckpoint\n      ref={checkpointRef}\n    >\n      {...}\n    </NavigationPromptCheckpoint>\n  );\n}\n"})})]})}const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,r.Z)({},(0,a.ah)(),e.components).wrapper;return t?(0,o.jsx)(t,(0,r.Z)({},e,{children:(0,o.jsx)(d,e)})):d(e)}},2010:(e,t,n)=>{var r=n(64836),o=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return d.Row}}),t.ZP=t.Di=void 0;var a=u(n(67294)),i=r(n(45697)),l=r(n(47166)),c=n(48720),d=u(n(98364)),s=r(n(50007));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}var h=l.default.bind(s.default),f={children:i.default.node},m={isRequired:i.default.bool},g=function(e){var t=e.children;return a.default.createElement(d.Cell,{className:h("bold")},t)};t.O=g,g.propTypes=f;var v=function(e){var t=e.children;return a.default.createElement(d.Cell,{className:h("code-block-override")},t)};t.Di=v,v.propTypes=f;var b=function(e){var t=e.isRequired;return a.default.createElement(d.Cell,{className:h([t?["required"]:[]])},t?"required":"optional")};t.dS=b,b.propTypes=m;var j=function(e){var t=e.children;return a.default.createElement(d.Cell,{className:h("code-block-override")},t)};t.mW=j,j.propTypes=f;var y=function(e){var t=e.children;return a.default.createElement(d.Cell,null,t)};t.Ex=y,y.propTypes=f;var x=function(e){var t=e.children,n=(0,a.useContext)(c.ThemeContext);return a.default.createElement(d.default,{paddingStyle:"compact",className:h("table",n.className)},a.default.createElement(d.Header,{className:h("header")},a.default.createElement(d.HeaderCell,null,"Prop"),a.default.createElement(d.HeaderCell,null,"Type"),a.default.createElement(d.HeaderCell,null,"Required"),a.default.createElement(d.HeaderCell,null,"Default"),a.default.createElement(d.HeaderCell,null,"Description")),a.default.createElement(d.Body,null,t))};x.propTypes=f;var _=x;t.ZP=_},17893:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},50007:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},75251:(e,t,n)=>{var r=n(67294),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},d=null,s=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(s=t.ref),t)l.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:s,props:a,_owner:i.current}}t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},89650:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),o=s(n(45697)),a=s(n(94184)),i=s(n(47166)),l=s(n(50026)),c=s(n(17893)),d=["children","disableStripes","paddingStyle"];function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=i.default.bind(c.default),f={children:o.default.node.isRequired,disableStripes:o.default.bool,paddingStyle:o.default.oneOf(["none","standard","compact"])},m=function(e){var t=e.children,n=e.disableStripes,o=e.paddingStyle,i=u(e,d),c=r.default.useContext(l.default),s=(0,a.default)(h("table",{striped:!n},{"padding-standard":"standard"===o},{"padding-compact":"compact"===o},c.className),i.className);return r.default.createElement("table",p({},i,{className:s}),t)};m.propTypes=f,m.defaultProps={disableStripes:!1,paddingStyle:"none"};var g=m;t.default=g},51523:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),o=i(n(45697)),a=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={children:o.default.node},d=function(e){var t=e.children,n=l(e,a);return r.default.createElement("tbody",n,t)};d.propTypes=c,d.defaultProps={children:[]};var s=d;t.default=s},58741:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),o=i(n(45697)),a=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={children:o.default.node},d=function(e){var t=e.children,n=l(e,a);return r.default.createElement("td",n,t)};d.propTypes=c,d.defaultProps={children:[]};var s=d;t.default=s},90703:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),o=l(n(45697)),a=l(n(96576)),i=["children"];function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={children:o.default.node},s=function(e){var t=e.children,n=c(e,i);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};s.propTypes=d,s.defaultProps={children:[]};var p=s;t.default=p},8078:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),o=i(n(45697)),a=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={children:o.default.node},d=function(e){var t=e.children,n=l(e,a);return r.default.createElement("th",n,t)};d.propTypes=c,d.defaultProps={children:[]};var s=d;t.default=s},34847:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),o=d(n(45697)),a=d(n(47166)),i=d(n(17893)),l=d(n(96576)),c=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.default.bind(i.default),h={children:o.default.node},f=function(e){var t=e.children,n=p(e,c),o=u(["row"]);return r.default.createElement("tr",s({},n,{className:n.className?"".concat(o," ").concat(n.className):o}),l.default.addScope(t,"row"))};f.propTypes=h,f.defaultProps={children:[]};var m=f;t.default=m},96576:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(67294))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return o.default.Children.forEach(e,(function(e){n.push(o.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},98364:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=d(n(89650)),o=d(n(51523)),a=d(n(34847)),i=d(n(58741)),l=d(n(90703)),c=d(n(8078));function d(e){return e&&e.__esModule?e:{default:e}}var s=r.default;t.default=s},87462:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})}}]);