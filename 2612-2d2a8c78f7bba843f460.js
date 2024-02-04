"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[2612],{72612:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var a=t(45072),r=t(52822),o=(t(11504),t(69788)),i=["components"],p={},c="wrapper";function l(e){var n=e.components,t=(0,r.c)(e,i);return(0,o.mdx)(c,(0,a.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-to-consume-terra-application"},"How To Consume Terra Application"),(0,o.mdx)("p",null,"Due to the large number of Context-based APIs provided by ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application"),", the recommended strategy for consuming ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application")," is to define it as a ",(0,o.mdx)("inlineCode",{parentName:"p"},"peerDependency")," within your ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "peerDependencies": {\n    "terra-application": "^x.x.x"\n  }\n}\n')),(0,o.mdx)("p",null,"Packages that define ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application")," within their ",(0,o.mdx)("inlineCode",{parentName:"p"},"dependencies")," out of necessity must take extra precaution to ensure that only a single version of ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application")," is installed. The ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/duplicate-package-checker-webpack-plugin"},"DuplicatePackageCheckerPlugin")," should be used to detect duplicated packages at build time."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"The DuplicatePackageCheckerPlugin is included in ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-toolkit"),"'s provided ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-toolkit-boneyard/blob/main/docs/Webpack.md"},"webpack configuration"),".")))}l.isMDXComponent=!0},45072:(e,n,t)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{c:()=>a})},52822:(e,n,t)=>{function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{c:()=>a})}}]);