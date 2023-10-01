"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[2058],{40457:(e,t,a)=>{var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=n(a(96572))},72058:(e,t,a)=>{var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(27424)),i=g(a(67294)),r=n(a(45697)),u=a(48720),c=g(a(10557)),f=a(97132),d=a(86072),p=n(a(40457)),s=n(a(77797));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}return n.default=e,a&&a.set(e,n),n}var v=function(e){var t=e.index,a=e.onClick,n=e.navDisabled;return i.default.createElement("p",null,"Toggle pending action","".concat(t,": "),i.default.createElement("button",{id:"pending-action-toggle-".concat(t),type:"button",onClick:a},n?"Disable":"Enable"))};v.propTypes={index:r.default.string,onClick:r.default.func,navDisabled:r.default.bool};var b=function(e){var t=e.title,a=(0,i.useState)(!1),n=(0,o.default)(a,2),l=n[0],r=n[1],u=(0,i.useState)(!1),f=(0,o.default)(u,2),d=f[0],p=f[1],m=i.default.useContext(c.ApplicationNavigationActionsContext);return i.default.createElement("div",{"data-nav-test-content":!0},i.default.createElement("p",null,t),i.default.createElement(v,{index:"1",navDisabled:l,onClick:function(){r(!l)}}),i.default.createElement(v,{index:"2",navDisabled:d,onClick:function(){p(!d)}}),l?i.default.createElement(s.default,{description:"Pending Action 1"}):void 0,d?i.default.createElement(s.default,{description:"Pending Action 2"}):void 0,i.default.createElement("p",null,"Layout Actions:"," ",m.actions&&m.actions.map((function(e){return i.default.createElement("button",{key:e.key,type:"button",onClick:e.onSelect,"aria-label":e.label},e.icon)}))))};b.propTypes={title:r.default.string};var k=function(){return i.default.createElement(d.WorkspaceContent,null,i.default.createElement("p",null,"Example Workspace Content 1"))},y=function(){return i.default.createElement(d.WorkspaceContent,null,i.default.createElement("p",null,"Example Workspace Content 2"))},E=i.default.createElement(c.default.Workspace,{id:"application-workspace-example",initialActiveItemKey:"tab-1",initialSize:{scale:.5},initialIsOpen:!0,onActiveItemChange:function(e){console.log("Workspace active item: ".concat(e))},onSizeChange:function(e){console.log("Workspace size changed: ".concat(e))},onPresentationStateChange:function(e){console.log("Workspace presentation changed. isOpen - ".concat(e))}},i.default.createElement(c.default.Workspace.Item,{itemKey:"tab-1",label:"Tab 1",metaData:{key:"tab-1"},render:function(){return i.default.createElement(k,null)}}),i.default.createElement(c.default.Workspace.Item,{itemKey:"tab-2",label:"Tab 2",metaData:{key:"tab-2"},render:function(){return i.default.createElement(y,null)}}));t.default=function(){var e=(0,f.useIntl)(),t=i.default.useContext(u.ThemeContext),a=(0,i.useState)("page_1"),n=(0,o.default)(a,2),l=n[0],r=n[1],d=(0,i.useState)(!1),s=(0,o.default)(d,2),m=s[0],g=s[1];return i.default.createElement("div",{style:{height:"500px"}},i.default.createElement(p.default,{unloadPromptIsDisabled:!0,locale:e.locale,themeName:t.className},m?i.default.createElement("p",null,"Logged Out"):i.default.createElement(c.default,{titleConfig:{title:"ApplicationNavigation Test"},navigationItems:[{key:"page_1",text:"Page 1"},{key:"page_2",text:"Page 2"},{key:"page_3",text:"Page 3"}],activeNavigationItemKey:l,onSelectNavigationItem:function(e){r(e)},onSelectLogout:function(){g(!0)},workspace:E},i.default.createElement(b,{key:l,title:l}))))}}}]);