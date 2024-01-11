(()=>{var ct=Object.defineProperty;var lt=(e,t)=>{for(var r in t)ct(e,r,{get:t[r],enumerable:!0})};function j(e,t){return function(){return e.apply(t,arguments)}}var{toString:ft}=Object.prototype,{getPrototypeOf:ae}=Object,K=(e=>t=>{let r=ft.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>K(t)===e),$=e=>t=>typeof t===e,{isArray:D}=Array,k=$("undefined");function dt(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Ce=O("ArrayBuffer");function pt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ce(e.buffer),t}var mt=$("string"),A=$("function"),Pe=$("number"),G=e=>e!==null&&typeof e=="object",ht=e=>e===!0||e===!1,W=e=>{if(K(e)!=="object")return!1;let t=ae(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=O("Date"),Et=O("File"),wt=O("Blob"),bt=O("FileList"),St=e=>G(e)&&A(e.pipe),xt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=K(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},Rt=O("URLSearchParams"),At=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),D(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{let s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length,u;for(n=0;n<i;n++)u=s[n],t.call(null,e[u],u,e)}}function Fe(e,t){t=t.toLowerCase();let r=Object.keys(e),n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}var De=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Le=e=>!k(e)&&e!==De;function ie(){let{caseless:e}=Le(this)&&this||{},t={},r=(n,o)=>{let s=e&&Fe(t,o)||o;W(t[s])&&W(n)?t[s]=ie(t[s],n):W(n)?t[s]=ie({},n):D(n)?t[s]=n.slice():t[s]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&H(arguments[n],r);return t}var Ot=(e,t,r,{allOwnKeys:n}={})=>(H(t,(o,s)=>{r&&A(o)?e[s]=j(o,r):e[s]=o},{allOwnKeys:n}),e),Tt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),gt=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Nt=(e,t,r,n)=>{let o,s,i,u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=r!==!1&&ae(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Ct=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return n!==-1&&n===r},Pt=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Pe(t))return null;let r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Ft=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ae(Uint8Array)),Dt=(e,t)=>{let n=(e&&e[Symbol.iterator]).call(e),o;for(;(o=n.next())&&!o.done;){let s=o.value;t.call(e,s[0],s[1])}},Lt=(e,t)=>{let r,n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Ut=O("HTMLFormElement"),_t=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),ge=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Bt=O("RegExp"),Ue=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};H(r,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(n[s]=i||o)}),Object.defineProperties(e,n)},jt=e=>{Ue(e,(t,r)=>{if(A(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let n=e[r];if(A(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},kt=(e,t)=>{let r={},n=o=>{o.forEach(s=>{r[s]=!0})};return D(e)?n(e):n(String(e).split(t)),r},Ht=()=>{},It=(e,t)=>(e=+e,Number.isFinite(e)?e:t),se="abcdefghijklmnopqrstuvwxyz",Ne="0123456789",_e={DIGIT:Ne,ALPHA:se,ALPHA_DIGIT:se+se.toUpperCase()+Ne},qt=(e=16,t=_e.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Mt(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var zt=e=>{let t=new Array(10),r=(n,o)=>{if(G(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;let s=D(n)?[]:{};return H(n,(i,u)=>{let p=r(i,o+1);!k(p)&&(s[u]=p)}),t[o]=void 0,s}}return n};return r(e,0)},Jt=O("AsyncFunction"),Vt=e=>e&&(G(e)||A(e))&&A(e.then)&&A(e.catch),a={isArray:D,isArrayBuffer:Ce,isBuffer:dt,isFormData:xt,isArrayBufferView:pt,isString:mt,isNumber:Pe,isBoolean:ht,isObject:G,isPlainObject:W,isUndefined:k,isDate:yt,isFile:Et,isBlob:wt,isRegExp:Bt,isFunction:A,isStream:St,isURLSearchParams:Rt,isTypedArray:Ft,isFileList:bt,forEach:H,merge:ie,extend:Ot,trim:At,stripBOM:Tt,inherits:gt,toFlatObject:Nt,kindOf:K,kindOfTest:O,endsWith:Ct,toArray:Pt,forEachEntry:Dt,matchAll:Lt,isHTMLForm:Ut,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:Ue,freezeMethods:jt,toObjectSet:kt,toCamelCase:_t,noop:Ht,toFiniteNumber:It,findKey:Fe,global:De,isContextDefined:Le,ALPHABET:_e,generateString:qt,isSpecCompliantForm:Mt,toJSONObject:zt,isAsyncFn:Jt,isThenable:Vt};function L(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}a.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Be=L.prototype,je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{je[e]={value:e}});Object.defineProperties(L,je);Object.defineProperty(Be,"isAxiosError",{value:!0});L.from=(e,t,r,n,o,s)=>{let i=Object.create(Be);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},u=>u!=="isAxiosError"),L.call(i,e.message,t,r,n,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var h=L;var X=null;function ue(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ke(e,t,r){return e?e.concat(t).map(function(o,s){return o=He(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function Wt(e){return a.isArray(e)&&!e.some(ue)}var Kt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $t(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(X||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,w){return!a.isUndefined(w[d])});let n=r.metaTokens,o=r.visitor||l,s=r.dots,i=r.indexes,p=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function m(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,d,w){let b=f;if(f&&!w&&typeof f=="object"){if(a.endsWith(d,"{}"))d=n?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Wt(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(b=a.toArray(f)))return d=He(d),b.forEach(function(N,ut){!(a.isUndefined(N)||N===null)&&t.append(i===!0?ke([d],ut,s):i===null?d:d+"[]",m(N))}),!1}return ue(f)?!0:(t.append(ke(w,d,s),m(f)),!1)}let c=[],E=Object.assign(Kt,{defaultVisitor:l,convertValue:m,isVisitable:ue});function R(f,d){if(!a.isUndefined(f)){if(c.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));c.push(f),a.forEach(f,function(b,g){(!(a.isUndefined(b)||b===null)&&o.call(t,b,a.isString(g)?g.trim():g,d,E))===!0&&R(b,d?d.concat(g):[g])}),c.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}var C=$t;function Ie(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function qe(e,t){this._pairs=[],e&&C(e,this,t)}var Me=qe.prototype;Me.append=function(t,r){this._pairs.push([t,r])};Me.toString=function(t){let r=t?function(n){return t.call(this,n,Ie)}:Ie;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};var v=qe;function Gt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function I(e,t,r){if(!t)return e;let n=r&&r.encode||Gt,o=r&&r.serialize,s;if(o?s=o(t,r):s=a.isURLSearchParams(t)?t.toString():new v(t,r).toString(n),s){let i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}var ce=class{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}},le=ce;var Q={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ze=typeof URLSearchParams<"u"?URLSearchParams:v;var Je=typeof FormData<"u"?FormData:null;var Ve=typeof Blob<"u"?Blob:null;var We={isBrowser:!0,classes:{URLSearchParams:ze,FormData:Je,Blob:Ve},protocols:["http","https","file","blob","url","data"]};var fe={};lt(fe,{hasBrowserEnv:()=>Ke,hasStandardBrowserEnv:()=>Xt,hasStandardBrowserWebWorkerEnv:()=>vt});var Ke=typeof window<"u"&&typeof document<"u",Xt=(e=>Ke&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),vt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";var S={...fe,...We};function de(e,t){return C(e,new S.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,s){return S.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Qt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Zt(e){let t={},r=Object.keys(e),n,o=r.length,s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function Yt(e){function t(r,n,o,s){let i=r[s++];if(i==="__proto__")return!0;let u=Number.isFinite(+i),p=s>=r.length;return i=!i&&a.isArray(o)?o.length:i,p?(a.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!u):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(r,n,o[i],s)&&a.isArray(o[i])&&(o[i]=Zt(o[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){let r={};return a.forEachEntry(e,(n,o)=>{t(Qt(n),o,r,0)}),r}return null}var Z=Yt;function er(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}var pe={transitional:Q,adapter:["xhr","http"],transformRequest:[function(t,r){let n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Z(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return de(t,this.formSerializer).toString();if((u=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){let p=this.env&&this.env.FormData;return C(u?{"files[]":t}:t,p&&new p,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),er(t)):t}],transformResponse:[function(t){let r=this.transitional||pe.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||o)){let i=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?h.from(u,h.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{pe.headers[e]={}});var U=pe;var tr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$e=e=>{let t={},r,n,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),r=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!r||t[r]&&tr[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};var Ge=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function Y(e){return e===!1||e==null?e:a.isArray(e)?e.map(Y):String(e)}function rr(e){let t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}var nr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function me(e,t,r,n,o){if(a.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function or(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function sr(e,t){let r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,i){return this[n].call(this,t,o,s,i)},configurable:!0})})}var _=class{constructor(t){t&&this.set(t)}set(t,r,n){let o=this;function s(u,p,m){let l=q(p);if(!l)throw new Error("header name must be a non-empty string");let c=a.findKey(o,l);(!c||o[c]===void 0||m===!0||m===void 0&&o[c]!==!1)&&(o[c||p]=Y(u))}let i=(u,p)=>a.forEach(u,(m,l)=>s(m,l,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!nr(t)?i($e(t),r):t!=null&&s(r,t,n),this}get(t,r){if(t=q(t),t){let n=a.findKey(this,t);if(n){let o=this[n];if(!r)return o;if(r===!0)return rr(o);if(a.isFunction(r))return r.call(this,o,n);if(a.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=q(t),t){let n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||me(this,this[n],n,r)))}return!1}delete(t,r){let n=this,o=!1;function s(i){if(i=q(i),i){let u=a.findKey(n,i);u&&(!r||me(n,n[u],u,r))&&(delete n[u],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){let r=Object.keys(this),n=r.length,o=!1;for(;n--;){let s=r[n];(!t||me(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){let r=this,n={};return a.forEach(this,(o,s)=>{let i=a.findKey(n,s);if(i){r[i]=Y(o),delete r[s];return}let u=t?or(s):String(s).trim();u!==s&&delete r[s],r[u]=Y(o),n[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return a.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){let n=(this[Ge]=this[Ge]={accessors:{}}).accessors,o=this.prototype;function s(i){let u=q(i);n[u]||(sr(o,i),n[u]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}};_.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(_.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(_);var x=_;function M(e,t){let r=this||U,n=t||r,o=x.from(n.headers),s=n.data;return a.forEach(e,function(u){s=u.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function z(e){return!!(e&&e.__CANCEL__)}function Xe(e,t,r){h.call(this,e??"canceled",h.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(Xe,h,{__CANCEL__:!0});var P=Xe;function he(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new h("Request failed with status code "+r.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var ve=S.hasStandardBrowserEnv?{write(e,t,r,n,o,s){let i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){let t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ye(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ee(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function J(e,t){return e&&!ye(t)?Ee(e,t):t}var Qe=S.hasStandardBrowserEnv?function(){let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function o(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(i){let u=a.isString(i)?o(i):i;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}();function we(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ir(e,t){e=e||10;let r=new Array(e),n=new Array(e),o=0,s=0,i;return t=t!==void 0?t:1e3,function(p){let m=Date.now(),l=n[s];i||(i=m),r[o]=p,n[o]=m;let c=s,E=0;for(;c!==o;)E+=r[c++],c=c%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),m-i<t)return;let R=l&&m-l;return R?Math.round(E*1e3/R):void 0}}var Ze=ir;function Ye(e,t){let r=0,n=Ze(50,250);return o=>{let s=o.loaded,i=o.lengthComputable?o.total:void 0,u=s-r,p=n(u),m=s<=i;r=s;let l={loaded:s,total:i,progress:i?s/i:void 0,bytes:u,rate:p||void 0,estimated:p&&i&&m?(i-s)/p:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}var ar=typeof XMLHttpRequest<"u",et=ar&&function(e){return new Promise(function(r,n){let o=e.data,s=x.from(e.headers).normalize(),{responseType:i,withXSRFToken:u}=e,p;function m(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let l;if(a.isFormData(o)){if(S.hasStandardBrowserEnv||S.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((l=s.getContentType())!==!1){let[d,...w]=l?l.split(";").map(b=>b.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...w].join("; "))}}let c=new XMLHttpRequest;if(e.auth){let d=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(d+":"+w))}let E=J(e.baseURL,e.url);c.open(e.method.toUpperCase(),I(E,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function R(){if(!c)return;let d=x.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),b={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:d,config:e,request:c};he(function(N){r(N),m()},function(N){n(N),m()},b),c=null}if("onloadend"in c?c.onloadend=R:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(R)},c.onabort=function(){c&&(n(new h("Request aborted",h.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",b=e.transitional||Q;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),n(new h(w,b.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,c)),c=null},S.hasStandardBrowserEnv&&(u&&a.isFunction(u)&&(u=u(e)),u||u!==!1&&Qe(E))){let d=e.xsrfHeaderName&&e.xsrfCookieName&&ve.read(e.xsrfCookieName);d&&s.set(e.xsrfHeaderName,d)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(w,b){c.setRequestHeader(b,w)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{c&&(n(!d||d.type?new P(null,e,c):d),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));let f=we(E);if(f&&S.protocols.indexOf(f)===-1){n(new h("Unsupported protocol "+f+":",h.ERR_BAD_REQUEST,e));return}c.send(o||null)})};var be={http:X,xhr:et};a.forEach(be,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var tt=e=>`- ${e}`,ur=e=>a.isFunction(e)||e===null||e===!1,ee={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:t}=e,r,n,o={};for(let s=0;s<t;s++){r=e[s];let i;if(n=r,!ur(r)&&(n=be[(i=String(r)).toLowerCase()],n===void 0))throw new h(`Unknown adapter '${i}'`);if(n)break;o[i||"#"+s]=n}if(!n){let s=Object.entries(o).map(([u,p])=>`adapter ${u} `+(p===!1?"is not supported by the environment":"is not available in the build")),i=t?s.length>1?`since :
`+s.map(tt).join(`
`):" "+tt(s[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:be};function Se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new P(null,e)}function te(e){return Se(e),e.headers=x.from(e.headers),e.data=M.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ee.getAdapter(e.adapter||U.adapter)(e).then(function(n){return Se(e),n.data=M.call(e,e.transformResponse,n),n.headers=x.from(n.headers),n},function(n){return z(n)||(Se(e),n&&n.response&&(n.response.data=M.call(e,e.transformResponse,n.response),n.response.headers=x.from(n.response.headers))),Promise.reject(n)})}var rt=e=>e instanceof x?e.toJSON():e;function T(e,t){t=t||{};let r={};function n(m,l,c){return a.isPlainObject(m)&&a.isPlainObject(l)?a.merge.call({caseless:c},m,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function o(m,l,c){if(a.isUndefined(l)){if(!a.isUndefined(m))return n(void 0,m,c)}else return n(m,l,c)}function s(m,l){if(!a.isUndefined(l))return n(void 0,l)}function i(m,l){if(a.isUndefined(l)){if(!a.isUndefined(m))return n(void 0,m)}else return n(void 0,l)}function u(m,l,c){if(c in t)return n(m,l);if(c in e)return n(void 0,m)}let p={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(m,l)=>o(rt(m),rt(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){let c=p[l]||o,E=c(e[l],t[l],l);a.isUndefined(E)&&c!==u||(r[l]=E)}),r}var re="1.6.5";var xe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{xe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});var nt={};xe.transitional=function(t,r,n){function o(s,i){return"[Axios v"+re+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return(s,i,u)=>{if(t===!1)throw new h(o(i," has been removed"+(r?" in "+r:"")),h.ERR_DEPRECATED);return r&&!nt[i]&&(nt[i]=!0,console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,u):!0}};function cr(e,t,r){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),o=n.length;for(;o-- >0;){let s=n[o],i=t[s];if(i){let u=e[s],p=u===void 0||i(u,s,e);if(p!==!0)throw new h("option "+s+" must be "+p,h.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}var ne={assertOptions:cr,validators:xe};var F=ne.validators,B=class{constructor(t){this.defaults=t,this.interceptors={request:new le,response:new le}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=T(this.defaults,r);let{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&ne.assertOptions(n,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),o!=null&&(a.isFunction(o)?r.paramsSerializer={serialize:o}:ne.assertOptions(o,{encode:F.function,serialize:F.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[r.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),r.headers=x.concat(i,s);let u=[],p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(p=p&&d.synchronous,u.unshift(d.fulfilled,d.rejected))});let m=[];this.interceptors.response.forEach(function(d){m.push(d.fulfilled,d.rejected)});let l,c=0,E;if(!p){let f=[te.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,m),E=f.length,l=Promise.resolve(r);c<E;)l=l.then(f[c++],f[c++]);return l}E=u.length;let R=r;for(c=0;c<E;){let f=u[c++],d=u[c++];try{R=f(R)}catch(w){d.call(this,w);break}}try{l=te.call(this,R)}catch(f){return Promise.reject(f)}for(c=0,E=m.length;c<E;)l=l.then(m[c++],m[c++]);return l}getUri(t){t=T(this.defaults,t);let r=J(t.baseURL,t.url);return I(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(r,n){return this.request(T(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(s,i,u){return this.request(T(u||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}B.prototype[t]=r(),B.prototype[t+"Form"]=r(!0)});var V=B;var Re=class e{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});let n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s,i=new Promise(u=>{n.subscribe(u),s=u}).then(o);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s,i,u){n.reason||(n.reason=new P(s,i,u),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new e(function(o){t=o}),cancel:t}}},ot=Re;function Ae(e){return function(r){return e.apply(null,r)}}function Oe(e){return a.isObject(e)&&e.isAxiosError===!0}var Te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Te).forEach(([e,t])=>{Te[t]=e});var st=Te;function it(e){let t=new V(e),r=j(V.prototype.request,t);return a.extend(r,V.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return it(T(e,o))},r}var y=it(U);y.Axios=V;y.CanceledError=P;y.CancelToken=ot;y.isCancel=z;y.VERSION=re;y.toFormData=C;y.AxiosError=h;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=Ae;y.isAxiosError=Oe;y.mergeConfig=T;y.AxiosHeaders=x;y.formToJSON=e=>Z(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=ee.getAdapter;y.HttpStatusCode=st;y.default=y;var oe=y;var{Axios:Ko,AxiosError:$o,CanceledError:Go,isCancel:Xo,CancelToken:vo,VERSION:Qo,all:Zo,Cancel:Yo,isAxiosError:es,spread:ts,toFormData:rs,AxiosHeaders:ns,HttpStatusCode:os,formToJSON:ss,getAdapter:is,mergeConfig:as}=oe;var at=document.querySelector("form"),lr=document.querySelector("#username"),fr=document.querySelector("#password");async function dr(e){let t=await oe.post("http://localhost:3000/auth",e);console.log(t),t.status===200&&(window.location.href="/")}function pr(e){e.preventDefault();let t=new FormData(at),r=t.get("username"),n=t.get("password");lr.value="",fr.value="",dr({username:r,password:n})}at.addEventListener("submit",e=>pr(e));})();
