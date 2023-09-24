"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[3643],{40996:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),l=u(n(45697)),a=u(n(47166)),o=u(n(50026)),d=u(n(66983)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.default.bind(d.default),s=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y={children:l.default.string},x=function(e){var t=e.children,n=c(e,i),l=r.default.useContext(o.default),d=(0,a.default)(m(["button",l.className]),n.className);return r.default.createElement("button",p({},n,{type:"button",className:d,onBlur:s,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};x.propTypes=y;var _=x;t.default=_},59278:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),l=i(n(45697)),a=i(n(47166)),o=i(n(50026)),d=i(n(30866));function i(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(d.default),p={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},c=function(e){var t=e.ariaLevel,n=e.variant,l=e.children,a=r.default.useContext(o.default);return r.default.createElement("div",{className:u("notice",n,a.className)},r.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:u("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(l,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};c.propTypes=p,c.defaultProps={ariaLevel:"2",variant:"important"};var m=c;t.default=m},47306:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),l=p(n(45697)),a=p(n(94184)),o=p(n(47166)),d=p(n(50026)),i=p(n(42620)),u=["title"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.default.bind(i.default),f={title:l.default.string},y=function(e){var t=e.title,n=m(e,u),l=r.default.useContext(d.default),o=(0,a.default)(s(["placeholder",l.className]),n.className),i=s(["inner"]);return r.default.createElement("div",c({},n,{className:o}),r.default.createElement("div",{className:i},r.default.createElement("p",{className:s("title")},t)))};y.propTypes=f,y.defaultProps={title:""};var x=y;t.default=x},34261:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var r=o(n(59278)),l=o(n(47306)),a=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},43643:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(87462),l=n(44925),a=(n(67294),n(81254)),o=n(2010),d=["components"],i={},u="wrapper";function p(e){var t=e.components,n=(0,l.Z)(e,d);return(0,a.mdx)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.ZP,{mdxType:"PropsTable"},(0,a.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Child node content to be displayed within the content region."))),(0,a.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"label"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text to be displayed as the title of the workspace content.\nSpecial Note: this prop is optional and should be used with caution. If this prop is not provided, the workspace content title is injected by default using the label specified in ",(0,a.mdx)("inlineCode",{parentName:"p"},"WorkspaceItem")," ",(0,a.mdx)("em",{parentName:"p"},"(recommended without additional guidance)"),". Providing this prop will override the default text and will need to follow proper accessibility guidelines."))),(0,a.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"toolbar"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Optional toolbar to be displayed outside of the content region."))),(0,a.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"statusOverlay"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A WorkspaceContent.StatusOverlay component instance to be rendered on top of the provided children."))),(0,a.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"activityOverlay"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A WorkspaceContent.ActivityOverlay component instance to be rendered on top of the provided children.")))))}p.isMDXComponent=!0;var c=["components"],m={},s="wrapper";function f(e){var t=e.components,n=(0,l.Z)(e,c);return(0,a.mdx)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.ZP,{mdxType:"PropsTable"},(0,a.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'no-data'\n  'no-matching-results'\n  'not-authorized'\n  'error'\n],\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The status variant indicating which messaging should be rendered."))),(0,a.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"message"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The message to render within the overlay."))),(0,a.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The StatusOverlay.Button components to render within the status overlay.")))))}f.isMDXComponent=!0;var y=["components"],x={},_="wrapper";function v(e){var t=e.components,n=(0,l.Z)(e,y);return(0,a.mdx)(_,(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.ZP,{mdxType:"PropsTable"},(0,a.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"text"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text to render within the button."))),(0,a.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"onClick"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function executed on button selection.")))))}v.isMDXComponent=!0;var b=["components"],h={},O="wrapper";function g(e){var t=e.components,n=(0,l.Z)(e,b);return(0,a.mdx)(O,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.ZP,{mdxType:"PropsTable"},(0,a.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'loading'\n],\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String determining which activity variant to render.")))))}g.isMDXComponent=!0;n(34261);var T=["components"],C={},P="wrapper";function N(e){var t=e.components,n=(0,l.Z)(e,T);return(0,a.mdx)(P,(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"workspacecontent"},"WorkspaceContent"),(0,a.mdx)("p",null,"The WorkspaceContent component is essential for integrating into the workspace. It provides the necessary UI and API hooks to present content consistently in the workspace ecosystem. "),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { WorkspaceContent } from 'terra-application/lib/workspace';\n")),(0,a.mdx)("p",null,"Please see the ",(0,a.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/how-to/create-workspace-content"},"How To Create Workspace Content")," guide for more usage information."),(0,a.mdx)("h2",{id:"props"},"Props"),(0,a.mdx)(p,{mdxType:"WorkspaceContentProps"}),(0,a.mdx)("h2",{id:"subcomponents"},"Subcomponents"),(0,a.mdx)("h3",{id:"workspacecontentstatusoverlay"},"WorkspaceContent.StatusOverlay"),(0,a.mdx)("p",null,"An instance of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"WorkspaceContent.StatusOverlay")," component can be provided to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"statusOverlay")," prop to present an interaction-blocking status indicator over the WorkspaceContent's children."),(0,a.mdx)("h4",{id:"props-1"},"Props"),(0,a.mdx)(f,{mdxType:"WorkspaceContentStatusOverlayProps"}),(0,a.mdx)("h3",{id:"workspacecontentstatusoverlaybutton"},"WorkspaceContent.StatusOverlay.Button"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"StatusOverlay.Button")," component should be supplied as children to the StatusOverlay when actions are desired within the status view."),(0,a.mdx)("h4",{id:"props-2"},"Props"),(0,a.mdx)(v,{mdxType:"WorkspaceContentStatusOverlayButtonProps"}),(0,a.mdx)("h3",{id:"workspacecontentactivityoverlay"},"WorkspaceContent.ActivityOverlay"),(0,a.mdx)("p",null,"An instance of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"WorkspaceContent.ActivityOverlay")," component can be provided to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"activityOverlay")," prop to present an interaction-blocking overlay over the WorkspaceContent's children."),(0,a.mdx)("h4",{id:"props-3"},"Props"),(0,a.mdx)(g,{mdxType:"WorkspaceContentActivityOverlayProps"}))}N.isMDXComponent=!0},2010:(e,t,n)=>{var r=n(64836),l=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var a=m(n(67294)),o=r(n(45697)),d=r(n(47166)),i=n(48720),u=m(n(98364)),p=r(n(50007));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var s=d.default.bind(p.default),f={children:o.default.node},y={isRequired:o.default.bool},x=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:s("bold")},t)};t.O=x,x.propTypes=f;var _=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:s("code-block-override")},t)};t.Di=_,_.propTypes=f;var v=function(e){var t=e.isRequired;return a.default.createElement(u.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")};t.dS=v,v.propTypes=y;var b=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:s("code-block-override")},t)};t.mW=b,b.propTypes=f;var h=function(e){var t=e.children;return a.default.createElement(u.Cell,null,t)};t.Ex=h,h.propTypes=f;var O=function(e){var t=e.children,n=(0,a.useContext)(i.ThemeContext);return a.default.createElement(u.default,{paddingStyle:"compact",className:s("table",n.className)},a.default.createElement(u.Header,{className:s("header")},a.default.createElement(u.HeaderCell,null,"Prop"),a.default.createElement(u.HeaderCell,null,"Type"),a.default.createElement(u.HeaderCell,null,"Required"),a.default.createElement(u.HeaderCell,null,"Default"),a.default.createElement(u.HeaderCell,null,"Description")),a.default.createElement(u.Body,null,t))};O.propTypes=f;var g=O;t.ZP=g},66983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},17893:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},50007:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},89650:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),l=p(n(45697)),a=p(n(94184)),o=p(n(47166)),d=p(n(50026)),i=p(n(17893)),u=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.default.bind(i.default),f={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,o=m(e,u),i=r.default.useContext(d.default),p=(0,a.default)(s("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},i.className),o.className);return r.default.createElement("table",c({},o,{className:p}),t)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};var x=y;t.default=x},51523:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=d(e,a);return r.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};var p=u;t.default=p},58741:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=d(e,a);return r.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};var p=u;t.default=p},90703:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),a=d(n(96576)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},p=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};p.propTypes=u,p.defaultProps={children:[]};var c=p;t.default=c},8078:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=d(e,a);return r.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};var p=u;t.default=p},73045:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),l=u(n(45697)),a=u(n(47166)),o=u(n(17893)),d=u(n(96576)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.default.bind(o.default),s={children:l.default.node},f=function(e){var t=e.children,n=c(e,i),l=m(["row"]);return r.default.createElement("tr",p({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),d.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};var y=f;t.default=y},96576:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(67294))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},98364:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=u(n(89650)),l=u(n(51523)),a=u(n(73045)),o=u(n(58741)),d=u(n(90703)),i=u(n(8078));function u(e){return e&&e.__esModule?e:{default:e}}var p=r.default;t.default=p},87462:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},44925:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:()=>r})}}]);