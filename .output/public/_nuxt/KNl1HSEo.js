import{_ as k}from"./j6ZzVBk1.js";import{_ as w}from"./Onl3lASy.js";import{d as g,Z as C,a as S,$ as b,r as $,t as n,L as c,A as v,x as e,z as d,y as a,M as t,v as r,T as B,V as p}from"./BVcfHsMq.js";import{V as A,b as N,c as P}from"./By37Y22m.js";const U={class:"w-1/2 min-w-[500px] m-auto d-flex flex-column gap-4 justify-center h-full"},z={class:"text-center w-full"},E={class:"d-flex"},L={key:0,class:"d-flex"},T={class:"d-flex"},j={class:"d-flex align-center"},D={class:"d-flex items-center"},H={key:0,class:"mr-2"},I={key:3,class:"d-flex mb-4"},G=g({__name:"profile",setup(J){const{data:o,getSession:x}=C(),{$toast:u,$api:h}=S(),l=b({std:null}),_=()=>{i.value=!0,l.std=o.value.phone},i=$(!1),y=async()=>{/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(l.std)?(h.auth.updateProfile({phone:l.std}),await x(),window.location.reload(),u.success("Cập nhật số điện thoại thành công"),i.value=!1):u.error("Số điện thoại không hợp lệ")};return(V,s)=>(n(),c(A,{class:"w-100 px-6 py-4"},{default:v(()=>{var m;return[s[6]||(s[6]=e("div",{class:"text-lg font-bold text-uppercase"},"Thông tin cá nhân",-1)),e("div",U,[e("div",z,[d(P,{size:"100"},{default:v(()=>[d(N,{alt:"John",src:k})]),_:1})]),e("div",E,[s[2]||(s[2]=e("div",{class:"w-[200px]"},"Họ và tên:",-1)),e("div",null,a(t(o).hodem)+" "+a(t(o).ten),1)]),(m=t(o))!=null&&m.roles.includes("student")?(n(),r("div",L,[s[3]||(s[3]=e("div",{class:"w-[200px]"},"Lớp:",-1)),e("div",null,a(t(o).lop),1)])):B("",!0),e("div",T,[s[4]||(s[4]=e("div",{class:"w-[200px]"},"Email:",-1)),e("div",null,a(t(o).email),1)]),e("div",j,[s[5]||(s[5]=e("div",{class:"w-[200px]"},"Số điện thoại liên hệ:",-1)),e("div",D,[t(i)?(n(),c(w,{key:1,modelValue:t(l).std,"onUpdate:modelValue":s[0]||(s[0]=f=>t(l).std=f),class:"w-[200px] mr-2",label:"Số điện thoại",name:"Số điện thoại",type:"number"},null,8,["modelValue"])):(n(),r("div",H,a(t(o).phone),1)),t(i)?(n(),r("div",I,[d(p,{class:"mr-2",color:"error",density:"compact",icon:"mdi-close",variant:"outlined",onClick:s[1]||(s[1]=f=>i.value=!1)}),d(p,{color:"success",density:"compact",icon:"mdi-content-save-check",variant:"outlined",onClick:y})])):(n(),c(p,{key:2,color:"success",density:"compact",icon:"mdi-pencil",variant:"outlined",onClick:_}))])])])]}),_:1}))}});export{G as default};
