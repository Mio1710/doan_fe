import{$ as ae,aB as le,bR as ne,a2 as oe,aW as ue,al as re,aD as ie,i as w,r as y,ag as se,D as de,o as ce,F as h,e as fe,a4 as ve,aG as me,aH as D,bS as xe,z as o,bT as ge,P as k,K as M,ai as G,aj as Ve,bU as ye,bV as he,a5 as we,at as T,bW as pe,as as be,br as Fe,d as Ce,U as Pe,J as ke,g as Se,t as U,v as Re,A as Ie,L as E,M as q,aQ as Be}from"./C5o3XgM8.js";const Me=ae({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...le(),...ne()},"VTextarea"),Te=oe()({name:"VTextarea",directives:{Intersect:ue},inheritAttrs:!1,props:Me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:r,emit:g,slots:i}=l;const a=re(e,"modelValue"),{isFocused:f,focus:v,blur:V}=ie(e),O=w(()=>typeof e.counterValue=="function"?e.counterValue(a.value):(a.value||"").toString().length),j=w(()=>{if(r.maxlength)return r.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function W(t,u){var n,s;!e.autofocus||!t||(s=(n=u[0].target)==null?void 0:n.focus)==null||s.call(n)}const _=y(),p=y(),A=se(""),b=y(),J=w(()=>e.persistentPlaceholder||f.value||e.active);function S(){var t;b.value!==document.activeElement&&((t=b.value)==null||t.focus()),f.value||v()}function K(t){S(),g("click:control",t)}function L(t){g("mousedown:control",t)}function Q(t){t.stopPropagation(),S(),T(()=>{a.value="",pe(e["onClick:clear"],t)})}function X(t){var n;const u=t.target;if(a.value=u.value,(n=e.modelModifiers)!=null&&n.trim){const s=[u.selectionStart,u.selectionEnd];T(()=>{u.selectionStart=s[0],u.selectionEnd=s[1]})}}const m=y(),F=y(+e.rows),R=w(()=>["plain","underlined"].includes(e.variant));de(()=>{e.autoGrow||(F.value=+e.rows)});function x(){e.autoGrow&&T(()=>{if(!m.value||!p.value)return;const t=getComputedStyle(m.value),u=getComputedStyle(p.value.$el),n=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),s=m.value.scrollHeight,C=parseFloat(t.lineHeight),I=Math.max(parseFloat(e.rows)*C+n,parseFloat(u.getPropertyValue("--v-input-control-height"))),B=parseFloat(e.maxRows)*C+n||1/0,c=Fe(s??0,I,B);F.value=Math.floor((c-n)/C),A.value=be(c)})}ce(x),h(a,x),h(()=>e.rows,x),h(()=>e.maxRows,x),h(()=>e.density,x);let d;return h(m,t=>{t?(d=new ResizeObserver(x),d.observe(m.value)):d==null||d.disconnect()}),fe(()=>{d==null||d.disconnect()}),ve(()=>{const t=!!(i.counter||e.counter||e.counterValue),u=!!(t||i.details),[n,s]=me(r),{modelValue:C,...I}=D.filterProps(e),B=xe(e);return o(D,k({ref:_,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":R.value},e.class],style:e.style},n,I,{centerAffix:F.value===1&&!R.value,focused:f.value}),{...i,default:c=>{let{id:P,isDisabled:H,isDirty:z,isReadonly:Y,isValid:Z}=c;return o(ge,k({ref:p,style:{"--v-textarea-control-height":A.value},onClick:K,onMousedown:L,"onClick:clear":Q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},B,{id:P.value,active:J.value||z.value,centerAffix:F.value===1&&!R.value,dirty:z.value||e.dirty,disabled:H.value,focused:f.value,error:Z.value===!1}),{...i,default:ee=>{let{props:{class:N,...$}}=ee;return o(M,null,[e.prefix&&o("span",{class:"v-text-field__prefix"},[e.prefix]),G(o("textarea",k({ref:b,class:N,value:a.value,onInput:X,autofocus:e.autofocus,readonly:Y.value,disabled:H.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:S,onBlur:V},$,s),null),[[Ve("intersect"),{handler:W},null,{once:!0}]]),e.autoGrow&&G(o("textarea",{class:[N,"v-textarea__sizer"],id:`${$.id}-sizer`,"onUpdate:modelValue":te=>a.value=te,ref:m,readonly:!0,"aria-hidden":"true"},null),[[ye,a.value]]),e.suffix&&o("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?c=>{var P;return o(M,null,[(P=i.details)==null?void 0:P.call(i,c),t&&o(M,null,[o("span",null,null),o(he,{active:e.persistentCounter||f.value,value:O.value,max:j.value,disabled:e.disabled},i.counter)])])}:void 0})}),we({},_,p,b)}}),Ue={class:"mb-4"},Ae=Ce({__name:"AppTextField",props:Pe({name:{type:String,default:"text"},rules:{type:String,default:""},type:{type:String,required:!1},placeholder:{type:String,default:""},label:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=e,r=ke(e,"modelValue"),g=w(()=>l.rules.includes("required"));return(i,a)=>{const f=Se("VeeField");return U(),Re("div",Ue,[o(f,{modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=v=>r.value=v),name:l.name,rules:l.rules},{default:Ie(({errorMessage:v})=>[l.type==="textarea"?(U(),E(Te,{key:0,modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=V=>r.value=V),"error-messages":v,label:`${l.label}${q(g)?"*":""}`,name:l.name,placeholder:l.placeholder,type:l.type},null,8,["modelValue","error-messages","label","name","placeholder","type"])):(U(),E(Be,k({key:1},i.$attrs,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=V=>r.value=V),"error-messages":v,label:`${l.label}${q(g)?"*":""}`,name:l.name,placeholder:l.placeholder,type:l.type}),null,16,["modelValue","error-messages","label","name","placeholder","type"]))]),_:1},8,["modelValue","name","rules"])])}}});export{Ae as _};
