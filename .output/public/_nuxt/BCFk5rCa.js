import{d as V,$ as b,a as f,S as g,t as S,L as k,A as q,z as u,M as l}from"./BVcfHsMq.js";import{_ as T}from"./Dy0xatEG.js";import{_ as i}from"./Onl3lASy.js";const v=V({__name:"CreateTopic",props:{item:{type:Object,default:()=>({ten:"",description:"",requirement:"",knowledge:"",numberStudent:4})}},emits:["cancel","success"],setup(m,{emit:r}){const o=m,t=b({ten:o.item.ten,description:o.item.description,requirement:o.item.requirement,knowledge:o.item.knowledge,numberStudent:o.item.numberStudent}),{$api:s,$toast:d}=f(),a=r,p=g(),c=()=>{s.topic.createTopic(t).then(()=>{d.success("Tạo đề tài thành công"),p.invalidateQueries("topic"),a("success"),a("cancel")})};return(w,e)=>(S(),k(T,{"can-cancel":"","cancel-text":"Hủy",title:"Tạo đề tài",onCancel:e[5]||(e[5]=n=>a("cancel")),onSubmit:c},{default:q(()=>[u(i,{modelValue:l(t).ten,"onUpdate:modelValue":e[0]||(e[0]=n=>l(t).ten=n),label:"Tên đề tài",name:"Tên đề tài",rules:"required"},null,8,["modelValue"]),u(i,{modelValue:l(t).description,"onUpdate:modelValue":e[1]||(e[1]=n=>l(t).description=n),label:"Mô tả",name:"Mô tả",type:"textarea"},null,8,["modelValue"]),u(i,{modelValue:l(t).requirement,"onUpdate:modelValue":e[2]||(e[2]=n=>l(t).requirement=n),label:"Yêu cầu",name:"Yêu cầu"},null,8,["modelValue"]),u(i,{modelValue:l(t).knowledge,"onUpdate:modelValue":e[3]||(e[3]=n=>l(t).knowledge=n),label:"Kiến thức kỹ năng",name:"Kiến thức kỹ năng"},null,8,["modelValue"]),u(i,{modelValue:l(t).numberStudent,"onUpdate:modelValue":e[4]||(e[4]=n=>l(t).numberStudent=n),label:"Số lượng sinh viên",name:"Số lượng sinh viên",rules:"required"},null,8,["modelValue"])]),_:1}))}});export{v as _};
