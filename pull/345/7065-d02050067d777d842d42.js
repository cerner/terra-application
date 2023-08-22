"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[7065],{37065:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});var r=n(87462),t=n(44925),o=(n(67294),n(81254)),i=n(66722),s=["components"],d={},l="wrapper";function c(e){var a=e.components,n=(0,t.Z)(e,s);return(0,o.mdx)(l,(0,r.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)(i.C,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-dev-site-setup-guide"},"Terra Dev Site Setup Guide"),(0,o.mdx)("p",null,"Using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TerraDevSite")," webpack plugin, a static site will be generated and can be served using ",(0,o.mdx)("inlineCode",{parentName:"p"},"webpack-dev-server")," or served statically using something like gh-pages. Extending from ",(0,o.mdx)("inlineCode",{parentName:"p"},"@cerner/webpack-config-terra"),"'s webpack config is highly recommended."),(0,o.mdx)("h2",{id:"webpackconfig"},"WebpackConfig"),(0,o.mdx)("p",null,"The following webpackConfig config is a simple example, extending from the reusable terra webpack config and applying the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TerraDevSite")," plugin."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const terraWebpackConfig = require('@cerner/webpack-config-terra');\nconst merge = require('webpack-merge');\nconst { TerraDevSite } = require('@cerner/terra-dev-site');\n\n/**\n* Generates the file representing app name configuration.\n*/\nconst devSiteConfig = (env = {}, argv = {}) => ({\n  plugins: [\n    new TerraDevSite({\n      defaultLocale: env.defaultLocale,\n    }),\n  ],\n});\n\nconst webpackConfig = (env, argv) => (\n  merge(terraWebpackConfig(env, argv), devSiteConfig(env, argv))\n);\n\nmodule.exports = webpackConfig;\n")),(0,o.mdx)("p",null,"To serve using ",(0,o.mdx)("inlineCode",{parentName:"p"},"webpack-dev-server"),", add the following terra-toolkit command to your package.json. See the ",(0,o.mdx)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/#root"},"webpack-dev-server")," for more information on the command options."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "webpack serve"\n  }\n}\n')),(0,o.mdx)("p",null,"After adding the start command to your package.json, run it and navigate to http://localhost:8080/ to view the site in your browser:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.mdx)("p",null,"You will see your readme hosted on the site. Next lets add some pages."),(0,o.mdx)("p",null,"TerraDevSite will auto discover files base on either the default search patterns in the site.config or the file structure and file extensions used."),(0,o.mdx)("p",null,"Add the following file to: ",(0,o.mdx)("inlineCode",{parentName:"p"},"<package>/src/terra-dev-site/my-first-page.doc.md")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-md"},"My first page!\n")),(0,o.mdx)("p",null,"Webpack will re-compile and now you should be able to see your page under the components tab."))}c.isMDXComponent=!0},66722:(e,a,n)=>{n.d(a,{C:()=>o});var r=n(67294),t=n(96862),o=function(e){var a=e.url;return r.createElement(t.Z,{src:"https://github.com/cerner/terra-application/tree/main/packages/terra-dev-site",name:"@cerner/terra-dev-site",version:"7.8.0",url:a})}},96862:(e,a,n)=>{var r=n(64836);a.Z=void 0;var t=r(n(67294)),o=r(n(45697)),i=r(n(47166)),s=r(n(55138)),d=i.default.bind(s.default),l={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var a=e.src,n=e.name,r=e.url,o=e.version,i=t.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},t.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:d("badge-version")},"v".concat(o))),s=a?t.default.createElement("a",{className:d("badge"),href:a},t.default.createElement("span",{className:d("badge-name")},"github"),t.default.createElement("span",{className:d("badge-version")},"source")):void 0;return t.default.createElement("div",{className:d("badge-container")},i,s)};c.propTypes=l;var p=c;a.Z=p},55138:(e,a,n)=>{n.r(a),n.d(a,{default:()=>r});const r={badge:"Badges-module__badge___mqZdQ","badge-container":"Badges-module__badge-container___Fuva8","badge-name":"Badges-module__badge-name___o7WE3","badge-version":"Badges-module__badge-version___4AQGw"}},87462:(e,a,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(a,{Z:()=>r})},44925:(e,a,n)=>{function r(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}n.d(a,{Z:()=>r})}}]);