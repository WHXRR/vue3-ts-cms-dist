import{u as k,m as C,__tla as $}from"./usePermissions-d4a90d82.js";import{a as E,__tla as M}from"./index-5bb4b2fa.js";import{d as T,r as z,aY as d,a as e,b as h,c as u,bu as l,b8 as c,ac as s,ab as p,u as o,I as b,ad as L}from"./@vue-249e6205.js";import{_ as S,T as w}from"./@ant-design-1a91f59a.js";import"./pinia-b4bb1fe0.js";import"./dayjs-5f4ee36c.js";import"./ant-design-vue-935c8d6a.js";import"./@babel-727ea1f3.js";import"./@ctrl-fb5a5473.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-fad5b415.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-0b7bf9f6.js";import"./dom-align-ecb06dd6.js";import"./lodash-es-fa11e39e.js";import"./async-validator-7f96df71.js";import"./throttle-debounce-87e7e444.js";import"./vue-router-6d605675.js";import"./axios-82afda87.js";import"./nprogress-5dddbdfe.js";import"./vue-i18n-50aabb0e.js";import"./@intlify-f45a2def.js";let x,B=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return M}catch{}})()]).then(async()=>{let _,f;_=L("div",{class:"options"},null,-1),f={key:0},x=T({__name:"Menu",setup(N){const m=z([]);E.getMenuList().then(a=>{m.value=a.data.list;function i(t){Array.isArray(t)?t.forEach(r=>{i(r)}):t.children?(t.key=t.id,t.children.forEach(r=>{i(r)})):t.key=t.id}i(m.value)});const v=a=>{console.log(a)},A=k("users","update"),I=k("users","delete");return(a,i)=>{const t=d("a-button"),r=d("a-space"),g=d("a-table");return e(),h("div",null,[_,u(g,{columns:o(C),dataSource:m.value,scroll:{x:"max-content"}},{bodyCell:l(({column:n,record:y})=>[["createAt","updateAt"].includes(n.dataIndex)?(e(),h("span",f,c(a.$filters.formatTime(y[n.dataIndex])),1)):s("",!0),["action"].includes(n.dataIndex)?(e(),p(r,{key:1,wrap:""},{default:l(()=>[o(A)?(e(),p(t,{key:0,size:"small",type:"link"},{default:l(()=>[u(o(S)),b(c(a.$t("form.edit")),1)]),_:1})):s("",!0),o(I)?(e(),p(t,{key:1,size:"small",type:"link",danger:"",onClick:P=>v(y.id)},{default:l(()=>[u(o(w)),b(" "+c(a.$t("form.delete")),1)]),_:2},1032,["onClick"])):s("",!0)]),_:2},1024)):s("",!0)]),_:1},8,["columns","dataSource"])])}}})});export{B as __tla,x as default};
