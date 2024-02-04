"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[6972],{76972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(45072),r=n(52822),o=(n(11504),n(69788)),d=n(20592),l=["components"],i={},p="wrapper";function s(e){var t=e.components,n=(0,r.c)(e,l);return(0,o.mdx)(p,(0,a.c)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(d.cp,{mdxType:"PropsTable"},(0,o.mdx)(d.WA,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(d.qe,{mdxType:"PropNameCell"},"children"),(0,o.mdx)(d.aI,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,o.mdx)(d.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(d._w,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(d.uC,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The components to be rendered in the body of the ModalManager. These components will receive the\ndisclosure capabilities through the DisclosureManger's context API."))),(0,o.mdx)(d.WA,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(d.qe,{mdxType:"PropNameCell"},"disclosureAccessory"),(0,o.mdx)(d.aI,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,o.mdx)(d.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(d._w,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(d.uC,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The component to render within the Modal above the disclosed content."))),(0,o.mdx)(d.WA,{key:"ROW3",mdxType:"Row"},(0,o.mdx)(d.qe,{mdxType:"PropNameCell"},"navigationPromptResolutionOptions"),(0,o.mdx)(d.aI,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,o.mdx)(d.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(d._w,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(d.uC,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The Object (or function that returns an Object) that specifies the messages\nused to prompt the user when disclosure dismissal occurs when pending state\nis present. If not provided, the default messaging will be used.")))))}s.isMDXComponent=!0;var m=["components"],c={},u="wrapper";function h(e){var t=e.components,n=(0,r.c)(e,m);return(0,o.mdx)(u,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"modalmanager"},"ModalManager"),(0,o.mdx)("p",null,"The ModalManager exposes its children to modal presentation APIs through the\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext"),"."),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ModalManager from 'terra-application/lib/modal-manager';\n")),(0,o.mdx)("h2",{id:"props"},"Props"),(0,o.mdx)(s,{mdxType:"PropsTable"}),(0,o.mdx)("h2",{id:"features"},"Features"),(0,o.mdx)("h3",{id:"exception-handling"},"Exception Handling"),(0,o.mdx)("p",null,"ModalManager renders an ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-error-boundary"},"ApplicationErrorBoundary"),"\naround its disclosed components. If the disclosed components throw exceptions during React lifecycle functions, ModalManager will\ncatch the exceptions and render a styled error component in place of the children."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationErrorBoundary below their modal header to keep the\nheader controls for modal dismissal exposed.")),(0,o.mdx)("h3",{id:"loading-overlays"},"Loading Overlays"),(0,o.mdx)("p",null,"ModalManager renders an ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-loading-overlay-provider"},"ApplicationLoadingOverlayProvider"),"\naround its disclosed components. Any ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-loading-overlay"},"ApplicationLoadingOverlay"),"\ncomponents rendered by children will cause a loading overlay to be rendered over the modal's contents."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationLoadingOverlayProvider below their modal header to keep\nthe header controls for modal dismissal exposed while the overlay is active.")),(0,o.mdx)("h3",{id:"status-views"},"Status Views"),(0,o.mdx)("p",null,"ModalManager renders an ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-status-overlay-provider"},"ApplicationStatusOverlayProvider"),"\naround its disclosed components. Any ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/application-status-overlay"},"ApplicationStatusOverlay"),"\ncomponents rendered by children will cause a status view to be rendered over the modal's contents."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"If the disclosed modal contents do not utilize the DisclosureManagerHeaderAdapter and render their own modal header instead,\nit is recommended that those components render an additional ApplicationStatusOverlayProvider below their modal header to keep\nthe header controls for modal dismissal exposed while the status view is active.")),(0,o.mdx)("h3",{id:"unsaved-changes"},"Unsaved Changes"),(0,o.mdx)("p",null,"ModalManager monitors its disclosed content for the presence of rendered ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/navigation-prompt"},"NavigationPrompts"),"\nwithin its disclosed content. ModalManager will ensure that the user is prompted prior to dismissing the presented modal if any\n",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/components/navigation-prompt"},"NavigationPrompts")," are rendered at the time of the dismissal request."),(0,o.mdx)("h2",{id:"details"},"Details"),(0,o.mdx)("h3",{id:"implementation-requirements"},"Implementation Requirements"),(0,o.mdx)("p",null,"The ModalManager utilizes the ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext")," to manage disclosure requests."),(0,o.mdx)("p",null,"The ModalManager responds to ",(0,o.mdx)("inlineCode",{parentName:"p"},'"modal"')," disclosure type requests. Components that wish to disclose content using the ModalManager\nshould provide a preferred type of ",(0,o.mdx)("inlineCode",{parentName:"p"},'"modal"'),"."),(0,o.mdx)("h3",{id:"disclosuremanagerheaderadapter-support"},"DisclosureManagerHeaderAdapter Support"),(0,o.mdx)("p",null,"If a component disclosed by the ModalManager renders a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will render an ActionHeader\nand provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component\ncan use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to inject its own title and CollapsibleButtonView into the ActionHeader."),(0,o.mdx)("p",null,"If the disclosed component does ",(0,o.mdx)("strong",{parentName:"p"},"not")," render a ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will ",(0,o.mdx)("strong",{parentName:"p"},"not")," render an ActionHeader itself.\nIn this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering\nthe appropriate controls to navigate the disclosure stack."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},"Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the ModalManager.\nIn a future major release, the ModalManager will ",(0,o.mdx)("strong",{parentName:"p"},"always")," render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.")),(0,o.mdx)("h3",{id:"disclosure-accessory"},"Disclosure Accessory"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"disclosureAccessory")," prop allows consumers of the ModalManager to render a static component above the disclosed modal content.\nThe provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily\nprovide additional context to every disclosed component. This component is provided once to the ModalManager instance, not on a per-disclosure basis,\nand each component in the disclosure stack will be decorated with the same accessory component."),(0,o.mdx)("h3",{id:"static-height-vs-dynamic-height"},"Static Height vs. Dynamic Height"),(0,o.mdx)("p",null,"ModalManager was intentionally designed to have static preset heights in order to work in conjunction with Terra content that can adjust responsively using the ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/responsive-element/about"},"terra-responsive-element"),", as well as any conditionally positioned UI elements like a ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-framework-docs/popup/popup"},"popup"),", ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/form-select/multi-select"},"multi-select dropdown"),", or ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-framework-docs/date-picker/date-picker"},"date picker"),". Having static preset heights allows for Terra to quickly present modal content without requiring extensive browser multiple-render drawing calculations that results in poor application performance."),(0,o.mdx)("p",null,"Some may be used to other libraries that commonly offer simple modals that can adjust the modal's height dynamically based on the content provided, but those situations only work well for when content is designed for a single presentation (i.e. is not responsive), and ones that have no higher z-index layers that require position calculation relative to the base content (i.e. no popups with pointers)."),(0,o.mdx)("h3",{id:"creating-modal-content"},"Creating Modal Content"),(0,o.mdx)("p",null,"The ModalManager is intended for content which has regularly composed & designed layouts, including responsive variations. It is very grid-based, so it comes with standard heights and widths to accommodate the highly-structured assembly of content."),(0,o.mdx)("p",null,"When the preset size of the modal's width or height is ",(0,o.mdx)("em",{parentName:"p"},"larger"),' than the available device-screen or viewport (e.g. if you shrink down your window smaller than what the modal size was set to be), at that point the ModalManager will then "stick" near to the edge of the viewport as it\'s outer size and not flow offscreen. It is recommended to build the inner content with a responsive design, so when the modal is smaller than it’s preset size, the content will then know to adapt and adjust to alternate layouts accordingly to the new maximum available height and/or width as the outer size. If content is not built responsively, or if you intentionally build the content to overflow in one direction, it will then force scrolling inside of the modal. Scrolling is perfectly acceptable, but should be limited to one direction, preferably vertical-only.'),(0,o.mdx)("p",null,'The key thing to remember is that the ModalManager, similar to a page layout, works based on the "',(0,o.mdx)("strong",{parentName:"p"},"outside-in"),'" layout principal, which allows the ',(0,o.mdx)("em",{parentName:"p"},"inside")," content to respond when the ",(0,o.mdx)("em",{parentName:"p"},"outside"),' container changes in size.  The ModalManager unfortunately cannot simultaneously also follow the "',(0,o.mdx)("strong",{parentName:"p"},"inside-out"),'" layout principal, which would mean the ',(0,o.mdx)("em",{parentName:"p"},"outside")," container height grows or shrinks based on the ",(0,o.mdx)("em",{parentName:"p"},"inside")," content size.  The reason is that the inside content cannot dictate what size it would like to be at the same as as listening for when it no longer has any space remaining, which is required in order to be able to change itself to a new layout, and cannot do both (or at least not without attempting many redraws). Designers are encouraged to create structured and grid based layout designs that work well for the modal layout size options that best utilize space, similar to designing base pages within applications."),(0,o.mdx)("h3",{id:"sizing-height--width-options"},"Sizing: Height & Width Options"),(0,o.mdx)("p",null,"The ModalManager has two methods of setting the preferred modal height & width. The first method is by choosing from a list of easy shorthand size options that combine a predefined height and width pair, which works standard application screen ratios. The second method is more advanced and provides the ability to choose from a list of grid-based dimensions to set the height and width independently. ",(0,o.mdx)("em",{parentName:"p"},"(Note: all values used for ModalManager are true pixels and not rem, relative em units.)")),(0,o.mdx)("p",null,"Using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"size")," prop within the ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/contexts/disclosure-manager-context"},"disclose argument API")," allows the consumer to provide a simpler implementation to set the modal preferred dimension, and typically might be used for common application disclosures of similarly sized content. ",(0,o.mdx)("em",{parentName:"p"},"(Note: ",(0,o.mdx)("inlineCode",{parentName:"em"},"size")," should not be provided if ",(0,o.mdx)("inlineCode",{parentName:"em"},"dimensions")," are specified.)")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"th"},"size")," prop: Shorthand options"),(0,o.mdx)("th",{parentName:"tr",align:null},"pixel dimensions"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"tiny")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 320px, h: 240px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"small")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 640px, h: 420px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"medium")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 960px, h: 600px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("strong",{parentName:"td"},"default")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 1120px, h: 690px ",(0,o.mdx)("em",{parentName:"td"},"(modal size if no other details are provided)"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"large")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 1280px, h: 870px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"huge")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 1600px, h: 960px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"fullscreen")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: screen width less ~10px, h: screen height less ~10px")))),(0,o.mdx)("p",null,"For application content that needs more specific dimensional control of modal sizes, using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"dimension")," prop within the ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/application/terra-application/contexts/disclosure-manager-context"},"disclose argument API")," will be the implementation to choose. Consumers supply a simple object that contains both height wand width values: ",(0,o.mdx)("inlineCode",{parentName:"p"},"{ height: '480', width: '600' }"),". ",(0,o.mdx)("em",{parentName:"p"},"(Note: ",(0,o.mdx)("inlineCode",{parentName:"em"},"dimensions")," should not be provided if a ",(0,o.mdx)("inlineCode",{parentName:"em"},"size")," is specified.)")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"th"},"dimensions")," prop: Width options"),(0,o.mdx)("th",{parentName:"tr",align:null},"pixel dimensions"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '320'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 320px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '480'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 480px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '560'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 560px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '640'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 640px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '800'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 800px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '960'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 960px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '1120'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 1120px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '1280'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 1280px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '1440'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 1440px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '1600'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 1600px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '1760'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 1760px, h: --")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"width: '1920'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: 1920px, h: --")))),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"th"},"dimensions")," prop: Height options"),(0,o.mdx)("th",{parentName:"tr",align:null},"pixel dimensions"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"height: '240'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: --, h: 240px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"height: '420'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: --, h: 420px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"height: '600'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: --, h: 600px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"height: '690'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: --, h: 690px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"height: '780'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: --, h: 780px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"height: '870'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: --, h: 870px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"height: '960'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: --, h: 960px")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"height: '1140'")),(0,o.mdx)("td",{parentName:"tr",align:null},"w: --, h: 1140px")))),(0,o.mdx)("h3",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport ModalManager, { disclosureType } from 'terra-application/lib/modal-manager';\nimport { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst ModalComponentB = () => (\n  <React.Fragment>\n    <DisclosureManagerHeaderAdapter\n      title=\"Modal Component B\"\n    />\n    <p>I am ModalComponentB!</p>\n  </React.Fragment>\n);\n\nconst ModalComponentA = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <div>\n      <DisclosureManagerHeaderAdapter\n        title=\"Modal Component A\"\n        collapsibleMenuView={<CollapsibleMenuView />}\n      />\n      <p>I am ModalComponentA!</p>\n      <Button\n        text=\"Disclose ModalComponentB\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: 'modal',\n            size: 'large',\n            content: {\n              key: 'modal-component-b-instance',\n              component: <ModalComponentB />\n            }\n          });\n        }}\n      />\n    </div>\n  );\n}\n\nconst MyContentComponent = withDisclosureManager(({ disclosureManager }) => (\n  <div>\n    <p>I am MyContentComponent!</p>\n    <Button\n      text=\"Disclose ModalComponentA\"\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'modal-component-a-instance',\n            component: <ModalComponentA />\n          }\n        });\n      }}\n    />\n  </div>\n));\n\nMyContentComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n}\n\nconst MyModalManagerComponent = () => (\n  <ModalManager\n    disclosureAccessory={<div>Disclosure Accessory</div>}\n  >\n    <MyContentComponent />\n  </ModalManager>\n);\n")))}h.isMDXComponent=!0},20592:(e,t,n)=>{var a=n(22411),r=n(59848);t.Ke=t.qe=t.uC=t._w=void 0,Object.defineProperty(t,"WA",{enumerable:!0,get:function(){return p.Row}}),t.cp=t.aI=void 0;var o=c(n(11504)),d=a(n(3268)),l=a(n(74824)),i=n(47576),p=c(n(52984)),s=a(n(50031));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var l=o?Object.getOwnPropertyDescriptor(e,d):null;l&&(l.get||l.set)?Object.defineProperty(a,d,l):a[d]=e[d]}return a.default=e,n&&n.set(e,a),a}var u=l.default.bind(s.default),h={children:d.default.node},x={isRequired:d.default.bool};(t.qe=function(e){var t=e.children;return o.default.createElement(p.Cell,{className:u("bold")},t)}).propTypes=h,(t.aI=function(e){var t=e.children;return o.default.createElement(p.Cell,{className:u("code-block-override")},t)}).propTypes=h,(t.Ke=function(e){var t=e.isRequired;return o.default.createElement(p.Cell,{className:u([t?["required"]:[]])},t?"required":"optional")}).propTypes=x,(t._w=function(e){var t=e.children;return o.default.createElement(p.Cell,{className:u("code-block-override")},t)}).propTypes=h,(t.uC=function(e){var t=e.children;return o.default.createElement(p.Cell,null,t)}).propTypes=h;var f=function(e){var t=e.children,n=(0,o.useContext)(i.ThemeContext);return o.default.createElement(p.default,{paddingStyle:"compact",className:u("table",n.className)},o.default.createElement(p.Header,{className:u("header")},o.default.createElement(p.HeaderCell,null,"Prop"),o.default.createElement(p.HeaderCell,null,"Type"),o.default.createElement(p.HeaderCell,null,"Required"),o.default.createElement(p.HeaderCell,null,"Default"),o.default.createElement(p.HeaderCell,null,"Description")),o.default.createElement(p.Body,null,t))};f.propTypes=h;t.cp=f},62008:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},50031:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___dcxNv","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___SuGon",bold:"PropsTable-module__bold___MKqSx",table:"PropsTable-module__table___-hq3I",required:"PropsTable-module__required___KqgCN","code-block-override":"PropsTable-module__code-block-override___R4XGf"}},29988:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(11504)),r=s(n(3268)),o=s(n(82084)),d=s(n(74824)),l=s(n(99640)),i=s(n(62008)),p=["children","disableStripes","paddingStyle"];function s(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=d.default.bind(i.default),h={children:r.default.node.isRequired,disableStripes:r.default.bool,paddingStyle:r.default.oneOf(["none","standard","compact"])},x=function(e){var t=e.children,n=e.disableStripes,r=e.paddingStyle,d=c(e,p),i=a.default.useContext(l.default),s=(0,o.default)(u("table",{striped:!n},{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},i.className),d.className);return a.default.createElement("table",m({},d,{className:s}),t)};x.propTypes=h,x.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=x},71352:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(11504)),r=d(n(3268)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={children:r.default.node},p=function(e){var t=e.children,n=l(e,o);return a.default.createElement("tbody",n,t)};p.propTypes=i,p.defaultProps={children:[]};t.default=p},1320:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(11504)),r=d(n(3268)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={children:r.default.node},p=function(e){var t=e.children,n=l(e,o);return a.default.createElement("td",n,t)};p.propTypes=i,p.defaultProps={children:[]};t.default=p},22224:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(11504)),r=l(n(3268)),o=l(n(52684)),d=["children"];function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={children:r.default.node},s=function(e){var t=e.children,n=i(e,d);return a.default.createElement("thead",n,a.default.createElement("tr",null,o.default.addScope(t,"col")))};s.propTypes=p,s.defaultProps={children:[]};t.default=s},61144:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(11504)),r=d(n(3268)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={children:r.default.node},p=function(e){var t=e.children,n=l(e,o);return a.default.createElement("th",n,t)};p.propTypes=i,p.defaultProps={children:[]};t.default=p},52399:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(11504)),r=p(n(3268)),o=p(n(74824)),d=p(n(62008)),l=p(n(52684)),i=["children"];function p(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.default.bind(d.default),u={children:r.default.node},h=function(e){var t=e.children,n=m(e,i),r=c(["row"]);return a.default.createElement("tr",s({},n,{className:n.className?"".concat(r," ").concat(n.className):r}),l.default.addScope(t,"row"))};h.propTypes=u,h.defaultProps={children:[]};t.default=h},52684:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(11504))&&a.__esModule?a:{default:a};var o={addScope:function(e,t){var n=[];return r.default.Children.forEach(e,(function(e){n.push(r.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=o},52984:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var a=p(n(29988)),r=p(n(71352)),o=p(n(52399)),d=p(n(1320)),l=p(n(22224)),i=p(n(61144));function p(e){return e&&e.__esModule?e:{default:e}}t.default=a.default},45072:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{c:()=>a})},52822:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{c:()=>a})}}]);