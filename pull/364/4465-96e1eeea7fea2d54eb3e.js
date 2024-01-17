"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[4465],{24465:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var n=t(87462),i=t(44925),o=t(67294),r=t(81254),l=t(96862),p=function(e){var a=e.url;return o.createElement(l.Z,{src:"https://github.com/cerner/terra-application/tree/main/packages/terra-application",name:"terra-application",version:"1.57.0",url:a})},s=["components"],c={},m="wrapper";function d(e){var a=e.components,t=(0,i.Z)(e,s);return(0,r.mdx)(m,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(p,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-application"},"Terra Application"),(0,r.mdx)("p",null,"A React-based application framework from Cerner."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-application"))))),(0,r.mdx)("h2",{id:"why-create-an-application-framework"},"Why create an application framework?"),(0,r.mdx)("p",null,"As we have developed web applications at Cerner we have found that there are many questions that must be answered at the outset of an application's development and that many of those questions have a common answer that can be provided by an application framework."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"How will this application provide accessible, consistent navigation?"),(0,r.mdx)("li",{parentName:"ul"},"When javascript errors in an highly composable application happen, how do we prevent the entire page from breaking?"),(0,r.mdx)("li",{parentName:"ul"},"How do we offer a consistent overlay experience?"),(0,r.mdx)("li",{parentName:"ul"},"How do we ensure modals are accessible and prevent multiple on the page at once? How can composable components flex between being presented as page content and modal content?"),(0,r.mdx)("li",{parentName:"ul"},"How can we prevent single page navigation while unsaved changes are present?"),(0,r.mdx)("li",{parentName:"ul"},"How does content get presented in a slide panel?"),(0,r.mdx)("li",{parentName:"ul"},"How do we enable responsive behavior in applications without sacrificing performance?"),(0,r.mdx)("li",{parentName:"ul"},"How do components provide a localized experience?"),(0,r.mdx)("li",{parentName:"ul"},"How do we theme highly composed applications?"),(0,r.mdx)("li",{parentName:"ul"},"How will this application consume existing components developed for other applications? How will interoperability be defined? How will dependencies be managed?"),(0,r.mdx)("li",{parentName:"ul"},"How will this application have a user experience that is consistent with that of other applications? How will that consistency be maintained over time?")),(0,r.mdx)("p",null,"The terra-application framework seeks to answer these questions and simplify the process of maintaining web applications."),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"Terra Application contains many components designed to help solve common web application problems."),(0,r.mdx)("h3",{id:"application-base"},"Application Base"),(0,r.mdx)("p",null,"The ApplicationBase component is the entrypoint into the Terra application framework. Applications must render ApplicationBase around their content to provide the content with ApplicationBase's features."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/components/application-base"},"Application Base API"))),(0,r.mdx)("h3",{id:"application-navigation"},"Application Navigation"),(0,r.mdx)("p",null,"Consistent navigation throughout Cerner applications helps provide a positive user experience by teaching users what to expect when interacting with applications. The ApplicationNavigation component provides a styled layout and controls used for navigating within an application."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/components/application-navigation"},"Application Navigation API"))),(0,r.mdx)("h3",{id:"js-error-handling"},"JS Error Handling"),(0,r.mdx)("p",null,"Typically when a javascript error occurs in a web application, the entire page will be broken. Using ",(0,r.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"react error boundaries"),", Terra provides a way to isolate the error to prevent the entire application from being taken down."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/components/application-error-boundary"},"Application Error Boundary API"))),(0,r.mdx)("h3",{id:"overlays"},"Overlays"),(0,r.mdx)("p",null,"Presenting overlays over content being loaded or saved to a server is a common application pattern. Terra provides an application overlay to overlay loading content, as well as an application overlay provider to redefine what portion of the page should be overlaid."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/components/application-loading-overlay"},"Application Overlay API")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/components/application-loading-overlay-provider"},"Application Overlay Provider API"))),(0,r.mdx)("h3",{id:"status-views"},"Status Views"),(0,r.mdx)("p",null,"Presenting status views to show the current state of the page is a common application pattern. Terra provides an application status view to present a status view over the content, as well as an application status view provider to redefine what portion of the page should be overlaid."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/components/application-status-overlay"},"Application Status View API")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/components/application-status-overlay-provider"},"Application Status View Provider API"))),(0,r.mdx)("h3",{id:"notification-banners"},"Notification Banners"),(0,r.mdx)("p",null,"Notification Banners are used to bring the user's attention to important displayed information. This common interface pattern requires strategic placement and ordering on the application screen to be effective. Terra Application provides banner management to align with these needs."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/components/notification-banner"},"Notification Banners API"))),(0,r.mdx)("h3",{id:"modal-disclosure"},"Modal disclosure"),(0,r.mdx)("p",null,"Presenting content within a modal is a common, yet tricky pattern. To help reduce this complexity Terra provides API's, through the disclosure manager, to present modal content."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/contexts/disclosure-manager-context"},"Disclosure Manager API"))),(0,r.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),(0,r.mdx)("p",null,"Unsaved form data is another common pattern. Terra provides the Navigation prompt to prevent navigating away from unsaved changes."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/components/navigation-prompt"},"Navigation Prompt API"))),(0,r.mdx)("h3",{id:"slide-panel-disclosure"},"Slide panel disclosure"),(0,r.mdx)("p",null,"Presenting content to a slide panel is less common, yet still tricky. Similar to modal manager we provide the disclosure manager api to disclose content to slide panels, as well as a slide panel manager to define the slide panel in the application."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/components/slide-panel-manager"},"Slide Panel Manager")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/contexts/disclosure-manager-context"},"Disclosure Manager API"))),(0,r.mdx)("h3",{id:"active-breakpoints"},"Active Breakpoints"),(0,r.mdx)("p",null,"Many applications respond to the current active breakpoint to adjust for screen size. We provide the active breakpoint as a context to limit the number of component that listen to the browser resize event."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/contexts/active-breakpoint-context"},"Active Breakpoint Context API"))),(0,r.mdx)("h3",{id:"internationalization"},"Internationalization"),(0,r.mdx)("p",null,"Terra applications must work for many locales, The Application Intl Context provides access to the frameworks i18n APIs."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/contexts/application-intl-context"},"Application Intl Context API"))),(0,r.mdx)("h3",{id:"theming"},"Theming"),(0,r.mdx)("p",null,"Applications commonly switch between light and dark modes. Terra provides theme APIs to allow theming of custom components within a terra application."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/terra-application/pull/364/application/terra-application/contexts/theme-context"},"Theme Context API"))),(0,r.mdx)("h3",{id:"component-composition"},"Component Composition"),(0,r.mdx)("p",null,"The framework provides a large number of features using React's Context APIs. An application built with the framework is guaranteed to have access to these framework features and reusable components can be developed with the assumption that the framework will provide them. Any components requiring the same major version of terra-application will be interoperable."),(0,r.mdx)("p",null,"The terra-application package brings all the required framework logic into a single location, resulting in a simplified dependency that is easy to manage across the suite of developed components."),(0,r.mdx)("h3",{id:"ux-consistency"},"UX Consistency"),(0,r.mdx)("p",null,"The framework utilizes the full suite of Terra's components to ensure visual consistency and accessibility for applications. The framework also provides simplified APIs for common design patterns like loading overlays, modals, and error view presentation to further promote consistency."))}d.isMDXComponent=!0},96862:(e,a,t)=>{var n=t(64836);a.Z=void 0;var i=n(t(67294)),o=n(t(45697)),r=n(t(19845)),l=n(t(55138)),p=r.default.bind(l.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var a=e.src,t=e.name,n=e.url,o=e.version,r=i.default.createElement("a",{className:p("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},i.default.createElement("span",{className:p("badge-name")},n?"package":"npm"),i.default.createElement("span",{className:p("badge-version")},"v".concat(o))),l=a?i.default.createElement("a",{className:p("badge"),href:a},i.default.createElement("span",{className:p("badge-name")},"github"),i.default.createElement("span",{className:p("badge-version")},"source")):void 0;return i.default.createElement("div",{className:p("badge-container")},r,l)};c.propTypes=s;a.Z=c},55138:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});const n={badge:"Badges-module__badge___mqZdQ","badge-container":"Badges-module__badge-container___Fuva8","badge-name":"Badges-module__badge-name___o7WE3","badge-version":"Badges-module__badge-version___4AQGw"}},87462:(e,a,t)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(a,{Z:()=>n})},44925:(e,a,t)=>{function n(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(a,{Z:()=>n})}}]);