import{_ as v}from"./DVzIeaiQ.js";import{a as x,O as g,i as p,d as y,t as w,L as T,A as u,z as b,B as V,y as d,M as m,x as h}from"./CxV_Dxxn.js";import{V as W}from"./tDQ8zurw.js";function B(e,t){const{$api:r}=x(),a=g(["student-result-topic-los",e],()=>r.results.getMyResultTopic(),{refetchOnWindowFocus:!1,...t}),n=p(()=>{var i;return((i=a.data.value)==null?void 0:i.data)||[]});return{...a,items:n}}const M={class:"text-center font-weight-bold text-error py-2"},q=y({__name:"MyResultDetail",props:{item:{type:Object,required:!0}},setup(e){const{items:t,isLoading:r,error:a,refetch:n}=B(),i=[{title:"STT",align:"center",sortable:!1,value:"index",width:20},{title:"Tiêu chí đánh giá",value:"main_criteria",width:"50%",minWidth:500},{title:"Tiêu chí phụ",value:"sub_criteria",width:"30%",minWidth:100},{title:"Hệ số",value:"cof",width:"7%",minWidth:50},{title:"Điểm",value:"score",width:"7%",minWidth:50}],f=p(()=>t.value.reduce((o,s)=>o+s.score*s.cof,0));return(o,s)=>{var c,l;return w(),T(v,{"can-cancel":"","cancel-text":"Đóng","hide-submit":"",title:`Điểm quá trình của sinh viên: ${(c=e.item)==null?void 0:c.hodem} ${(l=e.item)==null?void 0:l.ten}`},{default:u(()=>[b(W,{class:"elevation-1",headers:i,"hide-default-footer":"",hover:"",items:m(t),"items-per-page":100},{"item.index":u(({index:_})=>[V(d(_+1),1)]),_:1},8,["items"]),h("div",M,[h("span",null,"Điểm tổng: "+d(m(f)/10),1)])]),_:1},8,["title"])}}});export{q as _};
