import{d as C,r,Z as g,a as h,S as b,aO as B,t as d,v as p,x as t,z as n,A as a,M as u,N,K as T,X as R,T as E,L as U,y as i,R as v,W as F,B as L,V as M}from"./C5o3XgM8.js";import{u as P}from"./B7QTYSGS.js";import{V as S}from"./DSXWEGHE.js";import{V as $,a as A,b as I,c as z}from"./BkcLi0kf.js";import"./DZ_F3gcz.js";const D={class:"d-flex flex-column flex-grow-1 h-full"},H={key:0},O={class:"d-flex w-full"},j={class:"d-flex items-center"},G=["onClick"],oe=C({__name:"[id]",setup(K){r(!1);const x=r(!1),_=r(null);g({id:null,week:"",description:"",file:null});const{$api:V,$toast:W}=h();b();const k=s=>{V.reportTopic.downloadReportTopic(s.file_key).then(l=>{const e=URL.createObjectURL(new Blob([l])),o=document.createElement("a");o.href=e,o.setAttribute("download",s.file_name),document.body.appendChild(o),o.click()})},c=r([]),f=B().params.id;console.log("studentId",f);const{items:m,totalItems:Z,isLoading:q,refetch:J}=P(f),w=s=>{_.value=s,x.value=!0};return(s,l)=>(d(),p("div",D,[l[3]||(l[3]=t("div",{class:"text-lg font-bold text-uppercase"},"Báo cáo tiến độ đề tài đồ án",-1)),n(S,{class:"pa-3 h-full overflow-y-scroll",color:"white",variant:"flat"},{default:a(()=>[u(m)?(d(),p("div",H,[n($,{modelValue:u(c),"onUpdate:modelValue":l[0]||(l[0]=e=>N(c)?c.value=e:null),multiple:""},{default:a(()=>[(d(!0),p(T,null,R(u(m),(e,o)=>(d(),U(A,{key:o},{default:a(()=>[n(I,null,{default:a(()=>[t("div",O,[t("span",null,"Tuần "+i(e.week),1),n(v),t("div",null,"Nộp lúc: "+i(u(F)(new Date(e==null?void 0:e.created_at),"dd/MM/yyyy HH:mm")),1)])]),_:2},1024),n(z,null,{default:a(()=>[t("div",j,[t("div",null,[l[1]||(l[1]=L(" File báo cáo: ")),t("span",{class:"cursor-pointer underline text-blue-400",onClick:y=>k(e)},i(e.file_name),9,G)]),n(v),n(M,{color:"success",height:"20",icon:"mdi-pencil",size:"small",variant:"plain",onClick:y=>w(e)},null,8,["onClick"])]),t("div",null,[t("div",null,"Mô tả: "+i(e.description),1),l[2]||(l[2]=t("div",null,"Nhận xét của giảng viên:",-1)),t("div",null,i(e.comment),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue"])])):E("",!0)]),_:1})]))}});export{oe as default};
