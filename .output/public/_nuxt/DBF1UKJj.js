import{_ as W}from"./DsdWC2cy.js";import{f as k}from"./D-3jeY6D.js";import{d as B,r as v,a as q,S as M,t as h,L as A,A as i,z as l,M as n,i as N,aM as z,v as D,x as r,V as T,P as C,Q as b,B as $,R as P,y as m,T as Q}from"./C5o3XgM8.js";import{_ as K}from"./BQ-m9GLv.js";import{_ as p}from"./GQ_XKnWl.js";import{_ as Y}from"./BxXXG8xE.js";import{u as G}from"./BuxoomuI.js";import{V as H}from"./DSXWEGHE.js";import{V as S}from"./BGMHy2BI.js";import{V as I}from"./Z0Rfd2ua.js";import{V as L}from"./7EzTfG3n.js";import{V as O}from"./ClqTeD8V.js";import"./Qrp8M8cl.js";import"./DKVj5txg.js";import"./DZ_F3gcz.js";import"./C9IY8SFK.js";import"./BucRdiyx.js";import"./Cuta4Q8k.js";import"./CkMhjDa3.js";const j=B({__name:"UpdateTopic",props:{topic:{type:Object,required:!0}},emits:["cancel"],setup(g,{emit:c}){const a=v({...g.topic}),{$api:f,$toast:V}=q(),d=c,y=M(),_=()=>{a.value.status!=="approved"&&(a.value.status="pending"),f.topic.updateTopic(a.value.id,a.value).then(()=>{V.success("Tạo đề tài thành công"),y.invalidateQueries("topic"),d("cancel")})};return(U,o)=>(h(),A(K,{"can-cancel":"","cancel-text":"Hủy",title:"Cập nhật đề tài",onCancel:o[4]||(o[4]=e=>d("cancel")),onSubmit:_},{default:i(()=>[l(p,{modelValue:n(a).ten,"onUpdate:modelValue":o[0]||(o[0]=e=>n(a).ten=e),label:"Tên đề tài",name:"Tên đề tài",rules:"required"},null,8,["modelValue"]),l(p,{modelValue:n(a).description,"onUpdate:modelValue":o[1]||(o[1]=e=>n(a).description=e),label:"Mô tả",name:"Mô tả",type:"textarea"},null,8,["modelValue"]),l(p,{modelValue:n(a).requirement,"onUpdate:modelValue":o[2]||(o[2]=e=>n(a).requirement=e),label:"Yêu cầu",name:"Yêu cầu"},null,8,["modelValue"]),l(p,{modelValue:n(a).knowledge,"onUpdate:modelValue":o[3]||(o[3]=e=>n(a).knowledge=e),label:"Kiến thức kỹ năng",name:"Kiến thức kỹ năng"},null,8,["modelValue"])]),_:1}))}}),E={class:"d-flex flex-column flex-grow-1 h-full"},R={class:"d-flex items-center"},X={class:"mt-2 h-[calc(100%_-_45px)] overflow-y-hidden"},ve=B({__name:"index",setup(g){const c=[{title:"STT",align:"center",sortable:!1,key:"index",width:50},{title:"Tên đề tài",key:"ten",width:"20%",minWidth:250},{title:"Mô tả",key:"description",width:"30%",minWidth:350},{title:"Yêu cầu",key:"requirement",width:"15%",minWidth:150},{title:"Kiến thức kỹ năng",key:"knowledge",width:"15%",minWidth:150},{title:"GVHD",key:"gv",width:"10%",minWidth:100},{title:"Số lượng",key:"numberStudent",align:"center"},{title:"Trạng thái",key:"status",width:"10%",minWidth:100,align:"center"},{title:"",key:"action",width:30}],w=v({page:1,rowsPerPage:25,sortBy:"-created_at",sortType:"asc"}),a=v({viewAll:!1}),f=N(()=>({...w.value,filters:a.value}));q();const{data:V}=z(),{items:d,totalItems:y,isLoading:_,refetch:U}=G(f);return(o,e)=>(h(),D("div",E,[e[5]||(e[5]=r("div",{class:"text-lg font-bold text-uppercase"},"Quản lý đề tài",-1)),l(H,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:i(()=>[r("div",R,[l(S,{"min-width":"400",width:"40%"},{activator:i(({props:t})=>[l(T,C({color:"success",size:"small"},t),{default:i(()=>[l(b,null,{default:i(()=>e[1]||(e[1]=[$("mdi-plus")])),_:1}),e[2]||(e[2]=r("span",null,"Thêm mới đề tài",-1))]),_:2},1040)]),default:i(({isActive:t})=>[l(W,{onCancel:s=>t.value=!1},null,8,["onCancel"])]),_:1}),l(P),l(I,{modelValue:n(a).viewAll,"onUpdate:modelValue":e[0]||(e[0]=t=>n(a).viewAll=t),density:"compact","hide-details":"",label:"Xem tất cả"},null,8,["modelValue"])]),r("div",X,[l(L,{class:"h-full","fixed-header":"",headers:c,items:n(d)},{"item.index":i(({index:t})=>[r("span",null,m(t+1),1)]),"item.gv":i(({item:t})=>{var s,u;return[r("span",null,m((s=t.teacher)==null?void 0:s.hodem)+" "+m((u=t.teacher)==null?void 0:u.ten),1)]}),"item.numberStudent":i(({item:t})=>e[3]||(e[3]=[])),"item.status":i(({item:t})=>[l(O,{color:n(k).statusColor(t.status),size:"small",variant:"flat"},{default:i(()=>[r("span",null,m(n(k).statusType(t.status)),1)]),_:2},1032,["color"])]),"item.action":i(({item:t})=>[l(S,{"min-width":"400",width:"40%"},{activator:i(({props:s})=>{var u,x;return[((u=n(V))==null?void 0:u.id)==((x=t==null?void 0:t.teacher)==null?void 0:x.id)?(h(),A(T,C({key:0},s,{color:"success",icon:"",size:"small",variant:"text"}),{default:i(()=>[l(b,null,{default:i(()=>e[4]||(e[4]=[$("mdi-pencil")])),_:1})]),_:2},1040)):Q("",!0)]}),default:i(({isActive:s})=>[l(j,{topic:t,onCancel:u=>s.value=!1},null,8,["topic","onCancel"])]),_:2},1024),l(Y,{topic:t},null,8,["topic"])]),_:1},8,["items"])])]),_:1})]))}});export{ve as default};
