"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[52],{70052:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(45072),o=n(52822),r=(n(11504),n(69788)),i=["components"],p={},c="wrapper";function l(e){var t=e.components,n=(0,o.c)(e,i);return(0,r.mdx)(c,(0,a.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"how-to-use-active-breakpoint"},"How To Use Active Breakpoint"),(0,r.mdx)("p",null,"The active breakpoint value can be determined by using the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/contexts/active-breakpoint-context"},"ActiveBreakpointContext"),". Components that use the ActiveBreakpointContext will be updated whenever the active breakpoint value changes."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext } from 'react';\nimport { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';\n\nconst ExampleComponent = () => {\n  const activeBreakpoint = useContext(ActiveBreakpointContext);\n\n  return (\n    <div>\n      <p>This component retrieves and renders the active breakpoint</p>\n      <p>{activeBreakpoint}</p>\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note: An ActiveBreakpointContext value is provided by ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-base"},"ApplicationBase"),". The rendering of additional ActiveBreakpointContext providers should be unnecessary is most cases.")))}l.isMDXComponent=!0},45072:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{c:()=>a})},52822:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{c:()=>a})}}]);