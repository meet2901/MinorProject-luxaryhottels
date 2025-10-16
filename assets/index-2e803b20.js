function _0(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(i,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var $0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hm={exports:{}},Do={},gm={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=Symbol.for("react.element"),H0=Symbol.for("react.portal"),U0=Symbol.for("react.fragment"),V0=Symbol.for("react.strict_mode"),W0=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),q0=Symbol.for("react.context"),Y0=Symbol.for("react.forward_ref"),Q0=Symbol.for("react.suspense"),J0=Symbol.for("react.memo"),K0=Symbol.for("react.lazy"),Kd=Symbol.iterator;function X0(e){return e===null||typeof e!="object"?null:(e=Kd&&e[Kd]||e["@@iterator"],typeof e=="function"?e:null)}var xm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vm=Object.assign,ym={};function On(e,t,r){this.props=e,this.context=t,this.refs=ym,this.updater=r||xm}On.prototype.isReactComponent={};On.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};On.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wm(){}wm.prototype=On.prototype;function Fc(e,t,r){this.props=e,this.context=t,this.refs=ym,this.updater=r||xm}var Ic=Fc.prototype=new wm;Ic.constructor=Fc;vm(Ic,On.prototype);Ic.isPureReactComponent=!0;var Xd=Array.isArray,bm=Object.prototype.hasOwnProperty,Bc={current:null},jm={key:!0,ref:!0,__self:!0,__source:!0};function km(e,t,r){var i,a={},o=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)bm.call(t,i)&&!jm.hasOwnProperty(i)&&(a[i]=t[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:Mi,type:e,key:o,ref:s,props:a,_owner:Bc.current}}function Z0(e,t){return{$$typeof:Mi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mi}function eg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Zd=/\/+/g;function os(e,t){return typeof e=="object"&&e!==null&&e.key!=null?eg(""+e.key):t.toString(36)}function za(e,t,r,i,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Mi:case H0:s=!0}}if(s)return s=e,a=a(s),e=i===""?"."+os(s,0):i,Xd(a)?(r="",e!=null&&(r=e.replace(Zd,"$&/")+"/"),za(a,t,r,"",function(d){return d})):a!=null&&(Lc(a)&&(a=Z0(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(Zd,"$&/")+"/")+e)),t.push(a)),1;if(s=0,i=i===""?".":i+":",Xd(e))for(var c=0;c<e.length;c++){o=e[c];var l=i+os(o,c);s+=za(o,t,r,l,a)}else if(l=X0(e),typeof l=="function")for(e=l.call(e),c=0;!(o=e.next()).done;)o=o.value,l=i+os(o,c++),s+=za(o,t,r,l,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Vi(e,t,r){if(e==null)return e;var i=[],a=0;return za(e,i,"","",function(o){return t.call(r,o,a++)}),i}function tg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},Pa={transition:null},rg={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Pa,ReactCurrentOwner:Bc};function Sm(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Vi,forEach:function(e,t,r){Vi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Vi(e,function(){t++}),t},toArray:function(e){return Vi(e,function(t){return t})||[]},only:function(e){if(!Lc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=On;G.Fragment=U0;G.Profiler=W0;G.PureComponent=Fc;G.StrictMode=V0;G.Suspense=Q0;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rg;G.act=Sm;G.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=vm({},e.props),a=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Bc.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)bm.call(t,l)&&!jm.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:Mi,type:e.type,key:a,ref:o,props:i,_owner:s}};G.createContext=function(e){return e={$$typeof:q0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:G0,_context:e},e.Consumer=e};G.createElement=km;G.createFactory=function(e){var t=km.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Y0,render:e}};G.isValidElement=Lc;G.lazy=function(e){return{$$typeof:K0,_payload:{_status:-1,_result:e},_init:tg}};G.memo=function(e,t){return{$$typeof:J0,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Pa.transition;Pa.transition={};try{e()}finally{Pa.transition=t}};G.unstable_act=Sm;G.useCallback=function(e,t){return Ue.current.useCallback(e,t)};G.useContext=function(e){return Ue.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ue.current.useEffect(e,t)};G.useId=function(){return Ue.current.useId()};G.useImperativeHandle=function(e,t,r){return Ue.current.useImperativeHandle(e,t,r)};G.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ue.current.useMemo(e,t)};G.useReducer=function(e,t,r){return Ue.current.useReducer(e,t,r)};G.useRef=function(e){return Ue.current.useRef(e)};G.useState=function(e){return Ue.current.useState(e)};G.useSyncExternalStore=function(e,t,r){return Ue.current.useSyncExternalStore(e,t,r)};G.useTransition=function(){return Ue.current.useTransition()};G.version="18.3.1";gm.exports=G;var j=gm.exports;const Ne=fm(j),ng=_0({__proto__:null,default:Ne},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig=j,ag=Symbol.for("react.element"),og=Symbol.for("react.fragment"),sg=Object.prototype.hasOwnProperty,lg=ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cg={key:!0,ref:!0,__self:!0,__source:!0};function Cm(e,t,r){var i,a={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)sg.call(t,i)&&!cg.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)a[i]===void 0&&(a[i]=t[i]);return{$$typeof:ag,type:e,key:o,ref:s,props:a,_owner:lg.current}}Do.Fragment=og;Do.jsx=Cm;Do.jsxs=Cm;hm.exports=Do;var n=hm.exports,Cl={},Em={exports:{}},nt={},zm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,T){var O=R.length;R.push(T);e:for(;0<O;){var H=O-1>>>1,V=R[H];if(0<a(V,T))R[H]=T,R[O]=V,O=H;else break e}}function r(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var T=R[0],O=R.pop();if(O!==T){R[0]=O;e:for(var H=0,V=R.length,he=V>>>1;H<he;){var X=2*(H+1)-1,ge=R[X],le=X+1,te=R[le];if(0>a(ge,O))le<V&&0>a(te,ge)?(R[H]=te,R[le]=O,H=le):(R[H]=ge,R[X]=O,H=X);else if(le<V&&0>a(te,O))R[H]=te,R[le]=O,H=le;else break e}}return T}function a(R,T){var O=R.sortIndex-T.sortIndex;return O!==0?O:R.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var l=[],d=[],p=1,m=null,g=3,v=!1,x=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var T=r(d);T!==null;){if(T.callback===null)i(d);else if(T.startTime<=R)i(d),T.sortIndex=T.expirationTime,t(l,T);else break;T=r(d)}}function k(R){if(w=!1,h(R),!x)if(r(l)!==null)x=!0,J(S);else{var T=r(d);T!==null&&fe(k,T.startTime-R)}}function S(R,T){x=!1,w&&(w=!1,y(z),z=-1),v=!0;var O=g;try{for(h(T),m=r(l);m!==null&&(!(m.expirationTime>T)||R&&!A());){var H=m.callback;if(typeof H=="function"){m.callback=null,g=m.priorityLevel;var V=H(m.expirationTime<=T);T=e.unstable_now(),typeof V=="function"?m.callback=V:m===r(l)&&i(l),h(T)}else i(l);m=r(l)}if(m!==null)var he=!0;else{var X=r(d);X!==null&&fe(k,X.startTime-T),he=!1}return he}finally{m=null,g=O,v=!1}}var E=!1,P=null,z=-1,L=5,_=-1;function A(){return!(e.unstable_now()-_<L)}function N(){if(P!==null){var R=e.unstable_now();_=R;var T=!0;try{T=P(!0,R)}finally{T?I():(E=!1,P=null)}}else E=!1}var I;if(typeof f=="function")I=function(){f(N)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,Y=F.port2;F.port1.onmessage=N,I=function(){Y.postMessage(null)}}else I=function(){b(N,0)};function J(R){P=R,E||(E=!0,I())}function fe(R,T){z=b(function(){R(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,J(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var O=g;g=T;try{return R()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,T){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=g;g=R;try{return T()}finally{g=O}},e.unstable_scheduleCallback=function(R,T,O){var H=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?H+O:H):O=H,R){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=O+V,R={id:p++,callback:T,priorityLevel:R,startTime:O,expirationTime:V,sortIndex:-1},O>H?(R.sortIndex=O,t(d,R),r(l)===null&&R===r(d)&&(w?(y(z),z=-1):w=!0,fe(k,O-H))):(R.sortIndex=V,t(l,R),x||v||(x=!0,J(S))),R},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(R){var T=g;return function(){var O=g;g=T;try{return R.apply(this,arguments)}finally{g=O}}}})(Pm);zm.exports=Pm;var dg=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug=j,rt=dg;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nm=new Set,hi={};function Ur(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(hi[e]=t,e=0;e<t.length;e++)Nm.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,pg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eu={},tu={};function mg(e){return El.call(tu,e)?!0:El.call(eu,e)?!1:pg.test(e)?tu[e]=!0:(eu[e]=!0,!1)}function fg(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hg(e,t,r,i){if(t===null||typeof t>"u"||fg(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,r,i,a,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var _c=/[\-:]([a-z])/g;function $c(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_c,$c);Oe[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_c,$c);Oe[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_c,$c);Oe[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hc(e,t,r,i){var a=Oe.hasOwnProperty(t)?Oe[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hg(t,r,a,i)&&(r=null),i||a===null?mg(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,i=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var Jt=ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wi=Symbol.for("react.element"),en=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),Vc=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),Nl=Symbol.for("react.suspense_list"),Wc=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),Tm=Symbol.for("react.offscreen"),ru=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,ss;function Zn(e){if(ss===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ss=t&&t[1]||""}return`
`+ss+e}var ls=!1;function cs(e,t){if(!e||ls)return"";ls=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),o=i.stack.split(`
`),s=a.length-1,c=o.length-1;1<=s&&0<=c&&a[s]!==o[c];)c--;for(;1<=s&&0<=c;s--,c--)if(a[s]!==o[c]){if(s!==1||c!==1)do if(s--,c--,0>c||a[s]!==o[c]){var l=`
`+a[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=c);break}}}finally{ls=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Zn(e):""}function gg(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=cs(e.type,!1),e;case 11:return e=cs(e.type.render,!1),e;case 1:return e=cs(e.type,!0),e;default:return""}}function Dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tn:return"Fragment";case en:return"Portal";case zl:return"Profiler";case Uc:return"StrictMode";case Pl:return"Suspense";case Nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rm:return(e.displayName||"Context")+".Consumer";case Dm:return(e._context.displayName||"Context")+".Provider";case Vc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wc:return t=e.displayName||null,t!==null?t:Dl(e.type)||"Memo";case rr:t=e._payload,e=e._init;try{return Dl(e(t))}catch{}}return null}function xg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(t);case 8:return t===Uc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Am(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vg(e){var t=Am(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=vg(e))}function Om(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=Am(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var r=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function nu(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=yr(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mm(e,t){t=t.checked,t!=null&&Hc(e,"checked",t,!1)}function Tl(e,t){Mm(e,t);var r=yr(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Al(e,t.type,r):t.hasOwnProperty("defaultValue")&&Al(e,t.type,yr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Al(e,t,r){(t!=="number"||Ya(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ei=Array.isArray;function fn(e,t,r,i){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&i&&(e[r].defaultSelected=!0)}else{for(r=""+yr(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function au(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(D(92));if(ei(r)){if(1<r.length)throw Error(D(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:yr(r)}}function Fm(e,t){var r=yr(t.value),i=yr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function ou(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Im(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Im(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,Bm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gi(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yg=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(e){yg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ii[t]=ii[e]})});function Lm(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ii.hasOwnProperty(e)&&ii[e]?(""+t).trim():t+"px"}function _m(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,a=Lm(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,a):e[r]=a}}var wg=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(wg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ll=null,hn=null,gn=null;function su(e){if(e=Bi(e)){if(typeof Ll!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Mo(t),Ll(e.stateNode,e.type,t))}}function $m(e){hn?gn?gn.push(e):gn=[e]:hn=e}function Hm(){if(hn){var e=hn,t=gn;if(gn=hn=null,su(e),t)for(e=0;e<t.length;e++)su(t[e])}}function Um(e,t){return e(t)}function Vm(){}var ds=!1;function Wm(e,t,r){if(ds)return e(t,r);ds=!0;try{return Um(e,t,r)}finally{ds=!1,(hn!==null||gn!==null)&&(Vm(),Hm())}}function xi(e,t){var r=e.stateNode;if(r===null)return null;var i=Mo(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(D(231,t,typeof r));return r}var _l=!1;if(Gt)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){_l=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{_l=!1}function bg(e,t,r,i,a,o,s,c,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(p){this.onError(p)}}var ai=!1,Qa=null,Ja=!1,$l=null,jg={onError:function(e){ai=!0,Qa=e}};function kg(e,t,r,i,a,o,s,c,l){ai=!1,Qa=null,bg.apply(jg,arguments)}function Sg(e,t,r,i,a,o,s,c,l){if(kg.apply(this,arguments),ai){if(ai){var d=Qa;ai=!1,Qa=null}else throw Error(D(198));Ja||(Ja=!0,$l=d)}}function Vr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Gm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lu(e){if(Vr(e)!==e)throw Error(D(188))}function Cg(e){var t=e.alternate;if(!t){if(t=Vr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var r=e,i=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){r=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return lu(a),e;if(o===i)return lu(a),t;o=o.sibling}throw Error(D(188))}if(r.return!==i.return)r=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===r){s=!0,r=a,i=o;break}if(c===i){s=!0,i=a,r=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===r){s=!0,r=o,i=a;break}if(c===i){s=!0,i=o,r=a;break}c=c.sibling}if(!s)throw Error(D(189))}}if(r.alternate!==i)throw Error(D(190))}if(r.tag!==3)throw Error(D(188));return r.stateNode.current===r?e:t}function qm(e){return e=Cg(e),e!==null?Ym(e):null}function Ym(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ym(e);if(t!==null)return t;e=e.sibling}return null}var Qm=rt.unstable_scheduleCallback,cu=rt.unstable_cancelCallback,Eg=rt.unstable_shouldYield,zg=rt.unstable_requestPaint,ye=rt.unstable_now,Pg=rt.unstable_getCurrentPriorityLevel,qc=rt.unstable_ImmediatePriority,Jm=rt.unstable_UserBlockingPriority,Ka=rt.unstable_NormalPriority,Ng=rt.unstable_LowPriority,Km=rt.unstable_IdlePriority,Ro=null,Mt=null;function Dg(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:Ag,Rg=Math.log,Tg=Math.LN2;function Ag(e){return e>>>=0,e===0?32:31-(Rg(e)/Tg|0)|0}var Yi=64,Qi=4194304;function ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xa(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var c=s&~a;c!==0?i=ti(c):(o&=s,o!==0&&(i=ti(o)))}else s=r&~a,s!==0?i=ti(s):o!==0&&(i=ti(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&a)&&(a=i&-i,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-kt(t),a=1<<r,i|=e[r],t&=~a;return i}function Og(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mg(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-kt(o),c=1<<s,l=a[s];l===-1?(!(c&r)||c&i)&&(a[s]=Og(c,t)):l<=t&&(e.expiredLanes|=c),o&=~c}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xm(){var e=Yi;return Yi<<=1,!(Yi&4194240)&&(Yi=64),e}function us(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Fi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=r}function Fg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-kt(r),o=1<<a;t[a]=0,i[a]=-1,e[a]=-1,r&=~o}}function Yc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-kt(r),a=1<<i;a&t|e[i]&t&&(e[i]|=t),r&=~a}}var Z=0;function Zm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ef,Qc,tf,rf,nf,Ul=!1,Ji=[],cr=null,dr=null,ur=null,vi=new Map,yi=new Map,ir=[],Ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(e,t){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function Wn(e,t,r,i,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Bi(t),t!==null&&Qc(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Bg(e,t,r,i,a){switch(t){case"focusin":return cr=Wn(cr,e,t,r,i,a),!0;case"dragenter":return dr=Wn(dr,e,t,r,i,a),!0;case"mouseover":return ur=Wn(ur,e,t,r,i,a),!0;case"pointerover":var o=a.pointerId;return vi.set(o,Wn(vi.get(o)||null,e,t,r,i,a)),!0;case"gotpointercapture":return o=a.pointerId,yi.set(o,Wn(yi.get(o)||null,e,t,r,i,a)),!0}return!1}function af(e){var t=Nr(e.target);if(t!==null){var r=Vr(t);if(r!==null){if(t=r.tag,t===13){if(t=Gm(r),t!==null){e.blockedOn=t,nf(e.priority,function(){tf(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Na(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Bl=i,r.target.dispatchEvent(i),Bl=null}else return t=Bi(r),t!==null&&Qc(t),e.blockedOn=r,!1;t.shift()}return!0}function uu(e,t,r){Na(e)&&r.delete(t)}function Lg(){Ul=!1,cr!==null&&Na(cr)&&(cr=null),dr!==null&&Na(dr)&&(dr=null),ur!==null&&Na(ur)&&(ur=null),vi.forEach(uu),yi.forEach(uu)}function Gn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ul||(Ul=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Lg)))}function wi(e){function t(a){return Gn(a,e)}if(0<Ji.length){Gn(Ji[0],e);for(var r=1;r<Ji.length;r++){var i=Ji[r];i.blockedOn===e&&(i.blockedOn=null)}}for(cr!==null&&Gn(cr,e),dr!==null&&Gn(dr,e),ur!==null&&Gn(ur,e),vi.forEach(t),yi.forEach(t),r=0;r<ir.length;r++)i=ir[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<ir.length&&(r=ir[0],r.blockedOn===null);)af(r),r.blockedOn===null&&ir.shift()}var xn=Jt.ReactCurrentBatchConfig,Za=!0;function _g(e,t,r,i){var a=Z,o=xn.transition;xn.transition=null;try{Z=1,Jc(e,t,r,i)}finally{Z=a,xn.transition=o}}function $g(e,t,r,i){var a=Z,o=xn.transition;xn.transition=null;try{Z=4,Jc(e,t,r,i)}finally{Z=a,xn.transition=o}}function Jc(e,t,r,i){if(Za){var a=Vl(e,t,r,i);if(a===null)bs(e,t,i,eo,r),du(e,i);else if(Bg(a,e,t,r,i))i.stopPropagation();else if(du(e,i),t&4&&-1<Ig.indexOf(e)){for(;a!==null;){var o=Bi(a);if(o!==null&&ef(o),o=Vl(e,t,r,i),o===null&&bs(e,t,i,eo,r),o===a)break;a=o}a!==null&&i.stopPropagation()}else bs(e,t,i,null,r)}}var eo=null;function Vl(e,t,r,i){if(eo=null,e=Gc(i),e=Nr(e),e!==null)if(t=Vr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Gm(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return eo=e,null}function of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pg()){case qc:return 1;case Jm:return 4;case Ka:case Ng:return 16;case Km:return 536870912;default:return 16}default:return 16}}var or=null,Kc=null,Da=null;function sf(){if(Da)return Da;var e,t=Kc,r=t.length,i,a="value"in or?or.value:or.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var s=r-e;for(i=1;i<=s&&t[r-i]===a[o-i];i++);return Da=a.slice(e,1<i?1-i:void 0)}function Ra(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function pu(){return!1}function it(e){function t(r,i,a,o,s){this._reactName=r,this._targetInst=a,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ki:pu,this.isPropagationStopped=pu,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xc=it(Mn),Ii=me({},Mn,{view:0,detail:0}),Hg=it(Ii),ps,ms,qn,To=me({},Ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(ps=e.screenX-qn.screenX,ms=e.screenY-qn.screenY):ms=ps=0,qn=e),ps)},movementY:function(e){return"movementY"in e?e.movementY:ms}}),mu=it(To),Ug=me({},To,{dataTransfer:0}),Vg=it(Ug),Wg=me({},Ii,{relatedTarget:0}),fs=it(Wg),Gg=me({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),qg=it(Gg),Yg=me({},Mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qg=it(Yg),Jg=me({},Mn,{data:0}),fu=it(Jg),Kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zg[e])?!!t[e]:!1}function Zc(){return ex}var tx=me({},Ii,{key:function(e){if(e.key){var t=Kg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?Ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rx=it(tx),nx=me({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hu=it(nx),ix=me({},Ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),ax=it(ix),ox=me({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=it(ox),lx=me({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=it(lx),dx=[9,13,27,32],ed=Gt&&"CompositionEvent"in window,oi=null;Gt&&"documentMode"in document&&(oi=document.documentMode);var ux=Gt&&"TextEvent"in window&&!oi,lf=Gt&&(!ed||oi&&8<oi&&11>=oi),gu=String.fromCharCode(32),xu=!1;function cf(e,t){switch(e){case"keyup":return dx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rn=!1;function px(e,t){switch(e){case"compositionend":return df(t);case"keypress":return t.which!==32?null:(xu=!0,gu);case"textInput":return e=t.data,e===gu&&xu?null:e;default:return null}}function mx(e,t){if(rn)return e==="compositionend"||!ed&&cf(e,t)?(e=sf(),Da=Kc=or=null,rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lf&&t.locale!=="ko"?null:t.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fx[e.type]:t==="textarea"}function uf(e,t,r,i){$m(i),t=to(t,"onChange"),0<t.length&&(r=new Xc("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var si=null,bi=null;function hx(e){jf(e,0)}function Ao(e){var t=on(e);if(Om(t))return e}function gx(e,t){if(e==="change")return t}var pf=!1;if(Gt){var hs;if(Gt){var gs="oninput"in document;if(!gs){var yu=document.createElement("div");yu.setAttribute("oninput","return;"),gs=typeof yu.oninput=="function"}hs=gs}else hs=!1;pf=hs&&(!document.documentMode||9<document.documentMode)}function wu(){si&&(si.detachEvent("onpropertychange",mf),bi=si=null)}function mf(e){if(e.propertyName==="value"&&Ao(bi)){var t=[];uf(t,bi,e,Gc(e)),Wm(hx,t)}}function xx(e,t,r){e==="focusin"?(wu(),si=t,bi=r,si.attachEvent("onpropertychange",mf)):e==="focusout"&&wu()}function vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(bi)}function yx(e,t){if(e==="click")return Ao(t)}function wx(e,t){if(e==="input"||e==="change")return Ao(t)}function bx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:bx;function ji(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var a=r[i];if(!El.call(t,a)||!zt(e[a],t[a]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,t){var r=bu(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=bu(r)}}function ff(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ff(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(){for(var e=window,t=Ya();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ya(e.document)}return t}function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jx(e){var t=hf(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ff(r.ownerDocument.documentElement,r)){if(i!==null&&td(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(i.start,a);i=i.end===void 0?o:Math.min(i.end,a),!e.extend&&o>i&&(a=i,i=o,o=a),a=ju(r,o);var s=ju(r,i);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kx=Gt&&"documentMode"in document&&11>=document.documentMode,nn=null,Wl=null,li=null,Gl=!1;function ku(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Gl||nn==null||nn!==Ya(i)||(i=nn,"selectionStart"in i&&td(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),li&&ji(li,i)||(li=i,i=to(Wl,"onSelect"),0<i.length&&(t=new Xc("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=nn)))}function Xi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var an={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionend:Xi("Transition","TransitionEnd")},xs={},gf={};Gt&&(gf=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Oo(e){if(xs[e])return xs[e];if(!an[e])return e;var t=an[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in gf)return xs[e]=t[r];return e}var xf=Oo("animationend"),vf=Oo("animationiteration"),yf=Oo("animationstart"),wf=Oo("transitionend"),bf=new Map,Su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(e,t){bf.set(e,t),Ur(t,[e])}for(var vs=0;vs<Su.length;vs++){var ys=Su[vs],Sx=ys.toLowerCase(),Cx=ys[0].toUpperCase()+ys.slice(1);br(Sx,"on"+Cx)}br(xf,"onAnimationEnd");br(vf,"onAnimationIteration");br(yf,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(wf,"onTransitionEnd");wn("onMouseEnter",["mouseout","mouseover"]);wn("onMouseLeave",["mouseout","mouseover"]);wn("onPointerEnter",["pointerout","pointerover"]);wn("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function Cu(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,Sg(i,t,void 0,e),e.currentTarget=null}function jf(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],a=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var s=i.length-1;0<=s;s--){var c=i[s],l=c.instance,d=c.currentTarget;if(c=c.listener,l!==o&&a.isPropagationStopped())break e;Cu(a,c,d),o=l}else for(s=0;s<i.length;s++){if(c=i[s],l=c.instance,d=c.currentTarget,c=c.listener,l!==o&&a.isPropagationStopped())break e;Cu(a,c,d),o=l}}}if(Ja)throw e=$l,Ja=!1,$l=null,e}function ae(e,t){var r=t[Kl];r===void 0&&(r=t[Kl]=new Set);var i=e+"__bubble";r.has(i)||(kf(t,e,2,!1),r.add(i))}function ws(e,t,r){var i=0;t&&(i|=4),kf(r,e,i,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[Zi]){e[Zi]=!0,Nm.forEach(function(r){r!=="selectionchange"&&(Ex.has(r)||ws(r,!1,e),ws(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,ws("selectionchange",!1,t))}}function kf(e,t,r,i){switch(of(t)){case 1:var a=_g;break;case 4:a=$g;break;default:a=Jc}r=a.bind(null,t,r,e),a=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function bs(e,t,r,i,a){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var c=i.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;s=s.return}for(;c!==null;){if(s=Nr(c),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}c=c.parentNode}}i=i.return}Wm(function(){var d=o,p=Gc(r),m=[];e:{var g=bf.get(e);if(g!==void 0){var v=Xc,x=e;switch(e){case"keypress":if(Ra(r)===0)break e;case"keydown":case"keyup":v=rx;break;case"focusin":x="focus",v=fs;break;case"focusout":x="blur",v=fs;break;case"beforeblur":case"afterblur":v=fs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ax;break;case xf:case vf:case yf:v=qg;break;case wf:v=sx;break;case"scroll":v=Hg;break;case"wheel":v=cx;break;case"copy":case"cut":case"paste":v=Qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=hu}var w=(t&4)!==0,b=!w&&e==="scroll",y=w?g!==null?g+"Capture":null:g;w=[];for(var f=d,h;f!==null;){h=f;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,y!==null&&(k=xi(f,y),k!=null&&w.push(Si(f,k,h)))),b)break;f=f.return}0<w.length&&(g=new v(g,x,null,r,p),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&r!==Bl&&(x=r.relatedTarget||r.fromElement)&&(Nr(x)||x[qt]))break e;if((v||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=r.relatedTarget||r.toElement,v=d,x=x?Nr(x):null,x!==null&&(b=Vr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=d),v!==x)){if(w=mu,k="onMouseLeave",y="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=hu,k="onPointerLeave",y="onPointerEnter",f="pointer"),b=v==null?g:on(v),h=x==null?g:on(x),g=new w(k,f+"leave",v,r,p),g.target=b,g.relatedTarget=h,k=null,Nr(p)===d&&(w=new w(y,f+"enter",x,r,p),w.target=h,w.relatedTarget=b,k=w),b=k,v&&x)t:{for(w=v,y=x,f=0,h=w;h;h=Wr(h))f++;for(h=0,k=y;k;k=Wr(k))h++;for(;0<f-h;)w=Wr(w),f--;for(;0<h-f;)y=Wr(y),h--;for(;f--;){if(w===y||y!==null&&w===y.alternate)break t;w=Wr(w),y=Wr(y)}w=null}else w=null;v!==null&&Eu(m,g,v,w,!1),x!==null&&b!==null&&Eu(m,b,x,w,!0)}}e:{if(g=d?on(d):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=gx;else if(vu(g))if(pf)S=wx;else{S=vx;var E=xx}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=yx);if(S&&(S=S(e,d))){uf(m,S,r,p);break e}E&&E(e,g,d),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Al(g,"number",g.value)}switch(E=d?on(d):window,e){case"focusin":(vu(E)||E.contentEditable==="true")&&(nn=E,Wl=d,li=null);break;case"focusout":li=Wl=nn=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,ku(m,r,p);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":ku(m,r,p)}var P;if(ed)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else rn?cf(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(lf&&r.locale!=="ko"&&(rn||z!=="onCompositionStart"?z==="onCompositionEnd"&&rn&&(P=sf()):(or=p,Kc="value"in or?or.value:or.textContent,rn=!0)),E=to(d,z),0<E.length&&(z=new fu(z,e,null,r,p),m.push({event:z,listeners:E}),P?z.data=P:(P=df(r),P!==null&&(z.data=P)))),(P=ux?px(e,r):mx(e,r))&&(d=to(d,"onBeforeInput"),0<d.length&&(p=new fu("onBeforeInput","beforeinput",null,r,p),m.push({event:p,listeners:d}),p.data=P))}jf(m,t)})}function Si(e,t,r){return{instance:e,listener:t,currentTarget:r}}function to(e,t){for(var r=t+"Capture",i=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=xi(e,r),o!=null&&i.unshift(Si(e,o,a)),o=xi(e,t),o!=null&&i.push(Si(e,o,a))),e=e.return}return i}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,r,i,a){for(var o=t._reactName,s=[];r!==null&&r!==i;){var c=r,l=c.alternate,d=c.stateNode;if(l!==null&&l===i)break;c.tag===5&&d!==null&&(c=d,a?(l=xi(r,o),l!=null&&s.unshift(Si(r,l,c))):a||(l=xi(r,o),l!=null&&s.push(Si(r,l,c)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var zx=/\r\n?/g,Px=/\u0000|\uFFFD/g;function zu(e){return(typeof e=="string"?e:""+e).replace(zx,`
`).replace(Px,"")}function ea(e,t,r){if(t=zu(t),zu(e)!==t&&r)throw Error(D(425))}function ro(){}var ql=null,Yl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Pu=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pu<"u"?function(e){return Pu.resolve(null).then(e).catch(Rx)}:Jl;function Rx(e){setTimeout(function(){throw e})}function js(e,t){var r=t,i=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(i===0){e.removeChild(a),wi(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=a}while(r);wi(t)}function pr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Fn,Ci="__reactProps$"+Fn,qt="__reactContainer$"+Fn,Kl="__reactEvents$"+Fn,Tx="__reactListeners$"+Fn,Ax="__reactHandles$"+Fn;function Nr(e){var t=e[Ot];if(t)return t;for(var r=e.parentNode;r;){if(t=r[qt]||r[Ot]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Nu(e);e!==null;){if(r=e[Ot])return r;e=Nu(e)}return t}e=r,r=e.parentNode}return null}function Bi(e){return e=e[Ot]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Mo(e){return e[Ci]||null}var Xl=[],sn=-1;function jr(e){return{current:e}}function se(e){0>sn||(e.current=Xl[sn],Xl[sn]=null,sn--)}function re(e,t){sn++,Xl[sn]=e.current,e.current=t}var wr={},_e=jr(wr),Ye=jr(!1),Ir=wr;function bn(e,t){var r=e.type.contextTypes;if(!r)return wr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Qe(e){return e=e.childContextTypes,e!=null}function no(){se(Ye),se(_e)}function Du(e,t,r){if(_e.current!==wr)throw Error(D(168));re(_e,t),re(Ye,r)}function Sf(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(D(108,xg(e)||"Unknown",a));return me({},r,i)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wr,Ir=_e.current,re(_e,e),re(Ye,Ye.current),!0}function Ru(e,t,r){var i=e.stateNode;if(!i)throw Error(D(169));r?(e=Sf(e,t,Ir),i.__reactInternalMemoizedMergedChildContext=e,se(Ye),se(_e),re(_e,e)):se(Ye),re(Ye,r)}var Ht=null,Fo=!1,ks=!1;function Cf(e){Ht===null?Ht=[e]:Ht.push(e)}function Ox(e){Fo=!0,Cf(e)}function kr(){if(!ks&&Ht!==null){ks=!0;var e=0,t=Z;try{var r=Ht;for(Z=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Ht=null,Fo=!1}catch(a){throw Ht!==null&&(Ht=Ht.slice(e+1)),Qm(qc,kr),a}finally{Z=t,ks=!1}}return null}var ln=[],cn=0,ao=null,oo=0,ct=[],dt=0,Br=null,Ut=1,Vt="";function zr(e,t){ln[cn++]=oo,ln[cn++]=ao,ao=e,oo=t}function Ef(e,t,r){ct[dt++]=Ut,ct[dt++]=Vt,ct[dt++]=Br,Br=e;var i=Ut;e=Vt;var a=32-kt(i)-1;i&=~(1<<a),r+=1;var o=32-kt(t)+a;if(30<o){var s=a-a%5;o=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ut=1<<32-kt(t)+a|r<<a|i,Vt=o+e}else Ut=1<<o|r<<a|i,Vt=e}function rd(e){e.return!==null&&(zr(e,1),Ef(e,1,0))}function nd(e){for(;e===ao;)ao=ln[--cn],ln[cn]=null,oo=ln[--cn],ln[cn]=null;for(;e===Br;)Br=ct[--dt],ct[dt]=null,Vt=ct[--dt],ct[dt]=null,Ut=ct[--dt],ct[dt]=null}var tt=null,et=null,ce=!1,jt=null;function zf(e,t){var r=ut(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Tu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=pr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Br!==null?{id:Ut,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ut(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,tt=e,et=null,!0):!1;default:return!1}}function Zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ec(e){if(ce){var t=et;if(t){var r=t;if(!Tu(e,t)){if(Zl(e))throw Error(D(418));t=pr(r.nextSibling);var i=tt;t&&Tu(e,t)?zf(i,r):(e.flags=e.flags&-4097|2,ce=!1,tt=e)}}else{if(Zl(e))throw Error(D(418));e.flags=e.flags&-4097|2,ce=!1,tt=e}}}function Au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function ta(e){if(e!==tt)return!1;if(!ce)return Au(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=et)){if(Zl(e))throw Pf(),Error(D(418));for(;t;)zf(e,t),t=pr(t.nextSibling)}if(Au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){et=pr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?pr(e.stateNode.nextSibling):null;return!0}function Pf(){for(var e=et;e;)e=pr(e.nextSibling)}function jn(){et=tt=null,ce=!1}function id(e){jt===null?jt=[e]:jt.push(e)}var Mx=Jt.ReactCurrentBatchConfig;function Yn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(D(309));var i=r.stateNode}if(!i)throw Error(D(147,e));var a=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var c=a.refs;s===null?delete c[o]:c[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!r._owner)throw Error(D(290,e))}return e}function ra(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ou(e){var t=e._init;return t(e._payload)}function Nf(e){function t(y,f){if(e){var h=y.deletions;h===null?(y.deletions=[f],y.flags|=16):h.push(f)}}function r(y,f){if(!e)return null;for(;f!==null;)t(y,f),f=f.sibling;return null}function i(y,f){for(y=new Map;f!==null;)f.key!==null?y.set(f.key,f):y.set(f.index,f),f=f.sibling;return y}function a(y,f){return y=gr(y,f),y.index=0,y.sibling=null,y}function o(y,f,h){return y.index=h,e?(h=y.alternate,h!==null?(h=h.index,h<f?(y.flags|=2,f):h):(y.flags|=2,f)):(y.flags|=1048576,f)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,f,h,k){return f===null||f.tag!==6?(f=Ds(h,y.mode,k),f.return=y,f):(f=a(f,h),f.return=y,f)}function l(y,f,h,k){var S=h.type;return S===tn?p(y,f,h.props.children,k,h.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rr&&Ou(S)===f.type)?(k=a(f,h.props),k.ref=Yn(y,f,h),k.return=y,k):(k=Ba(h.type,h.key,h.props,null,y.mode,k),k.ref=Yn(y,f,h),k.return=y,k)}function d(y,f,h,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Rs(h,y.mode,k),f.return=y,f):(f=a(f,h.children||[]),f.return=y,f)}function p(y,f,h,k,S){return f===null||f.tag!==7?(f=Mr(h,y.mode,k,S),f.return=y,f):(f=a(f,h),f.return=y,f)}function m(y,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ds(""+f,y.mode,h),f.return=y,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wi:return h=Ba(f.type,f.key,f.props,null,y.mode,h),h.ref=Yn(y,null,f),h.return=y,h;case en:return f=Rs(f,y.mode,h),f.return=y,f;case rr:var k=f._init;return m(y,k(f._payload),h)}if(ei(f)||Un(f))return f=Mr(f,y.mode,h,null),f.return=y,f;ra(y,f)}return null}function g(y,f,h,k){var S=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:c(y,f,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Wi:return h.key===S?l(y,f,h,k):null;case en:return h.key===S?d(y,f,h,k):null;case rr:return S=h._init,g(y,f,S(h._payload),k)}if(ei(h)||Un(h))return S!==null?null:p(y,f,h,k,null);ra(y,h)}return null}function v(y,f,h,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(h)||null,c(f,y,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Wi:return y=y.get(k.key===null?h:k.key)||null,l(f,y,k,S);case en:return y=y.get(k.key===null?h:k.key)||null,d(f,y,k,S);case rr:var E=k._init;return v(y,f,h,E(k._payload),S)}if(ei(k)||Un(k))return y=y.get(h)||null,p(f,y,k,S,null);ra(f,k)}return null}function x(y,f,h,k){for(var S=null,E=null,P=f,z=f=0,L=null;P!==null&&z<h.length;z++){P.index>z?(L=P,P=null):L=P.sibling;var _=g(y,P,h[z],k);if(_===null){P===null&&(P=L);break}e&&P&&_.alternate===null&&t(y,P),f=o(_,f,z),E===null?S=_:E.sibling=_,E=_,P=L}if(z===h.length)return r(y,P),ce&&zr(y,z),S;if(P===null){for(;z<h.length;z++)P=m(y,h[z],k),P!==null&&(f=o(P,f,z),E===null?S=P:E.sibling=P,E=P);return ce&&zr(y,z),S}for(P=i(y,P);z<h.length;z++)L=v(P,y,z,h[z],k),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?z:L.key),f=o(L,f,z),E===null?S=L:E.sibling=L,E=L);return e&&P.forEach(function(A){return t(y,A)}),ce&&zr(y,z),S}function w(y,f,h,k){var S=Un(h);if(typeof S!="function")throw Error(D(150));if(h=S.call(h),h==null)throw Error(D(151));for(var E=S=null,P=f,z=f=0,L=null,_=h.next();P!==null&&!_.done;z++,_=h.next()){P.index>z?(L=P,P=null):L=P.sibling;var A=g(y,P,_.value,k);if(A===null){P===null&&(P=L);break}e&&P&&A.alternate===null&&t(y,P),f=o(A,f,z),E===null?S=A:E.sibling=A,E=A,P=L}if(_.done)return r(y,P),ce&&zr(y,z),S;if(P===null){for(;!_.done;z++,_=h.next())_=m(y,_.value,k),_!==null&&(f=o(_,f,z),E===null?S=_:E.sibling=_,E=_);return ce&&zr(y,z),S}for(P=i(y,P);!_.done;z++,_=h.next())_=v(P,y,z,_.value,k),_!==null&&(e&&_.alternate!==null&&P.delete(_.key===null?z:_.key),f=o(_,f,z),E===null?S=_:E.sibling=_,E=_);return e&&P.forEach(function(N){return t(y,N)}),ce&&zr(y,z),S}function b(y,f,h,k){if(typeof h=="object"&&h!==null&&h.type===tn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Wi:e:{for(var S=h.key,E=f;E!==null;){if(E.key===S){if(S=h.type,S===tn){if(E.tag===7){r(y,E.sibling),f=a(E,h.props.children),f.return=y,y=f;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rr&&Ou(S)===E.type){r(y,E.sibling),f=a(E,h.props),f.ref=Yn(y,E,h),f.return=y,y=f;break e}r(y,E);break}else t(y,E);E=E.sibling}h.type===tn?(f=Mr(h.props.children,y.mode,k,h.key),f.return=y,y=f):(k=Ba(h.type,h.key,h.props,null,y.mode,k),k.ref=Yn(y,f,h),k.return=y,y=k)}return s(y);case en:e:{for(E=h.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){r(y,f.sibling),f=a(f,h.children||[]),f.return=y,y=f;break e}else{r(y,f);break}else t(y,f);f=f.sibling}f=Rs(h,y.mode,k),f.return=y,y=f}return s(y);case rr:return E=h._init,b(y,f,E(h._payload),k)}if(ei(h))return x(y,f,h,k);if(Un(h))return w(y,f,h,k);ra(y,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(r(y,f.sibling),f=a(f,h),f.return=y,y=f):(r(y,f),f=Ds(h,y.mode,k),f.return=y,y=f),s(y)):r(y,f)}return b}var kn=Nf(!0),Df=Nf(!1),so=jr(null),lo=null,dn=null,ad=null;function od(){ad=dn=lo=null}function sd(e){var t=so.current;se(so),e._currentValue=t}function tc(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function vn(e,t){lo=e,ad=dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qe=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(ad!==e)if(e={context:e,memoizedValue:t,next:null},dn===null){if(lo===null)throw Error(D(308));dn=e,lo.dependencies={lanes:0,firstContext:e}}else dn=dn.next=e;return t}var Dr=null;function ld(e){Dr===null?Dr=[e]:Dr.push(e)}function Rf(e,t,r,i){var a=t.interleaved;return a===null?(r.next=r,ld(t)):(r.next=a.next,a.next=r),t.interleaved=r,Yt(e,i)}function Yt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var nr=!1;function cd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mr(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,q&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,Yt(e,r)}return a=i.interleaved,a===null?(t.next=t,ld(i)):(t.next=a.next,a.next=t),i.interleaved=t,Yt(e,r)}function Ta(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Yc(e,r)}}function Mu(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function co(e,t,r,i){var a=e.updateQueue;nr=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var l=c,d=l.next;l.next=null,s===null?o=d:s.next=d,s=l;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==s&&(c===null?p.firstBaseUpdate=d:c.next=d,p.lastBaseUpdate=l))}if(o!==null){var m=a.baseState;s=0,p=d=l=null,c=o;do{var g=c.lane,v=c.eventTime;if((i&g)===g){p!==null&&(p=p.next={eventTime:v,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=e,w=c;switch(g=t,v=r,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(v,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(v,m,g):x,g==null)break e;m=me({},m,g);break e;case 2:nr=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[c]:g.push(c))}else v={eventTime:v,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(d=p=v,l=m):p=p.next=v,s|=g;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;g=c,c=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(1);if(p===null&&(l=m),a.baseState=l,a.firstBaseUpdate=d,a.lastBaseUpdate=p,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);_r|=s,e.lanes=s,e.memoizedState=m}}function Fu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=r,typeof a!="function")throw Error(D(191,a));a.call(i)}}}var Li={},Ft=jr(Li),Ei=jr(Li),zi=jr(Li);function Rr(e){if(e===Li)throw Error(D(174));return e}function dd(e,t){switch(re(zi,t),re(Ei,e),re(Ft,Li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}se(Ft),re(Ft,t)}function Sn(){se(Ft),se(Ei),se(zi)}function Af(e){Rr(zi.current);var t=Rr(Ft.current),r=Ml(t,e.type);t!==r&&(re(Ei,e),re(Ft,r))}function ud(e){Ei.current===e&&(se(Ft),se(Ei))}var ue=jr(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ss=[];function pd(){for(var e=0;e<Ss.length;e++)Ss[e]._workInProgressVersionPrimary=null;Ss.length=0}var Aa=Jt.ReactCurrentDispatcher,Cs=Jt.ReactCurrentBatchConfig,Lr=0,pe=null,Se=null,ze=null,po=!1,ci=!1,Pi=0,Fx=0;function Me(){throw Error(D(321))}function md(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!zt(e[r],t[r]))return!1;return!0}function fd(e,t,r,i,a,o){if(Lr=o,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Aa.current=e===null||e.memoizedState===null?_x:$x,e=r(i,a),ci){o=0;do{if(ci=!1,Pi=0,25<=o)throw Error(D(301));o+=1,ze=Se=null,t.updateQueue=null,Aa.current=Hx,e=r(i,a)}while(ci)}if(Aa.current=mo,t=Se!==null&&Se.next!==null,Lr=0,ze=Se=pe=null,po=!1,t)throw Error(D(300));return e}function hd(){var e=Pi!==0;return Pi=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?pe.memoizedState=ze=e:ze=ze.next=e,ze}function ft(){if(Se===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=ze===null?pe.memoizedState:ze.next;if(t!==null)ze=t,Se=e;else{if(e===null)throw Error(D(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},ze===null?pe.memoizedState=ze=e:ze=ze.next=e}return ze}function Ni(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=ft(),r=t.queue;if(r===null)throw Error(D(311));r.lastRenderedReducer=e;var i=Se,a=i.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,d=o;do{var p=d.lane;if((Lr&p)===p)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(c=l=m,s=i):l=l.next=m,pe.lanes|=p,_r|=p}d=d.next}while(d!==null&&d!==o);l===null?s=i:l.next=c,zt(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,r.lastRenderedState=i}if(e=r.interleaved,e!==null){a=e;do o=a.lane,pe.lanes|=o,_r|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function zs(e){var t=ft(),r=t.queue;if(r===null)throw Error(D(311));r.lastRenderedReducer=e;var i=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);zt(o,t.memoizedState)||(qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,i]}function Of(){}function Mf(e,t){var r=pe,i=ft(),a=t(),o=!zt(i.memoizedState,a);if(o&&(i.memoizedState=a,qe=!0),i=i.queue,gd(Bf.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||ze!==null&&ze.memoizedState.tag&1){if(r.flags|=2048,Di(9,If.bind(null,r,i,a,t),void 0,null),De===null)throw Error(D(349));Lr&30||Ff(r,t,a)}return a}function Ff(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function If(e,t,r,i){t.value=r,t.getSnapshot=i,Lf(t)&&_f(e)}function Bf(e,t,r){return r(function(){Lf(t)&&_f(e)})}function Lf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!zt(e,r)}catch{return!0}}function _f(e){var t=Yt(e,1);t!==null&&St(t,e,1,-1)}function Iu(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},t.queue=e,e=e.dispatch=Lx.bind(null,pe,e),[t.memoizedState,e]}function Di(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function $f(){return ft().memoizedState}function Oa(e,t,r,i){var a=Tt();pe.flags|=e,a.memoizedState=Di(1|t,r,void 0,i===void 0?null:i)}function Io(e,t,r,i){var a=ft();i=i===void 0?null:i;var o=void 0;if(Se!==null){var s=Se.memoizedState;if(o=s.destroy,i!==null&&md(i,s.deps)){a.memoizedState=Di(t,r,o,i);return}}pe.flags|=e,a.memoizedState=Di(1|t,r,o,i)}function Bu(e,t){return Oa(8390656,8,e,t)}function gd(e,t){return Io(2048,8,e,t)}function Hf(e,t){return Io(4,2,e,t)}function Uf(e,t){return Io(4,4,e,t)}function Vf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wf(e,t,r){return r=r!=null?r.concat([e]):null,Io(4,4,Vf.bind(null,t,e),r)}function xd(){}function Gf(e,t){var r=ft();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&md(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function qf(e,t){var r=ft();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&md(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Yf(e,t,r){return Lr&21?(zt(r,t)||(r=Xm(),pe.lanes|=r,_r|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=r)}function Ix(e,t){var r=Z;Z=r!==0&&4>r?r:4,e(!0);var i=Cs.transition;Cs.transition={};try{e(!1),t()}finally{Z=r,Cs.transition=i}}function Qf(){return ft().memoizedState}function Bx(e,t,r){var i=hr(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Jf(e))Kf(t,r);else if(r=Rf(e,t,r,i),r!==null){var a=He();St(r,e,i,a),Xf(r,t,i)}}function Lx(e,t,r){var i=hr(e),a={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Jf(e))Kf(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,r);if(a.hasEagerState=!0,a.eagerState=c,zt(c,s)){var l=t.interleaved;l===null?(a.next=a,ld(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}r=Rf(e,t,a,i),r!==null&&(a=He(),St(r,e,i,a),Xf(r,t,i))}}function Jf(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Kf(e,t){ci=po=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Xf(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Yc(e,r)}}var mo={readContext:mt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},_x={readContext:mt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Bu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Oa(4194308,4,Vf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oa(4,2,e,t)},useMemo:function(e,t){var r=Tt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Tt();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Bx.bind(null,pe,e),[i.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Iu,useDebugValue:xd,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Iu(!1),t=e[0];return e=Ix.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=pe,a=Tt();if(ce){if(r===void 0)throw Error(D(407));r=r()}else{if(r=t(),De===null)throw Error(D(349));Lr&30||Ff(i,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,Bu(Bf.bind(null,i,o,e),[e]),i.flags|=2048,Di(9,If.bind(null,i,o,r,t),void 0,null),r},useId:function(){var e=Tt(),t=De.identifierPrefix;if(ce){var r=Vt,i=Ut;r=(i&~(1<<32-kt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Pi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Fx++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$x={readContext:mt,useCallback:Gf,useContext:mt,useEffect:gd,useImperativeHandle:Wf,useInsertionEffect:Hf,useLayoutEffect:Uf,useMemo:qf,useReducer:Es,useRef:$f,useState:function(){return Es(Ni)},useDebugValue:xd,useDeferredValue:function(e){var t=ft();return Yf(t,Se.memoizedState,e)},useTransition:function(){var e=Es(Ni)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:Mf,useId:Qf,unstable_isNewReconciler:!1},Hx={readContext:mt,useCallback:Gf,useContext:mt,useEffect:gd,useImperativeHandle:Wf,useInsertionEffect:Hf,useLayoutEffect:Uf,useMemo:qf,useReducer:zs,useRef:$f,useState:function(){return zs(Ni)},useDebugValue:xd,useDeferredValue:function(e){var t=ft();return Se===null?t.memoizedState=e:Yf(t,Se.memoizedState,e)},useTransition:function(){var e=zs(Ni)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Of,useSyncExternalStore:Mf,useId:Qf,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function rc(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:me({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Bo={isMounted:function(e){return(e=e._reactInternals)?Vr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=He(),a=hr(e),o=Wt(i,a);o.payload=t,r!=null&&(o.callback=r),t=mr(e,o,a),t!==null&&(St(t,e,a,i),Ta(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=He(),a=hr(e),o=Wt(i,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=mr(e,o,a),t!==null&&(St(t,e,a,i),Ta(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=He(),i=hr(e),a=Wt(r,i);a.tag=2,t!=null&&(a.callback=t),t=mr(e,a,i),t!==null&&(St(t,e,i,r),Ta(t,e,i))}};function Lu(e,t,r,i,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,s):t.prototype&&t.prototype.isPureReactComponent?!ji(r,i)||!ji(a,o):!0}function Zf(e,t,r){var i=!1,a=wr,o=t.contextType;return typeof o=="object"&&o!==null?o=mt(o):(a=Qe(t)?Ir:_e.current,i=t.contextTypes,o=(i=i!=null)?bn(e,a):wr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bo,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function _u(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Bo.enqueueReplaceState(t,t.state,null)}function nc(e,t,r,i){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},cd(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=mt(o):(o=Qe(t)?Ir:_e.current,a.context=bn(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(rc(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Bo.enqueueReplaceState(a,a.state,null),co(e,r,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var r="",i=t;do r+=gg(i),i=i.return;while(i);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Ps(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ic(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function eh(e,t,r){r=Wt(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){ho||(ho=!0,fc=i),ic(e,t)},r}function th(e,t,r){r=Wt(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;r.payload=function(){return i(a)},r.callback=function(){ic(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ic(e,t),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function $u(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new Ux;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(r)||(a.add(r),e=n1.bind(null,e,t,r),t.then(e,e))}function Hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uu(e,t,r,i,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Wt(-1,1),t.tag=2,mr(r,t,1))),r.lanes|=1),e)}var Vx=Jt.ReactCurrentOwner,qe=!1;function $e(e,t,r,i){t.child=e===null?Df(t,null,r,i):kn(t,e.child,r,i)}function Vu(e,t,r,i,a){r=r.render;var o=t.ref;return vn(t,a),i=fd(e,t,r,i,o,a),r=hd(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Qt(e,t,a)):(ce&&r&&rd(t),t.flags|=1,$e(e,t,i,a),t.child)}function Wu(e,t,r,i,a){if(e===null){var o=r.type;return typeof o=="function"&&!Cd(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,rh(e,t,o,i,a)):(e=Ba(r.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:ji,r(s,i)&&e.ref===t.ref)return Qt(e,t,a)}return t.flags|=1,e=gr(o,i),e.ref=t.ref,e.return=t,t.child=e}function rh(e,t,r,i,a){if(e!==null){var o=e.memoizedProps;if(ji(o,i)&&e.ref===t.ref)if(qe=!1,t.pendingProps=i=o,(e.lanes&a)!==0)e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,Qt(e,t,a)}return ac(e,t,r,i,a)}function nh(e,t,r){var i=t.pendingProps,a=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(pn,Ze),Ze|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(pn,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:r,re(pn,Ze),Ze|=i}else o!==null?(i=o.baseLanes|r,t.memoizedState=null):i=r,re(pn,Ze),Ze|=i;return $e(e,t,a,r),t.child}function ih(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ac(e,t,r,i,a){var o=Qe(r)?Ir:_e.current;return o=bn(t,o),vn(t,a),r=fd(e,t,r,i,o,a),i=hd(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Qt(e,t,a)):(ce&&i&&rd(t),t.flags|=1,$e(e,t,r,a),t.child)}function Gu(e,t,r,i,a){if(Qe(r)){var o=!0;io(t)}else o=!1;if(vn(t,a),t.stateNode===null)Ma(e,t),Zf(t,r,i),nc(t,r,i,a),i=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var l=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=mt(d):(d=Qe(r)?Ir:_e.current,d=bn(t,d));var p=r.getDerivedStateFromProps,m=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==i||l!==d)&&_u(t,s,i,d),nr=!1;var g=t.memoizedState;s.state=g,co(t,i,s,a),l=t.memoizedState,c!==i||g!==l||Ye.current||nr?(typeof p=="function"&&(rc(t,r,p,i),l=t.memoizedState),(c=nr||Lu(t,r,c,i,g,l,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=d,i=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Tf(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:wt(t.type,c),s.props=d,m=t.pendingProps,g=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=mt(l):(l=Qe(r)?Ir:_e.current,l=bn(t,l));var v=r.getDerivedStateFromProps;(p=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==m||g!==l)&&_u(t,s,i,l),nr=!1,g=t.memoizedState,s.state=g,co(t,i,s,a);var x=t.memoizedState;c!==m||g!==x||Ye.current||nr?(typeof v=="function"&&(rc(t,r,v,i),x=t.memoizedState),(d=nr||Lu(t,r,d,i,g,x,l)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=x),s.props=i,s.state=x,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),i=!1)}return oc(e,t,r,i,o,a)}function oc(e,t,r,i,a,o){ih(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return a&&Ru(t,r,!1),Qt(e,t,o);i=t.stateNode,Vx.current=t;var c=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=kn(t,e.child,null,o),t.child=kn(t,null,c,o)):$e(e,t,c,o),t.memoizedState=i.state,a&&Ru(t,r,!0),t.child}function ah(e){var t=e.stateNode;t.pendingContext?Du(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Du(e,t.context,!1),dd(e,t.containerInfo)}function qu(e,t,r,i,a){return jn(),id(a),t.flags|=256,$e(e,t,r,i),t.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function lc(e){return{baseLanes:e,cachePool:null,transitions:null}}function oh(e,t,r){var i=t.pendingProps,a=ue.current,o=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),re(ue,a&1),e===null)return ec(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=$o(s,i,0,null),e=Mr(e,i,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=lc(r),t.memoizedState=sc,e):vd(t,s));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return Wx(e,t,s,i,c,a,r);if(o){o=i.fallback,s=t.mode,a=e.child,c=a.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=gr(a,l),i.subtreeFlags=a.subtreeFlags&14680064),c!==null?o=gr(c,o):(o=Mr(o,s,r,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=e.child.memoizedState,s=s===null?lc(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,t.memoizedState=sc,i}return o=e.child,e=o.sibling,i=gr(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function vd(e,t){return t=$o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function na(e,t,r,i){return i!==null&&id(i),kn(t,e.child,null,r),e=vd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wx(e,t,r,i,a,o,s){if(r)return t.flags&256?(t.flags&=-257,i=Ps(Error(D(422))),na(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,a=t.mode,i=$o({mode:"visible",children:i.children},a,0,null),o=Mr(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&kn(t,e.child,null,s),t.child.memoizedState=lc(s),t.memoizedState=sc,o);if(!(t.mode&1))return na(e,t,s,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(D(419)),i=Ps(o,i,void 0),na(e,t,s,i)}if(c=(s&e.childLanes)!==0,qe||c){if(i=De,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(i.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Yt(e,a),St(i,e,a,-1))}return Sd(),i=Ps(Error(D(421))),na(e,t,s,i)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=i1.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,et=pr(a.nextSibling),tt=t,ce=!0,jt=null,e!==null&&(ct[dt++]=Ut,ct[dt++]=Vt,ct[dt++]=Br,Ut=e.id,Vt=e.overflow,Br=t),t=vd(t,i.children),t.flags|=4096,t)}function Yu(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),tc(e.return,t,r)}function Ns(e,t,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=r,o.tailMode=a)}function sh(e,t,r){var i=t.pendingProps,a=i.revealOrder,o=i.tail;if($e(e,t,i.children,r),i=ue.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,r,t);else if(e.tag===19)Yu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(re(ue,i),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&uo(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Ns(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&uo(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Ns(t,!0,r,null,o);break;case"together":Ns(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ma(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),_r|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,r=gr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=gr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Gx(e,t,r){switch(t.tag){case 3:ah(t),jn();break;case 5:Af(t);break;case 1:Qe(t.type)&&io(t);break;case 4:dd(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;re(so,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(re(ue,ue.current&1),t.flags|=128,null):r&t.child.childLanes?oh(e,t,r):(re(ue,ue.current&1),e=Qt(e,t,r),e!==null?e.sibling:null);re(ue,ue.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return sh(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),re(ue,ue.current),i)break;return null;case 22:case 23:return t.lanes=0,nh(e,t,r)}return Qt(e,t,r)}var lh,cc,ch,dh;lh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};cc=function(){};ch=function(e,t,r,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,Rr(Ft.current);var o=null;switch(r){case"input":a=Rl(e,a),i=Rl(e,i),o=[];break;case"select":a=me({},a,{value:void 0}),i=me({},i,{value:void 0}),o=[];break;case"textarea":a=Ol(e,a),i=Ol(e,i),o=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=ro)}Fl(r,i);var s;r=null;for(d in a)if(!i.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var c=a[d];for(s in c)c.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(hi.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var l=i[d];if(c=a!=null?a[d]:void 0,i.hasOwnProperty(d)&&l!==c&&(l!=null||c!=null))if(d==="style")if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(o||(o=[]),o.push(d,r)),r=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(hi.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&ae("scroll",e),o||c===l||(o=[])):(o=o||[]).push(d,l))}r&&(o=o||[]).push("style",r);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};dh=function(e,t,r,i){r!==i&&(t.flags|=4)};function Qn(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function qx(e,t,r){var i=t.pendingProps;switch(nd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Qe(t.type)&&no(),Fe(t),null;case 3:return i=t.stateNode,Sn(),se(Ye),se(_e),pd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ta(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(xc(jt),jt=null))),cc(e,t),Fe(t),null;case 5:ud(t);var a=Rr(zi.current);if(r=t.type,e!==null&&t.stateNode!=null)ch(e,t,r,i,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(D(166));return Fe(t),null}if(e=Rr(Ft.current),ta(t)){i=t.stateNode,r=t.type;var o=t.memoizedProps;switch(i[Ot]=t,i[Ci]=o,e=(t.mode&1)!==0,r){case"dialog":ae("cancel",i),ae("close",i);break;case"iframe":case"object":case"embed":ae("load",i);break;case"video":case"audio":for(a=0;a<ri.length;a++)ae(ri[a],i);break;case"source":ae("error",i);break;case"img":case"image":case"link":ae("error",i),ae("load",i);break;case"details":ae("toggle",i);break;case"input":nu(i,o),ae("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ae("invalid",i);break;case"textarea":au(i,o),ae("invalid",i)}Fl(r,o),a=null;for(var s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="children"?typeof c=="string"?i.textContent!==c&&(o.suppressHydrationWarning!==!0&&ea(i.textContent,c,e),a=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&ea(i.textContent,c,e),a=["children",""+c]):hi.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ae("scroll",i)}switch(r){case"input":Gi(i),iu(i,o,!0);break;case"textarea":Gi(i),ou(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ro)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Im(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(r,{is:i.is}):(e=s.createElement(r),r==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,r),e[Ot]=t,e[Ci]=i,lh(e,t,!1,!1),t.stateNode=e;e:{switch(s=Il(r,i),r){case"dialog":ae("cancel",e),ae("close",e),a=i;break;case"iframe":case"object":case"embed":ae("load",e),a=i;break;case"video":case"audio":for(a=0;a<ri.length;a++)ae(ri[a],e);a=i;break;case"source":ae("error",e),a=i;break;case"img":case"image":case"link":ae("error",e),ae("load",e),a=i;break;case"details":ae("toggle",e),a=i;break;case"input":nu(e,i),a=Rl(e,i),ae("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=me({},i,{value:void 0}),ae("invalid",e);break;case"textarea":au(e,i),a=Ol(e,i),ae("invalid",e);break;default:a=i}Fl(r,a),c=a;for(o in c)if(c.hasOwnProperty(o)){var l=c[o];o==="style"?_m(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bm(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&gi(e,l):typeof l=="number"&&gi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ae("scroll",e):l!=null&&Hc(e,o,l,s))}switch(r){case"input":Gi(e),iu(e,i,!1);break;case"textarea":Gi(e),ou(e);break;case"option":i.value!=null&&e.setAttribute("value",""+yr(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?fn(e,!!i.multiple,o,!1):i.defaultValue!=null&&fn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ro)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)dh(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(D(166));if(r=Rr(zi.current),Rr(Ft.current),ta(t)){if(i=t.stateNode,r=t.memoizedProps,i[Ot]=t,(o=i.nodeValue!==r)&&(e=tt,e!==null))switch(e.tag){case 3:ea(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ea(i.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Ot]=t,t.stateNode=i}return Fe(t),null;case 13:if(se(ue),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&et!==null&&t.mode&1&&!(t.flags&128))Pf(),jn(),t.flags|=98560,o=!1;else if(o=ta(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[Ot]=t}else jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else jt!==null&&(xc(jt),jt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Ce===0&&(Ce=3):Sd())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Sn(),cc(e,t),e===null&&ki(t.stateNode.containerInfo),Fe(t),null;case 10:return sd(t.type._context),Fe(t),null;case 17:return Qe(t.type)&&no(),Fe(t),null;case 19:if(se(ue),o=t.memoizedState,o===null)return Fe(t),null;if(i=(t.flags&128)!==0,s=o.rendering,s===null)if(i)Qn(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=uo(e),s!==null){for(t.flags|=128,Qn(o,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)o=r,e=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return re(ue,ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>En&&(t.flags|=128,i=!0,Qn(o,!1),t.lanes=4194304)}else{if(!i)if(e=uo(s),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Qn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ce)return Fe(t),null}else 2*ye()-o.renderingStartTime>En&&r!==1073741824&&(t.flags|=128,i=!0,Qn(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(r=o.last,r!==null?r.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,r=ue.current,re(ue,i?r&1|2:r&1),t):(Fe(t),null);case 22:case 23:return kd(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Ze&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function Yx(e,t){switch(nd(t),t.tag){case 1:return Qe(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(),se(Ye),se(_e),pd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ud(t),null;case 13:if(se(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ue),null;case 4:return Sn(),null;case 10:return sd(t.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var ia=!1,Ie=!1,Qx=typeof WeakSet=="function"?WeakSet:Set,M=null;function un(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){xe(e,t,i)}else r.current=null}function dc(e,t,r){try{r()}catch(i){xe(e,t,i)}}var Qu=!1;function Jx(e,t){if(ql=Za,e=hf(),td(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,c=-1,l=-1,d=0,p=0,m=e,g=null;t:for(;;){for(var v;m!==r||a!==0&&m.nodeType!==3||(c=s+a),m!==o||i!==0&&m.nodeType!==3||(l=s+i),m.nodeType===3&&(s+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break t;if(g===r&&++d===a&&(c=s),g===o&&++p===i&&(l=s),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Yl={focusedElem:e,selectionRange:r},Za=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,b=x.memoizedState,y=t.stateNode,f=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:wt(t.type,w),b);y.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){xe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return x=Qu,Qu=!1,x}function di(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&dc(t,r,o)}a=a.next}while(a!==i)}}function Lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function uc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function uh(e){var t=e.alternate;t!==null&&(e.alternate=null,uh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[Ci],delete t[Kl],delete t[Tx],delete t[Ax])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ph(e){return e.tag===5||e.tag===3||e.tag===4}function Ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ph(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pc(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ro));else if(i!==4&&(e=e.child,e!==null))for(pc(e,t,r),e=e.sibling;e!==null;)pc(e,t,r),e=e.sibling}function mc(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(mc(e,t,r),e=e.sibling;e!==null;)mc(e,t,r),e=e.sibling}var Te=null,bt=!1;function Zt(e,t,r){for(r=r.child;r!==null;)mh(e,t,r),r=r.sibling}function mh(e,t,r){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Ro,r)}catch{}switch(r.tag){case 5:Ie||un(r,t);case 6:var i=Te,a=bt;Te=null,Zt(e,t,r),Te=i,bt=a,Te!==null&&(bt?(e=Te,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Te.removeChild(r.stateNode));break;case 18:Te!==null&&(bt?(e=Te,r=r.stateNode,e.nodeType===8?js(e.parentNode,r):e.nodeType===1&&js(e,r),wi(e)):js(Te,r.stateNode));break;case 4:i=Te,a=bt,Te=r.stateNode.containerInfo,bt=!0,Zt(e,t,r),Te=i,bt=a;break;case 0:case 11:case 14:case 15:if(!Ie&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var o=a,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&dc(r,t,s),a=a.next}while(a!==i)}Zt(e,t,r);break;case 1:if(!Ie&&(un(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(c){xe(r,t,c)}Zt(e,t,r);break;case 21:Zt(e,t,r);break;case 22:r.mode&1?(Ie=(i=Ie)||r.memoizedState!==null,Zt(e,t,r),Ie=i):Zt(e,t,r);break;default:Zt(e,t,r)}}function Ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Qx),t.forEach(function(i){var a=a1.bind(null,e,i);r.has(i)||(r.add(i),i.then(a,a))})}}function xt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=r[i];try{var o=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Te=c.stateNode,bt=!1;break e;case 3:Te=c.stateNode.containerInfo,bt=!0;break e;case 4:Te=c.stateNode.containerInfo,bt=!0;break e}c=c.return}if(Te===null)throw Error(D(160));mh(o,s,a),Te=null,bt=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(d){xe(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fh(t,e),t=t.sibling}function fh(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Dt(e),i&4){try{di(3,e,e.return),Lo(3,e)}catch(w){xe(e,e.return,w)}try{di(5,e,e.return)}catch(w){xe(e,e.return,w)}}break;case 1:xt(t,e),Dt(e),i&512&&r!==null&&un(r,r.return);break;case 5:if(xt(t,e),Dt(e),i&512&&r!==null&&un(r,r.return),e.flags&32){var a=e.stateNode;try{gi(a,"")}catch(w){xe(e,e.return,w)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Mm(a,o),Il(c,s);var d=Il(c,o);for(s=0;s<l.length;s+=2){var p=l[s],m=l[s+1];p==="style"?_m(a,m):p==="dangerouslySetInnerHTML"?Bm(a,m):p==="children"?gi(a,m):Hc(a,p,m,d)}switch(c){case"input":Tl(a,o);break;case"textarea":Fm(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?fn(a,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?fn(a,!!o.multiple,o.defaultValue,!0):fn(a,!!o.multiple,o.multiple?[]:"",!1))}a[Ci]=o}catch(w){xe(e,e.return,w)}}break;case 6:if(xt(t,e),Dt(e),i&4){if(e.stateNode===null)throw Error(D(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(w){xe(e,e.return,w)}}break;case 3:if(xt(t,e),Dt(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(w){xe(e,e.return,w)}break;case 4:xt(t,e),Dt(e);break;case 13:xt(t,e),Dt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(bd=ye())),i&4&&Ku(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(Ie=(d=Ie)||p,xt(t,e),Ie=d):xt(t,e),Dt(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(M=e,p=e.child;p!==null;){for(m=M=p;M!==null;){switch(g=M,v=g.child,g.tag){case 0:case 11:case 14:case 15:di(4,g,g.return);break;case 1:un(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){i=g,r=g.return;try{t=i,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){xe(i,r,w)}}break;case 5:un(g,g.return);break;case 22:if(g.memoizedState!==null){Zu(m);continue}}v!==null?(v.return=g,M=v):Zu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{a=m.stateNode,d?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=Lm("display",s))}catch(w){xe(e,e.return,w)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(w){xe(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:xt(t,e),Dt(e),i&4&&Ku(e);break;case 21:break;default:xt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ph(r)){var i=r;break e}r=r.return}throw Error(D(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(gi(a,""),i.flags&=-33);var o=Ju(e);mc(e,o,a);break;case 3:case 4:var s=i.stateNode.containerInfo,c=Ju(e);pc(e,c,s);break;default:throw Error(D(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kx(e,t,r){M=e,hh(e)}function hh(e,t,r){for(var i=(e.mode&1)!==0;M!==null;){var a=M,o=a.child;if(a.tag===22&&i){var s=a.memoizedState!==null||ia;if(!s){var c=a.alternate,l=c!==null&&c.memoizedState!==null||Ie;c=ia;var d=Ie;if(ia=s,(Ie=l)&&!d)for(M=a;M!==null;)s=M,l=s.child,s.tag===22&&s.memoizedState!==null?ep(a):l!==null?(l.return=s,M=l):ep(a);for(;o!==null;)M=o,hh(o),o=o.sibling;M=a,ia=c,Ie=d}Xu(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,M=o):Xu(e)}}function Xu(e){for(;M!==null;){var t=M;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Lo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ie)if(r===null)i.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:wt(t.type,r.memoizedProps);i.componentDidUpdate(a,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fu(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Fu(t,s,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&wi(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ie||t.flags&512&&uc(t)}catch(g){xe(t,t.return,g)}}if(t===e){M=null;break}if(r=t.sibling,r!==null){r.return=t.return,M=r;break}M=t.return}}function Zu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var r=t.sibling;if(r!==null){r.return=t.return,M=r;break}M=t.return}}function ep(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Lo(4,t)}catch(l){xe(t,r,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(l){xe(t,a,l)}}var o=t.return;try{uc(t)}catch(l){xe(t,o,l)}break;case 5:var s=t.return;try{uc(t)}catch(l){xe(t,s,l)}}}catch(l){xe(t,t.return,l)}if(t===e){M=null;break}var c=t.sibling;if(c!==null){c.return=t.return,M=c;break}M=t.return}}var Xx=Math.ceil,fo=Jt.ReactCurrentDispatcher,yd=Jt.ReactCurrentOwner,pt=Jt.ReactCurrentBatchConfig,q=0,De=null,je=null,Ae=0,Ze=0,pn=jr(0),Ce=0,Ri=null,_r=0,_o=0,wd=0,ui=null,Ge=null,bd=0,En=1/0,_t=null,ho=!1,fc=null,fr=null,aa=!1,sr=null,go=0,pi=0,hc=null,Fa=-1,Ia=0;function He(){return q&6?ye():Fa!==-1?Fa:Fa=ye()}function hr(e){return e.mode&1?q&2&&Ae!==0?Ae&-Ae:Mx.transition!==null?(Ia===0&&(Ia=Xm()),Ia):(e=Z,e!==0||(e=window.event,e=e===void 0?16:of(e.type)),e):1}function St(e,t,r,i){if(50<pi)throw pi=0,hc=null,Error(D(185));Fi(e,r,i),(!(q&2)||e!==De)&&(e===De&&(!(q&2)&&(_o|=r),Ce===4&&ar(e,Ae)),Je(e,i),r===1&&q===0&&!(t.mode&1)&&(En=ye()+500,Fo&&kr()))}function Je(e,t){var r=e.callbackNode;Mg(e,t);var i=Xa(e,e===De?Ae:0);if(i===0)r!==null&&cu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&cu(r),t===1)e.tag===0?Ox(tp.bind(null,e)):Cf(tp.bind(null,e)),Dx(function(){!(q&6)&&kr()}),r=null;else{switch(Zm(i)){case 1:r=qc;break;case 4:r=Jm;break;case 16:r=Ka;break;case 536870912:r=Km;break;default:r=Ka}r=kh(r,gh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function gh(e,t){if(Fa=-1,Ia=0,q&6)throw Error(D(327));var r=e.callbackNode;if(yn()&&e.callbackNode!==r)return null;var i=Xa(e,e===De?Ae:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=xo(e,i);else{t=i;var a=q;q|=2;var o=vh();(De!==e||Ae!==t)&&(_t=null,En=ye()+500,Or(e,t));do try{t1();break}catch(c){xh(e,c)}while(1);od(),fo.current=o,q=a,je!==null?t=0:(De=null,Ae=0,t=Ce)}if(t!==0){if(t===2&&(a=Hl(e),a!==0&&(i=a,t=gc(e,a))),t===1)throw r=Ri,Or(e,0),ar(e,i),Je(e,ye()),r;if(t===6)ar(e,i);else{if(a=e.current.alternate,!(i&30)&&!Zx(a)&&(t=xo(e,i),t===2&&(o=Hl(e),o!==0&&(i=o,t=gc(e,o))),t===1))throw r=Ri,Or(e,0),ar(e,i),Je(e,ye()),r;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(D(345));case 2:Pr(e,Ge,_t);break;case 3:if(ar(e,i),(i&130023424)===i&&(t=bd+500-ye(),10<t)){if(Xa(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){He(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Jl(Pr.bind(null,e,Ge,_t),t);break}Pr(e,Ge,_t);break;case 4:if(ar(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-kt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=ye()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Xx(i/1960))-i,10<i){e.timeoutHandle=Jl(Pr.bind(null,e,Ge,_t),i);break}Pr(e,Ge,_t);break;case 5:Pr(e,Ge,_t);break;default:throw Error(D(329))}}}return Je(e,ye()),e.callbackNode===r?gh.bind(null,e):null}function gc(e,t){var r=ui;return e.current.memoizedState.isDehydrated&&(Or(e,t).flags|=256),e=xo(e,t),e!==2&&(t=Ge,Ge=r,t!==null&&xc(t)),e}function xc(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function Zx(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var a=r[i],o=a.getSnapshot;a=a.value;try{if(!zt(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~wd,t&=~_o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-kt(t),i=1<<r;e[r]=-1,t&=~i}}function tp(e){if(q&6)throw Error(D(327));yn();var t=Xa(e,0);if(!(t&1))return Je(e,ye()),null;var r=xo(e,t);if(e.tag!==0&&r===2){var i=Hl(e);i!==0&&(t=i,r=gc(e,i))}if(r===1)throw r=Ri,Or(e,0),ar(e,t),Je(e,ye()),r;if(r===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pr(e,Ge,_t),Je(e,ye()),null}function jd(e,t){var r=q;q|=1;try{return e(t)}finally{q=r,q===0&&(En=ye()+500,Fo&&kr())}}function $r(e){sr!==null&&sr.tag===0&&!(q&6)&&yn();var t=q;q|=1;var r=pt.transition,i=Z;try{if(pt.transition=null,Z=1,e)return e()}finally{Z=i,pt.transition=r,q=t,!(q&6)&&kr()}}function kd(){Ze=pn.current,se(pn)}function Or(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Nx(r)),je!==null)for(r=je.return;r!==null;){var i=r;switch(nd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&no();break;case 3:Sn(),se(Ye),se(_e),pd();break;case 5:ud(i);break;case 4:Sn();break;case 13:se(ue);break;case 19:se(ue);break;case 10:sd(i.type._context);break;case 22:case 23:kd()}r=r.return}if(De=e,je=e=gr(e.current,null),Ae=Ze=t,Ce=0,Ri=null,wd=_o=_r=0,Ge=ui=null,Dr!==null){for(t=0;t<Dr.length;t++)if(r=Dr[t],i=r.interleaved,i!==null){r.interleaved=null;var a=i.next,o=r.pending;if(o!==null){var s=o.next;o.next=a,i.next=s}r.pending=i}Dr=null}return e}function xh(e,t){do{var r=je;try{if(od(),Aa.current=mo,po){for(var i=pe.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}po=!1}if(Lr=0,ze=Se=pe=null,ci=!1,Pi=0,yd.current=null,r===null||r.return===null){Ce=1,Ri=t,je=null;break}e:{var o=e,s=r.return,c=r,l=t;if(t=Ae,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,p=c,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Hu(s);if(v!==null){v.flags&=-257,Uu(v,s,c,o,t),v.mode&1&&$u(o,d,t),t=v,l=d;var x=t.updateQueue;if(x===null){var w=new Set;w.add(l),t.updateQueue=w}else x.add(l);break e}else{if(!(t&1)){$u(o,d,t),Sd();break e}l=Error(D(426))}}else if(ce&&c.mode&1){var b=Hu(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Uu(b,s,c,o,t),id(Cn(l,c));break e}}o=l=Cn(l,c),Ce!==4&&(Ce=2),ui===null?ui=[o]:ui.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=eh(o,l,t);Mu(o,y);break e;case 1:c=l;var f=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(fr===null||!fr.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=th(o,c,t);Mu(o,k);break e}}o=o.return}while(o!==null)}wh(r)}catch(S){t=S,je===r&&r!==null&&(je=r=r.return);continue}break}while(1)}function vh(){var e=fo.current;return fo.current=mo,e===null?mo:e}function Sd(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),De===null||!(_r&268435455)&&!(_o&268435455)||ar(De,Ae)}function xo(e,t){var r=q;q|=2;var i=vh();(De!==e||Ae!==t)&&(_t=null,Or(e,t));do try{e1();break}catch(a){xh(e,a)}while(1);if(od(),q=r,fo.current=i,je!==null)throw Error(D(261));return De=null,Ae=0,Ce}function e1(){for(;je!==null;)yh(je)}function t1(){for(;je!==null&&!Eg();)yh(je)}function yh(e){var t=jh(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?wh(e):je=t,yd.current=null}function wh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Yx(r,t),r!==null){r.flags&=32767,je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,je=null;return}}else if(r=qx(r,t,Ze),r!==null){je=r;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Ce===0&&(Ce=5)}function Pr(e,t,r){var i=Z,a=pt.transition;try{pt.transition=null,Z=1,r1(e,t,r,i)}finally{pt.transition=a,Z=i}return null}function r1(e,t,r,i){do yn();while(sr!==null);if(q&6)throw Error(D(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Fg(e,o),e===De&&(je=De=null,Ae=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||aa||(aa=!0,kh(Ka,function(){return yn(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=pt.transition,pt.transition=null;var s=Z;Z=1;var c=q;q|=4,yd.current=null,Jx(e,r),fh(r,e),jx(Yl),Za=!!ql,Yl=ql=null,e.current=r,Kx(r),zg(),q=c,Z=s,pt.transition=o}else e.current=r;if(aa&&(aa=!1,sr=e,go=a),o=e.pendingLanes,o===0&&(fr=null),Dg(r.stateNode),Je(e,ye()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],i(a.value,{componentStack:a.stack,digest:a.digest});if(ho)throw ho=!1,e=fc,fc=null,e;return go&1&&e.tag!==0&&yn(),o=e.pendingLanes,o&1?e===hc?pi++:(pi=0,hc=e):pi=0,kr(),null}function yn(){if(sr!==null){var e=Zm(go),t=pt.transition,r=Z;try{if(pt.transition=null,Z=16>e?16:e,sr===null)var i=!1;else{if(e=sr,sr=null,go=0,q&6)throw Error(D(331));var a=q;for(q|=4,M=e.current;M!==null;){var o=M,s=o.child;if(M.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var d=c[l];for(M=d;M!==null;){var p=M;switch(p.tag){case 0:case 11:case 15:di(8,p,o)}var m=p.child;if(m!==null)m.return=p,M=m;else for(;M!==null;){p=M;var g=p.sibling,v=p.return;if(uh(p),p===d){M=null;break}if(g!==null){g.return=v,M=g;break}M=v}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}M=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,M=s;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:di(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,M=y;break e}M=o.return}}var f=e.current;for(M=f;M!==null;){s=M;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,M=h;else e:for(s=f;M!==null;){if(c=M,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Lo(9,c)}}catch(S){xe(c,c.return,S)}if(c===s){M=null;break e}var k=c.sibling;if(k!==null){k.return=c.return,M=k;break e}M=c.return}}if(q=a,kr(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Ro,e)}catch{}i=!0}return i}finally{Z=r,pt.transition=t}}return!1}function rp(e,t,r){t=Cn(r,t),t=eh(e,t,1),e=mr(e,t,1),t=He(),e!==null&&(Fi(e,1,t),Je(e,t))}function xe(e,t,r){if(e.tag===3)rp(e,e,r);else for(;t!==null;){if(t.tag===3){rp(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){e=Cn(r,e),e=th(t,e,1),t=mr(t,e,1),e=He(),t!==null&&(Fi(t,1,e),Je(t,e));break}}t=t.return}}function n1(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&r,De===e&&(Ae&r)===r&&(Ce===4||Ce===3&&(Ae&130023424)===Ae&&500>ye()-bd?Or(e,0):wd|=r),Je(e,t)}function bh(e,t){t===0&&(e.mode&1?(t=Qi,Qi<<=1,!(Qi&130023424)&&(Qi=4194304)):t=1);var r=He();e=Yt(e,t),e!==null&&(Fi(e,t,r),Je(e,r))}function i1(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),bh(e,r)}function a1(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(D(314))}i!==null&&i.delete(t),bh(e,r)}var jh;jh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)qe=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return qe=!1,Gx(e,t,r);qe=!!(e.flags&131072)}else qe=!1,ce&&t.flags&1048576&&Ef(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ma(e,t),e=t.pendingProps;var a=bn(t,_e.current);vn(t,r),a=fd(null,t,i,e,a,r);var o=hd();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(i)?(o=!0,io(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,cd(t),a.updater=Bo,t.stateNode=a,a._reactInternals=t,nc(t,i,e,r),t=oc(null,t,i,!0,o,r)):(t.tag=0,ce&&o&&rd(t),$e(null,t,a,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Ma(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=s1(i),e=wt(i,e),a){case 0:t=ac(null,t,i,e,r);break e;case 1:t=Gu(null,t,i,e,r);break e;case 11:t=Vu(null,t,i,e,r);break e;case 14:t=Wu(null,t,i,wt(i.type,e),r);break e}throw Error(D(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:wt(i,a),ac(e,t,i,a,r);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:wt(i,a),Gu(e,t,i,a,r);case 3:e:{if(ah(t),e===null)throw Error(D(387));i=t.pendingProps,o=t.memoizedState,a=o.element,Tf(e,t),co(t,i,null,r);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Cn(Error(D(423)),t),t=qu(e,t,i,r,a);break e}else if(i!==a){a=Cn(Error(D(424)),t),t=qu(e,t,i,r,a);break e}else for(et=pr(t.stateNode.containerInfo.firstChild),tt=t,ce=!0,jt=null,r=Df(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(jn(),i===a){t=Qt(e,t,r);break e}$e(e,t,i,r)}t=t.child}return t;case 5:return Af(t),e===null&&ec(t),i=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,s=a.children,Ql(i,a)?s=null:o!==null&&Ql(i,o)&&(t.flags|=32),ih(e,t),$e(e,t,s,r),t.child;case 6:return e===null&&ec(t),null;case 13:return oh(e,t,r);case 4:return dd(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=kn(t,null,i,r):$e(e,t,i,r),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:wt(i,a),Vu(e,t,i,a,r);case 7:return $e(e,t,t.pendingProps,r),t.child;case 8:return $e(e,t,t.pendingProps.children,r),t.child;case 12:return $e(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,re(so,i._currentValue),i._currentValue=s,o!==null)if(zt(o.value,s)){if(o.children===a.children&&!Ye.current){t=Qt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Wt(-1,r&-r),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?l.next=l:(l.next=p.next,p.next=l),d.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),tc(o.return,r,t),c.lanes|=r;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(D(341));s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),tc(s,r,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}$e(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,vn(t,r),a=mt(a),i=i(a),t.flags|=1,$e(e,t,i,r),t.child;case 14:return i=t.type,a=wt(i,t.pendingProps),a=wt(i.type,a),Wu(e,t,i,a,r);case 15:return rh(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:wt(i,a),Ma(e,t),t.tag=1,Qe(i)?(e=!0,io(t)):e=!1,vn(t,r),Zf(t,i,a),nc(t,i,a,r),oc(null,t,i,!0,e,r);case 19:return sh(e,t,r);case 22:return nh(e,t,r)}throw Error(D(156,t.tag))};function kh(e,t){return Qm(e,t)}function o1(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,r,i){return new o1(e,t,r,i)}function Cd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s1(e){if(typeof e=="function")return Cd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vc)return 11;if(e===Wc)return 14}return 2}function gr(e,t){var r=e.alternate;return r===null?(r=ut(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ba(e,t,r,i,a,o){var s=2;if(i=e,typeof e=="function")Cd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case tn:return Mr(r.children,a,o,t);case Uc:s=8,a|=8;break;case zl:return e=ut(12,r,t,a|2),e.elementType=zl,e.lanes=o,e;case Pl:return e=ut(13,r,t,a),e.elementType=Pl,e.lanes=o,e;case Nl:return e=ut(19,r,t,a),e.elementType=Nl,e.lanes=o,e;case Tm:return $o(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dm:s=10;break e;case Rm:s=9;break e;case Vc:s=11;break e;case Wc:s=14;break e;case rr:s=16,i=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=ut(s,r,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Mr(e,t,r,i){return e=ut(7,e,i,t),e.lanes=r,e}function $o(e,t,r,i){return e=ut(22,e,i,t),e.elementType=Tm,e.lanes=r,e.stateNode={isHidden:!1},e}function Ds(e,t,r){return e=ut(6,e,null,t),e.lanes=r,e}function Rs(e,t,r){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l1(e,t,r,i,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=us(0),this.expirationTimes=us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ed(e,t,r,i,a,o,s,c,l){return e=new l1(e,t,r,c,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},cd(o),e}function c1(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:en,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Sh(e){if(!e)return wr;e=e._reactInternals;e:{if(Vr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var r=e.type;if(Qe(r))return Sf(e,r,t)}return t}function Ch(e,t,r,i,a,o,s,c,l){return e=Ed(r,i,!0,e,a,o,s,c,l),e.context=Sh(null),r=e.current,i=He(),a=hr(r),o=Wt(i,a),o.callback=t??null,mr(r,o,a),e.current.lanes=a,Fi(e,a,i),Je(e,i),e}function Ho(e,t,r,i){var a=t.current,o=He(),s=hr(a);return r=Sh(r),t.context===null?t.context=r:t.pendingContext=r,t=Wt(o,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=mr(a,t,s),e!==null&&(St(e,a,s,o),Ta(e,a,s)),s}function vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function np(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function zd(e,t){np(e,t),(e=e.alternate)&&np(e,t)}function d1(){return null}var Eh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pd(e){this._internalRoot=e}Uo.prototype.render=Pd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Ho(e,t,null,null)};Uo.prototype.unmount=Pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){Ho(null,e,null,null)}),t[qt]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=rf();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ir.length&&t!==0&&t<ir[r].priority;r++);ir.splice(r,0,e),r===0&&af(e)}};function Nd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ip(){}function u1(e,t,r,i,a){if(a){if(typeof i=="function"){var o=i;i=function(){var d=vo(s);o.call(d)}}var s=Ch(t,i,e,0,null,!1,!1,"",ip);return e._reactRootContainer=s,e[qt]=s.current,ki(e.nodeType===8?e.parentNode:e),$r(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var c=i;i=function(){var d=vo(l);c.call(d)}}var l=Ed(e,0,!1,null,null,!1,!1,"",ip);return e._reactRootContainer=l,e[qt]=l.current,ki(e.nodeType===8?e.parentNode:e),$r(function(){Ho(t,l,r,i)}),l}function Wo(e,t,r,i,a){var o=r._reactRootContainer;if(o){var s=o;if(typeof a=="function"){var c=a;a=function(){var l=vo(s);c.call(l)}}Ho(t,s,e,a)}else s=u1(r,t,e,a,i);return vo(s)}ef=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ti(t.pendingLanes);r!==0&&(Yc(t,r|1),Je(t,ye()),!(q&6)&&(En=ye()+500,kr()))}break;case 13:$r(function(){var i=Yt(e,1);if(i!==null){var a=He();St(i,e,1,a)}}),zd(e,1)}};Qc=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var r=He();St(t,e,134217728,r)}zd(e,134217728)}};tf=function(e){if(e.tag===13){var t=hr(e),r=Yt(e,t);if(r!==null){var i=He();St(r,e,t,i)}zd(e,t)}};rf=function(){return Z};nf=function(e,t){var r=Z;try{return Z=e,t()}finally{Z=r}};Ll=function(e,t,r){switch(t){case"input":if(Tl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var a=Mo(i);if(!a)throw Error(D(90));Om(i),Tl(i,a)}}}break;case"textarea":Fm(e,r);break;case"select":t=r.value,t!=null&&fn(e,!!r.multiple,t,!1)}};Um=jd;Vm=$r;var p1={usingClientEntryPoint:!1,Events:[Bi,on,Mo,$m,Hm,jd]},Jn={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m1={bundleType:Jn.bundleType,version:Jn.version,rendererPackageName:Jn.rendererPackageName,rendererConfig:Jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qm(e),e===null?null:e.stateNode},findFiberByHostInstance:Jn.findFiberByHostInstance||d1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{Ro=oa.inject(m1),Mt=oa}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p1;nt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(t))throw Error(D(200));return c1(e,t,null,r)};nt.createRoot=function(e,t){if(!Nd(e))throw Error(D(299));var r=!1,i="",a=Eh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ed(e,1,!1,null,null,r,!1,i,a),e[qt]=t.current,ki(e.nodeType===8?e.parentNode:e),new Pd(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=qm(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return $r(e)};nt.hydrate=function(e,t,r){if(!Vo(t))throw Error(D(200));return Wo(null,e,t,!0,r)};nt.hydrateRoot=function(e,t,r){if(!Nd(e))throw Error(D(405));var i=r!=null&&r.hydratedSources||null,a=!1,o="",s=Eh;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Ch(t,null,e,1,r??null,a,!1,o,s),e[qt]=t.current,ki(e),i)for(e=0;e<i.length;e++)r=i[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Uo(t)};nt.render=function(e,t,r){if(!Vo(t))throw Error(D(200));return Wo(null,e,t,!1,r)};nt.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(D(40));return e._reactRootContainer?($r(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};nt.unstable_batchedUpdates=jd;nt.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Vo(r))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Wo(e,t,r,!1,i)};nt.version="18.3.1-next-f1338f8080-20240426";function zh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zh)}catch(e){console.error(e)}}zh(),Em.exports=nt;var f1=Em.exports,ap=f1;Cl.createRoot=ap.createRoot,Cl.hydrateRoot=ap.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ti(){return Ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ti.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const op="popstate";function h1(e){e===void 0&&(e={});function t(i,a){let{pathname:o,search:s,hash:c}=i.location;return vc("",{pathname:o,search:s,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(i,a){return typeof a=="string"?a:yo(a)}return x1(t,r,null,e)}function we(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ph(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function g1(){return Math.random().toString(36).substr(2,8)}function sp(e,t){return{usr:e.state,key:e.key,idx:t}}function vc(e,t,r,i){return r===void 0&&(r=null),Ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?In(t):t,{state:r,key:t&&t.key||i||g1()})}function yo(e){let{pathname:t="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function In(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function x1(e,t,r,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:o=!1}=i,s=a.history,c=lr.Pop,l=null,d=p();d==null&&(d=0,s.replaceState(Ti({},s.state,{idx:d}),""));function p(){return(s.state||{idx:null}).idx}function m(){c=lr.Pop;let b=p(),y=b==null?null:b-d;d=b,l&&l({action:c,location:w.location,delta:y})}function g(b,y){c=lr.Push;let f=vc(w.location,b,y);r&&r(f,b),d=p()+1;let h=sp(f,d),k=w.createHref(f);try{s.pushState(h,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(k)}o&&l&&l({action:c,location:w.location,delta:1})}function v(b,y){c=lr.Replace;let f=vc(w.location,b,y);r&&r(f,b),d=p();let h=sp(f,d),k=w.createHref(f);s.replaceState(h,"",k),o&&l&&l({action:c,location:w.location,delta:0})}function x(b){let y=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof b=="string"?b:yo(b);return f=f.replace(/ $/,"%20"),we(y,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,y)}let w={get action(){return c},get location(){return e(a,s)},listen(b){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(op,m),l=b,()=>{a.removeEventListener(op,m),l=null}},createHref(b){return t(a,b)},createURL:x,encodeLocation(b){let y=x(b);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:v,go(b){return s.go(b)}};return w}var lp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(lp||(lp={}));function v1(e,t,r){return r===void 0&&(r="/"),y1(e,t,r,!1)}function y1(e,t,r,i){let a=typeof t=="string"?In(t):t,o=Dd(a.pathname||"/",r);if(o==null)return null;let s=Nh(e);w1(s);let c=null;for(let l=0;c==null&&l<s.length;++l){let d=R1(o);c=N1(s[l],d,i)}return c}function Nh(e,t,r,i){t===void 0&&(t=[]),r===void 0&&(r=[]),i===void 0&&(i="");let a=(o,s,c)=>{let l={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let d=xr([i,l.relativePath]),p=r.concat(l);o.children&&o.children.length>0&&(we(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Nh(o.children,t,p,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:z1(d,o.index),routesMeta:p})};return e.forEach((o,s)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))a(o,s);else for(let l of Dh(o.path))a(o,s,l)}),t}function Dh(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(i.length===0)return a?[o,""]:[o];let s=Dh(i.join("/")),c=[];return c.push(...s.map(l=>l===""?o:[o,l].join("/"))),a&&c.push(...s),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function w1(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:P1(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const b1=/^:[\w-]+$/,j1=3,k1=2,S1=1,C1=10,E1=-2,cp=e=>e==="*";function z1(e,t){let r=e.split("/"),i=r.length;return r.some(cp)&&(i+=E1),t&&(i+=k1),r.filter(a=>!cp(a)).reduce((a,o)=>a+(b1.test(o)?j1:o===""?S1:C1),i)}function P1(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function N1(e,t,r){r===void 0&&(r=!1);let{routesMeta:i}=e,a={},o="/",s=[];for(let c=0;c<i.length;++c){let l=i[c],d=c===i.length-1,p=o==="/"?t:t.slice(o.length)||"/",m=dp({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},p),g=l.route;if(!m&&d&&r&&!i[i.length-1].route.index&&(m=dp({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},p)),!m)return null;Object.assign(a,m.params),s.push({params:a,pathname:xr([o,m.pathname]),pathnameBase:M1(xr([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=xr([o,m.pathnameBase]))}return s}function dp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=D1(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],s=o.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:i.reduce((d,p,m)=>{let{paramName:g,isOptional:v}=p;if(g==="*"){let w=c[m]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=c[m];return v&&!x?d[g]=void 0:d[g]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:e}}function D1(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Ph(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,l)=>(i.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function R1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ph(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Dd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function T1(e,t){t===void 0&&(t="/");let{pathname:r,search:i="",hash:a=""}=typeof e=="string"?In(e):e;return{pathname:r?r.startsWith("/")?r:A1(r,t):t,search:F1(i),hash:I1(a)}}function A1(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Ts(e,t,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function O1(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Rd(e,t){let r=O1(e);return t?r.map((i,a)=>a===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function Td(e,t,r,i){i===void 0&&(i=!1);let a;typeof e=="string"?a=In(e):(a=Ti({},e),we(!a.pathname||!a.pathname.includes("?"),Ts("?","pathname","search",a)),we(!a.pathname||!a.pathname.includes("#"),Ts("#","pathname","hash",a)),we(!a.search||!a.search.includes("#"),Ts("#","search","hash",a)));let o=e===""||a.pathname==="",s=o?"/":a.pathname,c;if(s==null)c=r;else{let m=t.length-1;if(!i&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;a.pathname=g.join("/")}c=m>=0?t[m]:"/"}let l=T1(a,c),d=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(d||p)&&(l.pathname+="/"),l}const xr=e=>e.join("/").replace(/\/\/+/g,"/"),M1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,I1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function B1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Rh=["post","put","patch","delete"];new Set(Rh);const L1=["get",...Rh];new Set(L1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ai.apply(this,arguments)}const Ad=j.createContext(null),_1=j.createContext(null),Sr=j.createContext(null),Go=j.createContext(null),Cr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Th=j.createContext(null);function $1(e,t){let{relative:r}=t===void 0?{}:t;Bn()||we(!1);let{basename:i,navigator:a}=j.useContext(Sr),{hash:o,pathname:s,search:c}=Oh(e,{relative:r}),l=s;return i!=="/"&&(l=s==="/"?i:xr([i,s])),a.createHref({pathname:l,search:c,hash:o})}function Bn(){return j.useContext(Go)!=null}function Er(){return Bn()||we(!1),j.useContext(Go).location}function Ah(e){j.useContext(Sr).static||j.useLayoutEffect(e)}function gt(){let{isDataRoute:e}=j.useContext(Cr);return e?ev():H1()}function H1(){Bn()||we(!1);let e=j.useContext(Ad),{basename:t,future:r,navigator:i}=j.useContext(Sr),{matches:a}=j.useContext(Cr),{pathname:o}=Er(),s=JSON.stringify(Rd(a,r.v7_relativeSplatPath)),c=j.useRef(!1);return Ah(()=>{c.current=!0}),j.useCallback(function(d,p){if(p===void 0&&(p={}),!c.current)return;if(typeof d=="number"){i.go(d);return}let m=Td(d,JSON.parse(s),o,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:xr([t,m.pathname])),(p.replace?i.replace:i.push)(m,p.state,p)},[t,i,s,o,e])}function Oh(e,t){let{relative:r}=t===void 0?{}:t,{future:i}=j.useContext(Sr),{matches:a}=j.useContext(Cr),{pathname:o}=Er(),s=JSON.stringify(Rd(a,i.v7_relativeSplatPath));return j.useMemo(()=>Td(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function U1(e,t){return V1(e,t)}function V1(e,t,r,i){Bn()||we(!1);let{navigator:a}=j.useContext(Sr),{matches:o}=j.useContext(Cr),s=o[o.length-1],c=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let d=Er(),p;if(t){var m;let b=typeof t=="string"?In(t):t;l==="/"||(m=b.pathname)!=null&&m.startsWith(l)||we(!1),p=b}else p=d;let g=p.pathname||"/",v=g;if(l!=="/"){let b=l.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=v1(e,{pathname:v}),w=Q1(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},c,b.params),pathname:xr([l,a.encodeLocation?a.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:xr([l,a.encodeLocation?a.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,r,i);return t&&w?j.createElement(Go.Provider,{value:{location:Ai({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:lr.Pop}},w):w}function W1(){let e=Z1(),t=B1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),r?j.createElement("pre",{style:a},r):null,o)}const G1=j.createElement(W1,null);class q1 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?j.createElement(Cr.Provider,{value:this.props.routeContext},j.createElement(Th.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y1(e){let{routeContext:t,match:r,children:i}=e,a=j.useContext(Ad);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(Cr.Provider,{value:t},i)}function Q1(e,t,r,i){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),i===void 0&&(i=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=i)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,c=(a=r)==null?void 0:a.errors;if(c!=null){let p=s.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);p>=0||we(!1),s=s.slice(0,Math.min(s.length,p+1))}let l=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let p=0;p<s.length;p++){let m=s[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:v}=r,x=m.route.loader&&g[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,m,g)=>{let v,x=!1,w=null,b=null;r&&(v=c&&m.route.id?c[m.route.id]:void 0,w=m.route.errorElement||G1,l&&(d<0&&g===0?(tv("route-fallback",!1),x=!0,b=null):d===g&&(x=!0,b=m.route.hydrateFallbackElement||null)));let y=t.concat(s.slice(0,g+1)),f=()=>{let h;return v?h=w:x?h=b:m.route.Component?h=j.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=p,j.createElement(Y1,{match:m,routeContext:{outlet:p,matches:y,isDataRoute:r!=null},children:h})};return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?j.createElement(q1,{location:r.location,revalidation:r.revalidation,component:w,error:v,children:f(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):f()},null)}var Mh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Mh||{}),wo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wo||{});function J1(e){let t=j.useContext(Ad);return t||we(!1),t}function K1(e){let t=j.useContext(_1);return t||we(!1),t}function X1(e){let t=j.useContext(Cr);return t||we(!1),t}function Fh(e){let t=X1(),r=t.matches[t.matches.length-1];return r.route.id||we(!1),r.route.id}function Z1(){var e;let t=j.useContext(Th),r=K1(wo.UseRouteError),i=Fh(wo.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[i]}function ev(){let{router:e}=J1(Mh.UseNavigateStable),t=Fh(wo.UseNavigateStable),r=j.useRef(!1);return Ah(()=>{r.current=!0}),j.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ai({fromRouteId:t},o)))},[e,t])}const up={};function tv(e,t,r){!t&&!up[e]&&(up[e]=!0)}function rv(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function mi(e){let{to:t,replace:r,state:i,relative:a}=e;Bn()||we(!1);let{future:o,static:s}=j.useContext(Sr),{matches:c}=j.useContext(Cr),{pathname:l}=Er(),d=gt(),p=Td(t,Rd(c,o.v7_relativeSplatPath),l,a==="path"),m=JSON.stringify(p);return j.useEffect(()=>d(JSON.parse(m),{replace:r,state:i,relative:a}),[d,m,a,r,i]),null}function Q(e){we(!1)}function nv(e){let{basename:t="/",children:r=null,location:i,navigationType:a=lr.Pop,navigator:o,static:s=!1,future:c}=e;Bn()&&we(!1);let l=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:l,navigator:o,static:s,future:Ai({v7_relativeSplatPath:!1},c)}),[l,c,o,s]);typeof i=="string"&&(i=In(i));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:x="default"}=i,w=j.useMemo(()=>{let b=Dd(p,l);return b==null?null:{location:{pathname:b,search:m,hash:g,state:v,key:x},navigationType:a}},[l,p,m,g,v,x,a]);return w==null?null:j.createElement(Sr.Provider,{value:d},j.createElement(Go.Provider,{children:r,value:w}))}function iv(e){let{children:t,location:r}=e;return U1(yc(t),r)}new Promise(()=>{});function yc(e,t){t===void 0&&(t=[]);let r=[];return j.Children.forEach(e,(i,a)=>{if(!j.isValidElement(i))return;let o=[...t,a];if(i.type===j.Fragment){r.push.apply(r,yc(i.props.children,o));return}i.type!==Q&&we(!1),!i.props.index||!i.props.children||we(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=yc(i.props.children,o)),r.push(s)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wc(){return wc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},wc.apply(this,arguments)}function av(e,t){if(e==null)return{};var r={},i=Object.keys(e),a,o;for(o=0;o<i.length;o++)a=i[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function ov(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sv(e,t){return e.button===0&&(!t||t==="_self")&&!ov(e)}const lv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cv="6";try{window.__reactRouterVersion=cv}catch{}const dv="startTransition",pp=ng[dv];function uv(e){let{basename:t,children:r,future:i,window:a}=e,o=j.useRef();o.current==null&&(o.current=h1({window:a,v5Compat:!0}));let s=o.current,[c,l]=j.useState({action:s.action,location:s.location}),{v7_startTransition:d}=i||{},p=j.useCallback(m=>{d&&pp?pp(()=>l(m)):l(m)},[l,d]);return j.useLayoutEffect(()=>s.listen(p),[s,p]),j.useEffect(()=>rv(i),[i]),j.createElement(nv,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s,future:i})}const pv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$=j.forwardRef(function(t,r){let{onClick:i,relative:a,reloadDocument:o,replace:s,state:c,target:l,to:d,preventScrollReset:p,viewTransition:m}=t,g=av(t,lv),{basename:v}=j.useContext(Sr),x,w=!1;if(typeof d=="string"&&mv.test(d)&&(x=d,pv))try{let h=new URL(window.location.href),k=d.startsWith("//")?new URL(h.protocol+d):new URL(d),S=Dd(k.pathname,v);k.origin===h.origin&&S!=null?d=S+k.search+k.hash:w=!0}catch{}let b=$1(d,{relative:a}),y=fv(d,{replace:s,state:c,target:l,preventScrollReset:p,relative:a,viewTransition:m});function f(h){i&&i(h),h.defaultPrevented||y(h)}return j.createElement("a",wc({},g,{href:x||b,onClick:w||o?i:f,ref:r,target:l}))});var mp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mp||(mp={}));var fp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fp||(fp={}));function fv(e,t){let{target:r,replace:i,state:a,preventScrollReset:o,relative:s,viewTransition:c}=t===void 0?{}:t,l=gt(),d=Er(),p=Oh(e,{relative:s});return j.useCallback(m=>{if(sv(m,r)){m.preventDefault();let g=i!==void 0?i:yo(d)===yo(p);l(e,{replace:g,state:a,preventScrollReset:o,relative:s,viewTransition:c})}},[d,l,p,i,a,r,e,o,s,c])}const Ih=j.createContext(),Kt=()=>{const e=j.useContext(Ih);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},hv=({children:e})=>{const[t,r]=j.useState(null),[i,a]=j.useState(!0),[o,s]=j.useState(null),c=async(v,x)=>{try{if(s(null),a(!0),await new Promise(w=>setTimeout(w,1e3)),v==="admin@hotel.com"&&x==="admin123"||v==="meet85734@gmail.com"&&x==="1meet2005"){const w={id:v==="admin@hotel.com"?1:2,email:v,name:v==="admin@hotel.com"?"Admin User":"Meet Admin",role:"admin",avatar:"💀",joinedDate:v==="admin@hotel.com"?"2023-01-15":new Date().toISOString().split("T")[0],preferences:{language:"en",currency:"USD",theme:"light"}};return r(w),localStorage.setItem("user",JSON.stringify(w)),w}else if(v&&x.length>=6){const w={id:Date.now(),email:v,name:v.split("@")[0],role:"user",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",joinedDate:new Date().toISOString().split("T")[0],preferences:{language:"en",currency:"USD",theme:"light"}};return r(w),localStorage.setItem("user",JSON.stringify(w)),w}else throw new Error("Invalid credentials")}catch(w){throw s(w.message),w}finally{a(!1)}},l=async(v,x,w,b)=>{try{if(s(null),a(!0),await new Promise(f=>setTimeout(f,1e3)),w!==b)throw new Error("Passwords do not match");if(w.length<6)throw new Error("Password must be at least 6 characters");const y={id:Date.now(),email:x,name:v,role:"user",avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",joinedDate:new Date().toISOString().split("T")[0],preferences:{language:"en",currency:"USD",theme:"light"}};return r(y),localStorage.setItem("user",JSON.stringify(y)),y}catch(y){throw s(y.message),y}finally{a(!1)}},d=async()=>{try{a(!0),await new Promise(v=>setTimeout(v,500)),r(null),localStorage.removeItem("user"),s(null)}catch(v){throw s("Failed to logout"),v}finally{a(!1)}},p=async v=>{try{a(!0),await new Promise(w=>setTimeout(w,500));const x={...t,...v};return r(x),localStorage.setItem("user",JSON.stringify(x)),x}catch(x){throw s(x.message),x}finally{a(!1)}},m=async v=>{try{return a(!0),await new Promise(x=>setTimeout(x,1e3)),{success:!0,message:"Password reset email sent"}}catch(x){throw s(x.message),x}finally{a(!1)}};j.useEffect(()=>{const v=localStorage.getItem("user");if(v)try{r(JSON.parse(v))}catch{localStorage.removeItem("user")}a(!1)},[]);const g={user:t,loading:i,error:o,login:c,signup:l,logout:d,updateProfile:p,resetPassword:m,setError:s};return n.jsx(Ih.Provider,{value:g,children:e})};var Le=function(){return Le=Object.assign||function(t){for(var r,i=1,a=arguments.length;i<a;i++){r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Le.apply(this,arguments)};function zn(e,t,r){if(r||arguments.length===2)for(var i=0,a=t.length,o;i<a;i++)(o||!(i in t))&&(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))}var oe="-ms-",fi="-moz-",K="-webkit-",Bh="comm",qo="rule",Od="decl",gv="@import",Lh="@keyframes",xv="@layer",_h=Math.abs,Md=String.fromCharCode,bc=Object.assign;function vv(e,t){return Pe(e,0)^45?(((t<<2^Pe(e,0))<<2^Pe(e,1))<<2^Pe(e,2))<<2^Pe(e,3):0}function $h(e){return e.trim()}function $t(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,r){return e.replace(t,r)}function La(e,t,r){return e.indexOf(t,r)}function Pe(e,t){return e.charCodeAt(t)|0}function Pn(e,t,r){return e.slice(t,r)}function At(e){return e.length}function Hh(e){return e.length}function ni(e,t){return t.push(e),e}function yv(e,t){return e.map(t).join("")}function hp(e,t){return e.filter(function(r){return!$t(r,t)})}var Yo=1,Nn=1,Uh=0,ht=0,be=0,Ln="";function Qo(e,t,r,i,a,o,s,c){return{value:e,root:t,parent:r,type:i,props:a,children:o,line:Yo,column:Nn,length:s,return:"",siblings:c}}function tr(e,t){return bc(Qo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Gr(e){for(;e.root;)e=tr(e.root,{children:[e]});ni(e,e.siblings)}function wv(){return be}function bv(){return be=ht>0?Pe(Ln,--ht):0,Nn--,be===10&&(Nn=1,Yo--),be}function Ct(){return be=ht<Uh?Pe(Ln,ht++):0,Nn++,be===10&&(Nn=1,Yo++),be}function Fr(){return Pe(Ln,ht)}function _a(){return ht}function Jo(e,t){return Pn(Ln,e,t)}function jc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jv(e){return Yo=Nn=1,Uh=At(Ln=e),ht=0,[]}function kv(e){return Ln="",e}function As(e){return $h(Jo(ht-1,kc(e===91?e+2:e===40?e+1:e)))}function Sv(e){for(;(be=Fr())&&be<33;)Ct();return jc(e)>2||jc(be)>3?"":" "}function Cv(e,t){for(;--t&&Ct()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Jo(e,_a()+(t<6&&Fr()==32&&Ct()==32))}function kc(e){for(;Ct();)switch(be){case e:return ht;case 34:case 39:e!==34&&e!==39&&kc(be);break;case 40:e===41&&kc(e);break;case 92:Ct();break}return ht}function Ev(e,t){for(;Ct()&&e+be!==47+10;)if(e+be===42+42&&Fr()===47)break;return"/*"+Jo(t,ht-1)+"*"+Md(e===47?e:Ct())}function zv(e){for(;!jc(Fr());)Ct();return Jo(e,ht)}function Pv(e){return kv($a("",null,null,null,[""],e=jv(e),0,[0],e))}function $a(e,t,r,i,a,o,s,c,l){for(var d=0,p=0,m=s,g=0,v=0,x=0,w=1,b=1,y=1,f=0,h="",k=a,S=o,E=i,P=h;b;)switch(x=f,f=Ct()){case 40:if(x!=108&&Pe(P,m-1)==58){La(P+=W(As(f),"&","&\f"),"&\f",_h(d?c[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:P+=As(f);break;case 9:case 10:case 13:case 32:P+=Sv(x);break;case 92:P+=Cv(_a()-1,7);continue;case 47:switch(Fr()){case 42:case 47:ni(Nv(Ev(Ct(),_a()),t,r,l),l);break;default:P+="/"}break;case 123*w:c[d++]=At(P)*y;case 125*w:case 59:case 0:switch(f){case 0:case 125:b=0;case 59+p:y==-1&&(P=W(P,/\f/g,"")),v>0&&At(P)-m&&ni(v>32?xp(P+";",i,r,m-1,l):xp(W(P," ","")+";",i,r,m-2,l),l);break;case 59:P+=";";default:if(ni(E=gp(P,t,r,d,p,a,c,h,k=[],S=[],m,o),o),f===123)if(p===0)$a(P,t,E,E,k,o,m,c,S);else switch(g===99&&Pe(P,3)===110?100:g){case 100:case 108:case 109:case 115:$a(e,E,E,i&&ni(gp(e,E,E,0,0,a,c,h,a,k=[],m,S),S),a,S,m,c,i?k:S);break;default:$a(P,E,E,E,[""],S,0,c,S)}}d=p=v=0,w=y=1,h=P="",m=s;break;case 58:m=1+At(P),v=x;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&bv()==125)continue}switch(P+=Md(f),f*w){case 38:y=p>0?1:(P+="\f",-1);break;case 44:c[d++]=(At(P)-1)*y,y=1;break;case 64:Fr()===45&&(P+=As(Ct())),g=Fr(),p=m=At(h=P+=zv(_a())),f++;break;case 45:x===45&&At(P)==2&&(w=0)}}return o}function gp(e,t,r,i,a,o,s,c,l,d,p,m){for(var g=a-1,v=a===0?o:[""],x=Hh(v),w=0,b=0,y=0;w<i;++w)for(var f=0,h=Pn(e,g+1,g=_h(b=s[w])),k=e;f<x;++f)(k=$h(b>0?v[f]+" "+h:W(h,/&\f/g,v[f])))&&(l[y++]=k);return Qo(e,t,r,a===0?qo:c,l,d,p,m)}function Nv(e,t,r,i){return Qo(e,t,r,Bh,Md(wv()),Pn(e,2,-2),0,i)}function xp(e,t,r,i,a){return Qo(e,t,r,Od,Pn(e,0,i),Pn(e,i+1,-1),i,a)}function Vh(e,t,r){switch(vv(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return fi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+fi+e+oe+e+e;case 5936:switch(Pe(e,t+11)){case 114:return K+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+oe+e+e;case 6165:return K+e+oe+"flex-"+e+e;case 5187:return K+e+W(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return K+e+oe+"flex-item-"+W(e,/flex-|-self/g,"")+($t(e,/flex-|baseline/)?"":oe+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return K+e+oe+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+oe+W(e,"shrink","negative")+e;case 5292:return K+e+oe+W(e,"basis","preferred-size")+e;case 6060:return K+"box-"+W(e,"-grow","")+K+e+oe+W(e,"grow","positive")+e;case 4554:return K+W(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!$t(e,/flex-|baseline/))return oe+"grid-column-align"+Pn(e,t)+e;break;case 2592:case 3360:return oe+W(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(i,a){return t=a,$t(i.props,/grid-\w+-end/)})?~La(e+(r=r[t].value),"span",0)?e:oe+W(e,"-start","")+e+oe+"grid-row-span:"+(~La(r,"span",0)?$t(r,/\d+/):+$t(r,/\d+/)-+$t(e,/\d+/))+";":oe+W(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(i){return $t(i.props,/grid-\w+-start/)})?e:oe+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch(Pe(e,t+1)){case 109:if(Pe(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+fi+(Pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~La(e,"stretch",0)?Vh(W(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,o,s,c,l,d){return oe+a+":"+o+d+(s?oe+a+"-span:"+(c?l:+l-+o)+d:"")+e});case 4949:if(Pe(e,t+6)===121)return W(e,":",":"+K)+e;break;case 6444:switch(Pe(e,Pe(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(Pe(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+oe+"$2box$3")+e;case 100:return W(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function bo(e,t){for(var r="",i=0;i<e.length;i++)r+=t(e[i],i,e,t)||"";return r}function Dv(e,t,r,i){switch(e.type){case xv:if(e.children.length)break;case gv:case Od:return e.return=e.return||e.value;case Bh:return"";case Lh:return e.return=e.value+"{"+bo(e.children,i)+"}";case qo:if(!At(e.value=e.props.join(",")))return""}return At(r=bo(e.children,i))?e.return=e.value+"{"+r+"}":""}function Rv(e){var t=Hh(e);return function(r,i,a,o){for(var s="",c=0;c<t;c++)s+=e[c](r,i,a,o)||"";return s}}function Tv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Av(e,t,r,i){if(e.length>-1&&!e.return)switch(e.type){case Od:e.return=Vh(e.value,e.length,r);return;case Lh:return bo([tr(e,{value:W(e.value,"@","@"+K)})],i);case qo:if(e.length)return yv(r=e.props,function(a){switch($t(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gr(tr(e,{props:[W(a,/:(read-\w+)/,":"+fi+"$1")]})),Gr(tr(e,{props:[a]})),bc(e,{props:hp(r,i)});break;case"::placeholder":Gr(tr(e,{props:[W(a,/:(plac\w+)/,":"+K+"input-$1")]})),Gr(tr(e,{props:[W(a,/:(plac\w+)/,":"+fi+"$1")]})),Gr(tr(e,{props:[W(a,/:(plac\w+)/,oe+"input-$1")]})),Gr(tr(e,{props:[a]})),bc(e,{props:hp(r,i)});break}return""})}}var Ov={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Wh="active",Gh="data-styled-version",Ko="6.1.19",Fd=`/*!sc*/
`,jo=typeof window<"u"&&typeof document<"u",Mv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Fv={},Xo=Object.freeze([]),Rn=Object.freeze({});function qh(e,t,r){return r===void 0&&(r=Rn),e.theme!==r.theme&&e.theme||t||r.theme}var Yh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Iv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bv=/(^-|-$)/g;function vp(e){return e.replace(Iv,"-").replace(Bv,"")}var Lv=/(a)(d)/gi,sa=52,yp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Sc(e){var t,r="";for(t=Math.abs(e);t>sa;t=t/sa|0)r=yp(t%sa)+r;return(yp(t%sa)+r).replace(Lv,"$1-$2")}var Os,Qh=5381,mn=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Jh=function(e){return mn(Qh,e)};function Id(e){return Sc(Jh(e)>>>0)}function _v(e){return e.displayName||e.name||"Component"}function Ms(e){return typeof e=="string"&&!0}var Kh=typeof Symbol=="function"&&Symbol.for,Xh=Kh?Symbol.for("react.memo"):60115,$v=Kh?Symbol.for("react.forward_ref"):60112,Hv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vv=((Os={})[$v]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Os[Xh]=Zh,Os);function wp(e){return("type"in(t=e)&&t.type.$$typeof)===Xh?Zh:"$$typeof"in e?Vv[e.$$typeof]:Hv;var t}var Wv=Object.defineProperty,Gv=Object.getOwnPropertyNames,bp=Object.getOwnPropertySymbols,qv=Object.getOwnPropertyDescriptor,Yv=Object.getPrototypeOf,jp=Object.prototype;function e0(e,t,r){if(typeof t!="string"){if(jp){var i=Yv(t);i&&i!==jp&&e0(e,i,r)}var a=Gv(t);bp&&(a=a.concat(bp(t)));for(var o=wp(e),s=wp(t),c=0;c<a.length;++c){var l=a[c];if(!(l in Uv||r&&r[l]||s&&l in s||o&&l in o)){var d=qv(t,l);try{Wv(e,l,d)}catch{}}}}return e}function Tn(e){return typeof e=="function"}function Bd(e){return typeof e=="object"&&"styledComponentId"in e}function Tr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ko(e,t){if(e.length===0)return"";for(var r=e[0],i=1;i<e.length;i++)r+=t?t+e[i]:e[i];return r}function Oi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cc(e,t,r){if(r===void 0&&(r=!1),!r&&!Oi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Cc(e[i],t[i]);else if(Oi(t))for(var i in t)e[i]=Cc(e[i],t[i]);return e}function Ld(e,t){Object.defineProperty(e,"toString",{value:t})}function _i(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,i=0;i<t;i++)r+=this.groupSizes[i];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;t>=o;)if((o<<=1)<0)throw _i(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=a;s<o;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),l=(s=0,r.length);s<l;s++)this.tag.insertRule(c,r[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r;this.groupSizes[t]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i,s=a;s<o;s++)r+="".concat(this.tag.getRule(s)).concat(Fd);return r},e}(),Ha=new Map,So=new Map,Ua=1,la=function(e){if(Ha.has(e))return Ha.get(e);for(;So.has(Ua);)Ua++;var t=Ua++;return Ha.set(e,t),So.set(t,e),t},Jv=function(e,t){Ua=t+1,Ha.set(e,t),So.set(t,e)},Kv="style[".concat(Dn,"][").concat(Gh,'="').concat(Ko,'"]'),Xv=new RegExp("^".concat(Dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zv=function(e,t,r){for(var i,a=r.split(","),o=0,s=a.length;o<s;o++)(i=a[o])&&e.registerName(t,i)},ey=function(e,t){for(var r,i=((r=t.textContent)!==null&&r!==void 0?r:"").split(Fd),a=[],o=0,s=i.length;o<s;o++){var c=i[o].trim();if(c){var l=c.match(Xv);if(l){var d=0|parseInt(l[1],10),p=l[2];d!==0&&(Jv(p,d),Zv(e,p,l[3]),e.getTag().insertRules(d,a)),a.length=0}else a.push(c)}}},kp=function(e){for(var t=document.querySelectorAll(Kv),r=0,i=t.length;r<i;r++){var a=t[r];a&&a.getAttribute(Dn)!==Wh&&(ey(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ty(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var t0=function(e){var t=document.head,r=e||t,i=document.createElement("style"),a=function(c){var l=Array.from(c.querySelectorAll("style[".concat(Dn,"]")));return l[l.length-1]}(r),o=a!==void 0?a.nextSibling:null;i.setAttribute(Dn,Wh),i.setAttribute(Gh,Ko);var s=ty();return s&&i.setAttribute("nonce",s),r.insertBefore(i,o),i},ry=function(){function e(t){this.element=t0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var i=document.styleSheets,a=0,o=i.length;a<o;a++){var s=i[a];if(s.ownerNode===r)return s}throw _i(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),ny=function(){function e(t){this.element=t0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var i=document.createTextNode(r);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),iy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Sp=jo,ay={isServer:!jo,useCSSOMInjection:!Mv},Co=function(){function e(t,r,i){t===void 0&&(t=Rn),r===void 0&&(r={});var a=this;this.options=Le(Le({},ay),t),this.gs=r,this.names=new Map(i),this.server=!!t.isServer,!this.server&&jo&&Sp&&(Sp=!1,kp(this)),Ld(this,function(){return function(o){for(var s=o.getTag(),c=s.length,l="",d=function(m){var g=function(y){return So.get(y)}(m);if(g===void 0)return"continue";var v=o.names.get(g),x=s.getGroup(m);if(v===void 0||!v.size||x.length===0)return"continue";var w="".concat(Dn,".g").concat(m,'[id="').concat(g,'"]'),b="";v!==void 0&&v.forEach(function(y){y.length>0&&(b+="".concat(y,","))}),l+="".concat(x).concat(w,'{content:"').concat(b,'"}').concat(Fd)},p=0;p<c;p++)d(p);return l}(a)})}return e.registerId=function(t){return la(t)},e.prototype.rehydrate=function(){!this.server&&jo&&kp(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Le(Le({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var i=r.useCSSOMInjection,a=r.target;return r.isServer?new iy(a):i?new ry(a):new ny(a)}(this.options),new Qv(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(la(t),this.names.has(t))this.names.get(t).add(r);else{var i=new Set;i.add(r),this.names.set(t,i)}},e.prototype.insertRules=function(t,r,i){this.registerName(t,r),this.getTag().insertRules(la(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(la(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),oy=/&/g,sy=/^\s*\/\/.*$/gm;function r0(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=r0(r.children,t)),r})}function ly(e){var t,r,i,a=e===void 0?Rn:e,o=a.options,s=o===void 0?Rn:o,c=a.plugins,l=c===void 0?Xo:c,d=function(g,v,x){return x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):g},p=l.slice();p.push(function(g){g.type===qo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(oy,r).replace(i,d))}),s.prefix&&p.push(Av),p.push(Dv);var m=function(g,v,x,w){v===void 0&&(v=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,r=v,i=new RegExp("\\".concat(r,"\\b"),"g");var b=g.replace(sy,""),y=Pv(x||v?"".concat(x," ").concat(v," { ").concat(b," }"):b);s.namespace&&(y=r0(y,s.namespace));var f=[];return bo(y,Rv(p.concat(Tv(function(h){return f.push(h)})))),f};return m.hash=l.length?l.reduce(function(g,v){return v.name||_i(15),mn(g,v.name)},Qh).toString():"",m}var cy=new Co,Ec=ly(),n0=Ne.createContext({shouldForwardProp:void 0,styleSheet:cy,stylis:Ec});n0.Consumer;Ne.createContext(void 0);function zc(){return j.useContext(n0)}var i0=function(){function e(t,r){var i=this;this.inject=function(a,o){o===void 0&&(o=Ec);var s=i.name+o.hash;a.hasNameForId(i.id,s)||a.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Ld(this,function(){throw _i(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ec),this.name+t.hash},e}(),dy=function(e){return e>="A"&&e<="Z"};function Cp(e){for(var t="",r=0;r<e.length;r++){var i=e[r];if(r===1&&i==="-"&&e[0]==="-")return e;dy(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var a0=function(e){return e==null||e===!1||e===""},o0=function(e){var t,r,i=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!a0(o)&&(Array.isArray(o)&&o.isCss||Tn(o)?i.push("".concat(Cp(a),":"),o,";"):Oi(o)?i.push.apply(i,zn(zn(["".concat(a," {")],o0(o),!1),["}"],!1)):i.push("".concat(Cp(a),": ").concat((t=a,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Ov||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return i};function vr(e,t,r,i){if(a0(e))return[];if(Bd(e))return[".".concat(e.styledComponentId)];if(Tn(e)){if(!Tn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var a=e(t);return vr(a,t,r,i)}var o;return e instanceof i0?r?(e.inject(r,i),[e.getName(i)]):[e]:Oi(e)?o0(e):Array.isArray(e)?Array.prototype.concat.apply(Xo,e.map(function(s){return vr(s,t,r,i)})):[e.toString()]}function s0(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Tn(r)&&!Bd(r))return!1}return!0}var uy=Jh(Ko),py=function(){function e(t,r,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&s0(t),this.componentId=r,this.baseHash=mn(uy,r),this.baseStyle=i,Co.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))a=Tr(a,this.staticRulesId);else{var o=ko(vr(this.rules,t,r,i)),s=Sc(mn(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,s)){var c=i(o,".".concat(s),void 0,this.componentId);r.insertRules(this.componentId,s,c)}a=Tr(a,s),this.staticRulesId=s}else{for(var l=mn(this.baseHash,i.hash),d="",p=0;p<this.rules.length;p++){var m=this.rules[p];if(typeof m=="string")d+=m;else if(m){var g=ko(vr(m,t,r,i));l=mn(l,g+p),d+=g}}if(d){var v=Sc(l>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,i(d,".".concat(v),void 0,this.componentId)),a=Tr(a,v)}}return a},e}(),_d=Ne.createContext(void 0);_d.Consumer;var Fs={};function my(e,t,r){var i=Bd(e),a=e,o=!Ms(e),s=t.attrs,c=s===void 0?Xo:s,l=t.componentId,d=l===void 0?function(k,S){var E=typeof k!="string"?"sc":vp(k);Fs[E]=(Fs[E]||0)+1;var P="".concat(E,"-").concat(Id(Ko+E+Fs[E]));return S?"".concat(S,"-").concat(P):P}(t.displayName,t.parentComponentId):l,p=t.displayName,m=p===void 0?function(k){return Ms(k)?"styled.".concat(k):"Styled(".concat(_v(k),")")}(e):p,g=t.displayName&&t.componentId?"".concat(vp(t.displayName),"-").concat(t.componentId):t.componentId||d,v=i&&a.attrs?a.attrs.concat(c).filter(Boolean):c,x=t.shouldForwardProp;if(i&&a.shouldForwardProp){var w=a.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;x=function(k,S){return w(k,S)&&b(k,S)}}else x=w}var y=new py(r,g,i?a.componentStyle:void 0);function f(k,S){return function(E,P,z){var L=E.attrs,_=E.componentStyle,A=E.defaultProps,N=E.foldedComponentIds,I=E.styledComponentId,F=E.target,Y=Ne.useContext(_d),J=zc(),fe=E.shouldForwardProp||J.shouldForwardProp,R=qh(P,Y,A)||Rn,T=function(ge,le,te){for(var ne,ve=Le(Le({},le),{className:void 0,theme:te}),at=0;at<ge.length;at+=1){var Xe=Tn(ne=ge[at])?ne(ve):ne;for(var Ee in Xe)ve[Ee]=Ee==="className"?Tr(ve[Ee],Xe[Ee]):Ee==="style"?Le(Le({},ve[Ee]),Xe[Ee]):Xe[Ee]}return le.className&&(ve.className=Tr(ve.className,le.className)),ve}(L,P,R),O=T.as||F,H={};for(var V in T)T[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&T.theme===R||(V==="forwardedAs"?H.as=T.forwardedAs:fe&&!fe(V,O)||(H[V]=T[V]));var he=function(ge,le){var te=zc(),ne=ge.generateAndInjectStyles(le,te.styleSheet,te.stylis);return ne}(_,T),X=Tr(N,I);return he&&(X+=" "+he),T.className&&(X+=" "+T.className),H[Ms(O)&&!Yh.has(O)?"class":"className"]=X,z&&(H.ref=z),j.createElement(O,H)}(h,k,S)}f.displayName=m;var h=Ne.forwardRef(f);return h.attrs=v,h.componentStyle=y,h.displayName=m,h.shouldForwardProp=x,h.foldedComponentIds=i?Tr(a.foldedComponentIds,a.styledComponentId):"",h.styledComponentId=g,h.target=i?a.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=i?function(S){for(var E=[],P=1;P<arguments.length;P++)E[P-1]=arguments[P];for(var z=0,L=E;z<L.length;z++)Cc(S,L[z],!0);return S}({},a.defaultProps,k):k}}),Ld(h,function(){return".".concat(h.styledComponentId)}),o&&e0(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Ep(e,t){for(var r=[e[0]],i=0,a=t.length;i<a;i+=1)r.push(t[i],e[i+1]);return r}var zp=function(e){return Object.assign(e,{isCss:!0})};function $d(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Tn(e)||Oi(e))return zp(vr(Ep(Xo,zn([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?vr(i):zp(vr(Ep(i,t)))}function Pc(e,t,r){if(r===void 0&&(r=Rn),!t)throw _i(1,t);var i=function(a){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,r,$d.apply(void 0,zn([a],o,!1)))};return i.attrs=function(a){return Pc(e,t,Le(Le({},r),{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Pc(e,t,Le(Le({},r),a))},i}var l0=function(e){return Pc(my,e)},u=l0;Yh.forEach(function(e){u[e]=l0(e)});var fy=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=s0(t),Co.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,i,a){var o=a(ko(vr(this.rules,r,i,a)),""),s=this.componentId+t;i.insertRules(s,s,o)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,i,a){t>2&&Co.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,r,i,a)},e}();function hy(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=$d.apply(void 0,zn([e],t,!1)),a="sc-global-".concat(Id(JSON.stringify(i))),o=new fy(i,a),s=function(l){var d=zc(),p=Ne.useContext(_d),m=Ne.useRef(d.styleSheet.allocateGSInstance(a)).current;return d.styleSheet.server&&c(m,l,d.styleSheet,p,d.stylis),Ne.useLayoutEffect(function(){if(!d.styleSheet.server)return c(m,l,d.styleSheet,p,d.stylis),function(){return o.removeStyles(m,d.styleSheet)}},[m,l,d.styleSheet,p,d.stylis]),null};function c(l,d,p,m,g){if(o.isStatic)o.renderStyles(l,Fv,p,g);else{var v=Le(Le({},d),{theme:qh(d,m,s.defaultProps)});o.renderStyles(l,v,p,g)}}return Ne.memo(s)}function Pt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=ko($d.apply(void 0,zn([e],t,!1))),a=Id(i);return new i0(a,i)}const gy=Pt`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`,xy=Pt`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`,vy=u.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${e=>{switch(e.type){case"error":return"#e74c3c";case"warning":return"#f39c12";case"success":return"#2ecc71";default:return"#3498db"}}};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: ${e=>e.fadeOut?xy:gy} 0.3s ease-in-out;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    right: 10px;
    left: 10px;
    max-width: none;
  }
`,yy=u.span`
  font-size: 1.2rem;
  flex-shrink: 0;
`,wy=u.span`
  flex: 1;
`,by=u.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;function jy({message:e,type:t="success",onClose:r,duration:i=3e3}){j.useEffect(()=>{if(i>0){const o=setTimeout(()=>{r()},i);return()=>clearTimeout(o)}},[i,r]);const a=()=>{switch(t){case"error":return"❌";case"warning":return"⚠️";case"success":return"✅";default:return"ℹ️"}};return n.jsxs(vy,{type:t,fadeOut:!1,children:[n.jsx(yy,{children:a()}),n.jsx(wy,{children:e}),n.jsx(by,{onClick:r,children:"×"})]})}const ky=j.createContext(),Sy=({children:e})=>{const[t,r]=j.useState([]),i=j.useCallback((p,m="success",g=3e3)=>{const v=Date.now()+Math.random(),x={id:v,message:p,type:m,duration:g};return r(w=>[...w,x]),g>0&&setTimeout(()=>{a(v)},g),v},[]),a=j.useCallback(p=>{r(m=>m.filter(g=>g.id!==p))},[]),o=j.useCallback((p,m)=>i(p,"success",m),[i]),s=j.useCallback((p,m)=>i(p,"error",m),[i]),c=j.useCallback((p,m)=>i(p,"warning",m),[i]),l=j.useCallback((p,m)=>i(p,"info",m),[i]),d={addToast:i,removeToast:a,showSuccess:o,showError:s,showWarning:c,showInfo:l};return n.jsxs(ky.Provider,{value:d,children:[e,t.map(p=>n.jsx(jy,{message:p.message,type:p.type,onClose:()=>a(p.id),duration:p.duration},p.id))]})};var c0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Pp=Ne.createContext&&Ne.createContext(c0),Cy=["attr","size","title"];function Ey(e,t){if(e==null)return{};var r=zy(e,t),i,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function zy(e,t){if(e==null)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;r[i]=e[i]}return r}function Eo(){return Eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Eo.apply(this,arguments)}function Np(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,i)}return r}function zo(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Np(Object(r),!0).forEach(function(i){Py(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Np(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function Py(e,t,r){return t=Ny(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ny(e){var t=Dy(e,"string");return typeof t=="symbol"?t:t+""}function Dy(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function d0(e){return e&&e.map((t,r)=>Ne.createElement(t.tag,zo({key:r},t.attr),d0(t.child)))}function Re(e){return t=>Ne.createElement(Ry,Eo({attr:zo({},e.attr)},t),d0(e.child))}function Ry(e){var t=r=>{var{attr:i,size:a,title:o}=e,s=Ey(e,Cy),c=a||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),Ne.createElement("svg",Eo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,s,{className:l,style:zo(zo({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&Ne.createElement("title",null,o),e.children)};return Pp!==void 0?Ne.createElement(Pp.Consumer,null,r=>t(r)):t(c0)}function Ty(e){return Re({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function Ay(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Oy(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}function My(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function Fy(e){return Re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function u0(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function Iy(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function By(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}function Ly(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function Dp(e){return Re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(e)}function _y(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(e)}function ie(e){return Re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)}function Rp(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"},child:[]}]})(e)}function Tp(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function Nc(e){return Re({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function $y(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}function Dc(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function Is(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}const _n=Pt`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,Zo=Pt`
  from { transform: translateX(20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,Hy=Pt`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Uy=u.header`
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.8));
  backdrop-filter: blur(10px);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(20, 20, 20, 0.9));
  }
`,Vy=u.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  animation: ${_n} 0.5s ease-out;
`,Wy=u.div`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(45deg, #ff9800, #ff5722);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 10px rgba(255, 152, 0, 0.3);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #ff9800, #ff5722);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`,Gy=u.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
  
  & > li {
    animation: ${_n} 0.5s ease-out;
    animation-fill-mode: both;
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }
  }
`,qr=u.li`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #ff9800, #ff5722);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover:after {
    width: 100%;
  }

  &:hover > ul {
    display: block;
    animation: ${_n} 0.3s ease-out;
  }
  
  a {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #ff9800;
    }
  }
`,ca=u.ul`
  display: ${e=>e.$isOpen?"block":"none"};
  position: absolute;
  background: rgba(20, 20, 20, 0.95);
  top: 100%;
  left: 0;
  padding: 0.8rem 1.2rem;
  list-style: none;
  border-radius: 0.5rem;
  min-width: 200px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transform-origin: top center;
  z-index: 100;

  li {
    padding: 0.7rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
    animation: ${Zo} 0.3s ease-out;
    animation-fill-mode: both;

    &:nth-child(1) { animation-delay: 0.05s; }
    &:nth-child(2) { animation-delay: 0.1s; }
    &:nth-child(3) { animation-delay: 0.15s; }

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: #ff9800;
      transform: translateX(5px);
    }

    a {
      color: white;
      text-decoration: none;
      display: block;
      transition: all 0.3s ease;

      &:hover {
        color: #ff9800;
      }
    }
  }
`,qy=u.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  animation: ${_n} 0.5s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
`,Yy=u.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    color: #ff9800;
  }
  
  &:active {
    transform: scale(0.95);
  }

  .badge {
    position: absolute;
    top: -8px;
    right: -10px;
    background: linear-gradient(45deg, #ff5722, #ff9800);
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
    border-radius: 50%;
    padding: 0.2rem 0.4rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    animation: ${Hy} 2s infinite;
  }
`,Qy=u.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #ff9800;
  }

  &:active {
    transform: scale(0.95);
  }

  .dropdown {
    display: ${e=>e.$isOpen?"block":"none"};
    position: absolute;
    right: 0;
    top: 120%;
    background: rgba(20, 20, 20, 0.95);
    border-radius: 0.5rem;
    padding: 0.8rem 1.2rem;
    list-style: none;
    min-width: 200px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 100;
    animation: ${_n} 0.3s ease-out;

    li {
      padding: 0.7rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      animation: ${Zo} 0.3s ease-out;
      animation-fill-mode: both;

      &:nth-child(1) { animation-delay: 0.05s; }
      &:nth-child(2) { animation-delay: 0.1s; }
      &:nth-child(3) { animation-delay: 0.15s; }
      &:nth-child(4) { animation-delay: 0.2s; }

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        color: #ff9800;
        transform: translateX(5px);
      }

      a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        transition: all 0.3s ease;

        &:hover {
          color: #ff9800;
        }
      }
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding-bottom: 0.8rem;
      margin-bottom: 0.8rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #ff9800;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .user-info {
        display: flex;
        flex-direction: column;

        .name {
          font-weight: bold;
          font-size: 0.9rem;
        }

        .email {
          font-size: 0.75rem;
          opacity: 0.7;
        }
      }
    }
  }
`,Jy=u.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff9800;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`,Ky=Pt`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`,Xy=u.div`
  display: ${e=>e.$isOpen?"flex":"none"};
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.98), rgba(0, 0, 0, 0.98));
  height: 100vh;
  width: 280px;
  padding: 2rem;
  z-index: 1500;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  animation: ${Ky} 0.3s ease-out;
  overflow-y: auto;

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #ff9800;
      transform: scale(1.1);
    }
  }

  .mobile-user-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1rem;

    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #ff9800;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .user-info {
      display: flex;
      flex-direction: column;

      .name {
        font-weight: bold;
        font-size: 1rem;
      }

      .email {
        font-size: 0.8rem;
        opacity: 0.7;
      }
    }
  }

  a {
    color: white;
    text-decoration: none;
    padding: 0.8rem 0;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    animation: ${Zo} 0.3s ease-out;
    animation-fill-mode: both;

    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.2s; }
    &:nth-child(4) { animation-delay: 0.25s; }
    &:nth-child(5) { animation-delay: 0.3s; }
    &:nth-child(6) { animation-delay: 0.35s; }
    &:nth-child(7) { animation-delay: 0.4s; }
    &:nth-child(8) { animation-delay: 0.45s; }
    &:nth-child(9) { animation-delay: 0.5s; }
    &:nth-child(10) { animation-delay: 0.55s; }
    &:nth-child(11) { animation-delay: 0.6s; }

    &:hover {
      color: #ff9800;
      transform: translateX(5px);
    }
  }

  .mobile-cart {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 1rem;
    padding: 0.8rem 0;
    position: relative;

    .badge {
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(45deg, #ff5722, #ff9800);
      color: white;
      font-size: 0.7rem;
      font-weight: bold;
      border-radius: 50%;
      padding: 0.2rem 0.4rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  }
`,Zy=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: ${_n} 0.3s ease-out;
  padding: 1rem;
  box-sizing: border-box;
`,e2=u.div`
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  width: 100%;
  max-width: 420px;
  position: relative;
  animation: ${Zo} 0.3s ease-out;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 480px) {
    padding: 2rem;
    margin: 0.5rem;
  }
`,t2=u.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #ff9800;
  }
`,da=u.div`
  margin-bottom: 1.5rem;
`,ua=u.label`
  display: block;
  margin-bottom: 0.7rem;
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;
`,pa=u.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #ff9800;
    box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.1);
    transform: translateY(-1px);
  }
  
  &::placeholder {
    color: #999;
  }
`,r2=u.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, #ff9800, #ff5722);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 152, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,n2=u.div`
  color: #ff5722;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,i2=u.div`
  text-align: center;
  margin-top: 1rem;
  color: #666;
  
  span {
    color: #ff9800;
    cursor: pointer;
    text-decoration: underline;
    
    &:hover {
      color: #ff5722;
    }
  }
`,a2=()=>{const e=gt(),{user:t,login:r,signup:i,logout:a,loading:o,error:s,setError:c}=Kt(),[l,d]=j.useState(!1),[p,m]=j.useState(null),[g,v]=j.useState(!1),[x,w]=j.useState(!1),[b,y]=j.useState(!1),[f,h]=j.useState(!0),[k,S]=j.useState({name:"",email:"",password:"",confirmPassword:""}),E=!!t,P=JSON.parse(localStorage.getItem("bookingCart"))||[],z=P.length;j.useEffect(()=>{const O=H=>{H.target.closest(".user-menu")||v(!1),H.target.closest(".cart-menu")||w(!1)};return document.addEventListener("click",O),()=>document.removeEventListener("click",O)},[]);const L=async()=>{try{await a(),v(!1),d(!1),e("/home")}catch(O){console.error("Logout failed:",O)}},_=()=>{e("/profile/edit")},A=()=>{window.confirm("Are you sure you want to delete your account? This action cannot be undone.")&&(localStorage.removeItem("user"),e("/signup"))},N=()=>{e("/profile/upload-image")},I=()=>{y(!0),h(!0),c(null),S({name:"",email:"",password:"",confirmPassword:""})},F=()=>{y(!0),h(!1),c(null),S({name:"",email:"",password:"",confirmPassword:""})},Y=O=>{S({...k,[O.target.name]:O.target.value})},J=async O=>{O.preventDefault(),c(null);try{f?await r(k.email,k.password):await i(k.name,k.email,k.password,k.confirmPassword),y(!1),S({name:"",email:"",password:"",confirmPassword:""})}catch{}},fe=()=>{y(!1),c(null),S({name:"",email:"",password:"",confirmPassword:""})},R=O=>{m(p===O?null:O)},T=()=>d(!1);return n.jsxs(Uy,{children:[n.jsxs(Vy,{children:[n.jsx(Wy,{onClick:()=>e("/home"),children:"🏨 Luxury Hotel"}),n.jsxs(Gy,{children:[n.jsx(qr,{children:n.jsx($,{to:"/home",children:"Home"})}),n.jsxs(qr,{onMouseEnter:()=>R("amenities"),onMouseLeave:()=>m(null),"aria-haspopup":"true","aria-expanded":p==="amenities",children:["Amenities",n.jsxs(ca,{$isOpen:p==="amenities",children:[n.jsx("li",{children:n.jsxs($,{to:"/rooms",children:[n.jsx(ie,{size:14,style:{opacity:.7}})," Rooms & Suites"]})}),n.jsx("li",{children:n.jsxs($,{to:"/spa",children:[n.jsx(ie,{size:14,style:{opacity:.7}})," Spa & Wellness"]})}),n.jsx("li",{children:n.jsxs($,{to:"/restaurant",children:[n.jsx(ie,{size:14,style:{opacity:.7}})," Restaurant"]})})]})]}),n.jsxs(qr,{onMouseEnter:()=>R("services"),onMouseLeave:()=>m(null),"aria-haspopup":"true","aria-expanded":p==="services",children:["Services",n.jsxs(ca,{$isOpen:p==="services",children:[n.jsx("li",{children:n.jsxs($,{to:"/events",children:[n.jsx(ie,{size:14,style:{opacity:.7}})," Events"]})}),n.jsx("li",{children:n.jsxs($,{to:"/entertainment",children:[n.jsx(ie,{size:14,style:{opacity:.7}})," Entertainment"]})}),n.jsx("li",{children:n.jsxs($,{to:"/gallery",children:[n.jsx(ie,{size:14,style:{opacity:.7}})," Gallery"]})}),n.jsx("li",{children:n.jsxs($,{to:"/books",children:[n.jsx(ie,{size:14,style:{opacity:.7}})," Library"]})})]})]}),n.jsxs(qr,{onMouseEnter:()=>R("support"),onMouseLeave:()=>m(null),"aria-haspopup":"true","aria-expanded":p==="support",children:["Support",n.jsxs(ca,{$isOpen:p==="support",children:[n.jsx("li",{children:n.jsxs($,{to:"/about",children:[n.jsx(ie,{size:14,style:{opacity:.7}})," About"]})}),n.jsx("li",{children:n.jsxs($,{to:"/contact",children:[n.jsx(ie,{size:14,style:{opacity:.7}})," Contact"]})}),n.jsx("li",{children:n.jsxs($,{to:"/faqs",children:[n.jsx(ie,{size:14,style:{opacity:.7}})," FAQs"]})})]})]}),n.jsx(qr,{children:n.jsx($,{to:"/shop",children:"Shop"})}),E&&(t==null?void 0:t.role)==="admin"&&n.jsx(qr,{children:n.jsx($,{to:"/dashboard",children:"Admin Dashboard"})})]}),n.jsxs(qy,{children:[n.jsxs(Yy,{className:"cart-menu",onClick:()=>w(!x),children:[n.jsx(ie,{size:20}),z>0&&n.jsx("div",{className:"badge",children:z}),x&&n.jsxs(ca,{isOpen:!0,style:{right:0,left:"auto",minWidth:"250px"},children:[n.jsxs("li",{style:{fontWeight:"bold",borderBottom:"2px solid rgba(255, 152, 0, 0.3)",paddingBottom:"10px",marginBottom:"10px"},children:["Your Cart (",z," items)"]}),z>0?n.jsxs(n.Fragment,{children:[P.slice(0,2).map((O,H)=>n.jsxs("li",{style:{display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{children:O.name||"Item"}),n.jsxs("span",{style:{color:"#ff9800"},children:["₹",O.price||"0"]})]},H)),z>2&&n.jsxs("li",{style:{textAlign:"center",fontStyle:"italic",opacity:.7},children:["+",z-2," more items"]}),n.jsx("li",{style:{marginTop:"10px",textAlign:"center"},children:n.jsx($,{to:"/cart",style:{background:"linear-gradient(45deg, #ff5722, #ff9800)",padding:"8px 15px",borderRadius:"20px",fontWeight:"bold"},children:"View Cart"})})]}):n.jsx("li",{style:{textAlign:"center",padding:"10px 0"},children:"Your cart is empty"})]})]}),n.jsxs(Qy,{className:"user-menu",$isOpen:g,onClick:()=>v(!g),children:[n.jsx(Is,{size:20}),n.jsx("div",{className:"dropdown",children:E?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"user-profile",children:[n.jsx("div",{className:"avatar",children:n.jsx("img",{src:t.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:t.name})}),n.jsxs("div",{className:"user-info",children:[n.jsx("span",{className:"name",children:t.name}),n.jsx("span",{className:"email",children:t.email})]})]}),n.jsxs("li",{onClick:_,children:[n.jsx(Dp,{size:14})," Edit Profile"]}),n.jsxs("li",{onClick:N,children:[n.jsx(Dc,{size:14})," Upload Image"]}),n.jsxs("li",{onClick:A,children:[n.jsx($y,{size:14})," Delete Account"]}),n.jsxs("li",{onClick:()=>L(),children:[n.jsx(Tp,{size:14})," Logout"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("li",{onClick:I,children:[n.jsx(Rp,{size:14})," Login"]}),n.jsxs("li",{onClick:F,children:[n.jsx(Is,{size:14})," Signup"]})]})})]}),n.jsx(Jy,{onClick:()=>d(!l),children:l?n.jsx(Nc,{}):n.jsx(Iy,{})})]})]}),n.jsxs(Xy,{$isOpen:l,children:[n.jsx("div",{className:"close-button",onClick:T,children:n.jsx(Nc,{})}),E&&n.jsxs("div",{className:"mobile-user-section",children:[n.jsx("div",{className:"avatar",children:n.jsx("img",{src:t.avatar||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:t.name})}),n.jsxs("div",{className:"user-info",children:[n.jsx("span",{className:"name",children:t.name}),n.jsx("span",{className:"email",children:t.email})]})]}),n.jsxs($,{to:"/home",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Home"]}),n.jsxs($,{to:"/rooms",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Rooms & Suites"]}),n.jsxs($,{to:"/spa",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Spa & Wellness"]}),n.jsxs($,{to:"/restaurant",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Restaurant"]}),n.jsxs($,{to:"/events",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Events"]}),n.jsxs($,{to:"/entertainment",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Entertainment"]}),n.jsxs($,{to:"/gallery",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Gallery"]}),n.jsxs($,{to:"/books",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Library"]}),n.jsxs($,{to:"/shop",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Shop"]}),E&&(t==null?void 0:t.role)==="admin"&&n.jsxs($,{to:"/dashboard",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Admin Dashboard"]}),n.jsxs($,{to:"/about",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," About"]}),n.jsxs($,{to:"/contact",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," Contact"]}),n.jsxs($,{to:"/faqs",onClick:T,children:[n.jsx(ie,{size:16,style:{opacity:.7}})," FAQs"]}),E?n.jsxs(n.Fragment,{children:[n.jsxs($,{to:"/profile/edit",onClick:T,children:[n.jsx(Dp,{size:16})," Edit Profile"]}),n.jsxs($,{to:"/profile/upload-image",onClick:T,children:[n.jsx(Dc,{size:16})," Upload Image"]}),n.jsxs("div",{onClick:()=>L(),style:{color:"white",padding:"0.8rem 0",fontSize:"1.1rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.8rem"},children:[n.jsx(Tp,{size:16})," Logout"]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{onClick:()=>{I(),T()},style:{color:"white",padding:"0.8rem 0",fontSize:"1.1rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.8rem"},children:[n.jsx(Rp,{size:16})," Login"]}),n.jsxs("div",{onClick:()=>{F(),T()},style:{color:"white",padding:"0.8rem 0",fontSize:"1.1rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.8rem"},children:[n.jsx(Is,{size:16})," Signup"]})]}),n.jsxs("div",{className:"mobile-cart",children:[n.jsxs($,{to:"/cart",onClick:T,style:{display:"flex",alignItems:"center",gap:"0.8rem"},children:[n.jsx(ie,{size:16})," View Cart"]}),z>0&&n.jsx("div",{className:"badge",children:z})]})]}),b&&n.jsx(Zy,{onClick:fe,children:n.jsxs(e2,{onClick:O=>O.stopPropagation(),children:[n.jsx(t2,{onClick:fe,children:"×"}),n.jsx("h2",{style:{textAlign:"center",marginBottom:"1.5rem",color:"#333"},children:f?"Login":"Sign Up"}),n.jsxs("form",{onSubmit:J,children:[!f&&n.jsxs(da,{children:[n.jsx(ua,{htmlFor:"name",children:"Full Name"}),n.jsx(pa,{type:"text",id:"name",name:"name",value:k.name,onChange:Y,required:!f,placeholder:"Enter your full name"})]}),n.jsxs(da,{children:[n.jsx(ua,{htmlFor:"email",children:"Email"}),n.jsx(pa,{type:"email",id:"email",name:"email",value:k.email,onChange:Y,required:!0,placeholder:"Enter your email"})]}),n.jsxs(da,{children:[n.jsx(ua,{htmlFor:"password",children:"Password"}),n.jsx(pa,{type:"password",id:"password",name:"password",value:k.password,onChange:Y,required:!0,placeholder:"Enter your password"})]}),!f&&n.jsxs(da,{children:[n.jsx(ua,{htmlFor:"confirmPassword",children:"Confirm Password"}),n.jsx(pa,{type:"password",id:"confirmPassword",name:"confirmPassword",value:k.confirmPassword,onChange:Y,required:!f,placeholder:"Confirm your password"})]}),s&&n.jsx(n2,{children:s}),n.jsx(r2,{type:"submit",disabled:o,children:o?"Please wait...":f?"Login":"Sign Up"})]}),n.jsx(i2,{children:f?n.jsxs(n.Fragment,{children:["Don't have an account? ",n.jsx("span",{onClick:()=>h(!1),children:"Sign up"})]}):n.jsxs(n.Fragment,{children:["Already have an account? ",n.jsx("span",{onClick:()=>h(!0),children:"Login"})]})})]})})]})},o2=u.footer`
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #ffffff;
  padding: 5rem 2rem 2rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), #FF9A3C, var(--primary-color));
    z-index: 5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 50%);
    pointer-events: none;
  }
`,s2=u.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`,l2=u.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 46px;
  }
  
  .shape-fill {
    fill: var(--background-light);
  }
`,c2=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`,d2=u.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--primary-color);
    border-radius: 2px;
  }
  
  span {
    color: var(--primary-color);
  }
`,u2=u.div`
  display: flex;
  gap: 1.2rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary-color);
      transform: translateY(100%);
      transition: transform 0.3s ease;
      z-index: -1;
    }
    
    &:hover {
      transform: translateY(-5px);
      color: #ffffff;
      
      &::before {
        transform: translateY(0);
      }
    }
    
    i {
      position: relative;
      z-index: 2;
    }
  }
`,p2=u.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`,Ap=u.div`
  flex: 1;
  margin-right: 2.5rem;
  
  h3 {
    color: #ffffff;
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: 1.2rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 30px;
      height: 2px;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 1rem;
      transform: translateX(0);
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateX(5px);
      }
      
      a, .footer-link {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 0.95rem;
        display: inline-block;
        position: relative;
        padding-left: 0;
        cursor: pointer;
        
        &::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        &:hover {
          color: var(--primary-color);
          padding-left: 20px;
          
          &::before {
            opacity: 1;
            left: 0;
          }
        }
      }
    }
  }
`,m2=u.div`
  flex: 1.5;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  
  h2 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
    color: #ffffff;
  }
  
  p {
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.8);
  }
`,f2=u.div`
  display: flex;
  position: relative;
  
  input {
    flex: 1;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 50px;
    font-size: 0.95rem;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      background: #ffffff;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    }
    
    &::placeholder {
      color: #888;
    }
  }
  
  button {
    position: absolute;
    right: 5px;
    top: 5px;
    background: linear-gradient(135deg, var(--primary-color), #FF9A3C);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(237, 109, 5, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(237, 109, 5, 0.4);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`,h2=u.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: var(--primary-color);
  }
`,g2=u.div`
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`,Op=u.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(237, 109, 5, 0.1) 0%, rgba(237, 109, 5, 0) 70%);
  z-index: 1;
  pointer-events: none;
  
  &.shape1 {
    top: -100px;
    right: -50px;
    width: 400px;
    height: 400px;
    animation: float 15s infinite alternate ease-in-out;
  }
  
  &.shape2 {
    bottom: 50px;
    left: -150px;
    width: 350px;
    height: 350px;
    animation: float 20s infinite alternate-reverse ease-in-out;
  }
  
  @keyframes float {
    0% {
      transform: translate(0, 0) scale(1);
    }
    100% {
      transform: translate(50px, 50px) scale(1.1);
    }
  }
`;function x2(){const e=new Date().getFullYear();return n.jsxs(o2,{children:[n.jsx(l2,{children:n.jsx("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:n.jsx("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",className:"shape-fill"})})}),n.jsx(Op,{className:"shape1"}),n.jsx(Op,{className:"shape2"}),n.jsxs(s2,{children:[n.jsxs(c2,{children:[n.jsxs(d2,{children:["Stay",n.jsx("span",{children:"Easy"})]}),n.jsxs(u2,{children:[n.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:n.jsx(Ty,{})}),n.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:n.jsx(My,{})}),n.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:n.jsx(Ay,{})}),n.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:n.jsx(Fy,{})}),n.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:n.jsx(Oy,{})})]})]}),n.jsxs(p2,{children:[n.jsxs(Ap,{children:[n.jsx("h3",{children:"Explore"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx($,{to:"/home",className:"footer-link",children:"Home"})}),n.jsx("li",{children:n.jsx($,{to:"/rooms",className:"footer-link",children:"Rooms & Suites"})}),n.jsx("li",{children:n.jsx($,{to:"/bookings",className:"footer-link",children:"Bookings"})}),n.jsx("li",{children:n.jsx($,{to:"/dining",className:"footer-link",children:"Restaurants"})}),n.jsx("li",{children:n.jsx($,{to:"/spa",className:"footer-link",children:"Spa & Wellness"})})]})]}),n.jsxs(Ap,{children:[n.jsx("h3",{children:"Information"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx($,{to:"/about",className:"footer-link",children:"About Us"})}),n.jsx("li",{children:n.jsx($,{to:"/contact",className:"footer-link",children:"Contact Us"})}),n.jsx("li",{children:n.jsx($,{to:"/terms",className:"footer-link",children:"Terms & Conditions"})}),n.jsx("li",{children:n.jsx($,{to:"/privacy",className:"footer-link",children:"Privacy Policy"})}),n.jsx("li",{children:n.jsx($,{to:"/faq",className:"footer-link",children:"FAQ"})})]})]}),n.jsxs(m2,{children:[n.jsx("h2",{children:"Get exclusive offers and updates for your next dream vacation"}),n.jsxs(f2,{children:[n.jsx("input",{type:"email",placeholder:"Your email address","aria-label":"Email address"}),n.jsx("button",{type:"submit",onClick:t=>{t.preventDefault(),alert("Thank you for subscribing to our newsletter!")},children:"Subscribe"})]})]})]})]}),n.jsxs(h2,{children:[n.jsx(g2,{children:"StayEasy Hotels & Resorts, Luxury Avenue 123, Paradise City"}),n.jsxs("span",{children:["© ",e," StayEasy | All rights reserved."]})]})]})}const v2=u.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,y2=u.main`
  flex: 1;
  padding-top: 80px; /* Add padding to ensure content starts below the fixed navbar */
  padding-bottom: 2rem; /* Add padding to ensure space between content and footer */
`;function w2({children:e}){return n.jsxs(v2,{children:[n.jsx(a2,{}),n.jsx(y2,{children:e}),n.jsx(x2,{})]})}const b2=u.button`
  padding: ${e=>e.size==="small"?"var(--space-sm) var(--space-md)":e.size==="large"?"var(--space-lg) var(--space-2xl)":e.size==="xl"?"var(--space-xl) var(--space-3xl)":"var(--space-md) var(--space-xl)"};
  background-color: ${e=>e.variant==="outline"?"transparent":e.variant==="secondary"?"#FF9A3C":"#ED6D05"};
  color: ${e=>e.variant==="outline"?"#ED6D05":"#fff"};
  border: ${e=>e.variant==="outline"?"2px solid #ED6D05":"none"};
  border-radius: 8px;
  font-size: ${e=>e.size==="small"?"0.875rem":e.size==="large"?"1.125rem":e.size==="xl"?"1.25rem":"1rem"};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  min-height: ${e=>e.size==="small"?"36px":e.size==="large"?"56px":e.size==="xl"?"64px":"44px"};
  line-height: 1.2;

  &:hover {
    background-color: ${e=>e.variant==="outline"?"rgba(237, 109, 5, 0.1)":e.variant==="secondary"?"#FFA959":"#D66104"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(237, 109, 5, 0.25);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(237, 109, 5, 0.15);
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.2);
  }

  /* Full width variant */
  ${e=>e.fullWidth&&`
    width: 100%;
    justify-content: center;
  `}

  /* Icon spacing */
  svg, .icon {
    width: 1.2em;
    height: 1.2em;
    flex-shrink: 0;
  }

  /* Loading state */
  &.loading {
    position: relative;
    color: transparent;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: ${e=>e.size==="large"?"1rem":e.size==="xl"?"1.125rem":e.size==="small"?"0.8125rem":"0.9375rem"};

    padding: ${e=>e.size==="small"?"var(--space-xs) var(--space-sm)":e.size==="large"?"var(--space-md) var(--space-xl)":e.size==="xl"?"var(--space-lg) var(--space-2xl)":"var(--space-sm) var(--space-lg)"};
  }
`;function B({children:e,variant:t="primary",size:r="medium",type:i="button",disabled:a=!1,onClick:o,...s}){return n.jsx(b2,{variant:t,size:r,type:i,disabled:a,onClick:o,...s,children:e})}const j2=u.section`
  min-height: 85vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: var(--space-4xl) var(--space-md);
  position: relative;

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: var(--space-3xl) var(--space-md);
  }
`,k2=u.h1`
  font-size: 3.5rem;
  margin-bottom: var(--space-lg);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.1;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: var(--space-md);
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,S2=u.p`
  font-size: 1.375rem;
  margin-bottom: var(--space-2xl);
  max-width: 700px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: var(--space-xl);
  }
`,C2=u.div`
  display: flex;
  gap: var(--space-lg);
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
    width: 100%;
    max-width: 300px;
  }
`,ma=u.section`
  padding: var(--space-4xl) var(--space-md);
  max-width: var(--container-xl);
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-md);
  }
`,fa=u.h2`
  text-align: center;
  margin-bottom: var(--space-2xl);
  color: #333;
  position: relative;
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
    margin-bottom: var(--space-xl);
  }

  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #ED6D05;
    margin: var(--space-md) auto 0;
    border-radius: 2px;
  }
`,ha=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,ot=u.div`
  background-color: white;
  padding: var(--space-2xl);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(237, 109, 5, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(237, 109, 5, 0.15);
  }

  @media (max-width: 768px) {
    padding: var(--space-xl);
  }

  h3 {
    margin: var(--space-lg) 0 var(--space-md) 0;
    color: #333;
    font-size: 1.25rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }

  .icon {
    font-size: 3rem;
    color: #16a085;
    margin-bottom: var(--space-md);
    display: block;
  }
`,Bs=u.div`
  background-color: white;
  padding: var(--space-2xl);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(237, 109, 5, 0.05);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(237, 109, 5, 0.12);
  }

  @media (max-width: 768px) {
    padding: var(--space-xl);
  }

  &:before {
    content: '"';
    font-size: 4rem;
    color: #ED6D05;
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    font-family: serif;
    opacity: 0.3;
  }

  p {
    color: #666;
    line-height: 1.7;
    font-style: italic;
    margin: var(--space-lg) 0 var(--space-xl) 0;
    font-size: 1.1rem;
    position: relative;
    z-index: 1;
  }

  .name {
    font-weight: 600;
    color: #333;
    font-size: 1.125rem;
    margin-bottom: var(--space-sm);
  }

  .rating {
    color: #FFD700;
    font-size: 1.25rem;
    letter-spacing: 2px;
  }
`;function E2(){const e=gt(),t=()=>{e("/booking")},r=()=>{e("/rooms")};return n.jsxs(n.Fragment,{children:[n.jsxs(j2,{children:[n.jsx(k2,{"data-aos":"fade-up",children:"Welcome to Luxury Hotel Experience"}),n.jsx(S2,{"data-aos":"fade-up","data-aos-delay":"200",children:"Book your stay and enjoy Luxury redefined at the most affordable rates."}),n.jsxs(C2,{"data-aos":"fade-up","data-aos-delay":"400",children:[n.jsx(B,{size:"large",onClick:t,children:"Book a Room"}),n.jsx(B,{size:"large",variant:"outline",onClick:r,children:"Explore Rooms"})]})]}),n.jsxs(ma,{children:[n.jsx(fa,{"data-aos":"fade-up",children:"Why Choose Us"}),n.jsxs(ha,{children:[n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"100",children:[n.jsx("div",{className:"icon",children:"🌟"}),n.jsx("h3",{children:"Luxury Rooms"}),n.jsx("p",{children:"Experience the best in comfort with our premium rooms designed for relaxation and luxury."})]}),n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"200",children:[n.jsx("div",{className:"icon",children:"🍽️"}),n.jsx("h3",{children:"Fine Dining"}),n.jsx("p",{children:"Enjoy exquisite cuisine prepared by our world-class chefs using the finest ingredients."})]}),n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"300",children:[n.jsx("div",{className:"icon",children:"🏊"}),n.jsx("h3",{children:"Wellness Facilities"}),n.jsx("p",{children:"Rejuvenate your body and mind with our spa, pool, and fitness center amenities."})]})]})]}),n.jsxs(ma,{children:[n.jsx(fa,{"data-aos":"fade-up",children:"Guest Testimonials"}),n.jsxs(ha,{children:[n.jsxs(Bs,{"data-aos":"fade-up","data-aos-delay":"100",children:[n.jsx("p",{children:'"An unforgettable experience! The luxury and attention to detail were exceptional."'}),n.jsx("div",{className:"name",children:"Sarah Johnson"}),n.jsx("div",{className:"rating",children:"★★★★★"})]}),n.jsxs(Bs,{"data-aos":"fade-up","data-aos-delay":"200",children:[n.jsx("p",{children:'"The fine dining was outstanding, and the wellness facilities helped me relax completely."'}),n.jsx("div",{className:"name",children:"Michael Chen"}),n.jsx("div",{className:"rating",children:"★★★★★"})]}),n.jsxs(Bs,{"data-aos":"fade-up","data-aos-delay":"300",children:[n.jsx("p",{children:'"Perfect location and impeccable service. I will definitely return."'}),n.jsx("div",{className:"name",children:"Emily Davis"}),n.jsx("div",{className:"rating",children:"★★★★★"})]})]})]}),n.jsxs(ma,{children:[n.jsx(fa,{"data-aos":"fade-up",children:"Explore Our Amenities"}),n.jsxs(ha,{children:[n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"100",children:[n.jsx("div",{className:"icon",children:"🛎️"}),n.jsx("h3",{children:"24/7 Concierge"}),n.jsx("p",{children:"Our dedicated concierge team is available around the clock to assist with any needs."})]}),n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"200",children:[n.jsx("div",{className:"icon",children:"🎉"}),n.jsx("h3",{children:"Event Hosting"}),n.jsx("p",{children:"Host your special events in our elegant venues, from weddings to corporate gatherings."})]}),n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"300",children:[n.jsx("div",{className:"icon",children:"📍"}),n.jsx("h3",{children:"Prime Location"}),n.jsx("p",{children:"Located in the heart of the city, close to attractions, shopping, and transportation."})]})]})]}),n.jsxs(ma,{children:[n.jsx(fa,{"data-aos":"fade-up",children:"Discover Our Services"}),n.jsxs(ha,{children:[n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"100",style:{cursor:"pointer"},onClick:()=>window.location.href="/dining",children:[n.jsx("div",{className:"icon",children:"🍽️"}),n.jsx("h3",{children:"Fine Dining"}),n.jsx("p",{children:"Indulge in exquisite cuisine crafted by our world-class chefs in elegant settings."})]}),n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"200",style:{cursor:"pointer"},onClick:()=>window.location.href="/spa",children:[n.jsx("div",{className:"icon",children:"💆"}),n.jsx("h3",{children:"Luxury Spa"}),n.jsx("p",{children:"Rejuvenate your senses with our premium spa treatments and wellness therapies."})]}),n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"300",style:{cursor:"pointer"},onClick:()=>window.location.href="/events",children:[n.jsx("div",{className:"icon",children:"🎊"}),n.jsx("h3",{children:"Event Planning"}),n.jsx("p",{children:"Let us handle every detail for your perfect wedding, conference, or special occasion."})]}),n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"400",style:{cursor:"pointer"},onClick:()=>window.location.href="/entertainment",children:[n.jsx("div",{className:"icon",children:"🎭"}),n.jsx("h3",{children:"Entertainment"}),n.jsx("p",{children:"Enjoy a variety of entertainment options from live music to recreational activities."})]}),n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"500",style:{cursor:"pointer"},onClick:()=>window.location.href="/gallery",children:[n.jsx("div",{className:"icon",children:"📸"}),n.jsx("h3",{children:"Photo Gallery"}),n.jsx("p",{children:"Explore our stunning hotel spaces and guest experiences through our curated gallery."})]}),n.jsxs(ot,{"data-aos":"fade-up","data-aos-delay":"600",style:{cursor:"pointer"},onClick:()=>window.location.href="/travelservices",children:[n.jsx("div",{className:"icon",children:"🚗"}),n.jsx("h3",{children:"Travel Services"}),n.jsx("p",{children:"Comprehensive travel assistance including airport transfers and local tours."})]})]})]})]})}const p0=j.createContext(),Hd=()=>{const e=j.useContext(p0);if(!e)throw new Error("useCart must be used within a CartProvider");return e},z2=({children:e})=>{const[t,r]=j.useState([]);j.useEffect(()=>{const w=localStorage.getItem("bookingCart");w&&r(JSON.parse(w))},[]),j.useEffect(()=>{localStorage.setItem("bookingCart",JSON.stringify(t))},[t]);const i=w=>{r(b=>b.find(f=>f.id===w.id)?b:[...b,{...w,cartId:Date.now()}])},a=w=>{r(b=>b.filter(y=>y.cartId!==w))},o=()=>{r([])},s=()=>t.reduce((w,b)=>w+b.price,0),c=()=>t.length,[l,d]=j.useState(null),p=w=>{d(w)},m=()=>{d(null)},g=()=>{if(!l)return 0;const w=s();return l.type==="percentage"?w*l.discount/100:Math.min(l.discount,w)},x={cartItems:t,addToCart:i,removeFromCart:a,clearCart:o,getCartTotal:s,getCartCount:c,appliedCoupon:l,applyCoupon:p,removeCoupon:m,calculateDiscount:g,getCartTotalWithDiscount:()=>s()-g()};return n.jsx(p0.Provider,{value:x,children:e})},P2=u.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(237, 109, 5, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  border: 1px solid rgba(237, 109, 5, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(237, 109, 5, 0.25);
  }
`,N2=u.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`,D2=u.div`
  padding: var(--space-xl);
  flex: 1;
  display: flex;
  flex-direction: column;
`,R2=u.h3`
  margin: 0 0 var(--space-md) 0;
  font-size: 1.375rem;
  color: #333;
  font-weight: 600;
  line-height: 1.3;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #F2912C;
    margin-top: var(--space-sm);
  }
`,T2=u.p`
  color: #666;
  margin-bottom: var(--space-lg);
  line-height: 1.6;
  flex: 1;
`,A2=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm) var(--space-md);
  margin-bottom: var(--space-lg);
  color: #555;
  font-size: 0.875rem;
`,Ls=u.span`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-sm);
  background: rgba(237, 109, 5, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(237, 109, 5, 0.1);
`,O2=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--space-md);
  border-top: 1px solid rgba(237, 109, 5, 0.1);
`,M2=u.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #16a085;
`;function F2({room:e}){const{id:t,name:r,description:i,price:a,image:o,capacity:s,amenities:c}=e,l=gt(),{addToCart:d}=Hd(),p=()=>{d(e),l("/cart")};return n.jsxs(P2,{children:[n.jsx(N2,{src:o||"https://via.placeholder.com/400x200?text=Room+Image",alt:r}),n.jsxs(D2,{children:[n.jsx(R2,{children:r}),n.jsxs(A2,{children:[n.jsxs(Ls,{children:["👥 ",s," Guests"]}),(c==null?void 0:c.includes("wifi"))&&n.jsx(Ls,{children:"📶 WiFi"}),(c==null?void 0:c.includes("breakfast"))&&n.jsx(Ls,{children:"🍳 Breakfast"})]}),n.jsx(T2,{children:i}),n.jsxs(O2,{children:[n.jsxs(M2,{children:["₹",a," ",n.jsx("small",{children:"/night"})]}),n.jsx(B,{onClick:p,children:"Book Now"})]})]})]})}function m0(e,t){return function(){return e.apply(t,arguments)}}const{toString:I2}=Object.prototype,{getPrototypeOf:Ud}=Object,{iterator:es,toStringTag:f0}=Symbol,ts=(e=>t=>{const r=I2.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Nt=e=>(e=e.toLowerCase(),t=>ts(t)===e),rs=e=>t=>typeof t===e,{isArray:$n}=Array,An=rs("undefined");function $i(e){return e!==null&&!An(e)&&e.constructor!==null&&!An(e.constructor)&&Ke(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const h0=Nt("ArrayBuffer");function B2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&h0(e.buffer),t}const L2=rs("string"),Ke=rs("function"),g0=rs("number"),Hi=e=>e!==null&&typeof e=="object",_2=e=>e===!0||e===!1,Va=e=>{if(ts(e)!=="object")return!1;const t=Ud(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(f0 in e)&&!(es in e)},$2=e=>{if(!Hi(e)||$i(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},H2=Nt("Date"),U2=Nt("File"),V2=Nt("Blob"),W2=Nt("FileList"),G2=e=>Hi(e)&&Ke(e.pipe),q2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ke(e.append)&&((t=ts(e))==="formdata"||t==="object"&&Ke(e.toString)&&e.toString()==="[object FormData]"))},Y2=Nt("URLSearchParams"),[Q2,J2,K2,X2]=["ReadableStream","Request","Response","Headers"].map(Nt),Z2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ui(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let i,a;if(typeof e!="object"&&(e=[e]),$n(e))for(i=0,a=e.length;i<a;i++)t.call(null,e[i],i,e);else{if($i(e))return;const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let c;for(i=0;i<s;i++)c=o[i],t.call(null,e[c],c,e)}}function x0(e,t){if($i(e))return null;t=t.toLowerCase();const r=Object.keys(e);let i=r.length,a;for(;i-- >0;)if(a=r[i],t===a.toLowerCase())return a;return null}const Ar=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),v0=e=>!An(e)&&e!==Ar;function Rc(){const{caseless:e,skipUndefined:t}=v0(this)&&this||{},r={},i=(a,o)=>{const s=e&&x0(r,o)||o;Va(r[s])&&Va(a)?r[s]=Rc(r[s],a):Va(a)?r[s]=Rc({},a):$n(a)?r[s]=a.slice():(!t||!An(a))&&(r[s]=a)};for(let a=0,o=arguments.length;a<o;a++)arguments[a]&&Ui(arguments[a],i);return r}const ew=(e,t,r,{allOwnKeys:i}={})=>(Ui(t,(a,o)=>{r&&Ke(a)?e[o]=m0(a,r):e[o]=a},{allOwnKeys:i}),e),tw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rw=(e,t,r,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},nw=(e,t,r,i)=>{let a,o,s;const c={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),o=a.length;o-- >0;)s=a[o],(!i||i(s,e,t))&&!c[s]&&(t[s]=e[s],c[s]=!0);e=r!==!1&&Ud(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},iw=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const i=e.indexOf(t,r);return i!==-1&&i===r},aw=e=>{if(!e)return null;if($n(e))return e;let t=e.length;if(!g0(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},ow=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ud(Uint8Array)),sw=(e,t)=>{const i=(e&&e[es]).call(e);let a;for(;(a=i.next())&&!a.done;){const o=a.value;t.call(e,o[0],o[1])}},lw=(e,t)=>{let r;const i=[];for(;(r=e.exec(t))!==null;)i.push(r);return i},cw=Nt("HTMLFormElement"),dw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,i,a){return i.toUpperCase()+a}),Mp=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),uw=Nt("RegExp"),y0=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),i={};Ui(r,(a,o)=>{let s;(s=t(a,o,e))!==!1&&(i[o]=s||a)}),Object.defineProperties(e,i)},pw=e=>{y0(e,(t,r)=>{if(Ke(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const i=e[r];if(Ke(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},mw=(e,t)=>{const r={},i=a=>{a.forEach(o=>{r[o]=!0})};return $n(e)?i(e):i(String(e).split(t)),r},fw=()=>{},hw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function gw(e){return!!(e&&Ke(e.append)&&e[f0]==="FormData"&&e[es])}const xw=e=>{const t=new Array(10),r=(i,a)=>{if(Hi(i)){if(t.indexOf(i)>=0)return;if($i(i))return i;if(!("toJSON"in i)){t[a]=i;const o=$n(i)?[]:{};return Ui(i,(s,c)=>{const l=r(s,a+1);!An(l)&&(o[c]=l)}),t[a]=void 0,o}}return i};return r(e,0)},vw=Nt("AsyncFunction"),yw=e=>e&&(Hi(e)||Ke(e))&&Ke(e.then)&&Ke(e.catch),w0=((e,t)=>e?setImmediate:t?((r,i)=>(Ar.addEventListener("message",({source:a,data:o})=>{a===Ar&&o===r&&i.length&&i.shift()()},!1),a=>{i.push(a),Ar.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Ke(Ar.postMessage)),ww=typeof queueMicrotask<"u"?queueMicrotask.bind(Ar):typeof process<"u"&&process.nextTick||w0,bw=e=>e!=null&&Ke(e[es]),C={isArray:$n,isArrayBuffer:h0,isBuffer:$i,isFormData:q2,isArrayBufferView:B2,isString:L2,isNumber:g0,isBoolean:_2,isObject:Hi,isPlainObject:Va,isEmptyObject:$2,isReadableStream:Q2,isRequest:J2,isResponse:K2,isHeaders:X2,isUndefined:An,isDate:H2,isFile:U2,isBlob:V2,isRegExp:uw,isFunction:Ke,isStream:G2,isURLSearchParams:Y2,isTypedArray:ow,isFileList:W2,forEach:Ui,merge:Rc,extend:ew,trim:Z2,stripBOM:tw,inherits:rw,toFlatObject:nw,kindOf:ts,kindOfTest:Nt,endsWith:iw,toArray:aw,forEachEntry:sw,matchAll:lw,isHTMLForm:cw,hasOwnProperty:Mp,hasOwnProp:Mp,reduceDescriptors:y0,freezeMethods:pw,toObjectSet:mw,toCamelCase:dw,noop:fw,toFiniteNumber:hw,findKey:x0,global:Ar,isContextDefined:v0,isSpecCompliantForm:gw,toJSONObject:xw,isAsyncFn:vw,isThenable:yw,setImmediate:w0,asap:ww,isIterable:bw};function U(e,t,r,i,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),i&&(this.request=i),a&&(this.response=a,this.status=a.status?a.status:null)}C.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.status}}});const b0=U.prototype,j0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{j0[e]={value:e}});Object.defineProperties(U,j0);Object.defineProperty(b0,"isAxiosError",{value:!0});U.from=(e,t,r,i,a,o)=>{const s=Object.create(b0);C.toFlatObject(e,s,function(p){return p!==Error.prototype},d=>d!=="isAxiosError");const c=e&&e.message?e.message:"Error",l=t==null&&e?e.code:t;return U.call(s,c,l,r,i,a),e&&s.cause==null&&Object.defineProperty(s,"cause",{value:e,configurable:!0}),s.name=e&&e.name||"Error",o&&Object.assign(s,o),s};const jw=null;function Tc(e){return C.isPlainObject(e)||C.isArray(e)}function k0(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Fp(e,t,r){return e?e.concat(t).map(function(a,o){return a=k0(a),!r&&o?"["+a+"]":a}).join(r?".":""):t}function kw(e){return C.isArray(e)&&!e.some(Tc)}const Sw=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function ns(e,t,r){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=C.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,b){return!C.isUndefined(b[w])});const i=r.metaTokens,a=r.visitor||p,o=r.dots,s=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(a))throw new TypeError("visitor must be a function");function d(x){if(x===null)return"";if(C.isDate(x))return x.toISOString();if(C.isBoolean(x))return x.toString();if(!l&&C.isBlob(x))throw new U("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(x)||C.isTypedArray(x)?l&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function p(x,w,b){let y=x;if(x&&!b&&typeof x=="object"){if(C.endsWith(w,"{}"))w=i?w:w.slice(0,-2),x=JSON.stringify(x);else if(C.isArray(x)&&kw(x)||(C.isFileList(x)||C.endsWith(w,"[]"))&&(y=C.toArray(x)))return w=k0(w),y.forEach(function(h,k){!(C.isUndefined(h)||h===null)&&t.append(s===!0?Fp([w],k,o):s===null?w:w+"[]",d(h))}),!1}return Tc(x)?!0:(t.append(Fp(b,w,o),d(x)),!1)}const m=[],g=Object.assign(Sw,{defaultVisitor:p,convertValue:d,isVisitable:Tc});function v(x,w){if(!C.isUndefined(x)){if(m.indexOf(x)!==-1)throw Error("Circular reference detected in "+w.join("."));m.push(x),C.forEach(x,function(y,f){(!(C.isUndefined(y)||y===null)&&a.call(t,y,C.isString(f)?f.trim():f,w,g))===!0&&v(y,w?w.concat(f):[f])}),m.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Ip(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return t[i]})}function Vd(e,t){this._pairs=[],e&&ns(e,this,t)}const S0=Vd.prototype;S0.append=function(t,r){this._pairs.push([t,r])};S0.toString=function(t){const r=t?function(i){return t.call(this,i,Ip)}:Ip;return this._pairs.map(function(a){return r(a[0])+"="+r(a[1])},"").join("&")};function Cw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function C0(e,t,r){if(!t)return e;const i=r&&r.encode||Cw;C.isFunction(r)&&(r={serialize:r});const a=r&&r.serialize;let o;if(a?o=a(t,r):o=C.isURLSearchParams(t)?t.toString():new Vd(t,r).toString(i),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ew{constructor(){this.handlers=[]}use(t,r,i){return this.handlers.push({fulfilled:t,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(i){i!==null&&t(i)})}}const Bp=Ew,E0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zw=typeof URLSearchParams<"u"?URLSearchParams:Vd,Pw=typeof FormData<"u"?FormData:null,Nw=typeof Blob<"u"?Blob:null,Dw={isBrowser:!0,classes:{URLSearchParams:zw,FormData:Pw,Blob:Nw},protocols:["http","https","file","blob","url","data"]},Wd=typeof window<"u"&&typeof document<"u",Ac=typeof navigator=="object"&&navigator||void 0,Rw=Wd&&(!Ac||["ReactNative","NativeScript","NS"].indexOf(Ac.product)<0),Tw=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Aw=Wd&&window.location.href||"http://localhost",Ow=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Wd,hasStandardBrowserEnv:Rw,hasStandardBrowserWebWorkerEnv:Tw,navigator:Ac,origin:Aw},Symbol.toStringTag,{value:"Module"})),Be={...Ow,...Dw};function Mw(e,t){return ns(e,new Be.classes.URLSearchParams,{visitor:function(r,i,a,o){return Be.isNode&&C.isBuffer(r)?(this.append(i,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function Fw(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Iw(e){const t={},r=Object.keys(e);let i;const a=r.length;let o;for(i=0;i<a;i++)o=r[i],t[o]=e[o];return t}function z0(e){function t(r,i,a,o){let s=r[o++];if(s==="__proto__")return!0;const c=Number.isFinite(+s),l=o>=r.length;return s=!s&&C.isArray(a)?a.length:s,l?(C.hasOwnProp(a,s)?a[s]=[a[s],i]:a[s]=i,!c):((!a[s]||!C.isObject(a[s]))&&(a[s]=[]),t(r,i,a[s],o)&&C.isArray(a[s])&&(a[s]=Iw(a[s])),!c)}if(C.isFormData(e)&&C.isFunction(e.entries)){const r={};return C.forEachEntry(e,(i,a)=>{t(Fw(i),a,r,0)}),r}return null}function Bw(e,t,r){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(e)}const Gd={transitional:E0,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const i=r.getContentType()||"",a=i.indexOf("application/json")>-1,o=C.isObject(t);if(o&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return a?JSON.stringify(z0(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)||C.isReadableStream(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Mw(t,this.formSerializer).toString();if((c=C.isFileList(t))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ns(c?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||a?(r.setContentType("application/json",!1),Bw(t)):t}],transformResponse:[function(t){const r=this.transitional||Gd.transitional,i=r&&r.forcedJSONParsing,a=this.responseType==="json";if(C.isResponse(t)||C.isReadableStream(t))return t;if(t&&C.isString(t)&&(i&&!this.responseType||a)){const s=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t,this.parseReviver)}catch(c){if(s)throw c.name==="SyntaxError"?U.from(c,U.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Be.classes.FormData,Blob:Be.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{Gd.headers[e]={}});const qd=Gd,Lw=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_w=e=>{const t={};let r,i,a;return e&&e.split(`
`).forEach(function(s){a=s.indexOf(":"),r=s.substring(0,a).trim().toLowerCase(),i=s.substring(a+1).trim(),!(!r||t[r]&&Lw[r])&&(r==="set-cookie"?t[r]?t[r].push(i):t[r]=[i]:t[r]=t[r]?t[r]+", "+i:i)}),t},Lp=Symbol("internals");function Kn(e){return e&&String(e).trim().toLowerCase()}function Wa(e){return e===!1||e==null?e:C.isArray(e)?e.map(Wa):String(e)}function $w(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=r.exec(e);)t[i[1]]=i[2];return t}const Hw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function _s(e,t,r,i,a){if(C.isFunction(i))return i.call(this,t,r);if(a&&(t=r),!!C.isString(t)){if(C.isString(i))return t.indexOf(i)!==-1;if(C.isRegExp(i))return i.test(t)}}function Uw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,i)=>r.toUpperCase()+i)}function Vw(e,t){const r=C.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+r,{value:function(a,o,s){return this[i].call(this,t,a,o,s)},configurable:!0})})}class is{constructor(t){t&&this.set(t)}set(t,r,i){const a=this;function o(c,l,d){const p=Kn(l);if(!p)throw new Error("header name must be a non-empty string");const m=C.findKey(a,p);(!m||a[m]===void 0||d===!0||d===void 0&&a[m]!==!1)&&(a[m||l]=Wa(c))}const s=(c,l)=>C.forEach(c,(d,p)=>o(d,p,l));if(C.isPlainObject(t)||t instanceof this.constructor)s(t,r);else if(C.isString(t)&&(t=t.trim())&&!Hw(t))s(_w(t),r);else if(C.isObject(t)&&C.isIterable(t)){let c={},l,d;for(const p of t){if(!C.isArray(p))throw TypeError("Object iterator must return a key-value pair");c[d=p[0]]=(l=c[d])?C.isArray(l)?[...l,p[1]]:[l,p[1]]:p[1]}s(c,r)}else t!=null&&o(r,t,i);return this}get(t,r){if(t=Kn(t),t){const i=C.findKey(this,t);if(i){const a=this[i];if(!r)return a;if(r===!0)return $w(a);if(C.isFunction(r))return r.call(this,a,i);if(C.isRegExp(r))return r.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Kn(t),t){const i=C.findKey(this,t);return!!(i&&this[i]!==void 0&&(!r||_s(this,this[i],i,r)))}return!1}delete(t,r){const i=this;let a=!1;function o(s){if(s=Kn(s),s){const c=C.findKey(i,s);c&&(!r||_s(i,i[c],c,r))&&(delete i[c],a=!0)}}return C.isArray(t)?t.forEach(o):o(t),a}clear(t){const r=Object.keys(this);let i=r.length,a=!1;for(;i--;){const o=r[i];(!t||_s(this,this[o],o,t,!0))&&(delete this[o],a=!0)}return a}normalize(t){const r=this,i={};return C.forEach(this,(a,o)=>{const s=C.findKey(i,o);if(s){r[s]=Wa(a),delete r[o];return}const c=t?Uw(o):String(o).trim();c!==o&&delete r[o],r[c]=Wa(a),i[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return C.forEach(this,(i,a)=>{i!=null&&i!==!1&&(r[a]=t&&C.isArray(i)?i.join(", "):i)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const i=new this(t);return r.forEach(a=>i.set(a)),i}static accessor(t){const i=(this[Lp]=this[Lp]={accessors:{}}).accessors,a=this.prototype;function o(s){const c=Kn(s);i[c]||(Vw(a,s),i[c]=!0)}return C.isArray(t)?t.forEach(o):o(t),this}}is.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(is.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[r]=i}}});C.freezeMethods(is);const Et=is;function $s(e,t){const r=this||qd,i=t||r,a=Et.from(i.headers);let o=i.data;return C.forEach(e,function(c){o=c.call(r,o,a.normalize(),t?t.status:void 0)}),a.normalize(),o}function P0(e){return!!(e&&e.__CANCEL__)}function Hn(e,t,r){U.call(this,e??"canceled",U.ERR_CANCELED,t,r),this.name="CanceledError"}C.inherits(Hn,U,{__CANCEL__:!0});function N0(e,t,r){const i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):t(new U("Request failed with status code "+r.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function Ww(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gw(e,t){e=e||10;const r=new Array(e),i=new Array(e);let a=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const d=Date.now(),p=i[o];s||(s=d),r[a]=l,i[a]=d;let m=o,g=0;for(;m!==a;)g+=r[m++],m=m%e;if(a=(a+1)%e,a===o&&(o=(o+1)%e),d-s<t)return;const v=p&&d-p;return v?Math.round(g*1e3/v):void 0}}function qw(e,t){let r=0,i=1e3/t,a,o;const s=(d,p=Date.now())=>{r=p,a=null,o&&(clearTimeout(o),o=null),e(...d)};return[(...d)=>{const p=Date.now(),m=p-r;m>=i?s(d,p):(a=d,o||(o=setTimeout(()=>{o=null,s(a)},i-m)))},()=>a&&s(a)]}const Po=(e,t,r=3)=>{let i=0;const a=Gw(50,250);return qw(o=>{const s=o.loaded,c=o.lengthComputable?o.total:void 0,l=s-i,d=a(l),p=s<=c;i=s;const m={loaded:s,total:c,progress:c?s/c:void 0,bytes:l,rate:d||void 0,estimated:d&&c&&p?(c-s)/d:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(m)},r)},_p=(e,t)=>{const r=e!=null;return[i=>t[0]({lengthComputable:r,total:e,loaded:i}),t[1]]},$p=e=>(...t)=>C.asap(()=>e(...t)),Yw=Be.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Be.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Be.origin),Be.navigator&&/(msie|trident)/i.test(Be.navigator.userAgent)):()=>!0,Qw=Be.hasStandardBrowserEnv?{write(e,t,r,i,a,o){const s=[e+"="+encodeURIComponent(t)];C.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),C.isString(i)&&s.push("path="+i),C.isString(a)&&s.push("domain="+a),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Jw(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Kw(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function D0(e,t,r){let i=!Jw(t);return e&&(i||r==!1)?Kw(e,t):t}const Hp=e=>e instanceof Et?{...e}:e;function Hr(e,t){t=t||{};const r={};function i(d,p,m,g){return C.isPlainObject(d)&&C.isPlainObject(p)?C.merge.call({caseless:g},d,p):C.isPlainObject(p)?C.merge({},p):C.isArray(p)?p.slice():p}function a(d,p,m,g){if(C.isUndefined(p)){if(!C.isUndefined(d))return i(void 0,d,m,g)}else return i(d,p,m,g)}function o(d,p){if(!C.isUndefined(p))return i(void 0,p)}function s(d,p){if(C.isUndefined(p)){if(!C.isUndefined(d))return i(void 0,d)}else return i(void 0,p)}function c(d,p,m){if(m in t)return i(d,p);if(m in e)return i(void 0,d)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c,headers:(d,p,m)=>a(Hp(d),Hp(p),m,!0)};return C.forEach(Object.keys({...e,...t}),function(p){const m=l[p]||a,g=m(e[p],t[p],p);C.isUndefined(g)&&m!==c||(r[p]=g)}),r}const R0=e=>{const t=Hr({},e);let{data:r,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:o,headers:s,auth:c}=t;if(t.headers=s=Et.from(s),t.url=C0(D0(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&s.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),C.isFormData(r)){if(Be.hasStandardBrowserEnv||Be.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(C.isFunction(r.getHeaders)){const l=r.getHeaders(),d=["content-type","content-length"];Object.entries(l).forEach(([p,m])=>{d.includes(p.toLowerCase())&&s.set(p,m)})}}if(Be.hasStandardBrowserEnv&&(i&&C.isFunction(i)&&(i=i(t)),i||i!==!1&&Yw(t.url))){const l=a&&o&&Qw.read(o);l&&s.set(a,l)}return t},Xw=typeof XMLHttpRequest<"u",Zw=Xw&&function(e){return new Promise(function(r,i){const a=R0(e);let o=a.data;const s=Et.from(a.headers).normalize();let{responseType:c,onUploadProgress:l,onDownloadProgress:d}=a,p,m,g,v,x;function w(){v&&v(),x&&x(),a.cancelToken&&a.cancelToken.unsubscribe(p),a.signal&&a.signal.removeEventListener("abort",p)}let b=new XMLHttpRequest;b.open(a.method.toUpperCase(),a.url,!0),b.timeout=a.timeout;function y(){if(!b)return;const h=Et.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),S={data:!c||c==="text"||c==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:h,config:e,request:b};N0(function(P){r(P),w()},function(P){i(P),w()},S),b=null}"onloadend"in b?b.onloadend=y:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(y)},b.onabort=function(){b&&(i(new U("Request aborted",U.ECONNABORTED,e,b)),b=null)},b.onerror=function(k){const S=k&&k.message?k.message:"Network Error",E=new U(S,U.ERR_NETWORK,e,b);E.event=k||null,i(E),b=null},b.ontimeout=function(){let k=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const S=a.transitional||E0;a.timeoutErrorMessage&&(k=a.timeoutErrorMessage),i(new U(k,S.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,b)),b=null},o===void 0&&s.setContentType(null),"setRequestHeader"in b&&C.forEach(s.toJSON(),function(k,S){b.setRequestHeader(S,k)}),C.isUndefined(a.withCredentials)||(b.withCredentials=!!a.withCredentials),c&&c!=="json"&&(b.responseType=a.responseType),d&&([g,x]=Po(d,!0),b.addEventListener("progress",g)),l&&b.upload&&([m,v]=Po(l),b.upload.addEventListener("progress",m),b.upload.addEventListener("loadend",v)),(a.cancelToken||a.signal)&&(p=h=>{b&&(i(!h||h.type?new Hn(null,e,b):h),b.abort(),b=null)},a.cancelToken&&a.cancelToken.subscribe(p),a.signal&&(a.signal.aborted?p():a.signal.addEventListener("abort",p)));const f=Ww(a.url);if(f&&Be.protocols.indexOf(f)===-1){i(new U("Unsupported protocol "+f+":",U.ERR_BAD_REQUEST,e));return}b.send(o||null)})},eb=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let i=new AbortController,a;const o=function(d){if(!a){a=!0,c();const p=d instanceof Error?d:this.reason;i.abort(p instanceof U?p:new Hn(p instanceof Error?p.message:p))}};let s=t&&setTimeout(()=>{s=null,o(new U(`timeout ${t} of ms exceeded`,U.ETIMEDOUT))},t);const c=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),e=null)};e.forEach(d=>d.addEventListener("abort",o));const{signal:l}=i;return l.unsubscribe=()=>C.asap(c),l}},tb=eb,rb=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let i=0,a;for(;i<r;)a=i+t,yield e.slice(i,a),i=a},nb=async function*(e,t){for await(const r of ib(e))yield*rb(r,t)},ib=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:i}=await t.read();if(r)break;yield i}}finally{await t.cancel()}},Up=(e,t,r,i)=>{const a=nb(e,t);let o=0,s,c=l=>{s||(s=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:d,value:p}=await a.next();if(d){c(),l.close();return}let m=p.byteLength;if(r){let g=o+=m;r(g)}l.enqueue(new Uint8Array(p))}catch(d){throw c(d),d}},cancel(l){return c(l),a.return()}},{highWaterMark:2})},Vp=64*1024,{isFunction:ga}=C,ab=(({Request:e,Response:t})=>({Request:e,Response:t}))(C.global),{ReadableStream:Wp,TextEncoder:Gp}=C.global,qp=(e,...t)=>{try{return!!e(...t)}catch{return!1}},ob=e=>{e=C.merge.call({skipUndefined:!0},ab,e);const{fetch:t,Request:r,Response:i}=e,a=t?ga(t):typeof fetch=="function",o=ga(r),s=ga(i);if(!a)return!1;const c=a&&ga(Wp),l=a&&(typeof Gp=="function"?(x=>w=>x.encode(w))(new Gp):async x=>new Uint8Array(await new r(x).arrayBuffer())),d=o&&c&&qp(()=>{let x=!1;const w=new r(Be.origin,{body:new Wp,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!w}),p=s&&c&&qp(()=>C.isReadableStream(new i("").body)),m={stream:p&&(x=>x.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!m[x]&&(m[x]=(w,b)=>{let y=w&&w[x];if(y)return y.call(w);throw new U(`Response type '${x}' is not supported`,U.ERR_NOT_SUPPORT,b)})});const g=async x=>{if(x==null)return 0;if(C.isBlob(x))return x.size;if(C.isSpecCompliantForm(x))return(await new r(Be.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(C.isArrayBufferView(x)||C.isArrayBuffer(x))return x.byteLength;if(C.isURLSearchParams(x)&&(x=x+""),C.isString(x))return(await l(x)).byteLength},v=async(x,w)=>{const b=C.toFiniteNumber(x.getContentLength());return b??g(w)};return async x=>{let{url:w,method:b,data:y,signal:f,cancelToken:h,timeout:k,onDownloadProgress:S,onUploadProgress:E,responseType:P,headers:z,withCredentials:L="same-origin",fetchOptions:_}=R0(x),A=t||fetch;P=P?(P+"").toLowerCase():"text";let N=tb([f,h&&h.toAbortSignal()],k),I=null;const F=N&&N.unsubscribe&&(()=>{N.unsubscribe()});let Y;try{if(E&&d&&b!=="get"&&b!=="head"&&(Y=await v(z,y))!==0){let H=new r(w,{method:"POST",body:y,duplex:"half"}),V;if(C.isFormData(y)&&(V=H.headers.get("content-type"))&&z.setContentType(V),H.body){const[he,X]=_p(Y,Po($p(E)));y=Up(H.body,Vp,he,X)}}C.isString(L)||(L=L?"include":"omit");const J=o&&"credentials"in r.prototype,fe={..._,signal:N,method:b.toUpperCase(),headers:z.normalize().toJSON(),body:y,duplex:"half",credentials:J?L:void 0};I=o&&new r(w,fe);let R=await(o?A(I,_):A(w,fe));const T=p&&(P==="stream"||P==="response");if(p&&(S||T&&F)){const H={};["status","statusText","headers"].forEach(ge=>{H[ge]=R[ge]});const V=C.toFiniteNumber(R.headers.get("content-length")),[he,X]=S&&_p(V,Po($p(S),!0))||[];R=new i(Up(R.body,Vp,he,()=>{X&&X(),F&&F()}),H)}P=P||"text";let O=await m[C.findKey(m,P)||"text"](R,x);return!T&&F&&F(),await new Promise((H,V)=>{N0(H,V,{data:O,headers:Et.from(R.headers),status:R.status,statusText:R.statusText,config:x,request:I})})}catch(J){throw F&&F(),J&&J.name==="TypeError"&&/Load failed|fetch/i.test(J.message)?Object.assign(new U("Network Error",U.ERR_NETWORK,x,I),{cause:J.cause||J}):U.from(J,J&&J.code,x,I)}}},sb=new Map,T0=e=>{let t=e?e.env:{};const{fetch:r,Request:i,Response:a}=t,o=[i,a,r];let s=o.length,c=s,l,d,p=sb;for(;c--;)l=o[c],d=p.get(l),d===void 0&&p.set(l,d=c?new Map:ob(t)),p=d;return d};T0();const Oc={http:jw,xhr:Zw,fetch:{get:T0}};C.forEach(Oc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Yp=e=>`- ${e}`,lb=e=>C.isFunction(e)||e===null||e===!1,A0={getAdapter:(e,t)=>{e=C.isArray(e)?e:[e];const{length:r}=e;let i,a;const o={};for(let s=0;s<r;s++){i=e[s];let c;if(a=i,!lb(i)&&(a=Oc[(c=String(i)).toLowerCase()],a===void 0))throw new U(`Unknown adapter '${c}'`);if(a&&(C.isFunction(a)||(a=a.get(t))))break;o[c||"#"+s]=a}if(!a){const s=Object.entries(o).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let c=r?s.length>1?`since :
`+s.map(Yp).join(`
`):" "+Yp(s[0]):"as no adapter specified";throw new U("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return a},adapters:Oc};function Hs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Hn(null,e)}function Qp(e){return Hs(e),e.headers=Et.from(e.headers),e.data=$s.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),A0.getAdapter(e.adapter||qd.adapter,e)(e).then(function(i){return Hs(e),i.data=$s.call(e,e.transformResponse,i),i.headers=Et.from(i.headers),i},function(i){return P0(i)||(Hs(e),i&&i.response&&(i.response.data=$s.call(e,e.transformResponse,i.response),i.response.headers=Et.from(i.response.headers))),Promise.reject(i)})}const O0="1.12.2",as={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{as[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const Jp={};as.transitional=function(t,r,i){function a(o,s){return"[Axios v"+O0+"] Transitional option '"+o+"'"+s+(i?". "+i:"")}return(o,s,c)=>{if(t===!1)throw new U(a(s," has been removed"+(r?" in "+r:"")),U.ERR_DEPRECATED);return r&&!Jp[s]&&(Jp[s]=!0,console.warn(a(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,s,c):!0}};as.spelling=function(t){return(r,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function cb(e,t,r){if(typeof e!="object")throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let a=i.length;for(;a-- >0;){const o=i[a],s=t[o];if(s){const c=e[o],l=c===void 0||s(c,o,e);if(l!==!0)throw new U("option "+o+" must be "+l,U.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new U("Unknown option "+o,U.ERR_BAD_OPTION)}}const Ga={assertOptions:cb,validators:as},Rt=Ga.validators;class No{constructor(t){this.defaults=t||{},this.interceptors={request:new Bp,response:new Bp}}async request(t,r){try{return await this._request(t,r)}catch(i){if(i instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const o=a.stack?a.stack.replace(/^.+\n/,""):"";try{i.stack?o&&!String(i.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+o):i.stack=o}catch{}}throw i}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Hr(this.defaults,r);const{transitional:i,paramsSerializer:a,headers:o}=r;i!==void 0&&Ga.assertOptions(i,{silentJSONParsing:Rt.transitional(Rt.boolean),forcedJSONParsing:Rt.transitional(Rt.boolean),clarifyTimeoutError:Rt.transitional(Rt.boolean)},!1),a!=null&&(C.isFunction(a)?r.paramsSerializer={serialize:a}:Ga.assertOptions(a,{encode:Rt.function,serialize:Rt.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Ga.assertOptions(r,{baseUrl:Rt.spelling("baseURL"),withXsrfToken:Rt.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=o&&C.merge(o.common,o[r.method]);o&&C.forEach(["delete","get","head","post","put","patch","common"],x=>{delete o[x]}),r.headers=Et.concat(s,o);const c=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(r)===!1||(l=l&&w.synchronous,c.unshift(w.fulfilled,w.rejected))});const d=[];this.interceptors.response.forEach(function(w){d.push(w.fulfilled,w.rejected)});let p,m=0,g;if(!l){const x=[Qp.bind(this),void 0];for(x.unshift(...c),x.push(...d),g=x.length,p=Promise.resolve(r);m<g;)p=p.then(x[m++],x[m++]);return p}g=c.length;let v=r;for(;m<g;){const x=c[m++],w=c[m++];try{v=x(v)}catch(b){w.call(this,b);break}}try{p=Qp.call(this,v)}catch(x){return Promise.reject(x)}for(m=0,g=d.length;m<g;)p=p.then(d[m++],d[m++]);return p}getUri(t){t=Hr(this.defaults,t);const r=D0(t.baseURL,t.url,t.allowAbsoluteUrls);return C0(r,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){No.prototype[t]=function(r,i){return this.request(Hr(i||{},{method:t,url:r,data:(i||{}).data}))}});C.forEach(["post","put","patch"],function(t){function r(i){return function(o,s,c){return this.request(Hr(c||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}No.prototype[t]=r(),No.prototype[t+"Form"]=r(!0)});const qa=No;class Yd{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const i=this;this.promise.then(a=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](a);i._listeners=null}),this.promise.then=a=>{let o;const s=new Promise(c=>{i.subscribe(c),o=c}).then(a);return s.cancel=function(){i.unsubscribe(o)},s},t(function(o,s,c){i.reason||(i.reason=new Hn(o,s,c),r(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=i=>{t.abort(i)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Yd(function(a){t=a}),cancel:t}}}const db=Yd;function ub(e){return function(r){return e.apply(null,r)}}function pb(e){return C.isObject(e)&&e.isAxiosError===!0}const Mc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Mc).forEach(([e,t])=>{Mc[t]=e});const mb=Mc;function M0(e){const t=new qa(e),r=m0(qa.prototype.request,t);return C.extend(r,qa.prototype,t,{allOwnKeys:!0}),C.extend(r,t,null,{allOwnKeys:!0}),r.create=function(a){return M0(Hr(e,a))},r}const ke=M0(qd);ke.Axios=qa;ke.CanceledError=Hn;ke.CancelToken=db;ke.isCancel=P0;ke.VERSION=O0;ke.toFormData=ns;ke.AxiosError=U;ke.Cancel=ke.CanceledError;ke.all=function(t){return Promise.all(t)};ke.spread=ub;ke.isAxiosError=pb;ke.mergeConfig=Hr;ke.AxiosHeaders=Et;ke.formToJSON=e=>z0(C.isHTMLForm(e)?new FormData(e):e);ke.getAdapter=A0.getAdapter;ke.HttpStatusCode=mb;ke.default=ke;const fb=ke,It=fb.create({timeout:1e4});It.interceptors.request.use(e=>e,e=>Promise.reject(e));It.interceptors.response.use(e=>e,e=>(console.error("API Error:",e),Promise.reject(e)));const hb=async()=>{try{return(await It.get("https://restcountries.com/v3.1/all")).data.slice(0,50).map((r,i)=>({id:i+1,name:`Grand Hotel ${r.name.common}`,type:i%3===0?"Standard":i%3===1?"Suite":"Deluxe",description:`Luxury accommodation in ${r.name.common}, featuring premium amenities and stunning views.`,price:Math.floor(Math.random()*400)+150,capacity:Math.floor(Math.random()*4)+1,size:`${Math.floor(Math.random()*600)+250} sq ft`,amenities:["wifi","breakfast","tv","ac","safe","pool","gym"],image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["City View","Modern Amenities","Premium Service"]}))}catch(e){return console.error("Error fetching rooms from Rest Countries API:",e),gb()}},gb=()=>[{id:1,name:"Deluxe King Room",type:"Standard",description:"Spacious room with king-sized bed, work desk, and city view.",price:199,capacity:2,size:"350 sq ft",amenities:["wifi","breakfast","tv","ac","safe"],image:"https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["City View","Work Desk"]},{id:2,name:"Executive Suite",type:"Suite",description:"Luxury suite with separate living area and premium amenities.",price:349,capacity:2,size:"650 sq ft",amenities:["wifi","breakfast","minibar","spa","tv"],image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Separate Living Area","Premium Amenities"]},{id:3,name:"Ocean View Deluxe",type:"Deluxe",description:"Stunning ocean views with private balcony and luxury furnishings.",price:299,capacity:2,size:"400 sq ft",amenities:["wifi","breakfast","tv","ac","balcony","ocean-view"],image:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Ocean View","Private Balcony"]},{id:4,name:"Family Suite",type:"Suite",description:"Perfect for families with two bedrooms and connecting rooms.",price:449,capacity:4,size:"800 sq ft",amenities:["wifi","breakfast","tv","ac","kitchen","pool"],image:"https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Two Bedrooms","Family Friendly"]},{id:5,name:"Business Room",type:"Standard",description:"Designed for business travelers with high-speed internet and workspace.",price:229,capacity:1,size:"300 sq ft",amenities:["wifi","breakfast","tv","ac","workspace","printer"],image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Business Amenities","High-Speed Internet"]},{id:6,name:"Penthouse Suite",type:"Suite",description:"Ultimate luxury with panoramic city views and private terrace.",price:699,capacity:2,size:"1200 sq ft",amenities:["wifi","breakfast","minibar","spa","tv","jacuzzi","terrace"],image:"https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Panoramic Views","Private Terrace"]},{id:7,name:"Garden View Room",type:"Standard",description:"Peaceful room overlooking our beautiful garden and pool area.",price:189,capacity:2,size:"320 sq ft",amenities:["wifi","breakfast","tv","ac","garden-view"],image:"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Garden View","Peaceful Environment"]},{id:8,name:"Presidential Suite",type:"Suite",description:"The ultimate in luxury with multiple rooms and butler service.",price:899,capacity:4,size:"2000 sq ft",amenities:["wifi","breakfast","minibar","spa","tv","jacuzzi","butler","dining"],image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Multiple Rooms","Butler Service"]},{id:9,name:"Mountain View Cabin",type:"Deluxe",description:"Cozy cabin-style room with stunning mountain views.",price:259,capacity:2,size:"380 sq ft",amenities:["wifi","breakfast","tv","ac","fireplace","mountain-view"],image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Mountain View","Cozy Fireplace"]},{id:10,name:"Honeymoon Suite",type:"Suite",description:"Romantic suite with heart-shaped jacuzzi and champagne service.",price:399,capacity:2,size:"550 sq ft",amenities:["wifi","breakfast","minibar","spa","tv","jacuzzi","champagne"],image:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Romantic Ambiance","Jacuzzi"]},{id:11,name:"Budget Single",type:"Standard",description:"Affordable single room perfect for solo travelers.",price:99,capacity:1,size:"250 sq ft",amenities:["wifi","breakfast","tv","ac"],image:"https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Budget Friendly","Solo Traveler"]},{id:12,name:"Villa with Pool",type:"Deluxe",description:"Private villa with your own swimming pool and garden.",price:599,capacity:6,size:"1500 sq ft",amenities:["wifi","breakfast","tv","ac","private-pool","kitchen","garden"],image:"https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Private Pool","Villa Experience"]},{id:13,name:"Art Deco Room",type:"Deluxe",description:"Stylish room with art deco design and modern amenities.",price:279,capacity:2,size:"360 sq ft",amenities:["wifi","breakfast","tv","ac","art-deco"],image:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["Art Deco Design","Stylish"]},{id:14,name:"Spa Retreat Suite",type:"Suite",description:"Relaxing suite with in-room spa facilities and wellness amenities.",price:499,capacity:2,size:"700 sq ft",amenities:["wifi","breakfast","minibar","spa","tv","jacuzzi","wellness"],image:"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",features:["In-Room Spa","Wellness Focused"]}],xb=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{id:1,title:"Early Bird Discount",description:"Book 30 days in advance and save 15% on your stay",discount:"15% OFF"},{id:2,title:"Weekend Getaway",description:"Special rates for Friday and Saturday nights",discount:"20% OFF"},{id:3,title:"Family Package",description:"Free breakfast for children under 12 when booking family rooms",discount:"FREE BREAKFAST"}]}catch(e){return console.error("Error fetching offers:",e),[]}},Us=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,Vs=u.div`
  margin-bottom: var(--space-3xl);
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: var(--space-2xl);
  }
`,Ws=u.h1`
  color: #333;
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,Gs=u.p`
  color: #666;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,vb=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
  padding: var(--space-2xl);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #dee2e6;
  position: relative;

  @media (max-width: 768px) {
    padding: var(--space-xl);
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
  }
`,yb=u.button`
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  background: #ED6D05;
  color: white;
  border: none;
  border-radius: 8px;
  padding: var(--space-sm) var(--space-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #d55a04;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    position: static;
    align-self: flex-end;
    margin-top: var(--space-md);
  }
`,Xn=u.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  flex: 1;

  @media (max-width: 768px) {
    min-width: 100%;
  }

  label {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: #495057;
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  select, input {
    padding: var(--space-md) var(--space-lg);
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    background: white;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    &:focus {
      outline: none;
      border-color: #ED6D05;
      box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    }

    &::placeholder {
      color: #adb5bd;
    }
  }

  select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right var(--space-md) center;
    background-repeat: no-repeat;
    background-size: 1rem;
    padding-right: var(--space-2xl);
  }
`,wb=u.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: var(--space-2xl);
  padding: var(--space-xl);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #dee2e6;

  @media (max-width: 768px) {
    justify-content: stretch;
    margin-bottom: var(--space-xl);
    padding: var(--space-lg);
  }
`,bb=u.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;

  @media (max-width: 768px) {
    min-width: 100%;
  }

  label {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    color: #495057;
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  select {
    padding: var(--space-md) var(--space-lg);
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    background: white;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right var(--space-md) center;
    background-repeat: no-repeat;
    background-size: 1rem;
    padding-right: var(--space-2xl);

    &:focus {
      outline: none;
      border-color: #ED6D05;
      box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    }
  }
`,jb=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`,kb=u.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: #ED6D05;
    background: #fff5f0;
  }

  input {
    margin: 0;
    accent-color: #ED6D05;
  }

  input:checked + & {
    background: #ED6D05;
    color: white;
    border-color: #ED6D05;
  }
`,Sb=u.div`
  margin-bottom: var(--space-3xl);
  padding: var(--space-2xl);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: var(--space-2xl);
    padding: var(--space-xl);
  }
`,Cb=u.h2`
  margin-bottom: var(--space-lg);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
    margin-bottom: var(--space-md);
  }
`,Eb=u.p`
  margin-bottom: var(--space-2xl);
  font-size: 1.125rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-xl);
    font-size: 1rem;
  }
`,zb=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,Pb=u.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: var(--space-xl);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: var(--space-lg);
  }
`,Nb=u.h3`
  margin-bottom: var(--space-sm);
  font-size: 1.375rem;
`,Db=u.p`
  margin-bottom: var(--space-lg);
  opacity: 0.9;
  line-height: 1.5;
`,Rb=u.div`
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`,Tb=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,Ab=u.div`
  text-align: center;
  padding: var(--space-4xl) var(--space-xl);
  color: #666;
  font-size: 1.375rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-lg);
    font-size: 1.125rem;
  }
`;function Ob(){const[e,t]=j.useState([]),[r,i]=j.useState([]),[a,o]=j.useState(!0),[s,c]=j.useState(null),[l,d]=j.useState({capacity:"",minPrice:"",maxPrice:"",type:"",amenities:[]}),[p,m]=j.useState("price-low");if(j.useEffect(()=>{(async()=>{try{o(!0);const[h,k]=await Promise.all([hb(),xb()]);t(h),i(k)}catch(h){c("Failed to load rooms and offers. Please try again later."),console.error("Error fetching data:",h)}finally{o(!1)}})()},[]),a)return n.jsxs(Us,{children:[n.jsxs(Vs,{children:[n.jsx(Ws,{"data-aos":"fade-up",children:"Our Rooms & Suites"}),n.jsx(Gs,{"data-aos":"fade-up","data-aos-delay":"100",children:"Choose from our selection of luxurious rooms and suites designed for your comfort and relaxation."})]}),n.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#666"},children:"Loading rooms..."})]});if(s)return n.jsxs(Us,{children:[n.jsxs(Vs,{children:[n.jsx(Ws,{"data-aos":"fade-up",children:"Our Rooms & Suites"}),n.jsx(Gs,{"data-aos":"fade-up","data-aos-delay":"100",children:"Choose from our selection of luxurious rooms and suites designed for your comfort and relaxation."})]}),n.jsx("div",{style:{textAlign:"center",padding:"4rem",color:"#dc3545"},children:s})]});const v=[...e.filter(f=>!(l.capacity&&f.capacity<parseInt(l.capacity)||l.minPrice&&f.price<parseInt(l.minPrice)||l.maxPrice&&f.price>parseInt(l.maxPrice)||l.type&&f.type!==l.type||l.amenities.length>0&&!l.amenities.every(h=>f.amenities.includes(h))))].sort((f,h)=>{switch(p){case"price-low":return f.price-h.price;case"price-high":return h.price-f.price;case"capacity-low":return f.capacity-h.capacity;case"capacity-high":return h.capacity-f.capacity;case"name":return f.name.localeCompare(h.name);default:return 0}}),x=f=>{const{name:h,value:k}=f.target;d(S=>({...S,[h]:k}))},w=f=>{d(h=>({...h,amenities:h.amenities.includes(f)?h.amenities.filter(k=>k!==f):[...h.amenities,f]}))},b=f=>{m(f.target.value)},y=()=>{d({capacity:"",minPrice:"",maxPrice:"",type:"",amenities:[]}),m("price-low")};return n.jsxs(Us,{children:[n.jsxs(Vs,{children:[n.jsx(Ws,{"data-aos":"fade-up",children:"Our Rooms & Suites"}),n.jsx(Gs,{"data-aos":"fade-up","data-aos-delay":"100",children:"Choose from our selection of luxurious rooms and suites designed for your comfort and relaxation."})]}),n.jsxs(vb,{"data-aos":"fade-up","data-aos-delay":"200",children:[n.jsx(yb,{onClick:y,children:"🗑️ Clear Filters"}),n.jsxs(Xn,{children:[n.jsx("label",{htmlFor:"capacity",children:"👥 Guests"}),n.jsxs("select",{id:"capacity",name:"capacity",value:l.capacity,onChange:x,children:[n.jsx("option",{value:"",children:"Any"}),n.jsx("option",{value:"1",children:"1+"}),n.jsx("option",{value:"2",children:"2+"}),n.jsx("option",{value:"3",children:"3+"}),n.jsx("option",{value:"4",children:"4+"})]})]}),n.jsxs(Xn,{children:[n.jsx("label",{htmlFor:"type",children:"🏨 Room Type"}),n.jsxs("select",{id:"type",name:"type",value:l.type,onChange:x,children:[n.jsx("option",{value:"",children:"All Types"}),n.jsx("option",{value:"Standard",children:"Standard"}),n.jsx("option",{value:"Suite",children:"Suite"})]})]}),n.jsxs(Xn,{children:[n.jsx("label",{htmlFor:"minPrice",children:"💰 Min Price"}),n.jsx("input",{type:"number",id:"minPrice",name:"minPrice",value:l.minPrice,onChange:x,placeholder:"Min ₹"})]}),n.jsxs(Xn,{children:[n.jsx("label",{htmlFor:"maxPrice",children:"💰 Max Price"}),n.jsx("input",{type:"number",id:"maxPrice",name:"maxPrice",value:l.maxPrice,onChange:x,placeholder:"Max ₹"})]}),n.jsxs(Xn,{children:[n.jsx("label",{children:"✨ Amenities"}),n.jsx(jb,{children:[{key:"wifi",label:"WiFi",icon:"📶"},{key:"breakfast",label:"Breakfast",icon:"🥐"},{key:"tv",label:"TV",icon:"📺"},{key:"ac",label:"AC",icon:"❄️"},{key:"minibar",label:"Minibar",icon:"🍾"},{key:"spa",label:"Spa",icon:"🧖"}].map(f=>n.jsxs(kb,{children:[n.jsx("input",{type:"checkbox",checked:l.amenities.includes(f.key),onChange:()=>w(f.key)}),f.icon," ",f.label]},f.key))})]})]}),n.jsx(wb,{"data-aos":"fade-up","data-aos-delay":"250",children:n.jsxs(bb,{children:[n.jsx("label",{htmlFor:"sort",children:"🔄 Sort By"}),n.jsxs("select",{id:"sort",value:p,onChange:b,children:[n.jsx("option",{value:"price-low",children:"💰 Price: Low to High"}),n.jsx("option",{value:"price-high",children:"💰 Price: High to Low"}),n.jsx("option",{value:"capacity-low",children:"👥 Capacity: Low to High"}),n.jsx("option",{value:"capacity-high",children:"👥 Capacity: High to Low"}),n.jsx("option",{value:"name",children:"📝 Name: A to Z"})]})]})}),n.jsxs(Sb,{"data-aos":"fade-up","data-aos-delay":"300",children:[n.jsx(Cb,{children:"Special Offers"}),n.jsx(Eb,{children:"Take advantage of our current promotions and save on your stay"}),n.jsx(zb,{children:r.map((f,h)=>n.jsxs(Pb,{"data-aos":"zoom-in","data-aos-delay":350+h*100,children:[n.jsx(Nb,{children:f.title}),n.jsx(Db,{children:f.description}),n.jsx(Rb,{children:f.discount})]},f.id))})]}),v.length>0?n.jsx(Tb,{children:v.map((f,h)=>n.jsx("div",{"data-aos":"fade-up","data-aos-delay":100*(h+1),children:n.jsx(F2,{room:f})},f.id))}):n.jsx(Ab,{children:"No rooms match your current filters. Please try different criteria."})]})}const Mb=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Fb=u.div`
  margin-bottom: 2rem;
`,Ib=u.h1`
  color: #333;
  margin-bottom: 1rem;
`,Bb=u.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Lb=u.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,_b=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${e=>{switch(e.status){case"confirmed":return"#e6f7f2";case"pending":return"#fff8e6";case"cancelled":return"#ffebee";default:return"#f5f5f5"}}};
  border-bottom: 1px solid #eee;
`,$b=u.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${e=>{switch(e.status){case"confirmed":return"#16a085";case"pending":return"#f39c12";case"cancelled":return"#e74c3c";default:return"#95a5a6"}}};
  color: white;
`,Hb=u.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`,Yr=u.div`
  h3 {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  
  p {
    font-size: 1rem;
    color: #333;
    font-weight: 500;
  }
`,Ub=u.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,Vb=u.div`
  text-align: center;
  padding: 3rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  
  h3 {
    margin-bottom: 1rem;
    color: #333;
  }
  
  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`,Wb=[{id:"B001",roomName:"Deluxe King Room",checkIn:"2023-09-15",checkOut:"2023-09-18",guests:2,totalPrice:597,status:"confirmed",bookingDate:"2023-08-20"},{id:"B002",roomName:"Executive Suite",checkIn:"2023-10-05",checkOut:"2023-10-10",guests:2,totalPrice:1745,status:"pending",bookingDate:"2023-09-01"},{id:"B003",roomName:"Family Room",checkIn:"2023-08-01",checkOut:"2023-08-05",guests:4,totalPrice:996,status:"cancelled",bookingDate:"2023-07-15"}];function Gb(){const[e,t]=j.useState(Wb),r=a=>{const o={year:"numeric",month:"long",day:"numeric"};return new Date(a).toLocaleDateString(void 0,o)},i=a=>{t(o=>o.map(s=>s.id===a?{...s,status:"cancelled"}:s))};return n.jsxs(Mb,{children:[n.jsx(Fb,{children:n.jsx(Ib,{children:"My Bookings"})}),e.length>0?n.jsx(Bb,{children:e.map(a=>n.jsxs(Lb,{children:[n.jsxs(_b,{status:a.status,children:[n.jsxs("h2",{children:["Booking #",a.id]}),n.jsx($b,{status:a.status,children:a.status.charAt(0).toUpperCase()+a.status.slice(1)})]}),n.jsxs(Hb,{children:[n.jsxs(Yr,{children:[n.jsx("h3",{children:"Room"}),n.jsx("p",{children:a.roomName})]}),n.jsxs(Yr,{children:[n.jsx("h3",{children:"Check-in"}),n.jsx("p",{children:r(a.checkIn)})]}),n.jsxs(Yr,{children:[n.jsx("h3",{children:"Check-out"}),n.jsx("p",{children:r(a.checkOut)})]}),n.jsxs(Yr,{children:[n.jsx("h3",{children:"Guests"}),n.jsx("p",{children:a.guests})]}),n.jsxs(Yr,{children:[n.jsx("h3",{children:"Total Price"}),n.jsxs("p",{children:["$",a.totalPrice]})]}),n.jsxs(Yr,{children:[n.jsx("h3",{children:"Booking Date"}),n.jsx("p",{children:r(a.bookingDate)})]})]}),n.jsxs(Ub,{children:[a.status==="confirmed"&&n.jsx(B,{variant:"outline",onClick:()=>i(a.id),children:"Cancel Booking"}),n.jsx(B,{children:"View Details"})]})]},a.id))}):n.jsxs(Vb,{children:[n.jsx("h3",{children:"No Bookings Found"}),n.jsx("p",{children:"You haven't made any bookings yet. Start by exploring our available rooms."}),n.jsx(B,{children:"Browse Rooms"})]})]})}const qb=u.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: var(--space-2xl) var(--space-md);
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    padding: var(--space-2xl) var(--space-xl);
  }

  @media (min-width: 1201px) {
    padding: var(--space-2xl) var(--space-3xl);
  }
`,Yb=u.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: var(--space-2xl);
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ED6D05, #FF9A3C);
  }

  @media (max-width: 480px) {
    padding: var(--space-xl) var(--space-md);
    border-radius: 12px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: var(--space-2xl) var(--space-xl);
    border-radius: 16px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    padding: var(--space-2xl);
    max-width: 90%;
  }

  @media (min-width: 1201px) {
    padding: var(--space-3xl);
    max-width: 1100px;
  }
`,Qb=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: var(--space-md);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    font-size: 1.125rem;
    line-height: 1.6;
  }
`,Jb=u.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
  }
`,qs=u.div`
  background: ${e=>e.highlight?"#f8f9fa":"transparent"};
  border-radius: 16px;
  padding: var(--space-xl);
  border: ${e=>e.highlight?"2px solid #e9ecef":"none"};
  width: 100%;
  box-sizing: border-box;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 24px;
      height: 24px;
      color: #ED6D05;
    }
  }

  @media (max-width: 480px) {
    padding: var(--space-lg);
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: var(--space-xl);
  }

  @media (min-width: 769px) {
    padding: var(--space-xl);
  }
`,Kp=u.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
  }

  @media (min-width: 992px) {
    gap: var(--space-lg);
  }
`,Bt=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
`,Lt=u.label`
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  .required {
    color: #e74c3c;
    margin-left: var(--space-xs);
  }
`,Qr=u.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  &::placeholder {
    color: #adb5bd;
  }

  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }

  &:disabled {
    background: #f8f9fa;
    color: #666;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: var(--space-sm) var(--space-md);
  }
`,Xp=u.select`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }

  @media (max-width: 480px) {
    padding: var(--space-sm) var(--space-md);
  }
`,Kb=u.textarea`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  min-height: 100px;
  resize: vertical;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  @media (max-width: 480px) {
    padding: var(--space-sm) var(--space-md);
    min-height: 80px;
  }
  }

  &::placeholder {
    color: #adb5bd;
  }

  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }
`,er=u.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,Xb=u.div`
  .room-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md);
    border: 2px solid #e9ecef;
    border-radius: 12px;
    margin-bottom: var(--space-md);
    transition: all 0.3s ease;

    &:hover {
      border-color: #ED6D05;
      background: rgba(237, 109, 5, 0.05);
    }

    &.selected {
      border-color: #ED6D05;
      background: rgba(237, 109, 5, 0.1);
    }

    .room-info {
      flex: 1;

      .room-name {
        font-weight: 600;
        color: #333;
        margin-bottom: var(--space-xs);
      }

      .room-details {
        color: #666;
        font-size: 0.9rem;
      }
    }

    .room-price {
      font-weight: 600;
      color: #ED6D05;
      font-size: 1.125rem;
    }
  }
`,Zb=u.div`
  background: #f8f9fa;
  border-radius: 16px;
  padding: var(--space-2xl);
  border: 2px solid #e9ecef;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-sm) 0;
    border-bottom: 1px solid #e9ecef;

    &:last-child {
      border-bottom: none;
      font-weight: 600;
      font-size: 1.125rem;
      color: #ED6D05;
    }
  }

  .total {
    margin-top: var(--space-md);
    padding-top: var(--space-md);
    border-top: 2px solid #e9ecef;
    font-size: 1.25rem;
    font-weight: 700;
    color: #333;
  }
`,e3=u.div`
  display: flex;
  gap: var(--space-md);
  justify-content: space-between;
  margin-top: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;function t3(){var y,f;const e=gt();Er();const{user:t}=Kt(),[r,i]=j.useState({checkIn:"",checkOut:"",guests:1,rooms:1,roomType:"",firstName:((y=t==null?void 0:t.name)==null?void 0:y.split(" ")[0])||"",lastName:((f=t==null?void 0:t.name)==null?void 0:f.split(" ").slice(1).join(" "))||"",email:(t==null?void 0:t.email)||"",phone:"",specialRequests:"",paymentMethod:"card"}),[a,o]=j.useState({}),[s,c]=j.useState(!1),[l,d]=j.useState([]),p=[{id:"deluxe",name:"Deluxe Room",price:299,description:"King bed, city view, luxury amenities"},{id:"suite",name:"Executive Suite",price:499,description:"Separate living area, premium view"},{id:"standard",name:"Standard Room",price:199,description:"Comfortable double bed, basic amenities"},{id:"family",name:"Family Room",price:399,description:"Two queen beds, perfect for families"}];j.useEffect(()=>{const h=new Date().toISOString().split("T")[0];i(k=>({...k,checkIn:h}))},[]);const m=h=>{const{name:k,value:S}=h.target;i(E=>({...E,[k]:S})),a[k]&&o(E=>({...E,[k]:""}))},g=h=>{d(k=>k.find(E=>E.id===h.id)?k.filter(E=>E.id!==h.id):[...k,h])},v=()=>{const h={};return r.checkIn||(h.checkIn="Check-in date is required"),r.checkOut||(h.checkOut="Check-out date is required"),r.firstName.trim()||(h.firstName="First name is required"),r.lastName.trim()||(h.lastName="Last name is required"),r.email.trim()||(h.email="Email is required"),r.phone.trim()||(h.phone="Phone number is required"),r.checkIn&&r.checkOut&&new Date(r.checkOut)<=new Date(r.checkIn)&&(h.checkOut="Check-out must be after check-in"),/\S+@\S+\.\S+/.test(r.email)||(h.email="Please enter a valid email address"),l.length===0&&(h.rooms="Please select at least one room"),o(h),Object.keys(h).length===0},x=()=>{if(!r.checkIn||!r.checkOut)return 0;const h=Math.ceil((new Date(r.checkOut)-new Date(r.checkIn))/(1e3*60*60*24));return l.reduce((S,E)=>S+E.price,0)*h},w=async h=>{if(h.preventDefault(),!!v())try{c(!0),await new Promise(k=>setTimeout(k,2e3)),e("/booking-confirmation",{state:{bookingData:{...r,rooms:l,total:x(),bookingId:"BK"+Date.now()}}})}catch{o({submit:"Failed to process booking. Please try again."})}finally{c(!1)}},b=x();return n.jsx(qb,{children:n.jsxs(Yb,{children:[n.jsxs(Qb,{children:[n.jsx("h1",{children:"Book Your Stay"}),n.jsx("p",{children:"Complete your reservation details and secure your perfect accommodation"})]}),n.jsxs(Jb,{onSubmit:w,children:[n.jsxs("div",{children:[n.jsxs(qs,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})}),"Stay Details"]}),n.jsxs(Kp,{children:[n.jsxs(Bt,{children:[n.jsxs(Lt,{children:["Check-in Date",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(Qr,{type:"date",name:"checkIn",value:r.checkIn,onChange:m,min:new Date().toISOString().split("T")[0],className:a.checkIn?"error":""}),a.checkIn&&n.jsx(er,{children:a.checkIn})]}),n.jsxs(Bt,{children:[n.jsxs(Lt,{children:["Check-out Date",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(Qr,{type:"date",name:"checkOut",value:r.checkOut,onChange:m,min:r.checkIn||new Date().toISOString().split("T")[0],className:a.checkOut?"error":""}),a.checkOut&&n.jsx(er,{children:a.checkOut})]}),n.jsxs(Bt,{children:[n.jsx(Lt,{children:"Number of Guests"}),n.jsx(Xp,{name:"guests",value:r.guests,onChange:m,children:[1,2,3,4,5,6].map(h=>n.jsxs("option",{value:h,children:[h," Guest",h>1?"s":""]},h))})]}),n.jsxs(Bt,{children:[n.jsx(Lt,{children:"Number of Rooms"}),n.jsx(Xp,{name:"rooms",value:r.rooms,onChange:m,children:[1,2,3,4].map(h=>n.jsxs("option",{value:h,children:[h," Room",h>1?"s":""]},h))})]})]})]}),n.jsxs(qs,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),"Guest Information"]}),n.jsxs(Kp,{children:[n.jsxs(Bt,{children:[n.jsxs(Lt,{children:["First Name",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(Qr,{type:"text",name:"firstName",value:r.firstName,onChange:m,placeholder:"Enter first name",className:a.firstName?"error":""}),a.firstName&&n.jsx(er,{children:a.firstName})]}),n.jsxs(Bt,{children:[n.jsxs(Lt,{children:["Last Name",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(Qr,{type:"text",name:"lastName",value:r.lastName,onChange:m,placeholder:"Enter last name",className:a.lastName?"error":""}),a.lastName&&n.jsx(er,{children:a.lastName})]}),n.jsxs(Bt,{children:[n.jsxs(Lt,{children:["Email Address",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(Qr,{type:"email",name:"email",value:r.email,onChange:m,placeholder:"Enter email address",className:a.email?"error":""}),a.email&&n.jsx(er,{children:a.email})]}),n.jsxs(Bt,{children:[n.jsxs(Lt,{children:["Phone Number",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(Qr,{type:"tel",name:"phone",value:r.phone,onChange:m,placeholder:"Enter phone number",className:a.phone?"error":""}),a.phone&&n.jsx(er,{children:a.phone})]})]}),n.jsxs(Bt,{style:{marginTop:"var(--space-lg)"},children:[n.jsx(Lt,{children:"Special Requests"}),n.jsx(Kb,{name:"specialRequests",value:r.specialRequests,onChange:m,placeholder:"Any special requests or requirements...",rows:"4"})]})]})]}),n.jsxs("div",{children:[n.jsxs(qs,{highlight:!0,children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h6a1 1 0 100-2H9z"})}),"Select Rooms"]}),n.jsx(Xb,{children:p.map(h=>n.jsxs("div",{className:`room-item ${l.find(k=>k.id===h.id)?"selected":""}`,onClick:()=>g(h),children:[n.jsxs("div",{className:"room-info",children:[n.jsx("div",{className:"room-name",children:h.name}),n.jsx("div",{className:"room-details",children:h.description})]}),n.jsxs("div",{className:"room-price",children:["₹",h.price,"/night"]})]},h.id))}),a.rooms&&n.jsx(er,{children:a.rooms})]}),n.jsxs(Zb,{children:[n.jsx("h3",{children:"Booking Summary"}),r.checkIn&&r.checkOut&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"summary-item",children:[n.jsx("span",{children:"Check-in"}),n.jsx("span",{children:new Date(r.checkIn).toLocaleDateString()})]}),n.jsxs("div",{className:"summary-item",children:[n.jsx("span",{children:"Check-out"}),n.jsx("span",{children:new Date(r.checkOut).toLocaleDateString()})]}),n.jsxs("div",{className:"summary-item",children:[n.jsx("span",{children:"Nights"}),n.jsx("span",{children:Math.ceil((new Date(r.checkOut)-new Date(r.checkIn))/(1e3*60*60*24))})]})]}),l.map(h=>n.jsxs("div",{className:"summary-item",children:[n.jsx("span",{children:h.name}),n.jsxs("span",{children:["₹",h.price,"/night"]})]},h.id)),n.jsxs("div",{className:"summary-item total",children:[n.jsx("span",{children:"Total"}),n.jsxs("span",{children:["₹",b.toLocaleString()]})]})]})]})]}),a.submit&&n.jsxs(er,{style:{justifyContent:"center",marginBottom:"var(--space-lg)"},children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),a.submit]}),n.jsxs(e3,{children:[n.jsx(B,{type:"button",variant:"outline",onClick:()=>e("/rooms"),children:"Back to Rooms"}),n.jsx(B,{type:"submit",disabled:s||l.length===0,className:s?"loading":"",children:s?"Processing...":`Complete Booking - ₹${b.toLocaleString()}`})]})]})})}const r3=u.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`,n3=u.h1`
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`,i3=u.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,a3=u.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,o3=u.div`
  flex: 1;
`,s3=u.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
`,l3=u.div`
  font-weight: bold;
  color: #16a085;
`,c3=u.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.25rem;
`;function d3(){const e=gt(),{cartItems:t,removeFromCart:r,clearCart:i,getCartTotal:a}=Hd();return n.jsxs(r3,{children:[n.jsx(n3,{children:"Your Booking Cart"}),t.length===0?n.jsx(c3,{children:"Your booking cart is empty. Please add rooms to book."}):n.jsxs(n.Fragment,{children:[n.jsx(i3,{children:t.map(o=>n.jsxs(a3,{children:[n.jsxs(o3,{children:[n.jsx(s3,{children:o.name}),n.jsxs("div",{children:["Price: ₹",o.price," / night"]})]}),n.jsxs(l3,{children:["₹",o.price]}),n.jsx(B,{variant:"outline",onClick:()=>r(o.cartId),children:"Remove"})]},o.cartId))}),n.jsxs("div",{style:{marginTop:"2rem",textAlign:"right",fontWeight:"bold",fontSize:"1.25rem",color:"#16a085"},children:["Total: ₹",a()]}),n.jsxs("div",{style:{marginTop:"1rem",textAlign:"right"},children:[n.jsx(B,{onClick:i,variant:"outline",style:{marginRight:"1rem"},children:"Clear Cart"}),n.jsx(B,{onClick:()=>e("/checkout"),children:"Proceed to Checkout"})]})]})]})}const u3=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--space-3xl);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,p3=u.div`
  grid-column: 1 / -1;
  text-align: center;
  margin-bottom: var(--space-2xl);

  h1 {
    color: #333;
    margin-bottom: var(--space-md);
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    font-size: 1.125rem;
  }
`,m3=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;

  @media (max-width: 768px) {
    padding: var(--space-xl);
  }
`,xa=u.div`
  margin-bottom: var(--space-2xl);

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-lg);
    font-size: 1.375rem;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 20px;
      height: 20px;
      color: #ED6D05;
    }
  }
`,Ys=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,vt=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,yt=u.label`
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  .required {
    color: #e74c3c;
  }
`,st=u.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
  }

  &.error {
    border-color: #e74c3c;
  }
`;u.select`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
  }
`;const f3=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-md);
`,Zp=u.div`
  border: 2px solid ${e=>e.selected?"#ED6D05":"#e9ecef"};
  border-radius: 8px;
  padding: var(--space-lg);
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${e=>e.selected?"rgba(237, 109, 5, 0.05)":"white"};

  &:hover {
    border-color: #ED6D05;
  }

  .method-name {
    font-weight: 600;
    color: #333;
    margin-bottom: var(--space-xs);
  }

  .method-desc {
    color: #666;
    font-size: 0.875rem;
  }
`,h3=u.div`
  border: 2px dashed #e9ecef;
  border-radius: 8px;
  padding: var(--space-lg);
  background: #f8f9fa;
`,g3=u.div`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,x3=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  height: fit-content;
  position: sticky;
  top: var(--space-xl);

  @media (max-width: 1024px) {
    position: static;
  }

  @media (max-width: 768px) {
    padding: var(--space-xl);
  }
`,v3=u.h3`
  color: #333;
  margin-bottom: var(--space-lg);
  font-size: 1.375rem;
`,Qs=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    font-weight: 600;
    font-size: 1.125rem;
    color: #ED6D05;
    padding-top: var(--space-lg);
    border-top: 2px solid #e9ecef;
    margin-top: var(--space-md);
  }

  .item-name {
    color: #666;
  }

  .item-price {
    font-weight: 600;
    color: #333;
  }
`,y3=u.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #16a085;
  text-align: center;
  margin: var(--space-lg) 0;
  padding: var(--space-lg);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
`,w3=u.div`
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-2xl);

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,lt=u.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
`,b3=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,j3=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-3xl);
  max-width: 500px;
  width: 90%;
  text-align: center;

  h2 {
    color: #16a085;
    margin-bottom: var(--space-lg);
  }

  p {
    color: #666;
    margin-bottom: var(--space-xl);
    line-height: 1.6;
  }

  .booking-ref {
    background: #f8f9fa;
    padding: var(--space-lg);
    border-radius: 8px;
    margin: var(--space-lg) 0;
    font-family: monospace;
    font-weight: 600;
    color: #ED6D05;
  }
`;function k3(){var _,A;const e=gt(),{user:t}=Kt(),{cartItems:r,getCartTotal:i,clearCart:a}=Hd(),[o,s]=j.useState({firstName:((_=t==null?void 0:t.name)==null?void 0:_.split(" ")[0])||"",lastName:((A=t==null?void 0:t.name)==null?void 0:A.split(" ").slice(1).join(" "))||"",email:(t==null?void 0:t.email)||"",phone:"",checkIn:"",checkOut:"",specialRequests:"",paymentMethod:"card",cardNumber:"",expiryDate:"",cvv:"",cardName:"",couponCode:""}),[c,l]=j.useState({}),[d,p]=j.useState(!1),[m,g]=j.useState(!1),[v,x]=j.useState(""),[w,b]=j.useState(null),y={WELCOME10:{discount:10,type:"percentage",description:"10% off your first booking"},SUMMER20:{discount:20,type:"percentage",description:"20% off summer bookings"},FAMILY15:{discount:15,type:"percentage",description:"15% off family bookings"},FLASH50:{discount:50,type:"fixed",description:"₹50 off any booking"}};j.useEffect(()=>{r.length===0&&e("/cart");const N=new Date,I=new Date(N);I.setDate(I.getDate()+1),s(F=>({...F,checkIn:N.toISOString().split("T")[0],checkOut:I.toISOString().split("T")[0]}))},[r,e]);const f=N=>{const{name:I,value:F}=N.target;s(Y=>({...Y,[I]:F})),c[I]&&l(Y=>({...Y,[I]:""}))},h=()=>{const N=o.couponCode.toUpperCase();y[N]?(b({code:N,...y[N]}),s(I=>({...I,couponCode:""}))):l(I=>({...I,coupon:"Invalid coupon code"}))},k=()=>{b(null)},S=()=>{if(!w)return 0;const N=i();return w.type==="percentage"?N*w.discount/100:Math.min(w.discount,N)},E=()=>{const N=i(),I=S();return N-I},P=()=>{const N={};return o.firstName.trim()||(N.firstName="First name is required"),o.lastName.trim()||(N.lastName="Last name is required"),o.email.trim()||(N.email="Email is required"),o.phone.trim()||(N.phone="Phone number is required"),o.checkIn||(N.checkIn="Check-in date is required"),o.checkOut||(N.checkOut="Check-out date is required"),o.checkIn&&o.checkOut&&new Date(o.checkOut)<=new Date(o.checkIn)&&(N.checkOut="Check-out must be after check-in"),/\S+@\S+\.\S+/.test(o.email)||(N.email="Please enter a valid email address"),o.paymentMethod==="card"&&(o.cardNumber.replace(/\s/g,"")||(N.cardNumber="Card number is required"),o.expiryDate||(N.expiryDate="Expiry date is required"),o.cvv||(N.cvv="CVV is required"),o.cardName.trim()||(N.cardName="Cardholder name is required")),l(N),Object.keys(N).length===0},z=async N=>{if(N.preventDefault(),!!P())try{p(!0),await new Promise(F=>setTimeout(F,3e3));const I="BK"+Date.now();x(I),g(!0),a()}catch{l({submit:"Payment failed. Please try again."})}finally{p(!1)}},L=()=>{g(!1),e("/bookings")};return r.length===0?null:n.jsxs(n.Fragment,{children:[n.jsxs(u3,{children:[n.jsxs(p3,{children:[n.jsx("h1",{children:"Checkout"}),n.jsx("p",{children:"Complete your booking and secure your stay"})]}),n.jsxs(m3,{children:[n.jsxs(xa,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),"Guest Information"]}),n.jsxs(Ys,{children:[n.jsxs(vt,{children:[n.jsxs(yt,{children:["First Name",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(st,{type:"text",name:"firstName",value:o.firstName,onChange:f,className:c.firstName?"error":""}),c.firstName&&n.jsx(lt,{children:c.firstName})]}),n.jsxs(vt,{children:[n.jsxs(yt,{children:["Last Name",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(st,{type:"text",name:"lastName",value:o.lastName,onChange:f,className:c.lastName?"error":""}),c.lastName&&n.jsx(lt,{children:c.lastName})]}),n.jsxs(vt,{children:[n.jsxs(yt,{children:["Email Address",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(st,{type:"email",name:"email",value:o.email,onChange:f,className:c.email?"error":""}),c.email&&n.jsx(lt,{children:c.email})]}),n.jsxs(vt,{children:[n.jsxs(yt,{children:["Phone Number",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(st,{type:"tel",name:"phone",value:o.phone,onChange:f,className:c.phone?"error":""}),c.phone&&n.jsx(lt,{children:c.phone})]})]})]}),n.jsxs(xa,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})}),"Stay Details"]}),n.jsxs(Ys,{children:[n.jsxs(vt,{children:[n.jsxs(yt,{children:["Check-in Date",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(st,{type:"date",name:"checkIn",value:o.checkIn,onChange:f,min:new Date().toISOString().split("T")[0],className:c.checkIn?"error":""}),c.checkIn&&n.jsx(lt,{children:c.checkIn})]}),n.jsxs(vt,{children:[n.jsxs(yt,{children:["Check-out Date",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(st,{type:"date",name:"checkOut",value:o.checkOut,onChange:f,min:o.checkIn||new Date().toISOString().split("T")[0],className:c.checkOut?"error":""}),c.checkOut&&n.jsx(lt,{children:c.checkOut})]})]}),n.jsxs(vt,{children:[n.jsx(yt,{children:"Special Requests"}),n.jsx(st,{as:"textarea",name:"specialRequests",value:o.specialRequests,onChange:f,placeholder:"Any special requests or requirements...",rows:"3",style:{resize:"vertical",minHeight:"80px"}})]})]}),n.jsxs(xa,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h6a1 1 0 100-2H9z"})}),"Payment Method"]}),n.jsxs(f3,{children:[n.jsxs(Zp,{selected:o.paymentMethod==="card",onClick:()=>s(N=>({...N,paymentMethod:"card"})),children:[n.jsx("div",{className:"method-name",children:"💳 Credit Card"}),n.jsx("div",{className:"method-desc",children:"Visa, MasterCard, American Express"})]}),n.jsxs(Zp,{selected:o.paymentMethod==="paypal",onClick:()=>s(N=>({...N,paymentMethod:"paypal"})),children:[n.jsx("div",{className:"method-name",children:"🅿️ PayPal"}),n.jsx("div",{className:"method-desc",children:"Pay with your PayPal account"})]})]}),o.paymentMethod==="card"&&n.jsxs(Ys,{style:{marginTop:"var(--space-lg)"},children:[n.jsxs(vt,{children:[n.jsx(yt,{children:"Card Number"}),n.jsx(st,{type:"text",name:"cardNumber",value:o.cardNumber,onChange:f,placeholder:"1234 5678 9012 3456",className:c.cardNumber?"error":""}),c.cardNumber&&n.jsx(lt,{children:c.cardNumber})]}),n.jsxs(vt,{children:[n.jsx(yt,{children:"Expiry Date"}),n.jsx(st,{type:"text",name:"expiryDate",value:o.expiryDate,onChange:f,placeholder:"MM/YY",className:c.expiryDate?"error":""}),c.expiryDate&&n.jsx(lt,{children:c.expiryDate})]}),n.jsxs(vt,{children:[n.jsx(yt,{children:"CVV"}),n.jsx(st,{type:"text",name:"cvv",value:o.cvv,onChange:f,placeholder:"123",className:c.cvv?"error":""}),c.cvv&&n.jsx(lt,{children:c.cvv})]}),n.jsxs(vt,{children:[n.jsx(yt,{children:"Cardholder Name"}),n.jsx(st,{type:"text",name:"cardName",value:o.cardName,onChange:f,placeholder:"John Doe",className:c.cardName?"error":""}),c.cardName&&n.jsx(lt,{children:c.cardName})]})]})]}),n.jsx(xa,{children:n.jsxs(h3,{children:[n.jsx("h4",{style:{marginBottom:"var(--space-md)",color:"#333"},children:"Have a coupon?"}),w?n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx("strong",{children:w.code})," - ",w.description]}),n.jsx(B,{variant:"outline",size:"small",onClick:k,children:"Remove"})]}):n.jsxs(g3,{children:[n.jsx(st,{type:"text",name:"couponCode",value:o.couponCode,onChange:f,placeholder:"Enter coupon code",style:{flex:1}}),n.jsx(B,{onClick:h,disabled:!o.couponCode.trim(),children:"Apply"})]}),c.coupon&&n.jsx(lt,{children:c.coupon})]})})]}),n.jsxs(x3,{children:[n.jsx(v3,{children:"Order Summary"}),r.map(N=>n.jsxs(Qs,{children:[n.jsx("span",{className:"item-name",children:N.name}),n.jsxs("span",{className:"item-price",children:["₹",N.price]})]},N.cartId)),w&&n.jsxs(Qs,{children:[n.jsxs("span",{className:"item-name",children:["Discount (",w.code,")"]}),n.jsxs("span",{className:"item-price",style:{color:"#e74c3c"},children:["-₹",S().toFixed(2)]})]}),n.jsxs(Qs,{children:[n.jsx("span",{className:"item-name",children:"Subtotal"}),n.jsxs("span",{className:"item-price",children:["₹",i().toFixed(2)]})]}),n.jsxs(y3,{children:["Total: ₹",E().toFixed(2)]}),c.submit&&n.jsx(lt,{style:{justifyContent:"center",marginBottom:"var(--space-lg)"},children:c.submit}),n.jsxs(w3,{children:[n.jsx(B,{variant:"outline",onClick:()=>e("/cart"),style:{flex:1},children:"Back to Cart"}),n.jsx(B,{onClick:z,disabled:d,style:{flex:1},children:d?"Processing...":`Complete Payment - ₹${E().toFixed(2)}`})]})]})]}),m&&n.jsx(b3,{children:n.jsxs(j3,{children:[n.jsx("h2",{children:"🎉 Booking Confirmed!"}),n.jsx("p",{children:"Thank you for your booking! Your reservation has been successfully processed and a confirmation email has been sent to your email address."}),n.jsxs("div",{className:"booking-ref",children:["Booking Reference: ",v]}),n.jsx(B,{onClick:L,children:"View My Bookings"})]})})]})}const S3=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,C3=u.div`
  text-align: center;
  margin-bottom: 3rem;
`,E3=u.h1`
  color: #333;
  margin-bottom: 1rem;
`,z3=u.p`
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,P3=u.section`
  margin-bottom: 4rem;
`,em=u.h2`
  color: #333;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #16a085;
    margin-top: 0.5rem;
  }
`,N3=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1rem;
  }
`,D3=u.section`
  margin-bottom: 4rem;
`,R3=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`,va=u.div`
  text-align: center;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid #16a085;
  }
  
  h3 {
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-style: italic;
  }
`;function T3(){return n.jsxs(S3,{children:[n.jsxs(C3,{children:[n.jsx(E3,{children:"About Us"}),n.jsx(z3,{children:"Learn more about our hotel's history, mission, and the team behind our exceptional service."})]}),n.jsxs(P3,{children:[n.jsx(em,{children:"Our Story"}),n.jsxs(N3,{children:[n.jsxs("div",{children:[n.jsx("p",{children:"Founded in 2005, our hotel has been providing exceptional hospitality services for nearly two decades. What started as a small family-owned establishment has grown into one of the most respected names in the hospitality industry."}),n.jsx("p",{children:"Our commitment to excellence, attention to detail, and personalized service has earned us numerous accolades and the loyalty of guests who return year after year. We believe that a great hotel experience is about more than just a comfortable bed—it's about creating memories that last a lifetime."}),n.jsx("p",{children:"Today, we continue to uphold the traditions that made us successful while embracing innovation to meet the evolving needs of modern travelers. Our dedicated team works tirelessly to ensure that every guest feels welcomed, valued, and completely satisfied with their stay."})]}),n.jsx("img",{src:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",alt:"Hotel Exterior"})]})]}),n.jsxs(D3,{children:[n.jsx(em,{children:"Our Leadership Team"}),n.jsxs(R3,{children:[n.jsxs(va,{children:[n.jsx("img",{src:"https://randomuser.me/api/portraits/men/32.jpg",alt:"CEO"}),n.jsx("h3",{children:"John Doe"}),n.jsx("p",{children:"Chief Executive Officer"})]}),n.jsxs(va,{children:[n.jsx("img",{src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"Operations Director"}),n.jsx("h3",{children:"Jane Smith"}),n.jsx("p",{children:"Director of Operations"})]}),n.jsxs(va,{children:[n.jsx("img",{src:"https://randomuser.me/api/portraits/men/68.jpg",alt:"Chef"}),n.jsx("h3",{children:"Michael Johnson"}),n.jsx("p",{children:"Executive Chef"})]}),n.jsxs(va,{children:[n.jsx("img",{src:"https://randomuser.me/api/portraits/women/65.jpg",alt:"Customer Relations"}),n.jsx("h3",{children:"Sarah Williams"}),n.jsx("p",{children:"Head of Customer Relations"})]})]})]})]})}const A3=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,O3=u.div`
  text-align: center;
  margin-bottom: 3rem;
`,M3=u.h1`
  color: #333;
  margin-bottom: 1rem;
`,F3=u.p`
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,I3=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,B3=u.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ya=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    font-weight: 500;
    color: #333;
  }
  
  input, textarea, select {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #16a085;
      box-shadow: 0 0 0 2px rgba(22, 160, 133, 0.2);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`,L3=u.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Js=u.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  h3 {
    color: #333;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    .icon {
      color: #16a085;
    }
  }
  
  p, a {
    color: #555;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  a {
    text-decoration: none;
    
    &:hover {
      color: #16a085;
    }
  }
`,_3=u.div`
  background-color: #e6f7f2;
  color: #16a085;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  text-align: center;
`;function $3(){const[e,t]=j.useState({name:"",email:"",subject:"",message:""}),[r,i]=j.useState(!1),a=s=>{const{name:c,value:l}=s.target;t(d=>({...d,[c]:l}))},o=s=>{s.preventDefault(),console.log("Form submitted:",e),i(!0),t({name:"",email:"",subject:"",message:""}),setTimeout(()=>{i(!1)},5e3)};return n.jsxs(A3,{children:[n.jsxs(O3,{children:[n.jsx(M3,{children:"Contact Us"}),n.jsx(F3,{children:"Have questions or need assistance? Reach out to our friendly team and we'll get back to you as soon as possible."})]}),n.jsxs(I3,{children:[n.jsxs("div",{children:[r&&n.jsx(_3,{children:"Thank you for your message! We'll get back to you soon."}),n.jsxs(B3,{onSubmit:o,children:[n.jsxs(ya,{children:[n.jsx("label",{htmlFor:"name",children:"Your Name"}),n.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:a,required:!0})]}),n.jsxs(ya,{children:[n.jsx("label",{htmlFor:"email",children:"Email Address"}),n.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:a,required:!0})]}),n.jsxs(ya,{children:[n.jsx("label",{htmlFor:"subject",children:"Subject"}),n.jsxs("select",{id:"subject",name:"subject",value:e.subject,onChange:a,required:!0,children:[n.jsx("option",{value:"",children:"Select a subject"}),n.jsx("option",{value:"booking",children:"Booking Inquiry"}),n.jsx("option",{value:"support",children:"Customer Support"}),n.jsx("option",{value:"feedback",children:"Feedback"}),n.jsx("option",{value:"other",children:"Other"})]})]}),n.jsxs(ya,{children:[n.jsx("label",{htmlFor:"message",children:"Your Message"}),n.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:a,required:!0})]}),n.jsx(B,{type:"submit",children:"Send Message"})]})]}),n.jsxs(L3,{children:[n.jsxs(Js,{children:[n.jsxs("h3",{children:[n.jsx("span",{className:"icon",children:"📍"})," Address"]}),n.jsx("p",{children:"123 Hotel Street"}),n.jsx("p",{children:"Luxury Avenue"}),n.jsx("p",{children:"New York, NY 10001"})]}),n.jsxs(Js,{children:[n.jsxs("h3",{children:[n.jsx("span",{className:"icon",children:"📞"})," Phone"]}),n.jsx("p",{children:"Reservations: +1 (555) 123-4567"}),n.jsx("p",{children:"Front Desk: +1 (555) 123-4568"}),n.jsx("p",{children:"Customer Service: +1 (555) 123-4569"})]}),n.jsxs(Js,{children:[n.jsxs("h3",{children:[n.jsx("span",{className:"icon",children:"✉️"})," Email"]}),n.jsx("a",{href:"mailto:reservations@hotelbooking.com",children:"reservations@hotelbooking.com"}),n.jsx("a",{href:"mailto:info@hotelbooking.com",children:"info@hotelbooking.com"}),n.jsx("a",{href:"mailto:support@hotelbooking.com",children:"support@hotelbooking.com"})]})]})]})]})}const H3=async()=>{try{return await new Promise(e=>setTimeout(e,500)),[{id:1,name:"The Grand Dining Room",cuisine:"Fine Dining",description:"Experience culinary excellence in our elegant main dining room featuring contemporary cuisine with a focus on local ingredients.",image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",rating:4.8,hours:"6:00 PM - 10:00 PM",dressCode:"Smart Casual",capacity:"120 guests"},{id:2,name:"Garden Terrace",cuisine:"Mediterranean",description:"Al fresco dining under the stars featuring fresh Mediterranean cuisine and an extensive wine selection.",image:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",rating:4.6,hours:"12:00 PM - 11:00 PM",dressCode:"Casual",capacity:"80 guests"},{id:3,name:"Sky Lounge",cuisine:"Asian Fusion",description:"Modern rooftop dining with panoramic city views and innovative Asian-inspired dishes.",image:"https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",rating:4.7,hours:"5:00 PM - 12:00 AM",dressCode:"Smart Casual",capacity:"60 guests"}]}catch(e){return console.error("Error fetching restaurants:",e),[]}},U3=async()=>{try{const t=(await It.get("https://www.themealdb.com/api/json/v1/1/categories.php")).data.categories.slice(0,6);return await Promise.all(t.map(async i=>{try{const s=(await It.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${i.strCategory}`)).data.meals.slice(0,3).map(c=>({name:c.strMeal,description:`${c.strMeal} - A delicious ${i.strCategory.toLowerCase()} dish`,price:`₹${Math.floor(Math.random()*20)+15}`}));return{name:i.strCategory,icon:tm(i.strCategory),items:s}}catch(a){return console.error(`Error fetching meals for ${i.strCategory}:`,a),{name:i.strCategory,icon:tm(i.strCategory),items:[]}}}))}catch(e){return console.error("Error fetching menu from TheMealDB:",e),[{name:"Appetizers",icon:"🥗",items:[{name:"Seared Scallops",description:"Pan-seared diver scallops with cauliflower purée",price:"₹24"},{name:"Burrata Salad",description:"Fresh burrata with heirloom tomatoes and basil oil",price:"₹18"}]}]}},tm=e=>({Beef:"🥩",Chicken:"🍗",Dessert:"🍰",Lamb:"🍖",Miscellaneous:"🍽️",Pasta:"🍝",Pork:"🥓",Seafood:"🐟",Side:"🥗",Starter:"🥗",Vegan:"🥬",Vegetarian:"🥕",Breakfast:"🥞",Goat:"🐐"})[e]||"🍽️",V3=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{icon:"🍾",title:"Wine Tasting Dinner",description:"Four-course dinner paired with premium wines from our cellar",discount:"₹89 per person"},{icon:"🎉",title:"Anniversary Special",description:"Complimentary champagne and dessert for anniversary celebrations",discount:"FREE"},{icon:"👨‍👩‍👧‍👦",title:"Family Sunday Brunch",description:"Special family pricing with kids menu and entertainment",discount:"25% OFF"}]}catch(e){return console.error("Error fetching special offers:",e),[]}},W3=async()=>{try{const[e,t,r]=await Promise.all([H3(),U3(),V3()]);return{restaurants:e,menuCategories:t,specialOffers:r}}catch(e){return console.error("Error fetching dining data:",e),{restaurants:[],menuCategories:[],specialOffers:[]}}},Ks=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,Xs=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    margin-bottom: var(--space-2xl);
  }
`,Zs=u.h1`
  color: #333;
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,el=u.p`
  color: #666;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,G3=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,q3=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
`,Y3=u.div`
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .rating {
    position: absolute;
    top: var(--space-lg);
    right: var(--space-lg);
    background: rgba(255, 255, 255, 0.9);
    padding: var(--space-xs) var(--space-sm);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    .stars {
      color: #FFD700;
    }
  }
`,Q3=u.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .cuisine {
    color: #ED6D05;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--space-md);
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);

    .detail {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: #555;
      font-size: 0.9rem;

      .icon {
        color: #ED6D05;
        font-size: 1.1rem;
      }
    }
  }
`,J3=u.div`
  margin-bottom: var(--space-3xl);
`,K3=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,X3=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,Z3=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;

  h3 {
    color: #333;
    margin-bottom: var(--space-lg);
    font-size: 1.25rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    .icon {
      color: #ED6D05;
      font-size: 1.5rem;
    }
  }
`,e5=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
`,t5=u.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  .item-info {
    flex: 1;

    .item-name {
      font-weight: 500;
      color: #333;
      margin-bottom: var(--space-xs);
    }

    .item-description {
      font-size: 0.875rem;
      color: #666;
      line-height: 1.4;
    }
  }

  .item-price {
    font-weight: 600;
    color: #ED6D05;
    font-size: 1.1rem;
    margin-left: var(--space-lg);
  }
`,r5=u.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;
  color: white;
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    padding: var(--space-2xl);
    margin-bottom: var(--space-2xl);
  }
`,n5=u.h2`
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,i5=u.p`
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`,a5=u.div`
  margin-bottom: var(--space-3xl);
`,o5=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,s5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,l5=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .offer-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .offer-description {
    color: #666;
    margin-bottom: var(--space-lg);
    line-height: 1.5;
  }

  .offer-discount {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ED6D05;
    margin-bottom: var(--space-md);
  }
`;function c5(){const[e,t]=j.useState({restaurants:[],menuCategories:[],specialOffers:[]}),[r,i]=j.useState(!0),[a,o]=j.useState(null),[s,c]=j.useState(null);return j.useEffect(()=>{(async()=>{try{i(!0);const d=await W3();t(d)}catch(d){o("Failed to load dining information. Please try again later."),console.error("Error fetching dining data:",d)}finally{i(!1)}})()},[]),r?n.jsxs(Ks,{children:[n.jsxs(Xs,{children:[n.jsx(Zs,{"data-aos":"fade-up",children:"Fine Dining Experience"}),n.jsx(el,{"data-aos":"fade-up","data-aos-delay":"100",children:"Indulge in exceptional culinary experiences across our three distinctive restaurants, each offering unique atmospheres and world-class cuisine."})]}),n.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#666"},children:"Loading dining information..."})]}):a?n.jsxs(Ks,{children:[n.jsxs(Xs,{children:[n.jsx(Zs,{"data-aos":"fade-up",children:"Fine Dining Experience"}),n.jsx(el,{"data-aos":"fade-up","data-aos-delay":"100",children:"Indulge in exceptional culinary experiences across our three distinctive restaurants, each offering unique atmospheres and world-class cuisine."})]}),n.jsx("div",{style:{textAlign:"center",padding:"4rem",color:"#dc3545"},children:a})]}):n.jsxs(Ks,{children:[n.jsxs(Xs,{children:[n.jsx(Zs,{"data-aos":"fade-up",children:"Fine Dining Experience"}),n.jsx(el,{"data-aos":"fade-up","data-aos-delay":"100",children:"Indulge in exceptional culinary experiences across our three distinctive restaurants, each offering unique atmospheres and world-class cuisine."})]}),n.jsx(G3,{children:e.restaurants.map((l,d)=>n.jsxs(q3,{"data-aos":"fade-up","data-aos-delay":200+d*100,children:[n.jsx(Y3,{src:l.image,children:n.jsxs("div",{className:"rating",children:[n.jsx("span",{className:"stars",children:"⭐"}),l.rating]})}),n.jsxs(Q3,{children:[n.jsx("h3",{children:l.name}),n.jsx("div",{className:"cuisine",children:l.cuisine}),n.jsx("div",{className:"description",children:l.description}),n.jsxs("div",{className:"details",children:[n.jsxs("div",{className:"detail",children:[n.jsx("span",{className:"icon",children:"🕐"}),l.hours]}),n.jsxs("div",{className:"detail",children:[n.jsx("span",{className:"icon",children:"👔"}),l.dressCode]}),n.jsxs("div",{className:"detail",children:[n.jsx("span",{className:"icon",children:"👥"}),l.capacity]}),n.jsxs("div",{className:"detail",children:[n.jsx("span",{className:"icon",children:"⭐"}),l.rating,"/5"]})]}),n.jsx(B,{onClick:()=>c(l),style:{width:"100%"},children:"View Menu & Reserve"})]})]},l.id))}),n.jsxs(J3,{children:[n.jsx(K3,{"data-aos":"fade-up",children:"Sample Menu"}),n.jsx(X3,{children:menuCategories.map((l,d)=>n.jsxs(Z3,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsxs("h3",{children:[n.jsx("span",{className:"icon",children:l.icon}),l.name]}),n.jsx(e5,{children:l.items.map((p,m)=>n.jsxs(t5,{children:[n.jsxs("div",{className:"item-info",children:[n.jsx("div",{className:"item-name",children:p.name}),n.jsx("div",{className:"item-description",children:p.description})]}),n.jsx("div",{className:"item-price",children:p.price})]},m))})]},l.name))})]}),n.jsxs(a5,{children:[n.jsx(o5,{"data-aos":"fade-up",children:"Special Offers"}),n.jsx(s5,{children:specialOffers.map((l,d)=>n.jsxs(l5,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"offer-icon",children:l.icon}),n.jsx("h3",{children:l.title}),n.jsx("div",{className:"offer-description",children:l.description}),n.jsx("div",{className:"offer-discount",children:l.discount}),n.jsx(B,{variant:"outline",children:"Learn More"})]},l.title))})]}),n.jsxs(r5,{"data-aos":"fade-up",children:[n.jsx(n5,{children:"Make a Reservation"}),n.jsx(i5,{children:"Reserve your table now and experience exceptional dining in an unforgettable atmosphere."}),n.jsx(B,{size:"large",style:{background:"white",color:"#667eea"},children:"Reserve Now"})]})]})}const d5=async()=>{try{return(await It.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick")).data.slice(0,8).map((r,i)=>({id:r.id||i+1,name:r.name||`Spa Treatment ${i+1}`,category:r.product_type||"Beauty Treatment",description:r.description||`Relaxing ${r.name} treatment for ultimate wellness.`,image:r.image_link||"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",duration:`${Math.floor(Math.random()*60)+30} min`,price:r.price?parseFloat(r.price)*100:Math.floor(Math.random()*100)+50,benefits:["Relaxation","Skin Care","Wellness","Rejuvenation"]}))}catch(e){return console.error("Error fetching spa services from Makeup API:",e),[{id:1,name:"Swedish Massage",category:"Massage Therapy",description:"Relaxing full-body massage using long, flowing strokes to improve circulation and reduce stress.",image:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",duration:"60 min",price:120,benefits:["Stress Relief","Improved Circulation","Muscle Relaxation","Better Sleep"]}]}},u5=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{icon:"🏊",name:"Infinity Pool",description:"Heated infinity pool with panoramic views and hydrotherapy jets for ultimate relaxation."},{icon:"🧖",name:"Steam Room",description:"Traditional steam room with eucalyptus infusion for respiratory health and detoxification."},{icon:"❄️",name:"Ice Fountain",description:"Cold plunge pool and ice fountain for contrast therapy and improved circulation."},{icon:"🧘",name:"Meditation Garden",description:"Serene outdoor meditation space with zen gardens and peaceful water features."},{icon:"💆",name:"Treatment Rooms",description:"Private treatment rooms equipped with the latest spa technology and ambient lighting."},{icon:"🛀",name:"Hydrotherapy Bath",description:"Therapeutic baths with various jet configurations for targeted muscle relief."}]}catch(e){return console.error("Error fetching facilities:",e),[]}},p5=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{icon:"🌸",name:"Ultimate Relaxation",description:"Full day of pampering including massage, facial, and access to all facilities",price:299,duration:"4 hours",includes:["60-min Massage","Facial Treatment","Lunch","Pool Access"]},{icon:"💎",name:"Couples Retreat",description:"Romantic spa experience for couples with side-by-side treatments",price:399,duration:"3 hours",includes:["Couples Massage","Champagne","Chocolate","Private Suite"]},{icon:"🌿",name:"Detox & Renew",description:"Cleansing treatments focused on detoxification and skin renewal",price:199,duration:"2.5 hours",includes:["Body Scrub","Detox Wrap","Herbal Tea","Sauna Access"]}]}catch(e){return console.error("Error fetching spa packages:",e),[]}},m5=async()=>{try{const[e,t,r]=await Promise.all([d5(),u5(),p5()]);return{spaServices:e,facilities:t,spaPackages:r}}catch(e){return console.error("Error fetching spa data:",e),{spaServices:[],facilities:[],spaPackages:[]}}},tl=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,f5=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(237,109,5,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(237,109,5,0.1)"/><circle cx="50" cy="10" r="1" fill="rgba(237,109,5,0.1)"/><circle cx="10" cy="60" r="1" fill="rgba(237,109,5,0.1)"/><circle cx="90" cy="40" r="1" fill="rgba(237,109,5,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`,h5=u.h1`
  color: #333;
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,g5=u.p`
  color: #666;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,x5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,v5=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(237, 109, 5, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(237, 109, 5, 0.15);
  }
`,y5=u.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .duration {
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    background: rgba(255, 255, 255, 0.9);
    padding: var(--space-xs) var(--space-sm);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    .icon {
      color: #ED6D05;
    }
  }

  .price {
    position: absolute;
    bottom: var(--space-lg);
    right: var(--space-lg);
    background: rgba(237, 109, 5, 0.9);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 25px;
    font-size: 1.125rem;
    font-weight: 600;
  }
`,w5=u.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .category {
    color: #ED6D05;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--space-md);
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .benefits {
    margin-bottom: var(--space-lg);

    .benefit-title {
      font-weight: 600;
      color: #333;
      margin-bottom: var(--space-sm);
      font-size: 0.95rem;
    }

    .benefits-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);

      .benefit {
        background: rgba(237, 109, 5, 0.1);
        color: #ED6D05;
        padding: var(--space-xs) var(--space-sm);
        border-radius: 15px;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }
`,b5=u.div`
  margin-bottom: var(--space-3xl);
`,j5=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,k5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,S5=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .facility-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
    display: block;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .facility-description {
    color: #666;
    line-height: 1.5;
  }
`,C5=u.div`
  margin-bottom: var(--space-3xl);
`,E5=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,z5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,P5=u.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: var(--space-2xl);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="spa-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23spa-pattern)"/></svg>');
    opacity: 0.3;
  }

  .package-icon {
    font-size: 4rem;
    margin-bottom: var(--space-md);
    position: relative;
    z-index: 1;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-sm);
    position: relative;
    z-index: 1;
  }

  .package-description {
    margin-bottom: var(--space-lg);
    opacity: 0.9;
    line-height: 1.5;
    position: relative;
    z-index: 1;
  }

  .package-price {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: var(--space-lg);
    position: relative;
    z-index: 1;

    .currency {
      font-size: 1.5rem;
      margin-right: var(--space-xs);
    }
  }

  .package-duration {
    margin-bottom: var(--space-xl);
    opacity: 0.8;
    position: relative;
    z-index: 1;
  }
`,N5=u.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`,D5=u.h2`
  color: #333;
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,R5=u.p`
  color: #666;
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`;function T5(){const[e,t]=j.useState({spaServices:[],facilities:[],spaPackages:[]}),[r,i]=j.useState(!0),[a,o]=j.useState(null),[s,c]=j.useState(null);return j.useEffect(()=>{(async()=>{try{i(!0);const d=await m5();t(d)}catch(d){o("Failed to load spa data"),console.error("Error fetching spa data:",d)}finally{i(!1)}})()},[]),r?n.jsx(tl,{children:n.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#666"},children:"Loading spa services..."})}):a?n.jsx(tl,{children:n.jsx("div",{style:{textAlign:"center",padding:"var(--space-3xl)",color:"red"},children:a})}):n.jsxs(tl,{children:[n.jsxs(f5,{"data-aos":"fade-up",children:[n.jsx(h5,{children:"Luxury Spa & Wellness"}),n.jsx(g5,{children:"Rejuvenate your body and mind in our world-class spa featuring expert therapists, premium treatments, and serene facilities designed for ultimate relaxation."})]}),n.jsx(x5,{children:e.spaServices.map((l,d)=>n.jsxs(v5,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsxs(y5,{src:l.image,children:[n.jsxs("div",{className:"duration",children:[n.jsx("span",{className:"icon",children:"🕐"}),l.duration]}),n.jsxs("div",{className:"price",children:["₹",l.price]})]}),n.jsxs(w5,{children:[n.jsx("h3",{children:l.name}),n.jsx("div",{className:"category",children:l.category}),n.jsx("div",{className:"description",children:l.description}),n.jsxs("div",{className:"benefits",children:[n.jsx("div",{className:"benefit-title",children:"Benefits:"}),n.jsx("div",{className:"benefits-list",children:l.benefits.map((p,m)=>n.jsx("span",{className:"benefit",children:p},m))})]}),n.jsx(B,{onClick:()=>c(l),style:{width:"100%"},children:"Book Treatment"})]})]},l.id))}),n.jsxs(b5,{children:[n.jsx(j5,{"data-aos":"fade-up",children:"Our Facilities"}),n.jsx(k5,{children:e.facilities.map((l,d)=>n.jsxs(S5,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"facility-icon",children:l.icon}),n.jsx("h3",{children:l.name}),n.jsx("div",{className:"facility-description",children:l.description})]},l.name))})]}),n.jsxs(C5,{children:[n.jsx(E5,{"data-aos":"fade-up",children:"Spa Packages"}),n.jsx(z5,{children:e.spaPackages.map((l,d)=>n.jsxs(P5,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"package-icon",children:l.icon}),n.jsx("h3",{children:l.name}),n.jsx("div",{className:"package-description",children:l.description}),n.jsxs("div",{className:"package-price",children:[n.jsx("span",{className:"currency",children:"₹"}),l.price]}),n.jsxs("div",{className:"package-duration",children:["Duration: ",l.duration]}),n.jsx(B,{style:{background:"white",color:"#667eea"},children:"Book Package"})]},l.name))})]}),n.jsxs(N5,{"data-aos":"fade-up",children:[n.jsx(D5,{children:"Ready to Relax?"}),n.jsx(R5,{children:"Book your spa treatment today and experience the ultimate in relaxation and wellness. Our expert therapists are ready to help you unwind and rejuvenate."}),n.jsx(B,{size:"large",children:"Book Your Treatment"})]})]})}const A5=async()=>{try{return(await It.get("https://dummyjson.com/posts?limit=20")).data.posts.map((r,i)=>({id:r.id,name:`${r.title} Event`,type:i%3===0?"Wedding":i%3===1?"Business":"Celebration",description:r.body.substring(0,150)+"...",image:"https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",capacity:`${Math.floor(Math.random()*250)+50}-${Math.floor(Math.random()*300)+100} guests`,features:[{icon:"💒",text:"Ceremony Setup"},{icon:"🍾",text:"Champagne Toast"},{icon:"🎵",text:"Live Music"},{icon:"📸",text:"Photography"}]}))}catch(e){return console.error("Error fetching events from DummyJSON API:",e),[{id:1,name:"Wedding Celebrations",type:"Wedding",description:"Create magical memories with our comprehensive wedding packages.",image:"https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",capacity:"50-300 guests",features:[{icon:"💒",text:"Ceremony Setup"},{icon:"🍾",text:"Champagne Toast"},{icon:"🎵",text:"Live Music"},{icon:"📸",text:"Photography"}]}]}},O5=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{id:1,name:"Grand Ballroom",description:"Elegant ballroom with crystal chandeliers and marble floors, perfect for large celebrations and formal events.",image:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",size:"5,000 sq ft",amenities:["Crystal Chandeliers","Marble Floors","Stage","Dance Floor","Bridal Suite","AV System"]},{id:2,name:"Garden Terrace",description:"Beautiful outdoor venue with garden views, ideal for romantic ceremonies and cocktail receptions.",image:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",size:"2,500 sq ft",amenities:["Garden Views","Natural Light","Outdoor Setting","Fountain","String Lights","Weather Backup"]},{id:3,name:"Executive Boardroom",description:"Professional meeting space with modern technology and comfortable seating for business presentations.",image:"https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",size:"800 sq ft",amenities:["Video Conferencing","Whiteboard","Coffee Service","High-Speed WiFi","Presentation Screen","Sound System"]}]}catch(e){return console.error("Error fetching venues:",e),[]}},M5=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{icon:"🎤",name:"Entertainment",description:"Professional DJs, live bands, and performers for your special event",price:"Starting at ₹500"},{icon:"📸",name:"Photography",description:"Professional photography and videography services to capture your memories",price:"Starting at ₹300"},{icon:"🍽️",name:"Catering",description:"Delicious catering options from our award-winning culinary team",price:"Starting at ₹50/person"},{icon:"🎨",name:"Decorations",description:"Beautiful floral arrangements and themed decorations",price:"Starting at ₹200"}]}catch(e){return console.error("Error fetching event services:",e),[]}},F5=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{icon:"💒",name:"Complete Wedding Package",description:"Everything you need for your perfect wedding day, from ceremony to reception",price:2500,includes:["Venue Rental","Catering","Photography","DJ","Decorations","Wedding Cake"]},{icon:"💼",name:"Corporate Meeting Package",description:"Professional setup for business meetings and conferences",price:800,includes:["Meeting Room","AV Equipment","Coffee Service","Lunch","Notebooks","Parking"]},{icon:"🎉",name:"Birthday Celebration Package",description:"Fun-filled birthday party with entertainment and decorations",price:600,includes:["Party Room","Entertainment","Birthday Cake","Decorations","Party Favors","Games"]}]}catch(e){return console.error("Error fetching event packages:",e),[]}},I5=async()=>{try{const[e,t,r,i]=await Promise.all([A5(),O5(),M5(),F5()]);return{eventTypes:e,venues:t,eventServices:r,eventPackages:i}}catch(e){return console.error("Error fetching events data:",e),{eventTypes:[],venues:[],eventServices:[],eventPackages:[]}}},rl=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,nl=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="events-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23events-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`,il=u.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,al=u.p`
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,B5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,L5=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(102, 126, 234, 0.15);
  }
`,_5=u.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .capacity {
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    background: rgba(255, 255, 255, 0.9);
    padding: var(--space-xs) var(--space-sm);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    .icon {
      color: #667eea;
    }
  }
`,$5=u.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .event-type {
    color: #667eea;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--space-md);
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);

    .feature {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: #555;
      font-size: 0.9rem;

      .icon {
        color: #667eea;
        font-size: 1.1rem;
      }
    }
  }
`,H5=u.div`
  margin-bottom: var(--space-3xl);
`,U5=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,V5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,W5=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(102, 126, 234, 0.15);
  }
`,G5=u.div`
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .size {
    position: absolute;
    bottom: var(--space-lg);
    left: var(--space-lg);
    background: rgba(102, 126, 234, 0.9);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
  }
`,q5=u.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .amenities {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);

    .amenity {
      background: rgba(102, 126, 234, 0.1);
      color: #667eea;
      padding: var(--space-xs) var(--space-sm);
      border-radius: 15px;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`,Y5=u.div`
  margin-bottom: var(--space-3xl);
`,Q5=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,J5=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,K5=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .service-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
    display: block;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .service-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .service-price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #667eea;
  }
`,X5=u.div`
  margin-bottom: var(--space-3xl);
`,Z5=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,ej=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,tj=u.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: var(--space-2xl);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="package-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23package-pattern)"/></svg>');
    opacity: 0.3;
  }

  .package-icon {
    font-size: 4rem;
    margin-bottom: var(--space-md);
    position: relative;
    z-index: 1;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-sm);
    position: relative;
    z-index: 1;
  }

  .package-description {
    margin-bottom: var(--space-lg);
    opacity: 0.9;
    line-height: 1.5;
    position: relative;
    z-index: 1;
  }

  .package-price {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: var(--space-lg);
    position: relative;
    z-index: 1;

    .currency {
      font-size: 1.5rem;
      margin-right: var(--space-xs);
    }
  }
`,rj=u.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`,nj=u.h2`
  color: #333;
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,ij=u.p`
  color: #666;
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`;function aj(){const[e,t]=j.useState({eventTypes:[],venues:[],eventServices:[],eventPackages:[]}),[r,i]=j.useState(!0),[a,o]=j.useState(null),[s,c]=j.useState(null);return j.useEffect(()=>{(async()=>{try{i(!0);const d=await I5();t(d)}catch(d){o("Failed to load events information. Please try again later."),console.error("Error fetching events data:",d)}finally{i(!1)}})()},[]),r?n.jsxs(rl,{children:[n.jsxs(nl,{"data-aos":"fade-up",children:[n.jsx(il,{children:"Event Planning & Hosting"}),n.jsx(al,{children:"Create unforgettable memories with our comprehensive event planning services. From intimate gatherings to grand celebrations, we make every moment special."})]}),n.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading events..."})]}):a?n.jsxs(rl,{children:[n.jsxs(nl,{"data-aos":"fade-up",children:[n.jsx(il,{children:"Event Planning & Hosting"}),n.jsx(al,{children:"Create unforgettable memories with our comprehensive event planning services. From intimate gatherings to grand celebrations, we make every moment special."})]}),n.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"red"},children:a})]}):n.jsxs(rl,{children:[n.jsxs(nl,{"data-aos":"fade-up",children:[n.jsx(il,{children:"Event Planning & Hosting"}),n.jsx(al,{children:"Create unforgettable memories with our comprehensive event planning services. From intimate gatherings to grand celebrations, we make every moment special."})]}),n.jsx(B5,{children:(e.eventTypes||[]).map((l,d)=>n.jsxs(L5,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx(_5,{src:l.image,children:n.jsxs("div",{className:"capacity",children:[n.jsx("span",{className:"icon",children:"👥"}),l.capacity]})}),n.jsxs($5,{children:[n.jsx("h3",{children:l.name}),n.jsx("div",{className:"event-type",children:l.type}),n.jsx("div",{className:"description",children:l.description}),n.jsx("div",{className:"features",children:(l.features||[]).map((p,m)=>n.jsxs("div",{className:"feature",children:[n.jsx("span",{className:"icon",children:p.icon}),p.text]},m))}),n.jsx(B,{onClick:()=>c(l),style:{width:"100%"},children:"Learn More"})]})]},l.id))}),n.jsxs(H5,{children:[n.jsx(U5,{"data-aos":"fade-up",children:"Our Venues"}),n.jsx(V5,{children:(e.venues||[]).map((l,d)=>n.jsxs(W5,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx(G5,{src:l.image,children:n.jsx("div",{className:"size",children:l.size})}),n.jsxs(q5,{children:[n.jsx("h3",{children:l.name}),n.jsx("div",{className:"description",children:l.description}),n.jsx("div",{className:"amenities",children:(l.amenities||[]).map((p,m)=>n.jsx("span",{className:"amenity",children:p},m))}),n.jsx(B,{variant:"outline",style:{width:"100%"},children:"View Details"})]})]},l.id))})]}),n.jsxs(Y5,{children:[n.jsx(Q5,{"data-aos":"fade-up",children:"Event Services"}),n.jsx(J5,{children:(e.eventServices||[]).map((l,d)=>n.jsxs(K5,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"service-icon",children:l.icon}),n.jsx("h3",{children:l.name}),n.jsx("div",{className:"service-description",children:l.description}),n.jsx("div",{className:"service-price",children:l.price}),n.jsx(B,{variant:"outline",children:"Book Service"})]},l.name))})]}),n.jsxs(X5,{children:[n.jsx(Z5,{"data-aos":"fade-up",children:"Event Packages"}),n.jsx(ej,{children:(e.eventPackages||[]).map((l,d)=>n.jsxs(tj,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"package-icon",children:l.icon}),n.jsx("h3",{children:l.name}),n.jsx("div",{className:"package-description",children:l.description}),n.jsxs("div",{className:"package-price",children:[n.jsx("span",{className:"currency",children:"₹"}),l.price]}),n.jsx(B,{style:{background:"white",color:"#667eea"},children:"Book Package"})]},l.name))})]}),n.jsxs(rj,{"data-aos":"fade-up",children:[n.jsx(nj,{children:"Ready to Plan Your Event?"}),n.jsx(ij,{children:"Contact our event planning team today to start creating your perfect celebration. We'll handle every detail so you can focus on making memories."}),n.jsx(B,{size:"large",children:"Contact Event Planner"})]})]})}const oj=async()=>{try{return(await It.get("https://dummyjson.com/posts?limit=15")).data.posts.map((r,i)=>({id:r.id,name:`${r.title} Entertainment`,description:r.body.substring(0,100)+"...",image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",activities:["Live Music","Cultural Shows","Dance Performances","Comedy Nights"]}))}catch(e){return console.error("Error fetching entertainment categories from DummyJSON API:",e),[{id:1,name:"Live Music",description:"Enjoy live performances from talented musicians across various genres.",image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",activities:["Jazz Nights","Acoustic Sessions","Rock Concerts","Classical Music"]}]}},sj=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{id:1,name:"Jazz Night with The Blue Notes",date:"Friday, March 15",description:"An intimate evening of smooth jazz featuring the renowned Blue Notes quartet.",image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",time:"8:00 PM",price:"₹35",details:[{icon:"🕐",text:"2-hour show"},{icon:"🍸",text:"Drinks included"},{icon:"🎵",text:"Live performance"},{icon:"📍",text:"Sky Lounge"}]},{id:2,name:"Comedy Central Presents",date:"Saturday, March 16",description:"Hilarious stand-up comedy featuring three top comedians from Comedy Central.",image:"https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",time:"9:00 PM",price:"₹25",details:[{icon:"🕐",text:"90-minute show"},{icon:"🍺",text:"Bar service"},{icon:"🎤",text:"3 comedians"},{icon:"📍",text:"Garden Terrace"}]},{id:3,name:"Contemporary Dance Showcase",date:"Sunday, March 17",description:"Modern dance performances by the acclaimed City Dance Company.",image:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",time:"7:00 PM",price:"₹40",details:[{icon:"🕐",text:"75-minute show"},{icon:"🍷",text:"Wine reception"},{icon:"💃",text:"5 performances"},{icon:"📍",text:"Grand Ballroom"}]}]}catch(e){return console.error("Error fetching shows:",e),[]}},lj=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{icon:"🎨",name:"Art Workshop",description:"Learn painting and drawing techniques from professional artists.",duration:"2 hours"},{icon:"🍳",name:"Cooking Class",description:"Master the art of Italian cuisine with our expert chefs.",duration:"3 hours"},{icon:"🎵",name:"Music Jam Session",description:"Join fellow musicians for an impromptu jam session.",duration:"1.5 hours"},{icon:"🧘",name:"Yoga Session",description:"Relax and rejuvenate with guided yoga and meditation.",duration:"1 hour"}]}catch(e){return console.error("Error fetching activities:",e),[]}},cj=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{day:"Monday",events:[{time:"7:00 PM",name:"Jazz Night"},{time:"9:00 PM",name:"Comedy Show"}]},{day:"Tuesday",events:[{time:"8:00 PM",name:"Dance Performance"},{time:"10:00 PM",name:"Live Music"}]},{day:"Wednesday",events:[{time:"6:00 PM",name:"Wine Tasting"},{time:"8:00 PM",name:"Theater Play"}]},{day:"Thursday",events:[{time:"7:00 PM",name:"Karaoke Night"},{time:"9:00 PM",name:"Trivia Night"}]},{day:"Friday",events:[{time:"8:00 PM",name:"Rock Concert"},{time:"10:00 PM",name:"DJ Night"}]},{day:"Saturday",events:[{time:"7:00 PM",name:"Broadway Show"},{time:"9:00 PM",name:"Magic Show"}]},{day:"Sunday",events:[{time:"6:00 PM",name:"Family Movie Night"},{time:"8:00 PM",name:"Acoustic Music"}]}]}catch(e){return console.error("Error fetching weekly schedule:",e),[]}},dj=async()=>{try{const[e,t,r,i]=await Promise.all([oj(),sj(),lj(),cj()]);return{categories:e,shows:t,activities:r,schedule:i}}catch(e){return console.error("Error fetching entertainment data:",e),{categories:[],shows:[],activities:[],schedule:[]}}},ol=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,sl=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="entertainment-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23entertainment-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`,ll=u.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,cl=u.p`
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,uj=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,pj=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 154, 158, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(255, 154, 158, 0.15);
  }
`,mj=u.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .category-name {
    position: absolute;
    bottom: var(--space-lg);
    left: var(--space-lg);
    background: rgba(255, 154, 158, 0.9);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 25px;
    font-size: 1.125rem;
    font-weight: 600;
  }
`,fj=u.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .activities {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);

    .activity {
      background: rgba(255, 154, 158, 0.1);
      color: #ff9a9e;
      padding: var(--space-xs) var(--space-sm);
      border-radius: 15px;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`,hj=u.div`
  margin-bottom: var(--space-3xl);
`,gj=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,xj=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,vj=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 154, 158, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(255, 154, 158, 0.15);
  }
`,yj=u.div`
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .show-time {
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    background: rgba(255, 154, 158, 0.9);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    .icon {
      font-size: 1rem;
    }
  }

  .show-price {
    position: absolute;
    bottom: var(--space-lg);
    right: var(--space-lg);
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    padding: var(--space-sm) var(--space-md);
    border-radius: 20px;
    font-size: 1.125rem;
    font-weight: 600;
  }
`,wj=u.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .show-date {
    color: #ff9a9e;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--space-md);
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);

    .detail {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: #555;
      font-size: 0.9rem;

      .icon {
        color: #ff9a9e;
        font-size: 1.1rem;
      }
    }
  }
`,bj=u.div`
  margin-bottom: var(--space-3xl);
`,jj=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,kj=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,Sj=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .activity-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
    display: block;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .activity-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .activity-duration {
    color: #ff9a9e;
    font-weight: 500;
    margin-bottom: var(--space-lg);
  }
`,Cj=u.div`
  margin-bottom: var(--space-3xl);
`,Ej=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,zj=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,Pj=u.div`
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  border-radius: 16px;
  padding: var(--space-2xl);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="schedule-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23schedule-pattern)"/></svg>');
    opacity: 0.3;
  }

  .schedule-day {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--space-sm);
    position: relative;
    z-index: 1;
  }

  .schedule-events {
    position: relative;
    z-index: 1;

    .event {
      margin-bottom: var(--space-md);
      padding: var(--space-sm);
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;

      .event-time {
        font-size: 0.875rem;
        opacity: 0.8;
        margin-bottom: var(--space-xs);
      }

      .event-name {
        font-weight: 500;
      }
    }
  }
`,Nj=u.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`,Dj=u.h2`
  color: #333;
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,Rj=u.p`
  color: #666;
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`;function Tj(){const[e,t]=j.useState({categories:[],shows:[],activities:[],schedule:[]}),[r,i]=j.useState(!0),[a,o]=j.useState(null),[s,c]=j.useState(null);return j.useEffect(()=>{(async()=>{try{i(!0);const d=await dj();t(d)}catch(d){o("Failed to load entertainment data. Please try again later."),console.error("Error fetching entertainment data:",d)}finally{i(!1)}})()},[]),r?n.jsxs(ol,{children:[n.jsxs(sl,{"data-aos":"fade-up",children:[n.jsx(ll,{children:"Entertainment & Nightlife"}),n.jsx(cl,{children:"Experience unforgettable evenings with our diverse entertainment options, from live music and comedy shows to interactive activities and special events."})]}),n.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#666"},children:"Loading entertainment..."})]}):a?n.jsxs(ol,{children:[n.jsxs(sl,{"data-aos":"fade-up",children:[n.jsx(ll,{children:"Entertainment & Nightlife"}),n.jsx(cl,{children:"Experience unforgettable evenings with our diverse entertainment options, from live music and comedy shows to interactive activities and special events."})]}),n.jsx("div",{style:{textAlign:"center",padding:"4rem",color:"#dc3545"},children:a})]}):n.jsxs(ol,{children:[n.jsxs(sl,{"data-aos":"fade-up",children:[n.jsx(ll,{children:"Entertainment & Nightlife"}),n.jsx(cl,{children:"Experience unforgettable evenings with our diverse entertainment options, from live music and comedy shows to interactive activities and special events."})]}),n.jsx(uj,{children:(e.categories||[]).map((l,d)=>n.jsxs(pj,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx(mj,{src:l.image,children:n.jsx("div",{className:"category-name",children:l.name})}),n.jsxs(fj,{children:[n.jsx("h3",{children:l.name}),n.jsx("div",{className:"description",children:l.description}),n.jsx("div",{className:"activities",children:(l.activities||[]).map((p,m)=>n.jsx("span",{className:"activity",children:p},m))}),n.jsx(B,{onClick:()=>c(l),style:{width:"100%"},children:"View Schedule"})]})]},l.id))}),n.jsxs(hj,{children:[n.jsx(gj,{"data-aos":"fade-up",children:"Featured Shows"}),n.jsx(xj,{children:(e.shows||[]).map((l,d)=>n.jsxs(vj,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsxs(yj,{src:l.image,children:[n.jsxs("div",{className:"show-time",children:[n.jsx("span",{className:"icon",children:"🕐"}),l.time]}),n.jsx("div",{className:"show-price",children:l.price})]}),n.jsxs(wj,{children:[n.jsx("h3",{children:l.name}),n.jsx("div",{className:"show-date",children:l.date}),n.jsx("div",{className:"description",children:l.description}),n.jsx("div",{className:"details",children:(l.details||[]).map((p,m)=>n.jsxs("div",{className:"detail",children:[n.jsx("span",{className:"icon",children:p.icon}),p.text]},m))}),n.jsx(B,{style:{width:"100%"},children:"Get Tickets"})]})]},l.id))})]}),n.jsxs(bj,{children:[n.jsx(jj,{"data-aos":"fade-up",children:"Weekly Activities"}),n.jsx(kj,{children:(e.activities||[]).map((l,d)=>n.jsxs(Sj,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"activity-icon",children:l.icon}),n.jsx("h3",{children:l.name}),n.jsx("div",{className:"activity-description",children:l.description}),n.jsx("div",{className:"activity-duration",children:l.duration}),n.jsx(B,{variant:"outline",children:"Join Activity"})]},l.name))})]}),n.jsxs(Cj,{children:[n.jsx(Ej,{"data-aos":"fade-up",children:"Weekly Entertainment Schedule"}),n.jsx(zj,{children:(e.schedule||[]).map((l,d)=>n.jsxs(Pj,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"schedule-day",children:l.day}),n.jsx("div",{className:"schedule-events",children:(l.events||[]).map((p,m)=>n.jsxs("div",{className:"event",children:[n.jsx("div",{className:"event-time",children:p.time}),n.jsx("div",{className:"event-name",children:p.name})]},m))})]},l.day))})]}),n.jsxs(Nj,{"data-aos":"fade-up",children:[n.jsx(Dj,{children:"Ready for Some Entertainment?"}),n.jsx(Rj,{children:"Book your tickets now and experience the best entertainment our hotel has to offer. From live music to comedy shows, there's something for everyone."}),n.jsx(B,{size:"large",children:"View All Events"})]})]})}const Aj=async()=>{try{return await new Promise(e=>setTimeout(e,500)),[{id:1,name:"Airport Transfer",type:"Transportation",description:"Comfortable and reliable airport pickup and drop-off service with professional drivers.",image:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",features:[{icon:"🚗",text:"Luxury vehicles"},{icon:"👨‍✈️",text:"Professional drivers"},{icon:"📱",text:"Real-time tracking"},{icon:"🛄",text:"Luggage assistance"}],price:"Starting at ₹50"},{id:2,name:"City Tours",type:"Sightseeing",description:"Guided tours of the city's most famous landmarks and hidden gems with expert local guides.",image:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",features:[{icon:"🗺️",text:"Expert guides"},{icon:"📸",text:"Photo stops"},{icon:"🍽️",text:"Local cuisine"},{icon:"🎟️",text:"Skip-the-line access"}],price:"Starting at ₹75"},{id:3,name:"Car Rental",type:"Transportation",description:"Premium car rental service with a wide selection of vehicles from economy to luxury.",image:"https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",features:[{icon:"🚙",text:"Wide selection"},{icon:"⛽",text:"Full insurance"},{icon:"🗺️",text:"GPS navigation"},{icon:"🛡️",text:"24/7 support"}],price:"Starting at ₹35/day"},{id:4,name:"Travel Insurance",type:"Insurance",description:"Comprehensive travel insurance covering medical emergencies, trip cancellation, and lost luggage.",image:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",features:[{icon:"🛡️",text:"Medical coverage"},{icon:"✈️",text:"Trip protection"},{icon:"🛄",text:"Lost luggage"},{icon:"📞",text:"24/7 assistance"}],price:"Starting at ₹25"}]}catch(e){return console.error("Error fetching travel services:",e),[]}},Oj=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{name:"Historic Downtown",description:"Explore the rich history and architecture of our city's historic downtown district.",image:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",highlights:["Historic Buildings","Museums","Shopping","Dining","Architecture Tours"]},{name:"Waterfront District",description:"Stroll along the scenic waterfront with beautiful views and fresh seafood restaurants.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",highlights:["Harbor Views","Seafood","Parks","Boat Tours","Sunset Watching"]},{name:"Cultural Quarter",description:"Immerse yourself in the local arts and culture scene with galleries and theaters.",image:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",highlights:["Art Galleries","Theaters","Live Music","Festivals","Street Art"]}]}catch(e){return console.error("Error fetching destinations:",e),[]}},Mj=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{icon:"🏙️",name:"City Explorer Package",description:"Complete city exploration package with airport transfer, guided tours, and premium experiences",price:299,duration:"3 days",includes:["Airport Transfer","City Tour","Museum Tickets","Local Dining","Hotel Booking"]},{icon:"🏖️",name:"Beach Getaway Package",description:"Relaxing beach vacation with transportation, accommodation, and leisure activities",price:499,duration:"5 days",includes:["Airport Transfer","Beach Resort","Spa Treatment","Water Sports","Meals Included"]},{icon:"🎭",name:"Cultural Experience Package",description:"Immersive cultural experience with guided tours, shows, and authentic local experiences",price:399,duration:"4 days",includes:["Cultural Tours","Show Tickets","Local Workshops","Traditional Dining","Expert Guides"]}]}catch(e){return console.error("Error fetching travel packages:",e),[]}},Fj=async()=>{try{const[e,t,r]=await Promise.all([Aj(),Oj(),Mj()]);return{travelServices:e,destinations:t,travelPackages:r}}catch(e){return console.error("Error fetching travel data:",e),{travelServices:[],destinations:[],travelPackages:[]}}},dl=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,Ij=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="travel-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23travel-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`,Bj=u.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,Lj=u.p`
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,_j=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,$j=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(168, 237, 234, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(168, 237, 234, 0.15);
  }
`,Hj=u.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .service-type {
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    background: rgba(168, 237, 234, 0.9);
    color: #333;
    padding: var(--space-sm) var(--space-md);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`,Uj=u.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);

    .feature {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: #555;
      font-size: 0.9rem;

      .icon {
        color: #a8edea;
        font-size: 1.1rem;
      }
    }
  }

  .price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #a8edea;
    margin-bottom: var(--space-lg);
  }
`,Vj=u.div`
  margin-bottom: var(--space-3xl);
`,Wj=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,Gj=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,qj=u.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;

  .destination-image {
    height: 200px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${e=>e.src});
    background-size: cover;
    background-position: center;
    position: relative;

    .destination-name {
      position: absolute;
      bottom: var(--space-lg);
      left: var(--space-lg);
      background: rgba(168, 237, 234, 0.9);
      color: #333;
      padding: var(--space-sm) var(--space-md);
      border-radius: 20px;
      font-size: 1.125rem;
      font-weight: 600;
    }
  }

  .destination-info {
    padding: var(--space-xl);

    .destination-description {
      color: #666;
      line-height: 1.5;
      margin-bottom: var(--space-lg);
    }

    .destination-highlights {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
      margin-bottom: var(--space-lg);

      .highlight {
        background: rgba(168, 237, 234, 0.1);
        color: #a8edea;
        padding: var(--space-xs) var(--space-sm);
        border-radius: 15px;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }
`,Yj=u.div`
  margin-bottom: var(--space-3xl);
`,Qj=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,Jj=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,Kj=u.div`
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  border-radius: 16px;
  padding: var(--space-2xl);
  color: #333;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="package-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23package-pattern)"/></svg>');
    opacity: 0.3;
  }

  .package-icon {
    font-size: 4rem;
    margin-bottom: var(--space-md);
    position: relative;
    z-index: 1;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-sm);
    position: relative;
    z-index: 1;
  }

  .package-description {
    margin-bottom: var(--space-lg);
    opacity: 0.8;
    line-height: 1.5;
    position: relative;
    z-index: 1;
  }

  .package-price {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: var(--space-lg);
    position: relative;
    z-index: 1;

    .currency {
      font-size: 1.5rem;
      margin-right: var(--space-xs);
    }
  }

  .package-duration {
    margin-bottom: var(--space-xl);
    opacity: 0.7;
    position: relative;
    z-index: 1;
  }
`,Xj=u.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`,Zj=u.h2`
  color: #333;
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,e6=u.p`
  color: #666;
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`;function t6(){const[e,t]=j.useState({travelServices:[],destinations:[],travelPackages:[]}),[r,i]=j.useState(!0),[a,o]=j.useState(null),[s,c]=j.useState(null);return j.useEffect(()=>{(async()=>{try{i(!0);const d=await Fj();t(d)}catch(d){o("Failed to load travel services"),console.error("Error fetching travel data:",d)}finally{i(!1)}})()},[]),r?n.jsx(dl,{children:n.jsx("div",{style:{textAlign:"center",padding:"var(--space-3xl)"},children:"Loading travel services..."})}):a?n.jsx(dl,{children:n.jsx("div",{style:{textAlign:"center",padding:"var(--space-3xl)",color:"red"},children:a})}):n.jsxs(dl,{children:[n.jsxs(Ij,{"data-aos":"fade-up",children:[n.jsx(Bj,{children:"Travel Services"}),n.jsx(Lj,{children:"Make your journey seamless with our comprehensive travel services. From airport transfers to guided tours, we ensure every aspect of your trip is taken care of."})]}),n.jsx(_j,{children:e.travelServices.map((l,d)=>n.jsxs($j,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx(Hj,{src:l.image,children:n.jsx("div",{className:"service-type",children:l.type})}),n.jsxs(Uj,{children:[n.jsx("h3",{children:l.name}),n.jsx("div",{className:"description",children:l.description}),n.jsx("div",{className:"features",children:l.features.map((p,m)=>n.jsxs("div",{className:"feature",children:[n.jsx("span",{className:"icon",children:p.icon}),p.text]},m))}),n.jsx("div",{className:"price",children:l.price}),n.jsx(B,{onClick:()=>c(l),style:{width:"100%"},children:"Book Service"})]})]},l.id))}),n.jsxs(Vj,{children:[n.jsx(Wj,{"data-aos":"fade-up",children:"Popular Destinations"}),n.jsx(Gj,{children:e.destinations.map((l,d)=>n.jsxs(qj,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"destination-image",style:{backgroundImage:`url(${l.image})`},children:n.jsx("div",{className:"destination-name",children:l.name})}),n.jsxs("div",{className:"destination-info",children:[n.jsx("div",{className:"destination-description",children:l.description}),n.jsx("div",{className:"destination-highlights",children:l.highlights.map((p,m)=>n.jsx("span",{className:"highlight",children:p},m))}),n.jsx(B,{variant:"outline",style:{width:"100%"},children:"Explore Destination"})]})]},l.name))})]}),n.jsxs(Yj,{children:[n.jsx(Qj,{"data-aos":"fade-up",children:"Travel Packages"}),n.jsx(Jj,{children:e.travelPackages.map((l,d)=>n.jsxs(Kj,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"package-icon",children:l.icon}),n.jsx("h3",{children:l.name}),n.jsx("div",{className:"package-description",children:l.description}),n.jsxs("div",{className:"package-price",children:[n.jsx("span",{className:"currency",children:"₹"}),l.price]}),n.jsxs("div",{className:"package-duration",children:["Duration: ",l.duration]}),n.jsx(B,{style:{background:"white",color:"#a8edea"},children:"Book Package"})]},l.name))})]}),n.jsxs(Xj,{"data-aos":"fade-up",children:[n.jsx(Zj,{children:"Ready to Plan Your Journey?"}),n.jsx(e6,{children:"Contact our travel specialists today to customize your perfect travel experience. We'll handle all the details so you can focus on creating memories."}),n.jsx(B,{size:"large",children:"Contact Travel Services"})]})]})}const r6=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,n6=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="loyalty-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23loyalty-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`,i6=u.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,a6=u.p`
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,o6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,s6=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 3px solid ${e=>{switch(e.tier){case"gold":return"#FFD700";case"platinum":return"#E5E4E2";case"diamond":return"#B9F2FF";default:return"#E9ECEF"}}};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>{switch(e.tier){case"gold":return"linear-gradient(135deg, #FFF8DC 0%, #F0E68C 100%)";case"platinum":return"linear-gradient(135deg, #F5F7FA 0%, #C0C0C0 100%)";case"diamond":return"linear-gradient(135deg, #E0FFFF 0%, #87CEEB 100%)";default:return"linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)"}}};
    opacity: 0.1;
    z-index: 0;
  }

  .tier-icon {
    font-size: 4rem;
    margin-bottom: var(--space-md);
    position: relative;
    z-index: 1;
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: var(--space-sm);
    position: relative;
    z-index: 1;
    color: ${e=>{switch(e.tier){case"gold":return"#DAA520";case"platinum":return"#708090";case"diamond":return"#1E90FF";default:return"#333"}}};
  }

  .tier-points {
    font-size: 1.125rem;
    margin-bottom: var(--space-lg);
    position: relative;
    z-index: 1;
    color: #666;
  }

  .tier-benefits {
    text-align: left;
    margin-bottom: var(--space-xl);
    position: relative;
    z-index: 1;

    .benefit {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      margin-bottom: var(--space-sm);
      color: #555;

      .icon {
        color: ${e=>{switch(e.tier){case"gold":return"#FFD700";case"platinum":return"#E5E4E2";case"diamond":return"#B9F2FF";default:return"#28a745"}}};
        font-size: 1.1rem;
      }
    }
  }
`,l6=u.div`
  margin-bottom: var(--space-3xl);
`,c6=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,d6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,u6=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .benefit-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
    display: block;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .benefit-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .benefit-value {
    font-size: 1.125rem;
    font-weight: bold;
    color: #ffecd2;
  }
`,p6=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin-bottom: var(--space-3xl);
  border: 1px solid rgba(255, 236, 210, 0.2);
`,m6=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,f6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    label {
      font-weight: 600;
      color: #333;
    }

    input, select {
      padding: var(--space-md);
      border: 2px solid #e9ecef;
      border-radius: 8px;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: #ffecd2;
        box-shadow: 0 0 0 3px rgba(255, 236, 210, 0.1);
      }
    }
  }
`,h6=u.div`
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 12px;
  padding: var(--space-xl);
  text-align: center;
  color: #333;

  .result-title {
    font-size: 1.25rem;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .result-points {
    font-size: 2rem;
    font-weight: bold;
    color: #DAA520;
    margin-bottom: var(--space-sm);
  }

  .result-description {
    color: #666;
    line-height: 1.5;
  }
`,g6=u.div`
  margin-bottom: var(--space-3xl);
`,x6=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,v6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,y6=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .redeem-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
    display: block;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .redeem-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .redeem-points {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffecd2;
    margin-bottom: var(--space-lg);
  }
`,w6=u.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`,b6=u.h2`
  color: #333;
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,j6=u.p`
  color: #666;
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`,k6=[{tier:"silver",name:"Silver Member",icon:"🥈",points:"0 - 999 points",benefits:[{icon:"🏨",text:"10% off room rates"},{icon:"🍽️",text:"5% off dining"},{icon:"🧖",text:"Priority spa booking"},{icon:"🎁",text:"Birthday surprise"}]},{tier:"gold",name:"Gold Member",icon:"🥇",points:"1,000 - 4,999 points",benefits:[{icon:"🏨",text:"20% off room rates"},{icon:"🍽️",text:"15% off dining"},{icon:"🧖",text:"Free spa treatment monthly"},{icon:"✈️",text:"Airport transfer discount"},{icon:"🎁",text:"Welcome amenity"},{icon:"📞",text:"Dedicated concierge"}]},{tier:"platinum",name:"Platinum Member",icon:"💎",points:"5,000 - 9,999 points",benefits:[{icon:"🏨",text:"30% off room rates"},{icon:"🍽️",text:"25% off dining"},{icon:"🧖",text:"Two free spa treatments monthly"},{icon:"✈️",text:"Free airport transfer"},{icon:"🍾",text:"Complimentary champagne"},{icon:"🅿️",text:"Free valet parking"},{icon:"🎁",text:"Exclusive member events"},{icon:"📞",text:"24/7 personal assistant"}]},{tier:"diamond",name:"Diamond Elite",icon:"👑",points:"10,000+ points",benefits:[{icon:"🏨",text:"40% off room rates"},{icon:"🍽️",text:"35% off dining"},{icon:"🧖",text:"Unlimited free spa treatments"},{icon:"✈️",text:"Private car service"},{icon:"🍾",text:"Premium welcome package"},{icon:"🅿️",text:"Complimentary everything"},{icon:"🎁",text:"VIP exclusive events"},{icon:"📞",text:"Personal lifestyle manager"},{icon:"🏆",text:"Suite upgrades guaranteed"}]}],S6=[{icon:"💰",name:"Earn Points",description:"Earn points on every stay, dining experience, and service used at our hotel",value:"Up to 10x points"},{icon:"🎁",name:"Exclusive Rewards",description:"Redeem points for free nights, dining credits, spa treatments, and more",value:"1000+ rewards"},{icon:"⚡",name:"Instant Benefits",description:"Enjoy immediate perks like room upgrades, late checkout, and priority service",value:"Instant access"},{icon:"👥",name:"Family Sharing",description:"Share your membership benefits with family members and earn bonus points",value:"Up to 4 members"}],C6=[{icon:"🏨",name:"Free Nights",description:"Redeem points for complimentary hotel stays at any of our properties",points:"10,000 points"},{icon:"🍽️",name:"Dining Credits",description:"Use points for dining experiences at our restaurants and bars",points:"2,500 points"},{icon:"🧖",name:"Spa Treatments",description:"Exchange points for relaxing spa treatments and wellness services",points:"5,000 points"},{icon:"✈️",name:"Travel Services",description:"Book airport transfers, tours, and other travel services with points",points:"3,000 points"}];function E6(){const[e,t]=j.useState({nights:"",dining:"",spa:"",other:""}),[r,i]=j.useState(0),a=s=>{const{name:c,value:l}=s.target;t(d=>({...d,[c]:l}))},o=()=>{const s=parseInt(e.nights)||0,c=parseInt(e.dining)||0,l=parseInt(e.spa)||0,d=parseInt(e.other)||0,p=s*500+c*100+l*200+d*50;i(p)};return n.jsxs(r6,{children:[n.jsxs(n6,{"data-aos":"fade-up",children:[n.jsx(i6,{children:"Loyalty Program"}),n.jsx(a6,{children:"Join our exclusive loyalty program and unlock a world of premium benefits, exclusive rewards, and personalized experiences designed just for you."})]}),n.jsx(o6,{children:k6.map((s,c)=>n.jsxs(s6,{tier:s.tier,"data-aos":"fade-up","data-aos-delay":100+c*100,children:[n.jsx("div",{className:"tier-icon",children:s.icon}),n.jsx("h3",{children:s.name}),n.jsx("div",{className:"tier-points",children:s.points}),n.jsx("div",{className:"tier-benefits",children:s.benefits.map((l,d)=>n.jsxs("div",{className:"benefit",children:[n.jsx("span",{className:"icon",children:l.icon}),l.text]},d))}),n.jsx(B,{style:{width:"100%"},children:s.tier==="silver"?"Join Now":"Upgrade"})]},s.tier))}),n.jsxs(l6,{children:[n.jsx(c6,{"data-aos":"fade-up",children:"Program Benefits"}),n.jsx(d6,{children:S6.map((s,c)=>n.jsxs(u6,{"data-aos":"fade-up","data-aos-delay":100+c*100,children:[n.jsx("div",{className:"benefit-icon",children:s.icon}),n.jsx("h3",{children:s.name}),n.jsx("div",{className:"benefit-description",children:s.description}),n.jsx("div",{className:"benefit-value",children:s.value})]},s.name))})]}),n.jsxs(p6,{children:[n.jsx(m6,{"data-aos":"fade-up",children:"Points Calculator"}),n.jsxs(f6,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"nights",children:"Hotel Nights"}),n.jsx("input",{type:"number",id:"nights",name:"nights",value:e.nights,onChange:a,placeholder:"Number of nights"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"dining",children:"Dining Spend (₹)"}),n.jsx("input",{type:"number",id:"dining",name:"dining",value:e.dining,onChange:a,placeholder:"Dining amount"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"spa",children:"Spa Treatments"}),n.jsx("input",{type:"number",id:"spa",name:"spa",value:e.spa,onChange:a,placeholder:"Number of treatments"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"other",children:"Other Services (₹)"}),n.jsx("input",{type:"number",id:"other",name:"other",value:e.other,onChange:a,placeholder:"Other services"})]})]}),n.jsx(B,{onClick:o,style:{width:"100%",marginBottom:"var(--space-xl)"},children:"Calculate Points"}),r>0&&n.jsxs(h6,{children:[n.jsx("div",{className:"result-title",children:"Estimated Points Earned"}),n.jsx("div",{className:"result-points",children:r.toLocaleString()}),n.jsx("div",{className:"result-description",children:"Points are calculated based on your planned activities. Actual points may vary based on specific services and promotions."})]})]}),n.jsxs(g6,{children:[n.jsx(x6,{"data-aos":"fade-up",children:"Redeem Your Points"}),n.jsx(v6,{children:C6.map((s,c)=>n.jsxs(y6,{"data-aos":"fade-up","data-aos-delay":100+c*100,children:[n.jsx("div",{className:"redeem-icon",children:s.icon}),n.jsx("h3",{children:s.name}),n.jsx("div",{className:"redeem-description",children:s.description}),n.jsx("div",{className:"redeem-points",children:s.points}),n.jsx(B,{variant:"outline",children:"Redeem Now"})]},s.name))})]}),n.jsxs(w6,{"data-aos":"fade-up",children:[n.jsx(b6,{children:"Start Earning Rewards Today"}),n.jsx(j6,{children:"Join our loyalty program and start earning points immediately. The more you stay with us, the more rewards you'll unlock."}),n.jsx(B,{size:"large",children:"Join Loyalty Program"})]})]})}const z6=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,P6=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="sustainability-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23sustainability-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`,N6=u.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,D6=u.p`
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,R6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
`,T6=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;

  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #28a745;
    margin-bottom: var(--space-sm);
  }

  .stat-label {
    color: #666;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
  }
`,A6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,O6=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(40, 167, 69, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(40, 167, 69, 0.15);
  }
`,M6=u.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;

  .initiative-category {
    position: absolute;
    top: var(--space-lg);
    left: var(--space-lg);
    background: rgba(40, 167, 69, 0.9);
    color: white;
    padding: var(--space-sm) var(--space-md);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`,F6=u.div`
  padding: var(--space-xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
  }

  .description {
    color: #666;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .impact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);

    .impact-item {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: #555;
      font-size: 0.9rem;

      .icon {
        color: #28a745;
        font-size: 1.1rem;
      }
    }
  }

  .progress {
    margin-bottom: var(--space-lg);

    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--space-xs);
      font-size: 0.875rem;
      color: #666;
    }

    .progress-bar {
      height: 8px;
      background: #e9ecef;
      border-radius: 4px;
      overflow: hidden;

      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #28a745, #20c997);
        border-radius: 4px;
        transition: width 0.3s ease;
        width: ${e=>e.progress}%;
      }
    }
  }
`,I6=u.div`
  margin-bottom: var(--space-3xl);
`,B6=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,L6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,_6=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .certification-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
    display: block;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .certification-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .certification-year {
    color: #28a745;
    font-weight: 600;
  }
`,$6=u.div`
  margin-bottom: var(--space-3xl);
`,H6=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,U6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,V6=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .action-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
    display: block;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .action-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-md);
  }

  .action-impact {
    background: rgba(40, 167, 69, 0.1);
    color: #28a745;
    padding: var(--space-xs) var(--space-sm);
    border-radius: 15px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: var(--space-lg);
  }
`,W6=u.div`
  margin-bottom: var(--space-3xl);
`,G6=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,q6=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,Y6=u.div`
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border-radius: 16px;
  padding: var(--space-2xl);
  color: #333;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="goal-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23goal-pattern)"/></svg>');
    opacity: 0.3;
  }

  .goal-icon {
    font-size: 4rem;
    margin-bottom: var(--space-md);
    position: relative;
    z-index: 1;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-sm);
    position: relative;
    z-index: 1;
  }

  .goal-description {
    margin-bottom: var(--space-lg);
    opacity: 0.9;
    line-height: 1.5;
    position: relative;
    z-index: 1;
  }

  .goal-target {
    font-size: 1.25rem;
    font-weight: bold;
    position: relative;
    z-index: 1;
  }

  .goal-progress {
    margin-top: var(--space-lg);
    position: relative;
    z-index: 1;

    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--space-xs);
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .progress-bar {
      height: 8px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      overflow: hidden;

      .progress-fill {
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 4px;
        transition: width 0.3s ease;
        width: ${e=>e.progress}%;
      }
    }
  }
`,Q6=u.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`,J6=u.h2`
  color: #333;
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,K6=u.p`
  color: #666;
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`,X6=[{number:"45%",label:"Energy Saved"},{number:"60%",label:"Water Conserved"},{number:"75%",label:"Waste Recycled"},{number:"100%",label:"Green Certified"}],Z6=[{id:1,name:"Solar Power Installation",category:"Energy",description:"Large-scale solar panel installation to generate clean, renewable energy for the entire hotel.",image:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",impact:[{icon:"⚡",text:"500 kW capacity"},{icon:"🌱",text:"Reduces CO2 by 300 tons/year"}],progress:85},{id:2,name:"Water Conservation Program",category:"Water",description:"Comprehensive water-saving measures including low-flow fixtures and greywater recycling systems.",image:"https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",impact:[{icon:"💧",text:"60% water reduction"},{icon:"🔄",text:"Greywater recycling system"}],progress:92},{id:3,name:"Organic Garden Initiative",category:"Food",description:"On-site organic garden providing fresh, locally-sourced produce for our restaurants.",image:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",impact:[{icon:"🥕",text:"5,000 sq ft garden"},{icon:"🏪",text:"Supplies 40% of restaurant produce"}],progress:78},{id:4,name:"Electric Vehicle Charging",category:"Transportation",description:"Free electric vehicle charging stations for guests and staff to promote sustainable transportation.",image:"https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",impact:[{icon:"🔌",text:"20 charging stations"},{icon:"🌱",text:"Reduces transport emissions"}],progress:95}],e4=[{icon:"🏆",name:"LEED Platinum",description:"Leadership in Energy and Environmental Design - the highest level of green building certification",year:"2022"},{icon:"🌍",name:"Green Key Global",description:"International eco-label for tourism facilities committed to sustainable practices",year:"2021"},{icon:"♻️",name:"Zero Waste Certified",description:"Recognition for achieving zero waste goals through comprehensive recycling programs",year:"2023"},{icon:"💧",name:"WaterSense Partner",description:"EPA certification for water-efficient practices and technologies",year:"2020"}],t4=[{icon:"🛏️",name:"Opt-out of Daily Cleaning",description:"Choose to skip daily room cleaning to save water and energy",impact:"Saves 50L water per day"},{icon:"♻️",name:"Recycling Program",description:"Participate in our comprehensive recycling program for all waste",impact:"Diverts 90% from landfill"},{icon:"🚰",name:"Reusable Water Bottles",description:"Use our filtered water stations instead of single-use plastic bottles",impact:"Eliminates plastic waste"},{icon:"🌱",name:"Plant a Tree",description:"Contribute to our reforestation program during your stay",impact:"Carbon offset program"}],r4=[{icon:"🌱",name:"Carbon Neutral by 2025",description:"Achieve net-zero carbon emissions through renewable energy and efficiency measures",target:"100% renewable energy",progress:75},{icon:"💧",name:"Zero Water Waste by 2024",description:"Implement complete water recycling and conservation systems",target:"100% water recycled",progress:85},{icon:"♻️",name:"100% Sustainable Sourcing by 2026",description:"Source all materials and products from sustainable, ethical suppliers",target:"100% certified suppliers",progress:60}];function n4(){const[e,t]=j.useState(null);return n.jsxs(z6,{children:[n.jsxs(P6,{"data-aos":"fade-up",children:[n.jsx(N6,{children:"Our Commitment to Sustainability"}),n.jsx(D6,{children:"We're dedicated to protecting our planet while providing exceptional hospitality. Discover our comprehensive sustainability initiatives and how we're making a positive impact."})]}),n.jsx(R6,{children:X6.map((r,i)=>n.jsxs(T6,{"data-aos":"fade-up","data-aos-delay":100+i*100,children:[n.jsx("div",{className:"stat-number",children:r.number}),n.jsx("div",{className:"stat-label",children:r.label})]},r.label))}),n.jsx(A6,{children:Z6.map((r,i)=>n.jsxs(O6,{"data-aos":"fade-up","data-aos-delay":100+i*100,children:[n.jsx(M6,{src:r.image,children:n.jsx("div",{className:"initiative-category",children:r.category})}),n.jsxs(F6,{children:[n.jsx("h3",{children:r.name}),n.jsx("div",{className:"description",children:r.description}),n.jsx("div",{className:"impact",children:r.impact.map((a,o)=>n.jsxs("div",{className:"impact-item",children:[n.jsx("span",{className:"icon",children:a.icon}),a.text]},o))}),n.jsxs("div",{className:"progress",children:[n.jsxs("div",{className:"progress-label",children:[n.jsx("span",{children:"Implementation Progress"}),n.jsxs("span",{children:[r.progress,"%"]})]}),n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",progress:r.progress})})]}),n.jsx(B,{onClick:()=>t(r),style:{width:"100%"},children:"Learn More"})]})]},r.id))}),n.jsxs(I6,{children:[n.jsx(B6,{"data-aos":"fade-up",children:"Certifications & Recognition"}),n.jsx(L6,{children:e4.map((r,i)=>n.jsxs(_6,{"data-aos":"fade-up","data-aos-delay":100+i*100,children:[n.jsx("div",{className:"certification-icon",children:r.icon}),n.jsx("h3",{children:r.name}),n.jsx("div",{className:"certification-description",children:r.description}),n.jsxs("div",{className:"certification-year",children:["Awarded ",r.year]})]},r.name))})]}),n.jsxs($6,{children:[n.jsx(H6,{"data-aos":"fade-up",children:"How You Can Help"}),n.jsx(U6,{children:t4.map((r,i)=>n.jsxs(V6,{"data-aos":"fade-up","data-aos-delay":100+i*100,children:[n.jsx("div",{className:"action-icon",children:r.icon}),n.jsx("h3",{children:r.name}),n.jsx("div",{className:"action-description",children:r.description}),n.jsx("div",{className:"action-impact",children:r.impact}),n.jsx(B,{variant:"outline",children:"Participate"})]},r.name))})]}),n.jsxs(W6,{children:[n.jsx(G6,{"data-aos":"fade-up",children:"Our Sustainability Goals"}),n.jsx(q6,{children:r4.map((r,i)=>n.jsxs(Y6,{progress:r.progress,"data-aos":"fade-up","data-aos-delay":100+i*100,children:[n.jsx("div",{className:"goal-icon",children:r.icon}),n.jsx("h3",{children:r.name}),n.jsx("div",{className:"goal-description",children:r.description}),n.jsx("div",{className:"goal-target",children:r.target}),n.jsxs("div",{className:"goal-progress",children:[n.jsxs("div",{className:"progress-label",children:[n.jsx("span",{children:"Progress"}),n.jsxs("span",{children:[r.progress,"%"]})]}),n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill"})})]})]},r.name))})]}),n.jsxs(Q6,{"data-aos":"fade-up",children:[n.jsx(J6,{children:"Join Our Sustainability Journey"}),n.jsx(K6,{children:"Together, we can make a difference. Learn more about our sustainability initiatives and discover how you can contribute to a greener future."}),n.jsx(B,{size:"large",children:"Download Sustainability Report"})]})]})}const i4="your_unsplash_access_key_here",a4=async(e="hotel room",t=10)=>{try{return(await It.get(`https://api.unsplash.com/search/photos?query=${e}&per_page=${t}&client_id=${i4}`)).data.results.map(i=>({id:i.id,src:i.urls.regular,alt:i.alt_description||"Hotel image",category:e.replace(" ","-")}))}catch(r){return console.error("Error fetching hotel images:",r),[{id:1,src:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",alt:"Hotel room",category:"rooms"}]}},o4=async(e=["hotel","spa","dining","events","entertainment","rooms","luxury","resort"])=>{const t=[];for(const r of e){const i=await a4(r,10);t.push(...i)}return t},ul=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,pl=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="gallery-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23gallery-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`,ml=u.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,fl=u.p`
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,s4=u.div`
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  margin-bottom: var(--space-3xl);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: var(--space-sm);
    margin-bottom: var(--space-2xl);
  }
`,l4=u.button`
  padding: var(--space-sm) var(--space-lg);
  border: 2px solid ${e=>e.active?"#007bff":"#e9ecef"};
  background: ${e=>e.active?"#007bff":"white"};
  color: ${e=>e.active?"white":"#666"};
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #007bff;
    color: #007bff;
  }
`,c4=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--space-lg);
  }
`,d4=u.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

    .gallery-overlay {
      opacity: 1;
    }
  }

  .gallery-image {
    width: 100%;
    height: 250px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${e=>e.src});
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 123, 255, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    .overlay-icon {
      font-size: 3rem;
      color: white;
      margin-bottom: var(--space-sm);
    }

    .overlay-text {
      color: white;
      font-size: 1.125rem;
      font-weight: 600;
    }
  }
`,u4=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: var(--space-xl);

  .modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;

    .modal-image {
      max-width: 100%;
      max-height: 90vh;
      border-radius: 8px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    }

    .modal-close {
      position: absolute;
      top: -var(--space-lg);
      right: -var(--space-lg);
      background: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

      &:hover {
        background: #f8f9fa;
      }
    }

    .modal-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.9);
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

      &:hover {
        background: white;
      }

      &.prev {
        left: -var(--space-2xl);
      }

      &.next {
        right: -var(--space-2xl);
      }
    }
  }
`,p4=u.div`
  margin-bottom: var(--space-3xl);
`,m4=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,f4=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,h4=u.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }

  .video-thumbnail {
    position: relative;
    height: 200px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url(${e=>e.src});
    background-size: cover;
    background-position: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    .play-button {
      font-size: 4rem;
      color: white;
      opacity: 0.8;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 1;
      }
    }
  }

  .video-info {
    padding: var(--space-xl);

    h3 {
      font-size: 1.25rem;
      color: #333;
      margin-bottom: var(--space-sm);
      font-weight: 600;
    }

    .video-description {
      color: #666;
      line-height: 1.5;
      margin-bottom: var(--space-md);
    }

    .video-duration {
      color: #007bff;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`,g4=u.div`
  background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;
  color: white;
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`,x4=u.h2`
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,v4=u.p`
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`,y4=u.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`,w4=u.h2`
  color: #333;
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,b4=u.p`
  color: #666;
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`,j4=["All","Rooms","Dining","Spa","Events","Facilities","Views"],k4=[{id:1,title:"Hotel Virtual Tour",description:"Take a complete virtual tour of our luxury hotel and all its amenities",thumbnail:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",duration:"3:45",url:"#"},{id:2,title:"Behind the Scenes",description:"Go behind the scenes to see how we create exceptional guest experiences",thumbnail:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",duration:"5:20",url:"#"},{id:3,title:"Chef's Table Experience",description:"Exclusive look at our chef's table dining experience with wine pairing",thumbnail:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",duration:"4:15",url:"#"}];function S4(){const[e,t]=j.useState([]),[r,i]=j.useState(!0),[a,o]=j.useState(null),[s,c]=j.useState("All"),[l,d]=j.useState(null),[p,m]=j.useState(null);j.useEffect(()=>{(async()=>{try{i(!0);const b=await o4();t(b)}catch(b){o("Failed to load gallery images. Please try again later."),console.error("Error fetching gallery images:",b)}finally{i(!1)}})()},[]);const g=s==="All"?e:e.filter(w=>w.category===s),v=()=>{const b=(g.findIndex(y=>y.id===(l==null?void 0:l.id))+1)%g.length;d(g[b])},x=()=>{const w=g.findIndex(y=>y.id===(l==null?void 0:l.id)),b=w===0?g.length-1:w-1;d(g[b])};return r?n.jsxs(ul,{children:[n.jsxs(pl,{"data-aos":"fade-up",children:[n.jsx(ml,{children:"Photo & Video Gallery"}),n.jsx(fl,{children:"Explore our stunning photo and video gallery showcasing the luxury, elegance, and exceptional experiences that await you at our hotel."})]}),n.jsx("div",{style:{textAlign:"center",padding:"4rem"},children:n.jsx("div",{children:"Loading gallery..."})})]}):a?n.jsxs(ul,{children:[n.jsxs(pl,{"data-aos":"fade-up",children:[n.jsx(ml,{children:"Photo & Video Gallery"}),n.jsx(fl,{children:"Explore our stunning photo and video gallery showcasing the luxury, elegance, and exceptional experiences that await you at our hotel."})]}),n.jsx("div",{style:{textAlign:"center",padding:"4rem",color:"#dc3545"},children:a})]}):n.jsxs(ul,{children:[n.jsxs(pl,{"data-aos":"fade-up",children:[n.jsx(ml,{children:"Photo & Video Gallery"}),n.jsx(fl,{children:"Explore our stunning photo and video gallery showcasing the luxury, elegance, and exceptional experiences that await you at our hotel."})]}),n.jsx(s4,{children:j4.map(w=>n.jsx(l4,{active:s===w,onClick:()=>c(w),children:w},w))}),n.jsx(c4,{children:g.map(w=>n.jsx(d4,{src:w.src,onClick:()=>d(w),"data-aos":"fade-up",children:n.jsx("div",{className:"gallery-image",children:n.jsxs("div",{className:"gallery-overlay",children:[n.jsx("div",{className:"overlay-icon",children:"🔍"}),n.jsx("div",{className:"overlay-text",children:"View Image"})]})})},w.id))}),l&&n.jsx(u4,{onClick:()=>d(null),children:n.jsxs("div",{className:"modal-content",onClick:w=>w.stopPropagation(),children:[n.jsx("button",{className:"modal-close",onClick:()=>d(null),children:"×"}),n.jsx("button",{className:"modal-nav prev",onClick:x,children:"‹"}),n.jsx("button",{className:"modal-nav next",onClick:v,children:"›"}),n.jsx("img",{src:l.src,alt:l.title,className:"modal-image"})]})}),n.jsxs(p4,{children:[n.jsx(m4,{"data-aos":"fade-up",children:"Featured Videos"}),n.jsx(f4,{children:k4.map((w,b)=>n.jsxs(h4,{"data-aos":"fade-up","data-aos-delay":100+b*100,children:[n.jsx("div",{className:"video-thumbnail",onClick:()=>m(w),children:n.jsx("div",{className:"play-button",children:"▶️"})}),n.jsxs("div",{className:"video-info",children:[n.jsx("h3",{children:w.title}),n.jsx("div",{className:"video-description",children:w.description}),n.jsxs("div",{className:"video-duration",children:["Duration: ",w.duration]})]})]},w.id))})]}),n.jsxs(g4,{"data-aos":"fade-up",children:[n.jsx(x4,{children:"Take a Virtual Tour"}),n.jsx(v4,{children:"Experience our hotel from the comfort of your home with our immersive 360° virtual tour. Explore every corner and discover what makes us special."}),n.jsx(B,{size:"large",style:{background:"white",color:"#007bff"},children:"Start Virtual Tour"})]}),n.jsxs(y4,{"data-aos":"fade-up",children:[n.jsx(w4,{children:"Ready to Experience It Yourself?"}),n.jsx(b4,{children:"See these beautiful spaces in person and create your own unforgettable memories. Book your stay today and experience luxury like never before."}),n.jsx(B,{size:"large",children:"Book Your Stay"})]})]})}const C4=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,E4=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="faq-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23faq-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`,z4=u.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,P4=u.p`
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,N4=u.div`
  margin-bottom: var(--space-3xl);
  text-align: center;
`,D4=u.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;

  input {
    width: 100%;
    padding: var(--space-lg) var(--space-xl);
    padding-right: 50px;
    border: 2px solid #e9ecef;
    border-radius: 50px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
  }

  .search-icon {
    position: absolute;
    right: var(--space-lg);
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 1.25rem;
  }
`,R4=u.div`
  margin-bottom: var(--space-3xl);
`,T4=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,A4=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,O4=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: #007bff;
  }

  .category-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
    display: block;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .category-description {
    color: #666;
    line-height: 1.5;
    font-size: 0.9rem;
  }
`,M4=u.div`
  margin-bottom: var(--space-3xl);
`,F4=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,I4=u.div`
  max-width: 800px;
  margin: 0 auto;
`,B4=u.div`
  background: white;
  border-radius: 12px;
  margin-bottom: var(--space-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  overflow: hidden;
`,L4=u.div`
  padding: var(--space-xl);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${e=>e.expanded?"#007bff":"white"};
  color: ${e=>e.expanded?"white":"#333"};
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.expanded?"#0056b3":"#f8f9fa"};
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
  }

  .toggle-icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    transform: ${e=>e.expanded?"rotate(45deg)":"rotate(0deg)"};
  }
`,_4=u.div`
  padding: ${e=>e.expanded?"var(--space-xl)":"0"};
  max-height: ${e=>e.expanded?"500px":"0"};
  overflow: hidden;
  transition: all 0.3s ease;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;

  .answer-content {
    color: #666;
    line-height: 1.6;
  }
`,$4=u.div`
  margin-bottom: var(--space-3xl);
`,H4=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,U4=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,V4=u.div`
  background: white;
  border-radius: 12px;
  padding: var(--space-xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  text-align: center;

  .action-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
    display: block;
  }

  h3 {
    color: #333;
    margin-bottom: var(--space-sm);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .action-description {
    color: #666;
    line-height: 1.5;
    margin-bottom: var(--space-lg);
  }
`,W4=u.div`
  background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
  border-radius: 20px;
  padding: var(--space-3xl);
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: var(--space-2xl);
  }
`,G4=u.h2`
  margin-bottom: var(--space-md);
  font-size: 2.25rem;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`,q4=u.p`
  margin-bottom: var(--space-xl);
  font-size: 1.125rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: var(--space-lg);
    font-size: 1rem;
  }
`,Y4=[{icon:"🏨",name:"Reservations",description:"Questions about booking, rates, and availability"},{icon:"🍽️",name:"Dining",description:"Restaurant reservations and dining experiences"},{icon:"🧖",name:"Spa & Wellness",description:"Spa treatments and wellness services"},{icon:"🎉",name:"Events",description:"Event planning and hosting services"},{icon:"💼",name:"Business",description:"Corporate services and meeting facilities"},{icon:"🌍",name:"Travel",description:"Transportation and travel arrangements"}],Q4=[{id:1,category:"Reservations",question:"How do I make a reservation?",answer:"You can make a reservation through our website, by calling our reservations team at +1 (555) 123-4567, or through our mobile app. We recommend booking in advance to ensure availability, especially during peak seasons."},{id:2,category:"Reservations",question:"What is your cancellation policy?",answer:"Our standard cancellation policy allows free cancellation up to 24 hours before check-in for most room types. Some special rates and packages may have different policies. Please check your confirmation email for specific terms."},{id:3,category:"Reservations",question:"Do you offer early check-in or late check-out?",answer:"We offer complimentary early check-in and late check-out based on availability. Early check-in is available from 12:00 PM and late check-out until 2:00 PM. Premium members receive extended hours as part of their benefits."},{id:4,category:"Dining",question:"How do I make restaurant reservations?",answer:"Restaurant reservations can be made through our concierge, by calling the restaurant directly, or through our website. We recommend making reservations in advance, especially for our fine dining establishments."},{id:5,category:"Dining",question:"Do you accommodate dietary restrictions?",answer:"Yes, all our restaurants can accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and kosher options. Please inform us of your requirements when making your reservation."},{id:6,category:"Spa & Wellness",question:"What spa treatments do you offer?",answer:"Our spa offers a comprehensive range of treatments including massages, facials, body treatments, and wellness therapies. We use premium products and our certified therapists provide personalized experiences."},{id:7,category:"Spa & Wellness",question:"Do I need to book spa treatments in advance?",answer:"While walk-ins are welcome based on availability, we strongly recommend booking spa treatments in advance to ensure your preferred time and therapist. You can book up to 6 months in advance."},{id:8,category:"Events",question:"Can I host events at the hotel?",answer:"Yes, we offer comprehensive event planning services for weddings, corporate events, celebrations, and more. Our event spaces can accommodate from 10 to 500 guests with full catering and AV services."},{id:9,category:"Business",question:"What business services do you provide?",answer:"We offer a full range of business services including meeting rooms, conference facilities, high-speed internet, printing services, and secretarial support. Our business center is open 24/7."},{id:10,category:"Travel",question:"Do you provide airport transportation?",answer:"Yes, we offer luxury airport transfer services with professional drivers. You can arrange transportation when booking your room or through our concierge. We also have electric vehicle charging stations available."}],J4=[{icon:"📞",name:"Call Us",description:"Speak directly with our customer service team",action:"Call Now"},{icon:"💬",name:"Live Chat",description:"Get instant answers through our live chat support",action:"Start Chat"},{icon:"📧",name:"Email Support",description:"Send us your questions and we'll respond within 24 hours",action:"Send Email"},{icon:"📱",name:"Mobile App",description:"Download our app for easy booking and support",action:"Download App"}];function K4(){const[e,t]=j.useState(""),[r,i]=j.useState("All"),[a,o]=j.useState(null),s=Q4.filter(l=>{const d=l.question.toLowerCase().includes(e.toLowerCase())||l.answer.toLowerCase().includes(e.toLowerCase()),p=r==="All"||l.category===r;return d&&p}),c=l=>{o(a===l?null:l)};return n.jsxs(C4,{children:[n.jsxs(E4,{"data-aos":"fade-up",children:[n.jsx(z4,{children:"Frequently Asked Questions"}),n.jsx(P4,{children:"Find answers to common questions about our hotel, services, and amenities. Can't find what you're looking for? Our team is here to help."})]}),n.jsx(N4,{children:n.jsxs(D4,{children:[n.jsx("input",{type:"text",placeholder:"Search for answers...",value:e,onChange:l=>t(l.target.value)}),n.jsx("div",{className:"search-icon",children:"🔍"})]})}),n.jsxs(R4,{children:[n.jsx(T4,{"data-aos":"fade-up",children:"Browse by Category"}),n.jsx(A4,{children:Y4.map((l,d)=>n.jsxs(O4,{onClick:()=>i(l.name),"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"category-icon",children:l.icon}),n.jsx("h3",{children:l.name}),n.jsx("div",{className:"category-description",children:l.description})]},l.name))})]}),n.jsxs(M4,{children:[n.jsx(F4,{"data-aos":"fade-up",children:r==="All"?"All Questions":`${r} Questions`}),n.jsx(I4,{children:s.map(l=>n.jsxs(B4,{"data-aos":"fade-up",children:[n.jsxs(L4,{expanded:a===l.id,onClick:()=>c(l.id),children:[n.jsx("h3",{children:l.question}),n.jsx("div",{className:"toggle-icon",children:"+"})]}),n.jsx(_4,{expanded:a===l.id,children:n.jsx("div",{className:"answer-content",children:l.answer})})]},l.id))})]}),n.jsxs($4,{children:[n.jsx(H4,{"data-aos":"fade-up",children:"Need More Help?"}),n.jsx(U4,{children:J4.map((l,d)=>n.jsxs(V4,{"data-aos":"fade-up","data-aos-delay":100+d*100,children:[n.jsx("div",{className:"action-icon",children:l.icon}),n.jsx("h3",{children:l.name}),n.jsx("div",{className:"action-description",children:l.description}),n.jsx(B,{variant:"outline",children:l.action})]},l.name))})]}),n.jsxs(W4,{"data-aos":"fade-up",children:[n.jsx(G4,{children:"Still Have Questions?"}),n.jsx(q4,{children:"Our friendly customer service team is available 24/7 to assist you with any questions or concerns you may have. We're here to make your experience exceptional."}),n.jsx(B,{size:"large",style:{background:"white",color:"#007bff"},children:"Contact Support"})]})]})}const X4=async(e=10)=>{try{return(await It.get(`https://fakestoreapi.com/products?limit=${e}`)).data.map(r=>({id:r.id,name:r.title,description:r.description,price:`₹${r.price}`,image:r.image,category:r.category}))}catch(t){return console.error("Error fetching products:",t),[{id:1,name:"Hotel Branded T-Shirt",description:"Comfortable cotton t-shirt with hotel logo.",price:"₹25",image:""},{id:2,name:"Luxury Bath Set",description:"Premium toiletries and bath amenities.",price:"₹45",image:""},{id:3,name:"Souvenir Mug",description:"Ceramic mug with hotel design.",price:"₹15",image:""},{id:4,name:"Gift Card",description:"Perfect gift for any occasion.",price:"₹50",image:""}]}},hl=u.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`,gl=u.section`
  background-image: url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
`,xl=u.section`
  margin: 3rem 0;
`,vl=u.h2`
  color: #ED6D05;
  margin-bottom: 1rem;
  text-align: center;
`,Z4=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 2rem;
`,ek=u.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;

  h3 {
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
  }

  .price {
    font-weight: bold;
    color: #ED6D05;
    font-size: 1.2rem;
  }
`;function tk(){const[e,t]=j.useState([]),[r,i]=j.useState(!0),[a,o]=j.useState(null);return j.useEffect(()=>{(async()=>{try{i(!0);const c=await X4();t(c)}catch(c){o("Failed to load products. Please try again later."),console.error("Error fetching products:",c)}finally{i(!1)}})()},[]),r?n.jsxs(hl,{children:[n.jsx(gl,{children:"E-commerce & Add-ons"}),n.jsxs(xl,{children:[n.jsx(vl,{children:"Hotel Shop"}),n.jsx("div",{style:{textAlign:"center",padding:"4rem"},children:n.jsx("div",{children:"Loading products..."})})]})]}):a?n.jsxs(hl,{children:[n.jsx(gl,{children:"E-commerce & Add-ons"}),n.jsxs(xl,{children:[n.jsx(vl,{children:"Hotel Shop"}),n.jsx("div",{style:{textAlign:"center",padding:"4rem",color:"#dc3545"},children:a})]})]}):n.jsxs(hl,{children:[n.jsx(gl,{children:"E-commerce & Add-ons"}),n.jsxs(xl,{children:[n.jsx(vl,{children:"Hotel Shop"}),n.jsx(Z4,{children:e.map(s=>n.jsxs(ek,{children:[n.jsx("h3",{children:s.name}),n.jsx("p",{children:s.description}),n.jsx("div",{className:"price",children:s.price})]},s.id))})]})]})}const F0="https://openlibrary.org",rk=async(e="fiction",t=1,r=20)=>{try{const i=(t-1)*r,a=await fetch(`${F0}/search.json?q=${encodeURIComponent(e)}&limit=${r}&offset=${i}`);if(!a.ok)throw new Error("Failed to fetch books");const o=await a.json();return{books:o.docs.map(s=>({key:s.key,title:s.title,author:s.author_name?s.author_name[0]:"Unknown",cover:s.cover_i?`https://covers.openlibrary.org/b/id/${s.cover_i}-M.jpg`:null,first_publish_year:s.first_publish_year,publisher:s.publisher?s.publisher[0]:"Unknown",isbn:s.isbn?s.isbn[0]:null,language:s.language?s.language[0]:"Unknown",subjects:s.subject?s.subject.slice(0,3):[]})),total:o.num_found,page:t,limit:r}}catch(i){throw console.error("Error fetching books:",i),i}},nk=async()=>{try{const e=await fetch(`${F0}/trending/daily.json`);if(!e.ok)throw new Error("Failed to fetch popular books");return(await e.json()).works.map(r=>({key:r.key,title:r.title,author:r.author_name?r.author_name[0]:"Unknown",cover:r.cover_i?`https://covers.openlibrary.org/b/id/${r.cover_i}-M.jpg`:null,first_publish_year:r.first_publish_year}))}catch(e){throw console.error("Error fetching popular books:",e),e}},ik=u.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,ak=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="books-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M10 10 L20 10 L20 20 L10 20 Z" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23books-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`,ok=u.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`,sk=u.p`
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,lk=u.div`
  margin-bottom: var(--space-3xl);
  display: flex;
  gap: var(--space-lg);
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
  }
`,ck=u.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  width: 300px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,dk=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,uk=u.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,pk=u.div`
  height: 200px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .no-cover {
    font-size: 3rem;
    color: #adb5bd;
  }
`,mk=u.div`
  padding: var(--space-lg);

  h3 {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .author {
    color: #4facfe;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: var(--space-sm);
  }

  .year {
    color: #6c757d;
    font-size: 0.875rem;
    margin-bottom: var(--space-md);
  }

  .subjects {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-bottom: var(--space-md);

    .subject {
      background: rgba(79, 172, 254, 0.1);
      color: #4facfe;
      padding: var(--space-xs) var(--space-sm);
      border-radius: 15px;
      font-size: 0.75rem;
      font-weight: 500;
    }
  }
`,fk=u.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-3xl);

  .page-info {
    color: #6c757d;
    font-size: 0.9rem;
  }
`,hk=u.div`
  margin-bottom: var(--space-3xl);
`,gk=u.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`,xk=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-lg);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-md);
  }
`,vk=u.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #e9ecef;
  text-align: center;

  .cover {
    height: 150px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }

    .no-cover {
      font-size: 2rem;
      color: #adb5bd;
    }
  }

  .info {
    padding: var(--space-md);

    h4 {
      font-size: 0.9rem;
      color: #333;
      margin-bottom: var(--space-xs);
      font-weight: 600;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .author {
      color: #4facfe;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;function yk(){const[e,t]=j.useState([]),[r,i]=j.useState([]),[a,o]=j.useState(!0),[s,c]=j.useState(!0),[l,d]=j.useState(null),[p,m]=j.useState("fiction"),[g,v]=j.useState(1),[x,w]=j.useState(0),[b,y]=j.useState("fiction"),f=20;j.useEffect(()=>{(async()=>{try{c(!0);const L=await nk();i(L)}catch(L){console.error("Error fetching popular books:",L)}finally{c(!1)}})()},[]),j.useEffect(()=>{(async()=>{try{o(!0),d(null);const L=await rk(p,g,f);t(L.books),w(L.total)}catch(L){d("Failed to load books. Please try again."),console.error("Error fetching books:",L)}finally{o(!1)}})()},[p,g]);const h=()=>{m(b),v(1)},k=z=>{z.key==="Enter"&&h()},S=Math.ceil(x/f),E=()=>{g<S&&v(g+1)},P=()=>{g>1&&v(g-1)};return n.jsxs(ik,{children:[n.jsxs(ak,{"data-aos":"fade-up",children:[n.jsx(ok,{children:"Library"}),n.jsx(sk,{children:"Explore our extensive collection of books. Search through millions of titles from around the world."})]}),n.jsxs(lk,{children:[n.jsx(ck,{type:"text",placeholder:"Search books...",value:b,onChange:z=>y(z.target.value),onKeyPress:k}),n.jsx(B,{onClick:h,children:"Search"})]}),a?n.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading books..."}):l?n.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"red"},children:l}):n.jsxs(n.Fragment,{children:[n.jsx(dk,{children:e.map(z=>n.jsxs(uk,{"data-aos":"fade-up",children:[n.jsx(pk,{children:z.cover?n.jsx("img",{src:z.cover,alt:z.title}):n.jsx("div",{className:"no-cover",children:"📚"})}),n.jsxs(mk,{children:[n.jsx("h3",{children:z.title}),n.jsxs("div",{className:"author",children:["by ",z.author]}),z.first_publish_year&&n.jsxs("div",{className:"year",children:["Published: ",z.first_publish_year]}),z.subjects.length>0&&n.jsx("div",{className:"subjects",children:z.subjects.slice(0,2).map((L,_)=>n.jsx("span",{className:"subject",children:L},_))}),n.jsx(B,{variant:"outline",size:"small",style:{width:"100%"},children:"View Details"})]})]},z.key))}),S>1&&n.jsxs(fk,{children:[n.jsx(B,{variant:"outline",onClick:P,disabled:g===1,children:"Previous"}),n.jsxs("div",{className:"page-info",children:["Page ",g," of ",S," (",x.toLocaleString()," total books)"]}),n.jsx(B,{variant:"outline",onClick:E,disabled:g===S,children:"Next"})]})]}),n.jsxs(hk,{children:[n.jsx(gk,{"data-aos":"fade-up",children:"Popular Books"}),s?n.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading popular books..."}):n.jsx(xk,{children:r.slice(0,8).map(z=>n.jsxs(vk,{"data-aos":"fade-up",children:[n.jsx("div",{className:"cover",children:z.cover?n.jsx("img",{src:z.cover,alt:z.title}):n.jsx("div",{className:"no-cover",children:"📖"})}),n.jsxs("div",{className:"info",children:[n.jsx("h4",{children:z.title}),n.jsxs("div",{className:"author",children:["by ",z.author]})]})]},z.key))})]})]})}const wk=u.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: var(--space-xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-lg) var(--space-md);
  }
`,bk=u.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  width: 100%;
  max-width: 550px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ED6D05, #FF9A3C);
  }

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-xl);
    border-radius: 16px;
  }
`,jk=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: var(--space-md);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    font-size: 1.125rem;
    line-height: 1.6;
  }
`,kk=u.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`,rm=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,nm=u.label`
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  .required {
    color: #e74c3c;
    margin-left: var(--space-xs);
  }
`,im=u.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  &::placeholder {
    color: #adb5bd;
  }

  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }
`,yl=u.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,Sk=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-lg);
`,Ck=u.div`
  display: flex;
  align-items: center;
  margin: var(--space-xl) 0;
  color: #666;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e9ecef;
  }

  span {
    padding: 0 var(--space-md);
    font-size: 0.875rem;
    background: white;
  }
`,Ek=u.div`
  display: flex;
  gap: var(--space-md);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,am=u.button`
  flex: 1;
  padding: var(--space-md);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  background: white;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);

  &:hover {
    border-color: #ED6D05;
    background: rgba(237, 109, 5, 0.05);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,zk=u.div`
  text-align: center;
  margin-top: var(--space-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);

  a {
    color: #ED6D05;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #D66104;
      text-decoration: underline;
    }
  }
`,Pk=u.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: var(--space-lg);
  margin-top: var(--space-xl);

  h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: var(--space-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: var(--space-xs);

    strong {
      color: #333;
      font-family: monospace;
      background: #e9ecef;
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
`;function Nk(){var b,y;const[e,t]=j.useState({email:"",password:""}),[r,i]=j.useState({}),[a,o]=j.useState(!1),{login:s,loading:c,error:l}=Kt(),d=gt(),m=((y=(b=Er().state)==null?void 0:b.from)==null?void 0:y.pathname)||"/",g=f=>{const{name:h,value:k}=f.target;t(S=>({...S,[h]:k})),r[h]&&i(S=>({...S,[h]:""}))},v=()=>{const f={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(f.email="Please enter a valid email address"):f.email="Email is required",e.password?e.password.length<6&&(f.password="Password must be at least 6 characters"):f.password="Password is required",i(f),Object.keys(f).length===0},x=async f=>{if(f.preventDefault(),!!v())try{await s(e.email,e.password),d(m,{replace:!0})}catch{}},w=f=>{console.log(`Login with ${f}`)};return n.jsx(wk,{children:n.jsxs(bk,{children:[n.jsxs(jk,{children:[n.jsx("h1",{children:"Welcome Back"}),n.jsx("p",{children:"Sign in to your account to continue your luxury experience"})]}),n.jsxs(kk,{onSubmit:x,children:[n.jsxs(rm,{children:[n.jsxs(nm,{children:["Email Address",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(im,{type:"email",name:"email",value:e.email,onChange:g,placeholder:"Enter your email",className:r.email?"error":""}),r.email&&n.jsxs(yl,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),r.email]})]}),n.jsxs(rm,{children:[n.jsxs(nm,{children:["Password",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(im,{type:"password",name:"password",value:e.password,onChange:g,placeholder:"Enter your password",className:r.password?"error":""}),r.password&&n.jsxs(yl,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),r.password]})]}),l&&n.jsxs(yl,{style:{justifyContent:"center",marginBottom:"var(--space-md)"},children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]}),n.jsxs(Sk,{children:[n.jsx(B,{type:"submit",size:"large",disabled:c,className:c?"loading":"",children:c?"Signing In...":"Sign In"}),n.jsx(Ck,{children:n.jsx("span",{children:"or continue with"})}),n.jsxs(Ek,{children:[n.jsxs(am,{type:"button",onClick:()=>w("google"),children:[n.jsxs("svg",{viewBox:"0 0 24 24",children:[n.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),n.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),n.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),n.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Google"]}),n.jsxs(am,{type:"button",onClick:()=>w("facebook"),children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),"Facebook"]})]})]})]}),n.jsxs(zk,{children:[n.jsx($,{to:"/forgot-password",children:"Forgot Password?"}),n.jsx($,{to:"/signup",children:"Don't have an account? Sign Up"})]}),n.jsxs(Pk,{children:[n.jsx("h4",{children:"Demo Credentials"}),n.jsxs("p",{children:[n.jsx("strong",{children:"Admin:"})," admin@hotel.com / admin123"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"User:"})," any email / password (min 6 chars)"]}),n.jsxs(B,{size:"small",variant:"outline",onClick:()=>o(!a),children:[a?"Hide":"Show"," Demo Info"]})]})]})})}const Dk=u.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: var(--space-xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-lg) var(--space-md);
  }
`,Rk=u.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  width: 100%;
  max-width: 750px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ED6D05, #FF9A3C);
  }

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-xl);
    border-radius: 16px;
  }
`,Tk=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: var(--space-md);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    font-size: 1.125rem;
    line-height: 1.6;
  }
`,Ak=u.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`,Ok=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,wa=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,ba=u.label`
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  .required {
    color: #e74c3c;
    margin-left: var(--space-xs);
  }
`,ja=u.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  &::placeholder {
    color: #adb5bd;
  }

  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }
`,Jr=u.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,Mk=u.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  margin: var(--space-md) 0;

  input[type="checkbox"] {
    margin-top: 2px;
    width: 18px;
    height: 18px;
    accent-color: #ED6D05;
  }

  label {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
    cursor: pointer;
    font-weight: normal;

    a {
      color: #ED6D05;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`,Fk=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-lg);
`,Ik=u.div`
  text-align: center;
  margin-top: var(--space-xl);

  a {
    color: #ED6D05;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #D66104;
      text-decoration: underline;
    }
  }
`,Bk=u.div`
  background: #d4edda;
  color: #155724;
  padding: var(--space-md);
  border-radius: 8px;
  margin-bottom: var(--space-lg);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: var(--space-sm);

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;function Lk(){const[e,t]=j.useState({name:"",email:"",password:"",confirmPassword:"",agreeToTerms:!1}),[r,i]=j.useState({}),[a,o]=j.useState(!1),{signup:s,loading:c,error:l}=Kt(),d=gt(),p=v=>{const{name:x,value:w,type:b,checked:y}=v.target;t(f=>({...f,[x]:b==="checkbox"?y:w})),r[x]&&i(f=>({...f,[x]:""}))},m=()=>{const v={};return e.name.trim()?e.name.trim().length<2&&(v.name="Name must be at least 2 characters"):v.name="Full name is required",e.email?/\S+@\S+\.\S+/.test(e.email)||(v.email="Please enter a valid email address"):v.email="Email is required",e.password?e.password.length<6?v.password="Password must be at least 6 characters":/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(e.password)||(v.password="Password must contain at least one uppercase letter, one lowercase letter, and one number"):v.password="Password is required",e.confirmPassword?e.password!==e.confirmPassword&&(v.confirmPassword="Passwords do not match"):v.confirmPassword="Please confirm your password",e.agreeToTerms||(v.agreeToTerms="You must agree to the terms and conditions"),i(v),Object.keys(v).length===0},g=async v=>{if(v.preventDefault(),!!m())try{await s(e.name,e.email,e.password,e.confirmPassword),o(!0),setTimeout(()=>{d("/login")},2e3)}catch{}};return n.jsx(Dk,{children:n.jsxs(Rk,{children:[n.jsxs(Tk,{children:[n.jsx("h1",{children:"Join Us"}),n.jsx("p",{children:"Create your account to start your luxury hotel experience"})]}),a&&n.jsxs(Bk,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),"Account created successfully! Redirecting to login..."]}),n.jsxs(Ak,{onSubmit:g,children:[n.jsxs(Ok,{children:[n.jsxs(wa,{children:[n.jsxs(ba,{children:["Full Name",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(ja,{type:"text",name:"name",value:e.name,onChange:p,placeholder:"Enter your full name",className:r.name?"error":""}),r.name&&n.jsxs(Jr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),r.name]})]}),n.jsxs(wa,{children:[n.jsxs(ba,{children:["Email Address",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(ja,{type:"email",name:"email",value:e.email,onChange:p,placeholder:"Enter your email",className:r.email?"error":""}),r.email&&n.jsxs(Jr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),r.email]})]})]}),n.jsxs(wa,{children:[n.jsxs(ba,{children:["Password",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(ja,{type:"password",name:"password",value:e.password,onChange:p,placeholder:"Create a password (min 6 characters)",className:r.password?"error":""}),r.password&&n.jsxs(Jr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),r.password]})]}),n.jsxs(wa,{children:[n.jsxs(ba,{children:["Confirm Password",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(ja,{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:p,placeholder:"Confirm your password",className:r.confirmPassword?"error":""}),r.confirmPassword&&n.jsxs(Jr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),r.confirmPassword]})]}),n.jsxs(Mk,{children:[n.jsx("input",{type:"checkbox",id:"agreeToTerms",name:"agreeToTerms",checked:e.agreeToTerms,onChange:p}),n.jsxs("label",{htmlFor:"agreeToTerms",children:["I agree to the"," ",n.jsx($,{to:"/terms",children:"Terms of Service"})," ","and"," ",n.jsx($,{to:"/privacy",children:"Privacy Policy"}),n.jsx("span",{className:"required",children:"*"})]})]}),r.agreeToTerms&&n.jsxs(Jr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),r.agreeToTerms]}),l&&n.jsxs(Jr,{style:{justifyContent:"center",marginBottom:"var(--space-md)"},children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),l]}),n.jsx(Fk,{children:n.jsx(B,{type:"submit",size:"large",disabled:c,className:c?"loading":"",children:c?"Creating Account...":"Create Account"})})]}),n.jsx(Ik,{children:n.jsx($,{to:"/login",children:"Already have an account? Sign In"})})]})})}const om=u.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: var(--space-xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-lg) var(--space-md);
  }
`,sm=u.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  width: 100%;
  max-width: 450px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ED6D05, #FF9A3C);
  }

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-xl);
    border-radius: 16px;
  }
`,lm=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: var(--space-md);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    font-size: 1.125rem;
    line-height: 1.6;
  }
`,_k=u.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`,$k=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,Hk=u.label`
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  .required {
    color: #e74c3c;
    margin-left: var(--space-xs);
  }
`,Uk=u.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  &::placeholder {
    color: #adb5bd;
  }

  &.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }
`,Vk=u.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,Wk=u.div`
  background: #d4edda;
  color: #155724;
  padding: var(--space-md);
  border-radius: 8px;
  margin-bottom: var(--space-lg);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: var(--space-sm);

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`,cm=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-lg);
`,dm=u.div`
  text-align: center;
  margin-top: var(--space-xl);

  a {
    color: #ED6D05;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #D66104;
      text-decoration: underline;
    }
  }
`,Gk=u.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: var(--space-lg);
  margin-top: var(--space-xl);

  h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: var(--space-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: var(--space-xs);

    strong {
      color: #333;
      font-family: monospace;
      background: #e9ecef;
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
`;function qk(){const[e,t]=j.useState(""),[r,i]=j.useState(""),[a,o]=j.useState(!1),[s,c]=j.useState(!1),{resetPassword:l}=Kt(),d=async p=>{if(p.preventDefault(),!e){i("Email is required");return}if(!/\S+@\S+\.\S+/.test(e)){i("Please enter a valid email address");return}try{i(""),c(!0),await l(e),o(!0)}catch(m){i(m.message)}finally{c(!1)}};return a?n.jsx(om,{children:n.jsxs(sm,{children:[n.jsxs(lm,{children:[n.jsx("h1",{children:"Check Your Email"}),n.jsx("p",{children:"We've sent password reset instructions to your email address"})]}),n.jsxs(Wk,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),"Password reset email sent successfully! Check your inbox and follow the instructions."]}),n.jsx(cm,{children:n.jsx(B,{size:"large",onClick:()=>window.location.href="mailto:",children:"Open Email Client"})}),n.jsx(dm,{children:n.jsx($,{to:"/login",children:"Back to Sign In"})})]})}):n.jsx(om,{children:n.jsxs(sm,{children:[n.jsxs(lm,{children:[n.jsx("h1",{children:"Reset Password"}),n.jsx("p",{children:"Enter your email address and we'll send you instructions to reset your password"})]}),n.jsxs(_k,{onSubmit:d,children:[n.jsxs($k,{children:[n.jsxs(Hk,{children:["Email Address",n.jsx("span",{className:"required",children:"*"})]}),n.jsx(Uk,{type:"email",value:e,onChange:p=>t(p.target.value),placeholder:"Enter your email address",className:r?"error":""}),r&&n.jsxs(Vk,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),r]})]}),n.jsx(cm,{children:n.jsx(B,{type:"submit",size:"large",disabled:s,className:s?"loading":"",children:s?"Sending...":"Send Reset Instructions"})})]}),n.jsx(dm,{children:n.jsx($,{to:"/login",children:"Remember your password? Sign In"})}),n.jsxs(Gk,{children:[n.jsx("h4",{children:"Demo Information"}),n.jsx("p",{children:"Enter any valid email address to receive password reset instructions."}),n.jsx("p",{children:"The reset email will be simulated and logged to the console."})]})]})})}function I0({children:e,requireAuth:t=!0,adminOnly:r=!1}){const{user:i}=Kt(),a=Er();return t&&!i?n.jsx(mi,{to:"/login",state:{from:a},replace:!0}):r&&(!i||i.email!=="meet85734@gmail.com")?n.jsx(mi,{to:"/home",replace:!0}):!t&&i?n.jsx(mi,{to:"/dashboard",replace:!0}):e}const Yk=u.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,Qk=u.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ED6D05, #FF9A3C);
  }

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-xl);
    border-radius: 16px;
  }
`,Jk=u.div`
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: var(--space-lg);
  }
`,Kk=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
`,Xk=u.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ED6D05, #FF9A3C);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  color: white;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(237, 109, 5, 0.3);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }
`,Zk=u.label`
  padding: var(--space-sm) var(--space-md);
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  color: #666;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ED6D05;
    background: rgba(237, 109, 5, 0.05);
  }

  input {
    display: none;
  }
`,e8=u.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .role {
    display: inline-block;
    padding: var(--space-xs) var(--space-md);
    background: ${e=>e.role==="admin"?"#e74c3c":"#28a745"};
    color: white;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: var(--space-md);
  }

  .joined {
    color: #666;
    font-size: 1rem;
  }
`,t8=u.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,ka=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`,Sa=u.label`
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
`,um=u.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }

  &:disabled {
    background: #f8f9fa;
    color: #666;
    cursor: not-allowed;
  }
`,pm=u.select`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: #ED6D05;
    box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    background: white;
  }
`,r8=u.div`
  background: #f8f9fa;
  border-radius: 16px;
  padding: var(--space-2xl);
  margin-bottom: var(--space-2xl);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
  }
`,n8=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,i8=u.div`
  display: flex;
  gap: var(--space-md);
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,a8=u.div`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,o8=u.div`
  background: #d4edda;
  color: #155724;
  padding: var(--space-md);
  border-radius: 8px;
  margin-bottom: var(--space-lg);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: var(--space-sm);

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;function s8(){var v,x,w;const{user:e,updateProfile:t,loading:r,error:i}=Kt(),[a,o]=j.useState(!1),[s,c]=j.useState({name:(e==null?void 0:e.name)||"",email:(e==null?void 0:e.email)||"",language:((v=e==null?void 0:e.preferences)==null?void 0:v.language)||"en",currency:((x=e==null?void 0:e.preferences)==null?void 0:x.currency)||"USD",theme:((w=e==null?void 0:e.preferences)==null?void 0:w.theme)||"light"}),[l,d]=j.useState(!1),p=b=>{const{name:y,value:f}=b.target;c(h=>({...h,[y]:f}))},m=async b=>{b.preventDefault();try{await t({name:s.name,preferences:{language:s.language,currency:s.currency,theme:s.theme}}),d(!0),o(!1),setTimeout(()=>d(!1),3e3)}catch{}},g=()=>{var b,y,f;c({name:(e==null?void 0:e.name)||"",email:(e==null?void 0:e.email)||"",language:((b=e==null?void 0:e.preferences)==null?void 0:b.language)||"en",currency:((y=e==null?void 0:e.preferences)==null?void 0:y.currency)||"USD",theme:((f=e==null?void 0:e.preferences)==null?void 0:f.theme)||"light"}),o(!1)};return e?n.jsx(Yk,{children:n.jsxs(Qk,{children:[n.jsxs(Jk,{children:[n.jsxs(Kk,{children:[n.jsx(Xk,{children:e.avatar?n.jsx("img",{src:e.avatar,alt:e.name}):e.name.charAt(0).toUpperCase()}),n.jsxs(Zk,{children:["Change Avatar",n.jsx("input",{type:"file",accept:"image/*"})]})]}),n.jsxs(e8,{role:e.role,children:[n.jsx("h1",{children:e.name}),n.jsx("div",{className:"role",children:e.role}),n.jsxs("div",{className:"joined",children:["Member since ",e.joinedDate]})]})]}),l&&n.jsxs(o8,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),"Profile updated successfully!"]}),n.jsxs("form",{onSubmit:m,children:[n.jsxs(t8,{children:[n.jsxs(ka,{children:[n.jsx(Sa,{children:"Full Name"}),n.jsx(um,{type:"text",name:"name",value:s.name,onChange:p,disabled:!a})]}),n.jsxs(ka,{children:[n.jsx(Sa,{children:"Email Address"}),n.jsx(um,{type:"email",name:"email",value:s.email,disabled:!0}),n.jsx("small",{style:{color:"#666",fontSize:"0.875rem"},children:"Email cannot be changed"})]}),n.jsxs(ka,{children:[n.jsx(Sa,{children:"Language"}),n.jsxs(pm,{name:"language",value:s.language,onChange:p,disabled:!a,children:[n.jsx("option",{value:"en",children:"English"}),n.jsx("option",{value:"es",children:"Spanish"}),n.jsx("option",{value:"fr",children:"French"}),n.jsx("option",{value:"de",children:"German"}),n.jsx("option",{value:"it",children:"Italian"})]})]}),n.jsxs(ka,{children:[n.jsx(Sa,{children:"Currency"}),n.jsxs(pm,{name:"currency",value:s.currency,onChange:p,disabled:!a,children:[n.jsx("option",{value:"USD",children:"USD ($)"}),n.jsx("option",{value:"EUR",children:"EUR (€)"}),n.jsx("option",{value:"GBP",children:"GBP (£)"}),n.jsx("option",{value:"JPY",children:"JPY (¥)"}),n.jsx("option",{value:"CAD",children:"CAD (C$)"})]})]})]}),n.jsxs(r8,{children:[n.jsx("h3",{children:"Account Statistics"}),n.jsxs(n8,{children:[n.jsxs("div",{children:[n.jsx("strong",{children:"Total Bookings"}),n.jsx("div",{style:{color:"#666",marginTop:"4px"},children:"12"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Loyalty Points"}),n.jsx("div",{style:{color:"#666",marginTop:"4px"},children:"2,450"})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Member Since"}),n.jsx("div",{style:{color:"#666",marginTop:"4px"},children:e.joinedDate})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Account Status"}),n.jsx("div",{style:{color:"#28a745",marginTop:"4px"},children:"Active"})]})]})]}),i&&n.jsxs(a8,{style:{justifyContent:"center",marginBottom:"var(--space-lg)"},children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),i]}),n.jsx(i8,{children:a?n.jsxs(n.Fragment,{children:[n.jsx(B,{type:"button",variant:"outline",onClick:g,disabled:r,children:"Cancel"}),n.jsx(B,{type:"submit",disabled:r,className:r?"loading":"",children:r?"Updating...":"Update Profile"})]}):n.jsx(B,{type:"button",onClick:()=>o(!0),children:"Edit Profile"})})]})]})}):n.jsx(I0,{})}const l8=u.div`
  padding: 120px 20px 40px;
  max-width: 800px;
  margin: 0 auto;
  min-height: 80vh;
`,c8=u.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #ff9800, #ff5722);
    border-radius: 2px;
  }
`,d8=u.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,Kr=u.div`
  margin-bottom: 1.5rem;
`,Xr=u.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #555;
`,wl=u.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #ff9800;
    box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.2);
    outline: none;
  }
`,bl=u.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #ff9800;
    box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.2);
    outline: none;
  }
`,u8=u.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`,B0=u.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`,p8=u(B0)`
  background: linear-gradient(45deg, #ff9800, #ff5722);
  color: white;
  
  &:hover {
    background: linear-gradient(45deg, #ff5722, #ff9800);
  }
`,jl=u(B0)`
  background: #f5f5f5;
  color: #333;
  
  &:hover {
    background: #e5e5e5;
  }
`,m8=u.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
`,f8=u.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ff9800;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,h8=u.div`
  h2 {
    margin: 0 0 0.5rem;
    color: #333;
  }
  
  p {
    margin: 0;
    color: #777;
  }
`,g8=u.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  display: ${e=>e.visible?"block":"none"};
`,x8=()=>{var l;const e=gt(),[t,r]=j.useState({name:"",email:"",phone:"",language:"en",currency:"ind",theme:"light"}),[i,a]=j.useState(!1);j.useEffect(()=>{var p,m,g;const d=JSON.parse(localStorage.getItem("user"));if(!d){e("/login");return}r({name:d.name||"",email:d.email||"",phone:d.phone||"",language:((p=d.preferences)==null?void 0:p.language)||"en",currency:((m=d.preferences)==null?void 0:m.currency)||"ind",theme:((g=d.preferences)==null?void 0:g.theme)||"light"})},[e]);const o=d=>{const{name:p,value:m}=d.target;r(g=>({...g,[p]:m}))},s=d=>{d.preventDefault();const m={...JSON.parse(localStorage.getItem("user")),name:t.name,email:t.email,phone:t.phone,preferences:{language:t.language,currency:t.currency,theme:t.theme}};localStorage.setItem("user",JSON.stringify(m)),a(!0),setTimeout(()=>{a(!1)},3e3)},c=()=>{e(-1)};return n.jsxs(l8,{children:[n.jsxs(jl,{onClick:c,style:{marginBottom:"1rem"},children:[n.jsx(u0,{})," Back"]}),n.jsx(c8,{children:"Edit Profile"}),n.jsx(g8,{visible:i,children:"Profile updated successfully!"}),n.jsxs(d8,{onSubmit:s,children:[n.jsxs(m8,{children:[n.jsx(f8,{children:n.jsx("img",{src:((l=JSON.parse(localStorage.getItem("user")))==null?void 0:l.avatar)||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Profile"})}),n.jsxs(h8,{children:[n.jsx("h2",{children:t.name}),n.jsx("p",{children:t.email}),n.jsx(jl,{type:"button",onClick:()=>e("/profile/upload-image"),style:{marginTop:"0.5rem",padding:"0.5rem 1rem"},children:"Change Photo"})]})]}),n.jsxs(Kr,{children:[n.jsx(Xr,{htmlFor:"name",children:"Full Name"}),n.jsx(wl,{type:"text",id:"name",name:"name",value:t.name,onChange:o,required:!0})]}),n.jsxs(Kr,{children:[n.jsx(Xr,{htmlFor:"email",children:"Email Address"}),n.jsx(wl,{type:"email",id:"email",name:"email",value:t.email,onChange:o,required:!0})]}),n.jsxs(Kr,{children:[n.jsx(Xr,{htmlFor:"phone",children:"Phone Number"}),n.jsx(wl,{type:"tel",id:"phone",name:"phone",value:t.phone,onChange:o})]}),n.jsxs(Kr,{children:[n.jsx(Xr,{htmlFor:"language",children:"Preferred Language"}),n.jsxs(bl,{id:"language",name:"language",value:t.language,onChange:o,children:[n.jsx("option",{value:"en",children:"English"}),n.jsx("option",{value:"es",children:"Spanish"}),n.jsx("option",{value:"fr",children:"French"}),n.jsx("option",{value:"de",children:"German"}),n.jsx("option",{value:"zh",children:"Chinese"})]})]}),n.jsxs(Kr,{children:[n.jsx(Xr,{htmlFor:"currency",children:"Preferred Currency"}),n.jsxs(bl,{id:"currency",name:"currency",value:t.currency,onChange:o,children:[n.jsx("option",{value:"USD",children:"US Dollar (USD)"}),n.jsx("option",{value:"EUR",children:"Euro (EUR)"}),n.jsx("option",{value:"GBP",children:"British Pound (GBP)"}),n.jsx("option",{value:"JPY",children:"Japanese Yen (JPY)"}),n.jsx("option",{value:"INR",children:"Indian Rupee (INR)"})]})]}),n.jsxs(Kr,{children:[n.jsx(Xr,{htmlFor:"theme",children:"Theme Preference"}),n.jsxs(bl,{id:"theme",name:"theme",value:t.theme,onChange:o,children:[n.jsx("option",{value:"light",children:"Light"}),n.jsx("option",{value:"dark",children:"Dark"}),n.jsx("option",{value:"system",children:"System Default"})]})]}),n.jsxs(u8,{children:[n.jsxs(p8,{type:"submit",children:[n.jsx(_y,{})," Save Changes"]}),n.jsx(jl,{type:"button",onClick:c,children:"Cancel"})]})]})]})},v8=Pt`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,y8=u.div`
  padding: 120px 20px 40px;
  max-width: 800px;
  margin: 0 auto;
  min-height: 80vh;
  animation: ${v8} 0.5s ease-out;
`,w8=u.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #ff9800, #ff5722);
    border-radius: 2px;
  }
`,b8=u.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`,j8=u.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ff9800;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`,k8=u.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`,S8=u.div`
  border: 2px dashed ${e=>e.isDragActive?"#ff9800":"#ddd"};
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  background: ${e=>e.isDragActive?"rgba(255, 152, 0, 0.1)":"transparent"};
  
  &:hover {
    border-color: #ff9800;
    background: rgba(255, 152, 0, 0.05);
  }
`,C8=u.p`
  margin: 0;
  color: #555;
  font-size: 1.1rem;
`,E8=u.div`
  font-size: 3rem;
  color: #ff9800;
  margin-bottom: 1rem;
`,z8=u.input`
  display: none;
`,P8=u.div`
  display: ${e=>e.visible?"block":"none"};
  margin-top: 2rem;
  width: 100%;
`,N8=u.h3`
  margin-bottom: 1rem;
  color: #333;
`,D8=u.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  border: 3px solid #ff9800;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,R8=u.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: center;
`,Qd=u.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`,T8=u(Qd)`
  background: linear-gradient(45deg, #ff9800, #ff5722);
  color: white;
  
  &:hover {
    background: linear-gradient(45deg, #ff5722, #ff9800);
  }
`,A8=u(Qd)`
  background: #f5f5f5;
  color: #333;
  
  &:hover {
    background: #e5e5e5;
  }
`,O8=u(Qd)`
  background: #f44336;
  color: white;
  
  &:hover {
    background: #d32f2f;
  }
`,M8=u.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  display: ${e=>e.visible?"block":"none"};
  width: 100%;
  text-align: center;
`,F8=()=>{const e=gt(),[t,r]=j.useState(null),[i,a]=j.useState(null),[o,s]=j.useState(!1),[c,l]=j.useState(!1),d=j.useRef(null);j.useEffect(()=>{const h=JSON.parse(localStorage.getItem("user"));if(!h){e("/login");return}r(h)},[e]);const p=h=>{const k=h.target.files[0];if(k&&k.type.startsWith("image/")){const S=new FileReader;S.onload=E=>{a(E.target.result)},S.onerror=E=>{console.error("Error reading file:",E),alert("Error reading file. Please try again.")},S.readAsDataURL(k)}else k&&alert("Please select an image file (JPEG, PNG, etc.).")},m=h=>{h.preventDefault(),h.stopPropagation(),s(!0)},g=h=>{h.preventDefault(),h.stopPropagation(),s(!1)},v=h=>{h.preventDefault(),h.stopPropagation(),s(!0)},x=h=>{h.preventDefault(),h.stopPropagation(),s(!1);const k=h.dataTransfer.files[0];if(k&&k.type.startsWith("image/")){const S=new FileReader;S.onload=E=>{a(E.target.result)},S.onerror=E=>{console.error("Error reading file:",E),alert("Error reading file. Please try again.")},S.readAsDataURL(k)}else k&&alert("Please select an image file (JPEG, PNG, etc.).")},w=()=>{d.current.click()},b=()=>{if(i&&t)try{const h={...t,avatar:i};localStorage.setItem("user",JSON.stringify(h)),r(h),l(!0),setTimeout(()=>{l(!1),e("/profile")},3e3)}catch(h){console.error("Error saving image:",h),alert("Error saving image. Please try again.")}else alert("Please select an image first.")},y=()=>{a(null)},f=()=>{e(-1)};return n.jsxs(y8,{children:[n.jsxs(A8,{onClick:f,style:{marginBottom:"1rem"},children:[n.jsx(u0,{})," Back"]}),n.jsx(w8,{children:"Upload Profile Image"}),n.jsx(M8,{visible:c,children:"Profile image updated successfully!"}),n.jsxs(b8,{children:[n.jsxs(j8,{children:[n.jsx("img",{src:(t==null?void 0:t.avatar)||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"Current Profile"}),n.jsx("div",{className:"overlay",children:n.jsx(k8,{onClick:w,children:n.jsx(By,{})})})]}),n.jsxs(S8,{isDragActive:o,onDragEnter:m,onDragLeave:g,onDragOver:v,onDrop:x,onClick:w,children:[n.jsx(E8,{children:n.jsx(Dc,{})}),n.jsx(C8,{children:"Drag & drop an image here, or click to select a file"})]}),n.jsx(z8,{type:"file",ref:d,onChange:p,accept:"image/*"}),n.jsxs(P8,{visible:!!i,children:[n.jsx(N8,{children:"Preview"}),n.jsx(D8,{children:i&&n.jsx("img",{src:i,alt:"Preview"})}),n.jsxs(R8,{children:[n.jsxs(T8,{onClick:b,children:[n.jsx(Ly,{})," Save Image"]}),n.jsxs(O8,{onClick:y,children:[n.jsx(Nc,{})," Cancel"]})]})]})]})]})},I8=async(e="today")=>{try{await new Promise(r=>setTimeout(r,500));const t={today:{totalBookings:12,totalRevenue:8500,occupancyRate:65,averageRating:4.8,monthlyGrowth:5.2},week:{totalBookings:87,totalRevenue:62500,occupancyRate:78,averageRating:4.7,monthlyGrowth:8.1},month:{totalBookings:387,totalRevenue:278e3,occupancyRate:82,averageRating:4.6,monthlyGrowth:12.5},year:{totalBookings:4678,totalRevenue:335e4,occupancyRate:85,averageRating:4.5,monthlyGrowth:15.3}};return t[e]||t.today}catch(t){return console.error("Error fetching dashboard stats:",t),{totalBookings:0,totalRevenue:0,occupancyRate:0,averageRating:0,monthlyGrowth:0}}},B8=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{id:1,guestName:"John Smith",roomType:"Deluxe Suite",checkIn:"2024-01-15",checkOut:"2024-01-18",status:"confirmed",amount:1200},{id:2,guestName:"Sarah Johnson",roomType:"Executive Room",checkIn:"2024-01-16",checkOut:"2024-01-20",status:"checked-in",amount:1600},{id:3,guestName:"Mike Davis",roomType:"Standard Room",checkIn:"2024-01-17",checkOut:"2024-01-19",status:"pending",amount:400}]}catch(e){return console.error("Error fetching recent bookings:",e),[]}},L8=async()=>{try{return await new Promise(e=>setTimeout(e,300)),[{roomNumber:"101",status:"occupied",type:"Standard"},{roomNumber:"102",status:"available",type:"Standard"},{roomNumber:"201",status:"occupied",type:"Deluxe"},{roomNumber:"202",status:"maintenance",type:"Deluxe"},{roomNumber:"301",status:"available",type:"Suite"},{roomNumber:"302",status:"occupied",type:"Suite"}]}catch(e){return console.error("Error fetching room status:",e),[]}},_8=async()=>{try{return await new Promise(e=>setTimeout(e,300)),{serverStatus:"online",databaseStatus:"healthy",apiStatus:"operational",lastBackup:"2024-01-14 02:00 AM",uptime:"99.9%"}}catch(e){return console.error("Error fetching system status:",e),{serverStatus:"unknown",databaseStatus:"unknown",apiStatus:"unknown",lastBackup:"unknown",uptime:"unknown"}}},$8=async(e="today")=>{try{const[t,r,i,a]=await Promise.all([I8(e),B8(),L8(),_8()]);return{stats:t,recentBookings:r,roomStatus:i,systemStatus:a}}catch(t){return console.error("Error fetching dashboard data:",t),{stats:{},recentBookings:[],roomStatus:[],systemStatus:{}}}},kl=u.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,H8=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2xl);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-lg);
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
    font-weight: 700;
    margin: 0;
  }

  p {
    color: #666;
    font-size: 1.125rem;
    margin: 0;
  }
`,U8=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`,Ca=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${e=>e.color||"#ED6D05"};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${e=>e.color||"#ED6D05"};
    margin-bottom: var(--space-sm);
  }

  .stat-label {
    font-size: 1.125rem;
    color: #333;
    font-weight: 600;
    margin-bottom: var(--space-xs);
  }

  .stat-description {
    color: #666;
    font-size: 0.9rem;
  }
`,V8=u.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-2xl);
  margin-bottom: var(--space-2xl);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,W8=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,mm=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.375rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 20px;
      height: 20px;
      color: #ED6D05;
    }
  }
`,G8=u.div`
  .chart-placeholder {
    height: 200px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-weight: 500;
  }

  .revenue-bars {
    display: flex;
    align-items: end;
    justify-content: space-between;
    height: 200px;
    padding: var(--space-lg);
    background: #f8f9fa;
    border-radius: 8px;

    .bar {
      flex: 1;
      margin: 0 2px;
      background: linear-gradient(to top, #ED6D05, #FF9A3C);
      border-radius: 4px 4px 0 0;
      position: relative;
      min-height: 20px;

      &::after {
        content: attr(data-value);
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.75rem;
        font-weight: 600;
        color: #333;
      }
    }
  }
`,q8=u.div`
  .occupancy-circle {
    width: 150px;
    height: 150px;
    margin: 0 auto var(--space-lg);
    border-radius: 50%;
    background: conic-gradient(#ED6D05 0% 75%, #e9ecef 75% 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '75%';
      position: absolute;
      font-size: 1.5rem;
      font-weight: 700;
      color: #333;
    }
  }

  .occupancy-legend {
    display: flex;
    justify-content: center;
    gap: var(--space-lg);

    .legend-item {
      display: flex;
      align-items: center;
      gap: var(--space-xs);

      &::before {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${e=>e.color};
      }
    }
  }
`,Y8=u.div`
  .room-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .room-info {
      display: flex;
      align-items: center;
      gap: var(--space-md);

      .room-avatar {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: linear-gradient(135deg, #ED6D05, #FF9A3C);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 0.875rem;
      }

      .room-details {
        .room-name {
          font-weight: 600;
          color: #333;
          margin-bottom: var(--space-xs);
        }

        .room-stats {
          color: #666;
          font-size: 0.875rem;
        }
      }
    }

    .room-revenue {
      font-weight: 600;
      color: #ED6D05;
    }
  }
`,Q8=u.div`
  .feedback-item {
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .feedback-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-sm);

      .guest-name {
        font-weight: 600;
        color: #333;
      }

      .rating {
        display: flex;
        gap: 2px;

        .star {
          width: 16px;
          height: 16px;
          color: #ffc107;
          fill: currentColor;
        }
      }
    }

    .feedback-text {
      color: #666;
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`,J8=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.375rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 20px;
      height: 20px;
      color: #ED6D05;
    }
  }

  .notification-item {
    display: flex;
    gap: var(--space-md);
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .notification-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${e=>e.color||"#ED6D05"};
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .notification-content {
      flex: 1;

      .notification-title {
        font-weight: 600;
        color: #333;
        margin-bottom: var(--space-xs);
      }

      .notification-message {
        color: #666;
        font-size: 0.9rem;
        line-height: 1.4;
      }

      .notification-time {
        color: #999;
        font-size: 0.8rem;
        margin-top: var(--space-xs);
      }
    }
  }
`,K8=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.375rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 20px;
      height: 20px;
      color: #ED6D05;
    }
  }

  .activity-item {
    display: flex;
    gap: var(--space-md);
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .activity-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: ${e=>e.color||"#ED6D05"};
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    .activity-content {
      flex: 1;

      .activity-text {
        color: #333;
        font-size: 0.9rem;
        line-height: 1.4;
        margin-bottom: var(--space-xs);
      }

      .activity-time {
        color: #999;
        font-size: 0.8rem;
      }
    }
  }
`,X8=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`,Ea=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    svg {
      width: 24px;
      height: 24px;
      color: #ED6D05;
    }
  }
`,Z8=u.div`
  .booking-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .booking-info {
      flex: 1;

      .guest-name {
        font-weight: 600;
        color: #333;
        margin-bottom: var(--space-xs);
      }

      .booking-details {
        color: #666;
        font-size: 0.9rem;
      }
    }

    .booking-status {
      padding: var(--space-xs) var(--space-md);
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
      text-transform: capitalize;

      &.confirmed {
        background: #d4edda;
        color: #155724;
      }

      &.pending {
        background: #fff3cd;
        color: #856404;
      }

      &.cancelled {
        background: #f8d7da;
        color: #721c24;
      }
    }
  }
`,eS=u.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`,tS=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
  }

  .action-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
`,Zr=u.button`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  background: white;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    border-color: #ED6D05;
    background: rgba(237, 109, 5, 0.05);
  }

  svg {
    width: 20px;
    height: 20px;
    color: #ED6D05;
    flex-shrink: 0;
  }
`,rS=u.div`
  background: white;
  border-radius: 16px;
  padding: var(--space-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: var(--space-lg);
    font-weight: 600;
  }

  .status-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .status-label {
      font-weight: 500;
      color: #333;
    }

    .status-value {
      padding: var(--space-xs) var(--space-md);
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;

      &.online {
        background: #d4edda;
        color: #155724;
      }

      &.offline {
        background: #f8d7da;
        color: #721c24;
      }

      &.warning {
        background: #fff3cd;
        color: #856404;
      }
    }
  }
`;function nS(){var m,g;const{user:e}=Kt(),[t,r]=j.useState("today"),[i,a]=j.useState({stats:{},recentBookings:[],roomStatus:[],systemStatus:{}}),[o,s]=j.useState(!0),[c,l]=j.useState(null);if(j.useEffect(()=>{(async()=>{try{s(!0);const x=await $8(t);a(x)}catch(x){l("Failed to load dashboard data"),console.error("Error fetching dashboard data:",x)}finally{s(!1)}})()},[t]),o)return n.jsx(kl,{children:n.jsx("div",{style:{textAlign:"center",padding:"var(--space-3xl)"},children:"Loading dashboard..."})});if(c)return n.jsx(kl,{children:n.jsx("div",{style:{textAlign:"center",padding:"var(--space-3xl)",color:"red"},children:c})});const d=i.roomStatus.reduce((v,x)=>(x.status==="available"&&v.available++,x.status==="occupied"&&v.occupied++,x.status==="maintenance"&&v.maintenance++,v),{available:0,occupied:0,maintenance:0}),p=[{label:"Server Status",value:i.systemStatus.serverStatus||"unknown",class:"online"},{label:"Database Status",value:i.systemStatus.databaseStatus||"unknown",class:"online"},{label:"API Status",value:i.systemStatus.apiStatus||"unknown",class:"online"},{label:"Last Backup",value:i.systemStatus.lastBackup||"unknown",class:"warning"}];return n.jsxs(kl,{children:[n.jsxs(H8,{children:[n.jsxs("div",{children:[n.jsx("h1",{children:"Admin Dashboard"}),n.jsxs("p",{children:["Welcome back, ",e.name,". Here's what's happening with your hotel."]})]}),n.jsx("div",{children:n.jsxs("select",{value:t,onChange:v=>r(v.target.value),style:{padding:"var(--space-sm) var(--space-md)",border:"2px solid #e9ecef",borderRadius:"8px",fontSize:"1rem"},children:[n.jsx("option",{value:"today",children:"Today"}),n.jsx("option",{value:"week",children:"This Week"}),n.jsx("option",{value:"month",children:"This Month"}),n.jsx("option",{value:"year",children:"This Year"})]})})]}),n.jsxs(U8,{children:[n.jsxs(Ca,{color:"#28a745",children:[n.jsx("div",{className:"stat-number",children:((m=i.stats.totalBookings)==null?void 0:m.toLocaleString())||0}),n.jsx("div",{className:"stat-label",children:"Total Bookings"}),n.jsxs("div",{className:"stat-description",children:["+",i.stats.monthlyGrowth||0,"% from last month"]})]}),n.jsxs(Ca,{color:"#007bff",children:[n.jsxs("div",{className:"stat-number",children:["₹",((g=i.stats.totalRevenue)==null?void 0:g.toLocaleString())||0]}),n.jsx("div",{className:"stat-label",children:"Revenue"}),n.jsx("div",{className:"stat-description",children:"+8% from last month"})]}),n.jsxs(Ca,{color:"#ffc107",children:[n.jsxs("div",{className:"stat-number",children:[i.stats.occupancyRate||0,"%"]}),n.jsx("div",{className:"stat-label",children:"Occupancy Rate"}),n.jsx("div",{className:"stat-description",children:"+3% from last month"})]}),n.jsxs(Ca,{color:"#e74c3c",children:[n.jsx("div",{className:"stat-number",children:i.stats.averageRating||0}),n.jsx("div",{className:"stat-label",children:"Average Rating"}),n.jsx("div",{className:"stat-description",children:"Out of 5 stars"})]})]}),n.jsxs(W8,{children:[n.jsxs(mm,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{d:"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"})}),"Revenue Trend"]}),n.jsx(G8,{children:n.jsxs("div",{className:"revenue-bars",children:[n.jsx("div",{className:"bar",style:{height:"40%"},"data-value":"₹12k"}),n.jsx("div",{className:"bar",style:{height:"60%"},"data-value":"₹18k"}),n.jsx("div",{className:"bar",style:{height:"80%"},"data-value":"₹24k"}),n.jsx("div",{className:"bar",style:{height:"55%"},"data-value":"₹16.5k"}),n.jsx("div",{className:"bar",style:{height:"70%"},"data-value":"₹21k"}),n.jsx("div",{className:"bar",style:{height:"90%"},"data-value":"₹27k"}),n.jsx("div",{className:"bar",style:{height:"100%"},"data-value":"₹30k"})]})})]}),n.jsxs(mm,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z",clipRule:"evenodd"})}),"Occupancy Rate"]}),n.jsxs(q8,{children:[n.jsx("div",{className:"occupancy-circle"}),n.jsxs("div",{className:"occupancy-legend",children:[n.jsx("div",{className:"legend-item",style:{"--color":"#ED6D05"},children:"Occupied"}),n.jsx("div",{className:"legend-item",style:{"--color":"#e9ecef"},children:"Available"})]})]})]})]}),n.jsxs(V8,{children:[n.jsxs(X8,{children:[n.jsxs(Ea,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})}),"Recent Bookings"]}),n.jsx(Z8,{children:i.recentBookings.map(v=>n.jsxs("div",{className:"booking-item",children:[n.jsxs("div",{className:"booking-info",children:[n.jsx("div",{className:"guest-name",children:v.guestName}),n.jsxs("div",{className:"booking-details",children:[v.roomType," • ",v.checkIn," to ",v.checkOut]})]}),n.jsx("div",{className:`booking-status ${v.status}`,children:v.status})]},v.id))})]}),n.jsxs(Ea,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Room Status Overview"]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"var(--space-md)"},children:[n.jsxs("div",{style:{textAlign:"center",padding:"var(--space-lg)",background:"#f8f9fa",borderRadius:"12px"},children:[n.jsx("div",{style:{fontSize:"2rem",fontWeight:"700",color:"#28a745"},children:d.available}),n.jsx("div",{style:{color:"#666"},children:"Available"})]}),n.jsxs("div",{style:{textAlign:"center",padding:"var(--space-lg)",background:"#f8f9fa",borderRadius:"12px"},children:[n.jsx("div",{style:{fontSize:"2rem",fontWeight:"700",color:"#e74c3c"},children:d.occupied}),n.jsx("div",{style:{color:"#666"},children:"Occupied"})]}),n.jsxs("div",{style:{textAlign:"center",padding:"var(--space-lg)",background:"#f8f9fa",borderRadius:"12px"},children:[n.jsx("div",{style:{fontSize:"2rem",fontWeight:"700",color:"#ffc107"},children:d.maintenance}),n.jsx("div",{style:{color:"#666"},children:"Maintenance"})]})]})]}),n.jsxs(Ea,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),"Top Performing Rooms"]}),n.jsx(Y8,{children:[{id:1,name:"Presidential Suite",bookings:45,revenue:"₹67,500"},{id:2,name:"Ocean View Deluxe",bookings:38,revenue:"₹45,600"},{id:3,name:"Executive Suite",bookings:32,revenue:"₹38,400"},{id:4,name:"Family Suite",bookings:28,revenue:"₹50,400"},{id:5,name:"Penthouse Suite",bookings:22,revenue:"₹118,800"}].map(v=>n.jsxs("div",{className:"room-item",children:[n.jsxs("div",{className:"room-info",children:[n.jsx("div",{className:"room-avatar",children:v.id}),n.jsxs("div",{className:"room-details",children:[n.jsx("div",{className:"room-name",children:v.name}),n.jsxs("div",{className:"room-stats",children:[v.bookings," bookings"]})]})]}),n.jsx("div",{className:"room-revenue",children:v.revenue})]},v.id))})]}),n.jsxs(Ea,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),"Guest Feedback"]}),n.jsx(Q8,{children:[{id:1,name:"Sarah Johnson",rating:5,feedback:"Exceptional service and beautiful rooms. The staff went above and beyond to make our stay memorable."},{id:2,name:"Michael Chen",rating:4,feedback:"Great location and amenities. The breakfast was outstanding, though the WiFi could be faster."},{id:3,name:"Emma Rodriguez",rating:5,feedback:"Perfect romantic getaway. The spa facilities were amazing and the room was spotless."},{id:4,name:"David Thompson",rating:4,feedback:"Excellent value for money. The pool area was fantastic and the concierge was very helpful."}].map(v=>n.jsxs("div",{className:"feedback-item",children:[n.jsxs("div",{className:"feedback-header",children:[n.jsx("span",{className:"guest-name",children:v.name}),n.jsx("div",{className:"rating",children:[...Array(v.rating)].map((x,w)=>n.jsx("svg",{className:"star",fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},w))})]}),n.jsx("div",{className:"feedback-text",children:v.feedback})]},v.id))})]})]}),n.jsxs(eS,{children:[n.jsxs(J8,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z",clipRule:"evenodd"})}),"Notifications"]}),n.jsxs("div",{className:"notification-item",children:[n.jsx("div",{className:"notification-icon",style:{background:"#28a745"},children:n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"notification-content",children:[n.jsx("div",{className:"notification-title",children:"New Booking Confirmed"}),n.jsx("div",{className:"notification-message",children:"Sarah Johnson booked the Presidential Suite for 3 nights"}),n.jsx("div",{className:"notification-time",children:"2 minutes ago"})]})]}),n.jsxs("div",{className:"notification-item",children:[n.jsx("div",{className:"notification-icon",style:{background:"#ffc107"},children:n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"notification-content",children:[n.jsx("div",{className:"notification-title",children:"Maintenance Required"}),n.jsx("div",{className:"notification-message",children:"Room 205 air conditioning needs servicing"}),n.jsx("div",{className:"notification-time",children:"1 hour ago"})]})]}),n.jsxs("div",{className:"notification-item",children:[n.jsx("div",{className:"notification-icon",style:{background:"#17a2b8"},children:n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"notification-content",children:[n.jsx("div",{className:"notification-title",children:"Guest Feedback"}),n.jsx("div",{className:"notification-message",children:"Emma left a 5-star review for her stay"}),n.jsx("div",{className:"notification-time",children:"3 hours ago"})]})]})]}),n.jsxs(K8,{children:[n.jsxs("h3",{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z",clipRule:"evenodd"})}),"Recent Activity"]}),n.jsxs("div",{className:"activity-item",children:[n.jsx("div",{className:"activity-icon",style:{background:"#28a745"},children:n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"activity-content",children:[n.jsx("div",{className:"activity-text",children:"Check-out completed for Room 301"}),n.jsx("div",{className:"activity-time",children:"5 minutes ago"})]})]}),n.jsxs("div",{className:"activity-item",children:[n.jsx("div",{className:"activity-icon",style:{background:"#007bff"},children:n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"activity-content",children:[n.jsx("div",{className:"activity-text",children:"New booking created for Family Suite"}),n.jsx("div",{className:"activity-time",children:"12 minutes ago"})]})]}),n.jsxs("div",{className:"activity-item",children:[n.jsx("div",{className:"activity-icon",style:{background:"#ffc107"},children:n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"activity-content",children:[n.jsx("div",{className:"activity-text",children:"Maintenance request for Room 205"}),n.jsx("div",{className:"activity-time",children:"1 hour ago"})]})]}),n.jsxs("div",{className:"activity-item",children:[n.jsx("div",{className:"activity-icon",style:{background:"#17a2b8"},children:n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"activity-content",children:[n.jsx("div",{className:"activity-text",children:"Guest check-in for Presidential Suite"}),n.jsx("div",{className:"activity-time",children:"2 hours ago"})]})]})]}),n.jsxs(tS,{children:[n.jsx("h3",{children:"Quick Actions"}),n.jsxs("div",{className:"action-grid",children:[n.jsxs(Zr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Add New Room"]}),n.jsxs(Zr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"})}),"Manage Bookings"]}),n.jsxs(Zr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),"User Management"]}),n.jsxs(Zr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"})}),"View Reports"]}),n.jsxs(Zr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z",clipRule:"evenodd"})}),"Room Management"]}),n.jsxs(Zr,{children:[n.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),"Guest Services"]})]})]}),n.jsxs(rS,{children:[n.jsx("h3",{children:"System Status"}),p.map((v,x)=>n.jsxs("div",{className:"status-item",children:[n.jsx("span",{className:"status-label",children:v.label}),n.jsx("span",{className:`status-value ${v.class}`,children:v.value})]},x))]})]})]})]})}const iS=u.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,aS=u.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ED6D05, #FF9A3C);
  }

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-xl);
    border-radius: 16px;
  }
`,oS=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: var(--space-md);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    font-size: 1.125rem;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .last-updated {
    font-size: 0.9rem;
    color: #888;
    font-style: italic;
  }
`,sS=u.div`
  line-height: 1.8;

  h2 {
    font-size: 1.75rem;
    color: #333;
    margin: var(--space-2xl) 0 var(--space-lg);
    font-weight: 600;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: var(--space-sm);

    &:first-child {
      margin-top: 0;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.375rem;
    color: #333;
    margin: var(--space-xl) 0 var(--space-md);
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    color: #555;
    margin-bottom: var(--space-md);
  }

  ul, ol {
    margin: var(--space-md) 0;
    padding-left: var(--space-xl);

    li {
      margin-bottom: var(--space-sm);
      color: #555;
    }
  }

  .highlight {
    background: #fff3cd;
    padding: var(--space-sm) var(--space-md);
    border-radius: 8px;
    border-left: 4px solid #ffc107;
    margin: var(--space-md) 0;
  }

  .contact-info {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: var(--space-lg);
    margin: var(--space-xl) 0;

    h4 {
      font-size: 1.125rem;
      color: #333;
      margin-bottom: var(--space-sm);
      font-weight: 600;
    }

    p {
      margin-bottom: var(--space-xs);
      color: #555;
    }
  }
`,lS=u.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  margin-top: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;function cS(){return n.jsx(iS,{children:n.jsxs(aS,{children:[n.jsxs(oS,{children:[n.jsx("h1",{children:"Terms of Service"}),n.jsx("p",{children:"These terms and conditions outline the rules and regulations for the use of StayEasy Hotel's website and services."}),n.jsx("div",{className:"last-updated",children:"Last updated: January 15, 2024"})]}),n.jsxs(sS,{children:[n.jsx("h2",{children:"1. Acceptance of Terms"}),n.jsx("p",{children:"By accessing and using StayEasy Hotel's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."}),n.jsx("h2",{children:"2. Use License"}),n.jsx("p",{children:"Permission is granted to temporarily access the materials (information or software) on StayEasy Hotel's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"modify or copy the materials"}),n.jsx("li",{children:"use the materials for any commercial purpose or for any public display (commercial or non-commercial)"}),n.jsx("li",{children:"attempt to decompile or reverse engineer any software contained on StayEasy Hotel's website"}),n.jsx("li",{children:"remove any copyright or other proprietary notations from the materials"})]}),n.jsx("h2",{children:"3. Booking and Reservation Terms"}),n.jsx("h3",{children:"3.1 Reservation Confirmation"}),n.jsx("p",{children:"All reservations are subject to availability and confirmation. We reserve the right to refuse service to anyone for any lawful reason."}),n.jsx("h3",{children:"3.2 Cancellation Policy"}),n.jsx("p",{children:"Cancellation policies vary by room type and rate plan. Please review the specific cancellation terms for your reservation at the time of booking."}),n.jsx("h3",{children:"3.3 Check-in and Check-out"}),n.jsx("p",{children:"Standard check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges."}),n.jsx("h2",{children:"4. User Account and Responsibilities"}),n.jsx("p",{children:"As a user of our services, you agree to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Provide accurate and complete information when creating an account"}),n.jsx("li",{children:"Maintain the confidentiality of your account credentials"}),n.jsx("li",{children:"Be responsible for all activities that occur under your account"}),n.jsx("li",{children:"Notify us immediately of any unauthorized use of your account"}),n.jsx("li",{children:"Use the service in compliance with all applicable laws and regulations"})]}),n.jsx("h2",{children:"5. Payment Terms"}),n.jsx("p",{children:"All payments are processed securely through our payment partners. By making a reservation, you authorize us to charge your payment method for the total amount due, including any applicable taxes and fees."}),n.jsxs("div",{className:"highlight",children:[n.jsx("strong",{children:"Important:"})," All rates are quoted in the currency selected during booking and include applicable taxes unless otherwise specified."]}),n.jsx("h2",{children:"6. Privacy and Data Protection"}),n.jsx("p",{children:"Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices."}),n.jsx("h2",{children:"7. Limitation of Liability"}),n.jsx("p",{children:"In no event shall StayEasy Hotel or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StayEasy Hotel's website."}),n.jsx("h2",{children:"8. Contact Information"}),n.jsxs("div",{className:"contact-info",children:[n.jsx("h4",{children:"StayEasy Hotel Management"}),n.jsxs("p",{children:[n.jsx("strong",{children:"Address:"})," 123 Luxury Avenue, Hospitality District, City, State 12345"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Phone:"})," +1 (555) 123-4567"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Email:"})," legal@stayeasy.com"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Business Hours:"})," Monday - Friday, 9:00 AM - 6:00 PM EST"]})]}),n.jsx("h2",{children:"9. Governing Law"}),n.jsx("p",{children:"These terms and conditions are governed by and construed in accordance with the laws of [Jurisdiction], and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location."}),n.jsx("h2",{children:"10. Changes to Terms"}),n.jsx("p",{children:"We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect."})]}),n.jsxs(lS,{children:[n.jsx(B,{variant:"outline",as:$,to:"/signup",children:"Back to Sign Up"}),n.jsx(B,{as:$,to:"/privacy",children:"View Privacy Policy"})]})]})})}const dS=u.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`,uS=u.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ED6D05, #FF9A3C);
  }

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-xl);
    border-radius: 16px;
  }
`,pS=u.div`
  text-align: center;
  margin-bottom: var(--space-3xl);

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: var(--space-md);
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    font-size: 1.125rem;
    line-height: 1.6;
    margin-bottom: var(--space-lg);
  }

  .last-updated {
    font-size: 0.9rem;
    color: #888;
    font-style: italic;
  }
`,mS=u.div`
  line-height: 1.8;

  h2 {
    font-size: 1.75rem;
    color: #333;
    margin: var(--space-2xl) 0 var(--space-lg);
    font-weight: 600;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: var(--space-sm);

    &:first-child {
      margin-top: 0;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.375rem;
    color: #333;
    margin: var(--space-xl) 0 var(--space-md);
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    color: #555;
    margin-bottom: var(--space-md);
  }

  ul, ol {
    margin: var(--space-md) 0;
    padding-left: var(--space-xl);

    li {
      margin-bottom: var(--space-sm);
      color: #555;
    }
  }

  .highlight {
    background: #d1ecf1;
    padding: var(--space-sm) var(--space-md);
    border-radius: 8px;
    border-left: 4px solid #17a2b8;
    margin: var(--space-md) 0;
  }

  .contact-info {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: var(--space-lg);
    margin: var(--space-xl) 0;

    h4 {
      font-size: 1.125rem;
      color: #333;
      margin-bottom: var(--space-sm);
      font-weight: 600;
    }

    p {
      margin-bottom: var(--space-xs);
      color: #555;
    }
  }
`,fS=u.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  margin-top: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;function hS(){return n.jsx(dS,{children:n.jsxs(uS,{children:[n.jsxs(pS,{children:[n.jsx("h1",{children:"Privacy Policy"}),n.jsx("p",{children:"This Privacy Policy describes how StayEasy Hotel collects, uses, and protects your personal information when you use our services."}),n.jsx("div",{className:"last-updated",children:"Last updated: January 15, 2024"})]}),n.jsxs(mS,{children:[n.jsx("h2",{children:"1. Information We Collect"}),n.jsx("p",{children:"We collect information you provide directly to us, such as when you create an account, make a reservation, or contact us for support."}),n.jsx("h3",{children:"1.1 Personal Information"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Name, email address, and phone number"}),n.jsx("li",{children:"Billing and payment information"}),n.jsx("li",{children:"Government-issued identification (when required)"}),n.jsx("li",{children:"Communication preferences"})]}),n.jsx("h3",{children:"1.2 Usage Information"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Information about how you use our website and services"}),n.jsx("li",{children:"Device information and browser type"}),n.jsx("li",{children:"IP address and location information"}),n.jsx("li",{children:"Pages visited and features used"})]}),n.jsx("h2",{children:"2. How We Use Your Information"}),n.jsx("p",{children:"We use the information we collect to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Process and manage your reservations"}),n.jsx("li",{children:"Provide customer support and respond to inquiries"}),n.jsx("li",{children:"Send booking confirmations and important updates"}),n.jsx("li",{children:"Improve our services and develop new features"}),n.jsx("li",{children:"Comply with legal obligations and prevent fraud"}),n.jsx("li",{children:"Send marketing communications (with your consent)"})]}),n.jsx("h2",{children:"3. Information Sharing and Disclosure"}),n.jsx("p",{children:"We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:"}),n.jsx("h3",{children:"3.1 Service Providers"}),n.jsx("p",{children:"We may share information with trusted third-party service providers who assist us in operating our business, such as payment processors, email service providers, and analytics companies."}),n.jsx("h3",{children:"3.2 Legal Requirements"}),n.jsx("p",{children:"We may disclose your information if required by law, legal process, or government request, or to protect our rights, property, or safety."}),n.jsx("h3",{children:"3.3 Business Transfers"}),n.jsx("p",{children:"In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction."}),n.jsx("h2",{children:"4. Data Security"}),n.jsx("p",{children:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."}),n.jsxs("div",{className:"highlight",children:[n.jsx("strong",{children:"Security Measures:"})," We use industry-standard encryption for data transmission and storage, regular security audits, and access controls to protect your information."]}),n.jsx("h2",{children:"5. Your Rights and Choices"}),n.jsx("p",{children:"You have certain rights regarding your personal information:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Access:"})," Request a copy of the personal information we hold about you"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Correction:"})," Request correction of inaccurate or incomplete information"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Deletion:"})," Request deletion of your personal information (subject to legal requirements)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Portability:"})," Request transfer of your data in a structured format"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Opt-out:"})," Unsubscribe from marketing communications at any time"]})]}),n.jsx("h2",{children:"6. Cookies and Tracking Technologies"}),n.jsx("p",{children:"We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences."}),n.jsx("h3",{children:"6.1 Types of Cookies We Use"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Essential Cookies:"})," Required for basic website functionality"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Performance Cookies:"})," Help us understand how visitors use our site"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Functional Cookies:"})," Remember your preferences and settings"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Marketing Cookies:"})," Used to deliver relevant advertisements"]})]}),n.jsx("h2",{children:"7. Data Retention"}),n.jsx("p",{children:"We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law."}),n.jsx("h2",{children:"8. International Data Transfers"}),n.jsx("p",{children:"Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during such transfers."}),n.jsx("h2",{children:"9. Children's Privacy"}),n.jsx("p",{children:"Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18."}),n.jsx("h2",{children:"10. Changes to This Policy"}),n.jsx("p",{children:'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.'}),n.jsx("h2",{children:"11. Contact Us"}),n.jsxs("div",{className:"contact-info",children:[n.jsx("h4",{children:"Data Protection Officer"}),n.jsxs("p",{children:[n.jsx("strong",{children:"Address:"})," 123 Luxury Avenue, Hospitality District, City, State 12345"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Phone:"})," +1 (555) 123-4567"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Email:"})," privacy@stayeasy.com"]}),n.jsxs("p",{children:[n.jsx("strong",{children:"Business Hours:"})," Monday - Friday, 9:00 AM - 6:00 PM EST"]})]}),n.jsx("p",{children:"If you have any questions about this Privacy Policy or our data practices, please contact us using the information provided above."})]}),n.jsxs(fS,{children:[n.jsx(B,{variant:"outline",as:$,to:"/signup",children:"Back to Sign Up"}),n.jsx(B,{as:$,to:"/terms",children:"View Terms of Service"})]})]})})}const gS=hy`
  :root {
    --primary-color: #ED6D05;
    --secondary-color: #FF9A3C;
    --text-color: #333;
    --text-light: #666;
    --background-light: #FFF5E9;
    --white: #ffffff;
    --error: #e74c3c;
    --warning: #f39c12;
    --success: #2ecc71;

    /* Enhanced Color Palette */
    --primary-gradient: linear-gradient(135deg, #ED6D05 0%, #FF9A3C 100%);
    --primary-gradient-hover: linear-gradient(135deg, #D45A04 0%, #E8882A 100%);
    --navbar-bg: rgba(255, 255, 255, 0.95);
    --navbar-bg-mobile: rgba(237, 109, 5, 0.98);
    --navbar-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --navbar-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.15);
    --dropdown-bg: rgba(255, 255, 255, 0.98);
    --dropdown-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    --border-light: rgba(237, 109, 5, 0.2);
    --hover-overlay: rgba(237, 109, 5, 0.1);
    --active-overlay: rgba(237, 109, 5, 0.2);

    /* Spacing Scale */
    --space-xs: 0.25rem;   /* 4px */
    --space-sm: 0.5rem;    /* 8px */
    --space-md: 1rem;      /* 16px */
    --space-lg: 1.5rem;    /* 24px */
    --space-xl: 2rem;      /* 32px */
    --space-2xl: 3rem;     /* 48px */
    --space-3xl: 4rem;     /* 64px */
    --space-4xl: 6rem;     /* 96px */

    /* Container Sizes */
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    --container-2xl: 1536px;

    /* Navbar Specific */
    --navbar-height: 80px;
    --navbar-height-mobile: 70px;
    --nav-item-spacing: 0.5rem;
    --dropdown-width: 280px;
    --dropdown-item-height: 48px;
    --border-radius: 12px;
    --border-radius-small: 8px;
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.4s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text-color);
    background-color: var(--background-light);
    line-height: 1.6;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: var(--space-lg);
    line-height: 1.2;
    font-weight: 600;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: var(--space-xl);
  }

  h2 {
    font-size: 2rem;
    margin-bottom: var(--space-lg);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-md);
  }

  p {
    margin-bottom: var(--space-md);
    line-height: 1.7;
  }

  button {
    cursor: pointer;
    background-color: var(--primary-color);
    color: var(--white);
    border: none;
    padding: var(--space-sm) var(--space-lg);
    border-radius: 6px;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: #E07F1C;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* Enhanced Container System */
  .container {
    width: 100%;
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--space-md);
  }

  .container-sm {
    max-width: var(--container-sm);
  }

  .container-md {
    max-width: var(--container-md);
  }

  .container-lg {
    max-width: var(--container-lg);
  }

  .container-xl {
    max-width: var(--container-xl);
  }

  .container-2xl {
    max-width: var(--container-2xl);
  }

  /* Comprehensive Spacing Utilities */
  /* Margins */
  .m-0 { margin: 0; }
  .m-xs { margin: var(--space-xs); }
  .m-sm { margin: var(--space-sm); }
  .m-md { margin: var(--space-md); }
  .m-lg { margin: var(--space-lg); }
  .m-xl { margin: var(--space-xl); }
  .m-2xl { margin: var(--space-2xl); }
  .m-3xl { margin: var(--space-3xl); }
  .m-4xl { margin: var(--space-4xl); }

  .mx-auto { margin-left: auto; margin-right: auto; }
  .mx-0 { margin-left: 0; margin-right: 0; }
  .mx-xs { margin-left: var(--space-xs); margin-right: var(--space-xs); }
  .mx-sm { margin-left: var(--space-sm); margin-right: var(--space-sm); }
  .mx-md { margin-left: var(--space-md); margin-right: var(--space-md); }
  .mx-lg { margin-left: var(--space-lg); margin-right: var(--space-lg); }
  .mx-xl { margin-left: var(--space-xl); margin-right: var(--space-xl); }

  .my-0 { margin-top: 0; margin-bottom: 0; }
  .my-xs { margin-top: var(--space-xs); margin-bottom: var(--space-xs); }
  .my-sm { margin-top: var(--space-sm); margin-bottom: var(--space-sm); }
  .my-md { margin-top: var(--space-md); margin-bottom: var(--space-md); }
  .my-lg { margin-top: var(--space-lg); margin-bottom: var(--space-lg); }
  .my-xl { margin-top: var(--space-xl); margin-bottom: var(--space-xl); }

  .mt-0 { margin-top: 0; }
  .mt-xs { margin-top: var(--space-xs); }
  .mt-sm { margin-top: var(--space-sm); }
  .mt-md { margin-top: var(--space-md); }
  .mt-lg { margin-top: var(--space-lg); }
  .mt-xl { margin-top: var(--space-xl); }
  .mt-2xl { margin-top: var(--space-2xl); }
  .mt-3xl { margin-top: var(--space-3xl); }
  .mt-4xl { margin-top: var(--space-4xl); }

  .mb-0 { margin-bottom: 0; }
  .mb-xs { margin-bottom: var(--space-xs); }
  .mb-sm { margin-bottom: var(--space-sm); }
  .mb-md { margin-bottom: var(--space-md); }
  .mb-lg { margin-bottom: var(--space-lg); }
  .mb-xl { margin-bottom: var(--space-xl); }
  .mb-2xl { margin-bottom: var(--space-2xl); }
  .mb-3xl { margin-bottom: var(--space-3xl); }
  .mb-4xl { margin-bottom: var(--space-4xl); }

  .ml-0 { margin-left: 0; }
  .ml-xs { margin-left: var(--space-xs); }
  .ml-sm { margin-left: var(--space-sm); }
  .ml-md { margin-left: var(--space-md); }
  .ml-lg { margin-left: var(--space-lg); }
  .ml-xl { margin-left: var(--space-xl); }

  .mr-0 { margin-right: 0; }
  .mr-xs { margin-right: var(--space-xs); }
  .mr-sm { margin-right: var(--space-sm); }
  .mr-md { margin-right: var(--space-md); }
  .mr-lg { margin-right: var(--space-lg); }
  .mr-xl { margin-right: var(--space-xl); }

  /* Padding */
  .p-0 { padding: 0; }
  .p-xs { padding: var(--space-xs); }
  .p-sm { padding: var(--space-sm); }
  .p-md { padding: var(--space-md); }
  .p-lg { padding: var(--space-lg); }
  .p-xl { padding: var(--space-xl); }
  .p-2xl { padding: var(--space-2xl); }
  .p-3xl { padding: var(--space-3xl); }
  .p-4xl { padding: var(--space-4xl); }

  .px-0 { padding-left: 0; padding-right: 0; }
  .px-xs { padding-left: var(--space-xs); padding-right: var(--space-xs); }
  .px-sm { padding-left: var(--space-sm); padding-right: var(--space-sm); }
  .px-md { padding-left: var(--space-md); padding-right: var(--space-md); }
  .px-lg { padding-left: var(--space-lg); padding-right: var(--space-lg); }
  .px-xl { padding-left: var(--space-xl); padding-right: var(--space-xl); }

  .py-0 { padding-top: 0; padding-bottom: 0; }
  .py-xs { padding-top: var(--space-xs); padding-bottom: var(--space-xs); }
  .py-sm { padding-top: var(--space-sm); padding-bottom: var(--space-sm); }
  .py-md { padding-top: var(--space-md); padding-bottom: var(--space-md); }
  .py-lg { padding-top: var(--space-lg); padding-bottom: var(--space-lg); }
  .py-xl { padding-top: var(--space-xl); padding-bottom: var(--space-xl); }

  .pt-0 { padding-top: 0; }
  .pt-xs { padding-top: var(--space-xs); }
  .pt-sm { padding-top: var(--space-sm); }
  .pt-md { padding-top: var(--space-md); }
  .pt-lg { padding-top: var(--space-lg); }
  .pt-xl { padding-top: var(--space-xl); }

  .pb-0 { padding-bottom: 0; }
  .pb-xs { padding-bottom: var(--space-xs); }
  .pb-sm { padding-bottom: var(--space-sm); }
  .pb-md { padding-bottom: var(--space-md); }
  .pb-lg { padding-bottom: var(--space-lg); }
  .pb-xl { padding-bottom: var(--space-xl); }

  .pl-0 { padding-left: 0; }
  .pl-xs { padding-left: var(--space-xs); }
  .pl-sm { padding-left: var(--space-sm); }
  .pl-md { padding-left: var(--space-md); }
  .pl-lg { padding-left: var(--space-lg); }
  .pl-xl { padding-left: var(--space-xl); }

  .pr-0 { padding-right: 0; }
  .pr-xs { padding-right: var(--space-xs); }
  .pr-sm { padding-right: var(--space-sm); }
  .pr-md { padding-right: var(--space-md); }
  .pr-lg { padding-right: var(--space-lg); }
  .pr-xl { padding-right: var(--space-xl); }

  /* Gap Utilities for Flexbox and Grid */
  .gap-0 { gap: 0; }
  .gap-xs { gap: var(--space-xs); }
  .gap-sm { gap: var(--space-sm); }
  .gap-md { gap: var(--space-md); }
  .gap-lg { gap: var(--space-lg); }
  .gap-xl { gap: var(--space-xl); }
  .gap-2xl { gap: var(--space-2xl); }

  /* Text Alignment */
  .text-left { text-align: left; }
  .text-center { text-align: center; }
  .text-right { text-align: right; }

  /* Display Utilities */
  .block { display: block; }
  .inline-block { display: inline-block; }
  .inline { display: inline; }
  .flex { display: flex; }
  .inline-flex { display: inline-flex; }
  .grid { display: grid; }

  /* Flexbox Utilities */
  .flex-row { flex-direction: row; }
  .flex-col { flex-direction: column; }
  .flex-wrap { flex-wrap: wrap; }
  .flex-nowrap { flex-wrap: nowrap; }

  .justify-start { justify-content: flex-start; }
  .justify-center { justify-content: center; }
  .justify-end { justify-content: flex-end; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .justify-evenly { justify-content: space-evenly; }

  .items-start { align-items: flex-start; }
  .items-center { align-items: center; }
  .items-end { align-items: flex-end; }
  .items-stretch { align-items: stretch; }

  .flex-1 { flex: 1; }
  .flex-auto { flex: auto; }
  .flex-none { flex: none; }

  /* Responsive Utilities */
  @media (max-width: 640px) {
    .container { padding: 0 var(--space-sm); }
    h1 { font-size: 2rem; }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.375rem; }

    .sm\:m-0 { margin: 0; }
    .sm\:m-xs { margin: var(--space-xs); }
    .sm\:m-sm { margin: var(--space-sm); }
    .sm\:m-md { margin: var(--space-md); }
    .sm\:m-lg { margin: var(--space-lg); }

    .sm\:p-0 { padding: 0; }
    .sm\:p-xs { padding: var(--space-xs); }
    .sm\:p-sm { padding: var(--space-sm); }
    .sm\:p-md { padding: var(--space-md); }
    .sm\:p-lg { padding: var(--space-lg); }

    .sm\:gap-xs { gap: var(--space-xs); }
    .sm\:gap-sm { gap: var(--space-sm); }
    .sm\:gap-md { gap: var(--space-md); }
    .sm\:gap-lg { gap: var(--space-lg); }

    .sm\:text-left { text-align: left; }
    .sm\:text-center { text-align: center; }
    .sm\:text-right { text-align: right; }
  }

  @media (max-width: 768px) {
    .md\:m-0 { margin: 0; }
    .md\:m-xs { margin: var(--space-xs); }
    .md\:m-sm { margin: var(--space-sm); }
    .md\:m-md { margin: var(--space-md); }
    .md\:m-lg { margin: var(--space-lg); }

    .md\:p-0 { padding: 0; }
    .md\:p-xs { padding: var(--space-xs); }
    .md\:p-sm { padding: var(--space-sm); }
    .md\:p-md { padding: var(--space-md); }
    .md\:p-lg { padding: var(--space-lg); }

    .md\:gap-xs { gap: var(--space-xs); }
    .md\:gap-sm { gap: var(--space-sm); }
    .md\:gap-md { gap: var(--space-md); }
    .md\:gap-lg { gap: var(--space-lg); }
  }

  /* Section Spacing */
  section {
    padding: var(--space-3xl) 0;
  }

  section:first-of-type {
    padding-top: var(--space-4xl);
  }

  section:last-of-type {
    padding-bottom: var(--space-4xl);
  }

  /* Form Elements */
  input, select, textarea {
    padding: var(--space-sm) var(--space-md);
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(237, 109, 5, 0.1);
    }
  }

  /* Card Components */
  .card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
  }

  /* Utility Classes for Common Patterns */
  .section-padding {
    padding: var(--space-3xl) var(--space-md);
  }

  .section-margin {
    margin: var(--space-2xl) 0;
  }

  .content-width {
    max-width: 65ch;
    margin: 0 auto;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;function xS(){return n.jsx(Sy,{children:n.jsxs(hv,{children:[n.jsx(gS,{}),n.jsx(w2,{children:n.jsxs(iv,{children:[n.jsx(Q,{path:"/home",element:n.jsx(E2,{})}),n.jsx(Q,{path:"/",element:n.jsx(mi,{to:"/home",replace:!0})}),n.jsx(Q,{path:"/rooms",element:n.jsx(Ob,{})}),n.jsx(Q,{path:"/bookings",element:n.jsx(Gb,{})}),n.jsx(Q,{path:"/booking",element:n.jsx(t3,{})}),n.jsx(Q,{path:"/cart",element:n.jsx(d3,{})}),n.jsx(Q,{path:"/checkout",element:n.jsx(k3,{})}),n.jsx(Q,{path:"/about",element:n.jsx(T3,{})}),n.jsx(Q,{path:"/contact",element:n.jsx($3,{})}),n.jsx(Q,{path:"/dining",element:n.jsx(c5,{})}),n.jsx(Q,{path:"/spa",element:n.jsx(T5,{})}),n.jsx(Q,{path:"/events",element:n.jsx(aj,{})}),n.jsx(Q,{path:"/entertainment",element:n.jsx(Tj,{})}),n.jsx(Q,{path:"/travelservices",element:n.jsx(t6,{})}),n.jsx(Q,{path:"/loyalty",element:n.jsx(E6,{})}),n.jsx(Q,{path:"/sustainability",element:n.jsx(n4,{})}),n.jsx(Q,{path:"/gallery",element:n.jsx(S4,{})}),n.jsx(Q,{path:"/faq",element:n.jsx(K4,{})}),n.jsx(Q,{path:"/shop",element:n.jsx(tk,{})}),n.jsx(Q,{path:"/books",element:n.jsx(yk,{})}),n.jsx(Q,{path:"/profile",element:n.jsx(s8,{})}),n.jsx(Q,{path:"/profile/edit",element:n.jsx(x8,{})}),n.jsx(Q,{path:"/profile/image",element:n.jsx(F8,{})}),n.jsx(Q,{path:"/dashboard",element:n.jsx(I0,{adminOnly:!0,children:n.jsx(nS,{})})}),n.jsx(Q,{path:"/login",element:n.jsx(Nk,{})}),n.jsx(Q,{path:"/signup",element:n.jsx(Lk,{})}),n.jsx(Q,{path:"/forgot-password",element:n.jsx(qk,{})}),n.jsx(Q,{path:"/terms",element:n.jsx(cS,{})}),n.jsx(Q,{path:"/privacy",element:n.jsx(hS,{})}),n.jsx(Q,{path:"/dasboard",element:n.jsx(mi,{to:"/dashboard",replace:!0})})]})})]})})}const vS=Pt`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,yS=Pt`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,wS=Pt`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`,bS=Pt`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`,jS=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${e=>e.$isVisible?vS:yS} 0.5s ease-in-out;
`,kS=u.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`,SS=u.div`
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
`,CS=u.div`
  font-size: 4rem;
  animation: ${wS} 2s ease-in-out infinite;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`,ES=u.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,zS=u.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,PS=u.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`,Sl=u.div`
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: ${bS} 1.5s ease-in-out infinite;
  animation-delay: ${e=>e.$delay}s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,NS=u.div`
  width: 200px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin: 2rem auto 0;
  overflow: hidden;
`,DS=u.div`
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
  border-radius: 2px;
  animation: ${e=>e.$animate?"progress 2s ease-out forwards":void 0};

  @keyframes progress {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;function RS({onComplete:e}){const[t,r]=j.useState(!0),[i,a]=j.useState(!1);return j.useEffect(()=>{a(!0);const o=setTimeout(()=>{r(!1),setTimeout(()=>{e()},500)},2e3);return()=>clearTimeout(o)},[e]),n.jsxs(jS,{$isVisible:t,children:[n.jsx(kS,{}),n.jsxs(SS,{children:[n.jsx(CS,{children:"🏨"}),n.jsx(ES,{children:"Welcome to Our Hotel"}),n.jsx(zS,{children:"Preparing your experience..."}),n.jsxs(PS,{children:[n.jsx(Sl,{$delay:0}),n.jsx(Sl,{$delay:.2}),n.jsx(Sl,{$delay:.4})]}),n.jsx(NS,{children:n.jsx(DS,{$animate:i})})]})]})}var L0={exports:{}};(function(e,t){(function(r,i){e.exports=i()})($0,function(){return function(r){function i(o){if(a[o])return a[o].exports;var s=a[o]={exports:{},id:o,loaded:!1};return r[o].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}var a={};return i.m=r,i.c=a,i.p="dist/",i(0)}([function(r,i,a){function o(F){return F&&F.__esModule?F:{default:F}}var s=Object.assign||function(F){for(var Y=1;Y<arguments.length;Y++){var J=arguments[Y];for(var fe in J)Object.prototype.hasOwnProperty.call(J,fe)&&(F[fe]=J[fe])}return F},c=a(1),l=(o(c),a(6)),d=o(l),p=a(7),m=o(p),g=a(8),v=o(g),x=a(9),w=o(x),b=a(10),y=o(b),f=a(11),h=o(f),k=a(14),S=o(k),E=[],P=!1,z={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},L=function(){var F=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(F&&(P=!0),P)return E=(0,h.default)(E,z),(0,y.default)(E,z.once),E},_=function(){E=(0,S.default)(),L()},A=function(){E.forEach(function(F,Y){F.node.removeAttribute("data-aos"),F.node.removeAttribute("data-aos-easing"),F.node.removeAttribute("data-aos-duration"),F.node.removeAttribute("data-aos-delay")})},N=function(F){return F===!0||F==="mobile"&&w.default.mobile()||F==="phone"&&w.default.phone()||F==="tablet"&&w.default.tablet()||typeof F=="function"&&F()===!0},I=function(F){z=s(z,F),E=(0,S.default)();var Y=document.all&&!window.atob;return N(z.disable)||Y?A():(z.disableMutationObserver||v.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),z.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",z.easing),document.querySelector("body").setAttribute("data-aos-duration",z.duration),document.querySelector("body").setAttribute("data-aos-delay",z.delay),z.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?L(!0):z.startEvent==="load"?window.addEventListener(z.startEvent,function(){L(!0)}):document.addEventListener(z.startEvent,function(){L(!0)}),window.addEventListener("resize",(0,m.default)(L,z.debounceDelay,!0)),window.addEventListener("orientationchange",(0,m.default)(L,z.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,y.default)(E,z.once)},z.throttleDelay)),z.disableMutationObserver||v.default.ready("[data-aos]",_),E)};r.exports={init:I,refresh:L,refreshHard:_}},function(r,i){},,,,,function(r,i){(function(a){function o(N,I,F){function Y(ee){var We=X,Xt=ge;return X=ge=void 0,at=ee,te=N.apply(Xt,We)}function J(ee){return at=ee,ne=setTimeout(T,I),Xe?Y(ee):te}function fe(ee){var We=ee-ve,Xt=ee-at,Jd=I-We;return Ee?_(Jd,le-Xt):Jd}function R(ee){var We=ee-ve,Xt=ee-at;return ve===void 0||We>=I||We<0||Ee&&Xt>=le}function T(){var ee=A();return R(ee)?O(ee):void(ne=setTimeout(T,fe(ee)))}function O(ee){return ne=void 0,de&&X?Y(ee):(X=ge=void 0,te)}function H(){ne!==void 0&&clearTimeout(ne),at=0,X=ve=ge=ne=void 0}function V(){return ne===void 0?te:O(A())}function he(){var ee=A(),We=R(ee);if(X=arguments,ge=this,ve=ee,We){if(ne===void 0)return J(ve);if(Ee)return ne=setTimeout(T,I),Y(ve)}return ne===void 0&&(ne=setTimeout(T,I)),te}var X,ge,le,te,ne,ve,at=0,Xe=!1,Ee=!1,de=!0;if(typeof N!="function")throw new TypeError(g);return I=p(I)||0,c(F)&&(Xe=!!F.leading,Ee="maxWait"in F,le=Ee?L(p(F.maxWait)||0,I):le,de="trailing"in F?!!F.trailing:de),he.cancel=H,he.flush=V,he}function s(N,I,F){var Y=!0,J=!0;if(typeof N!="function")throw new TypeError(g);return c(F)&&(Y="leading"in F?!!F.leading:Y,J="trailing"in F?!!F.trailing:J),o(N,I,{leading:Y,maxWait:I,trailing:J})}function c(N){var I=typeof N>"u"?"undefined":m(N);return!!N&&(I=="object"||I=="function")}function l(N){return!!N&&(typeof N>"u"?"undefined":m(N))=="object"}function d(N){return(typeof N>"u"?"undefined":m(N))=="symbol"||l(N)&&z.call(N)==x}function p(N){if(typeof N=="number")return N;if(d(N))return v;if(c(N)){var I=typeof N.valueOf=="function"?N.valueOf():N;N=c(I)?I+"":I}if(typeof N!="string")return N===0?N:+N;N=N.replace(w,"");var F=y.test(N);return F||f.test(N)?h(N.slice(2),F?2:8):b.test(N)?v:+N}var m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},g="Expected a function",v=NaN,x="[object Symbol]",w=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,f=/^0o[0-7]+$/i,h=parseInt,k=(typeof a>"u"?"undefined":m(a))=="object"&&a&&a.Object===Object&&a,S=(typeof self>"u"?"undefined":m(self))=="object"&&self&&self.Object===Object&&self,E=k||S||Function("return this")(),P=Object.prototype,z=P.toString,L=Math.max,_=Math.min,A=function(){return E.Date.now()};r.exports=s}).call(i,function(){return this}())},function(r,i){(function(a){function o(A,N,I){function F(de){var ee=he,We=X;return he=X=void 0,ve=de,le=A.apply(We,ee)}function Y(de){return ve=de,te=setTimeout(R,N),at?F(de):le}function J(de){var ee=de-ne,We=de-ve,Xt=N-ee;return Xe?L(Xt,ge-We):Xt}function fe(de){var ee=de-ne,We=de-ve;return ne===void 0||ee>=N||ee<0||Xe&&We>=ge}function R(){var de=_();return fe(de)?T(de):void(te=setTimeout(R,J(de)))}function T(de){return te=void 0,Ee&&he?F(de):(he=X=void 0,le)}function O(){te!==void 0&&clearTimeout(te),ve=0,he=ne=X=te=void 0}function H(){return te===void 0?le:T(_())}function V(){var de=_(),ee=fe(de);if(he=arguments,X=this,ne=de,ee){if(te===void 0)return Y(ne);if(Xe)return te=setTimeout(R,N),F(ne)}return te===void 0&&(te=setTimeout(R,N)),le}var he,X,ge,le,te,ne,ve=0,at=!1,Xe=!1,Ee=!0;if(typeof A!="function")throw new TypeError(m);return N=d(N)||0,s(I)&&(at=!!I.leading,Xe="maxWait"in I,ge=Xe?z(d(I.maxWait)||0,N):ge,Ee="trailing"in I?!!I.trailing:Ee),V.cancel=O,V.flush=H,V}function s(A){var N=typeof A>"u"?"undefined":p(A);return!!A&&(N=="object"||N=="function")}function c(A){return!!A&&(typeof A>"u"?"undefined":p(A))=="object"}function l(A){return(typeof A>"u"?"undefined":p(A))=="symbol"||c(A)&&P.call(A)==v}function d(A){if(typeof A=="number")return A;if(l(A))return g;if(s(A)){var N=typeof A.valueOf=="function"?A.valueOf():A;A=s(N)?N+"":N}if(typeof A!="string")return A===0?A:+A;A=A.replace(x,"");var I=b.test(A);return I||y.test(A)?f(A.slice(2),I?2:8):w.test(A)?g:+A}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},m="Expected a function",g=NaN,v="[object Symbol]",x=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,y=/^0o[0-7]+$/i,f=parseInt,h=(typeof a>"u"?"undefined":p(a))=="object"&&a&&a.Object===Object&&a,k=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,S=h||k||Function("return this")(),E=Object.prototype,P=E.toString,z=Math.max,L=Math.min,_=function(){return S.Date.now()};r.exports=o}).call(i,function(){return this}())},function(r,i){function a(p){var m=void 0,g=void 0;for(m=0;m<p.length;m+=1)if(g=p[m],g.dataset&&g.dataset.aos||g.children&&a(g.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!o()}function c(p,m){var g=window.document,v=o(),x=new v(l);d=m,x.observe(g.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(p){p&&p.forEach(function(m){var g=Array.prototype.slice.call(m.addedNodes),v=Array.prototype.slice.call(m.removedNodes),x=g.concat(v);if(a(x))return d()})}Object.defineProperty(i,"__esModule",{value:!0});var d=function(){};i.default={isSupported:s,ready:c}},function(r,i){function a(g,v){if(!(g instanceof v))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function g(v,x){for(var w=0;w<x.length;w++){var b=x[w];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(v,b.key,b)}}return function(v,x,w){return x&&g(v.prototype,x),w&&g(v,w),v}}(),c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,m=function(){function g(){a(this,g)}return s(g,[{key:"phone",value:function(){var v=o();return!(!c.test(v)&&!l.test(v.substr(0,4)))}},{key:"mobile",value:function(){var v=o();return!(!d.test(v)&&!p.test(v.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),g}();i.default=new m},function(r,i){Object.defineProperty(i,"__esModule",{value:!0});var a=function(s,c,l){var d=s.node.getAttribute("data-aos-once");c>s.position?s.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!l&&d!=="true")&&s.node.classList.remove("aos-animate")},o=function(s,c){var l=window.pageYOffset,d=window.innerHeight;s.forEach(function(p,m){a(p,d+l,c)})};i.default=o},function(r,i,a){function o(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(i,"__esModule",{value:!0});var s=a(12),c=o(s),l=function(d,p){return d.forEach(function(m,g){m.node.classList.add("aos-init"),m.position=(0,c.default)(m.node,p.offset)}),d};i.default=l},function(r,i,a){function o(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(i,"__esModule",{value:!0});var s=a(13),c=o(s),l=function(d,p){var m=0,g=0,v=window.innerHeight,x={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(g=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(d=document.querySelectorAll(x.anchor)[0]),m=(0,c.default)(d).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":m+=d.offsetHeight/2;break;case"bottom-bottom":m+=d.offsetHeight;break;case"top-center":m+=v/2;break;case"bottom-center":m+=v/2+d.offsetHeight;break;case"center-center":m+=v/2+d.offsetHeight/2;break;case"top-top":m+=v;break;case"bottom-top":m+=d.offsetHeight+v;break;case"center-top":m+=d.offsetHeight/2+v}return x.anchorPlacement||x.offset||isNaN(p)||(g=p),m+g};i.default=l},function(r,i){Object.defineProperty(i,"__esModule",{value:!0});var a=function(o){for(var s=0,c=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)s+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),c+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:c,left:s}};i.default=a},function(r,i){Object.defineProperty(i,"__esModule",{value:!0});var a=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(s){return{node:s}})};i.default=a}])})})(L0);var TS=L0.exports;const AS=fm(TS);AS.init({duration:1e3,easing:"ease-out-back",once:!0});function OS(){const[e,t]=j.useState(!0),r=()=>{t(!1)};return n.jsx(uv,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:n.jsxs(z2,{children:[n.jsx(xS,{}),e&&n.jsx(RS,{onComplete:r})]})})}Cl.createRoot(document.getElementById("root")).render(n.jsx(Ne.StrictMode,{children:n.jsx(OS,{})}));
