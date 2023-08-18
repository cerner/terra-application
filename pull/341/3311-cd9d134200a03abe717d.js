"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[3311],{33311:(t,a,e)=>{e.r(a),e.d(a,{default:()=>s});var n=e(87462),o=e(44925),r=(e(67294),e(81254)),p=["components"],i={},l="wrapper";function s(t){var a=t.components,e=(0,o.Z)(t,p);return(0,r.mdx)(l,(0,n.Z)({},i,e,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"how-to-show-status-overlays"},"How to Show Status Overlays"),(0,r.mdx)("p",null,"Status View can be rendered within the framework by rendering an ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/341/application/terra-application/components/application-status-overlay"},"ApplicationStatusOverlay")," component. Status Views will be rendered by the closest ancestor ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/341/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider"),". All content rendered within the responding ApplicationStatusOverlayProvider will be overlaid."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport ApplicationStatusOverlay from \'terra-application/lib/application-status-overlay\';\n\nconst ExampleComponent = () => {\n  const [showStatusOverlay, setShowStatusOverlay] = useState(false);\n\n  return (\n    <div>\n      <p>This component toggles a status view that lasts for 3 seconds.</p>\n      <p>\n        <button\n          type="button"\n          onClick={() => {\n            setShowStatusOverlay(true);\n\n            setTimeout(() => {\n              setShowStatusOverlay(false);\n            }, 3000);\n          }}\n        >\n          Show Status View\n        </button>\n      </p>\n      {showStatusOverlay && <ApplicationStatusOverlay message="Demo for showing status overlay view" variant="no-data" />}\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n')),(0,r.mdx)("p",null,"Any component that wants to create an status view container for its children can render its own ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/341/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider")," to scope status view presentation to that container."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note: ApplicationStatusOverlayProviders are provided by ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/341/application/terra-application/components/application-base"},"ApplicationBase"),", ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/341/application/terra-application/components/application-navigation"},"ApplicationNavigation")," , ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/341/application/terra-application/components/modal-manager"},"ModalManager"),", and the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/341/application/terra-application/components/slide-panel-manager"},"SlidePanelManager"),".")))}s.isMDXComponent=!0},87462:(t,a,e)=>{function n(){return n=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},n.apply(this,arguments)}e.d(a,{Z:()=>n})},44925:(t,a,e)=>{function n(t,a){if(null==t)return{};var e,n,o=function(t,a){if(null==t)return{};var e,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(o[e]=t[e]);return o}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}e.d(a,{Z:()=>n})}}]);