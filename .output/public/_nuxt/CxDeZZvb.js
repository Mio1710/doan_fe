import{f as x}from"./D-3jeY6D.js";import{_ as g}from"./GQ_XKnWl.js";import{A as B}from"./Qrp8M8cl.js";import{_ as M}from"./Bx-QdujG.js";import{a as b,O as U,i as $,d as N,Z as Q,r as k,S as R,t as p,v,x as l,z as o,A as i,M as t,L as y,V as w,B as C,y as r,R as z,Q as A,T as _}from"./C5o3XgM8.js";import{V as G}from"./DSXWEGHE.js";import{V as S}from"./ClqTeD8V.js";import"./DwcVR9qy.js";import"./DZ_F3gcz.js";import"./Cuta4Q8k.js";import"./CkMhjDa3.js";import"./DKVj5txg.js";import"./C9IY8SFK.js";function L(V,n){const{$api:c}=b(),d=U(["my-recommend-topic",V],()=>c.topic.getMyRecommendTopic(),{refetchOnWindowFocus:!1,...n}),u=$(()=>{var m;return((m=d.data.value)==null?void 0:m.data)||null});return{...d,items:u}}const j={class:"d-flex flex-column flex-grow-1 h-full"},F={class:"text-center"},O={key:1,class:"d-flex flex-column gap-4"},D={class:"d-flex"},E={key:0},ie=N({__name:"recommend-topic",setup(V){const n=Q({ten:"",description:"",requirement:"",knowledge:"",teacher_id:null}),{$api:c,$toast:d}=b(),u=k(!1),m=R(),h=()=>{if(u.value=!0,f.value){c.topic.updateRecommendTopic(s.value.id,n).then(()=>{d.success("Cập nhật đề tài thành công"),m.invalidateQueries("my-recommend-topic"),f.value=!1}).finally(()=>{u.value=!1});return}c.topic.createRecommendTopic(n).then(()=>{d.success("Đăng ký đề tài thành công"),m.invalidateQueries("my-recommend-topic")})},f=k(!1),T=()=>{f.value=!0,n.ten=s.value.ten,n.description=s.value.description,n.teacher_id=s.value.teacher_id,n.knowledge=s.value.knowledge},{items:s,isLoading:I,refetch:W}=L();return(Z,e)=>(p(),v("div",j,[e[11]||(e[11]=l("div",{class:"text-lg font-bold text-uppercase"},"Đề xuất đề tài đồ án",-1)),o(G,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:i(()=>[!t(s)||t(f)?(p(),y(B,{key:0},{default:i(({handleSubmit:q})=>[o(g,{modelValue:t(n).ten,"onUpdate:modelValue":e[0]||(e[0]=a=>t(n).ten=a),label:"Tên đề tài",name:"Tên đề tài",rules:"required"},null,8,["modelValue"]),o(g,{modelValue:t(n).description,"onUpdate:modelValue":e[1]||(e[1]=a=>t(n).description=a),label:"Mô tả",name:"Mô tả",rules:"required",type:"textarea"},null,8,["modelValue"]),o(M,{modelValue:t(n).teacher_id,"onUpdate:modelValue":e[2]||(e[2]=a=>t(n).teacher_id=a),class:"mb-4",label:"Giảng viên",name:"Giảng viên",rules:"required"},null,8,["modelValue"]),o(g,{modelValue:t(n).knowledge,"onUpdate:modelValue":e[3]||(e[3]=a=>t(n).knowledge=a),label:"Công nghệ sử dụng",name:"Công nghệ sử dụng",rules:"required"},null,8,["modelValue"]),l("div",F,[o(w,{color:"success",loading:t(u),size:"small",variant:"elevated",onClick:a=>q(h)},{default:i(()=>e[4]||(e[4]=[C(" Đăng ký ")])),_:2},1032,["loading","onClick"])])]),_:1})):(p(),v("div",O,[l("div",D,[o(S,{color:t(x).statusColor(t(s).status),size:"small",variant:"flat"},{default:i(()=>[l("span",null,r(t(x).statusType(t(s).status)),1)]),_:1},8,["color"]),o(z),t(s).status!="approved"?(p(),y(w,{key:0,color:"success",icon:"",size:"x-small",variant:"text",onClick:T},{default:i(()=>[o(A,null,{default:i(()=>e[5]||(e[5]=[C("mdi-pencil")])),_:1})]),_:1})):_("",!0)]),l("div",null,[e[6]||(e[6]=l("span",{class:"font-weight-bold mr-2"},"Tên đề tài đề xuất:",-1)),l("span",null,r(t(s).ten),1)]),l("div",null,[e[7]||(e[7]=l("span",{class:"font-weight-bold mr-2"},"Mô tả:",-1)),l("span",null,r(t(s).description),1)]),l("div",null,[e[8]||(e[8]=l("span",{class:"font-weight-bold mr-2"},"Giảng viên:",-1)),l("span",null,r(t(s).teacher_id),1)]),l("div",null,[e[9]||(e[9]=l("span",{class:"font-weight-bold mr-2"},"Công nghệ sử dụng:",-1)),l("span",null,r(t(s).knowledge),1)]),t(s).status=="rejected"?(p(),v("div",E,[e[10]||(e[10]=l("span",{class:"font-weight-bold mr-2"},"Lý do từ chối đề tài:",-1)),l("span",null,r(t(s).reject_reason),1)])):_("",!0)]))]),_:1})]))}});export{ie as default};
