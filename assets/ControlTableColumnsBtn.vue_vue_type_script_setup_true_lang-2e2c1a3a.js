import{d as w,r as p,w as b,l as N,aY as d,a as z,ab as S,bu as a,c as l,u,ad as o,I as T,b8 as L,E as O}from"./@vue-249e6205.js";import{d as M}from"./vuedraggable-b7d04458.js";import{k as J,aj as B,ak as A}from"./@ant-design-1a91f59a.js";const I=o("svg",{t:"1694502244408",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3997",width:"1em",height:"1em"},[o("path",{d:"M263.744 377.344a32 32 0 0 1 3.712 40.832l-3.712 4.48-90.496 90.496 90.88 90.88a32 32 0 0 1 3.648 40.768l-3.648 4.48a32 32 0 0 1-40.832 3.648l-4.48-3.712-113.472-113.472a32 32 0 0 1-3.648-40.832l3.648-4.416 113.152-113.152a32 32 0 0 1 45.248 0zM761.792 649.216a32 32 0 0 1-3.712-40.832l3.712-4.416 90.496-90.496-90.88-90.88a32 32 0 0 1-3.648-40.768l3.712-4.48a32 32 0 0 1 40.768-3.648l4.48 3.648 113.472 113.472a32 32 0 0 1 3.648 40.832l-3.648 4.48-113.152 113.088a32 32 0 0 1-45.248 0z",fill:"#999999","p-id":"3998"}),o("path",{d:"M192 544a32 32 0 0 1-5.76-63.488L192 480h640a32 32 0 0 1 5.76 63.488L832 544H192z",fill:"#999999","p-id":"3999"}),o("path",{d:"M647.936 262.72a32 32 0 0 1-40.832 3.648l-4.48-3.648L512.256 172.16l-90.88 90.88a32 32 0 0 1-40.832 3.712l-4.416-3.712a32 32 0 0 1-3.712-40.832l3.712-4.48L489.6 104.32a32 32 0 0 1 40.832-3.712l4.48 3.712 113.088 113.152a32 32 0 0 1 0 45.248zM376.064 760.704a32 32 0 0 1 40.832-3.712l4.48 3.712L511.744 851.2l90.88-90.88a32 32 0 0 1 40.832-3.648l4.416 3.712a32 32 0 0 1 3.712 40.832l-3.712 4.416L534.4 919.04a32 32 0 0 1-40.832 3.712l-4.48-3.712-113.088-113.152a32 32 0 0 1 0-45.248z",fill:"#999999","p-id":"4000"}),o("path",{d:"M481.28 190.912a32 32 0 0 1 63.488-5.76l0.512 5.76v640a32 32 0 0 1-63.488 5.76l-0.512-5.76v-640z",fill:"#999999","p-id":"4001"})],-1),U={style:{"text-align":"center"}},V=w({__name:"ControlTableColumnsBtn",props:{columns:{type:Array,required:!0},tableColumns:{type:Array,required:!0},initTableColumns:{type:Array,default:()=>[]}},emits:["update:tableColumns","update:initTableColumns"],setup(v,{emit:m}){const r=v,f=p(!1),s=p([]);b(()=>r.columns,t=>{if(r.initTableColumns.length){const e=JSON.parse(JSON.stringify(r.initTableColumns));s.value=e.map((i,c)=>({...i,title:t[c].title}))}else s.value=JSON.parse(JSON.stringify(t)).map(e=>({...e,checked:!0}))},{immediate:!0}),b(()=>s.value,t=>{const e=t.filter(i=>i.checked);m("update:tableColumns",e),m("update:initTableColumns",t)},{immediate:!0,deep:!0});const h=N(()=>s.value.filter(t=>t.checked).length),k=()=>{s.value=JSON.parse(JSON.stringify(r.columns)).map(t=>({...t,checked:!0}))},_=p(!1);return(t,e)=>{const i=d("a-button"),c=d("a-checkbox"),g=d("a-menu-item"),y=d("a-menu"),C=d("a-dropdown");return z(),S(C,{trigger:"click",open:f.value,"onUpdate:open":e[3]||(e[3]=n=>f.value=n)},{overlay:a(()=>[l(y,{class:"table-column-menu"},{default:a(()=>[l(u(M),{list:s.value,"item-key":"dataIndex",onStart:e[1]||(e[1]=n=>_.value=!0),onEnd:e[2]||(e[2]=n=>_.value=!1)},{item:a(({element:n})=>[o("div",null,[l(g,null,{default:a(()=>[l(c,{checked:n.checked,"onUpdate:checked":x=>n.checked=x,disabled:n.checked&&h.value===1},{default:a(()=>[T(L(n.title),1)]),_:2},1032,["checked","onUpdate:checked","disabled"]),l(u(J),{style:{fontSize:"15px",paddingLeft:"5px"}},{component:a(()=>[I]),_:1})]),_:2},1024)])]),_:1},8,["list"]),o("div",U,[l(i,{type:"text",size:"small",onClick:k},{default:a(()=>[l(u(B))]),_:1})])]),_:1})]),default:a(()=>[o("a",{class:"ant-dropdown-link",onClick:e[0]||(e[0]=O(()=>{},["prevent"]))},[l(i,{type:"primary",size:"small"},{default:a(()=>[l(u(A))]),_:1})])]),_:1},8,["open"])}}});export{V as _};
