"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[329],{40996:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),o=u(n(50026)),i=u(n(66983)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(i.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:a.default.string},b=function(e){var t=e.children,n=s(e,d),a=r.default.useContext(o.default),i=(0,l.default)(p(["button",a.className]),n.className);return r.default.createElement("button",c({},n,{type:"button",className:i,onBlur:m,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};b.propTypes=h;var y=b;t.default=y},59278:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(47166)),o=d(n(50026)),i=d(n(30866));function d(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(i.default),c={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,l=r.default.useContext(o.default);return r.default.createElement("div",{className:u("notice",n,l.className)},r.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:u("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};s.propTypes=c,s.defaultProps={ariaLevel:"2",variant:"important"};var p=s;t.default=p},47306:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),o=c(n(47166)),i=c(n(50026)),d=c(n(42620)),u=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(d.default),f={title:a.default.string},h=function(e){var t=e.title,n=p(e,u),a=r.default.useContext(i.default),o=(0,l.default)(m(["placeholder",a.className]),n.className),d=m(["inner"]);return r.default.createElement("div",s({},n,{className:o}),r.default.createElement("div",{className:d},r.default.createElement("p",{className:m("title")},t)))};h.propTypes=f,h.defaultProps={title:""};var b=h;t.default=b},34261:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=o(n(59278)),a=o(n(47306)),l=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},50329:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(87462),a=n(44925),l=(n(67294),n(81254)),o=n(34261),i=n(2010),d=["components"],u={},c="wrapper";function s(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.mdx)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(i.ZP,{mdxType:"PropsTable"},(0,l.mdx)(i.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"bannerAction"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n  text: {\n    type: 'string',\n    description: 'The text to display in the banner button.',\n  },\n  onClick: {\n    type: 'func',\n    description: 'The Callback function triggered when the action button is clicked. No parameters are passed.',\n  },\n},\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The text and corresponding callback to populate the action button of the banner."))),(0,l.mdx)(i.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"description"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The message content to display in the banner."))),(0,l.mdx)(i.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"onRequestClose"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Callback function triggered when the dismiss button is clicked. The presence of this prop will cause\nthe dismiss button to be included on the banner. No parameters are passed."))),(0,l.mdx)(i.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"variant"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'hazard-high'\n  'hazard-medium'\n  'hazard-low'\n  'error'\n  'unsatisfied'\n  'unverified'\n  'custom'\n],\n"))),(0,l.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The variant of notification banner to be rendered. This renders the banner with the corresponding header and icon to the\nvariant concept."))),(0,l.mdx)(i.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"custom"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n  signalWord: {\n    type: 'string',\n    description: 'The keyword used to represent & emphasis the intention of banner description that is being shown to the user.',\n  },\n  iconClassName: {\n    type: 'string',\n    description: 'The class name used to set the icon as the background image to be used as the icon in the banner.',\n  },\n},\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The pieces to populate a banner when ",(0,l.mdx)("inlineCode",{parentName:"p"},'variant="custom"'),".")))))}s.isMDXComponent=!0;var p=["components"],m={},f="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.mdx)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"notification-banner"},"Notification Banner"),(0,l.mdx)("p",null,"A Notification Banner should be rendered by a component that needs to render a notification with information that needs to be brought to the user's attention. This is a non-disruptive notification that does not require immediate input or attention by the user."),(0,l.mdx)("p",null,"When rendered, the Notification Banner registers itself with the framework so it is prioritized correctly when any other rendered notification banners before they are is displayed in a list above all other content."),(0,l.mdx)(o.Notice,{ariaLevel:"2",variant:"caution",mdxType:"Notice"},(0,l.mdx)("p",null,"NotificationBanners are only supported when rendered within the following components:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-application/pull/354/application/terra-application/components/workspace-content"},"WorkspaceContent")),(0,l.mdx)("li",{parentName:"ul"},"Modal components disclosed by the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-application/pull/354/application/terra-application/components/modal-manager"},"ModalManager")),(0,l.mdx)("li",{parentName:"ul"},"Panel components disclosed by the ",(0,l.mdx)("a",{parentName:"li",href:"/terra-application/pull/354/application/terra-application/components/slide-panel-manager"},"SlidePanelManager"))),(0,l.mdx)("p",null,"Rendering a NotificationBanner outside these locations will result in an exception being thrown.")),(0,l.mdx)("h2",{id:"banner-variants"},"Banner Variants"),(0,l.mdx)("p",null,"The Notification Banner can be used to bring awareness to a user’s risk and non-risk situations that may occur within an application; there are multiple variants provided for common situations. "),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Notification Banners shown for risk situations are intended to notify the user of hazards, such as risks to patient safety or causing financial harm, and provide options to mitigate or remove the hazard. There are three variants of risk oriented notification banners, based on the severity: ",(0,l.mdx)("inlineCode",{parentName:"p"},"hazard-high"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"hazard-medium")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"hazard-low"),". These variants are rigid to provide consistent icon and signal word pairs to prevent accidental confusion by the user of the banner's severity.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Notification Banners used in non-risk situations are intended to inform a user of system activity or required actions considered to be non-hazards. Currently there are three pre-defined non-risk oriented notification banner variants: ",(0,l.mdx)("inlineCode",{parentName:"p"},"error"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"unsatisfied")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"unverified"),".")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"The custom variant allows for less common standardized non-hazard situations, requiring an icon and signal word be provided in addition to the common props. By choosing to create a custom Notification Banner, you are responsible for providing an icon that is themed correctly for the terra-default-theme, orion-fusion-theme, and clinical-lowlight-theme. See Terra’s ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/354/guides/terra-application/theme-strategy"},"Theme Strategy Guide")," for more info."))),(0,l.mdx)("h2",{id:"banner-priority-order"},"Banner Priority Order"),(0,l.mdx)("p",null,"Notification Banners are prioritized by variant and in the following order:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"hazard-high")," - displays a critical notification for current emergencies or situations of high severity that need to be addressed promptly"),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"hazard-medium")," - recommended to show moderately urgent notifications that are cautionary in nature and forecast potential risk"),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"hazard-low")," - recommended to provide the user with guidance and/or advice for completing an action"),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"error")," - recommended to provide feedback of a negative system status such as failures or limitations of the system"),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"unsatisfied")," - recommended to show the user that an unsatisfied or incomplete action needs to be addressed"),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"unverified")," - recommended to provide feedback that information from outside systems has been included but has yet to be verified by the user"),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"custom")," - not recommended but can be used to create a custom signal word-icon banner to display information to the user")),(0,l.mdx)("h3",{id:"notification-banners-in-the-fusion-theme"},"Notification Banners in the Fusion Theme"),(0,l.mdx)("p",null,"When Notification Banners are rendered within an application that has the orion-fusion-theme applied, the banners will be prioritized in the following order:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"hazard-high")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"error")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"hazard-medium")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"unsatisfied")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"unverified")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"hazard-low")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"custom"))),(0,l.mdx)("p",null,"The expected banner's usage when in the orion-fusion-theme are consistent with the descriptions above, the order is just changed."),(0,l.mdx)("h2",{id:"props"},"Props"),(0,l.mdx)(s,{mdxType:"PropsTable"}),(0,l.mdx)("h2",{id:"testing"},"Testing"),(0,l.mdx)("p",null,"The Notification Banner has the following data attribute available for browser tests:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The data attribute, ",(0,l.mdx)("inlineCode",{parentName:"li"},"data-terra-application-notification-banner")," can be used to validate the expected banner exists")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"describe('Notification Banner', () => {\n  it('renders a notification banner', () => {\n    $('#triggerErrorNotificationBanner').click();\n    $('[data-terra-application-notification-banner=\"error]').waitForExist();\n    Terra.validates.element('shows error banner', { selector: '#root' });\n  });\n});\n")))}h.isMDXComponent=!0},2010:(e,t,n)=>{var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var l=p(n(67294)),o=r(n(45697)),i=r(n(47166)),d=n(48720),u=p(n(98364)),c=r(n(50007));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var m=i.default.bind(c.default),f={children:o.default.node},h={isRequired:o.default.bool},b=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:m("bold")},t)};t.O=b,b.propTypes=f;var y=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:m("code-block-override")},t)};t.Di=y,y.propTypes=f;var _=function(e){var t=e.isRequired;return l.default.createElement(u.Cell,{className:m([t?["required"]:[]])},t?"required":"optional")};t.dS=_,_.propTypes=h;var x=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:m("code-block-override")},t)};t.mW=x,x.propTypes=f;var v=function(e){var t=e.children;return l.default.createElement(u.Cell,null,t)};t.Ex=v,v.propTypes=f;var g=function(e){var t=e.children,n=(0,l.useContext)(d.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:m("table",n.className)},l.default.createElement(u.Header,{className:m("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,t))};g.propTypes=f;var O=g;t.ZP=O},66983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},17893:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},50007:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},89650:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),o=c(n(47166)),i=c(n(50026)),d=c(n(17893)),u=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(d.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},h=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=p(e,u),d=r.default.useContext(i.default),c=(0,l.default)(m("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},d.className),o.className);return r.default.createElement("table",s({},o,{className:c}),t)};h.propTypes=f,h.defaultProps={disableStripes:!1,paddingStyle:"none"};var b=h;t.default=b},51523:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},u=function(e){var t=e.children,n=i(e,l);return r.default.createElement("tbody",n,t)};u.propTypes=d,u.defaultProps={children:[]};var c=u;t.default=c},58741:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},u=function(e){var t=e.children,n=i(e,l);return r.default.createElement("td",n,t)};u.propTypes=d,u.defaultProps={children:[]};var c=u;t.default=c},90703:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),a=i(n(45697)),l=i(n(96576)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},c=function(e){var t=e.children,n=d(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};c.propTypes=u,c.defaultProps={children:[]};var s=c;t.default=s},8078:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={children:a.default.node},u=function(e){var t=e.children,n=i(e,l);return r.default.createElement("th",n,t)};u.propTypes=d,u.defaultProps={children:[]};var c=u;t.default=c},34847:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),o=u(n(17893)),i=u(n(96576)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(o.default),m={children:a.default.node},f=function(e){var t=e.children,n=s(e,d),a=p(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),i.default.addScope(t,"row"))};f.propTypes=m,f.defaultProps={children:[]};var h=f;t.default=h},96576:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},98364:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=u(n(89650)),a=u(n(51523)),l=u(n(34847)),o=u(n(58741)),i=u(n(90703)),d=u(n(8078));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default;t.default=c},87462:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},44925:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:()=>r})}}]);