/*! For license information please see 2836-49c47cefd14214f3a28c.js.LICENSE.txt */
"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[2836],{72836:(n,a,e)=>{e.r(a),e.d(a,{default:()=>p});var o=e(87462),r=e(85893),t=e(11151);function i(n){var a=(0,o.Z)({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",blockquote:"blockquote"},(0,t.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"how-to-show-loading-overlays",children:"How To Show Loading Overlays"}),"\n",(0,r.jsxs)(a.p,{children:["Loading overlays can be rendered within the framework by rendering an ",(0,r.jsx)(a.a,{href:"/terra-application/pull/344/application/terra-application/components/application-loading-overlay",children:"ApplicationLoadingOverlay"})," component. Overlays will be rendered by the closest ancestor ",(0,r.jsx)(a.a,{href:"/terra-application/pull/344/application/terra-application/components/application-loading-overlay-provider",children:"ApplicationLoadingOverlayProvider"}),". All content rendered within the responsding ApplicationLoadingOverlayProvider will be overlaid."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-jsx",children:"import React, { useState } from 'react';\nimport ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';\n\nconst ExampleComponent = () => {\n  const [isLoading, setIsLoading] = useState(false);\n\n  return (\n    <div>\n      <p>This component toggles a loading state that lasts for 3 seconds.</p>\n      <p>\n        <button type=\"button\" onClick={() => {\n          setIsLoading(true);\n\n          setTimeout(() => {\n            setIsLoading(false);\n          }, 3000);\n        }}>\n          Start Loading\n        </button>\n      </p>\n      <ApplicationLoadingOverlay isOpen={isLoading} />\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Any component that wants to create an overlay container for its children can render its own ",(0,r.jsx)(a.a,{href:"/terra-application/pull/344/application/terra-application/components/application-loading-overlay-provider",children:"ApplicationLoadingOverlayProvider"})," to scope overlay presentation to that container."]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.p,{children:["Note: ApplicationLoadingOverlayProviders are provided by ",(0,r.jsx)(a.a,{href:"/terra-application/pull/344/application/terra-application/components/application-base",children:"ApplicationBase"}),", ",(0,r.jsx)(a.a,{href:"/terra-application/pull/344/application/terra-application/components/application-navigation",children:"ApplicationNavigation"}),", ",(0,r.jsx)(a.a,{href:"/terra-application/pull/344/application/terra-application/components/modal-manager",children:"ModalManager"})," and the ",(0,r.jsx)(a.a,{href:"/terra-application/pull/344/application/terra-application/components/slide-panel-manager",children:"SlidePanelManager"}),"."]}),"\n"]})]})}const p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,o.Z)({},(0,t.ah)(),n.components).wrapper;return a?(0,r.jsx)(a,(0,o.Z)({},n,{children:(0,r.jsx)(i,n)})):i(n)}},75251:(n,a,e)=>{var o=e(67294),r=60103;if(a.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var t=Symbol.for;r=t("react.element"),a.Fragment=t("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(n,a,e){var o,t={},c=null,s=null;for(o in void 0!==e&&(c=""+e),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(s=a.ref),a)p.call(a,o)&&!l.hasOwnProperty(o)&&(t[o]=a[o]);if(n&&n.defaultProps)for(o in a=n.defaultProps)void 0===t[o]&&(t[o]=a[o]);return{$$typeof:r,type:n,key:c,ref:s,props:t,_owner:i.current}}a.jsx=c,a.jsxs=c},85893:(n,a,e)=>{n.exports=e(75251)},87462:(n,a,e)=>{function o(){return o=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},o.apply(this,arguments)}e.d(a,{Z:()=>o})}}]);