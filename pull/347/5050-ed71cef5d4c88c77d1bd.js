/*! For license information please see 5050-ed71cef5d4c88c77d1bd.js.LICENSE.txt */
"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[5050],{25050:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});var o=n(87462),t=n(85893),i=n(11151);function a(e){var r=(0,o.Z)({h1:"h1",p:"p",code:"code",h2:"h2"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"v050-upgrade-guide",children:"v0.5.0 Upgrade Guide"}),"\n",(0,t.jsxs)(r.p,{children:["This document will provide information on upgrading from Terra Dev Site ",(0,t.jsx)(r.code,{children:"0.x"})," to ",(0,t.jsx)(r.code,{children:"0.5.0"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"webpack-4",children:"Webpack 4"}),"\n",(0,t.jsx)(r.p,{children:"Terra-dev-site now uses Terra-Toolkit's default webpack config as its base config. Terra-dev-site then adds an entry, the html-webpack-plugin and an additional resolve path for custom site configuration. Unlike terra-toolkit, this webpack config is ready to use without needing any wrapping."}),"\n",(0,t.jsxs)(r.p,{children:["The default webpack config has been moved from ",(0,t.jsx)(r.code,{children:"src/config/webpack.config"})," to ",(0,t.jsx)(r.code,{children:"config/webpack/webpack.config"}),";\nMuch like terra-toolkit the dev and prod webpack configs have been merged into one. See that guide for more info."]}),"\n",(0,t.jsx)(r.h2,{id:"webdriverio",children:"WebdriverIO"}),"\n",(0,t.jsx)(r.p,{children:"Terra Dev Site provides a default webdriver IO config. This config adds in some additional opinions specific to terra-dev-site, and unlike terra-toolkit, is ready out of the box."}),"\n",(0,t.jsx)(r.p,{children:"The webdriver config pulls in the default webpack config, the root selector for tests when terra dev site is used as a driver and a before hook to refresh the page after each test."}),"\n",(0,t.jsx)(r.h2,{id:"terra-dev-site-config",children:"Terra-Dev-Site Config"}),"\n",(0,t.jsxs)(r.p,{children:["We're preparing to generate more code on launch of terra-dev-site instead of generating it client side. For the first step we're requiring that the ",(0,t.jsx)(r.code,{children:"site.config.js"})," file be placed inside the ",(0,t.jsx)(r.code,{children:"dev-site-config"})," folder at the project root for better organization as well as a location to place generated items."]}),"\n",(0,t.jsx)(r.p,{children:"The placeholder image and logo image are now defaulted to the Terra image."})]})}const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,o.Z)({},(0,i.ah)(),e.components).wrapper;return r?(0,t.jsx)(r,(0,o.Z)({},e,{children:(0,t.jsx)(a,e)})):a(e)}},75251:(e,r,n)=>{var o=n(67294),t=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;t=i("react.element"),r.Fragment=i("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var o,i={},c=null,l=null;for(o in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,o)&&!d.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:t,type:e,key:c,ref:l,props:i,_owner:a.current}}r.jsx=c,r.jsxs=c},85893:(e,r,n)=>{e.exports=n(75251)},87462:(e,r,n)=>{function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(r,{Z:()=>o})}}]);