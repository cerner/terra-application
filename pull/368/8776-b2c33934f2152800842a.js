"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[8776],{58776:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(58168),a=n(53986),o=(n(96540),n(36665)),l=n(3919),i=["components"],d={},p="wrapper";function u(e){var t=e.components,n=(0,a.A)(e,i);return(0,o.mdx)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(l.Ay,{mdxType:"PropsTable"},(0,o.mdx)(l.fI,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(l.dt,{mdxType:"PropNameCell"},"children"),(0,o.mdx)(l.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,o.mdx)(l.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(l.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(l.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Components to render within the context of the NavigationPromptCheckpoint. Any NavigationPrompts rendered within\nthese child components will be registered to this NavigationPromptCheckpoint instance."))),(0,o.mdx)(l.fI,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(l.dt,{mdxType:"PropNameCell"},"onPromptChange"),(0,o.mdx)(l.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,o.mdx)(l.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(l.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(l.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"A function that will be executed when NavigationPrompts are registered to or unregistered from the NavigationPromptCheckpoint instance.\nThis can be used to track registered prompts outside of a NavigationPromptCheckpoint and handle prompt resolution directly, if necessary.\nThe function will be provided with an array of data objects representing the registered NavigationPrompts as the sole argument. An empty\nArray will be provided when no prompts are registered."),(0,o.mdx)("p",null,"Function Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"(arrayOfPrompts) => {\n  arrayOfPrompts.forEach((prompt) => {\n    console.log(prompt.description);\n    console.log(prompt.metaData);\n  })\n  this.myLocalPromptRegistry = arrayOfPrompts;\n}\n"))))))}u.isMDXComponent=!0;var m=["components"],c={},s="wrapper";function f(e){var t=e.components,n=(0,a.A)(e,m);return(0,o.mdx)(s,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"navigationpromptcheckpoint"},"NavigationPromptCheckpoint"),(0,o.mdx)("p",null,"The NavigationPromptCheckpoint serves as a registration gateway for ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/368/application/terra-application/components/navigation-prompt"},"NavigationPrompts"),"\nrendered within it. Any NavigationPrompt rendered within the context of a NavigationPromptCheckpoint will register itself with the NavigationPromptCheckpoint\n(and any other ancestor checkpoints). The component that implements the NavigationPromptCheckpoint can use the presence of registered NavigationPrompts to\ninfluence its navigational workflows as necessary."),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { NavigationPromptCheckpoint } from 'terra-application/lib/navigation-prompt';\n")),(0,o.mdx)("h2",{id:"props"},"Props"),(0,o.mdx)(u,{mdxType:"NavigationPromptCheckpointProps"}),(0,o.mdx)("h2",{id:"details"},"Details"),(0,o.mdx)("p",null,"Any component that navigates between stateful child components should render NavigationPromptCheckpoints around those children.\nEach NavigationPrompt rendered by a child will be registered to the NavigationPromptCheckpoints above it in the component tree.\nThe implementer of each NavigationPromptCheckpoint can use the registered data to prompt the user before navigating or prevent navigation altogether."),(0,o.mdx)("h3",{id:"onpromptchange"},(0,o.mdx)("inlineCode",{parentName:"h3"},"onPromptChange")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," function prop is used to communicate NavigationPrompt registrations to the implementer of a NavigationPromptCheckpoint.\nThe function is called with an array of objects containing each registered NavigationPrompt's ",(0,o.mdx)("inlineCode",{parentName:"p"},"description")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"metaData")," properties."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Note: The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," prop will be called after each NavigationPrompt registration and removal.\nIt may be called more than once with the same array of NavigationPrompt data. Calls to ",(0,o.mdx)("inlineCode",{parentName:"p"},"setState")," within onPromptChange\nshould be performed only when necessary to minimize component updates.")),(0,o.mdx)("h3",{id:"resolveprompts"},(0,o.mdx)("inlineCode",{parentName:"h3"},"resolvePrompts")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," function can be accessed from the ref to a NavigationPromptCheckpoint. Calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," results in a\nPromise being returned and a NotificationDialog being presented to the user with options to either confirm or cancel their action.\nIf the user confirms the action, the dialog will close, and the returned Promise will be resolved. If the user cancels the action,\nthe dialog will close, and the returned Promise will be rejected. If no NavigationPrompts are detected, no dialog is presented, and\nthe returned Promise will be resolved."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," accepts either an Object or function argument. The Object should contain the text strings used to render the NotificationDialog.\nThe function should return an Object containing the text strings used to render the NotificationDialog. Additionally, the function will receive\nan array of registered NavigationPrompts as an argument. The array of prompts can be used to create dynamic strings based on the current set of registered prompts."),(0,o.mdx)("p",null,"The keys expected in the resolvePrompts Object or return value include:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Key"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"title")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The title of the NotificationDialog.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"startMessage")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The starting message of the NotificationDialog.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"content")),(0,o.mdx)("td",{parentName:"tr",align:null},"Node"),(0,o.mdx)("td",{parentName:"tr",align:null},"The content of the NotificationDialog.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"endMessage")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The ending message of the NotificationDialog.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"acceptButtonText")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The text to render within the NotificationDialog's accept button.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"rejectButtonText")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"The text to render within the NotificationDialog's reject button.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"buttonOrder")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"A string indicating which action should be rendered first, required. Supported values include: ",(0,o.mdx)("inlineCode",{parentName:"td"},"acceptFirst"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"rejectFirst"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"emphasizedAction")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"A string indicating which action should be rendered as emphasized. Supported values include: ",(0,o.mdx)("inlineCode",{parentName:"td"},"accept"),", ",(0,o.mdx)("inlineCode",{parentName:"td"},"reject"),", and ",(0,o.mdx)("inlineCode",{parentName:"td"},"none"),". Defaults to ",(0,o.mdx)("inlineCode",{parentName:"td"},"none"),".")))),(0,o.mdx)("p",null,"A utility function called ",(0,o.mdx)("inlineCode",{parentName:"p"},"getUnsavedChangesPromptOptions")," allows direct consumers of the NavigationPromptCheckpoint\nto match the prompt messaging provided by the components within ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext, useRef } from 'react';\nimport { useIntl } from 'react-intl';\nimport { NavigationPromptCheckpoint, getUnsavedChangesPromptOptions } from 'terra-application/lib/navigation-prompt';\n\nconst ExampleComponent = () => {\n  const checkpointRef = useRef();\n  const applicationIntl = useIntl();\n\n  function resolvePrompts() {\n    checkpointRef.current.resolvePrompts(getUnsavedChangesPromptOptions(applicationIntl)).then(() => { ... });\n  }\n\n  return (\n    <NavigationPromptCheckpoint\n      ref={checkpointRef}\n    >\n      {...}\n    </NavigationPromptCheckpoint>\n  );\n}\n")))}f.isMDXComponent=!0},3919:(e,t,n)=>{var r=n(24994),a=n(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return p.Row}}),t.Ay=t.$d=void 0;var o=c(n(96540)),l=r(n(5556)),i=r(n(67967)),d=n(67016),p=c(n(26984)),u=r(n(94089));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}var s=i.default.bind(u.default),f={children:l.default.node},h={isRequired:l.default.bool};(t.dt=function(e){var t=e.children;return o.default.createElement(p.Cell,{className:s("bold")},t)}).propTypes=f,(t.$d=function(e){var t=e.children;return o.default.createElement(p.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.YZ=function(e){var t=e.isRequired;return o.default.createElement(p.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")}).propTypes=h,(t.NZ=function(e){var t=e.children;return o.default.createElement(p.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.Hd=function(e){var t=e.children;return o.default.createElement(p.Cell,null,t)}).propTypes=f;var g=function(e){var t=e.children,n=(0,o.useContext)(d.ThemeContext);return o.default.createElement(p.default,{paddingStyle:"compact",className:s("table",n.className)},o.default.createElement(p.Header,{className:s("header")},o.default.createElement(p.HeaderCell,null,"Prop"),o.default.createElement(p.HeaderCell,null,"Type"),o.default.createElement(p.HeaderCell,null,"Required"),o.default.createElement(p.HeaderCell,null,"Default"),o.default.createElement(p.HeaderCell,null,"Description")),o.default.createElement(p.Body,null,t))};g.propTypes=f;t.Ay=g},78482:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},94089:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},85444:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),a=u(n(5556)),o=u(n(46942)),l=u(n(67967)),i=u(n(52103)),d=u(n(78482)),p=["children","disableStripes","paddingStyle"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.default.bind(d.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},h=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,l=c(e,p),d=r.default.useContext(i.default),u=(0,o.default)(s("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},d.className),l.className);return r.default.createElement("table",m({},l,{className:u}),t)};h.propTypes=f,h.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=h},61452:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(5556)),o=["children"];function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},p=function(e){var t=e.children,n=i(e,o);return r.default.createElement("tbody",n,t)};p.propTypes=d,p.defaultProps={children:[]};t.default=p},86472:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(5556)),o=["children"];function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},p=function(e){var t=e.children,n=i(e,o);return r.default.createElement("td",n,t)};p.propTypes=d,p.defaultProps={children:[]};t.default=p},97441:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(96540)),a=i(n(5556)),o=i(n(10767)),l=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("thead",n,r.default.createElement("tr",null,o.default.addScope(t,"col")))};u.propTypes=p,u.defaultProps={children:[]};t.default=u},22417:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(5556)),o=["children"];function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},p=function(e){var t=e.children,n=i(e,o);return r.default.createElement("th",n,t)};p.propTypes=d,p.defaultProps={children:[]};t.default=p},36142:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(96540)),a=p(n(5556)),o=p(n(67967)),l=p(n(78482)),i=p(n(10767)),d=["children"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.default.bind(l.default),s={children:a.default.node},f=function(e){var t=e.children,n=m(e,d),a=c(["row"]);return r.default.createElement("tr",u({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),i.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};t.default=f},10767:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(96540))&&r.__esModule?r:{default:r};var o={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=o},26984:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=p(n(85444)),a=p(n(61452)),o=p(n(36142)),l=p(n(86472)),i=p(n(97441)),d=p(n(22417));function p(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},58168:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{A:()=>r})},53986:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{A:()=>r})}}]);