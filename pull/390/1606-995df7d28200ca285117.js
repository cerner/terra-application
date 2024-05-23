"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[1606],{21606:(e,n,r)=>{r.r(n),r.d(n,{default:()=>m});var t=r(58168),a=r(53986),o=(r(96540),r(36665)),l=["components"],d={},i="wrapper";function m(e){var n=e.components,r=(0,a.A)(e,l);return(0,o.mdx)(i,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"logger"},"Logger"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application")," provides an override-able logger to handle error, info, and warning messages."),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("p",null,"The logger works like the ",(0,o.mdx)("inlineCode",{parentName:"p"},"console")," for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"warn"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"error"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"info")," methods. By default the logger will send the messages to the corresponding console methods. In production, info and warning messages will be suppressed."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import logger from 'terra-application/lib/utils/logger';\n\nlogger.error('error');\nlogger.warn('warning');\nlogger.info('info');\n")),(0,o.mdx)("h2",{id:"overriding"},"Overriding"),(0,o.mdx)("p",null,"It may be desirable to override the default implementation of the logger. For example, logs could be sent to a server side log aggregator. The logger is a singleton and should only be overridden once per application. To override the logger implementation, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"initializeLogger")," function and provide a new function for the logger. All loggers must have a method signature of ",(0,o.mdx)("inlineCode",{parentName:"p"},"(obj1 [, obj2, ..., objN])"),", the same as the ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/warn"},"console.warn"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/error"},"console.error"),", and ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/info"},"console.info")," methods."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import { initializeLogger } from 'terra-application/lib/logger';\n\ninitializeLogger({\n  onInfo: (...args) => console.log('[Info] ', ...args),\n  onWarn: (...args) => console.warn('[Warn] ', ...args),\n  onError: (...args) => console.log('[Error] ', ...args),\n});\n")),(0,o.mdx)("h2",{id:"api"},"API"),(0,o.mdx)("h3",{id:"logger-1"},"Logger"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"method"),(0,o.mdx)("th",{parentName:"tr",align:null},"syntax"),(0,o.mdx)("th",{parentName:"tr",align:null},"Default Behavior"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"error")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Logger.error(obj1 [, obj2, ..., objN])")),(0,o.mdx)("td",{parentName:"tr",align:null},"Logs an error to the console.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"info")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Logger.info(obj1 [, obj2, ..., objN])")),(0,o.mdx)("td",{parentName:"tr",align:null},"Logs an info message to the console in a non production environment.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"warn")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Logger.warn(obj1 [, obj2, ..., objN])")),(0,o.mdx)("td",{parentName:"tr",align:null},"Logs an warning message to the console in a non production environment.")))),(0,o.mdx)("h3",{id:"initializelogger"},"initializeLogger"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,o.mdx)("th",{parentName:"tr",align:null},"DefaultValue"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"onInfo")),(0,o.mdx)("td",{parentName:"tr",align:null},"function"),(0,o.mdx)("td",{parentName:"tr",align:null},"optional"),(0,o.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,o.mdx)("td",{parentName:"tr",align:null},"The method to override the default info logging method.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"onWarn")),(0,o.mdx)("td",{parentName:"tr",align:null},"function"),(0,o.mdx)("td",{parentName:"tr",align:null},"optional"),(0,o.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,o.mdx)("td",{parentName:"tr",align:null},"The method to override the default warning logging method.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"onError")),(0,o.mdx)("td",{parentName:"tr",align:null},"function"),(0,o.mdx)("td",{parentName:"tr",align:null},"optional"),(0,o.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,o.mdx)("td",{parentName:"tr",align:null},"The method to override the default error logging method.")))))}m.isMDXComponent=!0},58168:(e,n,r)=>{function t(){return t=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},t.apply(this,arguments)}r.d(n,{A:()=>t})},53986:(e,n,r)=>{function t(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r={};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){if(n.indexOf(t)>=0)continue;r[t]=e[t]}return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(n,{A:()=>t})}}]);