"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[7163],{57163:(a,n,e)=>{e.r(n),e.d(n,{default:()=>c});var t=e(58168),o=e(53986),r=(e(96540),e(36665)),p=["components"],i={},l="wrapper";function c(a){var n=a.components,e=(0,o.A)(a,p);return(0,r.mdx)(l,(0,t.A)({},i,e,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"how-to-show-loading-overlays"},"How To Show Loading Overlays"),(0,r.mdx)("p",null,"Loading overlays can be rendered within the framework by rendering an ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-loading-overlay"},"ApplicationLoadingOverlay")," component. Overlays will be rendered by the closest ancestor ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-loading-overlay-provider"},"ApplicationLoadingOverlayProvider"),". All content rendered within the responsding ApplicationLoadingOverlayProvider will be overlaid."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';\n\nconst ExampleComponent = () => {\n  const [isLoading, setIsLoading] = useState(false);\n\n  return (\n    <div>\n      <p>This component toggles a loading state that lasts for 3 seconds.</p>\n      <p>\n        <button type=\"button\" onClick={() => {\n          setIsLoading(true);\n\n          setTimeout(() => {\n            setIsLoading(false);\n          }, 3000);\n        }}>\n          Start Loading\n        </button>\n      </p>\n      <ApplicationLoadingOverlay isOpen={isLoading} />\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n")),(0,r.mdx)("p",null,"Any component that wants to create an overlay container for its children can render its own ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-loading-overlay-provider"},"ApplicationLoadingOverlayProvider")," to scope overlay presentation to that container."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note: ApplicationLoadingOverlayProviders are provided by ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-base"},"ApplicationBase"),", ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/application-navigation"},"ApplicationNavigation"),", ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/modal-manager"},"ModalManager")," and the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/370/application/terra-application/components/slide-panel-manager"},"SlidePanelManager"),".")))}c.isMDXComponent=!0},58168:(a,n,e)=>{function t(){return t=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},t.apply(this,arguments)}e.d(n,{A:()=>t})},53986:(a,n,e)=>{function t(a,n){if(null==a)return{};var e,t,o=function(a,n){if(null==a)return{};var e,t,o={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(o[e]=a[e]);return o}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(o[e]=a[e])}return o}e.d(n,{A:()=>t})}}]);