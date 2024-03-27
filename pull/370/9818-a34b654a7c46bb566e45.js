"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[9818],{39818:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var a=n(58168),r=n(53986),o=(n(96540),n(36665)),i=["components"],p={},l="wrapper";function s(t){var e=t.components,n=(0,r.A)(t,i);return(0,o.mdx)(l,(0,a.A)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-to-use-translated-strings"},"How To Use Translated Strings"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Please review Terra's ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/internationalization-intro"},"Internationalization"),"\ndocumentation to ensure your application is configured to support i18n.")),(0,o.mdx)("p",null,"Every child of ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-base"},"ApplicationBase")," has access to the\napplication's translated strings. Please review Terra's ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/building-components-which-include-translations"},"recommended consumption guides"),"\nfor more information."),(0,o.mdx)("p",null,"Additionally, ApplicateBase provides react-intl's APIs through the ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/contexts/application-intl-context"},"ApplicationIntlContext"),"\nfor consumers seeking a modern Context implementation."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext } from 'react';\nimport { ApplicationIntlContext } from 'terra-application/lib/application-intl';\n\nconst ExampleComponent = () => {\n  const applicationIntl = useContext(ApplicationIntlContext);\n\n  return (\n    <div>\n      <p>This button requires multiple translated strings to render appropriately.</p>\n      <button\n        aria-label={applicationIntl.formatMessage({ id: 'example-component.button-label'})}\n      >\n        {applicationIntl.formatMessage({ id: 'example-component.button-text'})}\n      </button>\n    </div>\n  );\n});\n\nexport default ExampleComponent;\n")),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Accessing react-intl's ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/legacy-context.html"},"legacy context value")," directly is ",(0,o.mdx)("strong",{parentName:"p"},"not recommended"),".\nThis API is deprecated and not provided by react-intl v3.x. Terra's recommended usage patterns are supported by versions 2.x and 3.x of react-intl.")))}s.isMDXComponent=!0},58168:(t,e,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},a.apply(this,arguments)}n.d(e,{A:()=>a})},53986:(t,e,n)=>{function a(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,{A:()=>a})}}]);