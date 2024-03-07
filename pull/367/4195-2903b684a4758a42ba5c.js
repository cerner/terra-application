"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[4195],{44195:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(58168),i=n(53986),o=(n(96540),n(36665)),p=["components"],r={},l="wrapper";function s(e){var t=e.components,n=(0,i.A)(e,p);return(0,o.mdx)(l,(0,a.A)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-to-manage-unsaved-changes"},"How To Manage Unsaved Changes"),(0,o.mdx)("p",null,"A typical application allows its users to navigate between different components to complete different workflows. However, sometimes the user has not completed their current work before attempting to navigate elsewhere in the application. In these cases, it makes sense to prevent that navigation until the user explicitly accepts that they are leaving the current workflow and may lose unsaved changes."),(0,o.mdx)("p",null,"Components that want to communicate the presence of their unsaved state to the framework can do so by rendering a ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/367/application/terra-application/components/navigation-prompt"},"NavigationPrompt")," component. When mounted, the NavigationPrompt will register itself with any and all ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/367/application/terra-application/components/navigation-prompt-checkpoint"},"NavigationPromptCheckpoints")," that are ancestors to it."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport NavigationPrompt from 'terra-application/lib/navigation-prompt';\n\nconst ExampleComponent = () => {\n  const [hasPendingState, setHasPendingState] = useState(false);\n\n  return (\n    <div>\n      <p>This component toggles between having and not having pending state.</p>\n      <p>\n        <button type=\"button\" onClick={() => { setHasPendingState(!hasPendingState); }}>\n          {hasPendingState ? 'Clear Pending State' : 'Set Pending State'}\n        </button>\n      </p>\n      {hasPendingState ? <NavigationPrompt description=\"ExampleComponent\" /> : undefined}\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n")),(0,o.mdx)("p",null,"Within ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application"),", the following components respond to the presence of NavigationPrompts:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/terra-application/pull/367/application/terra-application/components/application-base"},"ApplicationBase")," - The user will be prompted to accept or reject window unload events if NavigationPrompts have been renedered within the ApplicationBase's children."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/terra-application/pull/367/application/terra-application/components/modal-manager"},"ModalManager"),"/",(0,o.mdx)("a",{parentName:"li",href:"/terra-application/pull/367/application/terra-application/components/slide-panel-manager"},"SlidePanelManager")," - The user will be prompted to accept or reject disclosure dismissal if NavigationPrompts have been rendered within the disclosed component."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/terra-application/pull/367/application/terra-application/components/application-navigation"},"ApplicationNavigation")," - The user will be prompted to accept or reject primary navigation and Logout selections if NavigationPrompts have been rendered within the ApplicationNavigation's children.")),(0,o.mdx)("p",null,"While these are the provided integrations, any component that navigates between stateful components can implement a ",(0,o.mdx)("a",{parentName:"p",href:"/terra-application/pull/367/application/terra-application/components/navigation-prompt-checkpoint"},"NavigationPromptCheckpoint")," to utilize the same registration and prompting logic."))}s.isMDXComponent=!0},58168:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:()=>a})},53986:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{A:()=>a})}}]);