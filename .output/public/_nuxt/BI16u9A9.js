import{_ as $}from"./D4y4r6Wz.js";import{_ as g}from"./D64AmvwT.js";import{d as v,J as F,t as h,v as C,z as l,K as H,r as b,a as V,L as k,A as a,M as c,N as S,O as N,i as B,x as f,V as y,P as w,Q as O,B as L,R as P,y as W}from"./WipKja2Z.js";import{V as z}from"./DlZ0sKDs.js";import{V as T}from"./mQ0dPInB.js";import{V as D}from"./BZFDvjCY.js";import"./BqEb8_I1.js";import"./Ba1IWl4U.js";import"./Dk9QRMfY.js";import"./DyX3VB_7.js";import"./5xYdB-GE.js";import"./DcgrLRwZ.js";const q=v({__name:"LOForm",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(r){const s=F(r,"modelValue");return(p,e)=>(h(),C(H,null,[l(g,{modelValue:s.value.main_criteria,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value.main_criteria=o),label:"Tiêu chí đánh giá",name:"Tiêu chí đánh giá",rules:"required",type:"textarea"},null,8,["modelValue"]),l(g,{modelValue:s.value.sub_criteria,"onUpdate:modelValue":e[1]||(e[1]=o=>s.value.sub_criteria=o),label:"Tiêu chí phụ",name:"Tiêu chí phụ",rules:"required",type:"textarea"},null,8,["modelValue"]),l(g,{modelValue:s.value.cof,"onUpdate:modelValue":e[2]||(e[2]=o=>s.value.cof=o),label:"Hệ số",name:"Hệ số",placeholder:"0.3...",rules:"required|max:10",type:"number"},null,8,["modelValue"])],64))}}),M=v({__name:"CreateLO",props:{lo:{type:Object,default:()=>({main_criteria:"",sub_criteria:"",cof:null})}},emits:["cancel","success"],setup(r,{emit:s}){const e=b({...r.lo}),{$api:o,$toast:m}=V(),i=s,d=()=>{e.value.cof=parseFloat(e.value.cof),o.lo.createLO(e.value).then(()=>{m.success("Thêm LO thành công"),i("success"),i("cancel")})};return(x,n)=>(h(),k($,{"can-cancel":"","cancel-text":"Hủy",title:"Thêm LO",onCancel:n[1]||(n[1]=t=>i("cancel")),onSubmit:d},{default:a(()=>[l(q,{modelValue:c(e),"onUpdate:modelValue":n[0]||(n[0]=t=>S(e)?e.value=t:null)},null,8,["modelValue"])]),_:1}))}});function R(r,s){const{$api:p}=V(),e=N(["list-lo",r],()=>p.lo.getLOs(),{refetchOnWindowFocus:!1,...s}),o=B(()=>{var m;return((m=e.data.value)==null?void 0:m.data)||[]});return{...e,items:o}}const j=v({__name:"UpdateLO",props:{lo:{type:Object,required:!0}},emits:["cancel","success"],setup(r,{emit:s}){const e=b({...r.lo}),{$api:o,$toast:m}=V(),i=s,d=()=>{e.value.cof=parseFloat(e.value.cof),o.lo.updateLO(e.value.id,e.value).then(()=>{m.success("Chỉnh sửa LO thành công"),i("success"),i("cancel")})};return(x,n)=>(h(),k($,{"can-cancel":"","cancel-text":"Hủy",title:"Chỉnh sửa LO",onCancel:n[1]||(n[1]=t=>i("cancel")),onSubmit:d},{default:a(()=>[l(q,{modelValue:c(e),"onUpdate:modelValue":n[0]||(n[0]=t=>S(e)?e.value=t:null)},null,8,["modelValue"])]),_:1}))}}),A={class:"d-flex flex-column flex-grow-1 h-full"},I={class:"d-flex items-center"},Q={class:"mt-2 h-[calc(100%_-_45px)] overflow-y-hidden"},ne=v({__name:"lo",setup(r){const s=[{title:"STT",align:"start",sortable:!1,key:"index",width:50},{title:"Tiêu chí đánh giá",key:"main_criteria",width:"50%",minWidth:350},{title:"Tiêu chí phụ",key:"sub_criteria",width:"35%",minWidth:250},{title:"Hệ số",key:"cof",width:"10%",minWidth:200},{title:"",key:"action",width:30}],p=b({page:1,rowsPerPage:100,sortBy:"-created_at",sortType:"asc"}),e=B(()=>({...p.value}));V();const{items:o,totalItems:m,isLoading:i,refetch:d,isRefetching:x}=R(e);return(n,t)=>{const U=M;return h(),C("div",A,[t[5]||(t[5]=f("div",{class:"text-lg font-bold text-uppercase"},"Tạo LO mới",-1)),l(z,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:a(()=>[f("div",I,[l(T,{"min-width":"500",width:"50%"},{activator:a(({props:u})=>[l(y,w({color:"success",size:"small"},u),{default:a(()=>[l(O,null,{default:a(()=>t[1]||(t[1]=[L("mdi-plus")])),_:1}),t[2]||(t[2]=f("span",null,"Thêm",-1))]),_:2},1040)]),default:a(({isActive:u})=>[l(U,{onCancel:_=>u.value=!1,onSuccess:c(d)},null,8,["onCancel","onSuccess"])]),_:1}),l(P),l(y,{icon:"",size:"x-small",variant:"text",onClick:t[0]||(t[0]=u=>c(d)())},{default:a(()=>[l(O,null,{default:a(()=>t[3]||(t[3]=[L("mdi-refresh")])),_:1})]),_:1})]),f("div",Q,[l(D,{class:"h-full","fixed-header":"",headers:s,"hide-default-footer":"",items:c(o),"items-per-page":100,loading:c(i)||c(x)},{"item.index":a(({index:u})=>[f("span",null,W(u+1),1)]),"item.action":a(({item:u})=>[l(T,{"min-width":"500",width:"50%"},{activator:a(({props:_})=>[l(y,w({ref:"btn",rounded:"",variant:"text"},_),{default:a(()=>[l(O,{color:"success"},{default:a(()=>t[4]||(t[4]=[L("mdi-pencil")])),_:1})]),_:2},1040)]),default:a(({isActive:_})=>[l(j,{lo:u,onCancel:E=>_.value=!1,onSuccess:c(d)},null,8,["lo","onCancel","onSuccess"])]),_:2},1024)]),_:1},8,["items","loading"])])]),_:1})])}}});export{ne as default};
