"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[9001],{19001:(n,e,o)=>{o.r(e),o.d(e,{default:()=>d});var a=o(87462),t=o(44925),r=(o(67294),o(81254)),l=["components"],i={},s="wrapper";function d(n){var e=n.components,o=(0,t.Z)(n,l);return(0,r.mdx)(s,(0,a.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"how-to-show-modal-content"},"How To Show Modal Content"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/355/application/terra-application/components/modal-manager"},"ModalManager")," should be used to manage modal content presentation."),(0,r.mdx)("p",null,"A ModalManager should be rendered around content that requires modal disclosure capabilities. Multiple components can be wrapped with a single\nModalManager; every wrapped component (and their descendents) will communicate with the same ModalManager instance through the\n",(0,r.mdx)("a",{parentName:"p",href:"/terra-application/pull/355/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext"),"."),(0,r.mdx)("p",null,"Components rendered within the ModalManager's modal will be able to access the same Contexts as the ModalManager itself.\nAdditional Context providers rendered within the ModalManager's children will not be available to the modal components."),(0,r.mdx)("p",null,"The rendering of a ModalManager is typically an application-level concern. However, additional ModalManagers may be rendered to re-establish\nthe contexts available to disclosed contents. Before rendering a ModalManager yourself, please ensure that the application isn't already providing\na ModalManager that suits your component's needs."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ApplicationBase from 'terra-application/lib/application-base';\nimport ModalManager from 'terra-application/lib/modal-manager';\n\nimport ComponentWithModal from './ComponentWithModal';\n\nconst ExampleApp = () => (\n  <ApplicationBase>\n    <ModalManager>\n      <ComponentWithModal />\n    </ModalManager>\n  </ApplicationBase>\n);\n\nexport default ExampleComponent;\n")),(0,r.mdx)("p",null,"Components rendered within a ModalManager should access the value provided by the DisclosureManagerContext. That value contains APIs used\nto communicate with the ModalManager and disclose additional content."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext } from 'react';\nimport { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';\n\nimport ModalContentComponent from './ModalContentComponent';\n\nconst ComponentWithModal = () => {\n  const disclosureManager = useContext(DisclosureManagerContext);\n\n  return (\n    <button\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'component-with-modal.modal-content',\n            component: <ModalContentComponent />,\n          },\n        });\n      }}\n    >\n      Show Modal\n    </button>\n  );\n};\n")),(0,r.mdx)("p",null,"Components that need more control over the presentation of the modal have access to additional APIs that are returned upon a successful disclosure."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext, useRef } from 'react';\nimport { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';\n\nimport ModalContentComponent from './ModalContentComponent';\n\nconst ComponentWithModal = () => {\n  const disclosureManager = useContext(DisclosureManagerContext);\n  const modalDismissRef = useRef();\n\n  return (\n    <button\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          size: 'large',\n          content: {\n            key: 'component-with-modal.modal-content',\n            component: (\n              <ModalContentComponent\n                onSubmit={() => {\n                  if (modalDismissRef.current) {\n                    modalDismissRef.current();\n                    modalDismissRef.current = undefined;\n                  }\n                }}\n              />\n            ),\n          },\n        }).then(({ dismissDisclosure }) => {\n          modalDismissRef.current = dismissDisclosure;\n        });\n      }}\n    >\n      Show Modal\n    </button>\n  );\n};\n")))}d.isMDXComponent=!0},87462:(n,e,o)=>{function a(){return a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},a.apply(this,arguments)}o.d(e,{Z:()=>a})},44925:(n,e,o)=>{function a(n,e){if(null==n)return{};var o,a,t=function(n,e){if(null==n)return{};var o,a,t={},r=Object.keys(n);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(t[o]=n[o]);return t}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}o.d(e,{Z:()=>a})}}]);