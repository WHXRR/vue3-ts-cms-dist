import{V,r as F,W as H,X as Z,m as G,w as $,f as A,v as E,Y as J,t as T,N as tt,O as et,n as st,J as nt,l as ot}from"./@vue-249e6205.js";var ct=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let N;const k=t=>N=t,B=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var C;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(C||(C={}));function ht(){const t=V(!0),o=t.run(()=>F({}));let s=[],e=[];const r=H({install(u){k(r),r._a=u,u.provide(B,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ct?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const D=()=>{};function W(t,o,s,e=D){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&tt()&&et(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const rt=t=>t();function I(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];R(r)&&R(e)&&t.hasOwnProperty(s)&&!E(e)&&!J(e)?t[s]=I(r,e):t[s]=e}return t}const ut=Symbol();function at(t){return!R(t)||!t.hasOwnProperty(ut)}const{assign:v}=Object;function ft(t){return!!(E(t)&&t.effect)}function it(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let p;function b(){a||(s.state.value[t]=r?r():{});const y=nt(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((d,m)=>(d[m]=H(ot(()=>{k(s);const _=s._s.get(t);return f[m].call(_,_)})),d),{}))}return p=X(t,b,o,s,e,!0),p}function X(t,o,s={},e,r,u){let f;const a=v({actions:{}},s),p={deep:!0};let b,y,d=[],m=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),F({});let L;function O(c){let n;b=y=!1,typeof c=="function"?(c(e.state.value[t]),n={type:C.patchFunction,storeId:t,events:_}):(I(e.state.value[t],c),n={type:C.patchObject,payload:c,storeId:t,events:_});const h=L=Symbol();st().then(()=>{L===h&&(b=!0)}),y=!0,P(d,n,e.state.value[t])}const Y=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{v(S,h)})}:D;function q(){f.stop(),d=[],m=[],e._s.delete(t)}function z(c,n){return function(){k(e);const h=Array.from(arguments),S=[],w=[];function Q(i){S.push(i)}function U(i){w.push(i)}P(m,{args:h,name:c,store:l,after:Q,onError:U});let x;try{x=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw P(w,i),i}return x instanceof Promise?x.then(i=>(P(S,i),i)).catch(i=>(P(w,i),Promise.reject(i))):(P(S,x),x)}}const K={_p:e,$id:t,$onAction:W.bind(null,m),$patch:O,$reset:Y,$subscribe(c,n={}){const h=W(d,c,n.detached,()=>S()),S=f.run(()=>$(()=>e.state.value[t],w=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:C.direct,events:_},w)},v({},p,n)));return h},$dispose:q},l=A(K);e._s.set(t,l);const M=e._a&&e._a.runWithContext||rt,g=e._e.run(()=>(f=V(),M(()=>f.run(o))));for(const c in g){const n=g[c];if(E(n)&&!ft(n)||J(n))u||(j&&at(n)&&(E(n)?n.value=j[c]:I(n,j[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=z(c,n);g[c]=h,a.actions[c]=n}}return v(l,g),v(T(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{O(n=>{v(n,c)})}}),e._p.forEach(c=>{v(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function bt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,p){const b=Z();return a=a||(b?G(B,null):null),a&&k(a),a=N,a._s.has(e)||(u?X(e,o,r,a):it(e,r,a)),a._s.get(e)}return f.$id=e,f}export{ht as c,bt as d};