"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[8239],{33389:(e,t,n)=>{var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(67294)),r=a(n(45697)),o=a(n(71171)),l=a(n(40017)),s={bannerAction:r.default.shape({text:r.default.string,onClick:r.default.func}),description:r.default.node,onRequestClose:r.default.func,variant:r.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","unsatisfied","unverified","custom"]).isRequired,custom:r.default.shape({signalWord:r.default.string,iconClassName:r.default.string})},u=function(e){var t=e.bannerAction,n=e.custom,a=e.description,r=e.onRequestClose,s=e.variant,u=i.default.useContext(l.default),d=i.default.useRef((0,o.default)());return i.default.useEffect((function(){if(!u)throw new Error("A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.");u.registerNotificationBanner(d.current,{bannerAction:t,custom:n,description:a,key:d.current,onRequestClose:r,variant:s})}),[u,a,n,t,r,s]),i.default.useEffect((function(){return function(){u.unregisterNotificationBanner(d.current,s)}}),[u,s]),null};u.propTypes=s;var d=u;t.default=d},66280:(e,t,n)=>{var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=a(n(33389))},72101:(e,t,n)=>{var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434)),r=a(n(70215)),o=a(n(67294)),l=a(n(45697)),s=a(n(49265)),u=n(77797),d=a(n(50692)),c=["navigationPromptResolutionOptions"],f={children:l.default.node,panelBehavior:l.default.oneOf(["overlay","squish"]),disclosureAccessory:l.default.element,navigationPromptResolutionOptions:u.navigationPromptResolutionOptionsShape},m=function(e){var t=e.navigationPromptResolutionOptions,n=(0,r.default)(e,c);return o.default.createElement(s.default,(0,i.default)({},n,{withDisclosureContainer:function(e){return o.default.createElement(d.default,{navigationPromptResolutionOptions:t},e)}}))};m.propTypes=f,m.defaultProps=s.default.defaultProps;var h=m;t.default=h},48158:(e,t,n)=>{var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(72101)).default;t.default=i},96853:(e,t,n)=>{var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),l=a(n(47166)),s=a(n(45697)),u=a(n(66280)),d=a(n(61213));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var f=l.default.bind(d.default),m=function(e){var t=e.isInitiallyClosed,n=e.id,a=(0,o.useState)(!t),i=(0,r.default)(a,2),l=i[0],s=i[1],d=(0,o.useState)(!t),c=(0,r.default)(d,2),m=c[0],h=c[1],p=(0,o.useState)(!t),g=(0,r.default)(p,2),b=g[0],v=g[1],y=(0,o.useState)(!t),C=(0,r.default)(y,2),k=C[0],E=C[1],w=(0,o.useState)(!t),O=(0,r.default)(w,2),_=O[0],D=O[1],S=(0,o.useState)(!t),P=(0,r.default)(S,2),z=P[0],M=P[1],x=(0,o.useState)(!t),B=(0,r.default)(x,2),H=B[0],N=B[1];return o.default.createElement(o.default.Fragment,null,l&&o.default.createElement(u.default,{variant:"hazard-high",id:"hazard-high-banner-".concat(n)}),m&&o.default.createElement(u.default,{variant:"hazard-medium",id:"hazard-medium-banner-".concat(n),onRequestClose:function(){return h(!1)}}),b&&o.default.createElement(u.default,{variant:"hazard-low",id:"hazard-low-banner-".concat(n)}),k&&o.default.createElement(u.default,{variant:"error",id:"error-banner-".concat(n),description:"Something happened..."}),_&&o.default.createElement(u.default,{variant:"unsatisfied",id:"unsatisfied-banner-".concat(n)}),z&&o.default.createElement(u.default,{variant:"unverified",id:"unverified-banner-".concat(n),description:o.default.createElement("div",null,"There are records that have been included that need to be verified before they are officially added. Please review and ensure they should be included."),bannerAction:{text:"Verify Records",onClick:function(){alert("records verified."),M(!1)}}}),H&&o.default.createElement(u.default,{variant:"custom",id:"custom-banner-".concat(n),custom:{signalWord:"Check this out!",customIconClass:f("custom-notification-banner-icon")},description:"This is a custom banner."}),o.default.createElement("p",null,"Show Banner Options: "),o.default.createElement("button",{onClick:function(){return s(!l)},type:"button",id:"toggle-hazard-high-banner-".concat(n)},"Show/Hide Hazard-High Banner"),o.default.createElement("button",{onClick:function(){return h(!m)},type:"button",id:"toggle-hazard-medium-banner-".concat(n)},"Show/Hide Hazard-Medium Banner"),o.default.createElement("button",{onClick:function(){return v(!b)},type:"button",id:"toggle-hazard-low-banner-".concat(n)},"Show/Hide Hazard-Low Banner"),o.default.createElement("button",{onClick:function(){return E(!k)},type:"button",id:"toggle-error-banner-".concat(n)},"Show/Hide Error Banner"),o.default.createElement("button",{onClick:function(){return D(!_)},type:"button",id:"toggle-unsatisfied-banner-".concat(n)},"Show/Hide Unsatisfied Banner"),o.default.createElement("button",{onClick:function(){return M(!z)},type:"button",id:"toggle-unverified-banner-".concat(n)},"Show/Hide Unverified Banner"),o.default.createElement("button",{onClick:function(){return N(!H)},type:"button",id:"toggle-custom-banner-".concat(n)},"Show/Hide Custom Banner"))};m.propTypes={id:s.default.string,isInitiallyClosed:s.default.bool},m.defaultProps={id:"1",isInitiallyClosed:!1};var h=m;t.default=h},41361:(e,t,n)=>{var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(38416)),r=a(n(56690)),o=a(n(89728)),l=a(n(66115)),s=a(n(61655)),u=a(n(94993)),d=a(n(73808)),c=a(n(67294)),f=a(n(45697)),m=a(n(47166)),h=a(n(27699)),p=a(n(8003)),g=n(8559),b=a(n(77797)),v=a(n(23825)),y=a(n(96853)),C=a(n(55203)),k=a(n(95286));function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var i=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var w=m.default.bind(k.default),O=Object.keys(g.availableDisclosureHeights),_=Object.keys(g.availableDisclosureWidths),D=function(e){(0,s.default)(n,e);var t=E(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).disclose=a.disclose.bind((0,l.default)(a)),a.dismiss=a.dismiss.bind((0,l.default)(a)),a.closeDisclosure=a.closeDisclosure.bind((0,l.default)(a)),a.goBack=a.goBack.bind((0,l.default)(a)),a.maximize=a.maximize.bind((0,l.default)(a)),a.minimize=a.minimize.bind((0,l.default)(a)),a.generateOptions=a.generateOptions.bind((0,l.default)(a)),a.handleSelectChange=a.handleSelectChange.bind((0,l.default)(a)),a.renderFormButton=a.renderFormButton.bind((0,l.default)(a)),a.renderForm=a.renderForm.bind((0,l.default)(a)),a.getId=a.getId.bind((0,l.default)(a)),a.state={id:"disclosureDimensions",disclosureHeight:O[0],disclosureWidth:_[0],hasPendingAction:!1,hasLoadingOverlay:!1,hasError:!1,hasStatusOverlay:!1,disclosureCount:null},a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({disclosureCount:(0,g.getActiveDisclosureCount)()})})),this.props.useCustomDismissCheck&&this.props.disclosureManager.registerDismissCheck&&this.props.disclosureManager.registerDismissCheck((function(){return Promise.reject()}))}},{key:"handleSelectChange",value:function(e){this.setState((0,i.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,a){var i=a;return c.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:i,value:e},e)}))}},{key:"disclose",value:function(e,t){var n=this,a=this.props,i=a.disclosureType,r=a.nestedIndex,o=a.renderHeaderAdapter,l=a.useCustomDismissCheck,s=r+1;return function(){n.props.disclosureManager.disclose({preferredType:i,size:e,dimensions:t,content:{key:"DemoContainer-".concat(s),component:c.default.createElement(S,{identifier:"DemoContainer-".concat(s),nestedIndex:s,disclosureType:i,renderHeaderAdapter:o,useCustomDismissCheck:l})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return c.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return c.default.createElement("form",null,c.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),c.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(O,"height")),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),c.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(_,"width")),c.default.createElement("br",null),c.default.createElement("br",null))}},{key:"render",value:function(){var e=this,t=this.props,n=t.disclosureManager,a=t.identifier,i=t.nestedIndex,r=t.renderHeaderAdapter,o=this.state,l=o.hasPendingAction,s=o.hasLoadingOverlay,u=o.hasError,d=o.hasStatusOverlay,f=o.disclosureCount;if(u)throw new Error("Test Error");return c.default.createElement(p.default,{id:a,className:"nested-component",header:c.default.createElement("h2",{className:w("content-wrapper")},"Content Component")},r&&i>0?c.default.createElement(g.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(a),collapsibleMenuView:c.default.createElement(h.default,null,c.default.createElement(h.default.Item,{text:"Header Button 1",key:"button_1"}),c.default.createElement(h.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,c.default.createElement("p",null,"id:"," ",a),c.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),c.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),c.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),c.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),c.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),c.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),c.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),c.default.createElement("button",{type:"button",className:"pending-action-toggle",onClick:function(){e.setState((function(e){return{hasPendingAction:!e.hasPendingAction}}))}},"Pending Action"),c.default.createElement("button",{type:"button",className:"loading-overlay-toggle",onClick:function(){e.setState((function(e){return{hasLoadingOverlay:!e.hasLoadingOverlay}}))}},"Loading Overlay"),c.default.createElement("button",{type:"button",className:"status-view-toggle",onClick:function(){e.setState((function(e){return{hasStatusOverlay:!e.hasStatusOverlay}}))}},"Status View"),c.default.createElement("button",{type:"button",className:"error-toggle",onClick:function(){e.setState((function(e){return{hasError:!e.hasError}}))}},"Error"),c.default.createElement("div",{className:w("form-wrapper")},this.renderForm(),this.renderFormButton()),n&&n.dismiss?c.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,n&&n.closeDisclosure?c.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,n&&n.goBack?c.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,n&&n.maximize?c.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,n&&n.minimize?c.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null,c.default.createElement("button",{type:"button",className:"global-close-disclosure",onClick:g.closeMostRecentDisclosure},"Global Close (".concat(f,")")),l&&c.default.createElement(b.default,{description:"Test Action"}),s&&c.default.createElement(v.default,{isOpen:!0,backgroundStyle:"light"}),c.default.createElement(y.default,{isInitiallyClosed:!0,id:a}),d&&c.default.createElement(C.default,{message:"Test status view",variant:"no-data"}))}}]),n}(c.default.Component);D.propTypes={disclosureManager:g.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number,renderHeaderAdapter:f.default.bool,useCustomDismissCheck:f.default.bool},D.defaultProps={nestedIndex:0};var S=(0,g.withDisclosureManager)(D),P=S;t.default=P},61213:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"custom-notification-banner-icon":"CustomVariant-module__custom-notification-banner-icon___jPxUK","clinical-lowlight-theme":"CustomVariant-module__clinical-lowlight-theme___84ZM-"}},95286:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"content-wrapper":"DisclosureComponent-module__content-wrapper___kT6qT","form-wrapper":"DisclosureComponent-module__form-wrapper___Z5GxX"}}}]);