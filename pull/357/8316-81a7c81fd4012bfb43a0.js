"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[8316],{88316:(e,a,t)=>{t.r(a),t.d(a,{default:()=>s});var n=t(87462),r=t(44925),d=(t(67294),t(81254)),o=t(85250),l=["components"],m={},i="wrapper";function s(e){var a=e.components,t=(0,r.Z)(e,l);return(0,d.mdx)(i,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"package-loader"},"Package Loader"),(0,d.mdx)("p",null,"The Package Loader will take the passed in json file and return a set of react components including a badge component with a customizable url.\nThe file must be a json file."),(0,d.mdx)("h4",{id:"note"},"Note:"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"github source")," badge will only be displayed if the json file contains the property ",(0,d.mdx)("inlineCode",{parentName:"p"},"repository")," with the sub property ",(0,d.mdx)("inlineCode",{parentName:"p"},"url"),".\nAlso, if the package is not in the root directory, the sub property ",(0,d.mdx)("inlineCode",{parentName:"p"},"directory")," can be added in the following format:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},'"repository": {\n    "type": "git",\n    "url": "git+https://github.com/cerner/terra-dev-site.git",\n    "directory": "src/loader-components"\n  }\n')),(0,d.mdx)("h2",{id:"resource-query"},"Resource query"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"?dev-site-package")),(0,d.mdx)("h2",{id:"badge-props"},"Badge Props"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Prop"),(0,d.mdx)("th",{parentName:"tr",align:null},"type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"url"),(0,d.mdx)("td",{parentName:"tr",align:null},"string")))),(0,d.mdx)("h2",{id:"badge-example"},"Badge Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { Badge } from './pretendPackage.json?dev-site-package';\n\n<Badge />\n\n<Badge url=\"https://www.google.com\"/>\n")),(0,d.mdx)("h2",{id:"rendered-example"},"Rendered Example"),(0,d.mdx)(o.C,{mdxType:"Badge"}),(0,d.mdx)(o.C,{url:"https://www.google.com",mdxType:"Badge"}))}s.isMDXComponent=!0},85250:(e,a,t)=>{t.d(a,{C:()=>d});var n=t(67294),r=t(96862),d=function(e){var a=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-dev-site/tree/main/src/loader-components",name:"terra-dev-site",version:"6.2.0",url:a})}},96862:(e,a,t)=>{var n=t(64836);a.Z=void 0;var r=n(t(67294)),d=n(t(45697)),o=n(t(47166)),l=n(t(55138)),m=o.default.bind(l.default),i={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},s=function(e){var a=e.src,t=e.name,n=e.url,d=e.version,o=r.default.createElement("a",{className:m("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(d)},r.default.createElement("span",{className:m("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(d))),l=a?r.default.createElement("a",{className:m("badge"),href:a},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},o,l)};s.propTypes=i;var p=s;a.Z=p},55138:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});const n={badge:"Badges-module__badge___mqZdQ","badge-container":"Badges-module__badge-container___Fuva8","badge-name":"Badges-module__badge-name___o7WE3","badge-version":"Badges-module__badge-version___4AQGw"}},87462:(e,a,t)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(a,{Z:()=>n})},44925:(e,a,t)=>{function n(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(a,{Z:()=>n})}}]);