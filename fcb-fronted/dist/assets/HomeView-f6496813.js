import"./base-c9c53ef4.js";import{E as D}from"./el-card-ad43cf4b.js";import{E as j,a as H}from"./el-col-2bb883a2.js";import{u as M,E as G}from"./el-button-c013d252.js";import{E as K,r as U}from"./request-ff09d312.js";import{r as k,i as Y,g as _,a as E,u as Z,t as J}from"./index-1ab675c3.js";import{r as L,a as N,c as Q,t as W,d as F,h as y,w as b,b as P,e as d,v as X,T as ee,n as R,i as O,f as q,g as te,j as oe,u as le,k as ne,o as ae,l as se,m as S,p as V,F as re,q as ue,s as x,x as $,y as I,z as ie}from"./index-bded577e.js";import{u as ce,a as de,_ as fe}from"./CardTools.vue_vue_type_script_setup_true_lang-ac1e5713.js";import"./focus-trap-f3162b15.js";import"./vnode-3cd1eadd.js";function ve(t){let e;const o=L(!1),l=N({...t,originalPosition:"",originalOverflow:"",visible:!1});function r(n){l.text=n}function a(){const n=l.parent,f=i.ns;if(!n.vLoadingAddClassList){let v=n.getAttribute("loading-number");v=Number.parseInt(v)-1,v?n.setAttribute("loading-number",v.toString()):(k(n,f.bm("parent","relative")),n.removeAttribute("loading-number")),k(n,f.bm("parent","hidden"))}u(),p.unmount()}function u(){var n,f;(f=(n=i.$el)==null?void 0:n.parentNode)==null||f.removeChild(i.$el)}function g(){var n;t.beforeClose&&!t.beforeClose()||(o.value=!0,clearTimeout(e),e=window.setTimeout(c,400),l.visible=!1,(n=t.closed)==null||n.call(t))}function c(){if(!o.value)return;const n=l.parent;o.value=!1,n.vLoadingAddClassList=void 0,a()}const s=F({name:"ElLoading",setup(n,{expose:f}){const{ns:v,zIndex:h}=M("loading");return f({ns:v,zIndex:h}),()=>{const m=l.spinner||l.svg,B=y("svg",{class:"circular",viewBox:l.svgViewBox?l.svgViewBox:"0 0 50 50",...m?{innerHTML:m}:{}},[y("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),z=l.text?y("p",{class:v.b("text")},[l.text]):void 0;return y(ee,{name:v.b("fade"),onAfterLeave:c},{default:b(()=>[P(d("div",{style:{backgroundColor:l.background||""},class:[v.b("mask"),l.customClass,l.fullscreen?"is-fullscreen":""]},[y("div",{class:v.b("spinner")},[B,z])]),[[X,l.visible]])])})}}}),p=Q(s),i=p.mount(document.createElement("div"));return{...W(l),setText:r,removeElLoadingChild:u,close:g,handleAfterLeave:c,vm:i,get $el(){return i.$el}}}let C;const me=function(t={}){if(!Y)return;const e=ge(t);if(e.fullscreen&&C)return C;const o=ve({...e,closed:()=>{var r;(r=e.closed)==null||r.call(e),e.fullscreen&&(C=void 0)}});pe(e,e.parent,o),A(e,e.parent,o),e.parent.vLoadingAddClassList=()=>A(e,e.parent,o);let l=e.parent.getAttribute("loading-number");return l?l=`${Number.parseInt(l)+1}`:l="1",e.parent.setAttribute("loading-number",l),e.parent.appendChild(o.$el),R(()=>o.visible.value=e.visible),e.fullscreen&&(C=o),o},ge=t=>{var e,o,l,r;let a;return O(t.target)?a=(e=document.querySelector(t.target))!=null?e:document.body:a=t.target||document.body,{parent:a===document.body||t.body?document.body:a,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:a===document.body&&((o=t.fullscreen)!=null?o:!0),lock:(l=t.lock)!=null?l:!1,customClass:t.customClass||"",visible:(r=t.visible)!=null?r:!0,target:a}},pe=async(t,e,o)=>{const{nextZIndex:l}=o.vm.zIndex||o.vm._.exposed.zIndex,r={};if(t.fullscreen)o.originalPosition.value=_(document.body,"position"),o.originalOverflow.value=_(document.body,"overflow"),r.zIndex=l();else if(t.parent===document.body){o.originalPosition.value=_(document.body,"position"),await R();for(const a of["top","left"]){const u=a==="top"?"scrollTop":"scrollLeft";r[a]=`${t.target.getBoundingClientRect()[a]+document.body[u]+document.documentElement[u]-Number.parseInt(_(document.body,`margin-${a}`),10)}px`}for(const a of["height","width"])r[a]=`${t.target.getBoundingClientRect()[a]}px`}else o.originalPosition.value=_(e,"position");for(const[a,u]of Object.entries(r))o.$el.style[a]=u},A=(t,e,o)=>{const l=o.vm.ns||o.vm._.exposed.ns;["absolute","fixed","sticky"].includes(o.originalPosition.value)?k(e,l.bm("parent","relative")):E(e,l.bm("parent","relative")),t.fullscreen&&t.lock?E(e,l.bm("parent","hidden")):k(e,l.bm("parent","hidden"))},w=Symbol("ElLoading"),T=(t,e)=>{var o,l,r,a;const u=e.instance,g=n=>q(e.value)?e.value[n]:void 0,c=n=>{const f=O(n)&&(u==null?void 0:u[n])||n;return f&&L(f)},s=n=>c(g(n)||t.getAttribute(`element-loading-${oe(n)}`)),p=(o=g("fullscreen"))!=null?o:e.modifiers.fullscreen,i={text:s("text"),svg:s("svg"),svgViewBox:s("svgViewBox"),spinner:s("spinner"),background:s("background"),customClass:s("customClass"),fullscreen:p,target:(l=g("target"))!=null?l:p?void 0:t,body:(r=g("body"))!=null?r:e.modifiers.body,lock:(a=g("lock"))!=null?a:e.modifiers.lock};t[w]={options:i,instance:me(i)}},be=(t,e)=>{for(const o of Object.keys(e))te(e[o])&&(e[o].value=t[o])},_e={mounted(t,e){e.value&&T(t,e)},updated(t,e){const o=t[w];e.oldValue!==e.value&&(e.value&&!e.oldValue?T(t,e):e.value&&e.oldValue?q(e.value)&&be(e.value,o.options):o==null||o.instance.close())},unmounted(t){var e;(e=t[w])==null||e.instance.close()}};const ye=I("div",{style:{"text-align":"center","margin-top":"1rem",color:"#606266"}},[I("a",{style:{"text-decoration":"none",color:"#606266"},target:"_blank",href:"https://github.com/vastsa/FileCodeBox"},"FileCodeBox V2.0 Beta")],-1),$e=F({__name:"HomeView",setup(t){const e=ce(),o=de(),l=le(),r=ne(),a=L(""),u=N({readonly:!1,loading:!1});ae(()=>{const c=r.query.code;c&&(a.value=c)}),se(a,c=>{c.length===5&&(u.readonly=!0,u.loading=!0,U({url:"/share/select/",method:"POST",data:{code:c}}).then(s=>{e.showFileBox=!0;let p=!0;o.receiveData.forEach(i=>{if(i.code===s.detail.code){p=!1;return}}),p&&o.addReceiveData(s.detail)}).finally(()=>{u.readonly=!1,u.loading=!1,a.value=""}))});const g=c=>{a.value.length<5&&(a.value+=c)};return(c,s)=>{const p=K,i=j,n=G,f=H,v=D,h=_e;return S(),V("main",null,[d(v,{class:"card",style:{"padding-bottom":"1rem"}},{default:b(()=>[d(fe),d(f,{style:{"text-align":"center"}},{default:b(()=>[d(i,{span:24},{default:b(()=>[P(d(p,{readonly:u.readonly,modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=m=>a.value=m),class:"code-input",round:"",autofocus:"",clearable:"",maxlength:"5",placeholder:"请输入五位取件码"},null,8,["readonly","modelValue"]),[[h,u.loading]])]),_:1}),(S(),V(re,null,ue(9,m=>d(i,{span:8,key:m},{default:b(()=>[d(n,{class:"key-button",round:"",onClick:B=>g(m)},{default:b(()=>[$(ie(m),1)]),_:2},1032,["onClick"])]),_:2},1024)),64)),d(i,{span:8},{default:b(()=>[d(n,{onClick:s[1]||(s[1]=m=>x(l).push({name:"send"})),class:"key-button",icon:x(Z),round:""},null,8,["icon"])]),_:1}),d(i,{span:8},{default:b(()=>[d(n,{class:"key-button",round:"",onClick:s[2]||(s[2]=m=>g(0))},{default:b(()=>[$("0")]),_:1})]),_:1}),d(i,{span:8},{default:b(()=>[d(n,{class:"key-button",round:"",icon:x(J),onClick:s[3]||(s[3]=m=>x(e).showFileBox=!0)},null,8,["icon"])]),_:1})]),_:1})]),_:1}),ye])}}});export{$e as default};
