"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[6800],{32560:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(11504)),l=i(n(3268)),a=i(n(74824)),o=i(n(99640)),d=i(n(48728)),u=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.default.bind(d.default),s=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y={children:l.default.string},x=function(e){var t=e.children,n=p(e,u),l=r.default.useContext(o.default),d=(0,a.default)(m(["button",l.className]),n.className);return r.default.createElement("button",c({},n,{type:"button",className:d,onBlur:s,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};x.propTypes=y;t.default=x},27428:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(11504)),l=u(n(3268)),a=u(n(74824)),o=u(n(99640)),d=u(n(50987));function u(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(d.default),c={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},p=function(e){var t=e.ariaLevel,n=e.variant,l=e.children,a=r.default.useContext(o.default);return r.default.createElement("div",{className:i("notice",n,a.className)},r.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:i("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:i("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(l,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};p.propTypes=c,p.defaultProps={ariaLevel:"2",variant:"important"};t.default=p},72936:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(11504)),l=c(n(3268)),a=c(n(82084)),o=c(n(74824)),d=c(n(99640)),u=c(n(27e3)),i=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.default.bind(u.default),f={title:l.default.string},y=function(e){var t=e.title,n=m(e,i),l=r.default.useContext(d.default),o=(0,a.default)(s(["placeholder",l.className]),n.className),u=s(["inner"]);return r.default.createElement("div",p({},n,{className:o}),r.default.createElement("div",{className:u},r.default.createElement("p",{className:s("title")},t)))};y.propTypes=f,y.defaultProps={title:""};t.default=y},31236:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var r=o(n(27428)),l=o(n(72936)),a=o(n(32560));function o(e){return e&&e.__esModule?e:{default:e}}},76800:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(45072),l=n(52822),a=(n(11504),n(69788)),o=n(20592),d=["components"],u={},i="wrapper";function c(e){var t=e.components,n=(0,l.c)(e,d);return(0,a.mdx)(i,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.cp,{mdxType:"PropsTable"},(0,a.mdx)(o.WA,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Child node content to be displayed within the content region."))),(0,a.mdx)(o.WA,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"label"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text to be displayed as the title of the workspace content.\nSpecial Note: this prop is optional and should be used with caution. If this prop is not provided, the workspace content title is injected by default using the label specified in ",(0,a.mdx)("inlineCode",{parentName:"p"},"WorkspaceItem")," ",(0,a.mdx)("em",{parentName:"p"},"(recommended without additional guidance)"),". Providing this prop will override the default text and will need to follow proper accessibility guidelines."))),(0,a.mdx)(o.WA,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"toolbar"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Optional toolbar to be displayed outside of the content region."))),(0,a.mdx)(o.WA,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"statusOverlay"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A WorkspaceContent.StatusOverlay component instance to be rendered on top of the provided children."))),(0,a.mdx)(o.WA,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"activityOverlay"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A WorkspaceContent.ActivityOverlay component instance to be rendered on top of the provided children.")))))}c.isMDXComponent=!0;var p=["components"],m={},s="wrapper";function f(e){var t=e.components,n=(0,l.c)(e,p);return(0,a.mdx)(s,(0,r.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.cp,{mdxType:"PropsTable"},(0,a.mdx)(o.WA,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'no-data'\n  'no-matching-results'\n  'not-authorized'\n  'error'\n],\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The status variant indicating which messaging should be rendered."))),(0,a.mdx)(o.WA,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"message"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The message to render within the overlay."))),(0,a.mdx)(o.WA,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The StatusOverlay.Button components to render within the status overlay.")))))}f.isMDXComponent=!0;var y=["components"],x={},_="wrapper";function b(e){var t=e.components,n=(0,l.c)(e,y);return(0,a.mdx)(_,(0,r.c)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.cp,{mdxType:"PropsTable"},(0,a.mdx)(o.WA,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"text"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text to render within the button."))),(0,a.mdx)(o.WA,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"onClick"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function executed on button selection.")))))}b.isMDXComponent=!0;var h=["components"],v={},g="wrapper";function O(e){var t=e.components,n=(0,l.c)(e,h);return(0,a.mdx)(g,(0,r.c)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.cp,{mdxType:"PropsTable"},(0,a.mdx)(o.WA,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.qe,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(o.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'loading'\n],\n"))),(0,a.mdx)(o.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,a.mdx)(o.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"String determining which activity variant to render.")))))}O.isMDXComponent=!0;n(31236);var T=["components"],C={},w="wrapper";function P(e){var t=e.components,n=(0,l.c)(e,T);return(0,a.mdx)(w,(0,r.c)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"workspacecontent"},"WorkspaceContent"),(0,a.mdx)("p",null,"The WorkspaceContent component is essential for integrating into the workspace. It provides the necessary UI and API hooks to present content consistently in the workspace ecosystem. "),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { WorkspaceContent } from 'terra-application/lib/workspace';\n")),(0,a.mdx)("p",null,"Please see the ",(0,a.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/how-to/create-workspace-content"},"How To Create Workspace Content")," guide for more usage information."),(0,a.mdx)("h2",{id:"props"},"Props"),(0,a.mdx)(c,{mdxType:"WorkspaceContentProps"}),(0,a.mdx)("h2",{id:"subcomponents"},"Subcomponents"),(0,a.mdx)("h3",{id:"workspacecontentstatusoverlay"},"WorkspaceContent.StatusOverlay"),(0,a.mdx)("p",null,"An instance of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"WorkspaceContent.StatusOverlay")," component can be provided to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"statusOverlay")," prop to present an interaction-blocking status indicator over the WorkspaceContent's children."),(0,a.mdx)("h4",{id:"props-1"},"Props"),(0,a.mdx)(f,{mdxType:"WorkspaceContentStatusOverlayProps"}),(0,a.mdx)("h3",{id:"workspacecontentstatusoverlaybutton"},"WorkspaceContent.StatusOverlay.Button"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"StatusOverlay.Button")," component should be supplied as children to the StatusOverlay when actions are desired within the status view."),(0,a.mdx)("h4",{id:"props-2"},"Props"),(0,a.mdx)(b,{mdxType:"WorkspaceContentStatusOverlayButtonProps"}),(0,a.mdx)("h3",{id:"workspacecontentactivityoverlay"},"WorkspaceContent.ActivityOverlay"),(0,a.mdx)("p",null,"An instance of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"WorkspaceContent.ActivityOverlay")," component can be provided to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"activityOverlay")," prop to present an interaction-blocking overlay over the WorkspaceContent's children."),(0,a.mdx)("h4",{id:"props-3"},"Props"),(0,a.mdx)(O,{mdxType:"WorkspaceContentActivityOverlayProps"}))}P.isMDXComponent=!0},20592:(e,t,n)=>{var r=n(22411),l=n(59848);t.Ke=t.qe=t.uC=t._w=void 0,Object.defineProperty(t,"WA",{enumerable:!0,get:function(){return i.Row}}),t.cp=t.aI=void 0;var a=m(n(11504)),o=r(n(3268)),d=r(n(74824)),u=n(47576),i=m(n(52984)),c=r(n(50031));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var s=d.default.bind(c.default),f={children:o.default.node},y={isRequired:o.default.bool};(t.qe=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("bold")},t)}).propTypes=f,(t.aI=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.Ke=function(e){var t=e.isRequired;return a.default.createElement(i.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")}).propTypes=y,(t._w=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.uC=function(e){var t=e.children;return a.default.createElement(i.Cell,null,t)}).propTypes=f;var x=function(e){var t=e.children,n=(0,a.useContext)(u.ThemeContext);return a.default.createElement(i.default,{paddingStyle:"compact",className:s("table",n.className)},a.default.createElement(i.Header,{className:s("header")},a.default.createElement(i.HeaderCell,null,"Prop"),a.default.createElement(i.HeaderCell,null,"Type"),a.default.createElement(i.HeaderCell,null,"Required"),a.default.createElement(i.HeaderCell,null,"Default"),a.default.createElement(i.HeaderCell,null,"Description")),a.default.createElement(i.Body,null,t))};x.propTypes=f;t.cp=x},48728:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},50987:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},27e3:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},62008:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},50031:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},29988:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(11504)),l=c(n(3268)),a=c(n(82084)),o=c(n(74824)),d=c(n(99640)),u=c(n(62008)),i=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.default.bind(u.default),f={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,o=m(e,i),u=r.default.useContext(d.default),c=(0,a.default)(s("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},u.className),o.className);return r.default.createElement("table",p({},o,{className:c}),t)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},71352:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(11504)),l=o(n(3268)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},i=function(e){var t=e.children,n=d(e,a);return r.default.createElement("tbody",n,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},1320:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(11504)),l=o(n(3268)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},i=function(e){var t=e.children,n=d(e,a);return r.default.createElement("td",n,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},22224:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(11504)),l=d(n(3268)),a=d(n(52684)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},c=function(e){var t=e.children,n=u(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};c.propTypes=i,c.defaultProps={children:[]};t.default=c},61144:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(11504)),l=o(n(3268)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},i=function(e){var t=e.children,n=d(e,a);return r.default.createElement("th",n,t)};i.propTypes=u,i.defaultProps={children:[]};t.default=i},52399:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(11504)),l=i(n(3268)),a=i(n(74824)),o=i(n(62008)),d=i(n(52684)),u=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.default.bind(o.default),s={children:l.default.node},f=function(e){var t=e.children,n=p(e,u),l=m(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),d.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};t.default=f},52684:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(11504))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},52984:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=i(n(29988)),l=i(n(71352)),a=i(n(52399)),o=i(n(1320)),d=i(n(22224)),u=i(n(61144));function i(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},45072:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{c:()=>r})},52822:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{c:()=>r})}}]);