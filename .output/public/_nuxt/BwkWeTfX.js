import{d as T,a as C,P as B,r as u,t as _,L as S,A as e,x as s,M as n,i as W,v as $,z as a,R as y,Q as N,V as w,B as k,S as R,y as d,T as z}from"./B4b9T3Ey.js";import{f as V}from"./D-3jeY6D.js";import{_ as A}from"./DWnP-3Ud.js";import{u as P}from"./Dcdph_Ex.js";import{V as q}from"./Bix--L3c.js";import{V as D}from"./CVw9Z0pi.js";import{V as Q}from"./Dcg_XI_i.js";import{V as G}from"./voTx8pFo.js";import"./-Uj72WA5.js";import"./BGjOXY4c.js";import"./DZ_F3gcz.js";import"./DYIKh2sd.js";import"./DyB1R29R.js";import"./CYp3WHDJ.js";const H=T({__name:"ResetTopicAlert",emits:["cancel"],setup(b,{emit:m}){const{$api:p,$toast:f}=C(),o=m,v=B(),r=u(!1),c=()=>{r.value=!0,p.topic.resetTopic().then(()=>{f.success("Reset đề tài thành công"),v.invalidateQueries("topic"),o("cancel")}).finally(()=>{r.value=!1})};return(h,l)=>(_(),S(A,{"can-cancel":"","cancel-text":"Hủy",loading:n(r),title:"Reset đề tài",onCancel:l[0]||(l[0]=i=>o("cancel")),onSubmit:c},{default:e(()=>l[1]||(l[1]=[s("div",{class:"text-warning text-center text-xl font-weight-bold"},[s("div",null,"Toàn bộ đề tài cần duyệt lại!"),s("div",null,"Bạn chắc chắn? Hành động không thể hoàn tác.")],-1)])),_:1},8,["loading"]))}}),I={class:"d-flex flex-column flex-grow-1 h-full"},L={class:"d-flex"},M={class:"mt-2 h-[calc(100%_-_30px)] overflow-y-hidden"},at=T({__name:"reset-topic",setup(b){u(!1),u("");const m=[{title:"STT",align:"center",sortable:!1,key:"index",width:50},{title:"Giảng viên",key:"gv",width:"10%",minWidth:100},{title:"Tên đề tài",key:"ten",width:"20%",minWidth:250},{title:"Mô tả",key:"description",width:"35%",minWidth:350},{title:"Yêu cầu",key:"requirement",width:"20%",minWidth:200},{title:"Kiến thức kỹ năng",key:"knowledge",width:"15%",minWidth:150},{title:"Trạng thái",key:"status",width:"10%",minWidth:100}],p=u({page:1,rowsPerPage:100,sortBy:"-created_at",sortType:"asc"}),f=W(()=>({...p.value,filters:{viewAll:!0}}));C(),B();const{items:o,totalItems:v,isLoading:r,refetch:c,isFetching:h}=P(f);return(l,i)=>(_(),$("div",I,[i[3]||(i[3]=s("div",{class:"text-lg font-bold text-uppercase"},"Tất cả đề tài",-1)),a(q,{class:"pa-3 h-full",color:"white",variant:"flat"},{default:e(()=>[s("div",L,[a(D,{"max-width":"500",width:"50%"},{activator:e(({props:t})=>[a(y,N({color:"warning",size:"small"},t),{default:e(()=>[a(w,null,{default:e(()=>i[0]||(i[0]=[k("mdi-alert")])),_:1}),i[1]||(i[1]=s("span",null,"Reset đề tài ",-1))]),_:2},1040)]),default:e(({isActive:t})=>[a(H,{onCancel:g=>t.value=!1,onSuccess:n(c)},null,8,["onCancel","onSuccess"])]),_:1}),a(R),a(y,{color:"success",loading:n(h),size:"small",onClick:n(c)},{default:e(()=>[a(w,null,{default:e(()=>i[2]||(i[2]=[k("mdi-refresh")])),_:1})]),_:1},8,["loading","onClick"])]),s("div",M,[a(Q,{class:"h-full","fixed-header":"",headers:m,"hide-default-footer":"",items:n(o),loading:n(h)},{"item.index":e(({index:t})=>[s("span",null,d(t+1),1)]),"item.gv":e(({item:t})=>{var g,x;return[s("span",null,d((g=t.teacher)==null?void 0:g.hodem)+" "+d((x=t.teacher)==null?void 0:x.ten),1)]}),"item.status":e(({item:t})=>[t.status!="pending"?(_(),S(G,{key:0,color:n(V).statusColor(t.status),size:"small",variant:"flat"},{default:e(()=>[s("span",null,d(n(V).statusType(t.status)),1)]),_:2},1032,["color"])):z("",!0)]),_:1},8,["items","loading"])])]),_:1})]))}});export{at as default};
