/*! For license information please see 7860-f6ddde2519523c574071.js.LICENSE.txt */
"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[7860],{7860:(e,n,a)=>{a.r(n),a.d(n,{default:()=>c});var i=a(87462),t=a(85893),r=a(11151),o=a(67294),l=a(96862),s=function(e){var n=e.url;return o.createElement(l.Z,{src:"https://github.com/cerner/terra-application/tree/main/packages/terra-application",name:"terra-application",version:"1.55.0",url:n})};function p(e){var n=(0,i.Z)({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",code:"code",h3:"h3"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.h1,{id:"terra-application",children:"Terra Application"}),"\n",(0,t.jsx)(n.p,{children:"A React-based application framework from Cerner."}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install with ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/",children:"npmjs"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"npm install terra-application"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"why-create-an-application-framework",children:"Why create an application framework?"}),"\n",(0,t.jsx)(n.p,{children:"As we have developed web applications at Cerner we have found that there are many questions that must be answered at the outset of an application's development and that many of those questions have a common answer that can be provided by an application framework."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"How will this application provide accessible, consistent navigation?"}),"\n",(0,t.jsx)(n.li,{children:"When javascript errors in an highly composable application happen, how do we prevent the entire page from breaking?"}),"\n",(0,t.jsx)(n.li,{children:"How do we offer a consistent overlay experience?"}),"\n",(0,t.jsx)(n.li,{children:"How do we ensure modals are accessible and prevent multiple on the page at once? How can composable components flex between being presented as page content and modal content?"}),"\n",(0,t.jsx)(n.li,{children:"How can we prevent single page navigation while unsaved changes are present?"}),"\n",(0,t.jsx)(n.li,{children:"How does content get presented in a slide panel?"}),"\n",(0,t.jsx)(n.li,{children:"How do we enable responsive behavior in applications without sacrificing performance?"}),"\n",(0,t.jsx)(n.li,{children:"How do components provide a localized experience?"}),"\n",(0,t.jsx)(n.li,{children:"How do we theme highly composed applications?"}),"\n",(0,t.jsx)(n.li,{children:"How will this application consume existing components developed for other applications? How will interoperability be defined? How will dependencies be managed?"}),"\n",(0,t.jsx)(n.li,{children:"How will this application have a user experience that is consistent with that of other applications? How will that consistency be maintained over time?"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The terra-application framework seeks to answer these questions and simplify the process of maintaining web applications."}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Terra Application contains many components designed to help solve common web application problems."}),"\n",(0,t.jsx)(n.h3,{id:"application-base",children:"Application Base"}),"\n",(0,t.jsx)(n.p,{children:"The ApplicationBase component is the entrypoint into the Terra application framework. Applications must render ApplicationBase around their content to provide the content with ApplicationBase's features."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/components/application-base",children:"Application Base API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"application-navigation",children:"Application Navigation"}),"\n",(0,t.jsx)(n.p,{children:"Consistent navigation throughout Cerner applications helps provide a positive user experience by teaching users what to expect when interacting with applications. The ApplicationNavigation component provides a styled layout and controls used for navigating within an application."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/components/application-navigation",children:"Application Navigation API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"js-error-handling",children:"JS Error Handling"}),"\n",(0,t.jsxs)(n.p,{children:["Typically when a javascript error occurs in a web application, the entire page will be broken. Using ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/error-boundaries.html",children:"react error boundaries"}),", Terra provides a way to isolate the error to prevent the entire application from being taken down."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/components/application-error-boundary",children:"Application Error Boundary API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"overlays",children:"Overlays"}),"\n",(0,t.jsx)(n.p,{children:"Presenting overlays over content being loaded or saved to a server is a common application pattern. Terra provides an application overlay to overlay loading content, as well as an application overlay provider to redefine what portion of the page should be overlaid."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/components/application-loading-overlay",children:"Application Overlay API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/components/application-loading-overlay-provider",children:"Application Overlay Provider API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"status-views",children:"Status Views"}),"\n",(0,t.jsx)(n.p,{children:"Presenting status views to show the current state of the page is a common application pattern. Terra provides an application status view to present a status view over the content, as well as an application status view provider to redefine what portion of the page should be overlaid."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/components/application-status-overlay",children:"Application Status View API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/components/application-status-overlay-provider",children:"Application Status View Provider API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"notification-banners",children:"Notification Banners"}),"\n",(0,t.jsx)(n.p,{children:"Notification Banners are used to bring the user's attention to important displayed information. This common interface pattern requires strategic placement and ordering on the application screen to be effective. Terra Application provides banner management to align with these needs."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/components/notification-banner",children:"Notification Banners API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"modal-disclosure",children:"Modal disclosure"}),"\n",(0,t.jsx)(n.p,{children:"Presenting content within a modal is a common, yet tricky pattern. To help reduce this complexity Terra provides API's, through the disclosure manager, to present modal content."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/contexts/disclosure-manager-context",children:"Disclosure Manager API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"unsaved-changes",children:"Unsaved Changes"}),"\n",(0,t.jsx)(n.p,{children:"Unsaved form data is another common pattern. Terra provides the Navigation prompt to prevent navigating away from unsaved changes."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/components/navigation-prompt",children:"Navigation Prompt API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"slide-panel-disclosure",children:"Slide panel disclosure"}),"\n",(0,t.jsx)(n.p,{children:"Presenting content to a slide panel is less common, yet still tricky. Similar to modal manager we provide the disclosure manager api to disclose content to slide panels, as well as a slide panel manager to define the slide panel in the application."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/components/slide-panel-manager",children:"Slide Panel Manager"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/contexts/disclosure-manager-context",children:"Disclosure Manager API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"active-breakpoints",children:"Active Breakpoints"}),"\n",(0,t.jsx)(n.p,{children:"Many applications respond to the current active breakpoint to adjust for screen size. We provide the active breakpoint as a context to limit the number of component that listen to the browser resize event."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/contexts/active-breakpoint-context",children:"Active Breakpoint Context API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"internationalization",children:"Internationalization"}),"\n",(0,t.jsx)(n.p,{children:"Terra applications must work for many locales, The Application Intl Context provides access to the frameworks i18n APIs."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/contexts/application-intl-context",children:"Application Intl Context API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"theming",children:"Theming"}),"\n",(0,t.jsx)(n.p,{children:"Applications commonly switch between light and dark modes. Terra provides theme APIs to allow theming of custom components within a terra application."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/terra-application/pull/343/application/terra-application/contexts/theme-context",children:"Theme Context API"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"component-composition",children:"Component Composition"}),"\n",(0,t.jsx)(n.p,{children:"The framework provides a large number of features using React's Context APIs. An application built with the framework is guaranteed to have access to these framework features and reusable components can be developed with the assumption that the framework will provide them. Any components requiring the same major version of terra-application will be interoperable."}),"\n",(0,t.jsx)(n.p,{children:"The terra-application package brings all the required framework logic into a single location, resulting in a simplified dependency that is easy to manage across the suite of developed components."}),"\n",(0,t.jsx)(n.h3,{id:"ux-consistency",children:"UX Consistency"}),"\n",(0,t.jsx)(n.p,{children:"The framework utilizes the full suite of Terra's components to ensure visual consistency and accessibility for applications. The framework also provides simplified APIs for common design patterns like loading overlays, modals, and error view presentation to further promote consistency."})]})}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,i.Z)({},(0,r.ah)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i.Z)({},e,{children:(0,t.jsx)(p,e)})):p(e)}},96862:(e,n,a)=>{var i=a(64836);n.Z=void 0;var t=i(a(67294)),r=i(a(45697)),o=i(a(47166)),l=i(a(55138)),s=o.default.bind(l.default),p={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var n=e.src,a=e.name,i=e.url,r=e.version,o=t.default.createElement("a",{className:s("badge"),href:i||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},t.default.createElement("span",{className:s("badge-name")},i?"package":"npm"),t.default.createElement("span",{className:s("badge-version")},"v".concat(r))),l=n?t.default.createElement("a",{className:s("badge"),href:n},t.default.createElement("span",{className:s("badge-name")},"github"),t.default.createElement("span",{className:s("badge-version")},"source")):void 0;return t.default.createElement("div",{className:s("badge-container")},o,l)};c.propTypes=p;var d=c;n.Z=d},55138:(e,n,a)=>{a.r(n),a.d(n,{default:()=>i});const i={badge:"Badges-module__badge___mqZdQ","badge-container":"Badges-module__badge-container___Fuva8","badge-name":"Badges-module__badge-name___o7WE3","badge-version":"Badges-module__badge-version___4AQGw"}},75251:(e,n,a)=>{var i=a(67294),t=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;t=r("react.element"),n.Fragment=r("react.fragment")}var o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,a){var i,r={},p=null,c=null;for(i in void 0!==a&&(p=""+a),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,i)&&!s.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:t,type:e,key:p,ref:c,props:r,_owner:o.current}}n.jsx=p,n.jsxs=p},85893:(e,n,a)=>{e.exports=a(75251)},87462:(e,n,a)=>{function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},i.apply(this,arguments)}a.d(n,{Z:()=>i})}}]);