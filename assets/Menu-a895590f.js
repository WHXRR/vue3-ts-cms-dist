import{m as v,__tla as A}from"./config-b47c40a5.js";import{c as g,__tla as C}from"./index-65715dd7.js";import{d as E,j as I,aY as m,aQ as n,ab as f,c as o,bu as l,b8 as c,aa as y,a9 as M,u as p,E as h,ac as T}from"./@vue-3199b24e.js";import{_ as $,T as z}from"./@ant-design-5e74ab0d.js";import"./pinia-d1156740.js";import"./vue-router-60a88f34.js";import"./axios-82afda87.js";import"./nprogress-094b748c.js";import"./dayjs-4afb5e1e.js";import"./vue-i18n-03843db8.js";import"./@intlify-f45a2def.js";import"./ant-design-vue-6c92f453.js";import"./@babel-727ea1f3.js";import"./@ctrl-fb5a5473.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-fad5b415.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-0b7bf9f6.js";import"./dom-align-ecb06dd6.js";import"./lodash-es-fa11e39e.js";import"./async-validator-7f96df71.js";import"./throttle-debounce-87e7e444.js";let k,L=Promise.all([(()=>{try{return A}catch{}})(),(()=>{try{return C}catch{}})()]).then(async()=>{let u,d;u=T("div",{class:"options"},null,-1),d={key:0},k=E({__name:"Menu",setup(S){const i=I([]);g.getMenuList().then(a=>{i.value=a.data.list;function e(t){Array.isArray(t)?t.forEach(r=>{e(r)}):t.children?(t.key=t.id,t.children.forEach(r=>{e(r)})):t.key=t.id}e(i.value)});const b=a=>{console.log(a)};return(a,e)=>{const t=m("a-button"),r=m("a-space"),x=m("a-table");return n(),f("div",null,[u,o(x,{columns:p(v),dataSource:i.value,scroll:{x:"max-content"}},{bodyCell:l(({column:s,record:_})=>[["createAt","updateAt"].includes(s.dataIndex)?(n(),f("span",d,c(a.$filters.formatTime(_[s.dataIndex])),1)):y("",!0),["action"].includes(s.dataIndex)?(n(),M(r,{key:1,wrap:""},{default:l(()=>[o(t,{size:"small",type:"link"},{default:l(()=>[o(p($)),h(c(a.$t("form.edit")),1)]),_:1}),o(t,{size:"small",type:"link",danger:"",onClick:j=>b(_.id)},{default:l(()=>[o(p(z)),h(" "+c(a.$t("form.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)):y("",!0)]),_:1},8,["columns","dataSource"])])}}})});export{L as __tla,k as default};