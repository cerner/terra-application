"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[204],{80204:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var i=t(45072),a=t(52822),o=(t(11504),t(69788)),r=["components"],s={},p="wrapper";function d(e){var n=e.components,t=(0,a.c)(e,r);return(0,o.mdx)(p,(0,i.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"faq"},"FAQ"),(0,o.mdx)("h2",{id:"consumption"},"Consumption"),(0,o.mdx)("h3",{id:"i-own-an-application-that-consumes-multiple-libraries-the-libraries-i-consume-depend-on-a-different-version-of-terra-application-than-i-provide-how-can-i-resolve-the-dependency-mismatch"},"I own an application that consumes multiple libraries. The libraries I consume depend on a different version of ",(0,o.mdx)("inlineCode",{parentName:"h3"},"terra-application")," than I provide. How can I resolve the dependency mismatch?"),(0,o.mdx)("p",null,"As an application owner, you are responsible for defining the version of ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application")," that is\nbeing used by the components that make up your application."),(0,o.mdx)("p",null,"It may be tempting to use webpack ",(0,o.mdx)("inlineCode",{parentName:"p"},"alias"),"'s to force a specific version of ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application")," to be used.\nHowever, this is likely to result in API conflicts between the expected and provided versions (and many runtime exceptions)."),(0,o.mdx)("p",null,"It may also be tempting to forgo using ",(0,o.mdx)("inlineCode",{parentName:"p"},"peerDependencies")," and have each package install its own ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application")," version.\nBut at this point, we all know that doing so will lead to Context mismatches and a non-functioning application."),(0,o.mdx)("p",null,"At the end of the day, if your dependencies require a different version of ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application")," than your application provides,\nyour dependencies need to be updated to use the version you provide."),(0,o.mdx)("h3",{id:"why-does-bundling-multiple-versions-of-terra-application-cause-problems-i-can-bundle-multiple-versions-of-other-packages-with-no-issues"},"Why does bundling multiple versions of ",(0,o.mdx)("inlineCode",{parentName:"h3"},"terra-application")," cause problems? I can bundle multiple versions of other packages with no issues."),(0,o.mdx)("p",null,"Some packages may be duplicated if their implementations are sandboxed. In those cases, you're weighing the technical costs\nof duplicating the logic (and inflating your asset size) against the cost of managing synchronizing versions across multiple packages.\nIt's definitely worth thinking about, but generally there's not functional impact to the overall application."),(0,o.mdx)("p",null,"However, a number of APIs that are provided by ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application"),"'s components are ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"Context"),"-based.\nContexts are object instances that include components, a Provider and a Consumer, that are able to communicate with each other.\nHowever, a unique Provider/Consumer pair is generated each time a Context is instantiated, and Providers can only communicate with the Consumer\nprovided by the same Context instance."),(0,o.mdx)("p",null,"If multiple versions of ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application")," are installed, multiple instances of each provided Context are created. This can lead to scenarios\nwhere one Provider instance is used by the application while an altogether different Consumer instance is used by the application's contents,\nleading to a Provider/Consumer mismatch and a complete communication breakdown. This largely negates the value provided by ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application"),"\nand will likely result in a functionally broken application."),(0,o.mdx)("h3",{id:"i-see-unmet-peer-dependency-warnings-when-i-install-my-dependencies-do-i-need-to-provide-these-dependencies-myself"},'I see "Unmet Peer Dependency" warnings when I install my dependencies. Do I need to provide these dependencies myself?'),(0,o.mdx)("p",null,"Yes. These warnings indicate that you or your dependencies do not have access to the packages they expect.\nYou should provide these dependencies yourself (even if only as a ",(0,o.mdx)("inlineCode",{parentName:"p"},"devDependency"),")."),(0,o.mdx)("p",null,"If resolving one warning results in a unmet peer dependency for another package or version, then you or your dependencies\nhave conflicting peer dependencies specified. You will need to get the dependency versions aligned between the affected packages\nin order to consume both correctly."))}d.isMDXComponent=!0},45072:(e,n,t)=>{function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},i.apply(this,arguments)}t.d(n,{c:()=>i})},52822:(e,n,t)=>{function i(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{c:()=>i})}}]);