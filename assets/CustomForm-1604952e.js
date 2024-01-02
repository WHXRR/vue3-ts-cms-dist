import{d as E,r as U,w as G,o as K,aY as o,a,b as S,ad as H,c as n,bu as i,F as Q,aX as W,ab as r,aJ as d,ac as m,I as _,b8 as k,P as Z,x as P,D as R,u as h,aM as D}from"./@vue-249e6205.js";import{b as ee,_ as le,__tla as ae}from"./index-afb25bfb.js";import{D as te,U as oe}from"./@ant-design-1a91f59a.js";let J,se=Promise.all([(()=>{try{return ae}catch{}})()]).then(async()=>{let z,q,$,j,I;z={class:"custom-form"},q={class:"form-container"},$={class:"form-btns"},j={key:0,style:{"text-align":"right","padding-top":"5px"}},I=E({__name:"CustomForm",props:{modelValue:{type:Object,required:!0},formName:{type:String,required:!0},formItems:{type:Object,default:()=>{},required:!0},colStyle:{type:Object,default:()=>({xs:24,sm:12,md:12,lg:8,xl:6,xxl:4})},formLabelCol:{type:Object,default:()=>({sm:{span:5},xxl:{span:8}})},submitBtnText:{type:String,default:""},showSubmitBtn:{type:Boolean,default:!0},showResetBtn:{type:Boolean,default:!0},fixed:{type:Boolean,default:!1},showCollapsed:{type:Boolean,default:!0}},emits:["update:modelValue","submit","reset"],setup(s,{expose:L,emit:x}){const O=s,T=ee(),C=U(),l=U({...O.modelValue});G(()=>l.value,t=>{x("update:modelValue",t)},{deep:!0});const V=()=>{C.value.validate().then(()=>{x("submit")})},F=()=>{C.value.resetFields(),x("reset")},p=U(!1),g=()=>{var c,y,v;const t=(c=document.querySelector(".form-col .ant-form-item"))==null?void 0:c.clientHeight,w=document.querySelector(".form-container"),f=(y=document.querySelector(".form"))==null?void 0:y.clientHeight,B=((v=document.querySelector(".form-btns"))==null?void 0:v.clientHeight)||0;p.value&&t&&f?(p.value=!1,w.style.height=f+B+"px"):(p.value=!0,w.style.height=t+"px")};return K(()=>{O.showCollapsed&&g()}),L({submit:V,reset:F}),(t,w)=>{const f=o("a-input"),B=o("a-input-password"),c=o("a-select"),y=o("a-radio-group"),v=o("a-range-picker"),M=o("a-form-item"),N=o("a-col"),X=o("a-row"),Y=o("a-form"),b=o("a-button");return a(),S("div",z,[H("div",q,[n(Y,{class:"form",name:s.formName,autocomplete:"off",model:l.value,ref_key:"formRef",ref:C},{default:i(()=>[n(X,null,{default:i(()=>[(a(!0),S(Q,null,W(s.formItems,(e,A)=>(a(),r(N,d({class:"form-col"},s.colStyle,{key:A}),{default:i(()=>[e.hidden?m("",!0):(a(),r(M,{key:0,label:e.label,name:e.name,rules:e.rules,labelCol:s.formLabelCol},{default:i(()=>[e.type==="input"?(a(),r(f,d({key:0,size:"small"},e.options,{value:l.value[e.filed],"onUpdate:value":u=>l.value[e.filed]=u}),null,16,["value","onUpdate:value"])):m("",!0),e.type==="password"?(a(),r(B,d({key:1,size:"small"},e.options,{value:l.value[e.filed],"onUpdate:value":u=>l.value[e.filed]=u}),null,16,["value","onUpdate:value"])):m("",!0),e.type==="select"?(a(),r(c,d({key:2,size:"small"},e.options,{value:l.value[e.filed],"onUpdate:value":u=>l.value[e.filed]=u}),null,16,["value","onUpdate:value"])):m("",!0),e.type==="radio"?(a(),r(y,d({key:3,size:"small"},e.options,{value:l.value[e.filed],"onUpdate:value":u=>l.value[e.filed]=u}),null,16,["value","onUpdate:value"])):m("",!0),e.type==="datePicker"?(a(),r(v,d({key:4,size:"small"},e.options,{value:l.value[e.filed],"onUpdate:value":u=>l.value[e.filed]=u}),null,16,["value","onUpdate:value"])):m("",!0)]),_:2},1032,["label","name","rules","labelCol"]))]),_:2},1040))),128))]),_:1})]),_:1},8,["name","model"]),H("div",$,[s.showSubmitBtn?(a(),r(b,{key:0,size:"small",type:"primary",onClick:V},{default:i(()=>[_(k(s.submitBtnText||t.$t("form.submit")),1)]),_:1})):m("",!0),s.showResetBtn?(a(),r(b,{key:1,size:"small",type:"primary",style:{"margin-left":"10px"},ghost:"",onClick:F},{default:i(()=>[_(k(t.$t("form.reset")),1)]),_:1})):m("",!0),Z(t.$slots,"formBtn",{},void 0,!0)])]),s.showCollapsed?(a(),S("div",j,[P(n(b,{size:"small",type:"link",style:D({color:h(T).systemThemeColor.color}),onClick:g},{default:i(()=>[_(k(t.$t("form.expand"))+" ",1),n(h(te))]),_:1},8,["style"]),[[R,p.value]]),P(n(b,{size:"small",type:"link",style:D({color:h(T).systemThemeColor.color}),onClick:g},{default:i(()=>[_(k(t.$t("form.collapse"))+" ",1),n(h(oe))]),_:1},8,["style"]),[[R,!p.value]])])):m("",!0)])}}}),J=le(I,[["__scopeId","data-v-20b85c74"]])});export{J as C,se as __tla};
