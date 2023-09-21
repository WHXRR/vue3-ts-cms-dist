import{d as M,j as z,w as ee,o as le,aY as s,aQ as t,ab as I,ac as V,c as p,bu as i,F as ae,aX as te,a9 as n,aI as d,aa as u,E as g,b8 as _,N as oe,q as D,z as F,u as k,aL as H,e as E}from"./@vue-3199b24e.js";import{d as se,_ as re,b as me,i as ne,__tla as ue}from"./index-9a0b135b.js";import{D as ie,U as pe}from"./@ant-design-5e74ab0d.js";import"./ControlTableColumnsBtn.vue_vue_type_script_setup_true_lang-b5ef20a1.js";let Q,X,Y,de=Promise.all([(()=>{try{return ue}catch{}})()]).then(async()=>{let S,N,R,j,L,w,e;S={class:"custom-form"},N={class:"form-container"},R={class:"form-btns"},j={key:0,style:{"text-align":"right","padding-top":"10px"}},L=M({__name:"CustomForm",props:{modelValue:{type:Object,required:!0},formName:{type:String,required:!0},formItems:{type:Object,default:()=>{},required:!0},colStyle:{type:Object,default:()=>({xs:24,sm:12,md:12,lg:8,xl:6,xxl:4})},formLabelCol:{type:Object,default:()=>({sm:{span:5},xxl:{span:8}})},submitBtnText:{type:String,default:""},showSubmitBtn:{type:Boolean,default:!0},showResetBtn:{type:Boolean,default:!0},fixed:{type:Boolean,default:!1},showCollapsed:{type:Boolean,default:!0}},emits:["update:modelValue","submit","reset"],setup(r,{expose:A,emit:x}){const $=r,O=se(),C=z(),a=z({...$.modelValue});ee(()=>a.value,o=>{x("update:modelValue",o)},{deep:!0});const P=()=>{C.value.validate().then(()=>{x("submit")})},T=()=>{C.value.resetFields(),x("reset")},f=z(!1),q=()=>{var y,v,h;const o=(y=document.querySelector(".form-col .ant-form-item"))==null?void 0:y.clientHeight,B=document.querySelector(".form-container"),c=(v=document.querySelector(".form"))==null?void 0:v.clientHeight,U=((h=document.querySelector(".form-btns"))==null?void 0:h.clientHeight)||0;f.value&&o&&c?(f.value=!1,B.style.height=c+U+"px"):(f.value=!0,B.style.height=o+"px")};return le(()=>{$.showCollapsed&&q()}),A({submit:P,reset:T}),(o,B)=>{const c=s("a-input"),U=s("a-input-password"),y=s("a-select"),v=s("a-radio-group"),h=s("a-range-picker"),G=s("a-form-item"),J=s("a-col"),K=s("a-row"),W=s("a-form"),b=s("a-button");return t(),I("div",S,[V("div",N,[p(W,{class:"form",name:r.formName,autocomplete:"off",model:a.value,ref_key:"formRef",ref:C},{default:i(()=>[p(K,null,{default:i(()=>[(t(!0),I(ae,null,te(r.formItems,(l,Z)=>(t(),n(J,d({class:"form-col"},r.colStyle,{key:Z}),{default:i(()=>[l.hidden?u("",!0):(t(),n(G,{key:0,label:l.label,name:l.name,rules:l.rules,labelCol:r.formLabelCol},{default:i(()=>[l.type==="input"?(t(),n(c,d({key:0,size:"small"},l.options,{value:a.value[l.filed],"onUpdate:value":m=>a.value[l.filed]=m}),null,16,["value","onUpdate:value"])):u("",!0),l.type==="password"?(t(),n(U,d({key:1,size:"small"},l.options,{value:a.value[l.filed],"onUpdate:value":m=>a.value[l.filed]=m}),null,16,["value","onUpdate:value"])):u("",!0),l.type==="select"?(t(),n(y,d({key:2,size:"small"},l.options,{value:a.value[l.filed],"onUpdate:value":m=>a.value[l.filed]=m}),null,16,["value","onUpdate:value"])):u("",!0),l.type==="radio"?(t(),n(v,d({key:3,size:"small"},l.options,{value:a.value[l.filed],"onUpdate:value":m=>a.value[l.filed]=m}),null,16,["value","onUpdate:value"])):u("",!0),l.type==="datePicker"?(t(),n(h,d({key:4,size:"small"},l.options,{value:a.value[l.filed],"onUpdate:value":m=>a.value[l.filed]=m}),null,16,["value","onUpdate:value"])):u("",!0)]),_:2},1032,["label","name","rules","labelCol"]))]),_:2},1040))),128))]),_:1})]),_:1},8,["name","model"]),V("div",R,[r.showSubmitBtn?(t(),n(b,{key:0,size:"small",type:"primary",onClick:P},{default:i(()=>[g(_(r.submitBtnText||o.$t("form.submit")),1)]),_:1})):u("",!0),r.showResetBtn?(t(),n(b,{key:1,size:"small",type:"primary",style:{"margin-left":"10px"},ghost:"",onClick:T},{default:i(()=>[g(_(o.$t("form.reset")),1)]),_:1})):u("",!0),oe(o.$slots,"formBtn",{},void 0,!0)])]),r.showCollapsed?(t(),I("div",j,[D(p(b,{size:"small",type:"link",style:H({color:k(O).systemThemeColor.color}),onClick:q},{default:i(()=>[g(_(o.$t("form.expand"))+" ",1),p(k(ie))]),_:1},8,["style"]),[[F,f.value]]),D(p(b,{size:"small",type:"link",style:H({color:k(O).systemThemeColor.color}),onClick:q},{default:i(()=>[g(_(o.$t("form.collapse"))+" ",1),p(k(pe))]),_:1},8,["style"]),[[F,!f.value]])])):u("",!0)])}}}),Q=re(L,[["__scopeId","data-v-5ef75c33"]]),w=me(),{t:e}=ne.global,Y=E(()=>[{filed:"name",type:"input",name:"name",label:e("form.name"),rules:[{required:!0,message:e("form.inputName")}],options:{placeholder:e("form.inputName")}},{filed:"realname",type:"input",name:"realname",label:e("form.realname"),rules:[{required:!0,message:e("form.inputRealname")}],options:{placeholder:e("form.inputRealname")}},{filed:"cellphone",type:"input",name:"cellphone",label:e("form.cellphone"),rules:[{required:!0,message:e("form.inputCellphone")}],options:{placeholder:e("form.inputCellphone")}},{filed:"password",type:"password",name:"password",label:e("form.password"),rules:[{required:!0,message:e("form.inputPassword")}],options:{placeholder:e("form.inputPassword")}},{filed:"departmentId",type:"select",name:"departmentId",label:e("form.department"),rules:[{required:!0,message:e("form.selectDepartment")}],options:{placeholder:e("form.selectDepartment"),options:w.departmentList}},{filed:"roleId",type:"select",name:"roleId",label:e("form.role"),rules:[{required:!0,message:e("form.selectRole")}],options:{placeholder:e("form.selectRole"),options:w.roleList}}]),X=E(()=>[{filed:"name",type:"input",name:"name",label:e("form.name"),rules:[{required:!0,message:e("form.inputName")}],options:{placeholder:e("form.inputName")}},{filed:"intro",type:"input",name:"intro",label:e("form.intro"),rules:[{required:!0,message:e("form.inputIntro")}],options:{placeholder:e("form.inputIntro")}}])});export{Q as C,de as __tla,X as r,Y as u};