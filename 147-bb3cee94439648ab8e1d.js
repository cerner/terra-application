"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[147],{40457:(e,t,a)=>{var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=n(a(96572))},50147:(e,t,a)=>{var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}(a(67294)),i=n(a(45697)),u=a(48720),f=a(97132),c=n(a(40457)),p=n(a(10557)),d=n(a(77797));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var g=function(e){var t=e.title,a=(0,o.useState)(!1),n=(0,r.default)(a,2),l=n[0],i=n[1];return o.default.createElement("div",null,o.default.createElement("p",null,t),o.default.createElement("p",null,"Toggle pending action:"," ",o.default.createElement("button",{id:"pending-action-toggle",type:"button",onClick:function(){i(!l)}},l?"Disable":"Enable")),l?o.default.createElement(d.default,{description:"Testing ApplicationNavigation's navigation prompt handling"}):void 0)};g.propTypes={title:i.default.string};t.default=function(){var e=(0,f.useIntl)(),t=o.default.useContext(u.ThemeContext),a=(0,o.useState)("page_1"),n=(0,r.default)(a,2),l=n[0],i=n[1],d=(0,o.useState)(!1),s=(0,r.default)(d,2),v=s[0],m=s[1];return o.default.createElement("div",{style:{height:"500px"}},o.default.createElement(c.default,{locale:e.locale,themeName:t.className},v?o.default.createElement("p",null,"Logged Out"):o.default.createElement(p.default,{titleConfig:{title:"ApplicationNavigation Disabled Prompts Test"},navigationItems:[{key:"page_1",text:"Page 1"},{key:"page_2",text:"Page 2"},{key:"page_3",text:"Page 3"}],activeNavigationItemKey:l,onSelectNavigationItem:function(e){i(e)},onSelectLogout:function(){m(!0)},disablePromptsForLogout:!0,disablePromptsForNavigationItems:!0},o.default.createElement(g,{key:l,title:l}))))}}}]);