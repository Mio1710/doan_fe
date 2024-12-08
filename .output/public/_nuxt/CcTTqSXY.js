import{a as k,O as W,i as j,d as b,Z as z,S as q,t as x,L as Q,A as t,z as s,M as r,r as L,v as w,x as d,R as $,V as N,Q as O,B as y,y as u,P as S}from"./C5o3XgM8.js";import{f as B}from"./D-3jeY6D.js";import{_ as P}from"./DsdWC2cy.js";import{_ as D}from"./BQ-m9GLv.js";import{_ as A}from"./GQ_XKnWl.js";import{V as M}from"./DSXWEGHE.js";import{V as E}from"./7EzTfG3n.js";import{V as R}from"./BGMHy2BI.js";import{V as T}from"./ClqTeD8V.js";import"./Qrp8M8cl.js";import"./DKVj5txg.js";import"./BucRdiyx.js";import"./Cuta4Q8k.js";import"./CkMhjDa3.js";import"./C9IY8SFK.js";function F(v,m){const{$api:p}=k(),i=W(["student-recommend-topic",v],()=>p.teacher.getStudentRecommendTopic(),{refetchOnWindowFocus:!1,...m}),f=j(()=>{var c;return((c=i.data.value)==null?void 0:c.data)||[]});return{...i,items:f}}const G=b({__name:"RejectRecommendTopic",props:{item:{type:Object,required:!0}},emits:["cancel","success"],setup(v,{emit:m}){const p=v,i=z({status:"rejected",reject_reason:""}),{$api:f,$toast:c}=k(),h=m,V=q(),C=()=>{f.teacher.updateRecommendTopic(p.item.id,i).then(()=>{c.success("Đã từ chối đề tài"),V.invalidateQueries("student-recommend-topic"),h("success"),h("cancel")})};return(g,l)=>(x(),Q(D,{"can-cancel":"","cancel-text":"Hủy",title:"Từ chối đề tài",onCancel:l[1]||(l[1]=_=>h("cancel")),onSubmit:C},{default:t(()=>[s(A,{modelValue:r(i).reject_reason,"onUpdate:modelValue":l[0]||(l[0]=_=>r(i).reject_reason=_),label:"Lý do từ chối đề tài",name:"Lý do từ chối đề tài",rules:"required",type:"textarea"},null,8,["modelValue"])]),_:1}))}}),H={class:"d-flex flex-column flex-grow-1 h-full"},I={class:"d-flex items-center"},K={class:"mt-2 h-[calc(100%_-_45px)] overflow-y-hidden"},U={key:0,class:"d-flex"},Z={key:1},me=b({__name:"recommend-topic",setup(v){const m=[{title:"STT",align:"center",sortable:!1,key:"index",width:50},{title:"Tên đề tài",key:"ten",minWidth:250},{title:"Mô tả",key:"description",width:"30%",minWidth:350},{title:"Kiến thức kỹ năng",key:"knowledge",width:"15%",minWidth:150},{title:"Sinh viên",key:"sv",width:"10%",minWidth:100},{title:"Trạng thái",key:"status",width:"10%",minWidth:180,align:"center"}],p=L({page:1,rowsPerPage:25,sortBy:"-created_at",sortType:"asc"}),i=j(()=>({...p.value})),f=q(),{$api:c,$toast:h}=k(),{items:V,isLoading:C,refetch:g}=F(i),l=_=>{c.teacher.updateRecommendTopic(_.id,{status:"approved"}).then(()=>{h.success("Đã chấp nhận đề tài"),f.invalidateQueries("student-recommend-topic")})};return(_,a)=>(x(),w("div",H,[a[4]||(a[4]=d("div",{class:"text-lg font-bold text-uppercase"},"Đề tài sinh viên đăng ký",-1)),s(M,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:t(()=>[d("div",I,[s($),s(N,{icon:"",size:"x-small",variant:"text",onClick:a[0]||(a[0]=e=>r(g)())},{default:t(()=>[s(O,null,{default:t(()=>a[1]||(a[1]=[y("mdi-refresh")])),_:1})]),_:1})]),d("div",K,[s(E,{class:"h-full","fixed-header":"",headers:m,items:r(V)},{"item.index":t(({index:e})=>[d("span",null,u(e+1),1)]),"item.gv":t(({item:e})=>{var n,o;return[d("span",null,u((n=e.teacher)==null?void 0:n.hodem)+" "+u((o=e.teacher)==null?void 0:o.ten),1)]}),"item.sv":t(({item:e})=>{var n,o;return[d("span",null,u((n=e.student)==null?void 0:n.hodem)+" "+u((o=e.student)==null?void 0:o.ten),1)]}),"item.status":t(({item:e})=>[e.status=="pending"?(x(),w("div",U,[s(R,{"min-width":"500",width:"50%"},{activator:t(({props:n})=>[s(T,S({color:"info",size:"small",variant:"flat"},n),{default:t(()=>a[2]||(a[2]=[y("Chờ duyệt")])),_:2},1040)]),default:t(({isActive:n})=>[s(P,{item:e,onCancel:o=>n.value=!1,onSuccess:o=>l(e)},null,8,["item","onCancel","onSuccess"])]),_:2},1024),s($),s(R,{"min-width":"500",width:"50%"},{activator:t(({props:n})=>[s(T,S({color:"error",size:"small",variant:"flat"},n),{default:t(()=>a[3]||(a[3]=[y("Từ chối")])),_:2},1040)]),default:t(({isActive:n})=>[s(G,{item:e,onCancel:o=>n.value=!1,onSuccess:r(g)},null,8,["item","onCancel","onSuccess"])]),_:2},1024)])):(x(),w("div",Z,[s(T,{color:r(B).statusColor(e.status),size:"small",variant:"flat"},{default:t(()=>[y(u(r(B).statusType(e.status)),1)]),_:2},1032,["color"])]))]),_:1},8,["items"])])]),_:1})]))}});export{me as default};
