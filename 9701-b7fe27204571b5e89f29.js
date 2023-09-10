"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[9701],{33389:(e,t,n)=>{var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(67294)),o=a(n(45697)),r=n(55877),l=a(n(40017)),s={bannerAction:o.default.shape({text:o.default.string,onClick:o.default.func}),description:o.default.node,onRequestClose:o.default.func,variant:o.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","unsatisfied","unverified","custom"]).isRequired,custom:o.default.shape({signalWord:o.default.string,iconClassName:o.default.string})},u=function(e){var t=e.bannerAction,n=e.custom,a=e.description,o=e.onRequestClose,s=e.variant,u=i.default.useContext(l.default),c=i.default.useRef((0,r.v4)());return i.default.useEffect((function(){if(!u)throw new Error("A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.");u.registerNotificationBanner(c.current,{bannerAction:t,custom:n,description:a,key:c.current,onRequestClose:o,variant:s})}),[u,a,n,t,o,s]),i.default.useEffect((function(){return function(){u.unregisterNotificationBanner(c.current,s)}}),[u,s]),null};u.propTypes=s;var c=u;t.default=c},66280:(e,t,n)=>{var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=a(n(33389))},49701:(e,t,n)=>{var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(38416)),o=a(n(56690)),r=a(n(89728)),l=a(n(66115)),s=a(n(61655)),u=a(n(94993)),c=a(n(73808)),d=a(n(67294)),f=a(n(45697)),m=a(n(47166)),h=a(n(27699)),p=a(n(8003)),b=n(8559),g=a(n(77797)),v=a(n(23825)),y=a(n(96853)),C=a(n(55203)),k=a(n(26694));function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var _=m.default.bind(k.default),w=Object.keys(b.availableDisclosureHeights),D=Object.keys(b.availableDisclosureWidths),S=function(e){(0,s.default)(n,e);var t=E(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).disclose=a.disclose.bind((0,l.default)(a)),a.dismiss=a.dismiss.bind((0,l.default)(a)),a.closeDisclosure=a.closeDisclosure.bind((0,l.default)(a)),a.goBack=a.goBack.bind((0,l.default)(a)),a.maximize=a.maximize.bind((0,l.default)(a)),a.minimize=a.minimize.bind((0,l.default)(a)),a.generateOptions=a.generateOptions.bind((0,l.default)(a)),a.handleSelectChange=a.handleSelectChange.bind((0,l.default)(a)),a.renderFormButton=a.renderFormButton.bind((0,l.default)(a)),a.renderForm=a.renderForm.bind((0,l.default)(a)),a.getId=a.getId.bind((0,l.default)(a)),a.state={id:"disclosureDimensions",disclosureHeight:w[0],disclosureWidth:D[0],hasPendingAction:!1,hasLoadingOverlay:!1,hasError:!1,hasStatusOverlay:!1,disclosureCount:null},a}return(0,r.default)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({disclosureCount:(0,b.getActiveDisclosureCount)()})})),this.props.useCustomDismissCheck&&this.props.disclosureManager.registerDismissCheck&&this.props.disclosureManager.registerDismissCheck((function(){return Promise.reject()})).then((function(){}))}},{key:"handleSelectChange",value:function(e){this.setState((0,i.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,a){var i=a;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:i,value:e},e)}))}},{key:"disclose",value:function(e,t){var n=this,a=this.props,i=a.disclosureType,o=a.nestedIndex,r=a.renderHeaderAdapter,l=a.useCustomDismissCheck,s=o+1;return function(){n.props.disclosureManager.disclose({preferredType:i,size:e,dimensions:t,content:{key:"DemoContainer-".concat(s),component:d.default.createElement(z,{identifier:"DemoContainer-".concat(s),nestedIndex:s,renderHeaderAdapter:r,useCustomDismissCheck:l})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(w,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(D,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this,t=this.props,n=t.disclosureManager,a=t.identifier,i=t.nestedIndex,o=t.renderHeaderAdapter,r=this.state,l=r.hasPendingAction,s=r.hasLoadingOverlay,u=r.hasError,c=r.hasStatusOverlay,f=r.disclosureCount;if(u)throw new Error("Test Error");return d.default.createElement(p.default,{id:a,className:"nested-component",header:d.default.createElement("h2",{className:_("header")},"Content Component")},o&&i>0?d.default.createElement(b.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(a),collapsibleMenuView:d.default.createElement(h.default,null,d.default.createElement(h.default.Item,{text:"Header Button 1",key:"button_1"}),d.default.createElement(h.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,d.default.createElement("p",null,"id:"," ",a),d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("button",{type:"button",className:"pending-action-toggle",onClick:function(){e.setState((function(e){return{hasPendingAction:!e.hasPendingAction}}))}},"Pending Action"),d.default.createElement("button",{type:"button",className:"loading-overlay-toggle",onClick:function(){e.setState((function(e){return{hasLoadingOverlay:!e.hasLoadingOverlay}}))}},"Loading Overlay"),d.default.createElement("button",{type:"button",className:"status-view-toggle",onClick:function(){e.setState((function(e){return{hasStatusOverlay:!e.hasStatusOverlay}}))}},"Status View"),d.default.createElement("button",{type:"button",className:"error-toggle",onClick:function(){e.setState((function(e){return{hasError:!e.hasError}}))}},"Error"),d.default.createElement("div",{className:_("content-form")},this.renderForm(),this.renderFormButton()),n&&n.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,n&&n.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,n&&n.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,n&&n.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,n&&n.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null,d.default.createElement("button",{type:"button",className:"global-close-disclosure",onClick:b.closeMostRecentDisclosure},"Global Close (".concat(f,")")),l&&d.default.createElement(g.default,{description:"Test Action"}),s&&d.default.createElement(v.default,{isOpen:!0,backgroundStyle:"light"}),d.default.createElement(y.default,{isInitiallyClosed:!0,id:a}),c&&d.default.createElement(C.default,{message:"Test status view",variant:"no-data"}))}}]),n}(d.default.Component);S.propTypes={disclosureManager:b.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number,renderHeaderAdapter:f.default.bool,useCustomDismissCheck:f.default.bool},S.defaultProps={nestedIndex:0};var z=(0,b.withDisclosureManager)(S),O=z;t.default=O},96853:(e,t,n)=>{var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),l=a(n(47166)),s=a(n(45697)),u=a(n(66280)),c=a(n(61213));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var f=l.default.bind(c.default),m=function(e){var t=e.isInitiallyClosed,n=e.id,a=(0,r.useState)(!t),i=(0,o.default)(a,2),l=i[0],s=i[1],c=(0,r.useState)(!t),d=(0,o.default)(c,2),m=d[0],h=d[1],p=(0,r.useState)(!t),b=(0,o.default)(p,2),g=b[0],v=b[1],y=(0,r.useState)(!t),C=(0,o.default)(y,2),k=C[0],E=C[1],_=(0,r.useState)(!t),w=(0,o.default)(_,2),D=w[0],S=w[1],z=(0,r.useState)(!t),O=(0,o.default)(z,2),M=O[0],B=O[1],x=(0,r.useState)(!t),H=(0,o.default)(x,2),N=H[0],P=H[1];return r.default.createElement(r.default.Fragment,null,l&&r.default.createElement(u.default,{variant:"hazard-high",id:"hazard-high-banner-".concat(n)}),m&&r.default.createElement(u.default,{variant:"hazard-medium",id:"hazard-medium-banner-".concat(n),onRequestClose:function(){return h(!1)}}),g&&r.default.createElement(u.default,{variant:"hazard-low",id:"hazard-low-banner-".concat(n)}),k&&r.default.createElement(u.default,{variant:"error",id:"error-banner-".concat(n),description:"Something happened..."}),D&&r.default.createElement(u.default,{variant:"unsatisfied",id:"unsatisfied-banner-".concat(n)}),M&&r.default.createElement(u.default,{variant:"unverified",id:"unverified-banner-".concat(n),description:r.default.createElement("div",null,"There are records that have been included that need to be verified before they are officially added. Please review and ensure they should be included."),bannerAction:{text:"Verify Records",onClick:function(){alert("records verified."),B(!1)}}}),N&&r.default.createElement(u.default,{variant:"custom",id:"custom-banner-".concat(n),custom:{signalWord:"Check this out!",customIconClass:f("custom-notification-banner-icon")},description:"This is a custom banner."}),r.default.createElement("p",null,"Show Banner Options: "),r.default.createElement("button",{onClick:function(){return s(!l)},type:"button",id:"toggle-hazard-high-banner-".concat(n)},"Show/Hide Hazard-High Banner"),r.default.createElement("button",{onClick:function(){return h(!m)},type:"button",id:"toggle-hazard-medium-banner-".concat(n)},"Show/Hide Hazard-Medium Banner"),r.default.createElement("button",{onClick:function(){return v(!g)},type:"button",id:"toggle-hazard-low-banner-".concat(n)},"Show/Hide Hazard-Low Banner"),r.default.createElement("button",{onClick:function(){return E(!k)},type:"button",id:"toggle-error-banner-".concat(n)},"Show/Hide Error Banner"),r.default.createElement("button",{onClick:function(){return S(!D)},type:"button",id:"toggle-unsatisfied-banner-".concat(n)},"Show/Hide Unsatisfied Banner"),r.default.createElement("button",{onClick:function(){return B(!M)},type:"button",id:"toggle-unverified-banner-".concat(n)},"Show/Hide Unverified Banner"),r.default.createElement("button",{onClick:function(){return P(!N)},type:"button",id:"toggle-custom-banner-".concat(n)},"Show/Hide Custom Banner"))};m.propTypes={id:s.default.string,isInitiallyClosed:s.default.bool},m.defaultProps={id:"1",isInitiallyClosed:!1};var h=m;t.default=h},26694:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={header:"DisclosureComponentCommon-test-module__header___zsisw","content-form":"DisclosureComponentCommon-test-module__content-form___lFB35","select-field":"DisclosureComponentCommon-test-module__select-field___pRXCh"}},61213:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"custom-notification-banner-icon":"CustomVariant-module__custom-notification-banner-icon___jPxUK","clinical-lowlight-theme":"CustomVariant-module__clinical-lowlight-theme___84ZM-"}}}]);