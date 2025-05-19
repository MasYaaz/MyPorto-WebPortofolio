(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const ha=!1;var or=Array.isArray,xs=Array.prototype.indexOf,ys=Array.from,_s=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,lr=Object.getOwnPropertyDescriptors,ws=Object.prototype,ks=Array.prototype,On=Object.getPrototypeOf,va=Object.isExtensible;function Ot(t){return typeof t=="function"}const Ut=()=>{};function As(t){return t()}function pe(t){for(var e=0;e<t.length;e++)t[e]()}const $=2,fr=4,Ae=8,Ee=16,lt=32,Lt=64,he=128,V=256,ve=512,B=1024,at=2048,St=4096,Tt=8192,Se=16384,cr=32768,Pe=65536,Es=1<<17,Ss=1<<19,ur=1<<20,en=1<<21,ht=Symbol("$state"),dr=Symbol("legacy props"),Ps=Symbol("");function mr(t){return t===this.v}function Os(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Cn(t){return!Os(t,this.v)}function Cs(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Is(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ns(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ts(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ms(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ls(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Fs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function zs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Ft=!1,Ds=!1;function Rs(){Ft=!0}const js=1,Ys=2,pr=4,Us=8,Ws=16,Bs=4,Hs=1,Vs=2,W=Symbol(),Gs="http://www.w3.org/1999/xhtml",qs="@attach";function hr(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let M=null;function ga(t){M=t}function Oe(t,e=!1,n){var a=M={p:M,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};Ft&&!e&&(M.l={s:null,u:null,r1:[],r2:Ne(!1)}),Pr(()=>{a.d=!0})}function Ce(t){const e=M;if(e!==null){const s=e.e;if(s!==null){var n=I,a=C;e.e=null;try{for(var r=0;r<s.length;r++){var i=s[r];rt(i.effect),K(i.reaction),ee(i.fn)}}finally{rt(n),K(a)}}M=e.p,e.m=!0}return{}}function Ie(){return!Ft||M!==null&&M.l===null}function xt(t){if(typeof t!="object"||t===null||ht in t)return t;const e=On(t);if(e!==ws&&e!==ks)return t;var n=new Map,a=or(t),r=ct(0),i=C,s=o=>{var f=C;K(i);var l=o();return K(f),l};return a&&n.set("length",ct(t.length)),new Proxy(t,{defineProperty(o,f,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&Ls();var u=n.get(f);return u===void 0?(u=s(()=>ct(l.value)),n.set(f,u)):T(u,s(()=>xt(l.value))),!0},deleteProperty(o,f){var l=n.get(f);if(l===void 0)f in o&&(n.set(f,s(()=>ct(W))),Ge(r));else{if(a&&typeof f=="string"){var u=n.get("length"),d=Number(f);Number.isInteger(d)&&d<u.v&&T(u,d)}T(l,W),Ge(r)}return!0},get(o,f,l){var p;if(f===ht)return t;var u=n.get(f),d=f in o;if(u===void 0&&(!d||(p=pt(o,f))!=null&&p.writable)&&(u=s(()=>ct(xt(d?o[f]:W))),n.set(f,u)),u!==void 0){var c=v(u);return c===W?void 0:c}return Reflect.get(o,f,l)},getOwnPropertyDescriptor(o,f){var l=Reflect.getOwnPropertyDescriptor(o,f);if(l&&"value"in l){var u=n.get(f);u&&(l.value=v(u))}else if(l===void 0){var d=n.get(f),c=d==null?void 0:d.v;if(d!==void 0&&c!==W)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return l},has(o,f){var c;if(f===ht)return!0;var l=n.get(f),u=l!==void 0&&l.v!==W||Reflect.has(o,f);if(l!==void 0||I!==null&&(!u||(c=pt(o,f))!=null&&c.writable)){l===void 0&&(l=s(()=>ct(u?xt(o[f]):W)),n.set(f,l));var d=v(l);if(d===W)return!1}return u},set(o,f,l,u){var A;var d=n.get(f),c=f in o;if(a&&f==="length")for(var p=l;p<d.v;p+=1){var _=n.get(p+"");_!==void 0?T(_,W):p in o&&(_=s(()=>ct(W)),n.set(p+"",_))}d===void 0?(!c||(A=pt(o,f))!=null&&A.writable)&&(d=s(()=>ct(void 0)),T(d,s(()=>xt(l))),n.set(f,d)):(c=d.v!==W,T(d,s(()=>xt(l))));var g=Reflect.getOwnPropertyDescriptor(o,f);if(g!=null&&g.set&&g.set.call(u,l),!c){if(a&&typeof f=="string"){var h=n.get("length"),y=Number(f);Number.isInteger(y)&&y>=h.v&&T(h,y+1)}Ge(r)}return!0},ownKeys(o){v(r);var f=Reflect.ownKeys(o).filter(d=>{var c=n.get(d);return c===void 0||c.v!==W});for(var[l,u]of n)u.v!==W&&!(l in o)&&f.push(l);return f},setPrototypeOf(){Fs()}})}function Ge(t,e=1){T(t,t.v+e)}function Kt(t){var e=$|at,n=C!==null&&(C.f&$)!==0?C:null;return I===null||n!==null&&(n.f&V)!==0?e|=V:I.f|=ur,{ctx:M,deps:null,effects:null,equals:mr,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??I}}function vr(t){const e=Kt(t);return e.equals=Cn,e}function gr(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)wt(e[n])}}function Xs(t){for(var e=t.parent;e!==null;){if((e.f&$)===0)return e;e=e.parent}return null}function br(t){var e,n=I;rt(Xs(t));try{gr(t),e=Yr(t)}finally{rt(n)}return e}function xr(t){var e=br(t),n=(mt||(t.f&V)!==0)&&t.deps!==null?St:B;J(t,n),t.equals(e)||(t.v=e,t.wv=Rr())}const $t=new Map;function Ne(t,e){var n={f:0,v:t,reactions:null,equals:mr,rv:0,wv:0};return n}function ct(t,e){const n=Ne(t);return ro(n),n}function dt(t,e=!1){var a;const n=Ne(t);return e||(n.equals=Cn),Ft&&M!==null&&M.l!==null&&((a=M.l).s??(a.s=[])).push(n),n}function T(t,e,n=!1){C!==null&&!Q&&Ie()&&(C.f&($|Ee))!==0&&!(Y!=null&&Y.includes(t))&&zs();let a=n?xt(e):e;return Ks(t,a)}function Ks(t,e){if(!t.equals(e)){var n=t.v;ne?$t.set(t,e):$t.set(t,n),t.v=e,(t.f&$)!==0&&((t.f&at)!==0&&br(t),J(t,(t.f&V)===0?B:St)),t.wv=Rr(),yr(t,at),Ie()&&I!==null&&(I.f&B)!==0&&(I.f&(lt|Lt))===0&&(X===null?io([t]):X.push(t))}return e}function ba(t,e=1){var n=v(t),a=e===1?n++:n--;return T(t,n),a}function yr(t,e){var n=t.reactions;if(n!==null)for(var a=Ie(),r=n.length,i=0;i<r;i++){var s=n[i],o=s.f;(o&at)===0&&(!a&&s===I||(J(s,e),(o&(B|V))!==0&&((o&$)!==0?yr(s,St):Le(s))))}}var xa,_r,wr,kr;function $s(){if(xa===void 0){xa=window,_r=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;wr=pt(e,"firstChild").get,kr=pt(e,"nextSibling").get,va(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),va(n)&&(n.__t=void 0)}}function Ar(t=""){return document.createTextNode(t)}function tt(t){return wr.call(t)}function In(t){return kr.call(t)}function E(t,e){return tt(t)}function Er(t,e){{var n=tt(t);return n instanceof Comment&&n.data===""?In(n):n}}function P(t,e=1,n=!1){let a=t;for(;e--;)a=In(a);return a}function Sr(t){I===null&&C===null&&Ns(),C!==null&&(C.f&V)!==0&&I===null&&Is(),ne&&Cs()}function Js(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function zt(t,e,n,a=!0){var r=I,i={ctx:M,deps:null,nodes_start:null,nodes_end:null,f:t|at,first:null,fn:e,last:null,next:null,parent:r,prev:null,teardown:null,transitions:null,wv:0};if(n)try{Tn(i),i.f|=cr}catch(f){throw wt(i),f}else e!==null&&Le(i);var s=n&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(ur|he))===0;if(!s&&a&&(r!==null&&Js(i,r),C!==null&&(C.f&$)!==0)){var o=C;(o.effects??(o.effects=[])).push(i)}return i}function Pr(t){const e=zt(Ae,null,!1);return J(e,B),e.teardown=t,e}function nn(t){Sr();var e=I!==null&&(I.f&lt)!==0&&M!==null&&!M.m;if(e){var n=M;(n.e??(n.e=[])).push({fn:t,effect:I,reaction:C})}else{var a=ee(t);return a}}function Zs(t){return Sr(),Or(t)}function Qs(t){const e=zt(Lt,t,!0);return(n={})=>new Promise(a=>{n.outro?rn(e,()=>{wt(e),a(void 0)}):(wt(e),a(void 0))})}function ee(t){return zt(fr,t,!1)}function Or(t){return zt(Ae,t,!0)}function Nn(t,e=[],n=Kt){const a=e.map(n);return Cr(()=>t(...a.map(v)))}function Cr(t,e=0){return zt(Ae|Ee|e,t,!0)}function an(t,e=!0){return zt(Ae|lt,t,!0,e)}function Ir(t){var e=t.teardown;if(e!==null){const n=ne,a=C;_a(!0),K(null);try{e.call(null)}finally{_a(n),K(a)}}}function Nr(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var a=n.next;(n.f&Lt)!==0?n.parent=null:wt(n,e),n=a}}function to(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&lt)===0&&wt(e),e=n}}function wt(t,e=!0){var n=!1;(e||(t.f&Ss)!==0)&&t.nodes_start!==null&&(Tr(t.nodes_start,t.nodes_end),n=!0),Nr(t,e&&!n),ye(t,0),J(t,Se);var a=t.transitions;if(a!==null)for(const i of a)i.stop();Ir(t);var r=t.parent;r!==null&&r.first!==null&&Mr(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Tr(t,e){for(;t!==null;){var n=t===e?null:In(t);t.remove(),t=n}}function Mr(t){var e=t.parent,n=t.prev,a=t.next;n!==null&&(n.next=a),a!==null&&(a.prev=n),e!==null&&(e.first===t&&(e.first=a),e.last===t&&(e.last=n))}function rn(t,e){var n=[];Lr(t,n,!0),eo(n,()=>{wt(t),e&&e()})}function eo(t,e){var n=t.length;if(n>0){var a=()=>--n||e();for(var r of t)r.out(a)}else e()}function Lr(t,e,n){if((t.f&Tt)===0){if(t.f^=Tt,t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&e.push(s);for(var a=t.first;a!==null;){var r=a.next,i=(a.f&Pe)!==0||(a.f&lt)!==0;Lr(a,e,i?n:!1),a=r}}}function ya(t){Fr(t,!0)}function Fr(t,e){if((t.f&Tt)!==0){t.f^=Tt,(t.f&B)===0&&(t.f^=B),ae(t)&&(J(t,at),Le(t));for(var n=t.first;n!==null;){var a=n.next,r=(n.f&Pe)!==0||(n.f&lt)!==0;Fr(n,r?e:!1),n=a}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Jt=[],sn=[];function zr(){var t=Jt;Jt=[],pe(t)}function no(){var t=sn;sn=[],pe(t)}function Te(t){Jt.length===0&&queueMicrotask(zr),Jt.push(t)}function ao(){Jt.length>0&&zr(),sn.length>0&&no()}let ue=!1,ge=!1,be=null,_t=!1,ne=!1;function _a(t){ne=t}let Gt=[];let C=null,Q=!1;function K(t){C=t}let I=null;function rt(t){I=t}let Y=null;function ro(t){C!==null&&C.f&en&&(Y===null?Y=[t]:Y.push(t))}let j=null,H=0,X=null;function io(t){X=t}let Dr=1,xe=0,mt=!1;function Rr(){return++Dr}function ae(t){var d;var e=t.f;if((e&at)!==0)return!0;if((e&St)!==0){var n=t.deps,a=(e&V)!==0;if(n!==null){var r,i,s=(e&ve)!==0,o=a&&I!==null&&!mt,f=n.length;if(s||o){var l=t,u=l.parent;for(r=0;r<f;r++)i=n[r],(s||!((d=i==null?void 0:i.reactions)!=null&&d.includes(l)))&&(i.reactions??(i.reactions=[])).push(l);s&&(l.f^=ve),o&&u!==null&&(u.f&V)===0&&(l.f^=V)}for(r=0;r<f;r++)if(i=n[r],ae(i)&&xr(i),i.wv>t.wv)return!0}(!a||I!==null&&!mt)&&J(t,B)}return!1}function so(t,e){for(var n=e;n!==null;){if((n.f&he)!==0)try{n.fn(t);return}catch{n.f^=he}n=n.parent}throw ue=!1,t}function wa(t){return(t.f&Se)===0&&(t.parent===null||(t.parent.f&he)===0)}function Me(t,e,n,a){if(ue){if(n===null&&(ue=!1),wa(e))throw t;return}if(n!==null&&(ue=!0),so(t,e),wa(e))throw t}function jr(t,e,n=!0){var a=t.reactions;if(a!==null)for(var r=0;r<a.length;r++){var i=a[r];Y!=null&&Y.includes(t)||((i.f&$)!==0?jr(i,e,!1):e===i&&(n?J(i,at):(i.f&B)!==0&&J(i,St),Le(i)))}}function Yr(t){var p;var e=j,n=H,a=X,r=C,i=mt,s=Y,o=M,f=Q,l=t.f;j=null,H=0,X=null,mt=(l&V)!==0&&(Q||!_t||C===null),C=(l&(lt|Lt))===0?t:null,Y=null,ga(t.ctx),Q=!1,xe++,t.f|=en;try{var u=(0,t.fn)(),d=t.deps;if(j!==null){var c;if(ye(t,H),d!==null&&H>0)for(d.length=H+j.length,c=0;c<j.length;c++)d[H+c]=j[c];else t.deps=d=j;if(!mt)for(c=H;c<d.length;c++)((p=d[c]).reactions??(p.reactions=[])).push(t)}else d!==null&&H<d.length&&(ye(t,H),d.length=H);if(Ie()&&X!==null&&!Q&&d!==null&&(t.f&($|St|at))===0)for(c=0;c<X.length;c++)jr(X[c],t);return r!==null&&r!==t&&(xe++,X!==null&&(a===null?a=X:a.push(...X))),u}finally{j=e,H=n,X=a,C=r,mt=i,Y=s,ga(o),Q=f,t.f^=en}}function oo(t,e){let n=e.reactions;if(n!==null){var a=xs.call(n,t);if(a!==-1){var r=n.length-1;r===0?n=e.reactions=null:(n[a]=n[r],n.pop())}}n===null&&(e.f&$)!==0&&(j===null||!j.includes(e))&&(J(e,St),(e.f&(V|ve))===0&&(e.f^=ve),gr(e),ye(e,0))}function ye(t,e){var n=t.deps;if(n!==null)for(var a=e;a<n.length;a++)oo(t,n[a])}function Tn(t){var e=t.f;if((e&Se)===0){J(t,B);var n=I,a=M,r=_t;I=t,_t=!0;try{(e&Ee)!==0?to(t):Nr(t),Ir(t);var i=Yr(t);t.teardown=typeof i=="function"?i:null,t.wv=Dr;var s=t.deps,o;ha&&Ds&&t.f&at}catch(f){Me(f,t,n,a||t.ctx)}finally{_t=r,I=n}}}function lo(){try{Ts()}catch(t){if(be!==null)Me(t,be,null);else throw t}}function Ur(){var t=_t;try{var e=0;for(_t=!0;Gt.length>0;){e++>1e3&&lo();var n=Gt,a=n.length;Gt=[];for(var r=0;r<a;r++){var i=co(n[r]);fo(i)}$t.clear()}}finally{ge=!1,_t=t,be=null}}function fo(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var a=t[n];if((a.f&(Se|Tt))===0)try{ae(a)&&(Tn(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null?Mr(a):a.fn=null))}catch(r){Me(r,a,null,a.ctx)}}}function Le(t){ge||(ge=!0,queueMicrotask(Ur));for(var e=be=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(Lt|lt))!==0){if((n&B)===0)return;e.f^=B}}Gt.push(e)}function co(t){for(var e=[],n=t;n!==null;){var a=n.f,r=(a&(lt|Lt))!==0,i=r&&(a&B)!==0;if(!i&&(a&Tt)===0){if((a&fr)!==0)e.push(n);else if(r)n.f^=B;else try{ae(n)&&Tn(n)}catch(f){Me(f,n,null,n.ctx)}var s=n.first;if(s!==null){n=s;continue}}var o=n.parent;for(n=n.next;n===null&&o!==null;)n=o.next,o=o.parent}return e}function uo(t){for(var e;;){if(ao(),Gt.length===0)return e;ge=!0,Ur()}}async function mo(){await Promise.resolve(),uo()}function v(t){var e=t.f,n=(e&$)!==0;if(C!==null&&!Q){if(!(Y!=null&&Y.includes(t))){var a=C.deps;t.rv<xe&&(t.rv=xe,j===null&&a!==null&&a[H]===t?H++:j===null?j=[t]:(!mt||!j.includes(t))&&j.push(t))}}else if(n&&t.deps===null&&t.effects===null){var r=t,i=r.parent;i!==null&&(i.f&V)===0&&(r.f^=V)}return n&&(r=t,ae(r)&&xr(r)),ne&&$t.has(t)?$t.get(t):t.v}function kt(t){var e=Q;try{return Q=!0,t()}finally{Q=e}}const po=-7169;function J(t,e){t.f=t.f&po|e}function ho(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)on(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&ht in n&&on(n)}}}function on(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let a in t)try{on(t[a],e)}catch{}const n=On(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const a=lr(n);for(let r in a){const i=a[r].get;if(i)try{i.call(t)}catch{}}}}}function vo(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const go=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function bo(t){return go.includes(t)}const xo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function yo(t){return t=t.toLowerCase(),xo[t]??t}const _o=["touchstart","touchmove"];function wo(t){return _o.includes(t)}function ko(t,e){if(e){const n=document.body;t.autofocus=!0,Te(()=>{document.activeElement===n&&t.focus()})}}function Wr(t){var e=C,n=I;K(null),rt(null);try{return t()}finally{K(e),rt(n)}}const Br=new Set,ln=new Set;function Hr(t,e,n,a={}){function r(i){if(a.capture||Ht.call(e,i),!i.cancelBubble)return Wr(()=>n==null?void 0:n.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Te(()=>{e.addEventListener(t,r,a)}):e.addEventListener(t,r,a),r}function Ao(t,e,n,a,r){var i={capture:a,passive:r},s=Hr(t,e,n,i);(e===document.body||e===window||e===document)&&Pr(()=>{e.removeEventListener(t,s,i)})}function Eo(t){for(var e=0;e<t.length;e++)Br.add(t[e]);for(var n of ln)n(t)}function Ht(t){var A;var e=this,n=e.ownerDocument,a=t.type,r=((A=t.composedPath)==null?void 0:A.call(t))||[],i=r[0]||t.target,s=0,o=t.__root;if(o){var f=r.indexOf(o);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var l=r.indexOf(e);if(l===-1)return;f<=l&&(s=f)}if(i=r[s]||t.target,i!==e){_s(t,"currentTarget",{configurable:!0,get(){return i||n}});var u=C,d=I;K(null),rt(null);try{for(var c,p=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var g=i["__"+a];if(g!=null&&(!i.disabled||t.target===i))if(or(g)){var[h,...y]=g;h.apply(i,[t,...y])}else g.call(i,t)}catch(b){c?p.push(b):c=b}if(t.cancelBubble||_===e||_===null)break;i=_}if(c){for(let b of p)queueMicrotask(()=>{throw b});throw c}}finally{t.__root=e,delete t.currentTarget,K(u),rt(d)}}}function Mn(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Zt(t,e){var n=I;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function Vr(t,e){var n=(e&Hs)!==0,a=(e&Vs)!==0,r,i=!t.startsWith("<!>");return()=>{r===void 0&&(r=Mn(i?t:"<!>"+t),n||(r=tt(r)));var s=a||_r?document.importNode(r,!0):r.cloneNode(!0);if(n){var o=tt(s),f=s.lastChild;Zt(o,f)}else Zt(s,s);return s}}function So(t,e,n="svg"){var a=!t.startsWith("<!>"),r=`<${n}>${a?t:"<!>"+t}</${n}>`,i;return()=>{if(!i){var s=Mn(r),o=tt(s);i=tt(o)}var f=i.cloneNode(!0);return Zt(f,f),f}}function Po(){var t=document.createDocumentFragment(),e=document.createComment(""),n=Ar();return t.append(e,n),Zt(e,n),t}function _e(t,e){t!==null&&t.before(e)}let fn=!0;function Oo(t,e){return Co(t,e)}const Pt=new Map;function Co(t,{target:e,anchor:n,props:a={},events:r,context:i,intro:s=!0}){$s();var o=new Set,f=d=>{for(var c=0;c<d.length;c++){var p=d[c];if(!o.has(p)){o.add(p);var _=wo(p);e.addEventListener(p,Ht,{passive:_});var g=Pt.get(p);g===void 0?(document.addEventListener(p,Ht,{passive:_}),Pt.set(p,1)):Pt.set(p,g+1)}}};f(ys(Br)),ln.add(f);var l=void 0,u=Qs(()=>{var d=n??e.appendChild(Ar());return an(()=>{if(i){Oe({});var c=M;c.c=i}r&&(a.$$events=r),fn=s,l=t(d,a)||{},fn=!0,i&&Ce()}),()=>{var _;for(var c of o){e.removeEventListener(c,Ht);var p=Pt.get(c);--p===0?(document.removeEventListener(c,Ht),Pt.delete(c)):Pt.set(c,p)}ln.delete(f),d!==n&&((_=d.parentNode)==null||_.removeChild(d))}});return Io.set(l,u),l}let Io=new WeakMap;function Gr(t,e,[n,a]=[0,0]){var r=t,i=null,s=null,o=W,f=n>0?Pe:0,l=!1;const u=(c,p=!0)=>{l=!0,d(p,c)},d=(c,p)=>{o!==(o=c)&&(o?(i?ya(i):p&&(i=an(()=>p(r))),s&&rn(s,()=>{s=null})):(s?ya(s):p&&(s=an(()=>p(r,[n+1,a]))),i&&rn(i,()=>{i=null})))};Cr(()=>{l=!1,e(u),l||d(null,null)},f)}function No(t,e,n=!1,a=!1,r=!1){var i=t,s="";Nn(()=>{var o=I;if(s!==(s=e()??"")&&(o.nodes_start!==null&&(Tr(o.nodes_start,o.nodes_end),o.nodes_start=o.nodes_end=null),s!=="")){var f=s+"";n?f=`<svg>${f}</svg>`:a&&(f=`<math>${f}</math>`);var l=Mn(f);if((n||a)&&(l=tt(l)),Zt(tt(l),l.lastChild),n||a)for(;tt(l);)i.before(tt(l));else i.before(l)}})}function To(t,e){ee(()=>{const n=e();return n&&n(t)})}function qr(t){var e,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=qr(t[e]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}function Mo(){for(var t,e,n=0,a="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=qr(t))&&(a&&(a+=" "),a+=e);return a}function Lo(t){return typeof t=="object"?Mo(t):t??""}const ka=[...` 	
\r\f \v\uFEFF`];function Fo(t,e,n){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),n){for(var r in n)if(n[r])a=a?a+" "+r:r;else if(a.length)for(var i=r.length,s=0;(s=a.indexOf(r,s))>=0;){var o=s+i;(s===0||ka.includes(a[s-1]))&&(o===a.length||ka.includes(a[o]))?a=(s===0?"":a.substring(0,s))+a.substring(o+1):s=o}}return a===""?null:a}function Aa(t,e=!1){var n=e?" !important;":";",a="";for(var r in t){var i=t[r];i!=null&&i!==""&&(a+=" "+r+": "+i+n)}return a}function qe(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function zo(t,e){if(e){var n="",a,r;if(Array.isArray(e)?(a=e[0],r=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,o=!1,f=[];a&&f.push(...Object.keys(a).map(qe)),r&&f.push(...Object.keys(r).map(qe));var l=0,u=-1;const g=t.length;for(var d=0;d<g;d++){var c=t[d];if(o?c==="/"&&t[d-1]==="*"&&(o=!1):i?i===c&&(i=!1):c==="/"&&t[d+1]==="*"?o=!0:c==='"'||c==="'"?i=c:c==="("?s++:c===")"&&s--,!o&&i===!1&&s===0){if(c===":"&&u===-1)u=d;else if(c===";"||d===g-1){if(u!==-1){var p=qe(t.substring(l,u).trim());if(!f.includes(p)){c!==";"&&d++;var _=t.substring(l,d).trim();n+=" "+_+";"}}l=d+1,u=-1}}}}return a&&(n+=Aa(a)),r&&(n+=Aa(r,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function Z(t,e,n,a,r,i){var s=t.__className;if(s!==n||s===void 0){var o=Fo(n,a,i);o==null?t.removeAttribute("class"):e?t.className=o:t.setAttribute("class",o),t.__className=n}else if(i&&r!==i)for(var f in i){var l=!!i[f];(r==null||l!==!!r[f])&&t.classList.toggle(f,l)}return i}function Xe(t,e={},n,a){for(var r in n){var i=n[r];e[r]!==i&&(n[r]==null?t.style.removeProperty(r):t.style.setProperty(r,i,a))}}function Do(t,e,n,a){var r=t.__style;if(r!==e){var i=zo(e,a);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else a&&(Array.isArray(a)?(Xe(t,n==null?void 0:n[0],a[0]),Xe(t,n==null?void 0:n[1],a[1],"important")):Xe(t,n,a));return a}const Wt=Symbol("class"),Bt=Symbol("style"),Xr=Symbol("is custom element"),Kr=Symbol("is html");function Ro(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function Ea(t,e,n,a){var r=$r(t);r[e]!==(r[e]=n)&&(e==="loading"&&(t[Ps]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Jr(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function jo(t,e,n,a,r=!1){var i=$r(t),s=i[Xr],o=!i[Kr],f=e||{},l=t.tagName==="OPTION";for(var u in e)u in n||(n[u]=null);n.class?n.class=Lo(n.class):n[Wt]&&(n.class=null),n[Bt]&&(n.style??(n.style=null));var d=Jr(t);for(const b in n){let w=n[b];if(l&&b==="value"&&w==null){t.value=t.__value="",f[b]=w;continue}if(b==="class"){var c=t.namespaceURI==="http://www.w3.org/1999/xhtml";Z(t,c,w,a,e==null?void 0:e[Wt],n[Wt]),f[b]=w,f[Wt]=n[Wt];continue}if(b==="style"){Do(t,w,e==null?void 0:e[Bt],n[Bt]),f[b]=w,f[Bt]=n[Bt];continue}var p=f[b];if(w!==p){f[b]=w;var _=b[0]+b[1];if(_!=="$$")if(_==="on"){const S={},L="$$"+b;let k=b.slice(2);var g=bo(k);if(vo(k)&&(k=k.slice(0,-7),S.capture=!0),!g&&p){if(w!=null)continue;t.removeEventListener(k,f[L],S),f[L]=null}if(w!=null)if(g)t[`__${k}`]=w,Eo([k]);else{let z=function(U){f[b].call(this,U)};var A=z;f[L]=Hr(k,t,z,S)}else g&&(t[`__${k}`]=void 0)}else if(b==="style")Ea(t,b,w);else if(b==="autofocus")ko(t,!!w);else if(!s&&(b==="__value"||b==="value"&&w!=null))t.value=t.__value=w;else if(b==="selected"&&l)Ro(t,w);else{var h=b;o||(h=yo(h));var y=h==="defaultValue"||h==="defaultChecked";if(w==null&&!s&&!y)if(i[b]=null,h==="value"||h==="checked"){let S=t;const L=e===void 0;if(h==="value"){let k=S.defaultValue;S.removeAttribute(h),S.defaultValue=k,S.value=S.__value=L?k:null}else{let k=S.defaultChecked;S.removeAttribute(h),S.defaultChecked=k,S.checked=L?k:!1}}else t.removeAttribute(b);else y||d.includes(h)&&(s||typeof w!="string")?t[h]=w:typeof w!="function"&&Ea(t,h,w)}}}for(let b of Object.getOwnPropertySymbols(n))b.description===qs&&To(t,()=>n[b]);return f}function $r(t){return t.__attributes??(t.__attributes={[Xr]:t.nodeName.includes("-"),[Kr]:t.namespaceURI===Gs})}var Sa=new Map;function Jr(t){var e=Sa.get(t.nodeName);if(e)return e;Sa.set(t.nodeName,e=[]);for(var n,a=t,r=Element.prototype;r!==a;){n=lr(a);for(var i in n)n[i].set&&e.push(i);a=On(a)}return e}const Yo=()=>performance.now(),it={tick:t=>requestAnimationFrame(t),now:()=>Yo(),tasks:new Set};function Zr(){const t=it.now();it.tasks.forEach(e=>{e.c(t)||(it.tasks.delete(e),e.f())}),it.tasks.size!==0&&it.tick(Zr)}function Uo(t){let e;return it.tasks.size===0&&it.tick(Zr),{promise:new Promise(n=>{it.tasks.add(e={c:t,f:n})}),abort(){it.tasks.delete(e)}}}function se(t,e){Wr(()=>{t.dispatchEvent(new CustomEvent(e))})}function Wo(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function Pa(t){const e={},n=t.split(";");for(const a of n){const[r,i]=a.split(":");if(!r||i===void 0)break;const s=Wo(r.trim());e[s]=i.trim()}return e}const Bo=t=>t;function Ho(t,e,n,a){var r=(t&Bs)!==0,i="both",s,o=e.inert,f=e.style.overflow,l,u;function d(){var h=C,y=I;K(null),rt(null);try{return s??(s=n()(e,(a==null?void 0:a())??{},{direction:i}))}finally{K(h),rt(y)}}var c={is_global:r,in(){e.inert=o,se(e,"introstart"),l=cn(e,d(),u,1,()=>{se(e,"introend"),l==null||l.abort(),l=s=void 0,e.style.overflow=f})},out(h){e.inert=!0,se(e,"outrostart"),u=cn(e,d(),l,0,()=>{se(e,"outroend"),h==null||h()})},stop:()=>{l==null||l.abort(),u==null||u.abort()}},p=I;if((p.transitions??(p.transitions=[])).push(c),fn){var _=r;if(!_){for(var g=p.parent;g&&(g.f&Pe)!==0;)for(;(g=g.parent)&&(g.f&Ee)===0;);_=!g||(g.f&cr)!==0}_&&ee(()=>{kt(()=>c.in())})}}function cn(t,e,n,a,r){var i=a===1;if(Ot(e)){var s,o=!1;return Te(()=>{if(!o){var h=e({direction:i?"in":"out"});s=cn(t,h,n,a,r)}}),{abort:()=>{o=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(n==null||n.deactivate(),!(e!=null&&e.duration))return r(),{abort:Ut,deactivate:Ut,reset:Ut,t:()=>a};const{delay:f=0,css:l,tick:u,easing:d=Bo}=e;var c=[];if(i&&n===void 0&&(u&&u(0,1),l)){var p=Pa(l(0,1));c.push(p,p)}var _=()=>1-a,g=t.animate(c,{duration:f});return g.onfinish=()=>{var h=(n==null?void 0:n.t())??1-a;n==null||n.abort();var y=a-h,A=e.duration*Math.abs(y),b=[];if(A>0){var w=!1;if(l)for(var S=Math.ceil(A/16.666666666666668),L=0;L<=S;L+=1){var k=h+y*d(L/S),z=Pa(l(k,1-k));b.push(z),w||(w=z.overflow==="hidden")}w&&(t.style.overflow="hidden"),_=()=>{var U=g.currentTime;return h+y*d(U/A)},u&&Uo(()=>{if(g.playState!=="running")return!1;var U=_();return u(U,1-U),!0})}g=t.animate(b,{duration:A,fill:"forwards"}),g.onfinish=()=>{_=()=>a,u==null||u(a,1-a),r()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=Ut)},deactivate:()=>{r=Ut},reset:()=>{a===0&&(u==null||u(1,0))},t:()=>_()}}function Oa(t,e){return t===e||(t==null?void 0:t[ht])===e}function Ct(t={},e,n,a){return ee(()=>{var r,i;return Or(()=>{r=i,i=[],kt(()=>{t!==n(...i)&&(e(t,...i),r&&Oa(n(...r),t)&&e(null,...r))})}),()=>{Te(()=>{i&&Oa(n(...i),t)&&e(null,...i)})}}),t}function Ln(t=!1){const e=M,n=e.l.u;if(!n)return;let a=()=>ho(e.s);if(t){let r=0,i={};const s=Kt(()=>{let o=!1;const f=e.s;for(const l in f)f[l]!==i[l]&&(i[l]=f[l],o=!0);return o&&r++,r});a=()=>v(s)}n.b.length&&Zs(()=>{Ca(e,a),pe(n.b)}),nn(()=>{const r=kt(()=>n.m.map(As));return()=>{for(const i of r)typeof i=="function"&&i()}}),n.a.length&&nn(()=>{Ca(e,a),pe(n.a)})}function Ca(t,e){if(t.l.s)for(const n of t.l.s)v(n);e()}let oe=!1;function Vo(t){var e=oe;try{return oe=!1,[t(),oe]}finally{oe=e}}const Go={get(t,e){if(!t.exclude.includes(e))return v(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){return e in t.special||(t.special[e]=O({get[e](){return t.props[e]}},e,pr)),t.special[e](n),ba(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),ba(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function Ia(t,e){return new Proxy({props:t,exclude:e,special:{},version:Ne(0)},Go)}const qo={get(t,e){let n=t.props.length;for(;n--;){let a=t.props[n];if(Ot(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a)return a[e]}},set(t,e,n){let a=t.props.length;for(;a--;){let r=t.props[a];Ot(r)&&(r=r());const i=pt(r,e);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let a=t.props[n];if(Ot(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a){const r=pt(a,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(t,e){if(e===ht||e===dr)return!1;for(let n of t.props)if(Ot(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props)if(Ot(n)&&(n=n()),!!n){for(const a in n)e.includes(a)||e.push(a);for(const a of Object.getOwnPropertySymbols(n))e.includes(a)||e.push(a)}return e}};function Xo(...t){return new Proxy({props:t},qo)}function Na(t){var e;return((e=t.ctx)==null?void 0:e.d)??!1}function O(t,e,n,a){var L;var r=(n&js)!==0,i=!Ft||(n&Ys)!==0,s=(n&Us)!==0,o=(n&Ws)!==0,f=!1,l;s?[l,f]=Vo(()=>t[e]):l=t[e];var u=ht in t||dr in t,d=s&&(((L=pt(t,e))==null?void 0:L.set)??(u&&e in t&&(k=>t[e]=k)))||void 0,c=a,p=!0,_=!1,g=()=>(_=!0,p&&(p=!1,o?c=kt(a):c=a),c);l===void 0&&a!==void 0&&(d&&i&&Ms(),l=g(),d&&d(l));var h;if(i)h=()=>{var k=t[e];return k===void 0?g():(p=!0,_=!1,k)};else{var y=(r?Kt:vr)(()=>t[e]);y.f|=Es,h=()=>{var k=v(y);return k!==void 0&&(c=void 0),k===void 0?c:k}}if((n&pr)===0)return h;if(d){var A=t.$$legacy;return function(k,z){return arguments.length>0?((!i||!z||A||f)&&d(z?h():k),k):h()}}var b=!1,w=dt(l),S=Kt(()=>{var k=h(),z=v(w);return b?(b=!1,z):w.v=k});return s&&v(S),r||(S.equals=Cn),function(k,z){if(arguments.length>0){const U=z?v(S):i&&s?xt(k):k;if(!S.equals(U)){if(b=!0,T(w,U),_&&c!==void 0&&(c=U),Na(S))return k;kt(()=>v(S))}return k}return Na(S)?S.v:v(S)}}function Qr(t){M===null&&hr(),Ft&&M.l!==null?$o(M).m.push(t):nn(()=>{const e=kt(t);if(typeof e=="function")return e})}function Ko(t){M===null&&hr(),Qr(()=>()=>kt(t))}function $o(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const Jo="5";var sr;typeof window<"u"&&((sr=window.__svelte??(window.__svelte={})).v??(sr.v=new Set)).add(Jo);Rs();function Zo(t){const{beat:e,fade:n,beatFade:a,bounce:r,shake:i,flash:s,spin:o,spinPulse:f,spinReverse:l,pulse:u,fixedWidth:d,inverse:c,border:p,listItem:_,flip:g,size:h,rotation:y,pull:A}=t,b={"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":i,"fa-flash":s,"fa-spin":o,"fa-spin-reverse":l,"fa-spin-pulse":f,"fa-pulse":u,"fa-fw":d,"fa-inverse":c,"fa-border":p,"fa-li":_,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both",[`fa-${h}`]:typeof h<"u"&&h!==null,[`fa-rotate-${y}`]:typeof y<"u"&&y!==null&&y!==0,[`fa-pull-${A}`]:typeof A<"u"&&A!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(b).map(w=>b[w]?w:null).filter(w=>w)}function Qo(t){return t=t-0,t===t}function tl(t){return Qo(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function el(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function ti(t,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(i=>ti(t,i)),r=Object.keys(e.attributes||{}).reduce((i,s)=>{const o=e.attributes[s];return s==="style"?i.attrs.style=el(o):s.indexOf("aria-")===0||s.indexOf("data-")===0?i.attrs[s.toLowerCase()]=o:i.attrs[tl(s)]=o,i},{attrs:{}});return t(e.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function nl(t,e,n){return(e=rl(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ta(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ta(Object(n),!0).forEach(function(a){nl(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ta(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function al(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function rl(t){var e=al(t,"string");return typeof e=="symbol"?e:e+""}const Ma=()=>{};let Fn={},ei={},ni=null,ai={mark:Ma,measure:Ma};try{typeof window<"u"&&(Fn=window),typeof document<"u"&&(ei=document),typeof MutationObserver<"u"&&(ni=MutationObserver),typeof performance<"u"&&(ai=performance)}catch{}const{userAgent:La=""}=Fn.navigator||{},vt=Fn,N=ei,Fa=ni,le=ai;vt.document;const ft=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",ri=~La.indexOf("MSIE")||~La.indexOf("Trident/");var il=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,sl=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ii={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ol={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},si=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],D="classic",Fe="duotone",ll="sharp",fl="sharp-duotone",oi=[D,Fe,ll,fl],cl={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ul={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},dl=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ml={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},pl=["fak","fa-kit","fakd","fa-kit-duotone"],za={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},hl=["kit"],vl={kit:{"fa-kit":"fak"}},gl=["fak","fakd"],bl={kit:{fak:"fa-kit"}},Da={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xl=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],yl=["fak","fa-kit","fakd","fa-kit-duotone"],_l={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},wl={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},kl={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},un={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Al=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],dn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...xl,...Al],El=["solid","regular","light","thin","duotone","brands"],li=[1,2,3,4,5,6,7,8,9,10],Sl=li.concat([11,12,13,14,15,16,17,18,19,20]),Pl=[...Object.keys(kl),...El,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY].concat(li.map(t=>"".concat(t,"x"))).concat(Sl.map(t=>"w-".concat(t))),Ol={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const st="___FONT_AWESOME___",mn=16,fi="fa",ci="svg-inline--fa",At="data-fa-i2svg",pn="data-fa-pseudo-element",Cl="data-fa-pseudo-element-pending",zn="data-prefix",Dn="data-icon",Ra="fontawesome-i2svg",Il="async",Nl=["HTML","HEAD","STYLE","SCRIPT"],ui=(()=>{try{return!0}catch{return!1}})();function re(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[D]}})}const di=m({},ii);di[D]=m(m(m(m({},{"fa-duotone":"duotone"}),ii[D]),za.kit),za["kit-duotone"]);const Tl=re(di),hn=m({},ml);hn[D]=m(m(m(m({},{duotone:"fad"}),hn[D]),Da.kit),Da["kit-duotone"]);const ja=re(hn),vn=m({},un);vn[D]=m(m({},vn[D]),bl.kit);const Rn=re(vn),gn=m({},wl);gn[D]=m(m({},gn[D]),vl.kit);re(gn);const Ml=il,mi="fa-layers-text",Ll=sl,Fl=m({},cl);re(Fl);const zl=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ke=ol,Dl=[...hl,...Pl],qt=vt.FontAwesomeConfig||{};function Rl(t){var e=N.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jl(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}N&&typeof N.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=jl(Rl(n));r!=null&&(qt[a]=r)});const pi={styleDefault:"solid",familyDefault:D,cssPrefix:fi,replacementClass:ci,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qt.familyPrefix&&(qt.cssPrefix=qt.familyPrefix);const Mt=m(m({},pi),qt);Mt.autoReplaceSvg||(Mt.observeMutations=!1);const x={};Object.keys(pi).forEach(t=>{Object.defineProperty(x,t,{enumerable:!0,set:function(e){Mt[t]=e,Xt.forEach(n=>n(x))},get:function(){return Mt[t]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(t){Mt.cssPrefix=t,Xt.forEach(e=>e(x))},get:function(){return Mt.cssPrefix}});vt.FontAwesomeConfig=x;const Xt=[];function Yl(t){return Xt.push(t),()=>{Xt.splice(Xt.indexOf(t),1)}}const ut=mn,et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ul(t){if(!t||!ft)return;const e=N.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=N.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return N.head.insertBefore(e,a),t}const Wl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qt(){let t=12,e="";for(;t-- >0;)e+=Wl[Math.random()*62|0];return e}function Dt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function jn(t){return t.classList?Dt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function hi(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(hi(t[n]),'" '),"").trim()}function ze(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Yn(t){return t.size!==et.size||t.x!==et.x||t.y!==et.y||t.rotate!==et.rotate||t.flipX||t.flipY}function Hl(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Vl(t){let{transform:e,width:n=mn,height:a=mn,startCentered:r=!1}=t,i="";return r&&ri?i+="translate(".concat(e.x/ut-n/2,"em, ").concat(e.y/ut-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/ut,"em), calc(-50% + ").concat(e.y/ut,"em)) "):i+="translate(".concat(e.x/ut,"em, ").concat(e.y/ut,"em) "),i+="scale(".concat(e.size/ut*(e.flipX?-1:1),", ").concat(e.size/ut*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Gl=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function vi(){const t=fi,e=ci,n=x.cssPrefix,a=x.replacementClass;let r=Gl;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Ya=!1;function $e(){x.autoAddCss&&!Ya&&(Ul(vi()),Ya=!0)}var ql={mixout(){return{dom:{css:vi,insertCss:$e}}},hooks(){return{beforeDOMElementCreation(){$e()},beforeI2svg(){$e()}}}};const ot=vt||{};ot[st]||(ot[st]={});ot[st].styles||(ot[st].styles={});ot[st].hooks||(ot[st].hooks={});ot[st].shims||(ot[st].shims=[]);var nt=ot[st];const gi=[],bi=function(){N.removeEventListener("DOMContentLoaded",bi),we=1,gi.map(t=>t())};let we=!1;ft&&(we=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),we||N.addEventListener("DOMContentLoaded",bi));function Xl(t){ft&&(we?setTimeout(t,0):gi.push(t))}function ie(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?hi(t):"<".concat(e," ").concat(Bl(n),">").concat(a.map(ie).join(""),"</").concat(e,">")}function Ua(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Je=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,f,l,u;for(a===void 0?(f=1,u=e[i[0]]):(f=0,u=a);f<s;f++)l=i[f],u=o(u,e[l],l,e);return u};function Kl(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function bn(t){const e=Kl(t);return e.length===1?e[0].toString(16):null}function $l(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Wa(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function xn(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Wa(e);typeof nt.hooks.addPack=="function"&&!a?nt.hooks.addPack(t,Wa(e)):nt.styles[t]=m(m({},nt.styles[t]||{}),r),t==="fas"&&xn("fa",e)}const{styles:te,shims:Jl}=nt,xi=Object.keys(Rn),Zl=xi.reduce((t,e)=>(t[e]=Object.keys(Rn[e]),t),{});let Un=null,yi={},_i={},wi={},ki={},Ai={};function Ql(t){return~Dl.indexOf(t)}function tf(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ql(r)?r:null}const Ei=()=>{const t=a=>Je(te,(r,i,s)=>(r[s]=Je(i,a,{}),r),{});yi=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),_i=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),Ai=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in te||x.autoFetchSvg,n=Je(Jl,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});wi=n.names,ki=n.unicodes,Un=De(x.styleDefault,{family:x.familyDefault})};Yl(t=>{Un=De(t.styleDefault,{family:x.familyDefault})});Ei();function Wn(t,e){return(yi[t]||{})[e]}function ef(t,e){return(_i[t]||{})[e]}function yt(t,e){return(Ai[t]||{})[e]}function Si(t){return wi[t]||{prefix:null,iconName:null}}function nf(t){const e=ki[t],n=Wn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return Un}const Pi=()=>({prefix:null,iconName:null,rest:[]});function af(t){let e=D;const n=xi.reduce((a,r)=>(a[r]="".concat(x.cssPrefix,"-").concat(r),a),{});return oi.forEach(a=>{(t.includes(n[a])||t.some(r=>Zl[a].includes(r)))&&(e=a)}),e}function De(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=D}=e,a=Tl[n][t];if(n===Fe&&!t)return"fad";const r=ja[n][t]||ja[n][a],i=t in nt.styles?t:null;return r||i||null}function rf(t){let e=[],n=null;return t.forEach(a=>{const r=tf(x.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Ba(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Re(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=dn.concat(yl),i=Ba(t.filter(d=>r.includes(d))),s=Ba(t.filter(d=>!dn.includes(d))),o=i.filter(d=>(a=d,!si.includes(d))),[f=null]=o,l=af(i),u=m(m({},rf(s)),{},{prefix:De(f,{family:l})});return m(m(m({},u),ff({values:t,family:l,styles:te,config:x,canonical:u,givenPrefix:a})),sf(n,a,u))}function sf(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Si(r):{},s=yt(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!te.far&&te.fas&&!x.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const of=oi.filter(t=>t!==D||t!==Fe),lf=Object.keys(un).filter(t=>t!==D).map(t=>Object.keys(un[t])).flat();function ff(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,o=n===Fe,f=e.includes("fa-duotone")||e.includes("fad"),l=s.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(f||l||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&of.includes(n)&&(Object.keys(i).find(c=>lf.includes(c))||s.autoFetchSvg)){const c=dl.get(n).defaultShortPrefixId;a.prefix=c,a.iconName=yt(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=gt()||"fas"),a}class cf{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=m(m({},this.definitions[i]||{}),r[i]),xn(i,r[i]);const s=Rn[D][i];s&&xn(s,r[i]),Ei()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],f=o[2];e[i]||(e[i]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(e[i][l]=o)}),e[i][s]=o}),e}}let Ha=[],It={};const Nt={},uf=Object.keys(Nt);function df(t,e){let{mixoutsTo:n}=e;return Ha=t,It={},Object.keys(Nt).forEach(a=>{uf.indexOf(a)===-1&&delete Nt[a]}),Ha.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{It[s]||(It[s]=[]),It[s].push(i[s])})}a.provides&&a.provides(Nt)}),n}function yn(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(It[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function Et(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(It[t]||[]).forEach(i=>{i.apply(null,n)})}function bt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Nt[t]?Nt[t].apply(null,e):void 0}function _n(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||gt();if(e)return e=yt(n,e)||e,Ua(Oi.definitions,n,e)||Ua(nt.styles,n,e)}const Oi=new cf,mf=()=>{x.autoReplaceSvg=!1,x.observeMutations=!1,Et("noAuto")},pf={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ft?(Et("beforeI2svg",t),bt("pseudoElements2svg",t),bt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,Xl(()=>{vf({autoReplaceSvgRoot:e}),Et("watch",t)})}},hf={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=De(t[0]);return{prefix:n,iconName:yt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(x.cssPrefix,"-"))>-1||t.match(Ml))){const e=Re(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||gt(),iconName:yt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=gt();return{prefix:e,iconName:yt(e,t)||t}}}},G={noAuto:mf,config:x,dom:pf,parse:hf,library:Oi,findIconDefinition:_n,toHtml:ie},vf=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=N}=t;(Object.keys(nt.styles).length>0||x.autoFetchSvg)&&ft&&x.autoReplaceSvg&&G.dom.i2svg({node:e})};function je(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ie(n))}}),Object.defineProperty(t,"node",{get:function(){if(!ft)return;const n=N.createElement("div");return n.innerHTML=t.html,n.children}}),t}function gf(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(Yn(s)&&n.found&&!a.found){const{width:o,height:f}=n,l={x:o/f/2,y:.5};r.style=ze(m(m({},i),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function bf(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(x.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:s}),children:a}]}]}function Bn(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:f,titleId:l,extra:u,watchable:d=!1}=t,{width:c,height:p}=n.found?n:e,_=gl.includes(a),g=[x.replacementClass,r?"".concat(x.cssPrefix,"-").concat(r):""].filter(S=>u.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(u.classes).join(" ");let h={children:[],attributes:m(m({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:g,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(c," ").concat(p)})};const y=_&&!~u.classes.indexOf("fa-fw")?{width:"".concat(c/p*16*.0625,"em")}:{};d&&(h.attributes[At]=""),o&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||Qt())},children:[o]}),delete h.attributes.title);const A=m(m({},h),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:s,styles:m(m({},y),u.styles)}),{children:b,attributes:w}=n.found&&e.found?bt("generateAbstractMask",A)||{children:[],attributes:{}}:bt("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=b,A.attributes=w,s?bf(A):gf(A)}function Va(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,f=m(m(m({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(f[At]="");const l=m({},s.styles);Yn(r)&&(l.transform=Vl({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const u=ze(l);u.length>0&&(f.style=u);const d=[];return d.push({tag:"span",attributes:f,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function xf(t){const{content:e,title:n,extra:a}=t,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ze(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Ze}=nt;function wn(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(Ke.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(Ke.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(Ke.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const yf={found:!1,width:512,height:512};function _f(t,e){!ui&&!x.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function kn(t,e){let n=e;return e==="fa"&&x.styleDefault!==null&&(e=gt()),new Promise((a,r)=>{if(n==="fa"){const i=Si(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ze[e]&&Ze[e][t]){const i=Ze[e][t];return a(wn(i))}_f(t,e),a(m(m({},yf),{},{icon:x.showMissingIcons&&t?bt("missingIconAbstract")||{}:{}}))})}const Ga=()=>{},An=x.measurePerformance&&le&&le.mark&&le.measure?le:{mark:Ga,measure:Ga},Vt='FA "6.7.2"',wf=t=>(An.mark("".concat(Vt," ").concat(t," begins")),()=>Ci(t)),Ci=t=>{An.mark("".concat(Vt," ").concat(t," ends")),An.measure("".concat(Vt," ").concat(t),"".concat(Vt," ").concat(t," begins"),"".concat(Vt," ").concat(t," ends"))};var Hn={begin:wf,end:Ci};const de=()=>{};function qa(t){return typeof(t.getAttribute?t.getAttribute(At):null)=="string"}function kf(t){const e=t.getAttribute?t.getAttribute(zn):null,n=t.getAttribute?t.getAttribute(Dn):null;return e&&n}function Af(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(x.replacementClass)}function Ef(){return x.autoReplaceSvg===!0?me.replace:me[x.autoReplaceSvg]||me.replace}function Sf(t){return N.createElementNS("http://www.w3.org/2000/svg",t)}function Pf(t){return N.createElement(t)}function Ii(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Sf:Pf}=e;if(typeof t=="string")return N.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Ii(i,{ceFn:n}))}),a}function Of(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const me={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ii(n),e)}),e.getAttribute(At)===null&&x.keepOriginalSource){let n=N.createComment(Of(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~jn(e).indexOf(x.replacementClass))return me.replace(t);const a=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===x.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>ie(i)).join(`
`);e.setAttribute(At,""),e.innerHTML=r}};function Xa(t){t()}function Ni(t,e){const n=typeof e=="function"?e:de;if(t.length===0)n();else{let a=Xa;x.mutateApproach===Il&&(a=vt.requestAnimationFrame||Xa),a(()=>{const r=Ef(),i=Hn.begin("mutate");t.map(r),i(),n()})}}let Vn=!1;function Ti(){Vn=!0}function En(){Vn=!1}let ke=null;function Ka(t){if(!Fa||!x.observeMutations)return;const{treeCallback:e=de,nodeCallback:n=de,pseudoElementsCallback:a=de,observeMutationsRoot:r=N}=t;ke=new Fa(i=>{if(Vn)return;const s=gt();Dt(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!qa(o.addedNodes[0])&&(x.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&x.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&qa(o.target)&&~zl.indexOf(o.attributeName))if(o.attributeName==="class"&&kf(o.target)){const{prefix:f,iconName:l}=Re(jn(o.target));o.target.setAttribute(zn,f||s),l&&o.target.setAttribute(Dn,l)}else Af(o.target)&&n(o.target)})}),ft&&ke.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Cf(){ke&&ke.disconnect()}function If(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function Nf(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Re(jn(t));return r.prefix||(r.prefix=gt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ef(r.prefix,t.innerText)||Wn(r.prefix,bn(t.innerText))),!r.iconName&&x.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Tf(t){const e=Dt(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return x.autoA11y&&(n?e["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(a||Qt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Mf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $a(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Nf(t),i=Tf(t),s=yn("parseNodeAttributes",{},t);let o=e.styleParser?If(t):[];return m({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}const{styles:Lf}=nt;function Mi(t){const e=x.autoReplaceSvg==="nest"?$a(t,{styleParser:!1}):$a(t);return~e.extra.classes.indexOf(mi)?bt("generateLayersText",t,e):bt("generateSvgReplacementMutation",t,e)}function Ff(){return[...pl,...dn]}function Ja(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ft)return Promise.resolve();const n=N.documentElement.classList,a=u=>n.add("".concat(Ra,"-").concat(u)),r=u=>n.remove("".concat(Ra,"-").concat(u)),i=x.autoFetchSvg?Ff():si.concat(Object.keys(Lf));i.includes("fa")||i.push("fa");const s=[".".concat(mi,":not([").concat(At,"])")].concat(i.map(u=>".".concat(u,":not([").concat(At,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=Dt(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const f=Hn.begin("onTree"),l=o.reduce((u,d)=>{try{const c=Mi(d);c&&u.push(c)}catch(c){ui||c.name==="MissingIcon"&&console.error(c)}return u},[]);return new Promise((u,d)=>{Promise.all(l).then(c=>{Ni(c,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(c=>{f(),d(c)})})}function zf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mi(t).then(n=>{n&&Ni([n],e)})}function Df(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:_n(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:_n(r||{})),t(a,m(m({},n),{},{mask:r}))}}const Rf=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=et,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:f=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:c,icon:p}=t;return je(m({type:"icon"},t),()=>(Et("beforeDOMElementCreation",{iconDefinition:t,params:e}),x.autoA11y&&(s?l["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(o||Qt()):(l["aria-hidden"]="true",l.focusable="false")),Bn({icons:{main:wn(p),mask:r?wn(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:c,transform:m(m({},et),n),symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:l,styles:u,classes:f}})))};var jf={mixout(){return{icon:Df(Rf)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ja,t.nodeCallback=zf,t}}},provides(t){t.i2svg=function(e){const{node:n=N,callback:a=()=>{}}=e;return Ja(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:f,mask:l,maskId:u,extra:d}=n;return new Promise((c,p)=>{Promise.all([kn(a,s),l.iconName?kn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[g,h]=_;c([e,Bn({icons:{main:g,mask:h},prefix:s,iconName:a,transform:o,symbol:f,maskId:u,title:r,titleId:i,extra:d,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=ze(s);o.length>0&&(a.style=o);let f;return Yn(i)&&(f=bt("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},Yf={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return je({type:"layer"},()=>{Et("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Uf={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return je({type:"counter",content:t},()=>(Et("beforeDOMElementCreation",{content:t,params:e}),xf({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(x.cssPrefix,"-layers-counter"),...a]}})))}}}},Wf={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=et,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return je({type:"text",content:t},()=>(Et("beforeDOMElementCreation",{content:t,params:e}),Va({content:t,transform:m(m({},et),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(x.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(ri){const f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/f,o=l.height/f}return x.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Va({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const Bf=new RegExp('"',"ug"),Za=[1105920,1112319],Qa=m(m(m(m({},{FontAwesome:{normal:"fas",400:"fas"}}),ul),Ol),_l),Sn=Object.keys(Qa).reduce((t,e)=>(t[e.toLowerCase()]=Qa[e],t),{}),Hf=Object.keys(Sn).reduce((t,e)=>{const n=Sn[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Vf(t){const e=t.replace(Bf,""),n=$l(e,0),a=n>=Za[0]&&n<=Za[1],r=e.length===2?e[0]===e[1]:!1;return{value:bn(r?e[0]:e),isSecondary:a||r}}function Gf(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Sn[n]||{})[r]||Hf[n]}function tr(t,e){const n="".concat(Cl).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=Dt(t.children).filter(c=>c.getAttribute(pn)===e)[0],o=vt.getComputedStyle(t,e),f=o.getPropertyValue("font-family"),l=f.match(Ll),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),a();if(l&&d!=="none"&&d!==""){const c=o.getPropertyValue("content");let p=Gf(f,u);const{value:_,isSecondary:g}=Vf(c),h=l[0].startsWith("FontAwesome");let y=Wn(p,_),A=y;if(h){const b=nf(_);b.iconName&&b.prefix&&(y=b.iconName,p=b.prefix)}if(y&&!g&&(!s||s.getAttribute(zn)!==p||s.getAttribute(Dn)!==A)){t.setAttribute(n,A),s&&t.removeChild(s);const b=Mf(),{extra:w}=b;w.attributes[pn]=e,kn(y,p).then(S=>{const L=Bn(m(m({},b),{},{icons:{main:S,mask:Pi()},prefix:p,iconName:A,extra:w,watchable:!0})),k=N.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(k,t.firstChild):t.appendChild(k),k.outerHTML=L.map(z=>ie(z)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function qf(t){return Promise.all([tr(t,"::before"),tr(t,"::after")])}function Xf(t){return t.parentNode!==document.head&&!~Nl.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(pn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function er(t){if(ft)return new Promise((e,n)=>{const a=Dt(t.querySelectorAll("*")).filter(Xf).map(qf),r=Hn.begin("searchPseudoElements");Ti(),Promise.all(a).then(()=>{r(),En(),e()}).catch(()=>{r(),En(),n()})})}var Kf={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=er,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=N}=e;x.searchPseudoElements&&er(n)}}};let nr=!1;var $f={mixout(){return{dom:{unwatch(){Ti(),nr=!0}}}},hooks(){return{bootstrap(){Ka(yn("mutationObserverCallbacks",{}))},noAuto(){Cf()},watch(t){const{observeMutationsRoot:e}=t;nr?En():Ka(yn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ar=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Jf={mixout(){return{parse:{transform:t=>ar(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ar(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(f," ").concat(l)},d={transform:"translate(".concat(i/2*-1," -256)")},c={outer:s,inner:u,path:d};return{tag:"g",attributes:m({},c.outer),children:[{tag:"g",attributes:m({},c.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:m(m({},n.icon.attributes),c.path)}]}]}}}};const Qe={x:0,y:0,width:"100%",height:"100%"};function rr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Zf(t){return t.tag==="g"?t.children:[t]}var Qf={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Re(n.split(" ").map(r=>r.trim())):Pi();return a.prefix||(a.prefix=gt()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:f,icon:l}=r,{width:u,icon:d}=i,c=Hl({transform:o,containerWidth:u,iconWidth:f}),p={tag:"rect",attributes:m(m({},Qe),{},{fill:"white"})},_=l.children?{children:l.children.map(rr)}:{},g={tag:"g",attributes:m({},c.inner),children:[rr(m({tag:l.tag,attributes:m(m({},l.attributes),c.path)},_))]},h={tag:"g",attributes:m({},c.outer),children:[g]},y="mask-".concat(s||Qt()),A="clip-".concat(s||Qt()),b={tag:"mask",attributes:m(m({},Qe),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,h]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Zf(d)},b]};return n.push(w,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(y,")")},Qe)}),{children:n,attributes:a}}}},tc={provides(t){let e=!1;vt.matchMedia&&(e=vt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:m(m({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=m(m({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:m(m({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:m(m({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:m(m({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:m(m({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ec={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},nc=[ql,jf,Yf,Uf,Wf,Kf,$f,Jf,Qf,tc,ec];df(nc,{mixoutsTo:G});G.noAuto;G.config;G.library;G.dom;const Pn=G.parse;G.findIconDefinition;G.toHtml;const ac=G.icon;G.layer;G.text;G.counter;let Li=!1;try{Li=!0}catch{}function rc(...t){!Li&&console&&typeof console.error=="function"&&console.error(...t)}function ir(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Pn.icon)return Pn.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function tn(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}var ic=So("<svg><!></svg>");function sc(t,e){var g;Oe(e,!1);let n=O(e,"tag",8),a=O(e,"props",8),r=O(e,"children",8),i=O(e,"style",8,null),s=O(e,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(h){return(h==null?void 0:h.reduce((y,A)=>y+(A.tag?f(A):A),""))||""}function f({tag:h,props:y,children:A}){const b=Object.keys(y).map(w=>`${w}="${y[w]}"`).join(" ");return`<${h} ${b}>${o(A)}</${h}>`}const l=o(r()),u=(g=a())!=null&&g.style?`${a().style}${i()||""}`:i(),d={...a(),style:u};Ln();var c=ic();let p;var _=E(c);No(_,()=>l,!0),Ct(c,h=>s(h),()=>s()),Nn(()=>p=jo(c,p,{...d})),_e(t,c),Ce()}function R(t,e){const n=Ia(e,["children","$$slots","$$events","$$legacy"]),a=Ia(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);Oe(e,!1),O(e,"border",8,!1);let r=O(e,"mask",8,null),i=O(e,"maskId",8,null);O(e,"fixedWidth",8,!1),O(e,"inverse",8,!1),O(e,"flip",8,!1);let s=O(e,"icon",8,null);O(e,"listItem",8,!1),O(e,"pull",8,null),O(e,"pulse",8,!1),O(e,"rotation",8,null),O(e,"size",8,null),O(e,"spin",8,!1),O(e,"spinPulse",8,!1),O(e,"spinReverse",8,!1),O(e,"beat",8,!1),O(e,"fade",8,!1),O(e,"beatFade",8,!1),O(e,"bounce",8,!1),O(e,"shake",8,!1);let o=O(e,"symbol",8,!1),f=O(e,"title",8,""),l=O(e,"titleId",8,null),u=O(e,"transform",8,null);O(e,"swapOpacity",8,!1);let d=O(e,"ref",12,null),c=O(e,"style",8,null);const p=ir(s()),_=tn("classes",[...Zo(n),...(n.class||"").split(" ")]),g=tn("transform",typeof u()=="string"?Pn.transform(u()):u()),h=tn("mask",ir(r())),y=ac(p,{..._,...g,...h,symbol:o(),title:f(),titleId:l(),maskId:i()});let A=dt(null);if(!y)rc("Could not find icon",p);else{const{abstract:L}=y;T(A,ti((k,z,U)=>({tag:k,props:z,children:U}),L[0],a))}Ln();var b=Po(),w=Er(b);{var S=L=>{sc(L,Xo(()=>v(A),{get style(){return c()},get ref(){return d()},set ref(k){d(k)},$$legacy:!0}))};Gr(w,L=>{v(A)&&L(S)})}_e(t,b),Ce()}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const oc={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},lc={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},fc={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const cc={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},uc=cc,dc={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},mc={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]},pc={prefix:"fas",iconName:"object-ungroup",icon:[640,512,[],"f248","M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l209.1 0C339.6 12.9 360.3 0 384 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 113.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-209.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-113.1zM119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 113.1c9.7 5.6 17.8 13.7 23.4 23.4l209.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-113.1c-9.7-5.6-17.8-13.7-23.4-23.4L119.4 96zm192 384c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-40.6 64 0 0 40.6c9.7 5.6 17.8 13.7 23.4 23.4l209.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-113.1c-9.7-5.6-17.8-13.7-23.4-23.4l-46 0c-5.4-15.4-14.6-28.9-26.5-39.6l0-24.4 72.6 0c11.1-19.1 31.7-32 55.4-32c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 113.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-209.1 0z"]},hc={prefix:"fas",iconName:"mobile-screen-button",icon:[384,512,["mobile-alt"],"f3cd","M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"]},vc=hc,gc={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},bc={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},xc={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},yc=xc,_c={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},ce=_c;function wc(t){const e=t-1;return e*e*e+1}function kc(t,{delay:e=0,duration:n=400,easing:a=wc,axis:r="y"}={}){const i=getComputedStyle(t),s=+i.opacity,o=r==="y"?"height":"width",f=parseFloat(i[o]),l=r==="y"?["top","bottom"]:["left","right"],u=l.map(y=>`${y[0].toUpperCase()}${y.slice(1)}`),d=parseFloat(i[`padding${u[0]}`]),c=parseFloat(i[`padding${u[1]}`]),p=parseFloat(i[`margin${u[0]}`]),_=parseFloat(i[`margin${u[1]}`]),g=parseFloat(i[`border${u[0]}Width`]),h=parseFloat(i[`border${u[1]}Width`]);return{delay:e,duration:n,easing:a,css:y=>`overflow: hidden;opacity: ${Math.min(y*20,1)*s};${o}: ${y*f}px;padding-${l[0]}: ${y*d}px;padding-${l[1]}: ${y*c}px;margin-${l[0]}: ${y*p}px;margin-${l[1]}: ${y*_}px;border-${l[0]}-width: ${y*g}px;border-${l[1]}-width: ${y*h}px;min-${o}: 0`}}var Ac=Vr('<nav class="absolute left-0 top-10 w-full bg-primary/90 px-4 pb-4 shadow-md md:hidden"><a href="#section_1" class="font-primary text-center block py-2 border-b border-light text-secondary">Home</a> <a href="#section_2" class="font-primary text-center block py-2 border-b border-light text-secondary">About Me</a> <a href="#section_3" class="font-primary text-center block py-2 border-b border-light text-secondary">Skills</a> <a href="#section_4" class="font-primary text-center block py-2 text-secondary">Portofolio</a></nav>'),Ec=Vr(`<header><div class="w-full fixed top-0 z-50 pl-3 pr-3 md:pl-6 md:pr-6 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10 2xl:pl-12 2xl:pr-12 h-10 md:h-12 lg:h-14 2xl:h-20 flex bg-primary/80 justify-between"><div class="pr-2 md:pr-5 basis-1/3 flex items-center"><img src="./dark-theme.svg" alt="logo" class="w-15 md:w-20 lg:w-25 h-auto"></div> <button class="md:hidden pr-2 text-secondary" aria-label="tombol navbar"><svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button> <nav class="hidden md:flex basis-2/3 p-2 items-center justify-end"><a href="#section_1">Home</a> <a href="#section_2">About Me</a> <a href="#section_3">Skills</a> <a href="#section_4">Portofolio</a></nav> <!></div></header> <main><section class="w-full flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-white scroll-mt-12 relative z-0 px-6 md:px-10 overflow-hidden" id="section_1"><div><img src="./images/fullbody.png" alt="Foto" class="h-[500px] md:h-[700px] lg:h-[900px] object-cover transition-all duration-200 hover:scale-110 -translate-x-5 md:translate-x-0 md:translate-y-10 xl:translate-x-20 2xl:translate-x-30"></div> <div class="flex flex-col justify-center items-center md:items-start md:basis-1/2 text-center md:text-left mt-8 md:mt-0 space-y-4"><p>Welcome</p> <p>to my web</p> <a href="#section_2">About Me</a></div></section> <section class="w-full min-h-screen bg-dark px-6 md:px-16 lg:px-32 py-12 flex flex-col md:flex-row items-start justify-center gap-8 md:pt-30" id="section_2"><div class="flex flex-col gap-6 w-full md:w-3/5"><img src="./images/foto-personal.jpg" alt="Foto Personal"></div> <div class="flex p-5 pt-0 flex-col w-full md:w-2/5 text-center overflow-hidden text-secondary"><div class="shadow-light shadow-2xl/10 flex flex-col text-center mb-10 md:text-justify text-secondary bg-dark2 p-6 rounded-2xl shadow-xl"><h2 class="font-primary text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold uppercase mb-2">Tentang Saya</h2> <p class="mt-3 font-primary text-sm lg:text-lg xl:text-xl 2xl:text-2xl">Saya seorang Front-End developer yang terbiasa mendesain web dari yang
          sederhana sampai cukup kompleks. Saya juga memiliki pengalaman dalam
          fotografi, desain grafis menggunakan Photoshop & CorelDraw, serta
          administrasi dan pencatatan data.</p></div> <div class="bg-dark2 p-3 mb-10 rounded-2xl shadow-xl shadow-light shadow-2xl/6"><h2 class="font-primary text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold uppercase mb-2">Profil Saya</h2></div> <div class="flex flex-col md:flex-row lg:flex-col gap-4 px-4"><div class="md:w-1/2 w-full lg:w-full"><div class="mb-8 flex flex-col items-center text-center md:text-center"><!> <p class="font-primary break-words w-full font-regular text-secondary text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">Aflah Mahdi Yazdi</p></div> <div class="mb-6 flex flex-col items-center text-center md:text-center"><!> <p class="font-primary break-words w-full font-regular text-secondary text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">22 Desember 2005</p></div></div> <div class="md:w-1/2 w-full lg:w-full"><div class="mb-8 flex flex-col items-center text-center md:text-center"><!> <p class="font-primary break-words w-full font-regular text-secondary text-sm md:text-[12px] lg:text-lg xl:text-xl 2xl:text-2xl">Diyaz.hal22@gmail.com</p></div> <div class="mb-8 flex flex-col items-center text-center md:text-center"><!> <p class="font-primary break-words w-full font-regular text-secondary text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">+62-823-3304-4295</p></div></div></div></div></section> <section class="w-full min-h-screen bg-dark2 px-6 md:px-16 lg:px-32 py-12 flex flex-col items-center gap-8 md:pt-30" id="section_3"><div class="bg-dark4 shadow-light shadow-2xl/20 p-2 md:p-5 mb-10 w-60 md:w-70 lg:w-80 xl:w-100 2xl:w-120 text-center rounded-2xl shadow-xl"><h2 class="font-primary text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-light mb-2">MY sKills</h2></div> <div class="flex flex-wrap 2xl:flex-nowrap justify-center gap-10 px-4 items-stretch"><div class="w-full md:w-[50%] xl:w-[40%] 2xl:w-1/4 mb-6 flex flex-col items-center text-center"><button><!></button> <p class="font-primary break-words w-full font-bold text-light p-2 text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">WEb DEVelopment</p> <div class="w-fit md:mt-1 md:w-80 bg-light3 p-6 rounded-2xl shadow-light shadow-2xl/25 flex flex-col justify-between flex-1 h-full"><p class="font-primary break-words w-full text-dark2 text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl">Butuh website buat jualan online, atau website untuk admin kantor?
            Saya dapat membuatnya dengan menggunakan HTML, CSS dan juga
            Javascript. Dijamin responsif bisa dibuka di mana saja.</p> <hr class="border-t-3 mt-5 border-dark2"> <button class="mt-4 self-center text-dark2 hover:cursor-pointer hover:text-dark hover:scale-105 transition-all duration-300"><!></button></div></div> <div class="w-full md:w-[50%] xl:w-[40%] 2xl:w-1/4 mb-6 flex flex-col items-center text-center"><button><!></button> <p class="font-primary break-words w-full font-bold text-light p-2 text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">APP DEVelopment</p> <div class="w-fit md:mt-1 md:w-80 bg-light3 p-6 rounded-2xl shadow-light shadow-2xl/25 flex flex-col justify-between flex-1 h-full"><p class="break-words w-full font-primary text-dark2 text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl">Mau punya aplikasi sendiri buat bisnis anda? Silahkan hubungi Saya
            untuk membuatnya. Saya menggunakan bahasa pemrograman Java untuk
            pengembangan aplikasi.</p> <hr class="border-t-3 mt-10 border-dark2"> <button class="mt-4 self-center text-dark2 hover:cursor-pointer hover:text-dark hover:scale-105 transition-all duration-300"><!></button></div></div> <div class="w-full md:w-[50%] xl:w-[40%] 2xl:w-1/4 mb-6 flex flex-col items-center text-center"><button><!></button> <p class="font-primary break-words w-full font-bold text-light p-2 text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">deSAIN GRAfis</p> <div class="w-fit md:w-80 bg-light3 p-6 rounded-2xl shadow-light shadow-2xl/25 flex flex-col justify-between flex-1 h-full"><p class="break-words w-full font-primary text-dark2 text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl">Butuh desain yang menarik dan cepat? Saya dapat mewujudkannya dengan
            menggunakan CorelDraw dan juga Photoshop.</p> <hr class="border-t-3 mt-16 border-dark2"> <button class="mt-4 self-center text-dark2 hover:cursor-pointer hover:text-dark hover:scale-105 transition-all duration-300"><!></button></div></div> <div class="w-full md:w-[50%] xl:w-[40%] 2xl:w-1/4 mb-6 flex flex-col items-center text-center"><button><!></button> <p class="font-primary break-words w-full font-bold text-light p-2 text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">FOTOgrafi</p> <div class="w-fit md:w-80 bg-light3 p-6 rounded-2xl shadow-light shadow-2xl/25 flex flex-col justify-between flex-1 h-full"><p class="break-words w-full font-primary text-dark2 text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl">Punya acara tapi tidak punya fotografer? Kamilah solusinya. Dengan
            lebih dari 100 portofolio, bisa dipastikan kami memiliki pengalaman
            banyak dalam bidang ini.</p> <hr class="border-t-3 mt-8 border-dark2"> <button class="mt-4 self-center text-dark2 hover:cursor-pointer hover:text-dark hover:scale-105 transition-all duration-300"><!></button></div></div></div></section> <section class="w-full min-h-screen bg-dark px-6 md:px-16 lg:px-32 py-12 flex flex-col items-center gap-8 md:pt-30 z-30" id="section_4"><div class="bg-dark4 shadow-light shadow-2xl/20 p-5 md:p-7 mb-10 w-80 md:w-100 lg:w-120 xl:w-140 2xl:w-160 text-center rounded-2xl shadow-xl"><h2 class="text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-light uppercase mb-2">Link Portofolio Saya</h2></div> <div class="flex gap-20 flex-col md:flex-row 2xl:flex-nowrap justify-center md:gap-30 px-4 items-stretch"><div class="w-full md:w-1/2"><a href="https://github.com/MasYaaz" target="_blank" aria-label="Github"><img alt="Github" src="./images/github.svg" class="w-60 h-fit invert fa-5x md:mb-3 hover:scale-115 transition-transform duration-300"></a></div> <div class="w-full md:w-1/2"><a href="https://www.shutterstock.com/g/MasYaaz" target="_blank" aria-label="Shutterstock"><img alt="Shutterstock" src="./images/shutterstock.svg" class="w-60 h-fit p-4 md:mb-3 hover:scale-115 transition-transform duration-300"></a></div></div> <p class="mt-5 md:mt-30 text-center text-light font-medium font-primary">-- Thanks for your attention --</p></section></main> <footer class="w-full bg-light2 text-dark2 px-6 py-10 font-primary"><div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"><div><img src="./light-theme.svg" alt="logo" class="-mb-5 -mt-10 w-30 h-auto"> <p class="text-sm text-dark2">Terima kasih telah mengunjungi portofolio saya. Jangan ragu untuk
        menghubungi saya untuk kerja sama atau proyek!</p></div> <div><h3 class="text-xl font-semibold text-dark mb-2">Navigasi</h3> <ul class="space-y-1 text-sm"><li><a href="#section_1" class="hover:text-dark">Home</a></li> <li><a href="#section_2" class="hover:text-dark">About me</a></li> <li><a href="#section_3" class="hover:text-dark">Skills</a></li> <li><a href="#section_4" class="hover:text-dark">Portofolio</a></li></ul></div> <div><h3 class="text-xl font-semibold text-dark mb-2">Ikuti Saya</h3> <div class="flex space-x-4"><a target="_blank" href="#" aria-label="Instagram" class="hover:text-dark"><!></a> <a target="_blank" href="https://www.linkedin.com/in/aflah-mahdi-yazdi-a69414355/" aria-label="LinkedIn" class="hover:text-dark"><!></a> <a target="_blank" href="https://github.com/MasYaaz" aria-label="GitHub" class="hover:text-dark"><!></a></div></div></div> <hr class="my-6 border-dark2"> <p class="text-center text-sm text-dark2">&copy; 2025 MyPorto - Web Portofolio . All rights reserved.</p></footer>`,1);function Sc(t,e){Oe(e,!1);let n=dt("section_1"),a=dt(!1),r=dt(!1),i=dt(!1),s=dt(),o=dt(),f;function l(){const F=window.scrollY+100,q=document.getElementById("section_1"),Rt=document.getElementById("section_2"),jt=document.getElementById("section_3"),Yt=document.getElementById("section_4");q==null||q.offsetTop;const Be=(Rt==null?void 0:Rt.offsetTop)??0,He=(jt==null?void 0:jt.offsetTop)??0,Ve=(Yt==null?void 0:Yt.offsetTop)??0;F>=Ve?T(n,"section_4"):F>=He?T(n,"section_3"):F>=Be?T(n,"section_2"):T(n,"section_1"),v(a)&&T(a,!1)}function u(){T(a,!v(a))}Qr(async()=>{window.addEventListener("scroll",l),await mo(),f=new IntersectionObserver(F=>{F.forEach(q=>{q.isIntersecting&&(q.target===v(s)&&T(r,!0),q.target===v(o)&&T(i,!0))})},{threshold:.3}),v(s)&&f.observe(v(s)),v(o)&&f.observe(v(o))}),Ko(()=>{window.removeEventListener("scroll",l),f&&(v(s)&&f.unobserve(v(s)),v(o)&&f.unobserve(v(o)))}),Ln();var d=Ec(),c=Er(d),p=E(c),_=P(E(p),2),g=P(_,2),h=E(g);let y;var A=P(h,2);let b;var w=P(A,2);let S;var L=P(w,2);let k;var z=P(g,2);{var U=F=>{var q=Ac();Ho(3,q,()=>kc,()=>({duration:400})),_e(F,q)};Gr(z,F=>{v(a)&&F(U)})}var Gn=P(c,2),qn=E(Gn),Ye=E(qn);let Xn;Ct(Ye,F=>T(s,F),()=>v(s));var Fi=P(Ye,2),Ue=E(Fi);let Kn;Ct(Ue,F=>T(s,F),()=>v(s));var We=P(Ue,2);let $n;Ct(We,F=>T(s,F),()=>v(s));var Jn=P(We,2);let Zn;Ct(Jn,F=>T(s,F),()=>v(s));var Qn=P(qn,2),ta=E(Qn),ea=E(ta);let na;Ct(ea,F=>T(o,F),()=>v(o));var zi=P(ta,2),Di=P(E(zi),4),aa=E(Di),ra=E(aa),Ri=E(ra);R(Ri,{icon:dc,class:"text-secondary fa-3x mb-3"});var ji=P(ra,2),Yi=E(ji);R(Yi,{icon:uc,class:"text-secondary fa-3x mb-3"});var Ui=P(aa,2),ia=E(Ui),Wi=E(ia);R(Wi,{icon:bc,class:"text-secondary fa-3x mb-3"});var Bi=P(ia,2),Hi=E(Bi);R(Hi,{icon:gc,class:"text-secondary fa-3x mb-3"});var Vi=P(Qn,2),Gi=P(E(Vi),2),sa=E(Gi),oa=E(sa),qi=E(oa);R(qi,{icon:mc,class:"text-secondary fa-5x md:fa-3x md:mb-3 hover:scale-115 transition-transform duration-300"});var Xi=P(oa,4),Ki=P(E(Xi),4),$i=E(Ki);R($i,{icon:ce,class:"fa-2x"});var la=P(sa,2),fa=E(la),Ji=E(fa);R(Ji,{icon:vc,class:"text-secondary fa-5x md:fa-3x md:mb-3 hover:scale-115 transition-transform duration-300"});var Zi=P(fa,4),Qi=P(E(Zi),4),ts=E(Qi);R(ts,{icon:ce,class:"fa-2x"});var ca=P(la,2),ua=E(ca),es=E(ua);R(es,{icon:pc,class:"text-secondary fa-5x md:fa-3x md:mb-3 hover:scale-115 transition-transform duration-300"});var ns=P(ua,4),as=P(E(ns),4),rs=E(as);R(rs,{icon:ce,class:"fa-2x"});var is=P(ca,2),da=E(is),ss=E(da);R(ss,{icon:yc,class:"text-secondary fa-5x md:fa-3x md:mb-3 hover:scale-115 transition-transform duration-300"});var os=P(da,4),ls=P(E(os),4),fs=E(ls);R(fs,{icon:ce,class:"fa-2x"});var cs=P(Gn,2),us=E(cs),ds=P(E(us),4),ms=P(E(ds),2),ma=E(ms),ps=E(ma);R(ps,{icon:lc,class:"text-dark text-xl"});var pa=P(ma,2),hs=E(pa);R(hs,{icon:oc,class:"text-dark text-xl"});var vs=P(pa,2),gs=E(vs);R(gs,{icon:fc,class:"text-dark text-xl"}),Nn((F,q,Rt,jt,Yt,Be,He,Ve,bs)=>{y=Z(h,1,"font-primary text-center mr-3 pb-1 text-[13px] md:text-[15px] md:mr-5 w-22 tracking-[1px] text-secondary hover:text-light border-b-2 hover:scale-105 transition-transform duration-75",null,y,F),b=Z(A,1,"font-primary text-center ml-3 mr-3 pb-1 w-23 text-[13px] md:text-[15px] md:mr-5 tracking-[1px] text-secondary hover:text-light border-b-2 hover:scale-105 transition-transform duration-75",null,b,q),S=Z(w,1,"font-primary text-center ml-3 mr-3 pb-1 w-22 text-[13px] md:text-[15px] md:mr-5 tracking-[1px] text-secondary hover:text-light border-b-2 hover:scale-105 transition-transform duration-75",null,S,Rt),k=Z(L,1,"font-primary text-center ml-3 mr-15 pb-1 w-22 text-[13px] md:text-[15px] md:mr-5 tracking-[1px] text-secondary hover:text-light border-b-2 hover:scale-105 transition-transform duration-75",null,k,jt),Xn=Z(Ye,1,"transition-all duration-700 ease-out transform md:basis-1/2 flex justify-center",null,Xn,Yt),Kn=Z(Ue,1,"font-primary text-5xl md:text-6xl lg:text-8xl uppercase font-bold transition-all duration-700 ease-out transform",null,Kn,Be),$n=Z(We,1,"xl:pl-2 font-primary font-medium text-lg md:text-xl lg:text-4xl lg:pl-5 uppercase tracking-[1.5px] transition-all duration-700 ease-out transform",null,$n,He),Zn=Z(Jn,1,"font-primary mt-10 bg-dark3 hover:bg-dark4 text-secondary hover:text-light rounded-xl text-sm md:text-md md:text-xl py-2 px-5 uppercase shadow transition-all duration-300 ease-out transform",null,Zn,Ve),na=Z(ea,1,"w-full aspect-square object-cover rounded-3xl shadow-xl/25 transition-all duration-700 ease-out transform",null,na,bs)},[()=>({"border-secondary":v(n)==="section_1","scale-110":v(n)==="section_1","border-transparent":v(n)!=="section_1"}),()=>({"border-secondary":v(n)==="section_2","scale-110":v(n)==="section_2","border-transparent":v(n)!=="section_2"}),()=>({"border-secondary":v(n)==="section_3","scale-110":v(n)==="section_3","border-transparent":v(n)!=="section_3"}),()=>({"border-secondary":v(n)==="section_4","scale-110":v(n)==="section_4","border-transparent":v(n)!=="section_4"}),()=>({"translate-y-100":!v(r),"opacity-0":!v(r),"translate-y-15":v(r),"opacity-100":v(r)}),()=>({"-translate-y-10":!v(r),"opacity-0":!v(r),"translate-y-15":v(r),"opacity-100":v(r)}),()=>({"-translate-y-10":!v(r),"opacity-0":!v(r),"translate-y-10":v(r),"opacity-100":v(r)}),()=>({"-translate-y-10":!v(r),"opacity-0":!v(r),"translate-y-10":v(r),"opacity-100":v(r)}),()=>({"-translate-x-24":!v(i),"opacity-0":!v(i),"translate-x-0":v(i),"opacity-100":v(i)})],vr),Ao("click",_,u),_e(t,d),Ce()}Oo(Sc,{target:document.getElementById("app")});
