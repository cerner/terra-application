"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[9709],{9709:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(87462),r=n(44925),l=(n(67294),n(81254)),o=n(2010),i=["components"],d={},p="wrapper";function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.mdx)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(o.ZP,{mdxType:"PropsTable"},(0,l.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(o.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The components to render within ApplicationBase."))),(0,l.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"locale"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The locale name to be used to load translated messages.\nIf the ",(0,l.mdx)("inlineCode",{parentName:"p"},"locale")," prop is not provided, the preferred language from the browser will be used."))),(0,l.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"themeName"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The name of the theme to apply to the application using terra-theme-provider."))),(0,l.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"fitToParentIsDisabled"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"By default, the elements rendered by ApplicationBase are fit to the Application's parent using 100% height.\nIf ",(0,l.mdx)("inlineCode",{parentName:"p"},"fitToParentIsDisabled")," is provided, the Application will render at its intrinsic content height and\npotentially overflow its parent."))),(0,l.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"unloadPromptIsDisabled"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"By default, NavigationPrompts rendered within ApplicationBase will cause the user to be prompted during\nthe window's beforeUnload event. If ",(0,l.mdx)("inlineCode",{parentName:"p"},"unloadPromptIsDisabled")," is provided, the user will ",(0,l.mdx)("strong",{parentName:"p"},"not")," be prompted\nbefore continuing with the unload event, even if NavigationPrompts are present.")))))}c.isMDXComponent=!0;var u=["components"],s={},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.mdx)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"applicationbase"},"ApplicationBase"),(0,l.mdx)("p",null,"The ApplicationBase component is the entrypoint into the Terra application framework. Applications must render ApplicationBase around the their content to provide the content with ApplicationBase's features."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"ApplicationBase renders the Base component (from ",(0,l.mdx)("inlineCode",{parentName:"p"},"terra-base"),") around its children. Components rendered within ApplicationBase should not render a separate Base instance.")),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ApplicationBase from 'terra-application/lib/application-base';\n")),(0,l.mdx)("h2",{id:"props"},"Props"),(0,l.mdx)(c,{mdxType:"PropsTable"}),(0,l.mdx)("h2",{id:"features"},"Features"),(0,l.mdx)("h3",{id:"i18n"},"I18n"),(0,l.mdx)("p",null,"ApplicationBase exposes a prop to define the application's locale and dynamically retrieve the translated strings for that locale. Children of ApplicationBase can access translated strings by using react-intl's provided ",(0,l.mdx)("a",{parentName:"p",href:"https://formatjs.io/docs/react-intl/components"},"components"),", react-intl's ",(0,l.mdx)("a",{parentName:"p",href:"https://formatjs.io/docs/react-intl/api"},"imperitive API")," or by using the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/cerner-terra-application/contexts/application-intl-context"},"ApplicationIntlContext"),"."),(0,l.mdx)("h3",{id:"theming"},"Theming"),(0,l.mdx)("p",null,"ApplicationBase exposes props to define the application's theme."),(0,l.mdx)("p",null,"ApplicationBase renders a theme context provider around its children. Children can access the current theme by using the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/contexts/theme-context"},"ThemeContext"),"."),(0,l.mdx)("h3",{id:"breakpoints"},"Breakpoints"),(0,l.mdx)("p",null,"ApplicationBase renders an ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/contexts/active-breakpoint-context"},"ActiveBreakpointContext.Provider")," around its children. Children can access the current active breakpoint value by using the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/contexts/active-breakpoint-context"},"ActiveBreakpointContext"),"."),(0,l.mdx)("h3",{id:"exception-handling"},"Exception Handling"),(0,l.mdx)("p",null,"ApplicationBase renders an ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/components/application-error-boundary"},"ApplicationErrorBoundary")," around its children. If the children throw exceptions during React lifecycle functions, ApplicationBase will catch the exceptions and render a styled error component in place of the children."),(0,l.mdx)("h3",{id:"loading-overlays"},"Loading Overlays"),(0,l.mdx)("p",null,"ApplicationBase renders an ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/components/application-loading-overlay-provider"},"ApplicationLoadingOverlayProvider")," around its children. Any ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/components/application-loading-overlay"},"ApplicationLoadingOverlay")," components rendered by children will result in loading overlays being rendered by ApplicationBase."),(0,l.mdx)("h3",{id:"status-views"},"Status Views"),(0,l.mdx)("p",null,"ApplicationBase renders an ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider")," around its children. Any ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/components/application-status-overlay"},"ApplicationStatusOverlay")," components rendered by children will result in a status view being rendered by ApplicationBase."),(0,l.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),(0,l.mdx)("p",null,"ApplicationBase monitors its children for the presence of rendered ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/components/navigation-prompt"},"NavigationPrompts"),". ApplicationBase will prompt the user, if possible, using a browser-native confirmation dialog prior to any window unload event if any ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/components/navigation-prompt"},"NavigationPrompts")," are rendered at the time of the unload request."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Note that support for the ",(0,l.mdx)("inlineCode",{parentName:"p"},"beforeunload")," event used to implement this functionality varies across terra-application's supported browsers. Some browsers, namely those running on iOS and Android, do not support the ",(0,l.mdx)("inlineCode",{parentName:"p"},"beforeunload")," event and do not allow the framework to prevent the application's dismissal, even if unsaved changes are present. Other browsers allow their users to explicitly disable this event to avoid malicious or otherwise obtrusive implementations.\nPlease review the ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload#Browser_compatibility"},"event's documentation")," for more information.")),(0,l.mdx)("h3",{id:"code-splitting"},"Code Splitting"),(0,l.mdx)("p",null,"ApplicationNavigation renders a ",(0,l.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html#reactlazy"},"Suspense")," component around its children. If any child components or their descendants are lazy loaded using ",(0,l.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html#reactlazy"},"React.lazy"),", a sensible fallback will be rendered while the component is being retrieved. The fallback will render below the ApplicationNavigation header and allow the header to remain interactable."),(0,l.mdx)("h3",{id:"modal-presentation"},"Modal Presentation"),(0,l.mdx)("p",null,"ApplicationBase renders a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/components/modal-manager"},"ModalManager")," around its children. Children can access modal disclosure APIs by using the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/328/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext"),"."))}f.isMDXComponent=!0},2010:(e,t,n)=>{var a=n(64836),r=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return p.Row}}),t.ZP=t.Di=void 0;var l=s(n(67294)),o=a(n(45697)),i=a(n(47166)),d=n(48720),p=s(n(98364)),c=a(n(50007));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var m=i.default.bind(c.default),f={children:o.default.node},h={isRequired:o.default.bool},x=function(e){var t=e.children;return l.default.createElement(p.Cell,{className:m("bold")},t)};t.O=x,x.propTypes=f;var y=function(e){var t=e.children;return l.default.createElement(p.Cell,{className:m("code-block-override")},t)};t.Di=y,y.propTypes=f;var b=function(e){var t=e.isRequired;return l.default.createElement(p.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")};t.dS=b,b.propTypes=h;var v=function(e){var t=e.children;return l.default.createElement(p.Cell,{className:m("code-block-override")},t)};t.mW=v,v.propTypes=f;var g=function(e){var t=e.children;return l.default.createElement(p.Cell,null,t)};t.Ex=g,g.propTypes=f;var O=function(e){var t=e.children,n=(0,l.useContext)(d.ThemeContext);return l.default.createElement(p.default,{paddingStyle:"compact",className:m("table",n.className)},l.default.createElement(p.Header,{className:m("header")},l.default.createElement(p.HeaderCell,null,"Prop"),l.default.createElement(p.HeaderCell,null,"Type"),l.default.createElement(p.HeaderCell,null,"Required"),l.default.createElement(p.HeaderCell,null,"Default"),l.default.createElement(p.HeaderCell,null,"Description")),l.default.createElement(p.Body,null,t))};O.propTypes=f;var _=O;t.ZP=_},17893:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},50007:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},89650:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),l=c(n(94184)),o=c(n(47166)),i=c(n(50026)),d=c(n(17893)),p=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.default.bind(d.default),f={children:r.default.node.isRequired,disableStripes:r.default.bool,paddingStyle:r.default.oneOf(["none","standard","compact"])},h=function(e){var t=e.children,n=e.disableStripes,r=e.paddingStyle,o=s(e,p),d=a.default.useContext(i.default),c=(0,l.default)(m("table",{striped:!n},{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},d.className),o.className);return a.default.createElement("table",u({},o,{className:c}),t)};h.propTypes=f,h.defaultProps={disableStripes:!1,paddingStyle:"none"};var x=h;t.default=x},51523:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={children:r.default.node},p=function(e){var t=e.children,n=i(e,l);return a.default.createElement("tbody",n,t)};p.propTypes=d,p.defaultProps={children:[]};var c=p;t.default=c},58741:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={children:r.default.node},p=function(e){var t=e.children,n=i(e,l);return a.default.createElement("td",n,t)};p.propTypes=d,p.defaultProps={children:[]};var c=p;t.default=c},90703:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(45697)),l=i(n(96576)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={children:r.default.node},c=function(e){var t=e.children,n=d(e,o);return a.default.createElement("thead",n,a.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=p,c.defaultProps={children:[]};var u=c;t.default=u},8078:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={children:r.default.node},p=function(e){var t=e.children,n=i(e,l);return a.default.createElement("th",n,t)};p.propTypes=d,p.defaultProps={children:[]};var c=p;t.default=c},73045:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(67294)),r=p(n(45697)),l=p(n(47166)),o=p(n(17893)),i=p(n(96576)),d=["children"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.default.bind(o.default),m={children:r.default.node},f=function(e){var t=e.children,n=u(e,d),r=s(["row"]);return a.default.createElement("tr",c({},n,{className:n.className?"".concat(r," ").concat(n.className):r}),i.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};var h=f;t.default=h},96576:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(67294))&&a.__esModule?a:{default:a};var l={addScope:function(e,t){var n=[];return r.default.Children.forEach(e,(function(e){n.push(r.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},98364:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var a=p(n(89650)),r=p(n(51523)),l=p(n(73045)),o=p(n(58741)),i=p(n(90703)),d=p(n(8078));function p(e){return e&&e.__esModule?e:{default:e}}var c=a.default;t.default=c},87462:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},44925:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:()=>a})}}]);