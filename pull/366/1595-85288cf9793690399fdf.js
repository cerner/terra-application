"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[1595],{40996:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),r=s(n(45697)),i=s(n(19845)),o=s(n(50026)),l=s(n(66983)),d=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.default.bind(l.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},g=function(e){var t=e.children,n=c(e,d),r=a.default.useContext(o.default),l=(0,i.default)(p(["button",r.className]),n.className);return a.default.createElement("button",u({},n,{type:"button",className:l,onBlur:m,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};g.propTypes=h;t.default=g},59278:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),i=d(n(19845)),o=d(n(50026)),l=d(n(30866));function d(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(l.default),u={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},c=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,i=a.default.useContext(o.default);return a.default.createElement("div",{className:s("notice",n,i.className)},a.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:s("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};c.propTypes=u,c.defaultProps={ariaLevel:"2",variant:"important"};t.default=c},47306:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),i=u(n(93967)),o=u(n(19845)),l=u(n(50026)),d=u(n(42620)),s=["title"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.default.bind(d.default),f={title:r.default.string},h=function(e){var t=e.title,n=p(e,s),r=a.default.useContext(l.default),o=(0,i.default)(m(["placeholder",r.className]),n.className),d=m(["inner"]);return a.default.createElement("div",c({},n,{className:o}),a.default.createElement("div",{className:d},a.default.createElement("p",{className:m("title")},t)))};h.propTypes=f,h.defaultProps={title:""};t.default=h},34261:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=o(n(59278)),r=o(n(47306)),i=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},1595:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(87462),r=n(44925),i=(n(67294),n(81254)),o=n(66722),l=n(34261),d=["components"],s={},u="wrapper";function c(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.mdx)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(o.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"terradevsite"},"TerraDevSite"),(0,i.mdx)("p",null,"TerraDevSite is a webpack plugin for generating a documentation and testing site for content built with the terra application framework."),(0,i.mdx)("h2",{id:"installation"},"Installation"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @cerner/terra-dev-site\n")),(0,i.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"node 10"),(0,i.mdx)("li",{parentName:"ul"},"babel 7.5"),(0,i.mdx)("li",{parentName:"ul"},"webpack 4/5"),(0,i.mdx)("li",{parentName:"ul"},"webpack config from either terra-toolkit or @cerner/webpack-config-terra")),(0,i.mdx)("h2",{id:"setting-up-webpack-config"},"Setting up webpack config"),(0,i.mdx)("p",null,"Below is an example webpack config that applies the TerraDevSite Plugin."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const terraWebpackConfig = require('@cerner/webpack-config-terra');\nconst merge = require('webpack-merge');\nconst { TerraDevSite } = require('@cerner/terra-dev-site');\n\n/**\n* Generates the file representing app name configuration.\n*/\nconst devSiteConfig = (env = {}, argv = {}) => ({\n  plugins: [\n    new TerraDevSite({\n      defaultLocale: env.defaultLocale,\n    }),\n  ],\n});\n\nconst webpackConfig = (env, argv) => (\n  merge(terraWebpackConfig(env, argv), devSiteConfig(env, argv))\n);\n\nmodule.exports = webpackConfig;\n")),(0,i.mdx)("h2",{id:"adding-content"},"Adding content"),(0,i.mdx)("p",null,"The TerraDevSite Plugin will search the ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," folder for files with a defined content extension, typically ",(0,i.mdx)("inlineCode",{parentName:"p"},"test")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"doc"),". The default export from those files will be imported into the generated dev site and organized based on file structure."),(0,i.mdx)("h3",{id:"file-naming"},"File Naming"),(0,i.mdx)("p",null,"Files need to be named using the correct 'contentExtension' and file extension to be added to the site. This will allow you to add any additional files to support your examples and only have the specified files added as entries to the site. The file name pattern is:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"<filename>.<group>.<contentExtension>.<fileTypeExtension>\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"filename - This is the name that will be added to the secondary navigation layout for the site. These are sorted alphabetically."),(0,i.mdx)("li",{parentName:"ul"},"group - (optional) This allows you to sort menu items. The group is sorted alphabetically before items without a group."),(0,i.mdx)("li",{parentName:"ul"},"contentExtension - This indicates which primary navigation item the content will be rendered under. The default pageTypes are ",(0,i.mdx)("inlineCode",{parentName:"li"},"home"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"doc"),", and ",(0,i.mdx)("inlineCode",{parentName:"li"},"test"),"."),(0,i.mdx)("li",{parentName:"ul"},"extension - .md and .mdx extensions are supported by default. Other extensions can be added by updating the projects webpack config by adding additional extensions to the resolve field.")),(0,i.mdx)("h3",{id:"directories"},"Directories"),(0,i.mdx)("p",null,"The directories within the entry point folder, TerraDevSite, will be translated into the menu structure. The one exception is if you have a 'contentExtension' directory inside the entry point folder, it will be ignored. This lets you group page types together without impacting your site."),(0,i.mdx)("h3",{id:"example"},"Example"),(0,i.mdx)("p",null,"Given a directory structure like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"src/\n  terra-dev-site/\n    doc/\n      upgradeGuide.a.doc.md\n      examples.c/\n        supportingFile.js\n        myGreatExample.doc.jsx\n      example.b.doc.js\n    test/\n      testfile.test.js\n      docInTestFolder.doc.js\n")),(0,i.mdx)("p",null,"The menu navigation result will be:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"-Components-\n  Upgrade Guide\n  Example\n  Examples >\n     My Great Example\n  Test >\n     Doc In Test Folder\n-Test-\n  Testfile\n")),(0,i.mdx)("h2",{id:"url-generation"},"URL generation"),(0,i.mdx)("p",null,"Urls are generated with the following pattern:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"<baseName>/<pathPrefix>/<contentExtension>/<package>/<directoryStructure>/<filename>\n")),(0,i.mdx)("h2",{id:"path-based-routing-deployments"},"Path based routing deployments"),(0,i.mdx)(l.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,i.mdx)("p",null,"To support path based routing for gh-pages style deployments, you must supply an env variable, ",(0,i.mdx)("inlineCode",{parentName:"p"},"TERRA_DEV_SITE_PUBLIC_PATH"),", describing the path for assets to be served from.")),(0,i.mdx)("p",null,"For example, for a page hosted on github pages with a url of: ",(0,i.mdx)("a",{parentName:"p",href:"http://cerner.github.com/terra-dev-site"},"http://cerner.github.com/terra-dev-site"),". The environment variable should be set as follows."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"TERRA_DEV_SITE_PUBLIC_PATH='/terra-dev-site/'\n")),(0,i.mdx)("p",null,"Without the environment variable set assets will assume they are served from ",(0,i.mdx)("inlineCode",{parentName:"p"},"/")," when they should be served from ",(0,i.mdx)("inlineCode",{parentName:"p"},"/terra-dev-site/")),(0,i.mdx)("h2",{id:"further-configuration"},"Further configuration:"),(0,i.mdx)("p",null,"TerraDevSite is built to work out of the box but it also provides many configuration options to allow you to customize your site."),(0,i.mdx)("p",null,"Check out our ",(0,i.mdx)("a",{parentName:"p",href:"/terra-application/pull/366/dev_tools/cerner-terra-application-docs/terra-dev-site/configuration"},"configuration docs"),"."),(0,i.mdx)("h2",{id:"hot-reloading"},"Hot reloading"),(0,i.mdx)("p",null,"When building for development TerraDevSite will search for content in the defined ",(0,i.mdx)("inlineCode",{parentName:"p"},"sourceFolder"),", src by default. Any imports that point to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"distributionFolder"),", 'lib' by default, will automatically be redirected to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"sourceFolder")," instead. Hot reloading watches for any changes in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," directory and will re generate the site."),(0,i.mdx)("p",null,"When building for production, hot reloading will be disabled."),(0,i.mdx)("p",null,"It is recommend that if a directory must be defined, imports should pull from the lib directory. With the exception of the props table loader which must pull from the source directory."),(0,i.mdx)("h2",{id:"auto-package-aliasing"},"Auto Package Aliasing"),(0,i.mdx)("p",null,"TerraDevSite will automatically alias the current directory as the package name, allowing examples to import files as if they were a consumer of the package. This results in examples that are representative of actual consumer implementations."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"- import Component from '../../Component';\n+ import Component from 'PackageName/Component';\n")),(0,i.mdx)("h2",{id:"pulling-content-from-node-modules"},"Pulling content from node modules"),(0,i.mdx)("p",null,"TerraDevSite allows for distributed documentation to be pulled together in a single site. We use this extensively for our terra-ui doc site."),(0,i.mdx)("p",null,"To add additional search directories, simply provide the full path to the additional directories you'd like to search in the terra config using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"additionalSearchDirectories")," config option."),(0,i.mdx)("p",null,"For Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const path = require('path');\nconst terraWebpackConfig = require('@cerner/webpack-config-terra');\nconst merge = require('webpack-merge');\nconst { TerraDevSite } = require('@cerner/terra-dev-site');\n\n/**\n* Generates the file representing app name configuration.\n*/\nconst devSiteConfig = (env = {}, argv = {}) => ({\n  plugins: [\n    new TerraDevSite({\n      defaultLocale: env.defaultLocale,\n      additionalSearchDirectories: [\n        path.resolve(process.cwd(), 'node_modules', 'package name', 'lib', 'terra-dev-site'),\n      ],\n    }),\n  ],\n});\n\nconst webpackConfig = (env, argv) => (\n  merge(terraWebpackConfig(env, argv), devSiteConfig(env, argv))\n);\n\nmodule.exports = webpackConfig;\n")),(0,i.mdx)("p",null,"Additional Search Directories will not be hot reloaded."),(0,i.mdx)("h2",{id:"testing"},"Testing"),(0,i.mdx)(l.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,i.mdx)("p",null,"To Flex the locale with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-functional-testing")," package, ",(0,i.mdx)("inlineCode",{parentName:"p"},"env.defaultLocale")," must be passed to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TerraDevSite")," plugin. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"defaultLocale")," env is set as a part of the WDIO test service and must be passed into the ",(0,i.mdx)("inlineCode",{parentName:"p"},"TerraDevSite")," plugin to ensure locale tests are run appropriately.")),(0,i.mdx)("h2",{id:"stacking-devsites"},"Stacking DevSites"),(0,i.mdx)("p",null,"TerraDevSites plugins can be stacked and will automatically add an application switcher to allow switching between dev sites.\nThis can be used to provide different default setups for TerraDevSites, for example an unauthenticated site that provides a link to an authenticated site."),(0,i.mdx)("p",null,"The webpack config would look like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"const terraWebpackConfig = require('@cerner/webpack-config-terra');\nconst merge = require('webpack-merge');\nconst { TerraDevSite } = require('@cerner/terra-dev-site');\n\n/**\n* Generates the file representing app name configuration.\n*/\nconst devSiteConfig = (env = {}, argv = {}) => ({\n  plugins: [\n    new TerraDevSite({\n      defaultLocale: env.defaultLocale,\n    }),\n    new TerraDevSite({\n      pathPrefix: 'anotherSite',\n      defaultLocale: env.defaultLocale,\n    }),\n  ],\n});\n\nconst webpackConfig = (env, argv) => (\n  merge(terraWebpackConfig(env, argv), devSiteConfig(env, argv))\n);\n\nmodule.exports = webpackConfig;\n")),(0,i.mdx)(l.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"pathPrefix")," must be unique for all instances of the TerraDevSite Plugin as it is used in the url.")))}c.isMDXComponent=!0},66722:(e,t,n)=>{n.d(t,{C:()=>i});var a=n(67294),r=n(96862),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-application/tree/main/packages/terra-dev-site",name:"@cerner/terra-dev-site",version:"7.12.0",url:t})}},96862:(e,t,n)=>{var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(19845)),l=a(n(55138)),d=o.default.bind(l.default),s={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(i))),l=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,l)};u.propTypes=s;t.Z=u},66983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},55138:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={badge:"Badges-module__badge___mqZdQ","badge-container":"Badges-module__badge-container___Fuva8","badge-name":"Badges-module__badge-name___o7WE3","badge-version":"Badges-module__badge-version___4AQGw"}},87462:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},44925:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:()=>a})}}]);