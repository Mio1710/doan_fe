import{a as m,O as u,i as w,d as g,t as p,L as f,A as _,x as s,M as e,v as c,y as l,T as b}from"./CBWJHd0H.js";import{V as x}from"./B6DhimK4.js";function h(i,n){const{$api:o}=m(),t=u(["semester",i],()=>o.semester.getActiveSemester(),{refetchOnWindowFocus:!1,...n}),r=w(()=>{var a,d;return((d=(a=t.data)==null?void 0:a.value)==null?void 0:d.data)||{}});return{...t,items:r}}const v={class:"h-full d-flex"},k={key:0,class:"d-flex flex-wrap h-1/2 ma-auto"},y={class:"w-1/2 md:w-full min-w-[500px]"},V={class:"w-1/2 min-w-[500px]"},N={class:"w-1/2 min-w-[500px]"},S={class:"w-1/2 min-w-[500px]"},B={class:"w-1/2 min-w-[500px]"},C={class:"w-1/2 min-w-[500px]"},T={class:"w-1/2 min-w-[500px]"},A={class:"w-1/2 min-w-[500px]"},q={class:"w-1/2 min-w-[500px]"},O={class:"w-1/2 min-w-[500px]"},D={class:"w-1/2 min-w-[500px]"},E={class:"w-1/2 md:w-full min-w-[500px]"},K=g({__name:"semester",setup(i){const{items:n}=h();return(o,t)=>(p(),f(x,{class:"w-100 px-6 py-4"},{default:_(()=>[t[12]||(t[12]=s("div",{class:"text-lg font-bold text-uppercase"},"Thông tin học kỳ hiện tại",-1)),s("div",v,[e(n)?(p(),c("div",k,[s("div",y,[t[0]||(t[0]=s("span",{class:"font-weight-bold mr-2"},"Tên học kỳ:",-1)),s("span",null,l(e(n).ten),1)]),s("div",V,[t[1]||(t[1]=s("span",{class:"font-weight-bold mr-2"},"Ngày bắt đầu:",-1)),s("span",null,l(e(n).start_date),1)]),s("div",N,[t[2]||(t[2]=s("span",{class:"font-weight-bold mr-2"},"Ngày kết thúc:",-1)),s("span",null,l(e(n).end_date),1)]),s("div",S,[t[3]||(t[3]=s("span",{class:"font-weight-bold mr-2"},"Ngày mở đăng ký đề tài:",-1)),s("span",null,l(e(n).start_register_topic),1)]),s("div",B,[t[4]||(t[4]=s("span",{class:"font-weight-bold mr-2"},"Ngày đóng đăng ký đề tài:",-1)),s("span",null,l(e(n).end_register_topic),1)]),s("div",C,[t[5]||(t[5]=s("span",{class:"font-weight-bold mr-2"},"SV bắt đầu đăng ký đề tài:",-1)),s("span",null,l(e(n).start_publish_topic),1)]),s("div",T,[t[6]||(t[6]=s("span",{class:"font-weight-bold mr-2"},"SV kết thúc đăng ký đề tài:",-1)),s("span",null,l(e(n).end_publish_topic),1)]),s("div",A,[t[7]||(t[7]=s("span",{class:"font-weight-bold mr-2"},"SV bắt đầu đăng ký nhóm:",-1)),s("span",null,l(e(n).start_register_group),1)]),s("div",q,[t[8]||(t[8]=s("span",{class:"font-weight-bold mr-2"},"SV kết thúc đăng ký nhóm:",-1)),s("span",null,l(e(n).end_publish_topic),1)]),s("div",O,[t[9]||(t[9]=s("span",{class:"font-weight-bold mr-2"},"Bắt đầu phản biện:",-1)),s("span",null,l(e(n).start_defense),1)]),s("div",D,[t[10]||(t[10]=s("span",{class:"font-weight-bold mr-2"},"Kết thúc phản biện:",-1)),s("span",null,l(e(n).end_defense),1)]),s("div",E,[t[11]||(t[11]=s("span",{class:"font-weight-bold mr-2"},"Thông báo kết quả:",-1)),s("span",null,l(e(n).public_result),1)])])):b("",!0)])]),_:1}))}});export{K as default};
