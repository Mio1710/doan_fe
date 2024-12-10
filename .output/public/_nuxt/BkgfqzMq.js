import{a as P,O as Q,i as S,d as U,r as k,F as K,t as V,L as O,A as n,z as s,x as e,v as C,X as W,K as I,M as y,Y as X,aO as Y,y as m,aP as J,P as j,N as D,T as Z,S as F,W as ee,R as q,B as N,V as L,Q as E}from"./B4b9T3Ey.js";import{P as te,_ as A}from"./DZ_F3gcz.js";import{_ as G}from"./DWnP-3Ud.js";import{a as ne,V as se}from"./Dcg_XI_i.js";import{u as le}from"./DEVZBtwm.js";import{_ as ae}from"./CrJ5cAV7.js";import{V as ie,a as oe,b as re,c as ue}from"./kwum6fLi.js";import{V as ce}from"./Bix--L3c.js";import{V as M}from"./CVw9Z0pi.js";import"./-Uj72WA5.js";import"./BGjOXY4c.js";import"./DYIKh2sd.js";import"./DyB1R29R.js";import"./CYp3WHDJ.js";import"./voTx8pFo.js";import"./40oRFHCv.js";function de(t,p){return t?Array.isArray(t)?A.map(A.zip(t,p),([f,u])=>u==="desc"?`-${f}`:f):[p==="desc"?`-${t}`:t]:[]}function me(t,p){const{$api:f}=P(),u=Q(["student-topic",t],()=>{const{sortBy:d,sortType:v}=t.value,b=de(d,v),o=new te({includes:[],appends:[],fields:{},filters:{},sorts:b,page:t.value.page,limit:t.value.rowsPerPage,payload:null,...t.value}).query();return f.teacher.getStudentTopics(o)},{refetchOnWindowFocus:!1,...p}),x=S(()=>{var d;return((d=u.data.value)==null?void 0:d.data)||[]}),w=S(()=>{var d,v;return((v=(d=u.data.value)==null?void 0:d.pagination)==null?void 0:v.total)||0});return{...u,items:x,totalItems:w}}function pe(t,p){const{$api:f}=P();console.log("params in useQuery",t);const u=Q(["student-result-topic-los",t],()=>f.teacher.getStudentResultLOs(t),{refetchOnWindowFocus:!1,...p}),x=S(()=>{var w;return((w=u.data.value)==null?void 0:w.data)||[]});return{...u,items:x}}const fe={class:"text-center"},he={class:"text-center"},ve={class:"text-center"},ge=U({__name:"ResultDetail",props:{item:{type:Object,required:!0}},emits:["cancel","success"],setup(t,{emit:p}){const f=t,{$api:u,$toast:x}=P(),w=k(f.item.id),{items:d,isLoading:v,error:b,refetch:o}=pe({studentId:w.value}),r=[{title:"STT",align:"center",sortable:!1,value:"index",width:20},{title:"Tiêu chí đánh giá",value:"main_criteria",width:"50%",minWidth:500},{title:"Tiêu chí phụ",value:"sub_criteria",width:"30%",minWidth:100},{title:"Hệ số",value:"cof",width:"7%",minWidth:50},{title:"Điểm",value:"score",width:"7%",minWidth:50}],l=k(d.value.map(h=>({...h}))),T=p;K(()=>d.value,h=>{l.value=h.map(_=>({..._}))});const z=(h,_)=>{(h.score<0||h.score>10)&&(l.value[_].score="",x.error("Vui lòng điền điểm hợp lệ (0 - 10)"))},B=()=>{u.teacher.updateStudentResultLOs(l.value).then(()=>{x.success("Cập nhật điểm thành công"),T("success")}).finally(()=>{T("cancel")})};return(h,_)=>{var $,a;return V(),O(G,{"can-cancel":"","cancel-text":"Đóng",title:`Điểm quá trình của sinh viên: ${($=t.item)==null?void 0:$.hodem} ${(a=t.item)==null?void 0:a.ten}`,onCancel:_[0]||(_[0]=i=>T("cancel")),onSubmit:B},{default:n(()=>[s(ne,{class:"elevation-1"},{default:n(()=>[e("thead",null,[e("tr",null,[(V(),C(I,null,W(r,i=>e("th",{key:i.value,class:X(`text-${i.align}`),style:Y({width:i.width})},m(i.title),7)),64))])]),e("tbody",null,[(V(!0),C(I,null,W(y(l),(i,g)=>(V(),C("tr",{key:g,class:"v-data-table__tr"},[e("td",fe,m(g+1),1),e("td",null,m(i.main_criteria),1),e("td",null,m(i.sub_criteria),1),e("td",he,m(i.cof),1),e("td",ve,[s(J,{modelValue:i.score,"onUpdate:modelValue":c=>i.score=c,type:"number",variant:"plain",onChange:c=>z(i,g)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]))),128))])]),_:1}),_[1]||(_[1]=e("div",{class:"text-center font-weight-bold text-error py-2"},[e("span",null,"Điểm tổng:")],-1))]),_:1},8,["title"])}}}),xe={key:0},_e={class:"d-flex w-full"},ye={class:"d-flex items-center"},we=["onClick"],Ve=U({__name:"ReportDetail",props:{item:{type:Object,required:!0}},emits:["cancel","success"],setup(t,{emit:p}){const f=t;k(!1);const{$api:u,$toast:x}=P(),w=j(),d=p,v=$=>{u.reportTopic.downloadReportTopic($.file_key).then(a=>{const i=URL.createObjectURL(new Blob([a])),g=document.createElement("a");g.href=i,g.setAttribute("download",$.file_name),document.body.appendChild(g),g.click()})},b=k([]),o=f.item.id,r=S(()=>({filters:{studentId:o}})),{items:l,totalItems:T,isLoading:z,refetch:B}=le(r,{enabled:!!o}),h=k(""),_=$=>{u.teacher.commentStudentReportTopic($.id,{comment:h.value}).then(()=>{x.success("Cập nhật nhận xét thành công"),w.invalidateQueries("student-report-topic")})};return($,a)=>{var i,g;return V(),O(G,{"can-cancel":"","cancel-text":"Đóng","hide-submit":"",title:`Điểm quá trình của sinh viên: ${(i=t.item)==null?void 0:i.hodem} ${(g=t.item)==null?void 0:g.ten}`,onCancel:a[2]||(a[2]=c=>d("cancel"))},{default:n(()=>[y(l)?(V(),C("div",xe,[s(ie,{modelValue:y(b),"onUpdate:modelValue":a[1]||(a[1]=c=>D(b)?b.value=c:null),multiple:""},{default:n(()=>[(V(!0),C(I,null,W(y(l),(c,H)=>(V(),O(oe,{key:H},{default:n(()=>[s(re,null,{default:n(()=>[e("div",_e,[e("span",null,"Tuần "+m(c.week),1),s(F),e("div",null,"Nộp lúc: "+m(y(ee)(new Date(c==null?void 0:c.created_at),"dd/MM/yyyy HH:mm")),1)])]),_:2},1024),s(ue,null,{default:n(()=>[e("div",ye,[e("div",null,[a[3]||(a[3]=e("span",{class:"font-weight-bold"},"File báo cáo:",-1)),e("span",{class:"cursor-pointer underline text-blue-400 ml-2",onClick:R=>v(c)},m(c.file_name),9,we)]),s(F),s(q,{color:"success",height:"20",icon:"mdi-content-save-check",size:"small",variant:"plain",onClick:R=>_(c)},null,8,["onClick"])]),e("div",null,[e("div",null,[a[4]||(a[4]=e("span",{class:"font-weight-bold"},"Mô tả:",-1)),N(" "+m(c.description),1)]),a[5]||(a[5]=e("div",{class:"font-weight-bold"},"Nhận xét của giảng viên:",-1)),e("div",null,[s(ae,{modelValue:y(h),"onUpdate:modelValue":a[0]||(a[0]=R=>D(h)?h.value=R:null),class:"mb-4",label:"Nhận xét của giảng viên","model-value":c.comment,name:"Nhận xét của giảng viên",rules:"required",type:"textarea"},null,8,["modelValue","model-value"])])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue"])])):Z("",!0)]),_:1},8,["title"])}}}),$e={class:"d-flex flex-column flex-grow-1 h-full"},be={class:"mt-2"},Te={class:"d-flex"},Ee=U({__name:"index",setup(t){const p=[{title:"STT",align:"center",sortable:!1,key:"index",width:50},{title:"Tên sinh viên",key:"ten",width:"15%",minWidth:150},{title:"MSSV",key:"maso",width:"10%",minWidth:100},{title:"Lớp",key:"lop",width:"15%",minWidth:150},{title:"Nhóm",key:"nhom",width:"5%",minWidth:50},{title:"Đề tài",key:"topic"},{title:"Nhập điểm",key:"action",width:150,sortable:!1,align:"center"}],f=k({page:1,rowsPerPage:25,sortBy:"-created_at",sortType:"asc"}),u=S(()=>({...f.value}));P(),j();const{items:x,totalItems:w,isLoading:d,refetch:v}=me(u);return(b,o)=>(V(),C("div",$e,[o[4]||(o[4]=e("div",{class:"text-lg font-bold text-uppercase"},"Sinh viên khóa luận",-1)),s(ce,{class:"pa-3 pt-0 h-full",color:"white",variant:"flat"},{default:n(()=>[e("div",be,[e("div",Te,[s(F),s(q,{icon:"",size:"x-small",variant:"text",onClick:o[0]||(o[0]=r=>y(v)())},{default:n(()=>[s(L,null,{default:n(()=>o[1]||(o[1]=[N("mdi-refresh")])),_:1})]),_:1})]),s(se,{headers:p,"hide-default-footer":"",items:y(x)},{"item.index":n(({index:r})=>[e("span",null,m(r+1),1)]),"item.ten":n(({item:r})=>[e("span",null,m(r.hodem+" "+r.ten),1)]),"item.nhom":n(({item:r})=>{var l;return[e("span",null,m((l=r.studentTopic[0])==null?void 0:l.group_id),1)]}),"item.topic":n(({item:r})=>{var l;return[e("span",null,m((l=r.studentTopic[0])==null?void 0:l.topic.ten),1)]}),"item.action":n(({item:r})=>[s(M,{"min-width":"800",width:"80%"},{activator:n(({props:l})=>[s(q,E({rounded:"",variant:"text"},l),{default:n(()=>[s(L,{color:"success"},{default:n(()=>o[2]||(o[2]=[N("mdi-eye")])),_:1})]),_:2},1040)]),default:n(({isActive:l})=>[s(Ve,{item:r,onCancel:T=>l.value=!1,onSuccess:y(v)},null,8,["item","onCancel","onSuccess"])]),_:2},1024),s(M,{"min-width":"800",width:"80%"},{activator:n(({props:l})=>[s(q,E({rounded:"",variant:"text"},l),{default:n(()=>[s(L,{color:"success"},{default:n(()=>o[3]||(o[3]=[N("mdi-pencil")])),_:1})]),_:2},1040)]),default:n(({isActive:l})=>[s(ge,{item:r,onCancel:T=>l.value=!1,onSuccess:y(v)},null,8,["item","onCancel","onSuccess"])]),_:2},1024)]),_:1},8,["items"])])]),_:1})]))}});export{Ee as default};
