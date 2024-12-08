import{d as z,Z as G,a as P,S as W,t as p,L as v,A as n,z as s,M as t,r as f,i as M,v as Q,x as r,R as A,V as B,P as K,Q as V,B as g,y as h,T as C}from"./C5o3XgM8.js";import{f as U}from"./D-3jeY6D.js";import{_ as Y}from"./BQ-m9GLv.js";import{_ as c}from"./GQ_XKnWl.js";import{_ as j}from"./Bx-QdujG.js";import{_ as I}from"./BxXXG8xE.js";import{u as L}from"./BuxoomuI.js";import{V as E}from"./DSXWEGHE.js";import{V as _}from"./Z0Rfd2ua.js";import{V as F}from"./BGMHy2BI.js";import{V as H}from"./BucRdiyx.js";import{V as b}from"./ClqTeD8V.js";import"./Qrp8M8cl.js";import"./DKVj5txg.js";import"./DwcVR9qy.js";import"./DZ_F3gcz.js";import"./Cuta4Q8k.js";import"./CkMhjDa3.js";import"./C9IY8SFK.js";const O=z({__name:"CreateTopicBySuperTeacher",emits:["cancel","success"],setup(D,{emit:y}){const a=G({ten:"",description:"",requirement:"",knowledge:"",teacher_id:null,numberStudent:4}),{$api:u,$toast:k}=P(),d=y,T=W(),w=()=>{u.superTeacher.createTopic(a).then(()=>{k.success("Tạo đề tài thành công"),T.invalidateQueries("topic"),d("success"),d("cancel")})};return(x,i)=>(p(),v(Y,{"can-cancel":"","cancel-text":"Hủy",title:"Tạo đề tài",onCancel:i[6]||(i[6]=o=>d("cancel")),onSubmit:w},{default:n(()=>[s(j,{modelValue:t(a).teacher_id,"onUpdate:modelValue":i[0]||(i[0]=o=>t(a).teacher_id=o),class:"mb-4",label:"Giảng viên hướng dẫn",name:"Giảng viên hướng dẫn",rules:"required"},null,8,["modelValue"]),s(c,{modelValue:t(a).ten,"onUpdate:modelValue":i[1]||(i[1]=o=>t(a).ten=o),label:"Tên đề tài",name:"Tên đề tài",rules:"required"},null,8,["modelValue"]),s(c,{modelValue:t(a).description,"onUpdate:modelValue":i[2]||(i[2]=o=>t(a).description=o),label:"Mô tả",name:"Mô tả",type:"textarea"},null,8,["modelValue"]),s(c,{modelValue:t(a).requirement,"onUpdate:modelValue":i[3]||(i[3]=o=>t(a).requirement=o),label:"Yêu cầu",name:"Yêu cầu"},null,8,["modelValue"]),s(c,{modelValue:t(a).knowledge,"onUpdate:modelValue":i[4]||(i[4]=o=>t(a).knowledge=o),label:"Kiến thức kỹ năng",name:"Kiến thức kỹ năng"},null,8,["modelValue"]),s(c,{modelValue:t(a).numberStudent,"onUpdate:modelValue":i[5]||(i[5]=o=>t(a).numberStudent=o),label:"Số lượng sinh viên",name:"Số lượng sinh viên",rules:"required"},null,8,["modelValue"])]),_:1}))}}),R={class:"d-flex flex-column flex-grow-1 h-full"},Z={class:"d-flex"},J={class:"d-flex"},X={class:"mt-2 h-[calc(100%_-_30px)] overflow-y-hidden"},ee={class:"ma-2 text-center"},Te=z({__name:"topic",setup(D){f(!1),f("");const y=[{title:"STT",align:"center",sortable:!1,key:"index",width:50},{title:"Giảng viên",key:"gv",width:"10%",minWidth:100},{title:"Tên đề tài",key:"ten",width:"20%",minWidth:250},{title:"Mô tả",key:"description",width:"35%",minWidth:350},{title:"Yêu cầu",key:"requirement",width:"20%",minWidth:200},{title:"Kiến thức kỹ năng",key:"knowledge",width:"15%",minWidth:150},{title:"Trạng thái",key:"status",width:"10%",minWidth:100},{title:"Số lượng",key:"numberStudent",align:"center"},{title:"",key:"action",width:20}],a=f({page:1,rowsPerPage:100,sortBy:"-created_at",sortType:"asc"}),u=f({status:[]}),k=M(()=>({...a.value,filters:{viewAll:!0,...u.value}})),{$api:d,$toast:T}=P(),w=W(),x=($,l)=>{try{d.topic.checkTopic($.id,l).then(()=>{w.invalidateQueries("topic"),T.success("Đã cập nhật thành công")})}catch(e){console.log(e)}},{items:i,totalItems:o,isLoading:te,refetch:N,isFetching:S}=L(k);return($,l)=>(p(),Q("div",R,[l[10]||(l[10]=r("div",{class:"text-lg font-bold text-uppercase"},"Duyệt đề tài",-1)),s(E,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:n(()=>[r("div",Z,[r("div",J,[s(_,{modelValue:t(u).status,"onUpdate:modelValue":l[0]||(l[0]=e=>t(u).status=e),class:"mr-4",color:"warning",density:"compact","hide-details":"",label:" Chờ duyệt",value:"pending"},null,8,["modelValue"]),s(_,{modelValue:t(u).status,"onUpdate:modelValue":l[1]||(l[1]=e=>t(u).status=e),class:"mr-4",color:"success",density:"compact","hide-details":"",label:" Đã duyệt",value:"approved"},null,8,["modelValue"]),s(_,{modelValue:t(u).status,"onUpdate:modelValue":l[2]||(l[2]=e=>t(u).status=e),class:"mr-4",color:"error",density:"compact","hide-details":"",label:" Từ chối",value:"rejected"},null,8,["modelValue"])]),s(A),s(F,{"min-width":"400",width:"40%"},{activator:n(({props:e})=>[s(B,K({color:"success",size:"small"},e),{default:n(()=>[s(V,null,{default:n(()=>l[3]||(l[3]=[g("mdi-plus")])),_:1}),l[4]||(l[4]=r("span",null,"Thêm mới đề tài",-1))]),_:2},1040)]),default:n(({isActive:e})=>[s(O,{onCancel:m=>e.value=!1},null,8,["onCancel"])]),_:1}),s(B,{class:"ml-2",color:"success",loading:t(S),size:"small",onClick:t(N)},{default:n(()=>[s(V,null,{default:n(()=>l[5]||(l[5]=[g("mdi-refresh")])),_:1})]),_:1},8,["loading","onClick"])]),r("div",X,[s(H,{class:"h-full","fixed-header":"",headers:y,"hide-default-footer":"",items:t(i),loading:t(S),"items-per-page":t(a).rowsPerPage},{"item.index":n(({index:e})=>[r("span",null,h(e+1),1)]),"item.gv":n(({item:e})=>{var m,q;return[r("span",null,h((m=e.teacher)==null?void 0:m.hodem)+" "+h((q=e.teacher)==null?void 0:q.ten),1)]}),"item.status":n(({item:e})=>[r("div",ee,[e.status=="pending"?(p(),v(b,{key:0,class:"mb-2",color:"success",size:"small",variant:"outlined",onClick:m=>x(e,"approved")},{default:n(()=>[s(V,null,{default:n(()=>l[6]||(l[6]=[g("mdi-check")])),_:1}),l[7]||(l[7]=r("span",null,"Duyệt",-1))]),_:2},1032,["onClick"])):C("",!0),e.status=="pending"?(p(),v(b,{key:1,color:"error",size:"small",variant:"outlined",onClick:m=>x(e,"rejected")},{default:n(()=>[s(V,null,{default:n(()=>l[8]||(l[8]=[g("mdi-close")])),_:1}),l[9]||(l[9]=r("span",null,"Từ chối",-1))]),_:2},1032,["onClick"])):C("",!0),e.status!="pending"?(p(),v(b,{key:2,color:t(U).statusColor(e.status),size:"small",variant:"flat"},{default:n(()=>[r("span",null,h(t(U).statusType(e.status)),1)]),_:2},1032,["color"])):C("",!0)])]),"item.action":n(({item:e})=>[s(I,{topic:e},null,8,["topic"])]),_:1},8,["items","loading","items-per-page"])])]),_:1})]))}});export{Te as default};
