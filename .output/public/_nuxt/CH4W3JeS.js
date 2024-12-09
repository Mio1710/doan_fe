import{d as x,r as C,i as M,a as S,t as u,L as k,A as s,x as d,y as h,V as _,B as w,M as m,S as I,v as $,z as p,R,P,K as q,a0 as L,a3 as B,a5 as z,Z as G,N as D,O,T as X}from"./BVcfHsMq.js";import{u as F}from"./DCwMXxj4.js";import{V as W}from"./qJO9cKgh.js";import{_ as K}from"./Dy0xatEG.js";import{V as Q}from"./B2rIPphO.js";import{m as Y,V as H}from"./CeBOzpmW.js";import{V as j}from"./By37Y22m.js";import"./DZ_F3gcz.js";import"./DootYb4-.js";import"./C7lNElPM.js";import"./imMtzg40.js";import"./DjNLs8i5.js";import"./DnMU98_p.js";const E=["innerHTML"],U=x({__name:"TopicRegister",props:{topicId:{type:Number,default:null}},emits:["success","viewAll"],setup(i,{emit:l}){const o=C({page:1,rowsPerPage:100,sortBy:"-created_at",sortType:"asc"}),a=M(()=>({...o.value,filters:{viewAll:!0}})),{$api:e,$toast:n}=S(),{items:t,totalItems:r,isLoading:v,refetch:f}=F(a),b=[{title:"STT",align:"start",sortable:!1,key:"index",width:50},{title:"Tên đề tài",key:"ten",width:"20%",minWidth:200},{title:"Mô tả",key:"description",width:"25%",minWidth:250},{title:"Yêu cầu",key:"requirement",width:"15%",minWidth:200},{title:"Kiến thức kỹ năng",key:"knowledge",width:"15%",minWidth:200},{title:"GVHD",key:"gv",width:"10%",minWidth:100},{title:"",key:"action",width:30,align:"center"}],A=l,V=y=>{e.studentTopic.registerTopic(y.id).then(()=>{A("success"),n.success("Đăng ký đề tài thành công")})};return(y,g)=>(u(),k(W,{class:"h-full","fixed-header":"",headers:b,"hide-default-footer":"",items:m(t),"items-per-page":m(o).rowsPerPage},{"item.index":s(({index:c})=>[d("span",null,h(c+1),1)]),"item.name":s(({item:c})=>[d("span",{innerHTML:c.name},null,8,E)]),"item.gv":s(({item:c})=>{var T,N;return[d("span",null,h((T=c==null?void 0:c.teacher)==null?void 0:T.hodem)+" "+h((N=c==null?void 0:c.teacher)==null?void 0:N.ten),1)]}),"item.action":s(({item:c})=>[c.id==i.topicId?(u(),k(_,{key:0,color:"primary",size:"x-small",onClick:g[0]||(g[0]=T=>A("viewAll"))},{default:s(()=>g[1]||(g[1]=[w("Xem")])),_:1})):(u(),k(_,{key:1,color:"success",disabled:i.topicId,size:"x-small",onClick:T=>V(c)},{default:s(()=>g[2]||(g[2]=[w("Đăng ký")])),_:2},1032,["disabled","onClick"]))]),_:1},8,["items","items-per-page"]))}}),Z=x({__name:"CancelTopic",props:{partner:{type:Array,default:()=>[]}},emits:["cancel","success"],setup(i,{emit:l}){const o=i,{$api:a,$toast:e}=S(),n=l,t=I(),r=()=>{const v=o.partner.map(f=>f.student_id);a.studentTopic.updateTopic({topic_id:null,partner_id:null,user_ids:v}).then(()=>{e.success("Hủy đề tài thành công"),t.invalidateQueries("topic"),n("success"),n("cancel")})};return(v,f)=>(u(),k(K,{"can-cancel":"","submit-text":"Xác nhận",title:"Xác nhận hủy đề tài",onCancel:f[0]||(f[0]=b=>n("cancel")),onSubmit:r},{default:s(()=>f[1]||(f[1]=[d("div",{class:"font-bold text-center text-warning"},"Nếu hủy đề tài bạn sẽ đồng thời hủy nhóm?",-1),d("div",{class:"text-center font-italic"},"Hành động không thể hoàn tác!",-1)])),_:1}))}}),J={class:"d-flex py-2 bottom-border"},tt=["innerHTML"],et=x({__name:"TopicRegisted",props:{items:{type:Array,required:!0},partner:{type:Array,default:()=>[]},numberStudent:{type:Number,default:0}},emits:["refetch","viewAll"],setup(i,{emit:l}){S();const o=l,a=[{title:"STT",align:"start",sortable:!1,key:"index",width:50},{title:"Tên đề tài",key:"ten",width:"20%",minWidth:150},{title:"Mô tả",key:"description",width:"35%",minWidth:300},{title:"Yêu cầu",key:"requirement",width:"20%",minWidth:200},{title:"Kiến thức kỹ năng",key:"knowledge",width:"15%",minWidth:100},{title:"Giảng viên HD",key:"gvhd",width:"10%",minWidth:100},{title:"Số lượng",key:"numberStudent",align:"center"}];return(e,n)=>(u(),$(q,null,[d("div",J,[n[4]||(n[4]=d("div",{class:"text-lg"},"Đề tài đã đăng ký thành công",-1)),p(R),p(Q,{"min-width":"400",width:"40%"},{activator:s(({props:t})=>[p(_,P({color:"error",size:"small"},t),{default:s(()=>n[2]||(n[2]=[w("Hủy đề tài")])),_:2},1040)]),default:s(({isActive:t})=>[p(Z,{partner:i.partner,onCancel:r=>t.value=!1,onSuccess:n[0]||(n[0]=r=>o("refetch"))},null,8,["partner","onCancel"])]),_:1}),p(_,{class:"ml-2",color:"primary",size:"small",onClick:n[1]||(n[1]=t=>o("viewAll"))},{default:s(()=>n[3]||(n[3]=[w("Xem tất cả đề tài")])),_:1})]),p(W,{class:"mt-2",headers:a,"hide-default-footer":"",items:i.items},{"item.index":s(({index:t})=>[d("span",null,h(t+1),1)]),"item.name":s(({item:t})=>[d("span",{innerHTML:t.name},null,8,tt)]),"item.gvhd":s(({item:t})=>{var r,v;return[w(h((r=t==null?void 0:t.teacher)==null?void 0:r.hodem)+" "+h((v=t==null?void 0:t.teacher)==null?void 0:v.ten),1)]}),"item.numberStudent":s(({item:t})=>[w(h(i.numberStudent)+"/"+h(t.numberStudent),1)]),_:1},8,["items"])],64))}}),it=L({...Y({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),nt=B()({name:"VRadio",props:it(),setup(i,l){let{slots:o}=l;return z(()=>{const a=H.filterProps(i);return p(H,P(a,{class:["v-radio",i.class],style:i.style,type:"radio"}),o)}),{}}}),st={class:"d-flex py-2 bottom-border"},ot={class:"text-lg"},lt={key:1},rt=x({__name:"StudentRegisted",props:{items:{type:Array,required:!0},topicId:{type:Number,required:!0}},emits:["refetch"],setup(i,{emit:l}){const o=i,a=[{title:"STT",align:"start",sortable:!1,key:"index",width:50},{title:"MASV",key:"maso",width:"20%",minWidth:150},{title:"HỌ ĐỆM",key:"hodem",width:"25%",minWidth:200},{title:"TÊN",key:"ten",width:"15%",minWidth:100},{title:"LỚP",key:"lop",width:"20%",minWidth:150},{title:"NHÓM",key:"nhom",width:"10%",minWidth:100},{title:"TẠO NHÓM",key:"action",minWidth:50,align:"center"}],e=C(null),n=G(),{$api:t,$toast:r}=S(),v=l,f=A=>{e.value=A.id},b=()=>{t.studentTopic.createGroup({partner_id:e.value,topic_id:o.topicId}).then(()=>{v("refetch"),r.success("Tạo nhóm thành công")}).finally(()=>v("refetch"))};return(A,V)=>(u(),$("div",null,[d("div",st,[d("div",ot,"Danh sách sinh viên đăng ký cùng đề tài "+h(m(e)),1),p(R),p(_,{color:"success",disabled:!m(e),size:"small",onClick:b},{default:s(()=>V[1]||(V[1]=[w("Tạo")])),_:1},8,["disabled"])]),p(W,{class:"mt-2",headers:a,"hide-default-footer":"",items:i.items},{"item.index":s(({index:y})=>[d("span",null,h(y+1),1)]),"item.nhom":s(({item:y})=>{var g;return[d("span",null,h((g=y.studentTopic[0])==null?void 0:g.group_id),1)]}),"item.action":s(({item:y})=>{var g,c;return[!y.nhom&&((g=m(n).data)==null?void 0:g.value.id)!=y.id&&!((c=y.studentTopic[0])!=null&&c.group_id)?(u(),k(nt,{key:0,modelValue:m(e),"onUpdate:modelValue":V[0]||(V[0]=T=>D(e)?e.value=T:null),"false-value":!m(e),value:y.id,onClick:T=>f(y)},null,8,["modelValue","false-value","value","onClick"])):(u(),$("div",lt))]}),_:1},8,["items"])]))}}),at={class:"d-flex py-2 bottom-border"},dt={class:"text-lg"},ct=x({__name:"PartnerRegisted",props:{items:{type:Array,required:!0},topicId:{type:Number,required:!0}},emits:["refetch"],setup(i,{emit:l}){const o=[{title:"STT",align:"start",sortable:!1,key:"index",width:50},{title:"MASV",key:"maso",width:"20%",minWidth:150},{title:"HỌ ĐỆM",key:"hodem",width:"25%",minWidth:200},{title:"TÊN",key:"ten"},{title:"LỚP",key:"lop",width:"20%",minWidth:150}],a=C(null);G();const{$api:e,$toast:n}=S(),t=l,r=()=>{e.studentTopic.cancelGroup().then(()=>{t("refetch"),n.success("Tạo nhóm thành công")})};return(v,f)=>(u(),$("div",null,[d("div",at,[d("div",dt,"Danh sách sinh viên nhóm "+h(m(a)),1),p(R),p(_,{color:"error",size:"small",onClick:r},{default:s(()=>f[0]||(f[0]=[w("Hủy nhóm")])),_:1})]),p(W,{class:"mt-2",headers:o,"hide-default-footer":"",items:i.items},{"item.index":s(({index:b})=>[d("span",null,h(b+1),1)]),_:1},8,["items"])]))}}),ut=x({__name:"TopicRegistedSuccess",props:{items:{type:Object,required:!0}},emits:["refetch","viewAll"],setup(i,{emit:l}){const o=l;return(a,e)=>{var n,t;return u(),$(q,null,[p(et,{items:[i.items.topic.topic],partner:i.items.partner,onRefetch:e[0]||(e[0]=r=>o("refetch")),onViewAll:e[1]||(e[1]=r=>o("viewAll")),numberStudent:(n=i.items)==null?void 0:n.students.length},null,8,["items","partner","numberStudent"]),((t=i.items.partner)==null?void 0:t.length)>1?(u(),k(ct,{key:0,class:"mt-6",items:i.items.partner,"topic-id":i.items.topic.topic_id,onRefetch:e[2]||(e[2]=r=>o("refetch"))},null,8,["items","topic-id"])):(u(),k(rt,{key:1,class:"mt-6",items:i.items.students,"topic-id":i.items.topic.topic_id,onRefetch:e[3]||(e[3]=r=>o("refetch"))},null,8,["items","topic-id"]))],64)}}});function mt(i,l){const{$api:o}=S(),a=O(["registed-topic",i],()=>o.studentTopic.getRegistedTopic(),{refetchOnWindowFocus:!1,...l}),e=M(()=>{var n;return((n=a.data.value)==null?void 0:n.data)||[]});return{...a,items:e}}const pt={class:"d-flex flex-column flex-grow-1 h-full"},ht={key:0,class:"h-full"},At=x({__name:"index",setup(i){const{items:l,isLoading:o,refetch:a}=mt(),e=C(!1);return(n,t)=>(u(),$("div",pt,[t[4]||(t[4]=d("div",{class:"text-lg font-bold text-uppercase"},"Đăng ký đề tài đồ án",-1)),p(j,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:s(()=>[m(l).topic?(u(),$("div",ht,[!m(l).topic.topic_id||m(e)?(u(),k(U,{key:0,"topic-id":m(l).topic.topic_id,onSuccess:t[0]||(t[0]=r=>m(a)()),onViewAll:t[1]||(t[1]=r=>e.value=!1)},null,8,["topic-id"])):(u(),k(ut,{key:1,items:m(l),onRefetch:t[2]||(t[2]=r=>m(a)()),onViewAll:t[3]||(t[3]=r=>e.value=!0)},null,8,["items"]))])):X("",!0)]),_:1})]))}});export{At as default};
