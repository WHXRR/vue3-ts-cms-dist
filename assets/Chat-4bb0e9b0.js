import{u as R}from"./vue-i18n-50aabb0e.js";import{_ as v,d as $,a as F,__tla as J}from"./index-c7da5318.js";import{d as _,s as L,r,q as M,w as N,a as y,b as C,c as i,u as n,aM as O,l as P,aY as h,ad as V,bu as c,I as Y,b8 as j,aJ as z,F as D}from"./@vue-249e6205.js";import{C as H,__tla as A}from"./CustomForm-b93cf26b.js";import"./vuedraggable-1d38634b.js";import"./echarts-50c08647.js";import{T as G,E as K}from"./@wangeditor-2dbc72d1.js";import"./@intlify-f45a2def.js";import"./pinia-b4bb1fe0.js";import"./dayjs-c16566d5.js";import"./ant-design-vue-4b8e1ea3.js";import"./@babel-727ea1f3.js";import"./@ant-design-1a91f59a.js";import"./@ctrl-fb5a5473.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-fad5b415.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-0b7bf9f6.js";import"./dom-align-ecb06dd6.js";import"./lodash-es-fa11e39e.js";import"./async-validator-7f96df71.js";import"./throttle-debounce-87e7e444.js";import"./vue-router-6d605675.js";import"./axios-82afda87.js";import"./nprogress-afa1df2f.js";import"./vue-168dcdc7.js";import"./sortablejs-471eb17c.js";import"./zrender-facebe63.js";let b,Q=Promise.all([(()=>{try{return J}catch{}})(),(()=>{try{return A}catch{}})()]).then(async()=>{const g={class:"editor-container"},S=_({__name:"Editor",props:{toolbarConfig:{},editorConfig:{},mode:{},modelValue:{},editorStyle:{}},emits:["update:modelValue"],setup(k,{emit:f}){const s=L(),o=r("");M(()=>{const t=s.value;t==null||t.destroy()});const a=t=>{s.value=t};return N(o,t=>{f("update:modelValue",t)}),(t,m)=>(y(),C("div",g,[i(n(G),{class:"toolbar",editor:s.value,defaultConfig:t.toolbarConfig,mode:t.mode},null,8,["editor","defaultConfig","mode"]),i(n(K),{style:O(t.editorStyle),modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=d=>o.value=d),defaultConfig:t.editorConfig,onOnCreated:a},null,8,["style","modelValue","defaultConfig"])]))}}),w=v(S,[["__scopeId","data-v-05a1fa2d"]]),{t:p}=$.global,I=P(()=>[{filed:"title",type:"input",name:"title",label:p("story.title"),rules:[{required:!0,message:p("story.inputTitle")}],options:{placeholder:p("story.inputTitle")}}]),U={class:"box-module-shadow editor-container"},x={class:"btn"},T=_({__name:"Chat",setup(k){const{t:f}=R(),s={placeholder:f("story.input")},o=r(""),a=r(!1),t=r(),m=r({formItems:I,formName:"story",colStyle:{sm:24},formLabelCol:{span:4},showCollapsed:!1,showResetBtn:!1}),d=r({title:""}),q=()=>{const u={title:d.value.title,content:o.value};F.addStory(u).then(()=>{t.value.reset(),a.value=!1})};return(u,e)=>{const B=h("a-button"),E=h("a-modal");return y(),C(D,null,[V("div",U,[i(n(w),{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),editorConfig:s,editorStyle:"height: calc(100vh - 300px); overflow-y: hidden"},null,8,["modelValue"])]),V("div",x,[i(B,{type:"primary",onClick:e[1]||(e[1]=l=>a.value=!0)},{default:c(()=>[Y(j(u.$t("story.add")),1)]),_:1})]),i(E,{open:a.value,"onUpdate:open":e[3]||(e[3]=l=>a.value=l),title:u.$t("story.add")},{footer:c(()=>[]),default:c(()=>[i(n(H),z(m.value,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=l=>d.value=l),onSubmit:q,ref_key:"formRef",ref:t}),null,16,["modelValue"])]),_:1},8,["open","title"])],64)}}});b=v(T,[["__scopeId","data-v-d3cdfca3"]])});export{Q as __tla,b as default};
