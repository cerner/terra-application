"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[7359],{18440:(e,t,n)=>{var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(96540)),o=a(n(5556)),r=n(68414),l=a(n(95551)),s={bannerAction:o.default.shape({text:o.default.string,onClick:o.default.func}),description:o.default.node,onRequestClose:o.default.func,variant:o.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","unsatisfied","unverified","custom"]).isRequired,custom:o.default.shape({signalWord:o.default.string,iconClassName:o.default.string})},u=function(e){var t=e.bannerAction,n=e.custom,a=e.description,o=e.onRequestClose,s=e.variant,u=i.default.useContext(l.default),d=i.default.useRef((0,r.v4)());return i.default.useEffect((function(){if(!u)throw new Error("A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.");u.registerNotificationBanner(d.current,{bannerAction:t,custom:n,description:a,key:d.current,onRequestClose:o,variant:s})}),[u,a,n,t,o,s]),i.default.useEffect((function(){return function(){u.unregisterNotificationBanner(d.current,s)}}),[u,s]),null};u.propTypes=s;t.default=u},86545:(e,t,n)=>{var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=a(n(18440))},14773:(e,t,n)=>{var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94634)),o=a(n(91847)),r=a(n(96540)),l=a(n(5556)),s=a(n(13108)),u=n(95886),d=a(n(69793)),c=["navigationPromptResolutionOptions"],f={children:l.default.node,panelBehavior:l.default.oneOf(["overlay","squish"]),disclosureAccessory:l.default.element,navigationPromptResolutionOptions:u.navigationPromptResolutionOptionsShape},m=function(e){var t=e.navigationPromptResolutionOptions,n=(0,o.default)(e,c);return r.default.createElement(s.default,(0,i.default)({},n,{withDisclosureContainer:function(e){return r.default.createElement(d.default,{navigationPromptResolutionOptions:t},e)}}))};m.propTypes=f,m.defaultProps=s.default.defaultProps;t.default=m},52405:(e,t,n)=>{var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(14773));t.default=i.default},47014:(e,t,n)=>{var a=n(24994),i=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(96540)),l=a(n(67967)),s=a(n(5556)),u=a(n(86545)),d=a(n(88632));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var f=l.default.bind(d.default),m=function(e){var t=e.isInitiallyClosed,n=e.id,a=(0,r.useState)(!t),i=(0,o.default)(a,2),l=i[0],s=i[1],d=(0,r.useState)(!t),c=(0,o.default)(d,2),m=c[0],h=c[1],p=(0,r.useState)(!t),g=(0,o.default)(p,2),b=g[0],v=g[1],y=(0,r.useState)(!t),C=(0,o.default)(y,2),k=C[0],E=C[1],w=(0,r.useState)(!t),_=(0,o.default)(w,2),O=_[0],D=_[1],S=(0,r.useState)(!t),z=(0,o.default)(S,2),P=z[0],M=z[1],B=(0,r.useState)(!t),x=(0,o.default)(B,2),H=x[0],N=x[1];return r.default.createElement(r.default.Fragment,null,l&&r.default.createElement(u.default,{variant:"hazard-high",id:"hazard-high-banner-".concat(n)}),m&&r.default.createElement(u.default,{variant:"hazard-medium",id:"hazard-medium-banner-".concat(n),onRequestClose:function(){return h(!1)}}),b&&r.default.createElement(u.default,{variant:"hazard-low",id:"hazard-low-banner-".concat(n)}),k&&r.default.createElement(u.default,{variant:"error",id:"error-banner-".concat(n),description:"Something happened..."}),O&&r.default.createElement(u.default,{variant:"unsatisfied",id:"unsatisfied-banner-".concat(n)}),P&&r.default.createElement(u.default,{variant:"unverified",id:"unverified-banner-".concat(n),description:r.default.createElement("div",null,"There are records that have been included that need to be verified before they are officially added. Please review and ensure they should be included."),bannerAction:{text:"Verify Records",onClick:function(){alert("records verified."),M(!1)}}}),H&&r.default.createElement(u.default,{variant:"custom",id:"custom-banner-".concat(n),custom:{signalWord:"Check this out!",customIconClass:f("custom-notification-banner-icon")},description:"This is a custom banner."}),r.default.createElement("p",null,"Show Banner Options: "),r.default.createElement("button",{onClick:function(){return s(!l)},type:"button",id:"toggle-hazard-high-banner-".concat(n)},"Show/Hide Hazard-High Banner"),r.default.createElement("button",{onClick:function(){return h(!m)},type:"button",id:"toggle-hazard-medium-banner-".concat(n)},"Show/Hide Hazard-Medium Banner"),r.default.createElement("button",{onClick:function(){return v(!b)},type:"button",id:"toggle-hazard-low-banner-".concat(n)},"Show/Hide Hazard-Low Banner"),r.default.createElement("button",{onClick:function(){return E(!k)},type:"button",id:"toggle-error-banner-".concat(n)},"Show/Hide Error Banner"),r.default.createElement("button",{onClick:function(){return D(!O)},type:"button",id:"toggle-unsatisfied-banner-".concat(n)},"Show/Hide Unsatisfied Banner"),r.default.createElement("button",{onClick:function(){return M(!P)},type:"button",id:"toggle-unverified-banner-".concat(n)},"Show/Hide Unverified Banner"),r.default.createElement("button",{onClick:function(){return N(!H)},type:"button",id:"toggle-custom-banner-".concat(n)},"Show/Hide Custom Banner"))};m.propTypes={id:s.default.string,isInitiallyClosed:s.default.bool},m.defaultProps={id:"1",isInitiallyClosed:!1};t.default=m},93571:(e,t,n)=>{var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(43693)),o=a(n(17383)),r=a(n(34579)),l=a(n(28452)),s=a(n(63072)),u=a(n(29511)),d=a(n(96540)),c=a(n(5556)),f=a(n(67967)),m=a(n(29314)),h=a(n(54495)),p=n(36048),g=a(n(95886)),b=a(n(14943)),v=a(n(47014)),y=a(n(77421)),C=a(n(51864));function k(e,t,n){return t=(0,s.default)(t),(0,l.default)(e,E()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}var w=f.default.bind(C.default),_=Object.keys(p.availableDisclosureHeights),O=Object.keys(p.availableDisclosureWidths),D=function(e){function t(e){var n;return(0,o.default)(this,t),(n=k(this,t,[e])).disclose=n.disclose.bind(n),n.dismiss=n.dismiss.bind(n),n.closeDisclosure=n.closeDisclosure.bind(n),n.goBack=n.goBack.bind(n),n.maximize=n.maximize.bind(n),n.minimize=n.minimize.bind(n),n.generateOptions=n.generateOptions.bind(n),n.handleSelectChange=n.handleSelectChange.bind(n),n.renderFormButton=n.renderFormButton.bind(n),n.renderForm=n.renderForm.bind(n),n.getId=n.getId.bind(n),n.state={id:"disclosureDimensions",disclosureHeight:_[0],disclosureWidth:O[0],hasPendingAction:!1,hasLoadingOverlay:!1,hasError:!1,hasStatusOverlay:!1,disclosureCount:null},n}return(0,u.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({disclosureCount:(0,p.getActiveDisclosureCount)()})})),this.props.useCustomDismissCheck&&this.props.disclosureManager.registerDismissCheck&&this.props.disclosureManager.registerDismissCheck((function(){return Promise.reject()}))}},{key:"handleSelectChange",value:function(e){this.setState((0,i.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,a){var i=a;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:i,value:e},e)}))}},{key:"disclose",value:function(e,t){var n=this,a=this.props,i=a.disclosureType,o=a.nestedIndex,r=a.renderHeaderAdapter,l=a.useCustomDismissCheck,s=o+1;return function(){n.props.disclosureManager.disclose({preferredType:i,size:e,dimensions:t,content:{key:"DemoContainer-".concat(s),component:d.default.createElement(S,{identifier:"DemoContainer-".concat(s),nestedIndex:s,disclosureType:i,renderHeaderAdapter:r,useCustomDismissCheck:l})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(_,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(O,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this,t=this.props,n=t.disclosureManager,a=t.identifier,i=t.nestedIndex,o=t.renderHeaderAdapter,r=this.state,l=r.hasPendingAction,s=r.hasLoadingOverlay,u=r.hasError,c=r.hasStatusOverlay,f=r.disclosureCount;if(u)throw new Error("Test Error");return d.default.createElement(h.default,{id:a,className:"nested-component",header:d.default.createElement("h2",{className:w("content-wrapper")},"Content Component")},o&&i>0?d.default.createElement(p.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(a),collapsibleMenuView:d.default.createElement(m.default,null,d.default.createElement(m.default.Item,{text:"Header Button 1",key:"button_1"}),d.default.createElement(m.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,d.default.createElement("p",null,"id:"," ",a),d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("button",{type:"button",className:"pending-action-toggle",onClick:function(){e.setState((function(e){return{hasPendingAction:!e.hasPendingAction}}))}},"Pending Action"),d.default.createElement("button",{type:"button",className:"loading-overlay-toggle",onClick:function(){e.setState((function(e){return{hasLoadingOverlay:!e.hasLoadingOverlay}}))}},"Loading Overlay"),d.default.createElement("button",{type:"button",className:"status-view-toggle",onClick:function(){e.setState((function(e){return{hasStatusOverlay:!e.hasStatusOverlay}}))}},"Status View"),d.default.createElement("button",{type:"button",className:"error-toggle",onClick:function(){e.setState((function(e){return{hasError:!e.hasError}}))}},"Error"),d.default.createElement("div",{className:w("form-wrapper")},this.renderForm(),this.renderFormButton()),n&&n.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,n&&n.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,n&&n.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,n&&n.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,n&&n.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null,d.default.createElement("button",{type:"button",className:"global-close-disclosure",onClick:p.closeMostRecentDisclosure},"Global Close (".concat(f,")")),l&&d.default.createElement(g.default,{description:"Test Action"}),s&&d.default.createElement(b.default,{isOpen:!0,backgroundStyle:"light"}),d.default.createElement(v.default,{isInitiallyClosed:!0,id:a}),c&&d.default.createElement(y.default,{message:"Test status view",variant:"no-data"}))}}])}(d.default.Component);D.propTypes={disclosureManager:p.disclosureManagerShape,identifier:c.default.string,disclosureType:c.default.string,nestedIndex:c.default.number,renderHeaderAdapter:c.default.bool,useCustomDismissCheck:c.default.bool},D.defaultProps={nestedIndex:0};var S=(0,p.withDisclosureManager)(D);t.default=S},88632:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"custom-notification-banner-icon":"CustomVariant-module__custom-notification-banner-icon___jPxUK","clinical-lowlight-theme":"CustomVariant-module__clinical-lowlight-theme___84ZM-"}},51864:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"content-wrapper":"DisclosureComponent-module__content-wrapper___kT6qT","form-wrapper":"DisclosureComponent-module__form-wrapper___Z5GxX"}}}]);