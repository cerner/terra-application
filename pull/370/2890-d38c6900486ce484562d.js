"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[2890],{62890:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var r=t(58168),a=t(53986),o=(t(96540),t(36665)),l=t(3919),d=["components"],i={},s="wrapper";function p(e){var n=e.components,t=(0,a.A)(e,d);return(0,o.mdx)(s,(0,r.A)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(l.Ay,{mdxType:"PropsTable"},(0,o.mdx)(l.fI,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(l.dt,{mdxType:"PropNameCell"},"children"),(0,o.mdx)(l.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,o.mdx)(l.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(l.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(l.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The components to be rendered in the body of the ModalManager. These components will receive the\ndisclosure capabilities through the DisclosureManger's context API."))),(0,o.mdx)(l.fI,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(l.dt,{mdxType:"PropNameCell"},"disclosureAccessory"),(0,o.mdx)(l.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,o.mdx)(l.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(l.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(l.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The component to render within the Modal above the disclosed content."))),(0,o.mdx)(l.fI,{key:"ROW3",mdxType:"Row"},(0,o.mdx)(l.dt,{mdxType:"PropNameCell"},"navigationPromptResolutionOptions"),(0,o.mdx)(l.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,o.mdx)(l.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(l.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(l.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The Object (or function that returns an Object) that specifies the messages\nused to prompt the user when disclosure dismissal occurs when pending state\nis present. If not provided, the default messaging will be used.")))))}p.isMDXComponent=!0;var c=["components"],u={},m="wrapper";function f(e){var n=e.components,t=(0,a.A)(e,c);return(0,o.mdx)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"modalmanager"},"ModalManager"),(0,o.mdx)("p",null,"The ModalManager exposes its children to modal presentation APIs through the\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext"),"."),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ModalManager from 'terra-application/lib/modal-manager';\n")),(0,o.mdx)("h2",{id:"props"},"Props"),(0,o.mdx)(p,{mdxType:"PropsTable"}),(0,o.mdx)("h2",{id:"features"},"Features"),(0,o.mdx)("h3",{id:"exception-handling"},"Exception Handling"),(0,o.mdx)("p",null,"ModalManager renders an ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-error-boundary"},"ApplicationErrorBoundary"),"\naround its disclosed components. If the disclosed components throw exceptions during React lifecycle functions, ModalManager will\ncatch the exceptions and render a styled error component in place of the children."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationErrorBoundary below their modal header to keep the\nheader controls for modal dismissal exposed.")),(0,o.mdx)("h3",{id:"loading-overlays"},"Loading Overlays"),(0,o.mdx)("p",null,"ModalManager renders an ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-loading-overlay-provider"},"ApplicationLoadingOverlayProvider"),"\naround its disclosed components. Any ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-loading-overlay"},"ApplicationLoadingOverlay"),"\ncomponents rendered by children will cause a loading overlay to be rendered over the modal's contents."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationLoadingOverlayProvider below their modal header to keep\nthe header controls for modal dismissal exposed while the overlay is active.")),(0,o.mdx)("h3",{id:"status-views"},"Status Views"),(0,o.mdx)("p",null,"ModalManager renders an ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider"),"\naround its disclosed components. Any ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-status-overlay"},"ApplicationStatusOverlay"),"\ncomponents rendered by children will cause a status view to be rendered over the modal's contents."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationStatusOverlayProvider below their modal header to keep\nthe header controls for modal dismissal exposed while the status view is active.")),(0,o.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),(0,o.mdx)("p",null,"ModalManager monitors its disclosed content for the presence of rendered ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/navigation-prompt"},"NavigationPrompts"),"\nwithin its disclosed content. ModalManager will ensure that the user is prompted prior to dismissing the presented modal if any\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/navigation-prompt"},"NavigationPrompts")," are rendered at the time of the dismissal request."),(0,o.mdx)("h2",{id:"details"},"Details"),(0,o.mdx)("h3",{id:"implementation-requirements"},"Implementation Requirements"),(0,o.mdx)("p",null,"The ModalManager utilizes the ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext")," to manage disclosure requests."),(0,o.mdx)("p",null,"The ModalManager responds to ",(0,o.mdx)("inlineCode",{parentName:"p"},'"modal"')," disclosure type requests. Components that wish to disclose content using the ModalManager\nshould provide a preferred type of ",(0,o.mdx)("inlineCode",{parentName:"p"},'"modal"'),"."),(0,o.mdx)("h3",{id:"disclosuremanagerheaderadapter-support"},"DisclosureManagerHeaderAdapter Support"),(0,o.mdx)("p",null,"If a component disclosed by the ModalManager renders a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will render an ActionHeader\nand provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component\ncan use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to inject its own title and CollapsibleButtonView into the ActionHeader."),(0,o.mdx)("p",null,"If the disclosed component does ",(0,o.mdx)("strong",{parentName:"p"},"not")," render a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will ",(0,o.mdx)("strong",{parentName:"p"},"not")," render an ActionHeader itself.\nIn this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering\nthe appropriate controls to navigate the disclosure stack."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the ModalManager.\nIn a future major release, the ModalManager will ",(0,o.mdx)("strong",{parentName:"p"},"always")," render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.")),(0,o.mdx)("h3",{id:"disclosure-accessory"},"Disclosure Accessory"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"disclosureAccessory")," prop allows consumers of the ModalManager to render a static component above the disclosed modal content.\nThe provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily\nprovide additional context to every disclosed component. This component is provided once to the ModalManager instance, not on a per-disclosure basis,\nand each component in the disclosure stack will be decorated with the same accessory component."),(0,o.mdx)("h3",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport ModalManager, { disclosureType } from 'terra-application/lib/modal-manager';\nimport { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst ModalComponentB = () => (\n  <React.Fragment>\n    <DisclosureManagerHeaderAdapter\n      title=\"Modal Component B\"\n    />\n    <p>I am ModalComponentB!</p>\n  </React.Fragment>\n);\n\nconst ModalComponentA = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <div>\n      <DisclosureManagerHeaderAdapter\n        title=\"Modal Component A\"\n        collapsibleMenuView={<CollapsibleMenuView />}\n      />\n      <p>I am ModalComponentA!</p>\n      <Button\n        text=\"Disclose ModalComponentB\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: 'modal',\n            size: 'large',\n            content: {\n              key: 'modal-component-b-instance',\n              component: <ModalComponentB />\n            }\n          });\n        }}\n      />\n    </div>\n  );\n}\n\nconst MyContentComponent = withDisclosureManager(({ disclosureManager }) => (\n  <div>\n    <p>I am MyContentComponent!</p>\n    <Button\n      text=\"Disclose ModalComponentA\"\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'modal-component-a-instance',\n            component: <ModalComponentA />\n          }\n        });\n      }}\n    />\n  </div>\n));\n\nMyContentComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n}\n\nconst MyModalManagerComponent = () => (\n  <ModalManager\n    disclosureAccessory={<div>Disclosure Accessory</div>}\n  >\n    <MyContentComponent />\n  </ModalManager>\n);\n")))}f.isMDXComponent=!0},3919:(e,n,t)=>{var r=t(24994),a=t(73738);n.YZ=n.dt=n.Hd=n.NZ=void 0,Object.defineProperty(n,"fI",{enumerable:!0,get:function(){return s.Row}}),n.Ay=n.$d=void 0;var o=u(t(96540)),l=r(t(5556)),d=r(t(67967)),i=t(67016),s=u(t(26984)),p=r(t(94089));function c(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}function u(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var d=o?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(r,l,d):r[l]=e[l]}return r.default=e,t&&t.set(e,r),r}var m=d.default.bind(p.default),f={children:l.default.node},h={isRequired:l.default.bool};(n.dt=function(e){var n=e.children;return o.default.createElement(s.Cell,{className:m("bold")},n)}).propTypes=f,(n.$d=function(e){var n=e.children;return o.default.createElement(s.Cell,{className:m("code-block-override")},n)}).propTypes=f,(n.YZ=function(e){var n=e.isRequired;return o.default.createElement(s.Cell,{className:m([n?["required"]:[]])},n?"required":"optional")}).propTypes=h,(n.NZ=function(e){var n=e.children;return o.default.createElement(s.Cell,{className:m("code-block-override")},n)}).propTypes=f,(n.Hd=function(e){var n=e.children;return o.default.createElement(s.Cell,null,n)}).propTypes=f;var y=function(e){var n=e.children,t=(0,o.useContext)(i.ThemeContext);return o.default.createElement(s.default,{paddingStyle:"compact",className:m("table",t.className)},o.default.createElement(s.Header,{className:m("header")},o.default.createElement(s.HeaderCell,null,"Prop"),o.default.createElement(s.HeaderCell,null,"Type"),o.default.createElement(s.HeaderCell,null,"Required"),o.default.createElement(s.HeaderCell,null,"Default"),o.default.createElement(s.HeaderCell,null,"Description")),o.default.createElement(s.Body,null,n))};y.propTypes=f;n.Ay=y},78482:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},94089:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},85444:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=p(t(96540)),a=p(t(5556)),o=p(t(46942)),l=p(t(67967)),d=p(t(52103)),i=p(t(78482)),s=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=l.default.bind(i.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},h=function(e){var n=e.children,t=e.disableStripes,a=e.paddingStyle,l=u(e,s),i=r.default.useContext(d.default),p=(0,o.default)(m("table",{striped:!t},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),l.className);return r.default.createElement("table",c({},l,{className:p}),n)};h.propTypes=f,h.defaultProps={disableStripes:!1,paddingStyle:"none"};n.default=h},61452:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=l(t(96540)),a=l(t(5556)),o=["children"];function l(e){return e&&e.__esModule?e:{default:e}}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={children:a.default.node},s=function(e){var n=e.children,t=d(e,o);return r.default.createElement("tbody",t,n)};s.propTypes=i,s.defaultProps={children:[]};n.default=s},86472:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=l(t(96540)),a=l(t(5556)),o=["children"];function l(e){return e&&e.__esModule?e:{default:e}}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={children:a.default.node},s=function(e){var n=e.children,t=d(e,o);return r.default.createElement("td",t,n)};s.propTypes=i,s.defaultProps={children:[]};n.default=s},97441:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=d(t(96540)),a=d(t(5556)),o=d(t(10767)),l=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s={children:a.default.node},p=function(e){var n=e.children,t=i(e,l);return r.default.createElement("thead",t,r.default.createElement("tr",null,o.default.addScope(n,"col")))};p.propTypes=s,p.defaultProps={children:[]};n.default=p},22417:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=l(t(96540)),a=l(t(5556)),o=["children"];function l(e){return e&&e.__esModule?e:{default:e}}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={children:a.default.node},s=function(e){var n=e.children,t=d(e,o);return r.default.createElement("th",t,n)};s.propTypes=i,s.defaultProps={children:[]};n.default=s},36142:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=s(t(96540)),a=s(t(5556)),o=s(t(67967)),l=s(t(78482)),d=s(t(10767)),i=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.default.bind(l.default),m={children:a.default.node},f=function(e){var n=e.children,t=c(e,i),a=u(["row"]);return r.default.createElement("tr",p({},t,{className:t.className?"".concat(a," ").concat(t.className):a}),d.default.addScope(n,"row"))};f.propTypes=m,f.defaultProps={children:[]};n.default=f},10767:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,a=(r=t(96540))&&r.__esModule?r:{default:r};var o={addScope:function(e,n){var t=[];return a.default.Children.forEach(e,(function(e){t.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?n:void 0}))})),t}};n.default=o},26984:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"Cell",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(n,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(n,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(n,"Row",{enumerable:!0,get:function(){return o.default}}),n.default=void 0;var r=s(t(85444)),a=s(t(61452)),o=s(t(36142)),l=s(t(86472)),d=s(t(97441)),i=s(t(22417));function s(e){return e&&e.__esModule?e:{default:e}}n.default=r.default},58168:(e,n,t)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{A:()=>r})},53986:(e,n,t)=>{function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{A:()=>r})}}]);