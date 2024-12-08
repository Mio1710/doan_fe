import{a as _,O as Q,i as w,d as W,r as u,S as A,t as G,v as $,x as n,z as i,A as s,V as k,M as c,Q as x,B as T,R as b,y as l}from"./C5o3XgM8.js";import{V as q}from"./DSXWEGHE.js";import{V as z}from"./BucRdiyx.js";import"./Cuta4Q8k.js";import"./CkMhjDa3.js";import"./DKVj5txg.js";import"./C9IY8SFK.js";import"./ClqTeD8V.js";function O(g,p){const{$api:f}=_(),r=Q(["all-student-topic",g],()=>f.superTeacher.getAllStudentTopics(),{refetchOnWindowFocus:!1,...p}),h=w(()=>{var d;return((d=r.data.value)==null?void 0:d.data)||[]});return{...r,items:h}}const D={class:"d-flex flex-column flex-grow-1 h-full"},L={class:"d-flex"},P={class:"mt-2"},U=W({__name:"student-topic",setup(g){u(!1),u("");const p=[{title:"STT",align:"center",sortable:!1,key:"index",width:50},{title:"Tên sinh viên",key:"ten"},{title:"Lớp",key:"lop",width:"15%",minWidth:150},{title:"Nhóm",key:"studentTopic[0].group_id",width:"5%",minWidth:50,align:"center"},{title:"Giảng viên hướng dẫn",key:"gv",width:"20%",minWidth:200},{title:"Đề tài",key:"detai",width:"30%",minWidth:300},{title:"",key:"action",width:30}],f=u({page:1,rowsPerPage:25,sortBy:"-created_at",sortType:"asc"}),r=w(()=>({...f.value})),{$api:h,$toast:d}=_(),V=A(),m=u(!1),B=()=>{m.value=!0,h.superTeacher.lockStudentGroup().then(()=>{V.invalidateQueries("all-student-topic"),d.success("Đã khóa nhóm thành công")}).finally(()=>{m.value=!1})},{items:C,isLoading:S,refetch:N}=O(r);return(E,e)=>(G(),$("div",D,[e[4]||(e[4]=n("div",{class:"text-lg font-bold text-uppercase"},"Quản lý sinh viên khóa luận",-1)),i(q,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:s(()=>[n("div",L,[i(k,{color:"success",loading:c(m),size:"small",onClick:B},{default:s(()=>[i(x,{class:"mr-2"},{default:s(()=>e[1]||(e[1]=[T("mdi-lock")])),_:1}),e[2]||(e[2]=n("span",null,"Khóa nhóm",-1))]),_:1},8,["loading"]),i(b),i(k,{icon:"",size:"x-small",variant:"text",onClick:e[0]||(e[0]=t=>c(N)())},{default:s(()=>[i(x,null,{default:s(()=>e[3]||(e[3]=[T("mdi-refresh")])),_:1})]),_:1})]),n("div",P,[i(z,{headers:p,"hide-default-footer":"",items:c(C),loading:c(S)},{"item.index":s(({index:t})=>[n("span",null,l(t+1),1)]),"item.nhom":s(({item:t})=>{var a;return[n("span",null,l((a=t.studentTopic[0])==null?void 0:a.group_id),1)]}),"item.ten":s(({item:t})=>[n("span",null,l(t.hodem+" "+t.ten),1)]),"item.detai":s(({item:t})=>{var a,o;return[n("span",null,l((o=(a=t==null?void 0:t.studentTopic[0])==null?void 0:a.topic)==null?void 0:o.ten),1)]}),"item.gv":s(({item:t})=>{var a,o,v,y;return[n("span",null,l((o=(a=t==null?void 0:t.studentTopic[0])==null?void 0:a.topic)==null?void 0:o.teacher.hodem)+" "+l((y=(v=t==null?void 0:t.studentTopic[0])==null?void 0:v.topic)==null?void 0:y.teacher.ten),1)]}),_:1},8,["items","loading"])])]),_:1})]))}});export{U as default};
