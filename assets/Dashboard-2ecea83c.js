import{u as k}from"./vue-i18n-03843db8.js";import{c as I,a as z,_ as E,__tla as B}from"./index-aa1a8b97.js";import{i as S}from"./echarts-208ccf2f.js";import{d as p,j as m,e as h,w as f,o as T,aQ as u,ab as d,ac as v,aL as L,c as l,aY as g,bu as _}from"./@vue-3199b24e.js";import"./@intlify-f45a2def.js";import"./pinia-d1156740.js";import"./dayjs-c16566d5.js";import"./ant-design-vue-bed7d465.js";import"./@babel-727ea1f3.js";import"./@ant-design-5e74ab0d.js";import"./@ctrl-fb5a5473.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-fad5b415.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-0b7bf9f6.js";import"./dom-align-ecb06dd6.js";import"./lodash-es-fa11e39e.js";import"./async-validator-7f96df71.js";import"./throttle-debounce-87e7e444.js";import"./vue-router-60a88f34.js";import"./axios-82afda87.js";import"./nprogress-afa1df2f.js";import"./zrender-ea67a29b.js";let y,j=Promise.all([(()=>{try{return B}catch{}})()]).then(async()=>{function c(i,s="light"){const e=S(i,s),a=o=>{e.setOption(o)},t=()=>{e.resize()};return window.addEventListener("resize",t),{echartsInstance:e,setOption:a,updateSize:t}}const C=p({__name:"BaseECharts",props:{width:{default:"100%"},height:{default:"300px"},options:{}},setup(i){const s=i,e=I(),a=m(),t=m(),o=h(()=>e.systemTheme==="light"?"#ffffff":"#1b1c21");return f(()=>e.systemTheme,r=>{t.value.dispose();const{echartsInstance:n,setOption:O}=c(a.value,r);t.value=n,O({...s.options,backgroundColor:o.value})}),T(()=>{const{echartsInstance:r,setOption:n}=c(a.value,e.systemTheme);t.value=r,n({...s.options,backgroundColor:o.value})}),f(()=>s.options,r=>{t.value.setOption({...r,backgroundColor:o.value})},{deep:!0}),(r,n)=>(u(),d("div",null,[v("div",{class:"echarts-item",ref_key:"baseECharts",ref:a,style:L({width:r.width,height:r.height})},null,4)]))}}),w=p({__name:"CategoryCount",setup(i){const{t:s}=k(),e=m([]),a=h(()=>({title:{text:s("analysis.categoryCount"),left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:e.value,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}));return z.getCategoryCount().then(t=>{e.value=t.data.map(o=>({value:o.goodsCount,name:o.name}))}),(t,o)=>(u(),d("div",null,[l(C,{options:a.value,height:"200px"},null,8,["options"])]))}}),b={class:"box-module-shadow echarts-item"},x=p({__name:"Dashboard",setup(i){return(s,e)=>{const a=g("a-col"),t=g("a-row");return u(),d("div",null,[l(t,{gutter:[10,10]},{default:_(()=>[l(a,{xs:24,sm:12,xl:8,xxl:6,span:6},{default:_(()=>[v("div",b,[l(w)])]),_:1})]),_:1})])}}});y=E(x,[["__scopeId","data-v-af2d87e2"]])});export{j as __tla,y as default};