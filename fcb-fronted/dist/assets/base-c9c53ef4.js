import{i as V,f as g,a9 as y,aq as b,N as w,a0 as O,A as B,r as _,B as E,s as I}from"./index-bded577e.js";function K(s){for(var n=-1,e=s==null?0:s.length,r={};++n<e;){var c=s[n];r[c[0]]=c[1]}return r}const T=s=>s===void 0,D=s=>typeof s=="boolean",F=s=>typeof s=="number",G=s=>typeof Element>"u"?!1:s instanceof Element,U=s=>V(s)?!Number.isNaN(Number(s)):!1,h="__epPropKey",z=s=>s,j=s=>g(s)&&!!s[h],q=(s,n)=>{if(!g(s)||j(s))return s;const{values:e,required:r,default:c,type:l,validator:d}=s,p={type:l,required:!!r,validator:e||d?m=>{let u=!1,f=[];if(e&&(f=Array.from(e),y(s,"default")&&f.push(c),u||(u=f.includes(m))),d&&(u||(u=d(m))),!u&&f.length>0){const $=[...new Set(f)].map(N=>JSON.stringify(N)).join(", ");b(`Invalid prop: validation failed${n?` for prop "${n}"`:""}. Expected one of [${$}], got value ${JSON.stringify(m)}.`)}return u}:void 0,[h]:!0};return y(s,"default")&&(p.default=c),p},H=s=>K(Object.entries(s).map(([n,e])=>[n,q(e,n)])),L=(s,n)=>{if(s.install=e=>{for(const r of[s,...Object.values(n??{})])e.component(r.name,r)},n)for(const[e,r]of Object.entries(n))s[e]=r;return s},M=(s,n)=>(s.install=e=>{s._context=e._context,e.config.globalProperties[n]=s},s),Q=s=>(s.install=w,s),R=s=>s,v="el",x="is-",i=(s,n,e,r,c)=>{let l=`${s}-${n}`;return e&&(l+=`-${e}`),r&&(l+=`__${r}`),c&&(l+=`--${c}`),l},C=Symbol("namespaceContextKey"),A=s=>{const n=s||(O()?B(C,_(v)):_(v));return E(()=>I(n)||v)},W=(s,n)=>{const e=A(n);return{namespace:e,b:(t="")=>i(e.value,s,t,"",""),e:t=>t?i(e.value,s,"",t,""):"",m:t=>t?i(e.value,s,"","",t):"",be:(t,a)=>t&&a?i(e.value,s,t,a,""):"",em:(t,a)=>t&&a?i(e.value,s,"",t,a):"",bm:(t,a)=>t&&a?i(e.value,s,t,"",a):"",bem:(t,a,o)=>t&&a&&o?i(e.value,s,t,a,o):"",is:(t,...a)=>{const o=a.length>=1?a[0]:!0;return t&&o?`${x}${t}`:""},cssVar:t=>{const a={};for(const o in t)t[o]&&(a[`--${e.value}-${o}`]=t[o]);return a},cssVarName:t=>`--${e.value}-${t}`,cssVarBlock:t=>{const a={};for(const o in t)t[o]&&(a[`--${e.value}-${s}-${o}`]=t[o]);return a},cssVarBlockName:t=>`--${e.value}-${s}-${t}`}};var X=(s,n)=>{const e=s.__vccOpts||s;for(const[r,c]of n)e[r]=c;return e};export{X as _,D as a,H as b,Q as c,z as d,v as e,T as f,G as g,K as h,F as i,M as j,q as k,A as l,R as m,C as n,U as o,W as u,L as w};
