import{n as l,t as k$1}from"./chunk-USgBHqPl.js";import{$n as ts,An as on,At as dy,B as Qh,Cn as ng,Dt as dj,Et as dg,Gt as he$1,H as Qn,Hn as rg,Ht as g,It as ew,Mn as pC,Mt as ee,N as Ku,Pt as el,Qn as tl,Qt as ig,Rt as fe$1,T as JI,Tt as dT,Un as rr,W as Ts,X as Wd,Xt as iH,Zn as ta,_ as Fw,_n as m,d as De$1,dr as vw,gt as ar,hn as lw,hr as x,ht as aj,j as Kh,k as Ju,kn as ol,ln as kC,m as Dw,mn as ls,mr as ww,n as $h,nt as Ww,or as ur,pn as lr,pt as ae,q as VD,r as A,tt as Wu,v as Gd,vn as mT,vr as yg,w as Iw,wt as dE,x as I,xr as z,y as Gh,yn as mw,yr as yn,zt as fj}from"./chunk-BpBxg_DQ.js";import{C as Nt$1,E as Se$1,G as ke$1,I as _o,J as oe,K as kt$1,L as b,N as Yt,P as Zt,Q as te,U as ia,V as ge$1,W as jt,X as pe$1,_ as Ht$1,b as L,d as Ae$1,f as Bn,g as H$1,h as Dt,it as zt$1,k as Ue$1,m as De$2,nt as za,p as Bt,rt as zi,tt as we$1,v as J$1,x as N,z as fe$2}from"./main-56BWHD77.js";var y;var ft$1=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Ht(){if(y)return y;if(typeof document!=`object`||!document)return y=new Set(ft$1),y;let a=document.createElement(`input`);return y=new Set(ft$1.filter(e=>(a.setAttribute(`type`,e),a.type===e))),y}var c=(function(a){return a[a.FADING_IN=0]=`FADING_IN`,a[a.VISIBLE=1]=`VISIBLE`,a[a.FADING_OUT=2]=`FADING_OUT`,a[a.HIDDEN=3]=`HIDDEN`,a})(c||{});var X=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=c.HIDDEN;constructor(e,t,n,o=!1){this._renderer=e,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var vt$1=zi({passive:!0,capture:!0});var J=class{_events=new Map;addHandler(e,t,n,o){let i=this._events.get(t);if(i){let d=i.get(n);d?d.add(o):i.set(n,new Set([o]))}else this._events.set(t,new Map([[n,new Set([o])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,vt$1)})}removeHandler(e,t,n){let o=this._events.get(e);if(!o)return;let i=o.get(t);i&&(i.delete(n),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,vt$1)))}_delegateEventHandler=e=>{let t=N(e);t&&this._events.get(e.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(i=>i.handleEvent(e))})}};var _$1={enterDuration:225,exitDuration:150};var It=800;var ht=zi({passive:!0,capture:!0});var gt$1=[`mousedown`,`touchstart`];var yt$1=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Mt=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=Wu({type:a,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return a})();var w$1=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new J;constructor(e,t,n,o,i){this._target=e,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=J$1(n)),i&&i.get(dT).load(Mt)}fadeInRipple(e,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=k$1(k$1({},_$1),n.animation);n.centered&&(e=o.left+o.width/2,t=o.top+o.height/2);let d=n.radius||At(e,t,o),S=e-o.left,k=t-o.top,l=i.enterDuration,s=document.createElement(`div`);s.classList.add(`mat-ripple-element`),s.style.left=`${S-d}px`,s.style.top=`${k-d}px`,s.style.height=`${d*2}px`,s.style.width=`${d*2}px`,n.color!=null&&(s.style.backgroundColor=n.color),s.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(s);let tt=window.getComputedStyle(s),Dt=tt.transitionProperty,nt=tt.transitionDuration,U=Dt===`none`||nt===`0s`||nt===`0s, 0s`||o.width===0&&o.height===0,b=new X(this,s,n,U);s.style.transform=`scale3d(1, 1, 1)`,b.state=c.FADING_IN,n.persistent||(this._mostRecentTransientRipple=b);let D=null;return!U&&(l||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let et=()=>{D&&(D.fallbackTimer=null),clearTimeout(at),this._finishRippleTransition(b)},H=()=>this._destroyRipple(b),at=setTimeout(H,l+100);s.addEventListener(`transitionend`,et),s.addEventListener(`transitioncancel`,H),D={onTransitionEnd:et,onTransitionCancel:H,fallbackTimer:at}}),this._activeRipples.set(b,D),(U||!l)&&this._finishRippleTransition(b),b}fadeOutRipple(e){if(e.state===c.FADING_OUT||e.state===c.HIDDEN)return;let t=e.element,n=k$1(k$1({},_$1),e.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,e.state=c.FADING_OUT,(e._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=J$1(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,gt$1.forEach(n=>{a._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{yt$1.forEach(t=>{this._triggerElement.addEventListener(t,this,ht)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===c.FADING_IN?this._startFadeOutTransition(e):e.state===c.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:n}=e.config;e.state=c.VISIBLE,!n&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=c.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=zt$1(e),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+It;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!jt(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===c.VISIBLE||e.config.terminateOnPointerUp&&e.state===c.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(gt$1.forEach(t=>a._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(yt$1.forEach(t=>e.removeEventListener(t,this,ht)),this._pointerUpEventsRegistered=!1))}};function At(a,e,t){let n=Math.max(Math.abs(a-t.left),Math.abs(a-t.right)),o=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(n*n+o*o)}var K=new I(`mat-ripple-global-options`);var an=(()=>{class a{_elementRef=g(ar);_animationsDisabled=Zt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=g(ae),n=g(b),o=g(K,{optional:!0}),i=g(fe$1);this._globalOptions=o||{},this._rippleRenderer=new w$1(this,t,this._elementRef,n,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:k$1(k$1(k$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,k$1(k$1({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,k$1(k$1({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||a)};static ɵdir=Ts({type:a,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&dg(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return a})();var Rt={capture:!0};var Tt=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Q=`mat-ripple-loader-uninitialized`;var W=`mat-ripple-loader-class-name`;var St=`mat-ripple-loader-centered`;var j=`mat-ripple-loader-disabled`;var Nt=(()=>{class a{_document=g(z);_animationsDisabled=Zt();_globalRippleOptions=g(K,{optional:!0});_platform=g(b);_ngZone=g(ae);_injector=g(fe$1);_eventCleanups;_hosts=new Map;constructor(){let t=g(yn).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Tt.map(n=>t.listen(this._document,n,this._onInteraction,Rt)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(Q,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(W))&&t.setAttribute(W,n.className||``),n.centered&&t.setAttribute(St,``),n.disabled&&t.setAttribute(j,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(j,``):t.removeAttribute(j)}_onInteraction=t=>{let n=N(t);if(n instanceof HTMLElement){let o=n.closest(`[${Q}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(W)),t.append(n);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??_$1.enterDuration,d=this._animationsDisabled?0:o?.animation?.exitDuration??_$1.exitDuration,S={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(j),rippleConfig:{centered:t.hasAttribute(St),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:d}}},k=new w$1(S,this._ngZone,n,this._platform,this._injector),l=!S.rippleDisabled;l&&k.setupTriggerEvents(t),this._hosts.set(t,{target:S,renderer:k,hasSetUpEvents:l}),t.removeAttribute(Q)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||a)};static ɵprov=he$1({token:a,factory:a.ɵfac})}return a})();var xt=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=Wu({type:a,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return a})();var zt=new I(`MAT_BUTTON_CONFIG`);function _t$1(a){return a==null?void 0:fj(a)}var wt$1=(()=>{class a{_elementRef=g(ar);_ngZone=g(ae);_animationsDisabled=Zt();_config=g(zt,{optional:!0});_focusMonitor=g(Ht$1);_cleanupClick;_renderer=g(ts);_rippleLoader=g(Nt);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=aj(!1,{transform:dj});constructor(){g(dT).load(xt);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||a)};static ɵdir=Ts({type:a,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(Ku(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),Fw(o.color?`mat-`+o.color:``),dg(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,dj],disabled:[2,`disabled`,`disabled`,dj],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,dj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,dj],tabIndex:[2,`tabIndex`,`tabIndex`,_t$1],_tabindex:[2,`tabindex`,`_tabindex`,_t$1],showProgress:[1,`showProgress`]}})}return a})();var Et=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=lr({type:a});static ɵinj=on({imports:[iH]})}return a})();var Ft=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var Ct=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function Pt(a,e){a&1&&(el(0,`div`,2),Dw(1,3),tl())}var kt=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Rn=(()=>{class a extends wt$1{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Ot(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?kt.get(this._appearance):null,i=kt.get(t);o&&n.remove(...o),n.add(...i),this._appearance=t}static ɵfac=function(n){return new(n||a)};static ɵcmp=Wu({type:a,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[$h],ngContentSelectors:Ct,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,o){n&1&&(vw(Ft),Kh(0,`span`,0),Dw(1),el(2,`span`,1),Dw(3,1),tl(),Dw(4,2),JI(5,Pt,2,0,`div`,2),Kh(6,`span`,3)(7,`span`,4)),n&2&&(dg(`mdc-button__ripple`,!o._isFab)(`mdc-fab__ripple`,o._isFab),dE(5),ew(o.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return a})();function Ot(a){return a.hasAttribute(`mat-raised-button`)?`elevated`:a.hasAttribute(`mat-stroked-button`)?`outlined`:a.hasAttribute(`mat-flat-button`)?`filled`:a.hasAttribute(`mat-button`)?`text`:null}var Tn=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=lr({type:a});static ɵinj=on({imports:[Et,iH]})}return a})();function dn(n){n||(n=g(De$1));let s=new x(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(dy(s))}function hn(n,s){let e=!s?.manualCleanup?s?.injector?.get(De$1)??g(De$1):null,i=ye(s?.equal),o;s?.requireSync?o=Qn({kind:0},{equal:i}):o=Qn({kind:1,value:s?.initialValue},{equal:i});let r,a=n.subscribe({next:d=>o.set({kind:1,value:d}),error:d=>{o.set({kind:2,error:d}),r?.()},complete:()=>{r?.()}});if(s?.requireSync&&o().kind===0)throw new m(601,!1);return r=e?.onDestroy(a.unsubscribe.bind(a)),pC(()=>{let d=o();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new m(601,!1)}},{equal:s?.equal})}function ye(n=Object.is){return(s,t)=>s.kind===1&&t.kind===1&&n(s.value,t.value)}function ve(n,s){if(n&1){let t=lw();ls(0,`div`,1)(1,`button`,2),ng(`click`,function(){Gd(t);return Wd(mw().action())}),Ww(2),Ju()()}if(n&2){let t=mw();dE(2),ol(` `,t.data.action,` `)}}var we=[`label`];function ke(n,s){}var Te=Math.pow(2,31)-1;var V=class{_overlayRef;instance;containerInstance;_afterDismissed=new ee;_afterOpened=new ee;_onAction=new ee;_durationTimeoutId;_dismissedByAction=!1;constructor(s,t){this._overlayRef=t,this.containerInstance=s,s._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(s){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(s,Te))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var ce=new I(`MatSnackBarData`);var O=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var Ae=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=Ts({type:n,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return n})();var Ee=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=Ts({type:n,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return n})();var Se=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=Ts({type:n,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return n})();var De=(()=>{class n{snackBarRef=g(V);data=g(ce);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(e){return new(e||n)};static ɵcmp=Wu({type:n,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(e,i){e&1&&(ls(0,`div`,0),Ww(1),Ju(),JI(2,ve,3,1,`div`,1)),e&2&&(dE(),ol(` `,i.data.message,`
`),dE(),ew(i.hasAction?2:-1))},dependencies:[Rn,Ae,Ee,Se],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})();var ft=`_mat-snack-bar-enter`;var _t=`_mat-snack-bar-exit`;var xe=(()=>{class n extends pe$1{_ngZone=g(ae);_elementRef=g(ar);_changeDetectorRef=g(kC);_platform=g(b);_animationsDisabled=Zt();snackBarConfig=g(O);_document=g(z);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=g(fe$1);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ee;_onExit=new ee;_onEnter=new ee;_animationState=`void`;_live;_label;_role;_liveElementId=g(L).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===_t?this._completeExit():t===ft&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?VD(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ft)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(ft)},200)))}exit(){return this._destroyed?ta(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?VD(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(_t)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(_t),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(r=>t.classList.add(r)):t.classList.add(e)),this._exposeToModals();let i=this._label.nativeElement,o=`mdc-snackbar__label`;i.classList.toggle(o,!i.querySelector(`.${o}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<e.length;i++){let o=e[i],r=o.getAttribute(`aria-owns`);this._trackedModals.add(o),r?r.indexOf(t)===-1&&o.setAttribute(`aria-owns`,r+` `+t):o.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute(`aria-owns`);if(e){let i=e.replace(this._liveElementId,``).trim();i.length>0?t.setAttribute(`aria-owns`,i):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector(`[aria-hidden]`),i=t.querySelector(`[aria-live]`);if(e&&i){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(o=document.activeElement),e.removeAttribute(`aria-hidden`),i.appendChild(e),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(e){return new(e||n)};static ɵcmp=Wu({type:n,selectors:[[`mat-snack-bar-container`]],viewQuery:function(e,i){if(e&1&&ig(De$2,7)(we,7),e&2){let o;Iw(o=ww())&&(i._portalOutlet=o.first),Iw(o=ww())&&(i._label=o.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(e,i){e&1&&ng(`animationend`,function(r){return i.onAnimationEnd(r.animationName)})(`animationcancel`,function(r){return i.onAnimationEnd(r.animationName)}),e&2&&dg(`mat-snack-bar-container-enter`,i._animationState===`visible`)(`mat-snack-bar-container-exit`,i._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!i._animationsDisabled)},features:[$h],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(e,i){e&1&&(ls(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Gh(4,ke,0,0,`ng-template`,4),Ju(),Qh(5,`div`),Ju()()),e&2&&(dE(5),Ku(`aria-live`,i._live)(`role`,i._role)(`id`,i._liveElementId))},dependencies:[De$2],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return n})();var Ie=new I(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new O});var le=(()=>{class n{_live=g(Bn);_injector=g(fe$1);_breakpointObserver=g(Dt);_parentSnackBar=g(n,{optional:!0,skipSelf:!0});_defaultConfig=g(Ie);_animationsDisabled=Zt();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=De;snackBarContainerComponent=xe;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e=``,i){let o=k$1(k$1({},this._defaultConfig),i);return o.data={message:t,action:e},o.announcementMessage===t&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector,o=fe$1.create({parent:i||this._injector,providers:[{provide:O,useValue:e}]}),r=new fe$2(this.snackBarContainerComponent,e.viewContainerRef,o),a=t.attach(r);return a.instance.snackBarConfig=e,a.instance}_attach(t,e){let i=k$1(k$1(k$1({},new O),this._defaultConfig),e),o=this._createOverlay(i),r=this._attachSnackBarContainer(o,i),a=new V(r,o);if(t instanceof rr){let d=new te(t,null,{$implicit:i.data,snackBarRef:a});a.instance=r.attachTemplatePortal(d)}else{let c=new fe$2(t,void 0,this._createInjector(i,a));a.instance=r.attachComponentPortal(c).instance}return this._breakpointObserver.observe(_o.HandsetPortrait).pipe(dy(o.detachments())).subscribe(d=>{o.overlayElement.classList.toggle(this.handsetCssClass,d.matches)}),i.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(a,i),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new oe;e.direction=t.direction;let i=ge$1(this._injector),o=t.direction===`rtl`,r=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!o||t.horizontalPosition===`end`&&o,a=!r&&t.horizontalPosition!==`center`;return r?i.left(`0`):a?i.right(`0`):i.centerHorizontally(),t.verticalPosition===`top`?i.top(`0`):i.bottom(`0`),e.positionStrategy=i,e.disableAnimations=this._animationsDisabled,Ae$1(this._injector,e)}_createInjector(t,e){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector;return fe$1.create({parent:i||this._injector,providers:[{provide:V,useValue:e},{provide:ce,useValue:t.data}]})}static ɵfac=function(e){return new(e||n)};static ɵprov=he$1({token:n,factory:n.ɵfac})}return n})();var jn=(()=>{class n{snackBar=g(le);error(t,e){let i=this.snackBar.open(t,e?`Spróbuj ponownie`:`Zamknij`,{duration:9e3,horizontalPosition:`right`,verticalPosition:`bottom`,panelClass:`scanner-error-snackbar`});e&&i.onAction().subscribe(()=>{e()})}success(t){this.snackBar.open(t,`Zamknij`,{duration:5e3,horizontalPosition:`right`,verticalPosition:`bottom`,panelClass:`scanner-success-snackbar`})}static ɵfac=function(e){return new(e||n)};static ɵprov=A({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Re=[`tooltip`];var Oe=20;var Pe=new I(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g(fe$1);return()=>Nt$1(n,{scrollThrottle:Oe})}});var Me=new I(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var de=`tooltip-panel`;var Ne={passive:!0};var Le=8;var Be=8;var je=24;var Fe=200;var Ue=(()=>{class n{_elementRef=g(ar);_ngZone=g(ae);_platform=g(b);_ariaDescriber=g(za);_focusMonitor=g(Ht$1);_dir=g(mT);_injector=g(fe$1);_viewContainerRef=g(ur);_mediaMatcher=g(Ue$1);_document=g(z);_renderer=g(ts);_animationsDisabled=Zt();_defaultOptions=g(Me,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=he;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=ia(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=ia(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=we$1(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=we$1(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ee;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Le}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(dy(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new fe$2(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(dy(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&r._origin instanceof ar)return this._overlayRef;this._detach()}let e=this._injector.get(Se$1).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${de}`,o=Bt(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(dy(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ae$1(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(Pe)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(dy(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(dy(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(dy(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(dy(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(k$1(k$1({},i.main),o.main)),this._addOffset(k$1(k$1({},i.fallback),o.fallback))])}_addOffset(t){let e=Be,i=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=i?-e:e:t.originX===`end`&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`||e==`below`?i={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={originX:`end`,originY:`center`});let{x:o,y:r}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:r}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`?i={overlayX:`center`,overlayY:`bottom`}:e==`below`?i={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:r}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),VD(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:o}=t,r;if(e===`center`?this._dir&&this._dir.value===`rtl`?r=i===`end`?`left`:`right`:r=i===`start`?`left`:`right`:r=e===`bottom`&&o===`top`?`above`:`below`,r!==this._currentPosition){let a=this._overlayRef;if(a){let d=`${this._cssClassPrefix}-${de}-`;a.removePanelClass(d+this._currentPosition),a.addPanelClass(d+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,Ne))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,i=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||VD({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!H$1(t):!0;static ɵfac=function(e){return new(e||n)};static ɵdir=Ts({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,i){e&2&&dg(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var he=(()=>{class n{_changeDetectorRef=g(kC);_elementRef=g(ar);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Zt();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new ee;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>je&&t.width>=Fe}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:i),e.classList.add(t?i:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let r=getComputedStyle(e);(r.getPropertyValue(`animation-duration`)===`0s`||r.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||n)};static ɵcmp=Wu({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(e,i){if(e&1&&ig(Re,7),e&2){let o;Iw(o=ww())&&(i._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(e,i){e&1&&ng(`mouseleave`,function(r){return i._handleMouseLeave(r)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(e,i){e&1&&(el(0,`div`,1,0),rg(`animationend`,function(r){return i._handleAnimationEnd(r)}),el(2,`div`,2),Ww(3),tl()()),e&2&&(Fw(i.tooltipClass),dg(`mdc-tooltip--multiline`,i._isMultiline),dE(3),yg(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();var di=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=lr({type:n});static ɵinj=on({imports:[Yt,ke$1,iH,kt$1]})}return n})();var ze=new Set([`.git`,`node_modules`,`target`,`dist`,`build`,`.next`,`.angular`,`.venv`,`venv`,`vendor`,`coverage`]);var $e=/^\.(?:github\/(?:instructions|skills|agents|prompts)|claude\/(?:skills|agents)|agents\/skills)\/.+\.(?:md|txt)$/i;var et=3e4;var gt=300;var bt=131072;function w(n){let s=n.toLowerCase();return/(?:^|\/)(agents|claude|gemini)\.md$/.test(s)||s===`.github/copilot-instructions.md`||s===`.claude/claude.md`||/^\.github\/instructions\/.+\.instructions\.md$/.test(s)?`INSTRUCTIONS`:/^\.(github|claude|agents)\/skills\/[^/]+\/skill\.md$/.test(s)?`SKILLS`:/^\.(github|claude)\/agents\/[^/]+\.md$/.test(s)?`AGENTS`:[`.vscode/mcp.json`,`.github/mcp.json`,`.mcp.json`].includes(s)?`MCP`:/^\.github\/prompts\/.+\.prompt\.md$/.test(s)?`PROMPTS`:`CONTEXT`}function P(n){return n.length<=500&&!/[\u0000-\u001f\\:]/.test(n)&&n.split(`/`).every(s=>s!==``&&s!==`.`&&s!==`..`&&!ze.has(s.toLowerCase()))&&!/(?:^|\/)\.env(?:\.|$)/i.test(n)}function mi(n){let s=n[0]?.webkitRelativePath.split(`/`)[0];if(!s||n.some(i=>!i.webkitRelativePath.startsWith(s+`/`)))throw new Error(`Wskaż jeden folder repozytorium w oknie wyboru katalogu.`);let t=n.slice(0,et).map(i=>({file:i,path:i.webkitRelativePath.slice(s.length+1)})),e=[...new Set(t.filter(i=>/\/\.git(?:\/|$)/.test(i.path)).map(i=>i.path.split(`/.git`)[0]+`/`))];return{name:s,complete:n.length<=et,refreshable:!1,gitDetected:t.some(i=>i.path===`.git`||i.path.startsWith(`.git/`)),gitEntries:t.filter(i=>me(i.path)).map(i=>({path:i.path,read:async()=>i.file})),entries:t.filter(i=>P(i.path)&&!e.some(o=>i.path.startsWith(o))).map(i=>({path:i.path,read:async()=>i.file}))}}async function pi(){let n=window;if(!n.showDirectoryPicker)return;let s=await n.showDirectoryPicker({mode:`read`}),t=[],e=0,i=!0,o=!1,r=[],a=0,d=async(p,h=`.git/`,g=0)=>{if(!(g>20))for await(let u of p.values()){if(++a>1e3)return;let m=h+u.name;u.kind===`file`&&me(m)?r.push({path:m,read:()=>u.getFile()}):u.kind===`directory`&&(m===`.git/refs`||m.startsWith(`.git/refs/heads`))&&await d(u,m+`/`,g+1)}},c=async(p,h,g)=>{if(g>20){i=!1;return}let u=[];for await(let m of p.values()){if(++e>et){i=!1;return}u.push(m)}if(u.some(m=>m.name===`.git`)){if(h)return;o=!0}for(let m of u){let E=h+m.name;if(!h&&m.name===`.git`){if(m.kind===`directory`)try{await d(m)}catch{}continue}if(P(E)){if(m.kind===`directory`)try{await c(m,E+`/`,g+1)}catch{i=!1}else t.push({path:E,read:()=>m.getFile()});if(e>et)return}}};return await c(s,``,0),{name:s.name,entries:t,complete:i,gitDetected:o,refreshable:!0,gitEntries:r}}function me(n){return[`.git/config`,`.git/HEAD`,`.git/packed-refs`].includes(n)||/^\.git\/refs\/heads\/(?!.*(?:^|\/)\.\.(?:\/|$))[^\\\u0000-\u001f:]+$/.test(n)}function k(n){return n.replace(/([a-z]+:\/\/)[^/\s"'@]+@/gi,`$1[UKRYTO]@`).replace(/(\bname=["'][^"']*(?:token|password|secret|api[_-]?key|authorization)[^"']*["'][^>]*\bvalue=["'])([^"']+)(["'])/gi,`$1[UKRYTO]$3`).replace(/(\bvalue=["'])([^"']+)(["'][^>]*\bname=["'][^"']*(?:token|password|secret|api[_-]?key|authorization)[^"']*["'])/gi,`$1[UKRYTO]$3`).replace(/\b(?:gh[pousr]_[A-Za-z0-9_]{16,}|github_pat_[A-Za-z0-9_]{16,}|sk-[A-Za-z0-9_-]{20,})\b/g,`[UKRYTO]`).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]{12,}\b/gi,`Bearer [UKRYTO]`).replace(/-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----[\s\S]*?-----END (?:[A-Z ]+ )?PRIVATE KEY-----/g,s=>s.split(`
`).map(()=>`[UKRYTO]`).join(`
`)).replace(/(["']?(?:[\w.-]*(?:token|password|secret|api[_-]?key|authorization))["']?\s*[:=]\s*["']?)([^\s,"';}]+)/gi,(s,t,e)=>/^[\[$]/.test(e)||[`null`,`true`,`false`].includes(e)||e.length<6?s:t+`[UKRYTO]`)}async function nt(n){if(n.size>bt)throw new Error(`TOO_LARGE`);let s=typeof n.arrayBuffer==`function`?await n.arrayBuffer():await new Promise((e,i)=>{let o=new FileReader;o.onload=()=>o.result instanceof ArrayBuffer?e(o.result):i(new Error(`UNREADABLE`)),o.onerror=()=>i(new Error(`UNREADABLE`)),o.readAsArrayBuffer(n)}),t;try{t=new TextDecoder(`utf-8`,{fatal:!0}).decode(s).replace(/\r\n?/g,`
`).replace(/^\uFEFF/,``)}catch{throw new Error(`UNSUPPORTED_ENCODING`)}if(t.includes(`\0`))throw new Error(`UNSUPPORTED_ENCODING`);return t}async function ui(n,s){let t=new Map;for(let r of n.entries)P(r.path)&&w(r.path)!==`CONTEXT`&&t.set(r.path,r);let e=[],i=[...t.values()].sort((r,a)=>+(w(r.path)===`CONTEXT`)-+(w(a.path)===`CONTEXT`)||r.path.localeCompare(a.path)),o=new Set;for(let r=0;r<i.length&&e.length<gt;r++){s?.throwIfAborted();let a=i[r];if(!o.has(a.path)){o.add(a.path);try{let c=await nt(await a.read()),p=k(c);e.push(l(k$1({},a),{category:w(a.path),content:p,bytes:new TextEncoder().encode(p).length,redacted:c!==p,selected:!0}))}catch(d){s?.throwIfAborted();let c=d instanceof Error?d.message:``,p=c===`TOO_LARGE`||c===`UNSUPPORTED_ENCODING`||c===`LIMIT`?c:`UNREADABLE`;e.push(l(k$1({},a),{category:w(a.path),content:``,bytes:0,redacted:!1,selected:!1,omissionReason:p,error:p===`TOO_LARGE`?`Plik przekracza 128 KiB.`:p===`UNSUPPORTED_ENCODING`?`Plik nie jest tekstem UTF-8.`:`Nie udało się odczytać pliku.`}))}}}return{files:e,complete:n.complete&&i.every(r=>o.has(r.path))}}function pe(n,s){return[...s.matchAll(/\]\(([^)\s#]+)(?:#[^)\s]*)?\)/g)].map(t=>Ve(n,t[1])).filter(t=>!!t&&$e.test(t)&&P(t))}function Ve(n,s){if(/^(?:\/|~|[a-z]+:)/i.test(s)||s.includes(`$`)||s.includes(`\\`))return;let t=n.split(`/`).slice(0,-1);for(let e of s.split(`/`))if(e===`..`){if(!t.length)return;t.pop()}else e!==`.`&&e&&t.push(e);return t.join(`/`)}function yt(n){return/^\.vscode\/(settings|extensions)\.json$/i.test(n)||/^[^/]+\.code-workspace$/i.test(n)||/^\.aiassistant\/rules\/.+\.md$/i.test(n)||[`.aiignore`,`.noai`].includes(n)||/^\.idea\/[^/]+\.xml$/i.test(n)}function vt(n){return[...n.matchAll(/<component\b[^>]*\bname=["'][^"']*(?:aiassistant|github[-_.]?copilot|junie)[^"']*["'][^>]*(?:\/>|>[\s\S]*?<\/component>)/gi)].map(s=>s[0]).join(`
`)}async function bi(n,s){let t=[],e=n.entries.filter(o=>yt(o.path)),i=e.length<=300;for(let o of e.slice(0,300)){s?.throwIfAborted();try{let r=await nt(await o.read());if(o.path.toLowerCase().startsWith(`.idea/`)&&(r=vt(r),!r))continue;let a=k(r);t.push({path:o.path,content:a,bytes:new TextEncoder().encode(a).length,redacted:a!==r,omissionReason:null})}catch(r){if(s?.throwIfAborted(),o.path.toLowerCase().startsWith(`.idea/`)){i=!1;continue}let a=r instanceof Error?r.message:``;t.push({path:o.path,content:``,bytes:0,redacted:!1,omissionReason:a===`TOO_LARGE`||a===`UNSUPPORTED_ENCODING`||a===`LIMIT`?a:`UNREADABLE`})}}return{files:t,complete:i}}function He(n){let s=n.trim().replace(/^"|"$/g,``);if(!s||s.length>2e3||/[\u0000-\u001f]/.test(s))return null;try{let t=new URL(s);return[`http:`,`https:`,`ssh:`,`git:`].includes(t.protocol)?(t.username=``,t.password=``,t.search=``,t.hash=``,k(t.href)):null}catch{let t=s.match(/^(?:[^@/\s]+@)?([a-z\d.-]+):([^?#\s]+)$/i);return t?k(t[1]+`:`+t[2]):null}}async function yi(n){let s=new Map;for(let c of n.gitEntries??[])try{s.set(c.path,await nt(await c.read()))}catch{}let t=s.get(`.git/HEAD`)?.trim(),e=t?.match(/^ref:\s*(refs\/heads\/[^\s\\]+)$/)?.[1],i=e?s.get(`.git/packed-refs`)?.split(`
`).find(c=>c.trim().split(/\s+/)[1]===e)?.split(/\s+/)[0]:void 0,o=e?s.get(`.git/`+e)?.trim()??i:t,r=o&&/^(?:[a-f\d]{40}|[a-f\d]{64})$/i.test(o)?o:null,a=null,d=!1;for(let c of(s.get(`.git/config`)??``).split(`
`)){let p=c.trim().match(/^\[([^\]]+)\]/);if(p)d=/^remote\s+"origin"$/i.test(p[1]);else if(d){let h=c.match(/^\s*url\s*=\s*(.+)$/i);h&&(a=He(h[1]))}}return{origin:a,branch:e?.slice(11)??null,commit:r,availability:s.size===0?`UNAVAILABLE`:r&&a?`AVAILABLE`:`PARTIAL`}}var Ge=1;var ue=8*1024*1024;var wt=n=>typeof n==`object`&&n!==null&&!Array.isArray(n);var Xe=n=>typeof n==`string`&&/^[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}$/i.test(n);function Ti(n){if(typeof n!=`string`)return!1;try{let s=new URL(n);return[`http:`,`https:`].includes(s.protocol)&&s.origin===n}catch{return!1}}function fe(n){try{return new TextEncoder().encode(JSON.stringify(n)).byteLength}catch{throw new Error(`Niepoprawna paczka repozytorium.`)}}function _(n){if(!n)throw new Error(`Niepoprawna paczka repozytorium lub zakres plików.`)}function H(n,s){return typeof n==`string`&&n.length>0&&n.length<=s&&!/[\u0000-\u001f]/.test(n)}function _e(n){_(H(n,2e3));let s=new URL(n);return _([`http:`,`https:`].includes(s.protocol)&&!s.username&&!s.password&&!s.search&&!s.hash),s}function Ye(n,s){_(wt(n)&&n.kind===`gitlab`);let t=_e(n.baseUrl),e=_e(n.webUrl);_(t.pathname.endsWith(`/`)&&t.origin===e.origin&&(!s||t.origin===s)),_(Number.isSafeInteger(n.projectId)&&Number(n.projectId)>0);let i=n.projectPath;return _(H(i,500)&&i.split(`/`).length>=2&&i.split(`/`).every(o=>/^[\p{L}\p{N}_.-]+$/u.test(o)&&o!==`.`&&o!==`..`)),_(decodeURIComponent(e.pathname).replace(/\/$/,``)===decodeURIComponent(t.pathname)+i),_(H(n.ref,500)&&[`branch`,`tag`,`commit`].includes(String(n.refKind))&&typeof n.commit==`string`&&/^(?:[a-f\d]{40}|[a-f\d]{64})$/i.test(n.commit)),{kind:`gitlab`,baseUrl:t.href,projectId:Number(n.projectId),projectPath:i,webUrl:e.href.replace(/\/$/,``),ref:n.ref,refKind:n.refKind,commit:n.commit}}function Ai(n,s){_(fe(n)<=ue&&wt(n)),_(n.format===`agent-scanner-repository-transfer`&&n.version===1&&Xe(n.transferId)&&H(n.name,200)&&typeof n.inventoryComplete==`boolean`&&typeof n.collectedAt==`string`&&Number.isFinite(Date.parse(n.collectedAt)));let t=Ye(n.source,s),e=new Set,i=(c,p)=>(_(Array.isArray(c)&&c.length<=gt),c.map(h=>{_(wt(h)&&typeof h.path==`string`&&P(h.path)&&!e.has(h.path)&&typeof h.content==`string`&&!h.content.includes(`\0`)&&typeof h.selected==`boolean`);let g=h.path;e.add(g);let u=h.omissionReason;_(u===null||[`UNREADABLE`,`TOO_LARGE`,`LIMIT`,`UNSUPPORTED_ENCODING`].includes(String(u))),_(new TextEncoder().encode(h.content).length<=bt&&(!u||h.content===``&&!h.selected)),p&&_(yt(g));let m=h.content.replace(/\r\n?/g,`
`).replace(/^\uFEFF/,``);return p&&g.toLowerCase().startsWith(`.idea/`)&&(m=vt(m)),{path:g,content:k(m),selected:h.selected,omissionReason:u}})),o=i(n.files,!1),r=i(n.reportFiles,!0),a=new Set(o.filter(c=>w(c.path)!==`CONTEXT`).flatMap(c=>pe(c.path,c.content)));_(o.every(c=>w(c.path)!==`CONTEXT`||a.has(c.path))),_(Array.isArray(n.issues)&&n.issues.length<=50&&n.issues.every(c=>H(c,300)));let d={format:`agent-scanner-repository-transfer`,version:1,transferId:n.transferId,collectedAt:new Date(n.collectedAt).toISOString(),name:k(n.name),source:t,inventoryComplete:n.inventoryComplete,issues:n.issues.map(c=>k(String(c))),files:o,reportFiles:r};return _(fe(d)<=ue),d}function ge(n){let s=t=>l(k$1({},t),{bytes:new TextEncoder().encode(t.content).length,redacted:t.content.includes(`[UKRYTO]`)});return{id:crypto.randomUUID(),repositoryId:crypto.randomUUID(),repositoryName:n.name,savedAt:new Date().toISOString(),inventoryComplete:n.inventoryComplete,gitDetected:!0,git:{origin:null,branch:n.source.refKind===`branch`?n.source.ref:null,commit:n.source.commit,availability:`AVAILABLE`},source:n.source,sourceIssues:n.issues,files:n.files.map(t=>l(k$1({},s(t)),{category:w(t.path)})),reportFiles:n.reportFiles.map(s)}}async function be(n){let s=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(JSON.stringify(n)));return Array.from(new Uint8Array(s),t=>t.toString(16).padStart(2,`0`)).join(``)}var qe=`agent-scanner-demo-repositories`;var Ci=(()=>{class n{opening;constructor(){g(De$1).onDestroy(()=>{this.close()})}open(){return this.opening||(this.opening=new Promise((t,e)=>{if(!globalThis.indexedDB){e(new Error(`IndexedDB jest niedostępne. Podgląd wymaga lokalnego zapisu w przeglądarce.`));return}let i=indexedDB.open(qe,2),o=!1;i.onupgradeneeded=()=>{i.result.objectStoreNames.contains(`snapshots`)||i.result.createObjectStore(`snapshots`,{keyPath:`id`}),i.result.objectStoreNames.contains(`transfers`)||i.result.createObjectStore(`transfers`,{keyPath:`id`})},i.onblocked=()=>{o=!0,e(new Error(`Zamknij inne karty Agent Scanner, aby otworzyć lokalny magazyn repozytoriów.`))},i.onerror=()=>e(i.error),i.onsuccess=()=>{let r=i.result;if(o){r.close();return}r.onversionchange=()=>{r.close(),this.opening=void 0},t(r)}}).catch(t=>{throw this.opening=void 0,G(t)})),this.opening}async close(){if(this.opening)try{(await this.opening).close()}catch{}this.opening=void 0}async operation(t,e){try{let i=await this.open();return await new Promise((o,r)=>{let a=i.transaction(`snapshots`,t),d=e(a.objectStore(`snapshots`));a.oncomplete=()=>o(d.result),a.onabort=()=>r(a.error??d.error),a.onerror=()=>{}})}catch(i){throw G(i)}}list(){return this.operation(`readonly`,t=>t.getAll())}get(t){return this.operation(`readonly`,e=>e.get(t))}async save(t){await this.operation(`readwrite`,e=>e.put(t))}async delete(t){await this.operation(`readwrite`,e=>e.delete(t))}async clearAll(){try{let t=await this.open();await new Promise((e,i)=>{let o=t.transaction([`snapshots`,`transfers`],`readwrite`);o.objectStore(`snapshots`).clear(),o.objectStore(`transfers`).clear(),o.oncomplete=()=>e(),o.onabort=()=>i(o.error),o.onerror=()=>{}})}catch(t){throw G(t)}}async importTransfer(t,e){let i=await be(t),o=ge(t);try{let r=await this.open();return e?.throwIfAborted(),await new Promise((a,d)=>{let c=r.transaction([`snapshots`,`transfers`],`readwrite`),p=c.objectStore(`snapshots`),h=c.objectStore(`transfers`),g=o,u,m=()=>{try{c.abort(),u=new Error(`Import anulowany.`)}catch{}};e?.addEventListener(`abort`,m,{once:!0});let E=h.get(t.transferId);E.onsuccess=()=>{try{let M=E.result;if(M){if(M.fingerprint!==i){u=new Error(`Ten identyfikator transferu ma inną zawartość.`),c.abort();return}let it=p.get(M.snapshotId);it.onsuccess=()=>{it.result?g=it.result:(u=new Error(`Migawka tego transferu została usunięta. Uruchom nowy import w GitLabie.`),c.abort())}}else p.add(o),h.add({id:t.transferId,fingerprint:i,snapshotId:o.id})}catch(M){u=G(M),c.abort()}},c.oncomplete=()=>{e?.removeEventListener(`abort`,m),a(g)},c.onabort=()=>{e?.removeEventListener(`abort`,m),d(u??c.error)},c.onerror=()=>{}})}catch(r){throw G(r)}}static ɵfac=function(e){return new(e||n)};static ɵprov=A({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function G(n){return n instanceof DOMException&&n.name===`QuotaExceededError`?new Error(`Brak miejsca w przeglądarce. Usuń nieużywane podglądy repozytoriów i spróbuj ponownie.`):n instanceof Error&&!(n instanceof DOMException)?n:new Error(`Nie udało się zapisać lub odczytać plików repozytorium w IndexedDB. Sprawdź ustawienia przeglądarki i spróbuj ponownie.`)}export{Tn as C,Rn as S,xt as T,w as _,Ue as a,Et as b,bi as c,hn as d,jn as f,ui as g,pi as h,Ti as i,di as l,mi as m,Ci as n,Xe as o,k as p,He as r,Ye as s,Ai as t,dn as u,wt as v,an as w,Ht as x,yi as y};