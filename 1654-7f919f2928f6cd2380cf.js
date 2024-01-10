"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[1654],{71654:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t(87462),i=t(44925),r=(t(67294),t(81254)),d=["components"],l={},o="wrapper";function s(e){var n=e.components,t=(0,i.Z)(e,d);return(0,r.mdx)(o,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"v500-upgrade-guide"},"v5.0.0 Upgrade Guide"),(0,r.mdx)("p",null,"This document will provide information on upgrading from Terra Dev Site ",(0,r.mdx)("inlineCode",{parentName:"p"},"^4.x")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"5.0.0"),"."),(0,r.mdx)("h2",{id:"webpack-config"},"Webpack Config"),(0,r.mdx)("h3",{id:"aggregate-translations"},"Aggregate Translations"),(0,r.mdx)("p",null,"The default locales have been updated to use ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-aggregate-translations"),"'s default locale list. This list no longer includes Arabic (ar) by default. If your application needs to use Arabic, add it to the list of locales supplied to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"locales")," key in your ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra.i18n.config"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"module.exports = {\n-  locales: ['en', 'en-US'],\n+  locales: ['ar', 'en', 'en-US'],\n};\n")),(0,r.mdx)("h2",{id:"wdio-config"},"Wdio Config"),(0,r.mdx)("p",null,"In the Terra Dev site ",(0,r.mdx)("inlineCode",{parentName:"p"},"v5")," the global refresh thats called in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"before")," hook was removed. This refreshed slowed down test times and increased the flakiness of test run against a selenium grid because the current session is killed and a new session is requested. Refresh in tests should be used only when necessary. Some wdio test might need some clean up, but we discouraging fixing any test issues with adding the refresh in yourself."),(0,r.mdx)("p",null,"The most common example would be the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"- A test clicks a button. Something happens.\n- Next test, the screenshot breaks for changed button hover style.\n- Solution, move the mouse position after click, i.e. that test should clean itself up.\n")),(0,r.mdx)("h2",{id:"dependency-changes"},"Dependency Changes"),(0,r.mdx)("h3",{id:"added"},"Added"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"terra-aggregate-translations ",(0,r.mdx)("inlineCode",{parentName:"li"},"v1"))),(0,r.mdx)("h3",{id:"changed"},"Changed"),(0,r.mdx)("p",null,"Reference ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit-boneyard/blob/main/docs/guides/UpgradeGuide-v4.0.0.md"},"terra-toolkit's v4 upgrade guide")," for changes needed to consume this Terra Dev Site upgrade."),(0,r.mdx)("p",null,"Terra dev site now requires peer dependencies on the following modules:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-toolkit@5.0.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"webpack@4.28.1"))),(0,r.mdx)("h3",{id:"removed"},"Removed"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"babel-core"),(0,r.mdx)("li",{parentName:"ul"},"babel-cli"),(0,r.mdx)("li",{parentName:"ul"},"babel-loader"),(0,r.mdx)("li",{parentName:"ul"},"postcss"),(0,r.mdx)("li",{parentName:"ul"},"terra-navigation-layout"),(0,r.mdx)("li",{parentName:"ul"},"xfc")),(0,r.mdx)("h3",{id:"updated"},"Updated"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"terra-toolkit ",(0,r.mdx)("inlineCode",{parentName:"li"},"v4")," -> ",(0,r.mdx)("inlineCode",{parentName:"li"},"v5")),(0,r.mdx)("li",{parentName:"ul"},"terra-application-layout ",(0,r.mdx)("inlineCode",{parentName:"li"},"v4")," -> ",(0,r.mdx)("inlineCode",{parentName:"li"},"v5"))),(0,r.mdx)("h2",{id:"theme-plugin"},"Theme plugin"),(0,r.mdx)("p",null,"This plugin no longer leveraged in our wepback config. Themes can now be aggregated by using terra-toolkit aggregate-themes pre-build script."),(0,r.mdx)("h2",{id:"removed-xfc-provider-initialization"},"Removed XFC Provider Initialization"),(0,r.mdx)("p",null,"The xfc dependency and xfc provider initialization has been removed from terra-dev-site. If you need to initialized a single xfc provider for you site, this can be done through the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sideEffectImports")," in the site.config.js."))}s.isMDXComponent=!0},87462:(e,n,t)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{Z:()=>a})},44925:(e,n,t)=>{function a(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{Z:()=>a})}}]);