import{al as U,ah as _,ai as H,c0 as C,bv as ye,r as V,a0 as x,am as Z,i as v,e as me,aX as Xe,ay as k,aG as Je,o as Ye,c1 as Ze,c2 as et,a_ as j,aa as E,ab as R,a3 as F,a5 as $,z as c,aJ as ee,as as tt,c3 as at,aj as ge,ar as nt,aQ as lt,bz as D,a$ as Se,av as be,aR as he,b6 as pe,aT as ke,ba as it,ac as Ce,b1 as we,bb as st,bf as rt,F as ut,ad as Ie,b2 as Ae,b3 as ot,aw as Pe,aS as Ve,bc as Le,aW as Oe,c4 as ct,ak as dt,b5 as vt,K as oe,Q as ce,P as te,a4 as ft,bu as yt,bB as O,a1 as Be,ax as mt,aA as gt,c5 as St}from"./BVcfHsMq.js";import{c as de}from"./By37Y22m.js";import{V as bt}from"./imMtzg40.js";const ae=Symbol.for("vuetify:list");function Me(){const e=U(ae,{hasPrepend:_(!1),updateHasPrepend:()=>null}),l={hasPrepend:_(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return H(ae,l),e}function je(){return U(ae,null)}const le=e=>{const l={activate:t=>{let{id:a,value:i,activated:n}=t;return a=C(a),e&&!i&&n.size===1&&n.has(a)||(i?n.add(a):n.delete(a)),n},in:(t,a,i)=>{let n=new Set;if(t!=null)for(const s of ye(t))n=l.activate({id:s,value:!0,activated:new Set(n),children:a,parents:i});return n},out:t=>Array.from(t)};return l},xe=e=>{const l=le(e);return{activate:a=>{let{activated:i,id:n,...s}=a;n=C(n);const u=i.has(n)?new Set([n]):new Set;return l.activate({...s,id:n,activated:u})},in:(a,i,n)=>{let s=new Set;if(a!=null){const u=ye(a);u.length&&(s=l.in(u.slice(0,1),i,n))}return s},out:(a,i,n)=>l.out(a,i,n)}},ht=e=>{const l=le(e);return{activate:a=>{let{id:i,activated:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.activate({id:i,activated:n,children:s,...u})},in:l.in,out:l.out}},pt=e=>{const l=xe(e);return{activate:a=>{let{id:i,activated:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.activate({id:i,activated:n,children:s,...u})},in:l.in,out:l.out}},kt={open:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(t){const n=new Set;n.add(l);let s=i.get(l);for(;s!=null;)n.add(s),s=i.get(s);return n}else return a.delete(l),a},select:()=>null},Te={open:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(t){let n=i.get(l);for(a.add(l);n!=null&&n!==l;)a.add(n),n=i.get(n);return a}else a.delete(l);return a},select:()=>null},Ct={open:Te.open,select:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(!t)return a;const n=[];let s=i.get(l);for(;s!=null;)n.push(s),s=i.get(s);return new Set(n)}},ie=e=>{const l={select:t=>{let{id:a,value:i,selected:n}=t;if(a=C(a),e&&!i){const s=Array.from(n.entries()).reduce((u,b)=>{let[f,m]=b;return m==="on"&&u.push(f),u},[]);if(s.length===1&&s[0]===a)return n}return n.set(a,i?"on":"off"),n},in:(t,a,i)=>{let n=new Map;for(const s of t||[])n=l.select({id:s,value:!0,selected:new Map(n),children:a,parents:i});return n},out:t=>{const a=[];for(const[i,n]of t.entries())n==="on"&&a.push(i);return a}};return l},_e=e=>{const l=ie(e);return{select:a=>{let{selected:i,id:n,...s}=a;n=C(n);const u=i.has(n)?new Map([[n,i.get(n)]]):new Map;return l.select({...s,id:n,selected:u})},in:(a,i,n)=>{let s=new Map;return a!=null&&a.length&&(s=l.in(a.slice(0,1),i,n)),s},out:(a,i,n)=>l.out(a,i,n)}},wt=e=>{const l=ie(e);return{select:a=>{let{id:i,selected:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.select({id:i,selected:n,children:s,...u})},in:l.in,out:l.out}},It=e=>{const l=_e(e);return{select:a=>{let{id:i,selected:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.select({id:i,selected:n,children:s,...u})},in:l.in,out:l.out}},At=e=>{const l={select:t=>{let{id:a,value:i,selected:n,children:s,parents:u}=t;a=C(a);const b=new Map(n),f=[a];for(;f.length;){const y=f.shift();n.set(C(y),i?"on":"off"),s.has(y)&&f.push(...s.get(y))}let m=C(u.get(a));for(;m;){const y=s.get(m),h=y.every(r=>n.get(C(r))==="on"),S=y.every(r=>!n.has(C(r))||n.get(C(r))==="off");n.set(m,h?"on":S?"off":"indeterminate"),m=C(u.get(m))}return e&&!i&&Array.from(n.entries()).reduce((h,S)=>{let[r,o]=S;return o==="on"&&h.push(r),h},[]).length===0?b:n},in:(t,a,i)=>{let n=new Map;for(const s of t||[])n=l.select({id:s,value:!0,selected:new Map(n),children:a,parents:i});return n},out:(t,a)=>{const i=[];for(const[n,s]of t.entries())s==="on"&&!a.has(n)&&i.push(n);return i}};return l},N=Symbol.for("vuetify:nested"),Fe={id:_(),root:{register:()=>null,unregister:()=>null,parents:V(new Map),children:V(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:V(!1),selectable:V(!1),opened:V(new Set),activated:V(new Set),selected:V(new Map),selectedValues:V([]),getPath:()=>[]}},Pt=x({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Vt=e=>{let l=!1;const t=V(new Map),a=V(new Map),i=Z(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return ht(e.mandatory);case"single-leaf":return pt(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":default:return xe(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return It(e.mandatory);case"leaf":return wt(e.mandatory);case"independent":return ie(e.mandatory);case"single-independent":return _e(e.mandatory);case"classic":default:return At(e.mandatory)}}),u=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Ct;case"single":return kt;case"multiple":default:return Te}}),b=Z(e,"activated",e.activated,r=>n.value.in(r,t.value,a.value),r=>n.value.out(r,t.value,a.value)),f=Z(e,"selected",e.selected,r=>s.value.in(r,t.value,a.value),r=>s.value.out(r,t.value,a.value));me(()=>{l=!0});function m(r){const o=[];let d=r;for(;d!=null;)o.unshift(d),d=a.value.get(d);return o}const y=Xe("nested"),h=new Set,S={id:_(),root:{opened:i,activatable:k(e,"activatable"),selectable:k(e,"selectable"),activated:b,selected:f,selectedValues:v(()=>{const r=[];for(const[o,d]of f.value.entries())d==="on"&&r.push(o);return r}),register:(r,o,d)=>{if(h.has(r)){m(r).map(String).join(" -> "),m(o).concat(r).map(String).join(" -> ");return}else h.add(r);o&&r!==o&&a.value.set(r,o),d&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{if(l)return;h.delete(r),t.value.delete(r);const o=a.value.get(r);if(o){const d=t.value.get(o)??[];t.value.set(o,d.filter(p=>p!==r))}a.value.delete(r)},open:(r,o,d)=>{y.emit("click:open",{id:r,value:o,path:m(r),event:d});const p=u.value.open({id:r,value:o,opened:new Set(i.value),children:t.value,parents:a.value,event:d});p&&(i.value=p)},openOnSelect:(r,o,d)=>{const p=u.value.select({id:r,value:o,selected:new Map(f.value),opened:new Set(i.value),children:t.value,parents:a.value,event:d});p&&(i.value=p)},select:(r,o,d)=>{y.emit("click:select",{id:r,value:o,path:m(r),event:d});const p=s.value.select({id:r,value:o,selected:new Map(f.value),children:t.value,parents:a.value,event:d});p&&(f.value=p),S.root.openOnSelect(r,o,d)},activate:(r,o,d)=>{if(!e.activatable)return S.root.select(r,!0,d);y.emit("click:activate",{id:r,value:o,path:m(r),event:d});const p=n.value.activate({id:r,value:o,activated:new Set(b.value),children:t.value,parents:a.value,event:d});p&&(b.value=p)},children:t,parents:a,getPath:m}};return H(N,S),S.root},Ge=(e,l)=>{const t=U(N,Fe),a=Symbol(Je()),i=v(()=>e.value!==void 0?e.value:a),n={...t,id:i,open:(s,u)=>t.root.open(i.value,s,u),openOnSelect:(s,u)=>t.root.openOnSelect(i.value,s,u),isOpen:v(()=>t.root.opened.value.has(i.value)),parent:v(()=>t.root.parents.value.get(i.value)),activate:(s,u)=>t.root.activate(i.value,s,u),isActivated:v(()=>t.root.activated.value.has(C(i.value))),select:(s,u)=>t.root.select(i.value,s,u),isSelected:v(()=>t.root.selected.value.get(C(i.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(i.value,t.id.value,l),me(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),l&&H(N,n),n},Lt=()=>{const e=U(N,Fe);H(N,{...e,isGroupActivator:!0})};function Ot(){const e=_(!1);return Ye(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ze(e)}}const Bt=et({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return Lt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Mt=x({activeColor:String,baseColor:String,color:String,collapseIcon:{type:j,default:"$collapse"},expandIcon:{type:j,default:"$expand"},prependIcon:j,appendIcon:j,fluid:Boolean,subgroup:Boolean,title:String,value:null,...E(),...R()},"VListGroup"),ve=F()({name:"VListGroup",props:Mt(),setup(e,l){let{slots:t}=l;const{isOpen:a,open:i,id:n}=Ge(k(e,"value"),!0),s=v(()=>`v-list-group--id-${String(n.value)}`),u=je(),{isBooted:b}=Ot();function f(S){S.stopPropagation(),i(!a.value,S)}const m=v(()=>({onClick:f,class:"v-list-group__header",id:s.value})),y=v(()=>a.value?e.collapseIcon:e.expandIcon),h=v(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&y.value,appendIcon:e.appendIcon||!e.subgroup&&y.value,title:e.title,value:e.value}}));return $(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&c(ee,{defaults:h.value},{default:()=>[c(Bt,null,{default:()=>[t.activator({props:m.value,isOpen:a.value})]})]}),c(tt,{transition:{component:at},disabled:!b.value},{default:()=>{var S;return[ge(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(S=t.default)==null?void 0:S.call(t)]),[[nt,a.value]])]}})]})),{isOpen:a}}}),jt=x({opacity:[Number,String],...E(),...R()},"VListItemSubtitle"),xt=F()({name:"VListItemSubtitle",props:jt(),setup(e,l){let{slots:t}=l;return $(()=>c(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Tt=lt("v-list-item-title"),_t=x({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:j,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:D(),onClickOnce:D(),...Se(),...E(),...be(),...he(),...pe(),...ke(),...it(),...R(),...Ce(),...we({variant:"text"})},"VListItem"),fe=F()({name:"VListItem",directives:{Ripple:st},props:_t(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:a,emit:i}=l;const n=rt(e,t),s=v(()=>e.value===void 0?n.href.value:e.value),{activate:u,isActivated:b,select:f,isOpen:m,isSelected:y,isIndeterminate:h,isGroupActivator:S,root:r,parent:o,openOnSelect:d,id:p}=Ge(s,!1),I=je(),L=v(()=>{var g;return e.active!==!1&&(e.active||((g=n.isActive)==null?void 0:g.value)||(r.activatable.value?b.value:y.value))}),G=v(()=>e.link!==!1&&n.isLink.value),B=v(()=>!!I&&(r.selectable.value||r.activatable.value||e.value!=null)),A=v(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||B.value)),z=v(()=>e.rounded||e.nav),q=v(()=>e.color??e.activeColor),Q=v(()=>({color:L.value?q.value??e.baseColor:e.baseColor,variant:e.variant}));ut(()=>{var g;return(g=n.isActive)==null?void 0:g.value},g=>{g&&o.value!=null&&r.open(o.value,!0),g&&d(g)},{immediate:!0});const{themeClasses:W}=Ie(e),{borderClasses:X}=Ae(e),{colorClasses:M,colorStyles:w,variantClasses:T}=ot(Q),{densityClasses:Re}=Pe(e),{dimensionStyles:$e}=Ve(e),{elevationClasses:Ke}=Le(e),{roundedClasses:Ue}=Oe(z),He=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),J=v(()=>({isActive:L.value,select:f,isOpen:m.value,isSelected:y.value,isIndeterminate:h.value}));function ze(g){var K;i("click",g),A.value&&((K=n.navigate)==null||K.call(n,g),!S&&(r.activatable.value?u(!b.value,g):(r.selectable.value||e.value!=null)&&f(!y.value,g)))}function qe(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),g.target.dispatchEvent(new MouseEvent("click",g)))}return $(()=>{const g=G.value?"a":e.tag,K=a.title||e.title!=null,Qe=a.subtitle||e.subtitle!=null,se=!!(e.appendAvatar||e.appendIcon),We=!!(se||a.append),re=!!(e.prependAvatar||e.prependIcon),Y=!!(re||a.prepend);return I==null||I.updateHasPrepend(Y),e.activeColor&&ct("active-color",["color","base-color"]),ge(c(g,te({class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Y&&(I==null?void 0:I.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&L.value},W.value,X.value,M.value,Re.value,Ke.value,He.value,Ue.value,T.value,e.class],style:[w.value,$e.value,e.style],tabindex:A.value?I?-2:0:void 0,"aria-selected":B.value?r.activatable.value?b.value:r.selectable.value?y.value:L.value:void 0,onClick:ze,onKeydown:A.value&&!G.value&&qe},n.linkProps),{default:()=>{var ue;return[vt(A.value||L.value,"v-list-item"),Y&&c("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?c(ee,{key:"prepend-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=a.prepend)==null?void 0:P.call(a,J.value)]}}):c(oe,null,[e.prependAvatar&&c(de,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(ce,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[K&&c(Tt,{key:"title"},{default:()=>{var P;return[((P=a.title)==null?void 0:P.call(a,{title:e.title}))??e.title]}}),Qe&&c(xt,{key:"subtitle"},{default:()=>{var P;return[((P=a.subtitle)==null?void 0:P.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(ue=a.default)==null?void 0:ue.call(a,J.value)]),We&&c("div",{key:"append",class:"v-list-item__append"},[a.append?c(ee,{key:"append-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=a.append)==null?void 0:P.call(a,J.value)]}}):c(oe,null,[e.appendIcon&&c(ce,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(de,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[dt("ripple"),A.value&&e.ripple]])}),{activate:u,isActivated:b,isGroupActivator:S,isSelected:y,list:I,select:f,root:r,id:p}}}),Ft=x({color:String,inset:Boolean,sticky:Boolean,title:String,...E(),...R()},"VListSubheader"),Gt=F()({name:"VListSubheader",props:Ft(),setup(e,l){let{slots:t}=l;const{textColorClasses:a,textColorStyles:i}=ft(k(e,"color"));return $(()=>{const n=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:i},e.style]},{default:()=>{var s;return[n&&c("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),Dt=x({items:Array,returnObject:Boolean},"VListChildren"),De=F()({name:"VListChildren",props:Dt(),setup(e,l){let{slots:t}=l;return Me(),()=>{var a,i;return((a=t.default)==null?void 0:a.call(t))??((i=e.items)==null?void 0:i.map(n=>{var h,S;let{children:s,props:u,type:b,raw:f}=n;if(b==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:u}))??c(bt,u,null);if(b==="subheader")return((S=t.subheader)==null?void 0:S.call(t,{props:u}))??c(Gt,u,null);const m={subtitle:t.subtitle?r=>{var o;return(o=t.subtitle)==null?void 0:o.call(t,{...r,item:f})}:void 0,prepend:t.prepend?r=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...r,item:f})}:void 0,append:t.append?r=>{var o;return(o=t.append)==null?void 0:o.call(t,{...r,item:f})}:void 0,title:t.title?r=>{var o;return(o=t.title)==null?void 0:o.call(t,{...r,item:f})}:void 0},y=ve.filterProps(u);return s?c(ve,te({value:u==null?void 0:u.value},y),{activator:r=>{let{props:o}=r;const d={...u,...o,value:e.returnObject?f:u.value};return t.header?t.header({props:d}):c(fe,d,m)},default:()=>c(De,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):c(fe,te(u,{value:e.returnObject?f:u.value}),m)}))}}}),Nt=x({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:yt}},"list-items");function ne(e,l){const t=O(l,e.itemTitle,l),a=O(l,e.itemValue,t),i=O(l,e.itemChildren),n=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?Be(l,["children"]):l:void 0:O(l,e.itemProps),s={title:t,value:a,...n};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(i)?Ne(e,i):void 0,raw:l}}function Ne(e,l){const t=[];for(const a of l)t.push(ne(e,a));return t}function qt(e){const l=v(()=>Ne(e,e.items)),t=v(()=>l.value.some(n=>n.value===null));function a(n){return t.value||(n=n.filter(s=>s!==null)),n.map(s=>e.returnObject&&typeof s=="string"?ne(e,s):l.value.find(u=>e.valueComparator(s,u.value))||ne(e,s))}function i(n){return e.returnObject?n.map(s=>{let{raw:u}=s;return u}):n.map(s=>{let{value:u}=s;return u})}return{items:l,transformIn:a,transformOut:i}}function Et(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Rt(e,l){const t=O(l,e.itemType,"item"),a=Et(l)?l:O(l,e.itemTitle),i=O(l,e.itemValue,void 0),n=O(l,e.itemChildren),s=e.itemProps===!0?Be(l,["children"]):O(l,e.itemProps),u={title:a,value:i,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?Ee(e,n):void 0,raw:l}}function Ee(e,l){const t=[];for(const a of l)t.push(Rt(e,a));return t}function $t(e){return{items:v(()=>Ee(e,e.items))}}const Kt=x({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:j,collapseIcon:j,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":D(),"onClick:select":D(),"onUpdate:opened":D(),...Pt({selectStrategy:"single-leaf",openStrategy:"list"}),...Se(),...E(),...be(),...he(),...pe(),itemType:{type:String,default:"type"},...Nt(),...ke(),...R(),...Ce(),...we({variant:"text"})},"VList"),Qt=F()({name:"VList",props:Kt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:a}=$t(e),{themeClasses:i}=Ie(e),{backgroundColorClasses:n,backgroundColorStyles:s}=mt(k(e,"bgColor")),{borderClasses:u}=Ae(e),{densityClasses:b}=Pe(e),{dimensionStyles:f}=Ve(e),{elevationClasses:m}=Le(e),{roundedClasses:y}=Oe(e),{children:h,open:S,parents:r,select:o,getPath:d}=Vt(e),p=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=k(e,"activeColor"),L=k(e,"baseColor"),G=k(e,"color");Me(),gt({VListGroup:{activeColor:I,baseColor:L,color:G,expandIcon:k(e,"expandIcon"),collapseIcon:k(e,"collapseIcon")},VListItem:{activeClass:k(e,"activeClass"),activeColor:I,baseColor:L,color:G,density:k(e,"density"),disabled:k(e,"disabled"),lines:k(e,"lines"),nav:k(e,"nav"),slim:k(e,"slim"),variant:k(e,"variant")}});const B=_(!1),A=V();function z(w){B.value=!0}function q(w){B.value=!1}function Q(w){var T;!B.value&&!(w.relatedTarget&&((T=A.value)!=null&&T.contains(w.relatedTarget)))&&M()}function W(w){const T=w.target;if(!(!A.value||["INPUT","TEXTAREA"].includes(T.tagName))){if(w.key==="ArrowDown")M("next");else if(w.key==="ArrowUp")M("prev");else if(w.key==="Home")M("first");else if(w.key==="End")M("last");else return;w.preventDefault()}}function X(w){B.value=!0}function M(w){if(A.value)return St(A.value,w)}return $(()=>c(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},i.value,n.value,u.value,b.value,m.value,p.value,y.value,e.class],style:[s.value,f.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:z,onFocusout:q,onFocus:Q,onKeydown:W,onMousedown:X},{default:()=>[c(De,{items:a.value,returnObject:e.returnObject},t)]})),{open:S,select:o,focus:M,children:h,parents:r,getPath:d}}});export{Qt as V,qt as a,fe as b,ve as c,Tt as d,Nt as m,Ot as u};
