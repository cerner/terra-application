"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[1925],{40996:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),r=m(n(45697)),i=m(n(47166)),d=m(n(50026)),l=m(n(66983)),o=["children"];function m(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.default.bind(l.default),c=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x={children:r.default.string},f=function(e){var t=e.children,n=u(e,o),r=a.default.useContext(d.default),l=(0,i.default)(s(["button",r.className]),n.className);return a.default.createElement("button",p({},n,{type:"button",className:l,onBlur:c,onMouseDown:g,"data-focus-styles-enabled":!0}),t)};f.propTypes=x;var h=f;t.default=h},59278:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),i=o(n(47166)),d=o(n(50026)),l=o(n(30866));function o(e){return e&&e.__esModule?e:{default:e}}var m=i.default.bind(l.default),p={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},u=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,i=a.default.useContext(d.default);return a.default.createElement("div",{className:m("notice",n,i.className)},a.default.createElement("div",{className:m("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:m("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:m("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:m("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:m("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:m("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};u.propTypes=p,u.defaultProps={ariaLevel:"2",variant:"important"};var s=u;t.default=s},47306:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(67294)),r=p(n(45697)),i=p(n(94184)),d=p(n(47166)),l=p(n(50026)),o=p(n(42620)),m=["title"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=d.default.bind(o.default),g={title:r.default.string},x=function(e){var t=e.title,n=s(e,m),r=a.default.useContext(l.default),d=(0,i.default)(c(["placeholder",r.className]),n.className),o=c(["inner"]);return a.default.createElement("div",u({},n,{className:d}),a.default.createElement("div",{className:o},a.default.createElement("p",{className:c("title")},t)))};x.propTypes=g,x.defaultProps={title:""};var f=x;t.default=f},34261:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=d(n(59278)),r=d(n(47306)),i=d(n(40996));function d(e){return e&&e.__esModule?e:{default:e}}},1925:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(87462),r=n(44925),i=(n(67294),n(81254)),d=n(34261),l=["components"],o={},m="wrapper";function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.mdx)(m,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"v700-upgrade-guide"},"v7.0.0 Upgrade Guide"),(0,i.mdx)("p",null,"This document will provide information on upgrading from ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"6.x.x")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"7.0.0"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," v7 is about 70% new. The primary goals of this upgrade is to enable webpack 5, prepare for ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-application")," v2, and remove the intermediate ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," build step by converting to a pure webpack plugin."),(0,i.mdx)("h2",{id:"scoped-package"},"Scoped package"),(0,i.mdx)("p",null,"Terra dev site has changed to be scoped under the cerner organization. The package has gone from ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cerner/terra-dev-site"),";"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'{\n "dependencies": {\n-  "terra-dev-site": "^6.0.0",\n+  "@cerner/terra-dev-site": "^7.0.0",\n }\n}\n')),(0,i.mdx)("h2",{id:"webpack-plugin"},"Webpack Plugin"),(0,i.mdx)("p",null,"In ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," v6 we introduced the webpack plugin as an alternative to the shared webpack config. In ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," v7 we have removed the shared webpack config and are only offering the webpack plugin. We've done this to facilitate the transition from ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-toolkit")," webpack config to the new ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cerner/webpack-config-terra")," webpack config. ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," will work with either webpack config and this will allow you to update to WDIO 6 independently."),(0,i.mdx)("p",null,"To simplify the webpack plugin api, we have also now included the Directory Switcher and Local Package alias resolve plugins in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," plugin by default. As a reminder, these plugins allow you to enable hot reloading by switching lib requires with their src equivalent and reference local files as if they were packaged, ie ",(0,i.mdx)("inlineCode",{parentName:"p"},"import('@cerner/terra-dev-site/file)"),"."),(0,i.mdx)("p",null,"Additionally, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TerraDevSiteEntrypoints")," have been removed as well. Webpack 4 requires an entry point, but that requirement is generally satisfied by our reusable webpack configs. Webpack 5 will allow plugins to define entrypoints without being specified in the config."),(0,i.mdx)("p",null,"Below is an example webpack config setting up the ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," plugin."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const terraWebpackConfig = require('@cerner/webpack-config-terra');\nconst merge = require('webpack-merge');\nconst { TerraDevSite } = require('@cerner/terra-dev-site');\n\nconst devSiteConfig = (env = {}, argv = {}) => ({\n  plugins: [\n    new TerraDevSite({\n      // env.defaultLocale is set by the WDIO test service to enable locale testing.\n      defaultLocale: env.defaultLocale,\n    }),\n  ],\n});\n\nconst webpackConfig = (env, argv) => (\n  merge(terraWebpackConfig(env, argv), devSiteConfig(env, argv))\n);\n\nmodule.exports = webpackConfig;\n")),(0,i.mdx)(d.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,i.mdx)("p",null,"Note in the example where ",(0,i.mdx)("inlineCode",{parentName:"p"},"env.defaultLocale")," is passed to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TerraDevSite")," plugin. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"defaultLocale")," env is set as a part of our WDIO test service and must be passed into the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TerraDevSite")," plugin to ensure locale tests are run appropriately.")),(0,i.mdx)("h2",{id:"config-changes"},"Config changes"),(0,i.mdx)("p",null,"With the full transition to a webpack plugin, Terra dev site config has changed significantly. The plugin is now configured directly through webpack. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"site.config.js")," file and ",(0,i.mdx)("inlineCode",{parentName:"p"},"dev-site-config")," folders are no longer needed and can be removed from the project. We don't even use them to write out the generated site anymore. It's all done through webpack loaders."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," plugin can be configured by passing an object to the plugin in the webpack config:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const config = {\n  plugins: [\n      new TerraDevSite({\n        <Put your config here>\n      }),\n  ],\n}\n")),(0,i.mdx)("p",null,"Full config options can be found on the ",(0,i.mdx)("a",{parentName:"p",href:"/terra-application/pull/338/dev_tools/cerner-terra-application-docs/terra-dev-site/configuration"},"config page"),"."),(0,i.mdx)("p",null,"To see how the old configuration maps to the new configuration, see the table below:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Old Config Value"),(0,i.mdx)("th",{parentName:"tr",align:null},"New Config Value"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"navConfig.navigation.index")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"removed")),(0,i.mdx)("td",{parentName:"tr",align:null},"The site index page is now assumed to be the first ",(0,i.mdx)("inlineCode",{parentName:"td"},"primaryNavigationItem")," in the list.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"navConfig.navigation.primaryNavigationItems")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"primaryNavigationItems")),(0,i.mdx)("td",{parentName:"tr",align:null},"PrimaryNavigationItems are no longer nested under the navigation object.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"navConfig.navigation.primaryNavigationItems.path")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"primaryNavigationItems.path")),(0,i.mdx)("td",{parentName:"tr",align:null},"unchanged.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"navConfig.navigation.primaryNavigationItems.text")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"primaryNavigationItems.label")),(0,i.mdx)("td",{parentName:"tr",align:null},"Changed to label to align with ",(0,i.mdx)("a",{parentName:"td",href:"/terra-application/pull/338/application/terra-application/components/application-navigation"},"terra-application api")," naming.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"navConfig.navigation.primaryNavigationItems.pageType")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"primaryNavigationItems.contentExtension")),(0,i.mdx)("td",{parentName:"tr",align:null},"Pages no longer support being generated from multiple page types. No sites ever used the functionality. PageType has been changed to contentExtension to eliminate confusion with terra-application pages.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"navConfig.navigation.primaryNavigationItems.capabilities")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"removed")),(0,i.mdx)("td",{parentName:"tr",align:null},"This configuration has been removed. All pages except for home will have access to devTools")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"pagesConfig")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"removed")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"pagesConfig")," allowed consumers to provide their own page config. It was poorly documented, complex and no one ever did.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"generatePages")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"additionalSearchDirectories")),(0,i.mdx)("td",{parentName:"tr",align:null},"Instead of filling out this complex object. Terra dev site searches the 'terra-dev-site' folder by default for content with the specified content Extensions. Consumers that wish to search other directories now can provided fully qualified paths which will also be searched")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"hotReloading")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"removed")),(0,i.mdx)("td",{parentName:"tr",align:null},"True in dev, false in prod")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"npmPackage")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"removed")),(0,i.mdx)("td",{parentName:"tr",align:null},"Only the root npm package is used.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"sideEffectImports")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"sideEffectImportFilePaths")),(0,i.mdx)("td",{parentName:"tr",align:null},"The name now includes 'filePaths' to better describe the expected input.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"placeholderSrc")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"removed")),(0,i.mdx)("td",{parentName:"tr",align:null},"No longer used.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"readMeContent")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"primaryNavigationItems.additionalContent")),(0,i.mdx)("td",{parentName:"tr",align:null},"No longer a one off, consumers can now add additional content to each primary navigation item that would not normally be found by searching.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.title")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"titleConfig.title")),(0,i.mdx)("td",{parentName:"tr",align:null},"Moved to a titleConfig object to align with terra-application-navigation config.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.favicon")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"faviconFilePath")),(0,i.mdx)("td",{parentName:"tr",align:null},"No longer nested under appConfig. The name now includes 'filePaths' to better describe the expected input.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.themes")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"removed")),(0,i.mdx)("td",{parentName:"tr",align:null},"The available themes are now pulled from the terra-theme.config file via the webpack global variable ",(0,i.mdx)("inlineCode",{parentName:"td"},"TERRA_THEME_CONFIG"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.defaultTheme")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"defaultTheme")),(0,i.mdx)("td",{parentName:"tr",align:null},"No longer nested under appConfig.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.locales")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"removed")),(0,i.mdx)("td",{parentName:"tr",align:null},"Deprecated as of terra-dev-site 6.23, now removed.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.defaultLocale")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"defaultLocale")),(0,i.mdx)("td",{parentName:"tr",align:null},"No longer nested under appConfig.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.defaultDirection")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"defaultDirection")),(0,i.mdx)("td",{parentName:"tr",align:null},"No longer nested under appConfig.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.extensions")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"extensionItems")),(0,i.mdx)("td",{parentName:"tr",align:null},"Renamed to align with terra-application-navigation config.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.extensions.iconPath")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"extensionItems.iconPath")),(0,i.mdx)("td",{parentName:"tr",align:null},"Renamed to align with terra-application-navigation config.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.extensions.key")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"extensionItems.key")),(0,i.mdx)("td",{parentName:"tr",align:null},"Renamed to align with terra-application-navigation config.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.extensions.text")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"extensionItems.text")),(0,i.mdx)("td",{parentName:"tr",align:null},"Renamed to align with terra-application-navigation config.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.extensions.componentPath")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"extensionItems.modalFilePath")),(0,i.mdx)("td",{parentName:"tr",align:null},"Renamed to prepare for application v2 modals.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.extensions.size")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"removed")),(0,i.mdx)("td",{parentName:"tr",align:null},"One size fits all.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"appConfig.headHtml")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"headHtml")),(0,i.mdx)("td",{parentName:"tr",align:null},"No longer nested under appConfig.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"includeTestEvidence")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"removed")),(0,i.mdx)("td",{parentName:"tr",align:null},"Removed the ability to include test evidence, this should be covered now by a separate site report.")))),(0,i.mdx)("h2",{id:"dependency-changes"},"Dependency changes"),(0,i.mdx)("p",null,"Previously ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," was providing a version of ",(0,i.mdx)("inlineCode",{parentName:"p"},"rect-intl")," as a dependency. Because this satisfied the ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-application")," peer dependency requirement, many applications did not define it. With this release we have removed that dependency and applications will have to provide that peer dependency themselves."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"terra-application")," is now a peer dependency and must be defined by the package consuming ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"terra-toolkit")," is no longer a peer dependency to allow consumers to use ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," v7 with either terra-toolkit or the replacement ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-functional-testing")," package."),(0,i.mdx)("h3",{id:"resulting-test-changes"},"Resulting Test changes"),(0,i.mdx)("p",null,"If you happen to be testing md or mdx components, the wrapping div has been removed and screenshots will have to be regenerated. I assume this is rare beyond ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," itself."),(0,i.mdx)("h2",{id:"node-10"},"Node 10"),(0,i.mdx)("p",null,"Node 10 is now the minium supported node version. This was bumped to support version 5 of react-docgen, which is used to generate props tables."),(0,i.mdx)("h2",{id:"mdx"},"MDX"),(0,i.mdx)("p",null,"The MDX loader is now used to load both ",(0,i.mdx)("inlineCode",{parentName:"p"},".md")," and .",(0,i.mdx)("inlineCode",{parentName:"p"},"mdx")," files. This may cause build errors in existing .md documents. This change allows us to remove the marked loader from the plugin."),(0,i.mdx)("p",null,"A couple of common syntax errors when using the MDX loader can be found on our ",(0,i.mdx)("a",{parentName:"p",href:"/terra-application/pull/338/dev_tools/cerner-terra-application-docs/terra-dev-site/writing-documentation"},"Writing Documentation")," Page."),(0,i.mdx)("h2",{id:"i-get-the-webpack-error-invalid-configuration-object-webpack-has-been-initialised-using-a-configuration-object-that-does-not-match-the-api-schema"},"I get the webpack error: Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema."),(0,i.mdx)("p",null,"You can get this error when using webpack 4. Part of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," webpack plugin we inject an entry to build the site. Webpack requires an entry to function but the check that is performed changed between webpack 4 and 5. In webpack 4, an entry is checked prior to running the plugin, where as in webpack 5 the check is performed after."),(0,i.mdx)("p",null,"To solve this issue you have two options. Upgrade to webpack 5 or add a dummy entrypoint that terra-dev-site will remove before bundling. Upgrading to webpack 5 is recommended."),(0,i.mdx)(d.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,i.mdx)("p",null,"If you chose to add the dummy entry point it will have to resolve to a real file. It doesn't matter what file since terra-dev-site will remove it, but webpack 4 does check that the entrypoint file is real.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"  entry: {\n    terraDevSiteDummy: './dummy.js',\n  },\n")))}p.isMDXComponent=!0},66983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},87462:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},44925:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:()=>a})}}]);