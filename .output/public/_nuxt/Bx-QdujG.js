import{u as ke}from"./DwcVR9qy.js";import{a as we,d as Ce,u as xe,e as Se,f as Fe}from"./Cuta4Q8k.js";import{$ as Ae,a0 as Pe,bK as Ie,aV as _e,a2 as De,ae as Me,r as D,ag as _,al as G,i as V,a3 as Re,bL as Te,F as L,a4 as Be,aQ as X,z as o,K as N,bM as Ee,P as F,Q as Y,bN as Le,aI as Ne,B as Oe,c7 as Ue,a5 as Ke,bw as $e,bO as qe,bP as Z,at as ee,aE as ze,d as Ge,U as He,J as Qe,g as Je,t as We,v as je,A as Xe,M as H}from"./C5o3XgM8.js";import{a as Ye,V as Ze,b as le}from"./CkMhjDa3.js";import{b as el}from"./C9IY8SFK.js";import{c as ll}from"./DSXWEGHE.js";import{V as al}from"./ClqTeD8V.js";function tl(e,h,a){if(h==null)return e;if(Array.isArray(h))throw new Error("Multiple matches is not implemented");return typeof h=="number"&&~h?o(N,null,[o("span",{class:"v-autocomplete__unmask"},[e.substr(0,h)]),o("span",{class:"v-autocomplete__mask"},[e.substr(h,a)]),o("span",{class:"v-autocomplete__unmask"},[e.substr(h+a)])]):e}const ul=Ae({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...we({filterKeys:["title"]}),...Ce(),...Pe(Ie({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),..._e({transition:!1})},"VAutocomplete"),nl=De()({name:"VAutocomplete",props:ul(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,h){let{slots:a}=h;const{t:A}=Me(),m=D(),y=_(!1),b=_(!0),P=_(!1),M=D(),w=D(),C=G(e,"menu"),r=V({get:()=>C.value,set:l=>{var t;C.value&&!l&&((t=M.value)!=null&&t.ΨopenChildren.size)||(C.value=l)}}),s=_(-1),O=V(()=>{var l;return(l=m.value)==null?void 0:l.color}),Q=V(()=>r.value?e.closeText:e.openText),{items:J,transformIn:ae,transformOut:te}=Ye(e),{textColorClasses:ue,textColorStyles:ne}=Re(O),v=G(e,"search",""),n=G(e,"modelValue",[],l=>ae(l===null?[null]:$e(l)),l=>{const t=te(l);return e.multiple?t:t[0]??null}),oe=V(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:n.value.length),R=Te(e),{filteredItems:U,getMatches:se}=xe(e,J,()=>b.value?"":v.value),k=V(()=>e.hideSelected?U.value.filter(l=>!n.value.some(t=>t.value===l.value)):U.value),T=V(()=>!!(e.chips||a.chip)),I=V(()=>T.value||!!a.selection),ie=V(()=>n.value.map(l=>l.props.value)),K=V(()=>{var t;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((t=k.value[0])==null?void 0:t.title))&&k.value.length>0&&!b.value&&!P.value}),$=V(()=>e.hideNoData&&!k.value.length||R.isReadonly.value||R.isDisabled.value),q=D(),re=Se(q,m);function ce(l){e.openOnClear&&(r.value=!0),v.value=""}function ve(){$.value||(r.value=!0)}function de(l){$.value||(y.value&&(l.preventDefault(),l.stopPropagation()),r.value=!r.value)}function fe(l){var t;qe(l)&&((t=m.value)==null||t.focus())}function me(l){var u,i,p;if(R.isReadonly.value)return;const t=m.value.selectionStart,c=n.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(r.value=!0),["Escape"].includes(l.key)&&(r.value=!1),K.value&&["Enter","Tab"].includes(l.key)&&!n.value.some(d=>{let{value:f}=d;return f===k.value[0].value})&&x(k.value[0]),l.key==="ArrowDown"&&K.value&&((u=q.value)==null||u.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&I.value&&n.value.length>0&&!v.value)return x(n.value[0],!1);if(~s.value){const d=s.value;x(n.value[s.value],!1),s.value=d>=c-1?c-2:d}else l.key==="Backspace"&&!v.value&&(s.value=c-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(s.value<0&&t>0)return;const d=s.value>-1?s.value-1:c-1;n.value[d]?s.value=d:(s.value=-1,m.value.setSelectionRange((i=v.value)==null?void 0:i.length,(p=v.value)==null?void 0:p.length))}if(l.key==="ArrowRight"){if(s.value<0)return;const d=s.value+1;n.value[d]?s.value=d:(s.value=-1,m.value.setSelectionRange(0,0))}}}function pe(l){if(Z(m.value,":autofill")||Z(m.value,":-webkit-autofill")){const t=J.value.find(c=>c.title===l.target.value);t&&x(t)}}function ge(){var l;e.eager&&((l=w.value)==null||l.calculateVisibleItems())}function he(){var l;y.value&&(b.value=!0,(l=m.value)==null||l.focus())}function Ve(l){y.value=!0,setTimeout(()=>{P.value=!0})}function ye(l){P.value=!1}function be(l){(l==null||l===""&&!e.multiple&&!I.value)&&(n.value=[])}const z=_(!1);function x(l){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const c=n.value.findIndex(i=>e.valueComparator(i.value,l.value)),u=t??!~c;if(~c){const i=u?[...n.value,l]:[...n.value];i.splice(c,1),n.value=i}else u&&(n.value=[...n.value,l]);e.clearOnSelect&&(v.value="")}else{const c=t!==!1;n.value=c?[l]:[],v.value=c&&!I.value?l.title:"",ee(()=>{r.value=!1,b.value=!0})}}return L(y,(l,t)=>{var c;l!==t&&(l?(z.value=!0,v.value=e.multiple||I.value?"":String(((c=n.value.at(-1))==null?void 0:c.props.title)??""),b.value=!0,ee(()=>z.value=!1)):(!e.multiple&&v.value==null&&(n.value=[]),r.value=!1,n.value.some(u=>{let{title:i}=u;return i===v.value})||(v.value=""),s.value=-1))}),L(v,l=>{!y.value||z.value||(l&&(r.value=!0),b.value=!l)}),L(r,()=>{if(!e.hideSelected&&r.value&&n.value.length){const l=k.value.findIndex(t=>n.value.some(c=>t.value===c.value));ze&&window.requestAnimationFrame(()=>{var t;l>=0&&((t=w.value)==null||t.scrollToIndex(l))})}}),L(()=>e.items,(l,t)=>{r.value||y.value&&!t.length&&l.length&&(r.value=!0)}),Be(()=>{const l=!!(!e.hideNoData||k.value.length||a["prepend-item"]||a["append-item"]||a["no-data"]),t=n.value.length>0,c=X.filterProps(e);return o(X,F({ref:m},c,{modelValue:v.value,"onUpdate:modelValue":[u=>v.value=u,be],focused:y.value,"onUpdate:focused":u=>y.value=u,validationValue:n.externalValue,counterValue:oe.value,dirty:t,onChange:pe,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":r.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!I.value,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:R.isReadonly.value,placeholder:t?void 0:e.placeholder,"onClick:clear":ce,"onMousedown:control":ve,onKeydown:me}),{...a,default:()=>o(N,null,[o(Ee,F({ref:M,modelValue:r.value,"onUpdate:modelValue":u=>r.value=u,activator:"parent",contentClass:"v-autocomplete__content",disabled:$.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:ge,onAfterLeave:he},e.menuProps),{default:()=>[l&&o(Ze,F({ref:q,selected:ie.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onKeydown:fe,onFocusin:Ve,onFocusout:ye,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},re,e.listProps),{default:()=>{var u,i,p;return[(u=a["prepend-item"])==null?void 0:u.call(a),!k.value.length&&!e.hideNoData&&(((i=a["no-data"])==null?void 0:i.call(a))??o(le,{title:A(e.noDataText)},null)),o(Fe,{ref:w,renderless:!0,items:k.value},{default:d=>{var j;let{item:f,index:S,itemRef:g}=d;const W=F(f.props,{ref:g,key:S,active:K.value&&S===0?!0:void 0,onClick:()=>x(f,null)});return((j=a.item)==null?void 0:j.call(a,{item:f,index:S,props:W}))??o(le,F(W,{role:"option"}),{prepend:B=>{let{isSelected:E}=B;return o(N,null,[e.multiple&&!e.hideSelected?o(el,{key:f.value,modelValue:E,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&o(ll,{image:f.props.prependAvatar},null),f.props.prependIcon&&o(Y,{icon:f.props.prependIcon},null)])},title:()=>{var B,E;return b.value?f.title:tl(f.title,(B=se(f))==null?void 0:B.title,((E=v.value)==null?void 0:E.length)??0)}})}}),(p=a["append-item"])==null?void 0:p.call(a)]}})]}),n.value.map((u,i)=>{function p(g){g.stopPropagation(),g.preventDefault(),x(u,!1)}const d={"onClick:close":p,onKeydown(g){g.key!=="Enter"&&g.key!==" "||(g.preventDefault(),g.stopPropagation(),p(g))},onMousedown(g){g.preventDefault(),g.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=T.value?!!a.chip:!!a.selection,S=f?Le(T.value?a.chip({item:u,index:i,props:d}):a.selection({item:u,index:i})):void 0;if(!(f&&!S))return o("div",{key:u.value,class:["v-autocomplete__selection",i===s.value&&["v-autocomplete__selection--selected",ue.value]],style:i===s.value?ne.value:{}},[T.value?a.chip?o(Ne,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>[S]}):o(al,F({key:"chip",closable:e.closableChips,size:"small",text:u.title,disabled:u.props.disabled},d),null):S??o("span",{class:"v-autocomplete__selection-text"},[u.title,e.multiple&&i<n.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[Oe(",")])])])})]),"append-inner":function(){var d;for(var u=arguments.length,i=new Array(u),p=0;p<u;p++)i[p]=arguments[p];return o(N,null,[(d=a["append-inner"])==null?void 0:d.call(a,...i),e.menuIcon?o(Y,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:de,onClick:Ue,"aria-label":A(Q.value),title:A(Q.value),tabindex:"-1"},null):void 0])}})}),Ke({isFocused:y,isPristine:b,menu:r,search:v,filteredItems:U,select:x},m)}}),fl=Ge({__name:"TeacherAutocomplete",props:He({multiple:{type:Boolean,default:!1},rules:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const h=e,a=Qe(e,"modelValue"),A=D({page:1,rowsPerPage:100,sortBy:"-created_at",sortType:"asc"}),m=V(()=>({...A.value})),y=w=>`${w.maso} - ${w.hodem} ${w.ten}`,{items:b,isLoading:P}=ke(m),M=V(()=>h.rules.includes("required"));return(w,C)=>{const r=Je("VeeField");return We(),je("div",null,[o(r,{modelValue:a.value,"onUpdate:modelValue":C[1]||(C[1]=s=>a.value=s),name:"Giảng viên",rules:h.rules},{default:Xe(({errorMessage:s})=>[o(nl,{modelValue:a.value,"onUpdate:modelValue":C[0]||(C[0]=O=>a.value=O),chips:"","closable-chips":"","error-messages":s,"item-title":y,"item-value":"id",items:H(b),label:`Giảng viên${H(M)?"*":""}`,loading:H(P),multiple:e.multiple},null,8,["modelValue","error-messages","items","label","loading","multiple"])]),_:1},8,["modelValue","rules"])])}}});export{nl as V,fl as _};
