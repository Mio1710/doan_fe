import{_ as g}from"./D64AmvwT.js";import{V as A,s as F}from"./DTzWAIEN.js";import{d as U,r as w,a as C,S as N,t as T,L as D,A as l,M as s,v as b,x as m,z as t,B as x,Q as S,y as k,N as O,V as $,P as M,O as R,i as L,R as j,W as X}from"./WipKja2Z.js";import{r as J,u as B}from"./DG2X6oDA.js";import{_ as H}from"./D4y4r6Wz.js";import{V as G}from"./DyTrN5gZ.js";import{V as z}from"./mQ0dPInB.js";import{P as K,_ as Q}from"./DZ_F3gcz.js";import{V as Y}from"./DlZ0sKDs.js";import{V as Z}from"./BZFDvjCY.js";import"./DcgrLRwZ.js";import"./BqEb8_I1.js";import"./Ba1IWl4U.js";import"./Dk9QRMfY.js";import"./DyX3VB_7.js";import"./5xYdB-GE.js";const ee={key:0},te={class:"d-flex items-center"},ne={key:0},le={key:1},se={key:0},ie={key:1},oe={key:0},ae={key:1},ue={key:1},de={class:"mt-4"},re={class:"max-w-[520px] ma-auto d-flex"},me={class:"d-none"},pe=U({__name:"ImportStudentTopic",emits:["cancel","success"],setup(r,{emit:v}){const i=w(null),{$api:o,$toast:V}=C(),f=v,c=N(),h=w(!1),p=w(!1),d=[{title:"STT",align:"center",sortable:!1,key:"index",width:50},{title:"Sinh viên",key:"ten",width:"20%",minWidth:200},{title:"Mã số",key:"maso",minWidth:100},{title:"Email",key:"email",minWidth:100},{title:"Ngày sinh",key:"ngay_sinh",minWidth:100},{title:"Lớp",key:"lop",width:"15%",minWidth:100,align:"center"}],e=()=>{o.studentTopic.importStudentTopic(F.serialize({file:i.value})).then(_=>{if(_.size>2106){V.error("Dữ liệu không hợp lệ, vui lòng kiểm tra lại!");const a=URL.createObjectURL(new Blob([_])),u=document.createElement("a");u.href=a,u.setAttribute("download","error_student.xlsx"),document.body.appendChild(u),u.click()}else V.success("Import sinh viên thành công");c.invalidateQueries("student-topic"),f("cancel"),f("success")}).finally(()=>{p.value=!1})},n=["STT","maso","hodem","ten","ngay_sinh","lop","email"],y=w([]),q=()=>{const _=new FileReader;if(i.value){if(i.value.size>5*1024*1024){V.error("File phải nhỏ hơn 5MB");return}_.onload=a=>{var u;if((u=a.target)!=null&&u.result){const P=J(a.target.result,{type:"binary",cellDates:!0}),W=P.Sheets[P.SheetNames[0]],E=B.sheet_to_json(W,{header:1})[0];if(console.log("Headers:",E),JSON.stringify(E)!==JSON.stringify(n)){V.error("File không đúng định dạng");return}const I=B.sheet_to_json(W);console.log("Parsed data:",I),h.value=!0,y.value=I}},_.readAsBinaryString(i.value)}};return(_,a)=>(T(),D(H,{"can-cancel":"","cancel-text":"Hủy","hide-submit":!s(h),title:"Import sinh viên khóa luận",onCancel:a[2]||(a[2]=u=>f("cancel")),onSubmit:e},{default:l(()=>[s(h)?(T(),b("div",ee,[m("div",te,[t(S,{class:"ma-2",color:"error"},{default:l(()=>a[3]||(a[3]=[x("mdi-alert-circle")])),_:1}),a[4]||(a[4]=m("span",null,"Dữ liệu không hợp lệ có thể không được lưu!",-1))]),t(G,{headers:d,height:"400","item-value":"name",items:s(y)},{"item.index":l(({index:u})=>[m("span",null,k(u+1),1)]),"item.ten":l(({item:u})=>[u.hodem&&u.ten?(T(),b("span",ne,k(u.hodem+" "+u.ten),1)):(T(),b("span",le,[t(S,{color:"error"},{default:l(()=>a[5]||(a[5]=[x("mdi-alert-circle")])),_:1})]))]),"item.maso":l(({item:u})=>[u.maso?(T(),b("span",se,k(u.maso),1)):(T(),b("span",ie,[t(S,{color:"error"},{default:l(()=>a[6]||(a[6]=[x("mdi-alert-circle")])),_:1})]))]),"item.email":l(({item:u})=>[u.email?(T(),b("span",oe,k(u.email),1)):(T(),b("span",ae,[t(S,{color:"error"},{default:l(()=>a[7]||(a[7]=[x("mdi-alert-circle")])),_:1})]))]),_:1},8,["items"])])):(T(),b("div",ue,[a[9]||(a[9]=m("div",{class:"mt-5"},[x(" Tải xuống mẫu import dữ liệu: "),m("a",{download:"",href:"/files/student_topic_template.xlsx",target:"_blank"},"download")],-1)),m("div",de,[m("div",re,[t(A,{modelValue:s(i),"onUpdate:modelValue":a[0]||(a[0]=u=>O(i)?i.value=u:null),accept:".xlsx",class:"w-full mr-4",label:"File dữ liệu",variant:"outlined"},null,8,["modelValue"]),m("div",me,[t(g,{modelValue:s(i),"onUpdate:modelValue":a[1]||(a[1]=u=>O(i)?i.value=u:null),rules:"required"},null,8,["modelValue"])]),t($,{color:"success",disabled:!s(i),onClick:q},{default:l(()=>a[8]||(a[8]=[x("Xem trước")])),_:1},8,["disabled"])])])]))]),_:1},8,["hide-submit"]))}}),ce=U({__name:"CreateStudentTopic",emits:["cancel","success"],setup(r,{emit:v}){const i=w({hodem:"",ten:"",email:"",maso:"",lop:"",phone:""}),{$api:o,$toast:V}=C(),f=v,c=N(),h=()=>{o.admin.createStudentTopic(i.value).then(()=>{V.success("Thêm mới sinh viên khóa luận thành công"),c.invalidateQueries("student-topic"),f("success"),f("cancel")})};return(p,d)=>(T(),D(H,{"can-cancel":"","cancel-text":"Hủy",title:"Thêm mới sinh viên khóa luận",onCancel:d[6]||(d[6]=e=>f("cancel")),onSubmit:h},{default:l(()=>[t(g,{modelValue:s(i).hodem,"onUpdate:modelValue":d[0]||(d[0]=e=>s(i).hodem=e),label:"Họ đệm",name:"Họ đệm",rules:"required"},null,8,["modelValue"]),t(g,{modelValue:s(i).ten,"onUpdate:modelValue":d[1]||(d[1]=e=>s(i).ten=e),label:"Tên sinh viên",name:"Tên sinh viên",rules:"required"},null,8,["modelValue"]),t(g,{modelValue:s(i).maso,"onUpdate:modelValue":d[2]||(d[2]=e=>s(i).maso=e),label:"Mã số",name:"Mã số",rules:"required"},null,8,["modelValue"]),t(g,{modelValue:s(i).email,"onUpdate:modelValue":d[3]||(d[3]=e=>s(i).email=e),label:"Email",name:"Email",rules:"required|email"},null,8,["modelValue"]),t(g,{modelValue:s(i).lop,"onUpdate:modelValue":d[4]||(d[4]=e=>s(i).lop=e),label:"Lớp",name:"Lớp",rules:"required"},null,8,["modelValue"]),t(g,{modelValue:s(i).phone,"onUpdate:modelValue":d[5]||(d[5]=e=>s(i).phone=e),label:"Số điện thoại",name:"Số điện thoại"},null,8,["modelValue"])]),_:1}))}}),fe=U({__name:"UpdateStudentTopic",props:{studentTopic:{type:Object,required:!0}},emits:["cancel","success"],setup(r,{emit:v}){const o=w({...r.studentTopic}),{$api:V,$toast:f}=C(),c=v,h=N(),p=()=>{V.admin.updateStudentTopic(o.value.id,o.value).then(()=>{f.success("Cập nhật sinh viên khóa luận thành công"),h.invalidateQueries("student-topic"),c("success"),c("cancel")})};return(d,e)=>(T(),D(H,{"can-cancel":"","cancel-text":"Hủy",title:"Cập nhật sinh viên khóa luận",onCancel:e[6]||(e[6]=n=>c("cancel")),onSubmit:p},{default:l(()=>[t(g,{modelValue:s(o).hodem,"onUpdate:modelValue":e[0]||(e[0]=n=>s(o).hodem=n),label:"Họ đệm",name:"Họ đệm",rules:"required"},null,8,["modelValue"]),t(g,{modelValue:s(o).ten,"onUpdate:modelValue":e[1]||(e[1]=n=>s(o).ten=n),label:"Tên sinh viên",name:"Tên sinh viên",rules:"required"},null,8,["modelValue"]),t(g,{modelValue:s(o).maso,"onUpdate:modelValue":e[2]||(e[2]=n=>s(o).maso=n),label:"Mã số",name:"Mã số",rules:"required"},null,8,["modelValue"]),t(g,{modelValue:s(o).email,"onUpdate:modelValue":e[3]||(e[3]=n=>s(o).email=n),label:"Email",name:"Email",rules:"required|email"},null,8,["modelValue"]),t(g,{modelValue:s(o).lop,"onUpdate:modelValue":e[4]||(e[4]=n=>s(o).lop=n),label:"Lớp",name:"Lớp",rules:"required"},null,8,["modelValue"]),t(g,{modelValue:s(o).phone,"onUpdate:modelValue":e[5]||(e[5]=n=>s(o).phone=n),label:"Số điện thoại",name:"Số điện thoại"},null,8,["modelValue"])]),_:1}))}}),he={class:"text-center text-warning"},ve=U({__name:"DeleteStudentTopicConfirmDialog",props:{studentTopic:{type:Object,required:!0}},emits:["success"],setup(r,{emit:v}){const i=r,o=v,{$api:V,$toast:f}=C(),c=()=>{V.admin.deleteStudentTopic(i.studentTopic.id).then(()=>{f.success("Xóa sinh viên khóa luận thành công"),o("success")})};return(h,p)=>(T(),D(z,{"min-width":"400",width:"40%"},{activator:l(({props:d})=>[t($,M(d,{color:"error",icon:"",size:"small",variant:"text"}),{default:l(()=>[t(S,null,{default:l(()=>p[0]||(p[0]=[x("mdi-trash-can")])),_:1})]),_:2},1040)]),default:l(({isActive:d})=>[t(H,{"can-cancel":"","cancel-text":"Hủy","submit-text":"Xóa",title:"Xác nhận xóa sinh viên khóa luận",onCancel:e=>d.value=!1,onSubmit:c},{default:l(()=>[m("div",he,[m("span",null,[t(S,null,{default:l(()=>p[1]||(p[1]=[x("mdi-warning")])),_:1}),p[2]||(p[2]=x(" Xóa sinh viên ")),m("strong",null,k(r.studentTopic.hodem)+" "+k(r.studentTopic.ten)+" - "+k(r.studentTopic.maso),1),p[3]||(p[3]=x(" khỏi hệ thống? "))])])]),_:2},1032,["onCancel"])]),_:1}))}});function Ve(r,v){return r?Array.isArray(r)?Q.map(Q.zip(r,v),([i,o])=>o==="desc"?`-${i}`:i):[v==="desc"?`-${r}`:r]:[]}function ye(r,v){const{$api:i}=C(),o=R(["student-topic",r],()=>{const{sortBy:c,sortType:h}=r.value,p=Ve(c,h),d=new K({includes:[],appends:[],fields:{},filters:{},sorts:p,page:r.value.page,limit:r.value.rowsPerPage,payload:null,...r.value}).query();return i.studentTopic.getStudentTopics(d)},{refetchOnWindowFocus:!1,...v}),V=L(()=>{var c;return((c=o.data.value)==null?void 0:c.data)||[]}),f=L(()=>{var c,h;return((h=(c=o.data.value)==null?void 0:c.pagination)==null?void 0:h.total)||0});return{...o,items:V,totalItems:f}}const ge={class:"d-flex flex-column flex-grow-1 h-full"},xe={class:"d-flex items-center"},Te={class:"mt-2 h-[calc(100%_-_45px)]"},We=U({__name:"student-topic",setup(r){const v=[{title:"STT",align:"center",sortable:!1,key:"index",width:50},{title:"Tên sinh viên",key:"ten"},{title:"Mã số",key:"maso"},{title:"Email",key:"email"},{title:"Lớp",key:"lop",width:"15%",minWidth:150},{title:"Nhóm",key:"nhom",width:"5%",minWidth:50},{title:"Giảng viên hướng dẫn",key:"gv",width:"20%",minWidth:200},{title:"",key:"action",width:100}],i=w({q:""}),o=w({page:1,rowsPerPage:100,sortBy:"-created_at",sortType:"asc"}),V=L(()=>({...o.value}));C();const{items:f,totalItems:c,isLoading:h,refetch:p}=ye(V);return(d,e)=>(T(),b("div",ge,[e[8]||(e[8]=m("div",{class:"text-lg font-bold text-uppercase"},"Quản lý sinh viên khóa luận",-1)),t(Y,{class:"px-3 py-2 h-full",color:"white",variant:"flat"},{default:l(()=>[m("div",xe,[t(z,{"min-width":"600",width:"60%"},{activator:l(({props:n})=>[t($,M({color:"success",size:"small"},n),{default:l(()=>[t(S,null,{default:l(()=>e[2]||(e[2]=[x("mdi-plus")])),_:1}),e[3]||(e[3]=m("span",null,"Import",-1))]),_:2},1040)]),default:l(({isActive:n})=>[t(pe,{onCancel:y=>n.value=!1},null,8,["onCancel"])]),_:1}),t(g,{modelValue:s(i).q,"onUpdate:modelValue":e[0]||(e[0]=n=>s(i).q=n),class:"h-[24px] w-[250px] ml-2",clearable:"",density:"compact",placeholder:"Tên/Mã số sinh viên","prepend-inner-icon":"mdi-magnify",variant:"plain"},null,8,["modelValue"]),t(j),t(z,{"min-width":"400",width:"40%"},{activator:l(({props:n})=>[t($,M({color:"success",size:"small"},n),{default:l(()=>[t(S,null,{default:l(()=>e[4]||(e[4]=[x("mdi-plus")])),_:1}),e[5]||(e[5]=m("span",null,"Thêm sinh viên",-1))]),_:2},1040)]),default:l(({isActive:n})=>[t(ce,{onCancel:y=>n.value=!1,onSuccess:s(p)},null,8,["onCancel","onSuccess"])]),_:1}),t($,{icon:"",size:"x-small",variant:"text",onClick:e[1]||(e[1]=n=>s(p)())},{default:l(()=>[t(S,null,{default:l(()=>e[6]||(e[6]=[x("mdi-refresh")])),_:1})]),_:1})]),m("div",Te,[t(Z,{class:"h-full","fixed-header":"",headers:v,"hide-default-footer":"",items:s(f),"items-per-page":1e3,loading:s(h)},{"item.index":l(({index:n})=>[m("span",null,k(n+1),1)]),"item.nhom":l(({item:n})=>{var y;return[m("span",null,k((y=n.studentTopic[0])==null?void 0:y.group_id),1)]}),"item.gv":l(({item:n})=>{var y,q,_,a;return[m("span",null,k((q=(y=n.studentTopic[0])==null?void 0:y.topic)==null?void 0:q.teacher.hodem)+" "+k((a=(_=n.studentTopic[0])==null?void 0:_.topic)==null?void 0:a.teacher.ten),1)]}),"item.ten":l(({item:n})=>[m("span",null,k(n.hodem+" "+n.ten),1)]),"item.ngay_sinh":l(({item:n})=>[m("span",null,k(s(X)(new Date(n.ngay_sinh),"dd/MM/yyyy")),1)]),"item.action":l(({item:n})=>[t(z,{"min-width":"400",width:"40%"},{activator:l(({props:y})=>[t($,M(y,{color:"success",icon:"",size:"small",variant:"text"}),{default:l(()=>[t(S,null,{default:l(()=>e[7]||(e[7]=[x("mdi-pencil")])),_:1})]),_:2},1040)]),default:l(({isActive:y})=>[t(fe,{"student-topic":n,onCancel:q=>y.value=!1},null,8,["student-topic","onCancel"])]),_:2},1024),t(ve,{"student-topic":n,onSuccess:s(p)},null,8,["student-topic","onSuccess"])]),_:1},8,["items","loading"])])]),_:1})]))}});export{We as default};
