import{a as l,O as c,i as p}from"./BVcfHsMq.js";import{P as d}from"./DZ_F3gcz.js";import{s as y}from"./40oRFHCv.js";function P(e,s){const{$api:r}=l();console.log("params in useQuery",e);const o=c(["student-report-topic",e],()=>{const{sortBy:t,sortType:n}=e.value,a=y(t,n);console.log("params in useQuery",e,e.value);const i=new d({includes:[],appends:[],fields:{},filters:{},sorts:a,page:e.value.page,limit:e.value.rowsPerPage,payload:null,...e.value}).query();return r.teacher.getStudentReportTopics(i)},{refetchOnWindowFocus:!1,...s}),u=p(()=>{var t;return((t=o.data.value)==null?void 0:t.data)||{}});return{...o,items:u}}export{P as u};
