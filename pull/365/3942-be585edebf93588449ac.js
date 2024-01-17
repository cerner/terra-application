"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[3942],{40996:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),o=s(n(45697)),r=s(n(19845)),l=s(n(50026)),i=s(n(66983)),c=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.default.bind(i.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:o.default.string},v=function(e){var t=e.children,n=u(e,c),o=a.default.useContext(l.default),i=(0,r.default)(p(["button",o.className]),n.className);return a.default.createElement("button",d({},n,{type:"button",className:i,onBlur:m,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};v.propTypes=h;t.default=v},59278:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),o=c(n(45697)),r=c(n(19845)),l=c(n(50026)),i=c(n(30866));function c(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(i.default),d={ariaLevel:o.default.oneOf(["2","3","4","5","6"]),children:o.default.node,variant:o.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},u=function(e){var t=e.ariaLevel,n=e.variant,o=e.children,r=a.default.useContext(l.default);return a.default.createElement("div",{className:s("notice",n,r.className)},a.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:s("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(o,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};u.propTypes=d,u.defaultProps={ariaLevel:"2",variant:"important"};t.default=u},47306:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),o=d(n(45697)),r=d(n(93967)),l=d(n(19845)),i=d(n(50026)),c=d(n(42620)),s=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=l.default.bind(c.default),f={title:o.default.string},h=function(e){var t=e.title,n=p(e,s),o=a.default.useContext(i.default),l=(0,r.default)(m(["placeholder",o.className]),n.className),c=m(["inner"]);return a.default.createElement("div",u({},n,{className:l}),a.default.createElement("div",{className:c},a.default.createElement("p",{className:m("title")},t)))};h.propTypes=f,h.defaultProps={title:""};t.default=h},34261:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return o.default}});var a=l(n(59278)),o=l(n(47306)),r=l(n(40996));function l(e){return e&&e.__esModule?e:{default:e}}},43942:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(87462),o=n(44925),r=n(67294),l=n(81254),i=n(34261),c=n(4728),s=["components"],d={};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport classNames from 'classnames/bind';\nimport ApplicationNavigation, {\n  ApplicationNavigationActionsContext,\n} from 'terra-application/lib/application-navigation';\nimport { WorkspaceContent, WorkspaceContext } from 'terra-application/lib/workspace';\nimport NotificationBanner from 'terra-application/lib/notification-banner';\nimport Button from 'terra-button';\nimport Toolbar from 'terra-toolbar';\n\nimport styles from './WorkspaceContentHowToExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst MyContent1 = () => {\n  const { isActive } = React.useContext(WorkspaceContext);\n\n  React.useEffect(() => {\n    if (isActive) {\n      // add listeners\n\n      return () => {\n        // remove listeners\n      };\n    }\n\n    return undefined;\n  }, [isActive]);\n\n  return (\n    <WorkspaceContent\n      toolbar={(\n        <Toolbar>\n          <Button text=\"Action 1\" onClick={() => {}} />\n          <Button text=\"Action 2\" onClick={() => {}} />\n        </Toolbar>\n      )}\n    >\n      <div>\n        <p>Example Content 1</p>\n      </div>\n    </WorkspaceContent>\n  );\n};\n\nconst MyContent2 = () => {\n  const [showAlertBanner, setShowAlertBanner] = React.useState(false);\n  const [isLoading, setIsLoading] = React.useState(false);\n  const [hasNoResults, setHasNoResults] = React.useState(false);\n\n  return (\n    <WorkspaceContent\n      activityOverlay={isLoading ? (\n        <WorkspaceContent.ActivityOverlay variant=\"loading\" />\n      ) : undefined}\n      statusOverlay={hasNoResults ? (\n        <WorkspaceContent.StatusOverlay variant=\"no-matching-results\" />\n      ) : undefined}\n    >\n      <div>\n        <p>Example Content 2</p>\n        <button type=\"button\" onClick={() => { setShowAlertBanner(true); }}>Show Alert Banner</button>\n        <button type=\"button\" onClick={() => { setIsLoading(true); }}>Show Activity Overlay</button>\n        <button type=\"button\" onClick={() => { setHasNoResults(true); }}>Show Status Overlay</button>\n      </div>\n      {showAlertBanner && (\n        <NotificationBanner\n          variant=\"hazard-high\"\n          id=\"my-component-notification-id\"\n          onRequestClose={() => setShowAlertBanner(false)}\n        />\n      )}\n    </WorkspaceContent>\n  );\n};\n\nMyContent2.labelTranslationId = 'myNamespace.myContent2.label';\n\nconst WorkspaceContentHowToExample = () => {\n  const [activeNavigationItem, setActiveNavigationItem] = useState('page_1');\n\n  const workspace = (\n    <ApplicationNavigation.Workspace\n      id=\"application-workspace-example\"\n      initialActiveItemKey=\"item-1\"\n      initialSize={{ scale: 0.5 }}\n      initialIsOpen\n    >\n      <ApplicationNavigation.Workspace.Item\n        itemKey=\"item-1\"\n        label=\"Item 1\"\n        render={() => <MyContent1 />}\n      />\n      <ApplicationNavigation.Workspace.Item\n        itemKey=\"item-2\"\n        label=\"Item 2\"\n        render={() => <MyContent2 />}\n      />\n    </ApplicationNavigation.Workspace>\n  );\n\n  return (\n    <div className={cx('example-container')}>\n      <ApplicationNavigation\n        titleConfig={{\n          title: 'Create Workspace Content ',\n          headline: 'How To',\n        }}\n        userConfig={{\n          name: 'Example User',\n          initials: 'EU',\n        }}\n        navigationItems={[{\n          key: 'page_1',\n          text: 'Page 1',\n        }, {\n          key: 'page_2',\n          text: 'Page 2',\n        }, {\n          key: 'page_3',\n          text: 'Page 3',\n        }]}\n        activeNavigationItemKey={activeNavigationItem}\n        onSelectNavigationItem={(key) => { setActiveNavigationItem(key); }}\n        workspace={workspace}\n      >\n        <ApplicationNavigationActionsContext.Consumer>\n          {({ actions = [] }) => (\n            <div className={cx('page-content')}>\n              <p>\n                Example Content for\n                {' '}\n                {activeNavigationItem}\n              </p>\n              <p>\n                Layout Actions:\n                {' '}\n                {actions.map(action => (\n                  <button\n                    key={action.key}\n                    type=\"button\"\n                    onClick={action.onSelect}\n                    aria-label={action.label}\n                  >\n                    {action.icon}\n                  </button>\n                ))}\n              </p>\n            </div>\n          )}\n        </ApplicationNavigationActionsContext.Consumer>\n      </ApplicationNavigation>\n    </div>\n  );\n};\n\nexport default WorkspaceContentHowToExample;\n\n")))}u.isMDXComponent=!0;var p=n(82778),m=["components"],f={};function h(e){var t=e.components,n=(0,o.Z)(e,m);return(0,l.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .example-container {\n    height: 400px;\n  }\n\n  .page-content,\n  .workspace-content {\n    padding: 1rem;\n  }\n}\n\n")))}h.isMDXComponent=!0;const v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Workspace Content How To Example",description:n,example:r.createElement(c.Z,null),exampleCssSrc:r.createElement(h,null),exampleSrc:r.createElement(u,null),isExpanded:a})};var y=["components"],_={},b="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,y);return(0,l.mdx)(b,(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"how-to-create-workspace-content"},"How To Create Workspace Content"),(0,l.mdx)("p",null,"This guide demonstrates the recommended approach for creating a component to be presented within a Workspace."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("p",null,"This guide will walk through structure, exports, and construction of a stand-alone workspace content component."),(0,l.mdx)("p",null,"Consumers of the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/365/application/terra-application/components/application-navigation"},"ApplicationNavigation")," component are responsible for defining the overall structure of its workspace. A typical implementation will look something like this:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ApplicationNavigation from \'terra-application/lib/application-navigation\';\n\nconst MyContent1 = () => {...};\nconst MyContent2 = () => {...};\n\nconst WorkspaceContentHowToExample = () => (\n  <ApplicationNavigation\n    workspace={(\n      <ApplicationNavigation.Workspace\n        id="application-workspace-example"\n        initialActiveItemKey="item-1"\n        initialSize={{ scale: 0.5 }}\n        initialIsOpen\n      >\n        <ApplicationNavigation.Workspace.Item\n          itemKey="item-1"\n          label="Item 1"\n          render={() => <MyContent1 />}\n        />\n        <ApplicationNavigation.Workspace.Item\n          itemKey="item-2"\n          label="Item 2"\n          render={() => <MyContent2 />}\n        />\n      </ApplicationNavigation.Workspace>\n    )}\n  />\n);\n\nexport default WorkspaceContentHowToExample;\n')),(0,l.mdx)("p",null,"We will be focusing on creating the content rendered by the Workspace items, in this example ",(0,l.mdx)("inlineCode",{parentName:"p"},"MyContent1")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"MyContent2"),"."),(0,l.mdx)("h2",{id:"introducing-the-workspacecontent-component"},"Introducing the WorkspaceContent Component"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/365/application/terra-application/components/workspace-content"},"WorkspaceContent")," component is essential for integrating into the workspace. It provides the necessary UI and API hooks to present content consistently in the workspace ecosystem. "),(0,l.mdx)(i.Notice,{variant:"caution",ariaLevel:"3",mdxType:"Notice"},(0,l.mdx)("p",null,"Components rendered within a workspace ",(0,l.mdx)("em",{parentName:"p"},"must")," render a ",(0,l.mdx)("inlineCode",{parentName:"p"},"WorkspaceContent")," component. Failure to do so will result in inconsistent and dysfunctional behavior."),(0,l.mdx)("p",null,"Similarly, only a single WorkspaceContent component should be rendered within any given workspace item. Nested implementations are not supported.")),(0,l.mdx)("h2",{id:"creating-mycontent1"},"Creating MyContent1"),(0,l.mdx)("p",null,"For MyContent1, we will start with a basic implementation of the WorkspaceContent component."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { WorkspaceContent } from 'terra-application/lib/workspace';\n\nconst MyContent1 = () => {\n  return (\n    <WorkspaceContent>\n      <div>\n        <p>Example Content 1</p>\n      </div>\n    </WorkspaceContent>\n  );\n};\n\nMyContent1.labelTranslationId = 'myNamespace.myContent1.label';\n\nexport default MyContent1;\n")),(0,l.mdx)("p",null,"With its most basic implementation, the WorkspaceContent implementation requires no props. Private communication with its parent Workspace ensures the content is rendered appropriately. "),(0,l.mdx)("p",null,"WorkspaceContent can support any number of children of varying complexity. The main rules to follow for children are:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"They should be laid out as block-level elements. WorkspaceContent provides its own overflow handling that should not be overwritten."),(0,l.mdx)("li",{parentName:"ol"},"They should not attempt any absolute or fixed positioning that would otherwise interfere with the existing header region within WorkspaceContent.")),(0,l.mdx)("p",null,"With this, you have a fully functional content component that can be rendered within a workspace. The following sections will demonstrate how additional properties and APIs can be utilized to build more complex implementations."),(0,l.mdx)(i.Notice,{ariaLevel:"3",mdxType:"Notice"},(0,l.mdx)("p",null,"Workspace content components that wish to maintain ownership over their labeling in the constructed workspace should export the label's associated translation identifier alongside their component. Consumers of the content component can use that id to look up the appropriate label strings."),(0,l.mdx)("p",null,"Typically, this is done with a static property named ",(0,l.mdx)("inlineCode",{parentName:"p"},"labelTranslationId")," on the component itself. The examples throughout demonstrate this pattern.")),(0,l.mdx)("h2",{id:"adding-visibility-detection-to-mycontent1"},"Adding Visibility Detection to MyContent1"),(0,l.mdx)("p",null,"WorkspaceContent components that are not a child of the currently active item will remain mounted. However, they will be removed from the DOM to limit the overall document size. Any dependent logic or listeners that expect to be on the DOM need to be disabled or provided for when no longer on the DOM. In order to facilitate this, the WorkspaceContext provides an ",(0,l.mdx)("inlineCode",{parentName:"p"},"isActive")," value that will change when the item associated to the WorkspaceContent component activates/deactivates."),(0,l.mdx)("p",null,"Below is an example using hooks to retrieve the ",(0,l.mdx)("inlineCode",{parentName:"p"},"isActive")," value."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { WorkspaceContent, WorkspaceContext } from 'terra-application/lib/workspace';\n\nconst MyContent1 = () => {\n  const { isActive } = React.useContext(WorkspaceContext);\n\n  React.useEffect(() => {\n    if (isActive) {\n      // add listeners\n\n      return () => {\n        // remove listeners\n      }\n    }\n  }, [isActive]);\n\n  return (\n    <WorkspaceContent>\n      <div>\n        <p>Example Content 1</p>\n      </div>\n    </WorkspaceContent>\n  );\n};\n\nexport default MyContent1;\n")),(0,l.mdx)("h2",{id:"adding-a-toolbar-to-mycontent1"},"Adding a Toolbar to MyContent1"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"toolbar")," prop can be used to render a styled toolbar component within the WorkspaceContent component. This toolbar is rendered within the component's fixed header region and will not scroll along with content provided as children. "),(0,l.mdx)(i.Notice,{variant:"ux-recommendation",ariaLevel:"3",mdxType:"Notice"},(0,l.mdx)("p",null,"The Toolbar and Button components, provided by the terra-toolbar and terra-button packages, should be used as ",(0,l.mdx)("inlineCode",{parentName:"p"},"toolbar")," content.")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Toolbar from 'terra-toolbar';\nimport Button from 'terra-button';\nimport { WorkspaceContent, WorkspaceContext } from 'terra-application/lib/workspace';\n\nconst MyContent1 = () => {\n  const { isActive } = React.useContext(WorkspaceContext);\n\n  React.useEffect(() => {\n    if (isActive) {\n      // add listeners\n\n      return () => {\n        // remove listeners\n      }\n    }\n  }, [isActive]);\n\n  return (\n    <WorkspaceContent\n      toolbar={(\n        <Toolbar>\n          <Button text=\"Action 1\" onClick={() => {}} />\n          <Button text=\"Action 2\" onClick={() => {}} />\n        </Toolbar>\n      )}\n    >\n      <div>\n        <p>Example Content 1</p>\n      </div>\n    </WorkspaceContent>\n  );\n};\n\nexport default MyContent1;\n")),(0,l.mdx)("h2",{id:"creating-mycontent2"},"Creating MyContent2"),(0,l.mdx)("p",null,"We will create MyContent2 with the same basic implementation we started with for MyContent1."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { WorkspaceContent } from 'terra-application/lib/workspace';\n\nconst MyContent2 = () => {\n  return (\n    <WorkspaceContent>\n      <div>\n        <p>Example Content 2</p>\n      </div>\n    </WorkspaceContent>\n  );\n};\n\nMyContent2.labelTranslationId = 'myNamespace.myContent2.label';\n\nexport default MyContent2;\n")),(0,l.mdx)("h2",{id:"adding-notificationbanners-to-mycontent2"},"Adding NotificationBanners to MyContent2"),(0,l.mdx)("p",null,"Each WorkspaceContent component provides a region for rendering notification banners. To render a notification banner, a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-application/pull/365/application/terra-application/components/notification-banner"},"NotificationBanner")," must be rendered as a child of the WorkspaceContent component. Any number of banners may be rendered, but too many may impact the user experience."),(0,l.mdx)("p",null,"The banners are rendered within the component's fixed header region and will not scroll along with content provided as children. "),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { WorkspaceContent } from 'terra-application/lib/workspace';\nimport NotificationBanner from 'terra-application/lib/notification-banner';\n\nconst MyContent2 = () => {\n  const [showAlertBanner, setShowAlertBanner] = useState(false);\n\n  return (\n    <WorkspaceContent>\n      <div>\n        <p>Example Content 2</p>\n        <button type=\"button\" onClick={() => { setShowAlertBanner(true); }}>Show Alert Banner</button>\n      </div>\n      {showAlertBanner && (\n        <NotificationBanner\n          variant=\"hazard-high\"\n          id=\"my-component-notification-id\"\n          onRequestClose={() => setShowAlertBanner(false)}\n        />\n      )}\n    </WorkspaceContent>\n  );\n};\n\nMyContent2.labelTranslationId = 'myNamespace.myContent2.label';\n\nexport default MyContent2;\n")),(0,l.mdx)("h2",{id:"adding-activityoverlay-to-mycontent2"},"Adding ActivityOverlay to MyContent2"),(0,l.mdx)("p",null,"The WorkspaceContent component can receive an ",(0,l.mdx)("inlineCode",{parentName:"p"},"activityOverlay")," prop that will be rendered over the component's child content."),(0,l.mdx)("p",null,"The provided ",(0,l.mdx)("inlineCode",{parentName:"p"},"WorkspaceContent.ActivityOverlay")," is the only supported component at this time."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { WorkspaceContent } from \'terra-application/lib/workspace\';\nimport NotificationBanner from \'terra-application/lib/notification-banner\';\n\nconst MyContent2 = () => {\n  const [showAlertBanner, setShowAlertBanner] = React.useState(false);\n  const [isLoading, setIsLoading] = React.useState(false);\n\n  return (\n    <WorkspaceContent\n      activityOverlay={isLoading ? (\n        <WorkspaceContent.ActivityOverlay variant="loading" />\n      ) : undefined}\n    >\n      <div>\n        <p>Example Content 2</p>\n        <button type="button" onClick={() => { setShowAlertBanner(true); }}>Show Alert Banner</button>\n        <button type="button" onClick={() => { setIsLoading(true); }}>Show Activity Overlay</button>\n      </div>\n      {showAlertBanner && (\n        <NotificationBanner\n          variant="hazard-high"\n          id="my-component-notification-id"\n          onRequestClose={() => setShowAlertBanner(false)}\n        />\n      )}\n    </WorkspaceContent>\n  );\n};\n\nMyContent2.labelTranslationId = \'myNamespace.myContent2.label\';\n\nexport default MyContent2;\n')),(0,l.mdx)("h2",{id:"adding-statusoverlay-to-mycontent2"},"Adding StatusOverlay to MyContent2"),(0,l.mdx)("p",null,"The WorkspaceContent component can receive an ",(0,l.mdx)("inlineCode",{parentName:"p"},"statusOverlay")," prop that will be rendered over the component's other content."),(0,l.mdx)("p",null,"The provided ",(0,l.mdx)("inlineCode",{parentName:"p"},"WorkspaceContent.StatusOverlay")," is the only supported component at this time."),(0,l.mdx)(i.Notice,{ariaLevel:"3",mdxType:"Notice"},(0,l.mdx)("p",null,"Note that this can be combined with and presented alongside the activity overlay if both props are provided. However, the activity overlay will render on top of the status overlay.")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { WorkspaceContent } from \'terra-application/lib/workspace\';\nimport NotificationBanner from \'terra-application/lib/notification-banner\';\n\nconst MyContent2 = () => {\n  const [showAlertBanner, setShowAlertBanner] = React.useState(false);\n  const [isLoading, setIsLoading] = React.useState(false);\n  const [hasNoResults, setHasNoResults] = React.useState(false);\n\n  return (\n    <WorkspaceContent\n      activityOverlay={isLoading ? (\n        <WorkspaceContent.ActivityOverlay variant="loading" />\n      ) : undefined}\n      statusOverlay={hasNoResults ? (\n        <WorkspaceContent.StatusOverlay variant="no-matching-results" /> \n      ) : undefined}\n    >\n      <div>\n        <p>Example Content 2</p>\n        <button type="button" onClick={() => { setShowAlertBanner(true); }}>Show Alert Banner</button>\n        <button type="button" onClick={() => { setIsLoading(true); }}>Show Activity Overlay</button>\n        <button type="button" onClick={() => { setHasNoResults(true); }}>Show Status Overlay</button>\n      </div>\n      {showAlertBanner && (\n        <NotificationBanner\n          variant="hazard-high"\n          id="my-component-notification-id"\n          onRequestClose={() => setShowAlertBanner(false)}\n        />\n      )}\n    </WorkspaceContent>\n  );\n};\n\nMyContent2.labelTranslationId = \'myNamespace.myContent2.label\';\n\nexport default MyContent2;\n')),(0,l.mdx)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,l.mdx)("p",null,"With that, we have demonstrated all capabilities of the WorkspaceContent component. Please review the results in the below example."),(0,l.mdx)(v,{mdxType:"HowToExample"}))}g.isMDXComponent=!0},33389:(e,t,n)=>{var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(67294)),r=a(n(45697)),l=n(55877),i=a(n(40017)),c={bannerAction:r.default.shape({text:r.default.string,onClick:r.default.func}),description:r.default.node,onRequestClose:r.default.func,variant:r.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","unsatisfied","unverified","custom"]).isRequired,custom:r.default.shape({signalWord:r.default.string,iconClassName:r.default.string})},s=function(e){var t=e.bannerAction,n=e.custom,a=e.description,r=e.onRequestClose,c=e.variant,s=o.default.useContext(i.default),d=o.default.useRef((0,l.v4)());return o.default.useEffect((function(){if(!s)throw new Error("A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.");s.registerNotificationBanner(d.current,{bannerAction:t,custom:n,description:a,key:d.current,onRequestClose:r,variant:c})}),[s,a,n,t,r,c]),o.default.useEffect((function(){return function(){s.unregisterNotificationBanner(d.current,c)}}),[s,c]),null};s.propTypes=c;t.default=s},66280:(e,t,n)=>{var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(33389))},4728:(e,t,n)=>{var a=n(64836),o=n(18698);t.Z=void 0;var r=a(n(27424)),l=h(n(67294)),i=a(n(19845)),c=h(n(10557)),s=n(86072),d=a(n(66280)),u=a(n(55281)),p=a(n(4959)),m=a(n(77211));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}var v=i.default.bind(m.default),y=function(){var e=l.default.useContext(s.WorkspaceContext).isActive;return l.default.useEffect((function(){if(e)return function(){}}),[e]),l.default.createElement(s.WorkspaceContent,{toolbar:l.default.createElement(p.default,null,l.default.createElement(u.default,{text:"Action 1",onClick:function(){}}),l.default.createElement(u.default,{text:"Action 2",onClick:function(){}}))},l.default.createElement("div",null,l.default.createElement("p",null,"Example Content 1")))},_=function(){var e=l.default.useState(!1),t=(0,r.default)(e,2),n=t[0],a=t[1],o=l.default.useState(!1),i=(0,r.default)(o,2),c=i[0],u=i[1],p=l.default.useState(!1),m=(0,r.default)(p,2),f=m[0],h=m[1];return l.default.createElement(s.WorkspaceContent,{activityOverlay:c?l.default.createElement(s.WorkspaceContent.ActivityOverlay,{variant:"loading"}):void 0,statusOverlay:f?l.default.createElement(s.WorkspaceContent.StatusOverlay,{variant:"no-matching-results"}):void 0},l.default.createElement("div",null,l.default.createElement("p",null,"Example Content 2"),l.default.createElement("button",{type:"button",onClick:function(){a(!0)}},"Show Alert Banner"),l.default.createElement("button",{type:"button",onClick:function(){u(!0)}},"Show Activity Overlay"),l.default.createElement("button",{type:"button",onClick:function(){h(!0)}},"Show Status Overlay")),n&&l.default.createElement(d.default,{variant:"hazard-high",id:"my-component-notification-id",onRequestClose:function(){return a(!1)}}))};_.labelTranslationId="myNamespace.myContent2.label";t.Z=function(){var e=(0,l.useState)("page_1"),t=(0,r.default)(e,2),n=t[0],a=t[1],o=l.default.createElement(c.default.Workspace,{id:"application-workspace-example",initialActiveItemKey:"item-1",initialSize:{scale:.5},initialIsOpen:!0},l.default.createElement(c.default.Workspace.Item,{itemKey:"item-1",label:"Item 1",render:function(){return l.default.createElement(y,null)}}),l.default.createElement(c.default.Workspace.Item,{itemKey:"item-2",label:"Item 2",render:function(){return l.default.createElement(_,null)}}));return l.default.createElement("div",{className:v("example-container")},l.default.createElement(c.default,{titleConfig:{title:"Create Workspace Content ",headline:"How To"},userConfig:{name:"Example User",initials:"EU"},navigationItems:[{key:"page_1",text:"Page 1"},{key:"page_2",text:"Page 2"},{key:"page_3",text:"Page 3"}],activeNavigationItemKey:n,onSelectNavigationItem:function(e){a(e)},workspace:o},l.default.createElement(c.ApplicationNavigationActionsContext.Consumer,null,(function(e){var t=e.actions,a=void 0===t?[]:t;return l.default.createElement("div",{className:v("page-content")},l.default.createElement("p",null,"Example Content for"," ",n),l.default.createElement("p",null,"Layout Actions:"," ",a.map((function(e){return l.default.createElement("button",{key:e.key,type:"button",onClick:e.onSelect,"aria-label":e.label},e.icon)}))))}))))}},82778:(e,t,n)=>{var a=n(64836),o=n(18698);t.Z=void 0;var r=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(67294)),i=a(n(45697)),c=a(n(19845)),s=n(48720),d=a(n(33864)),u=a(n(23399)),p=n(51051),m=a(n(95507));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(m.default),v={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,i=e.description,c=e.isExpanded,m=(0,l.useState)(c),f=(0,r.default)(m,2),v=f[0],b=f[1],g=(0,l.useState)(!1),x=(0,r.default)(g,2),C=x[0],w=x[1],k=l.default.useContext(s.ThemeContext),N=void 0!==a,E=function(){w(!C),v&&b(!v)},O=function(){b(!v),C&&w(!C)},W=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:h("template",k.className)},l.default.createElement("div",{className:h("header")},o&&l.default.createElement("h2",{className:h("title")},o)),l.default.createElement("div",{className:h("content")},i&&l.default.createElement("div",{className:h("description")},i),t),l.default.createElement("div",{className:h("footer")},n?l.default.createElement("div",{className:h("button-container")},N&&l.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":C}),onClick:E,onKeyDown:function(e){return W(e,E)},onBlur:y,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:h("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(u.default,{className:h("chevron")})),l.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":v}),onClick:O,onKeyDown:function(e){return W(e,O)},onBlur:y,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:h("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(u.default,{className:h("chevron")}))):null,l.default.createElement("div",null,C&&l.default.createElement("div",{className:h("css")},a),v&&l.default.createElement("div",{className:h("code")},n))))};b.propTypes=v,b.defaultProps={isExpanded:!1};t.Z=b},66983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},41241:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},77211:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"example-container":"WorkspaceContentHowToExample-module__example-container___aaX7j","page-content":"WorkspaceContentHowToExample-module__page-content___srkFg","workspace-content":"WorkspaceContentHowToExample-module__workspace-content___M+EoN"}},95507:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___FATtk","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___s6uZH",template:"ExampleTemplate-module__template___ffP6g",header:"ExampleTemplate-module__header___vIWDI",content:"ExampleTemplate-module__content___rbhnH",description:"ExampleTemplate-module__description___+FEIq",footer:"ExampleTemplate-module__footer___D7QJv","button-container":"ExampleTemplate-module__button-container___3zfGj",css:"ExampleTemplate-module__css___i6lpu",code:"ExampleTemplate-module__code___-yR3s","css-toggle":"ExampleTemplate-module__css-toggle___DsZuN","code-toggle":"ExampleTemplate-module__code-toggle___3pWSV","is-selected":"ExampleTemplate-module__is-selected___UZtM1",item:"ExampleTemplate-module__item___56MkH",chevron:"ExampleTemplate-module__chevron___ljb6a",title:"ExampleTemplate-module__title___GjcWJ","dynamic-content":"ExampleTemplate-module__dynamic-content___SslvG"}},33864:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),o=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return a.default.createElement(o.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},4959:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),o=d(n(45697)),r=d(n(93967)),l=d(n(19845)),i=d(n(50026)),c=d(n(41241)),s=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function d(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=l.default.bind(c.default),f={align:o.default.oneOf(["start","end","center"]),ariaControls:o.default.string,ariaLabel:o.default.string,ariaLabelledBy:o.default.string,children:o.default.node},h=function(e){var t=e.align,n=e.ariaControls,o=e.ariaLabel,l=e.ariaLabelledBy,c=e.children,d=p(e,s),f=a.default.useContext(i.default),h=(0,r.default)(m("toolbar","".concat(t,"-align"),f.className),d.className),v=a.default.Children.map(c,(function(e){return e?a.default.createElement("div",{className:m("item")},e):e}));return a.default.createElement("div",u({},d,{"aria-controls":n,"aria-label":l?void 0:o,"aria-labelledby":l,className:h,role:"toolbar"}),v)};h.propTypes=f,h.defaultProps={align:"start"};t.default=h},87462:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:()=>a})},44925:(e,t,n)=>{function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:()=>a})}}]);