import{a0 as j,aa as pe,a3 as se,bn as be,F as H,a5 as ie,z as g,K as W,P as E,bm as Pe,ah as L,D as oe,r as _,i as D,bG as Ve,bq as ae,bH as Ie,au as we,aF as ue,aR as Fe,aX as xe,aS as Te,ay as Ce,bI as Me,at as Z,o as Re,bJ as Ae,a_ as De,a1 as Oe,bK as Be,aU as Le,bh as _e,af as Ke,am as de,bv as re,bL as Ee,aP as ve,bM as He,Q as me,bN as Ue,aJ as Ne,B as ze,a6 as je,bO as he,bP as ge,M as $,bB as qe}from"./BVcfHsMq.js";import{m as $e,a as We,V as Je,b as ye}from"./C7lNElPM.js";import{b as Qe}from"./CeBOzpmW.js";import{c as Xe}from"./By37Y22m.js";import{V as Ge}from"./DjNLs8i5.js";const Ye=j({renderless:Boolean,...pe()},"VVirtualScrollItem"),Ze=se()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Ye(),emits:{"update:height":e=>!0},setup(e,s){let{attrs:l,emit:i,slots:u}=s;const{resizeRef:d,contentRect:m}=be(void 0,"border");H(()=>{var o;return(o=m.value)==null?void 0:o.height},o=>{o!=null&&i("update:height",o)}),ie(()=>{var o,a;return e.renderless?g(W,null,[(o=u.default)==null?void 0:o.call(u,{itemRef:d})]):g("div",E({ref:d,class:["v-virtual-scroll__item",e.class],style:e.style},l),[(a=u.default)==null?void 0:a.call(u)])})}}),et=-1,tt=1,ne=100,lt=j({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function at(e,s){const l=Pe(),i=L(0);oe(()=>{i.value=parseFloat(e.itemHeight||0)});const u=L(0),d=L(Math.ceil((parseInt(e.height)||l.height.value)/(i.value||16))||1),m=L(0),o=L(0),a=_(),v=_();let k=0;const{resizeRef:I,contentRect:r}=be();oe(()=>{I.value=a.value});const f=D(()=>{var t;return a.value===document.documentElement?l.height.value:((t=r.value)==null?void 0:t.height)||parseInt(e.height)||0}),x=D(()=>!!(a.value&&v.value&&f.value&&i.value));let b=Array.from({length:s.value.length}),y=Array.from({length:s.value.length});const p=L(0);let w=-1;function C(t){return b[t]||i.value}const M=Ie(()=>{const t=performance.now();y[0]=0;const n=s.value.length;for(let h=1;h<=n-1;h++)y[h]=(y[h-1]||0)+C(h-1);p.value=Math.max(p.value,performance.now()-t)},p),J=H(x,t=>{t&&(J(),k=v.value.offsetTop,M.immediate(),O(),~w&&we(()=>{ue&&window.requestAnimationFrame(()=>{Y(w),w=-1})}))});Ve(()=>{M.clear()});function ee(t,n){const h=b[t],V=i.value;i.value=V?Math.min(i.value,n):n,(h!==n||V!==i.value)&&(b[t]=n,M())}function F(t){return t=ae(t,0,s.value.length-1),y[t]||0}function Q(t){return nt(y,t)}let U=0,K=0,q=0;H(f,(t,n)=>{n&&(O(),t<n&&requestAnimationFrame(()=>{K=0,O()}))});function X(){if(!a.value||!v.value)return;const t=a.value.scrollTop,n=performance.now();n-q>500?(K=Math.sign(t-U),k=v.value.offsetTop):K=t-U,U=t,q=n,O()}function N(){!a.value||!v.value||(K=0,q=0,O())}let G=-1;function O(){cancelAnimationFrame(G),G=requestAnimationFrame(te)}function te(){if(!a.value||!f.value)return;const t=U-k,n=Math.sign(K),h=Math.max(0,t-ne),V=ae(Q(h),0,s.value.length),R=t+f.value+ne,c=ae(Q(R)+1,V+1,s.value.length);if((n!==et||V<u.value)&&(n!==tt||c>d.value)){const S=F(u.value)-F(V),P=F(c)-F(d.value);Math.max(S,P)>ne?(u.value=V,d.value=c):(V<=0&&(u.value=V),c>=s.value.length&&(d.value=c))}m.value=F(u.value),o.value=F(s.value.length)-F(d.value)}function Y(t){const n=F(t);!a.value||t&&!n?w=t:a.value.scrollTop=n}const le=D(()=>s.value.slice(u.value,d.value).map((t,n)=>({raw:t,index:n+u.value})));return H(s,()=>{b=Array.from({length:s.value.length}),y=Array.from({length:s.value.length}),M.immediate(),O()},{deep:!0}),{calculateVisibleItems:O,containerRef:a,markerRef:v,computedItems:le,paddingTop:m,paddingBottom:o,scrollToIndex:Y,handleScroll:X,handleScrollend:N,handleItemResize:ee}}function nt(e,s){let l=e.length-1,i=0,u=0,d=null,m=-1;if(e[l]<s)return l;for(;i<=l;)if(u=i+l>>1,d=e[u],d>s)l=u-1;else if(d<s)m=u,i=u+1;else return d===s?u:i;return m}const ot=j({items:{type:Array,default:()=>[]},renderless:Boolean,...lt(),...pe(),...Fe()},"VVirtualScroll"),ut=se()({name:"VVirtualScroll",props:ot(),setup(e,s){let{slots:l}=s;const i=xe("VVirtualScroll"),{dimensionStyles:u}=Te(e),{calculateVisibleItems:d,containerRef:m,markerRef:o,handleScroll:a,handleScrollend:v,handleItemResize:k,scrollToIndex:I,paddingTop:r,paddingBottom:f,computedItems:x}=at(e,Ce(e,"items"));return Me(()=>e.renderless,()=>{function b(){var w,C;const p=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";m.value===document.documentElement?(document[p]("scroll",a,{passive:!0}),document[p]("scrollend",v)):((w=m.value)==null||w[p]("scroll",a,{passive:!0}),(C=m.value)==null||C[p]("scrollend",v))}Re(()=>{m.value=Ae(i.vnode.el,!0),b(!0)}),Ve(b)}),ie(()=>{const b=x.value.map(y=>g(Ze,{key:y.index,renderless:e.renderless,"onUpdate:height":p=>k(y.index,p)},{default:p=>{var w;return(w=l.default)==null?void 0:w.call(l,{item:y.raw,index:y.index,...p})}}));return e.renderless?g(W,null,[g("div",{ref:o,class:"v-virtual-scroll__spacer",style:{paddingTop:Z(r.value)}},null),b,g("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:Z(f.value)}},null)]):g("div",{ref:m,class:["v-virtual-scroll",e.class],onScrollPassive:a,onScrollend:v,style:[u.value,e.style]},[g("div",{ref:o,class:"v-virtual-scroll__container",style:{paddingTop:Z(r.value),paddingBottom:Z(f.value)}},[b])])}),{calculateVisibleItems:d,scrollToIndex:I}}});function rt(e,s){const l=L(!1);let i;function u(o){cancelAnimationFrame(i),l.value=!0,i=requestAnimationFrame(()=>{i=requestAnimationFrame(()=>{l.value=!1})})}async function d(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(l.value){const a=H(l,()=>{a(),o()})}else o()})}async function m(o){var k,I;if(o.key==="Tab"&&((k=s.value)==null||k.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const a=(I=e.value)==null?void 0:I.$el;if(!a)return;(o.key==="Home"||o.key==="End")&&a.scrollTo({top:o.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await d();const v=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const r=a.getBoundingClientRect().top;for(const f of v)if(f.getBoundingClientRect().top>=r){f.focus();break}}else{const r=a.getBoundingClientRect().bottom;for(const f of[...v].reverse())if(f.getBoundingClientRect().bottom<=r){f.focus();break}}}return{onScrollPassive:u,onKeydown:m}}const st=j({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:De,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...$e({itemChildren:!1})},"Select"),it=j({...st(),...Oe(Be({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Le({transition:{component:_e}})},"VSelect"),yt=se()({name:"VSelect",props:it(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,s){let{slots:l}=s;const{t:i}=Ke(),u=_(),d=_(),m=_(),o=de(e,"menu"),a=D({get:()=>o.value,set:t=>{var n;o.value&&!t&&((n=d.value)!=null&&n.ΨopenChildren.size)||(o.value=t)}}),{items:v,transformIn:k,transformOut:I}=We(e),r=de(e,"modelValue",[],t=>k(t===null?[null]:re(t)),t=>{const n=I(t);return e.multiple?n:n[0]??null}),f=D(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),x=Ee(e),b=D(()=>r.value.map(t=>t.value)),y=L(!1),p=D(()=>a.value?e.closeText:e.openText);let w="",C;const M=D(()=>e.hideSelected?v.value.filter(t=>!r.value.some(n=>e.valueComparator(n,t))):v.value),J=D(()=>e.hideNoData&&!M.value.length||x.isReadonly.value||x.isDisabled.value),ee=D(()=>{var t;return{...e.menuProps,activatorProps:{...((t=e.menuProps)==null?void 0:t.activatorProps)||{},"aria-haspopup":"listbox"}}}),F=_(),Q=rt(F,u);function U(t){e.openOnClear&&(a.value=!0)}function K(){J.value||(a.value=!a.value)}function q(t){he(t)&&X(t)}function X(t){var R,c;if(!t.key||x.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(a.value=!0),["Escape","Tab"].includes(t.key)&&(a.value=!1),t.key==="Home"?(R=F.value)==null||R.focus("first"):t.key==="End"&&((c=F.value)==null||c.focus("last"));const n=1e3;if(e.multiple||!he(t))return;const h=performance.now();h-C>n&&(w=""),w+=t.key.toLowerCase(),C=h;const V=v.value.find(S=>S.title.toLowerCase().startsWith(w));if(V!==void 0){r.value=[V];const S=M.value.indexOf(V);ue&&window.requestAnimationFrame(()=>{var P;S>=0&&((P=m.value)==null||P.scrollToIndex(S))})}}function N(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!t.props.disabled)if(e.multiple){const h=r.value.findIndex(R=>e.valueComparator(R.value,t.value)),V=n??!~h;if(~h){const R=V?[...r.value,t]:[...r.value];R.splice(h,1),r.value=R}else V&&(r.value=[...r.value,t])}else{const h=n!==!1;r.value=h?[t]:[],we(()=>{a.value=!1})}}function G(t){var n;(n=F.value)!=null&&n.$el.contains(t.relatedTarget)||(a.value=!1)}function O(){var t;e.eager&&((t=m.value)==null||t.calculateVisibleItems())}function te(){var t;y.value&&((t=u.value)==null||t.focus())}function Y(t){y.value=!0}function le(t){if(t==null)r.value=[];else if(ge(u.value,":autofill")||ge(u.value,":-webkit-autofill")){const n=v.value.find(h=>h.title===t);n&&N(n)}else u.value&&(u.value.value="")}return H(a,()=>{if(!e.hideSelected&&a.value&&r.value.length){const t=M.value.findIndex(n=>r.value.some(h=>e.valueComparator(h.value,n.value)));ue&&window.requestAnimationFrame(()=>{var n;t>=0&&((n=m.value)==null||n.scrollToIndex(t))})}}),H(()=>e.items,(t,n)=>{a.value||y.value&&!n.length&&t.length&&(a.value=!0)}),ie(()=>{const t=!!(e.chips||l.chip),n=!!(!e.hideNoData||M.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),h=r.value.length>0,V=ve.filterProps(e),R=h||!y.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return g(ve,E({ref:u},V,{modelValue:r.value.map(c=>c.props.value).join(", "),"onUpdate:modelValue":le,focused:y.value,"onUpdate:focused":c=>y.value=c,validationValue:r.externalValue,counterValue:f.value,dirty:h,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":r.value.length,"v-select--selection-slot":!!l.selection},e.class],style:e.style,inputmode:"none",placeholder:R,"onClick:clear":U,"onMousedown:control":K,onBlur:G,onKeydown:X,"aria-label":i(p.value),title:i(p.value)}),{...l,default:()=>g(W,null,[g(He,E({ref:d,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,activator:"parent",contentClass:"v-select__content",disabled:J.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:O,onAfterLeave:te},ee.value),{default:()=>[n&&g(Je,E({ref:F,selected:b.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:c=>c.preventDefault(),onKeydown:q,onFocusin:Y,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},Q,e.listProps),{default:()=>{var c,S,P;return[(c=l["prepend-item"])==null?void 0:c.call(l),!M.value.length&&!e.hideNoData&&(((S=l["no-data"])==null?void 0:S.call(l))??g(ye,{title:i(e.noDataText)},null)),g(ut,{ref:m,renderless:!0,items:M.value},{default:B=>{var fe;let{item:A,index:z,itemRef:T}=B;const ce=E(A.props,{ref:T,key:z,onClick:()=>N(A,null)});return((fe=l.item)==null?void 0:fe.call(l,{item:A,index:z,props:ce}))??g(ye,E(ce,{role:"option"}),{prepend:Se=>{let{isSelected:ke}=Se;return g(W,null,[e.multiple&&!e.hideSelected?g(Qe,{key:A.value,modelValue:ke,ripple:!1,tabindex:"-1"},null):void 0,A.props.prependAvatar&&g(Xe,{image:A.props.prependAvatar},null),A.props.prependIcon&&g(me,{icon:A.props.prependIcon},null)])}})}}),(P=l["append-item"])==null?void 0:P.call(l)]}})]}),r.value.map((c,S)=>{function P(T){T.stopPropagation(),T.preventDefault(),N(c,!1)}const B={"onClick:close":P,onKeydown(T){T.key!=="Enter"&&T.key!==" "||(T.preventDefault(),T.stopPropagation(),P(T))},onMousedown(T){T.preventDefault(),T.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},A=t?!!l.chip:!!l.selection,z=A?Ue(t?l.chip({item:c,index:S,props:B}):l.selection({item:c,index:S})):void 0;if(!(A&&!z))return g("div",{key:c.value,class:"v-select__selection"},[t?l.chip?g(Ne,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:c.title}}},{default:()=>[z]}):g(Ge,E({key:"chip",closable:e.closableChips,size:"small",text:c.title,disabled:c.props.disabled},B),null):z??g("span",{class:"v-select__selection-text"},[c.title,e.multiple&&S<r.value.length-1&&g("span",{class:"v-select__selection-comma"},[ze(",")])])])})]),"append-inner":function(){var B;for(var c=arguments.length,S=new Array(c),P=0;P<c;P++)S[P]=arguments[P];return g(W,null,[(B=l["append-inner"])==null?void 0:B.call(l,...S),e.menuIcon?g(me,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),je({isFocused:y,menu:a,select:N},u)}}),ct=(e,s,l)=>e==null||s==null?-1:e.toString().toLocaleLowerCase().indexOf(s.toString().toLocaleLowerCase()),pt=j({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function ft(e,s,l){var o;const i=[],u=(l==null?void 0:l.default)??ct,d=l!=null&&l.filterKeys?re(l.filterKeys):!1,m=Object.keys((l==null?void 0:l.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return i;e:for(let a=0;a<e.length;a++){const[v,k=v]=re(e[a]),I={},r={};let f=-1;if((s||m>0)&&!(l!=null&&l.noFilter)){if(typeof v=="object"){const y=d||Object.keys(k);for(const p of y){const w=qe(k,p),C=(o=l==null?void 0:l.customKeyFilter)==null?void 0:o[p];if(f=C?C(w,s,v):u(w,s,v),f!==-1&&f!==!1)C?I[p]=f:r[p]=f;else if((l==null?void 0:l.filterMode)==="every")continue e}}else f=u(v,s,v),f!==-1&&f!==!1&&(r.title=f);const x=Object.keys(r).length,b=Object.keys(I).length;if(!x&&!b||(l==null?void 0:l.filterMode)==="union"&&b!==m&&!x||(l==null?void 0:l.filterMode)==="intersection"&&(b!==m||!x))continue}i.push({index:a,matches:{...r,...I}})}return i}function bt(e,s,l,i){const u=_([]),d=_(new Map),m=D(()=>i!=null&&i.transform?$(s).map(a=>[a,i.transform(a)]):$(s));oe(()=>{const a=typeof l=="function"?l():$(l),v=typeof a!="string"&&typeof a!="number"?"":String(a),k=ft(m.value,v,{customKeyFilter:{...e.customKeyFilter,...$(i==null?void 0:i.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),I=$(s),r=[],f=new Map;k.forEach(x=>{let{index:b,matches:y}=x;const p=I[b];r.push(p),f.set(p.value,y)}),u.value=r,d.value=f});function o(a){return d.value.get(a.value)}return{filteredItems:u,filteredMatches:d,getMatches:o}}export{yt as V,lt as a,at as b,Ze as c,st as d,rt as e,ut as f,pt as m,bt as u};
