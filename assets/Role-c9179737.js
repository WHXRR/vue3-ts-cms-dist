import{r as A,__tla as R}from"./config-2295c712.js";import{c as T,__tla as V}from"./index-0a0c032b.js";import{_ as E}from"./ControlTableColumnsBtn.vue_vue_type_script_setup_true_lang-27d9ac7d.js";import{d as F,j as C,r as L,aY as i,aQ as r,ab as c,ac as j,c as o,u as s,bu as m,F as B,E as _,b8 as d,aa as p,a9 as D}from"./@vue-3199b24e.js";import{_ as N,T as P}from"./@ant-design-5e74ab0d.js";import"./pinia-d1156740.js";import"./vue-router-60a88f34.js";import"./axios-82afda87.js";import"./nprogress-094b748c.js";import"./dayjs-4afb5e1e.js";import"./vue-i18n-03843db8.js";import"./@intlify-f45a2def.js";import"./ant-design-vue-6c92f453.js";import"./@babel-727ea1f3.js";import"./@ctrl-fb5a5473.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-fad5b415.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-0b7bf9f6.js";import"./dom-align-ecb06dd6.js";import"./lodash-es-fa11e39e.js";import"./async-validator-7f96df71.js";import"./throttle-debounce-87e7e444.js";import"./vuedraggable-9285061a.js";import"./vue-e23d694b.js";import"./sortablejs-0a721ca7.js";let S,Q=Promise.all([(()=>{try{return R}catch{}})(),(()=>{try{return V}catch{}})()]).then(async()=>{let k,f,b;k={class:"options"},f={key:1},b={key:2},S=F({__name:"Role",setup(Y){const g=C([]),u=C([]),t=L({total:0,current:1,pageSize:10}),y=()=>{T.getRoleList({offset:t.pageSize*t.current-t.pageSize,size:t.pageSize}).then(e=>{const{list:l,totalCount:h}=e.data;g.value=l,t.total=h})},v=e=>{t.current=e.current,t.pageSize=e.pageSize,y()};y();const I=e=>{console.log(e)};return(e,l)=>{const h=i("a-switch"),x=i("a-button"),$=i("a-space"),U=i("a-table");return r(),c("div",null,[j("div",k,[o(s(E),{columns:s(A),tableColumns:u.value,"onUpdate:tableColumns":l[0]||(l[0]=a=>u.value=a)},null,8,["columns","tableColumns"])]),o(U,{columns:u.value,dataSource:g.value,pagination:t,scroll:{x:"max-content"},onChange:v},{bodyCell:m(({column:a,record:n,index:w})=>[a.dataIndex==="index"?(r(),c(B,{key:0},[_(d(w+1),1)],64)):p("",!0),a.dataIndex==="enable"?(r(),c("span",f,[o(h,{"checked-children":e.$t("form.start"),"un-checked-children":e.$t("form.disable"),checkedValue:1,unCheckedValue:0,checked:n.enable,"onUpdate:checked":z=>n.enable=z},null,8,["checked-children","un-checked-children","checked","onUpdate:checked"])])):p("",!0),["createAt","updateAt"].includes(a.dataIndex)?(r(),c("span",b,d(e.$filters.formatTime(n[a.dataIndex])),1)):p("",!0),["action"].includes(a.dataIndex)?(r(),D($,{key:3,wrap:""},{default:m(()=>[o(x,{size:"small",type:"link"},{default:m(()=>[o(s(N)),_(d(e.$t("form.edit")),1)]),_:1}),o(x,{size:"small",type:"link",danger:"",onClick:z=>I(n.id)},{default:m(()=>[o(s(P)),_(" "+d(e.$t("form.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)):p("",!0)]),_:1},8,["columns","dataSource","pagination"])])}}})});export{Q as __tla,S as default};
