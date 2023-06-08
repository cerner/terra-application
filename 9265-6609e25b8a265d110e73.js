"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[9265],{34597:(e,l,a)=>{a.r(l),a.d(l,{default:()=>t});const t={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___z5Dzy","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___hejSR","slide-panel":"SlidePanel-module__slide-panel___tbu3J",main:"SlidePanel-module__main___CjYDC",panel:"SlidePanel-module__panel___G1bnA","is-open":"SlidePanel-module__is-open___pYOkq","is-fullscreen":"SlidePanel-module__is-fullscreen___vCbZa",fill:"SlidePanel-module__fill___9PGCQ"}},49265:(e,l,a)=>{var t=a(64836),n=a(18698);Object.defineProperty(l,"__esModule",{value:!0}),l.disclosureType=l.default=void 0;var i,s=t(a(10434)),r=t(a(70215)),o=t(a(56690)),d=t(a(89728)),u=t(a(66115)),f=t(a(61655)),c=t(a(94993)),p=t(a(73808)),h=t(a(38416)),m=t(a(67294)),v=t(a(45697)),b=t(a(17092)),y=t(a(10027)),P=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=C(l);if(a&&a.has(e))return a.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var r=i?Object.getOwnPropertyDescriptor(e,s):null;r&&(r.get||r.set)?Object.defineProperty(t,s,r):t[s]=e[s]}t.default=e,a&&a.set(e,t);return t}(a(15560)),_=t(a(8714)),g=t(a(74141)),S=["children","level","disclosureAccessory","withDisclosureContainer","mainAriaLabel","panelAriaLabel"];function C(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,a=new WeakMap;return(C=function(e){return e?a:l})(e)}function D(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,t=(0,p.default)(e);if(l){var n=(0,p.default)(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return(0,c.default)(this,a)}}var A="panel";l.disclosureType=A;var O={children:v.default.node,level:v.default.oneOf([1,2,3,4,5,6]),panelBehavior:v.default.oneOf(["overlay","squish"]),disclosureAccessory:v.default.element,withDisclosureContainer:v.default.func,panelAriaLabel:v.default.string,mainAriaLabel:v.default.string},k=(i={},(0,h.default)(i,P.availableDisclosureSizes.TINY,"small"),(0,h.default)(i,P.availableDisclosureSizes.SMALL,"small"),(0,h.default)(i,P.availableDisclosureSizes.MEDIUM,"large"),(0,h.default)(i,P.availableDisclosureSizes.LARGE,"large"),(0,h.default)(i,P.availableDisclosureSizes.HUGE,"large"),i),L=function(e){(0,f.default)(a,e);var l=D(a);function a(e){var t;return(0,o.default)(this,a),(t=l.call(this,e)).renderSlidePanel=t.renderSlidePanel.bind((0,u.default)(t)),t.setSlidePanel=t.setSlidePanel.bind((0,u.default)(t)),t}return(0,d.default)(a,[{key:"setSlidePanel",value:function(e){this.slidePanel=e}},{key:"renderSlidePanel",value:function(e){var l,a,t,n,i,o=this.props,d=(o.children,o.level),u=o.disclosureAccessory,f=(o.withDisclosureContainer,o.mainAriaLabel),c=o.panelAriaLabel,p=(0,r.default)(o,S);(e.disclosure.size===P.availableDisclosureSizes.FULLSCREEN||e.disclosure.isMaximized)&&(t=!0),n=e.disclosure.dimensions?(i=e.disclosure.dimensions).width>480||i.height>600?"large":"small":k[e.disclosure.size];var h=null!=e&&null!==(l=e.disclosure)&&void 0!==l&&null!==(a=l.typeConfig)&&void 0!==a&&a.panelBehavior?e.disclosure.typeConfig.panelBehavior:p.panelBehavior,v=e.disclosureComponentKeys[e.disclosureComponentKeys.length-1],C=(e.disclosureComponentData[v]||{}).headerAdapterData;return m.default.createElement(g.default,(0,s.default)({},p,{fill:!0,panelBehavior:h,isFullscreen:t,panelSize:n,isOpen:e.disclosure.isOpen,setSlidePanelRef:this.setSlidePanel,panelContent:m.default.createElement(y.default,{fill:!0,header:m.default.createElement(m.default.Fragment,null,C?m.default.createElement(b.default,{text:C.title,onClose:e.closeDisclosure,level:d,onBack:e.disclosureComponentKeys.length>1?e.dismissPresentedComponent:void 0},C.collapsibleMenuView):void 0,u)},m.default.createElement(_.default,{items:e.disclosure.components,isAnimated:!0,focusRef:this.slidePanel,slideAriaLabel:(null==C?void 0:C.title)||c})),panelAriaLabel:(null==C?void 0:C.title)||c,mainAriaLabel:f,mainContent:e.children.components}))}},{key:"render",value:function(){var e=this.props,l=e.withDisclosureContainer,a=e.children;return m.default.createElement(P.default,{withDisclosureContainer:l,supportedDisclosureTypes:[A],render:this.renderSlidePanel},a)}}]),a}(m.default.Component);L.propTypes=O,L.defaultProps={level:2,panelBehavior:"overlay"};var N=L;l.default=N},74141:(e,l,a)=>{var t=a(64836);Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.SlidePanelPositions=void 0;var n=t(a(10434)),i=t(a(70215)),s=t(a(56690)),r=t(a(89728)),o=t(a(66115)),d=t(a(61655)),u=t(a(94993)),f=t(a(73808)),c=t(a(67294)),p=t(a(45697)),h=t(a(94184)),m=t(a(47166)),v=t(a(50026)),b=t(a(29270)),y=a(97132),P=a(21614),_=t(a(34597)),g=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function S(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,t=(0,f.default)(e);if(l){var n=(0,f.default)(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);return(0,u.default)(this,a)}}var C=m.default.bind(_.default),D={START:"start",END:"end"};l.SlidePanelPositions=D;var A={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},O={panelBehavior:"overlay",panelPosition:D.END,panelSize:"small"},k=function(e){(0,d.default)(a,e);var l=S(a);function a(e){var t;return(0,s.default)(this,a),(t=l.call(this,e)).setPanelNode=t.setPanelNode.bind((0,o.default)(t)),t.mainNode=c.default.createRef(),t.setLastClicked=t.setLastClicked.bind((0,o.default)(t)),t.setDisclosingNode=t.setDisclosingNode.bind((0,o.default)(t)),t.mainAriaDescribedByID="detail-panel-warning-".concat((0,P.v4)()),t}return(0,r.default)(a,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){if(this.disclosingNode)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,l=e.intl,a=e.isFullscreen,t=e.isOpen,s=e.fill,r=e.mainAriaLabel,o=e.mainContent,d=e.panelAriaLabel,u=e.panelContent,f=e.panelBehavior,p=e.panelPosition,m=e.panelSize,v=(e.setSlidePanelRef,(0,i.default)(e,g)),y=this.context,P=(0,h.default)(C("slide-panel",{"is-open":t},{"is-fullscreen":a},{fill:s},y.className),v.className),_=c.default.createElement("div",{className:C(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":t?"false":"true",role:"region",ref:this.setPanelNode},c.default.createElement(b.default,{text:d||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),u),S=c.default.createElement("div",{className:C("main"),key:"main",tabIndex:"-1","aria-label":r,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":t&&a?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},c.default.createElement(b.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:l.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),o),A=p===D.START?c.default.createElement(c.default.Fragment,null,_,S):c.default.createElement(c.default.Fragment,null,S,_);return c.default.createElement("div",(0,n.default)({},v,{className:P,"data-slide-panel-panel-behavior":f,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":m}),A)}}]),a}(c.default.Component);k.propTypes=A,k.defaultProps=O,k.contextType=v.default;var L=(0,y.injectIntl)(k);l.default=L}}]);