import{_ as $}from"./BQ-m9GLv.js";import{_ as g}from"./GQ_XKnWl.js";import{d as v,J as H,t as h,v as C,z as a,K as N,r as b,a as V,L as k,A as l,M as c,N as S,O as q,i as B,x as f,V as y,P as w,Q as O,B as L,R as P,y as W}from"./C5o3XgM8.js";import{V as z}from"./DSXWEGHE.js";import{V as T}from"./BGMHy2BI.js";import{V as D}from"./BucRdiyx.js";import"./Qrp8M8cl.js";import"./DKVj5txg.js";import"./Cuta4Q8k.js";import"./CkMhjDa3.js";import"./C9IY8SFK.js";import"./ClqTeD8V.js";const U=v({__name:"LOForm",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(r){const s=H(r,"modelValue");return(p,e)=>(h(),C(N,null,[a(g,{modelValue:s.value.main_criteria,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value.main_criteria=o),label:"Tiêu chí đánh giá",name:"Tiêu chí đánh giá",rules:"required",type:"textarea"},null,8,["modelValue"]),a(g,{modelValue:s.value.sub_criteria,"onUpdate:modelValue":e[1]||(e[1]=o=>s.value.sub_criteria=o),label:"Tiêu chí phụ",name:"Tiêu chí phụ",type:"textarea"},null,8,["modelValue"]),a(g,{modelValue:s.value.cof,"onUpdate:modelValue":e[2]||(e[2]=o=>s.value.cof=o),label:"Hệ số",name:"Hệ số",placeholder:"0.3...",type:"number"},null,8,["modelValue"])],64))}}),M=v({__name:"CreateLO",props:{lo:{type:Object,default:()=>({main_criteria:"",sub_criteria:"",cof:null})}},emits:["cancel","success"],setup(r,{emit:s}){const e=b({...r.lo}),{$api:o,$toast:m}=V(),i=s,d=()=>{e.value.cof=parseFloat(e.value.cof),o.lo.createLO(e.value).then(()=>{m.success("Thêm LO thành công"),i("success"),i("cancel")})};return(x,n)=>(h(),k($,{"can-cancel":"","cancel-text":"Hủy",title:"Thêm LO",onCancel:n[1]||(n[1]=t=>i("cancel")),onSubmit:d},{default:l(()=>[a(U,{modelValue:c(e),"onUpdate:modelValue":n[0]||(n[0]=t=>S(e)?e.value=t:null)},null,8,["modelValue"])]),_:1}))}});function R(r,s){const{$api:p}=V(),e=q(["list-lo",r],()=>p.lo.getLOs(),{refetchOnWindowFocus:!1,...s}),o=B(()=>{var m;return((m=e.data.value)==null?void 0:m.data)||[]});return{...e,items:o}}const j=v({__name:"UpdateLO",props:{lo:{type:Object,required:!0}},emits:["cancel","success"],setup(r,{emit:s}){const e=b({...r.lo}),{$api:o,$toast:m}=V(),i=s,d=()=>{e.value.cof=parseFloat(e.value.cof),o.lo.updateLO(e.value.id,e.value).then(()=>{m.success("Chỉnh sửa LO thành công"),i("success"),i("cancel")})};return(x,n)=>(h(),k($,{"can-cancel":"","cancel-text":"Hủy",title:"Chỉnh sửa LO",onCancel:n[1]||(n[1]=t=>i("cancel")),onSubmit:d},{default:l(()=>[a(U,{modelValue:c(e),"onUpdate:modelValue":n[0]||(n[0]=t=>S(e)?e.value=t:null)},null,8,["modelValue"])]),_:1}))}}),A={class:"d-flex flex-column flex-grow-1 h-full"},I={class:"d-flex items-center"},Q={class:"mt-2 h-[calc(100%_-_45px)] overflow-y-hidden"},ne=v({__name:"lo",setup(r){const s=[{title:"STT",align:"start",sortable:!1,key:"index",width:50},{title:"Tiêu chí đánh giá",key:"main_criteria",width:"50%",minWidth:350},{title:"Tiêu chí phụ",key:"sub_criteria",width:"35%",minWidth:250},{title:"Hệ số",key:"cof",width:"10%",minWidth:200},{title:"",key:"action",width:30}],p=b({page:1,rowsPerPage:100,sortBy:"-created_at",sortType:"asc"}),e=B(()=>({...p.value}));V();const{items:o,totalItems:m,isLoading:i,refetch:d,isRefetching:x}=R(e);return(n,t)=>{const F=M;return h(),C("div",A,[t[5]||(t[5]=f("div",{class:"text-lg font-bold text-uppercase"},"Tạo LO mới",-1)),a(z,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:l(()=>[f("div",I,[a(T,{"min-width":"500",width:"50%"},{activator:l(({props:u})=>[a(y,w({color:"success",size:"small"},u),{default:l(()=>[a(O,null,{default:l(()=>t[1]||(t[1]=[L("mdi-plus")])),_:1}),t[2]||(t[2]=f("span",null,"Thêm",-1))]),_:2},1040)]),default:l(({isActive:u})=>[a(F,{onCancel:_=>u.value=!1,onSuccess:c(d)},null,8,["onCancel","onSuccess"])]),_:1}),a(P),a(y,{icon:"",size:"x-small",variant:"text",onClick:t[0]||(t[0]=u=>c(d)())},{default:l(()=>[a(O,null,{default:l(()=>t[3]||(t[3]=[L("mdi-refresh")])),_:1})]),_:1})]),f("div",Q,[a(D,{class:"h-full","fixed-header":"",headers:s,"hide-default-footer":"",items:c(o),"items-per-page":100,loading:c(i)||c(x)},{"item.index":l(({index:u})=>[f("span",null,W(u+1),1)]),"item.action":l(({item:u})=>[a(T,{"min-width":"500",width:"50%"},{activator:l(({props:_})=>[a(y,w({ref:"btn",rounded:"",variant:"text"},_),{default:l(()=>[a(O,{color:"success"},{default:l(()=>t[4]||(t[4]=[L("mdi-pencil")])),_:1})]),_:2},1040)]),default:l(({isActive:_})=>[a(j,{lo:u,onCancel:E=>_.value=!1,onSuccess:c(d)},null,8,["lo","onCancel","onSuccess"])]),_:2},1024)]),_:1},8,["items","loading"])])]),_:1})])}}});export{ne as default};
