import{i as A,c as C,__tla as P}from"./index-65715dd7.js";import{e as $,d as G,j as _,r as V,aY as p,aQ as r,ab as n,ac as E,c as u,u as b,bu as L,F as T,E as j,b8 as f,aa as o,a9 as B}from"./@vue-3199b24e.js";import{_ as F}from"./ControlTableColumnsBtn.vue_vue_type_script_setup_true_lang-27d9ac7d.js";import"./pinia-d1156740.js";import"./vue-router-60a88f34.js";import"./axios-82afda87.js";import"./nprogress-094b748c.js";import"./dayjs-4afb5e1e.js";import"./vue-i18n-03843db8.js";import"./@intlify-f45a2def.js";import"./ant-design-vue-6c92f453.js";import"./@babel-727ea1f3.js";import"./@ant-design-5e74ab0d.js";import"./@ctrl-fb5a5473.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-fad5b415.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-0b7bf9f6.js";import"./dom-align-ecb06dd6.js";import"./lodash-es-fa11e39e.js";import"./async-validator-7f96df71.js";import"./throttle-debounce-87e7e444.js";import"./vuedraggable-9285061a.js";import"./vue-e23d694b.js";import"./sortablejs-0a721ca7.js";let w,N=Promise.all([(()=>{try{return P}catch{}})()]).then(async()=>{let e,m,g,h,x;({t:e}=A.global),m=$(()=>[{title:"#",width:40,dataIndex:"index",align:"center"},{title:e("product.imgUrl"),dataIndex:"imgUrl",width:120,align:"center"},{title:e("product.name"),dataIndex:"name",align:"center",ellipsis:!0},{title:e("product.address"),dataIndex:"address",align:"center",ellipsis:!0},{title:e("product.oldPrice"),dataIndex:"oldPrice",width:90,align:"center"},{title:e("product.newPrice"),dataIndex:"newPrice",width:90,align:"center"},{title:e("product.enable"),dataIndex:"status",width:100,align:"center"},{title:e("product.createAt"),dataIndex:"createAt",align:"center"},{title:e("product.updateAt"),dataIndex:"updateAt",align:"center"}]),g={class:"options"},h={key:2},x={key:3},w=G({__name:"Goods",setup(Q){const k=_([]),c=_([]),t=V({total:0,current:1,pageSize:10}),I=()=>{C.getGoodsList({offset:t.pageSize*t.current-t.pageSize,size:t.pageSize}).then(a=>{const{list:d,totalCount:s}=a.data;k.value=d,t.total=s})},S=a=>{t.current=a.current,t.pageSize=a.pageSize,I()};return I(),(a,d)=>{const s=p("a-image"),v=p("a-switch"),y=p("a-table");return r(),n("div",null,[E("div",g,[u(b(F),{columns:b(m),tableColumns:c.value,"onUpdate:tableColumns":d[0]||(d[0]=i=>c.value=i)},null,8,["columns","tableColumns"])]),u(y,{columns:c.value,dataSource:k.value,pagination:t,onChange:S},{bodyCell:L(({column:i,record:l,index:z})=>[i.dataIndex==="index"?(r(),n(T,{key:0},[j(f(z+1),1)],64)):o("",!0),i.dataIndex==="imgUrl"?(r(),B(s,{key:1,width:80,src:l.imgUrl},null,8,["src"])):o("",!0),i.dataIndex==="status"?(r(),n("span",h,[u(v,{"checked-children":a.$t("form.start"),"un-checked-children":a.$t("form.disable"),checkedValue:1,unCheckedValue:0,checked:l.status,"onUpdate:checked":U=>l.status=U},null,8,["checked-children","un-checked-children","checked","onUpdate:checked"])])):o("",!0),["createAt","updateAt"].includes(i.dataIndex)?(r(),n("span",x,f(a.$filters.formatTime(l[i.dataIndex])),1)):o("",!0)]),_:1},8,["columns","dataSource","pagination"])])}}})});export{N as __tla,w as default};
