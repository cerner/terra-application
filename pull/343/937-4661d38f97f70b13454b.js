/*! For license information please see 937-4661d38f97f70b13454b.js.LICENSE.txt */
"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[937],{10937:(n,e,t)=>{t.r(e),t.d(e,{default:()=>s});var r=t(87462),o=t(85893),a=t(11151);function i(n){var e=(0,r.Z)({h1:"h1",blockquote:"blockquote",p:"p",a:"a",pre:"pre",code:"code",strong:"strong"},(0,a.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"how-to-use-translated-strings",children:"How To Use Translated Strings"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["Please review Terra's ",(0,o.jsx)(e.a,{href:"https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/internationalization-intro",children:"Internationalization"}),"\ndocumentation to ensure your application is configured to support i18n."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Every child of ",(0,o.jsx)(e.a,{href:"/terra-application/pull/343/application/terra-application/components/application-base",children:"ApplicationBase"})," has access to the\napplication's translated strings. Please review Terra's ",(0,o.jsx)(e.a,{href:"https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/building-components-which-include-translations",children:"recommended consumption guides"}),"\nfor more information."]}),"\n",(0,o.jsxs)(e.p,{children:["Additionally, ApplicateBase provides react-intl's APIs through the ",(0,o.jsx)(e.a,{href:"/terra-application/pull/343/application/terra-application/contexts/application-intl-context",children:"ApplicationIntlContext"}),"\nfor consumers seeking a modern Context implementation."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import React, { useContext } from 'react';\nimport { ApplicationIntlContext } from 'terra-application/lib/application-intl';\n\nconst ExampleComponent = () => {\n  const applicationIntl = useContext(ApplicationIntlContext);\n\n  return (\n    <div>\n      <p>This button requires multiple translated strings to render appropriately.</p>\n      <button\n        aria-label={applicationIntl.formatMessage({ id: 'example-component.button-label'})}\n      >\n        {applicationIntl.formatMessage({ id: 'example-component.button-text'})}\n      </button>\n    </div>\n  );\n});\n\nexport default ExampleComponent;\n"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["Accessing react-intl's ",(0,o.jsx)(e.a,{href:"https://reactjs.org/docs/legacy-context.html",children:"legacy context value"})," directly is ",(0,o.jsx)(e.strong,{children:"not recommended"}),".\nThis API is deprecated and not provided by react-intl v3.x. Terra's recommended usage patterns are supported by versions 2.x and 3.x of react-intl."]}),"\n"]})]})}const s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,r.Z)({},(0,a.ah)(),n.components).wrapper;return e?(0,o.jsx)(e,(0,r.Z)({},n,{children:(0,o.jsx)(i,n)})):i(n)}},75251:(n,e,t)=>{var r=t(67294),o=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),e.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function p(n,e,t){var r,a={},p=null,c=null;for(r in void 0!==t&&(p=""+t),void 0!==e.key&&(p=""+e.key),void 0!==e.ref&&(c=e.ref),e)s.call(e,r)&&!l.hasOwnProperty(r)&&(a[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===a[r]&&(a[r]=e[r]);return{$$typeof:o,type:n,key:p,ref:c,props:a,_owner:i.current}}e.jsx=p,e.jsxs=p},85893:(n,e,t)=>{n.exports=t(75251)},87462:(n,e,t)=>{function r(){return r=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},r.apply(this,arguments)}t.d(e,{Z:()=>r})}}]);