import{d as I,c as h,__tla as b}from"./index-c7da5318.js";import{l}from"./@vue-249e6205.js";let o,d,m,c,p,f,u,s,A=Promise.all([(()=>{try{return b}catch{}})()]).then(async()=>{let e;({t:e}=I.global),p=l(()=>[{title:"#",width:40,dataIndex:"index",align:"center"},{title:e("form.name"),dataIndex:"name",align:"center"},{title:e("form.realname"),dataIndex:"realname",align:"center"},{title:e("form.cellphone"),dataIndex:"cellphone",align:"center"},{title:e("form.enable"),dataIndex:"enable",align:"center"},{title:e("form.createAt"),dataIndex:"createAt",align:"center"},{title:e("form.updateAt"),dataIndex:"updateAt",align:"center"},{title:e("form.action"),dataIndex:"action",align:"center"}]),d=l(()=>[{title:"#",width:40,dataIndex:"index",align:"center"},{title:e("form.name"),dataIndex:"name",align:"center"},{title:e("form.intro"),dataIndex:"intro",align:"center"},{title:e("form.createAt"),dataIndex:"createAt",align:"center"},{title:e("form.updateAt"),dataIndex:"updateAt",align:"center"},{title:e("form.action"),dataIndex:"action",align:"center"}]),c=l(()=>[{title:"#",width:40,dataIndex:"index",align:"center"},{title:e("form.name"),dataIndex:"name",align:"center"},{title:e("form.leader"),dataIndex:"leader",align:"center"},{title:e("form.createAt"),dataIndex:"createAt",align:"center"},{title:e("form.updateAt"),dataIndex:"updateAt",align:"center"},{title:e("form.action"),dataIndex:"action",align:"center"}]),f=l(()=>[{title:e("menu.menuName"),dataIndex:"name",align:"center"},{title:e("menu.type"),dataIndex:"type",align:"center"},{title:e("menu.url"),dataIndex:"url",align:"center"},{title:e("menu.icon"),dataIndex:"icon",align:"center"},{title:e("menu.createAt"),dataIndex:"createAt",align:"center"},{title:e("menu.updateAt"),dataIndex:"updateAt",align:"center"},{title:e("menu.permission"),dataIndex:"permission",align:"center"},{title:e("menu.action"),dataIndex:"action",align:"center"}]),m=l(()=>[{filed:"name",type:"input",name:"name",label:e("form.name"),options:{placeholder:e("form.inputName")}},{filed:"realname",type:"input",name:"realname",label:e("form.realname"),options:{placeholder:e("form.inputRealname")}},{filed:"cellphone",type:"input",name:"cellphone",label:e("form.cellphone"),options:{placeholder:e("form.inputCellphone")}},{filed:"enable",type:"select",name:"enable",label:e("form.enable"),options:{placeholder:e("form.inputSelectEnable"),options:[{value:1,label:e("form.start")},{value:0,label:e("form.disable")}]}}]),u=l(()=>[{filed:"name",type:"input",name:"name",label:e("form.name"),options:{placeholder:e("form.inputName")}},{filed:"intro",type:"input",name:"intro",label:e("form.intro"),options:{placeholder:e("form.inputIntro")}}]),o=function(i){const n=[];function a(r){for(const t of r)t.children?a(t.children):n.push(t.id)}return a(i),n};function x(i){const n=[],a=r=>{r.forEach(t=>{t.type===1||t.type===2?a(t.children??[]):t.type===3&&n.push(t.permission)})};return a(i),n}s=function(i,n){const a=h(),r=x(a.userMenus),t=`system:${i}:${n}`;return!!r.find(g=>g===t)}});export{A as __tla,o as a,d as b,m as c,c as d,p as e,f as m,u as r,s as u};
