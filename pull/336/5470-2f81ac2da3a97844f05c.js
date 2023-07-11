"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[5470],{65470:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var r=t(87462),a=t(44925),l=(t(67294),t(81254)),o=t(2010),d=["components"],i={},p="wrapper";function s(e){var n=e.components,t=(0,a.Z)(e,d);return(0,l.mdx)(p,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(o.ZP,{mdxType:"PropsTable"},(0,l.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The components to be rendered in the body of the SlidePanelManager. These components will receive the\ndisclosure capabilities through the DisclosureManger's context API."))),(0,l.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"panelBehavior"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'overlay'\n  'squish'\n],\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The desired panel behavior. Either 'squish' or 'overlay'."))),(0,l.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"disclosureAccessory"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The component to render within the panel above the disclosed content."))),(0,l.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"navigationPromptResolutionOptions"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The Object (or function that returns an Object) that specifies the messages\nused to prompt the user when disclosure dismissal occurs when pending state\nis present. If not provided, the default messaging will be used.")))))}s.isMDXComponent=!0;var c,u=["components"],m=(c="Badge",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),f={},h="wrapper";function y(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.mdx)(h,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(m,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"slidepanelmanager"},"SlidePanelManager"),(0,l.mdx)("p",null,"The SlidePanelManager exposes its children to panel presentation APIs through the\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/336/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext"),"."),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import SlidePanelManager from 'terra-application/lib/slide-panel-manager';\n")),(0,l.mdx)("h2",{id:"props"},"Props"),(0,l.mdx)(s,{mdxType:"PropsTable"}),(0,l.mdx)("h2",{id:"features"},"Features"),(0,l.mdx)("h3",{id:"exception-handling"},"Exception Handling"),(0,l.mdx)("p",null,"SlidePanelManager renders an ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/336/application/terra-application/components/application-error-boundary"},"ApplicationErrorBoundary"),"\naround its disclosed components. If the disclosed components throw exceptions during React lifecycle functions, SlidePanelManager will\ncatch the exceptions and render a styled error component in place of the children."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"If the disclosed panel contents do not utilize the DisclosureManagerHeaderAdapter and render their own panel header instead,\nit is recommended that those components render an additional ApplicationErrorBoundary below their panel header to keep the\nheader controls for panel dismissal exposed.")),(0,l.mdx)("h3",{id:"loading-overlays"},"Loading Overlays"),(0,l.mdx)("p",null,"SlidePanelManager renders an ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/336/application/terra-application/components/application-loading-overlay-provider"},"ApplicationLoadingOverlayProvider"),"\naround its disclosed components. Any ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/336/application/terra-application/components/application-loading-overlay"},"ApplicationLoadingOverlay"),"\ncomponents rendered by children will cause a loading overlay to be rendered over the panel's contents."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"If the disclosed panel contents do not utilize the DisclosureManagerHeaderAdapter and render their own panel header instead,\nit is recommended that those components render an additional ApplicationLoadingOverlayProvider below their panel header to keep\nthe header controls for panel dismissal exposed while the overlay is active.")),(0,l.mdx)("h3",{id:"status-views"},"Status Views"),(0,l.mdx)("p",null,"SlidePanelManager renders an ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/336/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider"),"\naround its disclosed components. Any ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/336/application/terra-application/components/application-status-overlay"},"ApplicationStatusOverlay"),"\ncomponents rendered by children will cause a status view to be rendered over the panel's contents."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"If the disclosed panel contents do not utilize the DisclosureManagerHeaderAdapter and render their own panel header instead,\nit is recommended that those components render an additional ApplicationStatusOverlayProvider below their panel header to keep\nthe header controls for panel dismissal exposed while the status view is active.")),(0,l.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),(0,l.mdx)("p",null,"SlidePanelManager monitors its disclosed content for the presence of rendered ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/336/application/terra-application/components/navigation-prompt"},"NavigationPrompts"),"\nwithin its disclosed content. SlidePanelManager will ensure that the user is prompted prior to dismissing the presented panel if any\n",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/336/application/terra-application/components/navigation-prompt"},"NavigationPrompts")," are rendered at the time of the dismissal request."),(0,l.mdx)("h2",{id:"details"},"Details"),(0,l.mdx)("h3",{id:"implementation-requirements"},"Implementation Requirements"),(0,l.mdx)("p",null,"The SlidePanelManager utilizes the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/336/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext")," to manage disclosure requests."),(0,l.mdx)("p",null,"The SlidePanelManager responds to ",(0,l.mdx)("inlineCode",{parentName:"p"},'"panel"')," disclosure type requests. Components that wish to disclose content using the SlidePanelManager\nshould provide a preferred type of ",(0,l.mdx)("inlineCode",{parentName:"p"},'"panel"'),"."),(0,l.mdx)("h3",{id:"disclosuremanagerheaderadapter-support"},"DisclosureManagerHeaderAdapter Support"),(0,l.mdx)("p",null,"If a component disclosed by the SlidePanelManager renders a ",(0,l.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the SlidePanelManager will render an ActionHeader\nand provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component\ncan use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to inject its own title and CollapsibleButtonView into the ActionHeader."),(0,l.mdx)("p",null,"If the disclosed component does ",(0,l.mdx)("strong",{parentName:"p"},"not")," render a ",(0,l.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the SlidePanelManager will ",(0,l.mdx)("strong",{parentName:"p"},"not")," render an ActionHeader itself.\nIn this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering\nthe appropriate controls to navigate the disclosure stack."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the SlidePanelManager.\nIn a future major release, the SlidePanelManager will ",(0,l.mdx)("strong",{parentName:"p"},"always")," render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.")),(0,l.mdx)("h3",{id:"disclosure-accessory"},"Disclosure Accessory"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"disclosureAccessory")," prop allows consumers of the SlidePanelManager to render a static component above the disclosed panel content.\nThe provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily\nprovide additional context to every disclosed component. This component is provided once to the SlidePanelManager instance, not on a per-disclosure basis,\nand each component in the disclosure stack will be decorated with the same accessory component."),(0,l.mdx)("h3",{id:"example"},"Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport SlidePanelManager, { disclosureType } from 'terra-application/lib/slide-panel-manager';\nimport { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst PanelComponentB = () => (\n  <React.Fragment>\n    <DisclosureManagerHeaderAdapter\n      title=\"Panel Component B\"\n    />\n    <p>I am PanelComponentB!</p>\n  </React.Fragment>\n);\n\nconst PanelComponentA = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <div>\n      <DisclosureManagerHeaderAdapter\n        title=\"Panel Component A\"\n        collapsibleMenuView={<CollapsibleMenuView />}\n      />\n      <p>I am PanelComponentA!</p>\n      <Button\n        text=\"Disclose PanelComponentB\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: 'panel',\n            size: 'large',\n            content: {\n              key: 'panel-component-b-instance',\n              component: <PanelComponentB />\n            }\n          });\n        }}\n      />\n    </div>\n  );\n}\n\nconst MyContentComponent = withDisclosureManager(({ disclosureManager }) => (\n  <div>\n    <p>I am MyContentComponent!</p>\n    <Button\n      text=\"Disclose PanelComponentA\"\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'panel',\n          size: 'large',\n          content: {\n            key: 'panel-component-a-instance',\n            component: <PanelComponentA />\n          }\n        });\n      }}\n    />\n  </div>\n));\n\nMyContentComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n}\n\nconst MySlidePanelManagerComponent = () => (\n  <SlidePanelManager\n    disclosureAccessory={<div>Disclosure Accessory</div>}\n  >\n    <MyContentComponent />\n  </SlidePanelManager>\n);\n")))}y.isMDXComponent=!0},2010:(e,n,t)=>{var r=t(64836),a=t(18698);n.dS=n.O=n.Ex=n.mW=void 0,Object.defineProperty(n,"X2",{enumerable:!0,get:function(){return p.Row}}),n.ZP=n.Di=void 0;var l=u(t(67294)),o=r(t(45697)),d=r(t(47166)),i=t(48720),p=u(t(98364)),s=r(t(50007));function c(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}function u(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}var m=d.default.bind(s.default),f={children:o.default.node},h={isRequired:o.default.bool},y=function(e){var n=e.children;return l.default.createElement(p.Cell,{className:m("bold")},n)};n.O=y,y.propTypes=f;var x=function(e){var n=e.children;return l.default.createElement(p.Cell,{className:m("code-block-override")},n)};n.Di=x,x.propTypes=f;var g=function(e){var n=e.isRequired;return l.default.createElement(p.Cell,{className:m([n?["required"]:[]])},n?"required":"optional")};n.dS=g,g.propTypes=h;var b=function(e){var n=e.children;return l.default.createElement(p.Cell,{className:m("code-block-override")},n)};n.mW=b,b.propTypes=f;var v=function(e){var n=e.children;return l.default.createElement(p.Cell,null,n)};n.Ex=v,v.propTypes=f;var O=function(e){var n=e.children,t=(0,l.useContext)(i.ThemeContext);return l.default.createElement(p.default,{paddingStyle:"compact",className:m("table",t.className)},l.default.createElement(p.Header,{className:m("header")},l.default.createElement(p.HeaderCell,null,"Prop"),l.default.createElement(p.HeaderCell,null,"Type"),l.default.createElement(p.HeaderCell,null,"Required"),l.default.createElement(p.HeaderCell,null,"Default"),l.default.createElement(p.HeaderCell,null,"Description")),l.default.createElement(p.Body,null,n))};O.propTypes=f;var P=O;n.ZP=P},17893:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},50007:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},89650:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=s(t(67294)),a=s(t(45697)),l=s(t(94184)),o=s(t(47166)),d=s(t(50026)),i=s(t(17893)),p=["children","disableStripes","paddingStyle"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=o.default.bind(i.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},h=function(e){var n=e.children,t=e.disableStripes,a=e.paddingStyle,o=u(e,p),i=r.default.useContext(d.default),s=(0,l.default)(m("table",{striped:!t},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return r.default.createElement("table",c({},o,{className:s}),n)};h.propTypes=f,h.defaultProps={disableStripes:!1,paddingStyle:"none"};var y=h;n.default=y},51523:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(67294)),a=o(t(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={children:a.default.node},p=function(e){var n=e.children,t=d(e,l);return r.default.createElement("tbody",t,n)};p.propTypes=i,p.defaultProps={children:[]};var s=p;n.default=s},58741:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(67294)),a=o(t(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={children:a.default.node},p=function(e){var n=e.children,t=d(e,l);return r.default.createElement("td",t,n)};p.propTypes=i,p.defaultProps={children:[]};var s=p;n.default=s},90703:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=d(t(67294)),a=d(t(45697)),l=d(t(96576)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p={children:a.default.node},s=function(e){var n=e.children,t=i(e,o);return r.default.createElement("thead",t,r.default.createElement("tr",null,l.default.addScope(n,"col")))};s.propTypes=p,s.defaultProps={children:[]};var c=s;n.default=c},8078:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(67294)),a=o(t(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i={children:a.default.node},p=function(e){var n=e.children,t=d(e,l);return r.default.createElement("th",t,n)};p.propTypes=i,p.defaultProps={children:[]};var s=p;n.default=s},73045:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=p(t(67294)),a=p(t(45697)),l=p(t(47166)),o=p(t(17893)),d=p(t(96576)),i=["children"];function p(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=l.default.bind(o.default),m={children:a.default.node},f=function(e){var n=e.children,t=c(e,i),a=u(["row"]);return r.default.createElement("tr",s({},t,{className:t.className?"".concat(a," ").concat(t.className):a}),d.default.addScope(n,"row"))};f.propTypes=m,f.defaultProps={children:[]};var h=f;n.default=h},96576:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,a=(r=t(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,n){var t=[];return a.default.Children.forEach(e,(function(e){t.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?n:void 0}))})),t}};n.default=l},98364:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(n,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(n,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(n,"Row",{enumerable:!0,get:function(){return l.default}}),n.default=void 0;var r=p(t(89650)),a=p(t(51523)),l=p(t(73045)),o=p(t(58741)),d=p(t(90703)),i=p(t(8078));function p(e){return e&&e.__esModule?e:{default:e}}var s=r.default;n.default=s},87462:(e,n,t)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:()=>r})},44925:(e,n,t)=>{function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:()=>r})}}]);