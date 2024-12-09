import{a3 as y,aa as b,aA as me,a5 as S,z as a,a0 as _,ab as U,aQ as ge,aR as p,aS as ee,i as A,aT as $,aU as fe,aV as ye,ax as be,ay as Se,aW as J,aX as ke,ah as z,r as Ce,F as M,aY as Ve,aZ as he,au as Ie,e as _e,aj as H,ak as ae,K as q,P as te,at as Pe,ar as Ae,as as L,a_ as B,a$ as ne,av as K,b0 as Te,ac as le,b1 as ie,ad as se,b2 as re,b3 as ce,aw as ue,b4 as xe,Q,aJ as D,b5 as de,b6 as ze,b7 as Be,b8 as Re,b9 as Ne,ba as we,bb as Le,bc as De,aD as Ue,bd as je,be as Fe,bf as We,aL as Ee}from"./RwtOmVP5.js";const Oe=y()({name:"VCardActions",props:b(),setup(e,r){let{slots:n}=r;return me({VBtn:{slim:!0,variant:"text"}}),S(()=>{var t;return a("div",{class:["v-card-actions",e.class],style:e.style},[(t=n.default)==null?void 0:t.call(n)])}),{}}}),Me=_({opacity:[Number,String],...b(),...U()},"VCardSubtitle"),He=y()({name:"VCardSubtitle",props:Me(),setup(e,r){let{slots:n}=r;return S(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},n)),{}}}),qe=ge("v-card-title");function Qe(e){return{aspectStyles:A(()=>{const r=Number(e.aspectRatio);return r?{paddingBottom:String(1/r*100)+"%"}:void 0})}}const oe=_({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...b(),...p()},"VResponsive"),Z=y()({name:"VResponsive",props:oe(),setup(e,r){let{slots:n}=r;const{aspectStyles:t}=Qe(e),{dimensionStyles:v}=ee(e);return S(()=>{var d;return a("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[v.value,e.style]},[a("div",{class:"v-responsive__sizer",style:t.value},null),(d=n.additional)==null?void 0:d.call(n),n.default&&a("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),$e=_({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...oe(),...b(),...$(),...fe()},"VImg"),ve=y()({name:"VImg",directives:{intersect:ye},props:$e(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,r){let{emit:n,slots:t}=r;const{backgroundColorClasses:v,backgroundColorStyles:d}=be(Se(e,"color")),{roundedClasses:k}=J(e),o=ke("VImg"),g=z(""),s=Ce(),i=z(e.eager?"loading":"idle"),m=z(),P=z(),u=A(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),C=A(()=>u.value.aspect||m.value/P.value||0);M(()=>e.src,()=>{T(i.value!=="idle")}),M(C,(l,c)=>{!l&&c&&s.value&&I(s.value)}),Ve(()=>T());function T(l){if(!(e.eager&&l)&&!(he&&!l&&!e.eager)){if(i.value="loading",u.value.lazySrc){const c=new Image;c.src=u.value.lazySrc,I(c,null)}u.value.src&&Ie(()=>{var c;n("loadstart",((c=s.value)==null?void 0:c.currentSrc)||u.value.src),setTimeout(()=>{var f;if(!o.isUnmounted)if((f=s.value)!=null&&f.complete){if(s.value.naturalWidth||R(),i.value==="error")return;C.value||I(s.value,null),i.value==="loading"&&V()}else C.value||I(s.value),h()})})}}function V(){var l;o.isUnmounted||(h(),I(s.value),i.value="loaded",n("load",((l=s.value)==null?void 0:l.currentSrc)||u.value.src))}function R(){var l;o.isUnmounted||(i.value="error",n("error",((l=s.value)==null?void 0:l.currentSrc)||u.value.src))}function h(){const l=s.value;l&&(g.value=l.currentSrc||l.src)}let x=-1;_e(()=>{clearTimeout(x)});function I(l){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{if(clearTimeout(x),o.isUnmounted)return;const{naturalHeight:X,naturalWidth:Y}=l;X||Y?(m.value=Y,P.value=X):!l.complete&&i.value==="loading"&&c!=null?x=window.setTimeout(f,c):(l.currentSrc.endsWith(".svg")||l.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,P.value=1)};f()}const N=A(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),j=()=>{var f;if(!u.value.src||i.value==="idle")return null;const l=a("img",{class:["v-img__img",N.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:V,onError:R},null),c=(f=t.sources)==null?void 0:f.call(t);return a(L,{transition:e.transition,appear:!0},{default:()=>[H(c?a("picture",{class:"v-img__picture"},[c,l]):l,[[Ae,i.value==="loaded"]])]})},F=()=>a(L,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",N.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),W=()=>t.placeholder?a(L,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&a("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,E=()=>t.error?a(L,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&a("div",{class:"v-img__error"},[t.error()])]}):null,O=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,w=z(!1);{const l=M(C,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{w.value=!0})}),l())})}return S(()=>{const l=Z.filterProps(e);return H(a(Z,te({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!w.value},v.value,k.value,e.class],style:[{width:Pe(e.width==="auto"?m.value:e.width)},d.value,e.style]},l,{aspectRatio:C.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>a(q,null,[a(j,null,null),a(F,null,null),a(O,null,null),a(W,null,null),a(E,null,null)]),default:t.default}),[[ae("intersect"),{handler:T,options:e.options},null,{once:!0}]])}),{currentSrc:g,image:s,state:i,naturalWidth:m,naturalHeight:P}}}),Je=_({start:Boolean,end:Boolean,icon:B,image:String,text:String,...ne(),...b(),...K(),...$(),...Te(),...U(),...le(),...ie({variant:"flat"})},"VAvatar"),G=y()({name:"VAvatar",props:Je(),setup(e,r){let{slots:n}=r;const{themeClasses:t}=se(e),{borderClasses:v}=re(e),{colorClasses:d,colorStyles:k,variantClasses:o}=ce(e),{densityClasses:g}=ue(e),{roundedClasses:s}=J(e),{sizeClasses:i,sizeStyles:m}=xe(e);return S(()=>a(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,v.value,d.value,g.value,s.value,i.value,o.value,e.class],style:[k.value,m.value,e.style]},{default:()=>[n.default?a(D,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?a(ve,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?a(Q,{key:"icon",icon:e.icon},null):e.text,de(!1,"v-avatar")]})),{}}}),Ke=_({appendAvatar:String,appendIcon:B,prependAvatar:String,prependIcon:B,subtitle:[String,Number],title:[String,Number],...b(),...K()},"VCardItem"),Xe=y()({name:"VCardItem",props:Ke(),setup(e,r){let{slots:n}=r;return S(()=>{var s;const t=!!(e.prependAvatar||e.prependIcon),v=!!(t||n.prepend),d=!!(e.appendAvatar||e.appendIcon),k=!!(d||n.append),o=!!(e.title!=null||n.title),g=!!(e.subtitle!=null||n.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[v&&a("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?a(D,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):a(q,null,[e.prependAvatar&&a(G,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(Q,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[o&&a(qe,{key:"title"},{default:()=>{var i;return[((i=n.title)==null?void 0:i.call(n))??e.title]}}),g&&a(He,{key:"subtitle"},{default:()=>{var i;return[((i=n.subtitle)==null?void 0:i.call(n))??e.subtitle]}}),(s=n.default)==null?void 0:s.call(n)]),k&&a("div",{key:"append",class:"v-card-item__append"},[n.append?a(D,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):a(q,null,[e.appendIcon&&a(Q,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(G,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Ye=_({opacity:[Number,String],...b(),...U()},"VCardText"),Ze=y()({name:"VCardText",props:Ye(),setup(e,r){let{slots:n}=r;return S(()=>a(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},n)),{}}}),Ge=_({appendAvatar:String,appendIcon:B,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ne(),...b(),...K(),...p(),...ze(),...Be(),...Re(),...Ne(),...$(),...we(),...U(),...le(),...ie({variant:"elevated"})},"VCard"),ea=y()({name:"VCard",directives:{Ripple:Le},props:Ge(),setup(e,r){let{attrs:n,slots:t}=r;const{themeClasses:v}=se(e),{borderClasses:d}=re(e),{colorClasses:k,colorStyles:o,variantClasses:g}=ce(e),{densityClasses:s}=ue(e),{dimensionStyles:i}=ee(e),{elevationClasses:m}=De(e),{loaderClasses:P}=Ue(e),{locationStyles:u}=je(e),{positionClasses:C}=Fe(e),{roundedClasses:T}=J(e),V=We(e,n),R=A(()=>e.link!==!1&&V.isLink.value),h=A(()=>!e.disabled&&e.link!==!1&&(e.link||V.isClickable.value));return S(()=>{const x=R.value?"a":e.tag,I=!!(t.title||e.title!=null),N=!!(t.subtitle||e.subtitle!=null),j=I||N,F=!!(t.append||e.appendAvatar||e.appendIcon),W=!!(t.prepend||e.prependAvatar||e.prependIcon),E=!!(t.image||e.image),O=j||W||F,w=!!(t.text||e.text!=null);return H(a(x,te({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":h.value},v.value,d.value,k.value,s.value,m.value,P.value,C.value,T.value,g.value,e.class],style:[o.value,i.value,u.value,e.style],onClick:h.value&&V.navigate,tabindex:e.disabled?-1:void 0},V.linkProps),{default:()=>{var l;return[E&&a("div",{key:"image",class:"v-card__image"},[t.image?a(D,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(ve,{key:"image-img",cover:!0,src:e.image},null)]),a(Ee,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),O&&a(Xe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),w&&a(Ze,{key:"text"},{default:()=>{var c;return[((c=t.text)==null?void 0:c.call(t))??e.text]}}),(l=t.default)==null?void 0:l.call(t),t.actions&&a(Oe,null,{default:t.actions}),de(h.value,"v-card")]}}),[[ae("ripple"),h.value&&e.ripple]])}),{}}});export{ea as V,Ze as a,ve as b,G as c,qe as d,Oe as e};
