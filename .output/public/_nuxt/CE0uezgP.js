import{a as p,O as f,i as n}from"./RwtOmVP5.js";import{P as m,_ as i}from"./DZ_F3gcz.js";function v(e,r){return e?Array.isArray(e)?i.map(i.zip(e,r),([s,a])=>a==="desc"?`-${s}`:s):[r==="desc"?`-${e}`:e]:[]}function h(e,r){const{$api:s}=p(),a=f(["teacher",e],()=>{const{sortBy:t,sortType:u}=e.value,l=v(t,u),d=new m({includes:[],appends:[],fields:{},filters:{},sorts:l,page:e.value.page,limit:e.value.rowsPerPage,payload:null,...e.value}).query();return s.admin.getTeachers(d)},{refetchOnWindowFocus:!1,...r}),o=n(()=>{var t;return((t=a.data.value)==null?void 0:t.data)||[]}),c=n(()=>{var t,u;return((u=(t=a.data.value)==null?void 0:t.pagination)==null?void 0:u.total)||0});return{...a,items:o,totalItems:c}}export{h as u};
