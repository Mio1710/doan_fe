import{a as S,O as Q,i as $,d as A,J as L,r as k,t as _,v as G,z as a,M as t,S as N,L as w,A as o,Z as M,x as p,R as j,V as D,Q as P,B as b,y,T,P as E}from"./BVcfHsMq.js";import{f as W}from"./D-3jeY6D.js";import{_ as F}from"./Dy0xatEG.js";import{_ as g}from"./Onl3lASy.js";import{P as H,_ as B}from"./DZ_F3gcz.js";import{V as J}from"./CytrHlBP.js";import{u as R}from"./ym2vfEtT.js";import{V as Z}from"./By37Y22m.js";import{V as U}from"./D5wmEg0D.js";import{V as K}from"./RiFS7K5Q.js";import{V as q}from"./DjNLs8i5.js";import{V as X}from"./B2rIPphO.js";import"./DnMU98_p.js";import"./imMtzg40.js";import"./DootYb4-.js";import"./C7lNElPM.js";import"./CeBOzpmW.js";import"./qJO9cKgh.js";function Y(r,c){return r?Array.isArray(r)?B.map(B.zip(r,c),([f,e])=>e==="desc"?`-${f}`:f):[c==="desc"?`-${r}`:r]:[]}function ee(r,c){const{$api:f}=S(),e=Q(["teacher",r],()=>{const{sortBy:u,sortType:m}=r.value,V=Y(u,m),x=new H({includes:[],appends:[],fields:{},filters:{},sorts:V,page:r.value.page,limit:r.value.rowsPerPage,payload:null,...r.value}).query();return f.admin.getTeacherss(x)},{refetchOnWindowFocus:!1,...c}),h=$(()=>{var u;return((u=e.data.value)==null?void 0:u.data)||[]}),v=$(()=>{var u,m;return((m=(u=e.data.value)==null?void 0:u.pagination)==null?void 0:m.total)||0});return{...e,items:h,totalItems:v}}const te=A({__name:"TeacherInternAutocomplete",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(r){const c=L(r,"modelValue");k("");const f=k({page:1,rowsPerPage:100,sortBy:"-created_at",sortType:"asc"}),e=$(()=>({...f.value})),h=m=>`${m.maso} - ${m.hodem} ${m.ten}`,{items:v,isLoading:u}=ee(e);return(m,V)=>(_(),G("div",null,[a(J,{modelValue:c.value,"onUpdate:modelValue":V[0]||(V[0]=x=>c.value=x),chips:"","closable-chips":"","item-title":h,"item-value":"id",items:t(v),label:"Giảng viên hướng dẫn",loading:t(u)},null,8,["modelValue","items","loading"])]))}}),le=A({__name:"CreateAssignTeacher",props:{intern:{type:Object,required:!0,teacher_id:[],company_name:"",address:"",company_phone:"",company_email:"",supervisor_name:"",supervisor_phone:"",supervisor_email:""}},emits:["cancel"],setup(r,{emit:c}){const e=k({...r.intern}),{$api:h,$toast:v}=S(),u=c,m=N(),V=()=>{h.intern.updateIntern(e.value.id,e.value).then(()=>{v.success("Phân công thành công"),m.invalidateQueries("intern"),u("cancel")})};return(x,s)=>(_(),w(F,{"can-cancel":"","cancel-text":"Hủy",title:"Lưu",onCancel:s[8]||(s[8]=i=>u("cancel")),onSubmit:V},{default:o(()=>[a(g,{modelValue:t(e).company_name,"onUpdate:modelValue":s[0]||(s[0]=i=>t(e).company_name=i),name:"Tên công ty",rules:"required"},null,8,["modelValue"]),a(g,{modelValue:t(e).company_email,"onUpdate:modelValue":s[1]||(s[1]=i=>t(e).company_email=i),name:"Emai công ty",type:"textarea"},null,8,["modelValue"]),a(g,{modelValue:t(e).company_phone,"onUpdate:modelValue":s[2]||(s[2]=i=>t(e).company_phone=i),name:"SĐT công ty"},null,8,["modelValue"]),a(g,{modelValue:t(e).address,"onUpdate:modelValue":s[3]||(s[3]=i=>t(e).address=i),name:"Địa chỉ công ty"},null,8,["modelValue"]),a(g,{modelValue:t(e).supervisor_name,"onUpdate:modelValue":s[4]||(s[4]=i=>t(e).supervisor_name=i),name:"Tên người hướng dẫn"},null,8,["modelValue"]),a(g,{modelValue:t(e).supervisor_phone,"onUpdate:modelValue":s[5]||(s[5]=i=>t(e).supervisor_phone=i),name:"Số điện thoại người hướng dẫn"},null,8,["modelValue"]),a(g,{modelValue:t(e).supervisor_email,"onUpdate:modelValue":s[6]||(s[6]=i=>t(e).supervisor_email=i),name:"Email người hướng dẫn"},null,8,["modelValue"]),a(te,{modelValue:t(e).teacher_id,"onUpdate:modelValue":s[7]||(s[7]=i=>t(e).teacher_id=i),name:"Giảng viên",rules:"required"},null,8,["modelValue"])]),_:1}))}}),ne={class:"d-flex flex-column flex-grow-1 h-full"},ae={class:"d-flex"},se={class:"d-flex"},oe={class:"mt-2 h-[calc(100%_-_30px)] overflow-y-hidden"},ie={class:"ma-2 text-center"},$e=A({__name:"company",setup(r){k(!1),k("");const c=[{title:"STT",align:"center",sortable:!1,key:"index",width:20},{title:"Tên sinh viên",key:"student",width:"20%",minWidth:150},{title:"MSSV",key:"maso",width:"10%",minWidth:100},{title:"Tên công ty",key:"company_name",width:"20%",minWidth:150},{title:"Địa chỉ",key:"address",width:"20%",minWidth:150},{title:"GVHD",key:"teacher",width:"12%",minWidth:100},{title:"Trạng thái",key:"status",width:"10%",minWidth:100,align:"center"},{title:"Phân công GVHD",key:"action",width:30}],f=k({page:1,rowsPerPage:25,sortBy:"-created_at",sortType:"asc"}),e=k({status:[]}),h=$(()=>({...f.value,filters:{viewAll:!0,...e.value}})),{$api:v,$toast:u}=S();M();const m=N(),V=(z,n)=>{try{v.intern.checkIntern(z.id,n).then(()=>{m.invalidateQueries("intern"),u.success("Đã cập nhật thành công")})}catch(l){console.log(l)}},{items:x,totalItems:s,isLoading:i,refetch:O,isFetching:I}=R(h);return(z,n)=>(_(),G("div",ne,[n[9]||(n[9]=p("div",{class:"text-lg font-bold text-uppercase"},"Duyệt đăng ký thực tập",-1)),a(Z,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:o(()=>[p("div",ae,[p("div",se,[a(U,{modelValue:t(e).status,"onUpdate:modelValue":n[0]||(n[0]=l=>t(e).status=l),class:"mr-4",color:"warning",density:"compact","hide-details":"",label:" Chờ duyệt",value:"pending"},null,8,["modelValue"]),a(U,{modelValue:t(e).status,"onUpdate:modelValue":n[1]||(n[1]=l=>t(e).status=l),class:"mr-4",color:"success",density:"compact","hide-details":"",label:" Đã duyệt",value:"approved"},null,8,["modelValue"]),a(U,{modelValue:t(e).status,"onUpdate:modelValue":n[2]||(n[2]=l=>t(e).status=l),class:"mr-4",color:"error",density:"compact","hide-details":"",label:" Từ chối",value:"rejected"},null,8,["modelValue"])]),a(j),a(D,{color:"success",loading:t(I),size:"small",onClick:t(O)},{default:o(()=>[a(P,null,{default:o(()=>n[3]||(n[3]=[b("mdi-refresh")])),_:1})]),_:1},8,["loading","onClick"])]),p("div",oe,[a(K,{class:"h-full","fixed-header":"",headers:c,"hide-default-footer":"",items:t(x),loading:t(I)},{"item.index":o(({index:l})=>[p("span",null,y(l+1),1)]),"item.student":o(({item:l})=>{var d,C;return[p("span",null,y((d=l.student)==null?void 0:d.hodem)+" "+y((C=l.student)==null?void 0:C.ten),1)]}),"item.maso":o(({item:l})=>{var d;return[p("span",null,y((d=l.student)==null?void 0:d.maso),1)]}),"item.teacher":o(({item:l})=>{var d,C;return[p("span",null,y((d=l.teacher)==null?void 0:d.hodem)+" "+y((C=l.teacher)==null?void 0:C.ten),1)]}),"item.status":o(({item:l})=>[p("div",ie,[l.status=="pending"?(_(),w(q,{key:0,class:"mb-2",color:"success",size:"small",variant:"outlined",onClick:d=>V(l,"approved")},{default:o(()=>[a(P,null,{default:o(()=>n[4]||(n[4]=[b("mdi-check")])),_:1}),n[5]||(n[5]=p("span",null,"Duyệt",-1))]),_:2},1032,["onClick"])):T("",!0),l.status=="pending"?(_(),w(q,{key:1,color:"error",size:"small",variant:"outlined",onClick:d=>V(l,"rejected")},{default:o(()=>[a(P,null,{default:o(()=>n[6]||(n[6]=[b("mdi-close")])),_:1}),n[7]||(n[7]=p("span",null,"Từ chối",-1))]),_:2},1032,["onClick"])):T("",!0),l.status!="pending"?(_(),w(q,{key:2,color:t(W).statusColor(l.status),size:"small",variant:"flat"},{default:o(()=>[p("span",null,y(t(W).statusType(l.status)),1)]),_:2},1032,["color"])):T("",!0)])]),"item.action":o(({item:l})=>[a(X,{"min-width":"400",width:"40%"},{activator:o(({props:d})=>[l.teacher?T("",!0):(_(),w(D,E({key:0,color:"success",size:"small"},d),{default:o(()=>n[8]||(n[8]=[p("span",null,"Phân công",-1)])),_:2},1040))]),default:o(({isActive:d})=>[a(le,{intern:l,onCancel:C=>d.value=!1},null,8,["intern","onCancel"])]),_:2},1024)]),_:1},8,["items","loading"])])]),_:1})]))}});export{$e as default};
