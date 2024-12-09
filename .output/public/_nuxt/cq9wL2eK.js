import{d as N,r as w,a as M,S as B,t as c,L as H,A as s,M as n,v as f,x as u,z as l,B as p,Q as _,y as x,N as O,V as S,W as j,R as Q,P as W,i as X,T as A}from"./0wqRa8uz.js";import{_ as v}from"./BKm5bZvM.js";import{V as L,s as G}from"./Cpl3AsiG.js";import{r as J,u as R}from"./DG2X6oDA.js";import{_ as z}from"./BKiZ_DZ4.js";import{V as P}from"./BffF7sxq.js";import{u as K}from"./C3YYYuFG.js";import{V as q}from"./Cx1b5Nlr.js";import{V as D}from"./CyICQTAS.js";import{V as Y}from"./BsJvwtkx.js";import"./DctvsucH.js";import"./DZ-7tDZr.js";import"./DJgaIwuW.js";import"./DXSx6g10.js";import"./CVuKekPb.js";import"./CGkmOgFk.js";import"./GAkoUMat.js";import"./DZ_F3gcz.js";const Z={key:0},ee={class:"d-flex items-center"},le={key:0},ne={key:1},te={key:0},ae={key:1},se={key:0},ie={key:1},oe={key:0},re={key:1},de={key:1},ue={class:"d-flex align-center"},me={class:"mt-4"},ce={class:"max-w-[520px] ma-auto d-flex"},pe={class:"d-none"},he=N({__name:"ImportTeacher",emits:["cancel","success"],setup(C,{emit:y}){const i=w(null),{$api:d,$toast:g}=M(),h=y,k=B(),V=w(!1),b=[{title:"STT",align:"center",sortable:!1,key:"index",width:50},{title:"Giảng viên",key:"ten",width:"20%",minWidth:200},{title:"Mã số",key:"maso",minWidth:100},{title:"Email",key:"email",minWidth:100},{title:"Ngày sinh",key:"ngay_sinh",minWidth:100},{title:"Cán bộ môn",key:"is_super_teacher",width:"15%",minWidth:100,align:"center"},{title:"Cán bộ khoa",key:"is_admin",width:"15%",minWidth:100,align:"center"}],o=()=>{V.value=!0,d.admin.importUser(G.serialize({file:i.value})).then(r=>{if(r.size>2106){g.error("Dữ liệu không hợp lệ, vui lòng kiểm tra lại!");const e=URL.createObjectURL(new Blob([r])),a=document.createElement("a");a.href=e,a.setAttribute("download","teacher.xlsx"),document.body.appendChild(a),a.click()}else g.success("Import giảng viên thành công");k.invalidateQueries("teacher"),h("cancel"),h("success")}).finally(()=>{V.value=!1})},t=w(!1),m=["STT","maso","hodem","ten","email","ngay_sinh","is_admin","is_super_teacher"],$=w([]),T=()=>{const r=new FileReader;if(i.value){if(i.value.size>5*1024*1024){g.error("File phải nhỏ hơn 5MB");return}r.onload=e=>{var a;if((a=e.target)!=null&&a.result){const U=J(e.target.result,{type:"binary",cellDates:!0}),E=U.Sheets[U.SheetNames[0]],I=R.sheet_to_json(E,{header:1})[0];if(console.log("Headers:",I),JSON.stringify(I)!==JSON.stringify(m)){g.error("File không đúng định dạng");return}const F=R.sheet_to_json(E);console.log("Parsed data:",F),t.value=!0,$.value=F}},r.readAsBinaryString(i.value)}};return(r,e)=>(c(),H(z,{"can-cancel":"","cancel-text":"Hủy","hide-submit":!n(t),loading:n(V),title:"Import giảng viên",onCancel:e[2]||(e[2]=a=>h("cancel")),onSubmit:o},{default:s(()=>[n(t)?(c(),f("div",Z,[u("div",ee,[l(_,{class:"ma-2",color:"error"},{default:s(()=>e[3]||(e[3]=[p("mdi-alert-circle")])),_:1}),e[4]||(e[4]=u("span",null,"Dữ liệu không hợp lệ có thể không được lưu!",-1))]),l(P,{headers:b,height:"400","item-value":"name",items:n($)},{"item.index":s(({index:a})=>[u("span",null,x(a+1),1)]),"item.ten":s(({item:a})=>[a.hodem&&a.ten?(c(),f("span",le,x(a.hodem+" "+a.ten),1)):(c(),f("span",ne,[l(_,{color:"error"},{default:s(()=>e[5]||(e[5]=[p("mdi-alert-circle")])),_:1})]))]),"item.maso":s(({item:a})=>[a.maso?(c(),f("span",te,x(a.maso),1)):(c(),f("span",ae,[l(_,{color:"error"},{default:s(()=>e[6]||(e[6]=[p("mdi-alert-circle")])),_:1})]))]),"item.email":s(({item:a})=>[a.email?(c(),f("span",se,x(a.email),1)):(c(),f("span",ie,[l(_,{color:"error"},{default:s(()=>e[7]||(e[7]=[p("mdi-alert-circle")])),_:1})]))]),"item.ngay_sinh":s(({item:a})=>[a.ngay_sinh?(c(),f("span",oe,x(a.ngay_sinh),1)):(c(),f("span",re,[l(_,{color:"error"},{default:s(()=>e[8]||(e[8]=[p("mdi-alert-circle")])),_:1})]))]),_:1},8,["items"])])):(c(),f("div",de,[u("div",ue,[l(_,{class:"mr-1",color:"warning"},{default:s(()=>e[9]||(e[9]=[p("mdi-alert")])),_:1}),e[10]||(e[10]=u("span",null,"File phải nhỏ hơn 5MB. Định dạng xlsx",-1))]),e[12]||(e[12]=u("div",{class:"mt-5"},[p(" Tải xuống mẫu import dữ liệu: "),u("a",{download:"",href:"/files/teacher_template.xlsx",target:"_blank"},"download")],-1)),u("div",me,[u("div",ce,[l(L,{"show-size":"",modelValue:n(i),"onUpdate:modelValue":e[0]||(e[0]=a=>O(i)?i.value=a:null),accept:".xlsx",class:"w-full mr-4",label:"File dữ liệu",variant:"outlined"},null,8,["modelValue"]),u("div",pe,[l(v,{modelValue:n(i),"onUpdate:modelValue":e[1]||(e[1]=a=>O(i)?i.value=a:null),rules:"required"},null,8,["modelValue"])]),l(S,{color:"success",disabled:!n(i),onClick:T},{default:s(()=>e[11]||(e[11]=[p("Xem trước")])),_:1},8,["disabled"])])])]))]),_:1},8,["hide-submit","loading"]))}}),ge={class:"d-flex"},fe=N({__name:"UpdateTeacher",props:{teacher:{type:Object,required:!0}},emits:["cancel"],setup(C,{emit:y}){const i=C,d=w({...i.teacher,ngay_sinh:i.teacher.ngay_sinh?j(new Date(i==null?void 0:i.teacher.ngay_sinh),"dd/MM/yyyy"):null}),{$api:g,$toast:h}=M(),k=y,V=B(),b=()=>{g.admin.updateTeacher(d.value.id,d.value).then(()=>{h.success("Cập nhật giảng viên thành công"),V.invalidateQueries("teacher"),k("cancel")})};return(o,t)=>(c(),H(z,{"can-cancel":"","cancel-text":"Hủy",title:"Cập nhật giảng viên",onCancel:t[7]||(t[7]=m=>k("cancel")),onSubmit:b},{default:s(()=>[l(v,{modelValue:n(d).hodem,"onUpdate:modelValue":t[0]||(t[0]=m=>n(d).hodem=m),label:"Họ đệm",name:"Họ đệm",rules:"required"},null,8,["modelValue"]),l(v,{modelValue:n(d).ten,"onUpdate:modelValue":t[1]||(t[1]=m=>n(d).ten=m),label:"Tên giảng viên",name:"Tên giảng viên",rules:"required"},null,8,["modelValue"]),l(v,{modelValue:n(d).email,"onUpdate:modelValue":t[2]||(t[2]=m=>n(d).email=m),label:"Email",name:"Email",rules:"required|email"},null,8,["modelValue"]),l(v,{modelValue:n(d).maso,"onUpdate:modelValue":t[3]||(t[3]=m=>n(d).maso=m),label:"Mã số",name:"Mã số",rules:"required"},null,8,["modelValue"]),l(v,{modelValue:n(d).ngay_sinh,"onUpdate:modelValue":t[4]||(t[4]=m=>n(d).ngay_sinh=m),label:"Ngày sinh",name:"Ngày sinh"},null,8,["modelValue"]),u("div",ge,[l(q,{color:"success","hide-details":"",label:"Cán bộ môn",modelValue:n(d).roles,"onUpdate:modelValue":t[5]||(t[5]=m=>n(d).roles=m),value:"super_teacher"},null,8,["modelValue"]),l(Q),l(q,{color:"success","hide-details":"",label:"Cán bộ khoa",modelValue:n(d).roles,"onUpdate:modelValue":t[6]||(t[6]=m=>n(d).roles=m),value:"admin"},null,8,["modelValue"])])]),_:1}))}}),ve={class:"d-flex"},ye=N({__name:"CreateTeacher",emits:["cancel","success"],setup(C,{emit:y}){const i=w({hodem:"",ten:"",email:"",maso:"",ngay_sinh:"",roles:[]}),{$api:d,$toast:g}=M(),h=y,k=B(),V=()=>{d.admin.createTeacher(i.value).then(()=>{g.success("Thêm mới giảng viên thành công"),k.invalidateQueries("teacher"),h("success"),h("cancel")})};return(b,o)=>(c(),H(z,{"can-cancel":"","cancel-text":"Hủy",title:"Thêm mới giảng viên",onCancel:o[7]||(o[7]=t=>h("cancel")),onSubmit:V},{default:s(()=>[l(v,{modelValue:n(i).hodem,"onUpdate:modelValue":o[0]||(o[0]=t=>n(i).hodem=t),label:"Họ đệm",name:"Họ đệm",rules:"required"},null,8,["modelValue"]),l(v,{modelValue:n(i).ten,"onUpdate:modelValue":o[1]||(o[1]=t=>n(i).ten=t),label:"Tên giảng viên",name:"Tên giảng viên",rules:"required"},null,8,["modelValue"]),l(v,{modelValue:n(i).email,"onUpdate:modelValue":o[2]||(o[2]=t=>n(i).email=t),label:"Email",name:"Email",rules:"required|email"},null,8,["modelValue"]),l(v,{modelValue:n(i).maso,"onUpdate:modelValue":o[3]||(o[3]=t=>n(i).maso=t),label:"Mã số",name:"Mã số",rules:"required"},null,8,["modelValue"]),l(v,{modelValue:n(i).ngay_sinh,"onUpdate:modelValue":o[4]||(o[4]=t=>n(i).ngay_sinh=t),label:"Ngày sinh",name:"Ngày sinh"},null,8,["modelValue"]),u("div",ve,[l(q,{color:"success","hide-details":"",label:"Cán bộ môn",modelValue:n(i).roles,"onUpdate:modelValue":o[5]||(o[5]=t=>n(i).roles=t),value:"super_teacher"},null,8,["modelValue"]),l(Q),l(q,{color:"success","hide-details":"",label:"Cán bộ khoa",modelValue:n(i).roles,"onUpdate:modelValue":o[6]||(o[6]=t=>n(i).roles=t),value:"admin"},null,8,["modelValue"])])]),_:1}))}}),Ve={class:"text-center text-warning"},_e=N({__name:"DeleteTeacherConfirmDialog",props:{teacher:{type:Object,required:!0}},emits:["success"],setup(C,{emit:y}){const i=C,d=y,{$api:g,$toast:h}=M(),k=B(),V=b=>{g.admin.deleteTeacher(i.teacher.id).then(()=>{h.success("Xóa giảng viên thành công"),k.invalidateQueries("teacher"),b.value=!1,d("success")})};return(b,o)=>(c(),H(D,{"min-width":"400",width:"40%"},{activator:s(({props:t})=>[l(S,W(t,{color:"error",icon:"",size:"small",variant:"text"}),{default:s(()=>[l(_,null,{default:s(()=>o[0]||(o[0]=[p("mdi-trash-can")])),_:1})]),_:2},1040)]),default:s(({isActive:t})=>[l(z,{"can-cancel":"","cancel-text":"Hủy","submit-text":"Xóa",title:"Xác nhận xóa giảng viên",onCancel:m=>t.value=!1,onSubmit:m=>V(t)},{default:s(()=>[u("div",Ve,[u("span",null,[l(_,null,{default:s(()=>o[1]||(o[1]=[p("mdi-warning")])),_:1}),o[2]||(o[2]=p(" Xóa giảng viên ")),u("strong",null,x(C.teacher.hodem)+" "+x(C.teacher.ten)+" - "+x(C.teacher.maso),1),o[3]||(o[3]=p(" khỏi hệ thống? "))])])]),_:2},1032,["onCancel","onSubmit"])]),_:1}))}}),xe={class:"d-flex flex-column flex-grow-1 h-full"},ke={class:"d-flex items-center"},be={class:"mt-2 h-[calc(100%_-_45px)] overflow-y-hidden"},Ce={key:0},Re=N({__name:"teacher",setup(C){const y=w({q:""}),i=[{title:"STT",align:"center",sortable:!1,key:"index",width:50},{title:"Giảng viên",key:"ten",width:"20%",minWidth:200},{title:"Mã số",key:"maso",minWidth:200},{title:"Ngày sinh",key:"ngay_sinh",minWidth:100},{title:"Cán bộ môn",key:"is_super_teacher",width:"15%",minWidth:100,align:"center"},{title:"Cán bộ khoa",key:"is_admin",width:"15%",minWidth:100,align:"center"},{title:"",key:"action",width:100}],d=w({page:1,rowsPerPage:25,sortBy:"-created_at",sortType:"asc"}),g=X(()=>({...d.value,filters:y.value})),{$api:h,$toast:k}=M(),V=B(),b=(T,r)=>{var e;try{const a=(e=T.roles)!=null&&e.includes(r)?T.roles.filter(U=>U!==r):[...T.roles,r];h.admin.activeTeacher(T.id,a).then(()=>{V.invalidateQueries("teacher"),k.success("Đã cập nhật quyền thành công")})}catch(a){console.log(a)}},{items:o,totalItems:t,isLoading:m,refetch:$}=K(g);return(T,r)=>(c(),f("div",xe,[r[6]||(r[6]=u("div",{class:"text-lg font-bold text-uppercase"},"Quản lý giảng viên",-1)),l(Y,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:s(()=>[u("div",ke,[l(D,{"min-width":"600",width:"60%"},{activator:s(({props:e})=>[l(S,W({color:"success",size:"small"},e),{default:s(()=>[l(_,null,{default:s(()=>r[1]||(r[1]=[p("mdi-plus")])),_:1}),r[2]||(r[2]=u("span",null,"Import",-1))]),_:2},1040)]),default:s(({isActive:e})=>[l(he,{onCancel:a=>e.value=!1,onSuccess:n($)},null,8,["onCancel","onSuccess"])]),_:1}),l(v,{modelValue:n(y).q,"onUpdate:modelValue":r[0]||(r[0]=e=>n(y).q=e),class:"h-[24px] w-[250px] ml-2",clearable:"",density:"compact",placeholder:"Tên/Mã số giảng viên","prepend-inner-icon":"mdi-magnify",variant:"plain"},null,8,["modelValue"]),l(Q),l(D,{"min-width":"400",width:"40%"},{activator:s(({props:e})=>[l(S,W({color:"success",size:"small"},e),{default:s(()=>[l(_,null,{default:s(()=>r[3]||(r[3]=[p("mdi-plus")])),_:1}),r[4]||(r[4]=u("span",null,"Thêm giảng viên",-1))]),_:2},1040)]),default:s(({isActive:e})=>[l(ye,{onCancel:a=>e.value=!1,onSuccess:n($)},null,8,["onCancel","onSuccess"])]),_:1}),l(S,{icon:"mdi-refresh",variant:"plain",onClick:n($)},null,8,["onClick"])]),u("div",be,[l(P,{class:"h-full","fixed-header":"",headers:i,"hide-default-footer":"",items:n(o),loading:n(m)},{"item.index":s(({index:e})=>[u("span",null,x(e+1),1)]),"item.is_super_teacher":s(({item:e})=>[l(q,{color:"success","hide-details":"","model-value":e.roles,value:"super_teacher",onClick:a=>b(e,"super_teacher")},null,8,["model-value","onClick"])]),"item.is_admin":s(({item:e})=>[l(q,{color:"success","hide-details":"","model-value":e.roles,value:"admin",onClick:a=>b(e,"admin")},null,8,["model-value","onClick"])]),"item.ten":s(({item:e})=>[u("span",null,x(e.hodem+" "+e.ten),1)]),"item.ngay_sinh":s(({item:e})=>[e.ngay_sinh?(c(),f("span",Ce,x(n(j)(new Date(e==null?void 0:e.ngay_sinh),"dd/MM/yyyy")),1)):A("",!0)]),"item.action":s(({item:e})=>[l(D,{"min-width":"400",width:"40%"},{activator:s(({props:a})=>[l(S,W(a,{color:"success",icon:"",size:"small",variant:"text"}),{default:s(()=>[l(_,null,{default:s(()=>r[5]||(r[5]=[p("mdi-pencil")])),_:1})]),_:2},1040)]),default:s(({isActive:a})=>[l(fe,{teacher:e,onCancel:U=>a.value=!1},null,8,["teacher","onCancel"])]),_:2},1024),l(_e,{teacher:e,onSuccess:n($)},null,8,["teacher","onSuccess"])]),_:1},8,["items","loading"])])]),_:1})]))}});export{Re as default};
