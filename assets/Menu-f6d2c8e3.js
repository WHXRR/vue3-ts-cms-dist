import{m as v,__tla as A}from"./config-3fd8b39b.js";import{a as g,__tla as C}from"./index-81bcbc0d.js";import{d as E,j as I,aY as m,aQ as n,ab as f,c as o,bu as l,b8 as p,aa as y,a9 as M,u as c,E as h,ac as T}from"./@vue-3199b24e.js";import{_ as $,T as z}from"./@ant-design-5e74ab0d.js";import"./pinia-d1156740.js";import"./dayjs-c16566d5.js";import"./ant-design-vue-bed7d465.js";import"./@babel-727ea1f3.js";import"./@ctrl-fb5a5473.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-fad5b415.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-0b7bf9f6.js";import"./dom-align-ecb06dd6.js";import"./lodash-es-fa11e39e.js";import"./async-validator-7f96df71.js";import"./throttle-debounce-87e7e444.js";import"./vue-router-60a88f34.js";import"./axios-82afda87.js";import"./nprogress-afa1df2f.js";import"./vue-i18n-03843db8.js";import"./@intlify-f45a2def.js";let k,L=Promise.all([(()=>{try{return A}catch{}})(),(()=>{try{return C}catch{}})()]).then(async()=>{let u,d;u=T("div",{class:"options"},null,-1),d={key:0},k=E({__name:"Menu",setup(S){const i=I([]);g.getMenuList().then(t=>{i.value=t.data.list;function e(a){Array.isArray(a)?a.forEach(r=>{e(r)}):a.children?(a.key=a.id,a.children.forEach(r=>{e(r)})):a.key=a.id}e(i.value)});const b=t=>{console.log(t)};return(t,e)=>{const a=m("a-button"),r=m("a-space"),x=m("a-table");return n(),f("div",null,[u,o(x,{columns:c(v),dataSource:i.value,scroll:{x:"max-content"}},{bodyCell:l(({column:s,record:_})=>[["createAt","updateAt"].includes(s.dataIndex)?(n(),f("span",d,p(t.$filters.formatTime(_[s.dataIndex])),1)):y("",!0),["action"].includes(s.dataIndex)?(n(),M(r,{key:1,wrap:""},{default:l(()=>[o(a,{size:"small",type:"link"},{default:l(()=>[o(c($)),h(p(t.$t("form.edit")),1)]),_:1}),o(a,{size:"small",type:"link",danger:"",onClick:j=>b(_.id)},{default:l(()=>[o(c(z)),h(" "+p(t.$t("form.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)):y("",!0)]),_:1},8,["columns","dataSource"])])}}})});export{L as __tla,k as default};
