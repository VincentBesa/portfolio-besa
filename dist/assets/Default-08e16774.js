import{u as se,_ as le,m as N,a as ue,b as Z}from"./tag-8c5cdd8a.js";import{p as A,i as F,c as v,r as ie,a as z,g as re,s as K,o as X,b as ce,d as B,f as ve,e as P,h as pe,j as de,k as U,l as h,m as fe,n as W,w as Y,q as me,t as ye,u as _e}from"./index-84e8cee9.js";const k=Symbol.for("vuetify:layout"),ge=Symbol.for("vuetify:layout-item"),D=1e3,he=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function xe(){const e=F(k);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const be=(e,l,n,s)=>{let u={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...u}}];for(const r of e){const f=l.get(r),y=n.get(r),_=s.get(r);if(!f||!y||!_)continue;const x={...u,[f.value]:parseInt(u[f.value],10)+(_.value?parseInt(y.value,10):0)};i.push({id:r,layer:x}),u=x}return i};function Ie(e){const l=F(k,null),n=v(()=>l?l.rootZIndex.value-100:D),s=ie([]),u=z(new Map),i=z(new Map),r=z(new Map),f=z(new Map),y=z(new Map),{resizeRef:_,contentRect:x}=se(),G=v(()=>{const o=new Map,p=e.overlaps??[];for(const t of p.filter(c=>c.includes(":"))){const[c,a]=t.split(":");if(!s.value.includes(c)||!s.value.includes(a))continue;const m=u.get(c),g=u.get(a),S=i.get(c),$=i.get(a);!m||!g||!S||!$||(o.set(a,{position:m.value,amount:parseInt(S.value,10)}),o.set(c,{position:g.value,amount:-parseInt($.value,10)}))}return o}),b=v(()=>{const o=[...new Set([...r.values()].map(t=>t.value))].sort((t,c)=>t-c),p=[];for(const t of o){const c=s.value.filter(a=>{var m;return((m=r.get(a))==null?void 0:m.value)===t});p.push(...c)}return be(p,u,i,f)}),O=v(()=>!Array.from(y.values()).some(o=>o.value)),I=v(()=>b.value[b.value.length-1].layer),J=v(()=>({"--v-layout-left":B(I.value.left),"--v-layout-right":B(I.value.right),"--v-layout-top":B(I.value.top),"--v-layout-bottom":B(I.value.bottom),...O.value?void 0:{transition:"none"}})),w=v(()=>b.value.slice(1).map((o,p)=>{let{id:t}=o;const{layer:c}=b.value[p],a=i.get(t),m=u.get(t);return{id:t,...c,size:Number(a.value),position:m.value}})),T=o=>w.value.find(p=>p.id===o),L=re("createLayout"),E=K(!1);X(()=>{E.value=!0}),ce(k,{register:(o,p)=>{let{id:t,order:c,position:a,layoutSize:m,elementSize:g,active:S,disableTransitions:$,absolute:te}=p;r.set(t,c),u.set(t,a),i.set(t,m),f.set(t,S),$&&y.set(t,$);const H=ve(ge,L==null?void 0:L.vnode).indexOf(o);H>-1?s.value.splice(H,0,t):s.value.push(t);const j=v(()=>w.value.findIndex(V=>V.id===t)),M=v(()=>n.value+b.value.length*2-j.value*2),oe=v(()=>{const V=a.value==="left"||a.value==="right",R=a.value==="right",ae=a.value==="bottom",q={[a.value]:0,zIndex:M.value,transform:`translate${V?"X":"Y"}(${(S.value?0:-110)*(R||ae?-1:1)}%)`,position:te.value||n.value!==D?"absolute":"fixed",...O.value?void 0:{transition:"none"}};if(!E.value)return q;const d=w.value[j.value];if(!d)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const C=G.value.get(t);return C&&(d[C.position]+=C.amount),{...q,height:V?`calc(100% - ${d.top}px - ${d.bottom}px)`:g.value?`${g.value}px`:void 0,left:R?void 0:`${d.left}px`,right:R?`${d.right}px`:void 0,top:a.value!=="bottom"?`${d.top}px`:void 0,bottom:a.value!=="top"?`${d.bottom}px`:void 0,width:V?g.value?`${g.value}px`:void 0:`calc(100% - ${d.left}px - ${d.right}px)`}}),ne=v(()=>({zIndex:M.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ne,zIndex:M}},unregister:o=>{r.delete(o),u.delete(o),i.delete(o),f.delete(o),y.delete(o),s.value=s.value.filter(p=>p!==o)},mainRect:I,mainStyles:J,getLayoutItem:T,items:w,layoutRect:x,rootZIndex:n});const Q=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ee=v(()=>({zIndex:l?n.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:Q,layoutStyles:ee,getLayoutItem:T,items:w,layoutRect:x,layoutRef:_}}const we={},Se={class:"nav-8 mb-5 sticky"};function $e(e,l){return P(),pe("section",Se)}const Ve=le(we,[["render",$e],["__scopeId","data-v-78feee6e"]]);function ze(){const e=K(!1);return X(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:de(e)}}const Be=A({scrollable:Boolean,...N(),...ue({tag:"main"})},"VMain"),Le=U()({name:"VMain",props:Be(),setup(e,l){let{slots:n}=l;const{mainStyles:s}=xe(),{ssrBootStyles:u}=ze();return Z(()=>h(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,u.value,e.style]},{default:()=>{var i,r;return[e.scrollable?h("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(r=n.default)==null?void 0:r.call(n)]}})),{}}}),Me={__name:"View",setup(e){return(l,n)=>{const s=fe("router-view");return P(),W(Le,null,{default:Y(()=>[h(s)]),_:1})}}};const Re=A({...N(),...he({fullHeight:!0}),...me()},"VApp"),Ce=U()({name:"VApp",props:Re(),setup(e,l){let{slots:n}=l;const s=ye(e),{layoutClasses:u,getLayoutItem:i,items:r,layoutRef:f}=Ie(e),{rtlClasses:y}=_e();return Z(()=>{var _;return h("div",{ref:f,class:["v-application",s.themeClasses.value,u.value,y.value,e.class],style:[e.style]},[h("div",{class:"v-application__wrap"},[(_=n.default)==null?void 0:_.call(n)])])}),{getLayoutItem:i,items:r,theme:s}}}),Oe={__name:"Default",setup(e){return(l,n)=>(P(),W(Ce,null,{default:Y(()=>[h(Ve),h(Me)]),_:1}))}};export{Oe as default};