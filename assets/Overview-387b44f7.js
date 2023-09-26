import{u as B}from"./vue-i18n-50aabb0e.js";import{d as D,l as I,aY as v,a as o,b as i,ad as e,b8 as t,F as u,aX as c,I as m,c as H,bu as p,u as d,ab as O}from"./@vue-249e6205.js";import{_ as P,__tla as U}from"./index-d5260169.js";import"./@intlify-f45a2def.js";import"./pinia-b4bb1fe0.js";import"./dayjs-c16566d5.js";import"./ant-design-vue-4b8e1ea3.js";import"./@babel-727ea1f3.js";import"./@ant-design-1a91f59a.js";import"./@ctrl-fb5a5473.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-f7664732.js";import"./stylis-fad5b415.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-0b7bf9f6.js";import"./dom-align-ecb06dd6.js";import"./lodash-es-fa11e39e.js";import"./async-validator-7f96df71.js";import"./throttle-debounce-87e7e444.js";import"./vue-router-6d605675.js";import"./axios-82afda87.js";import"./nprogress-afa1df2f.js";let b,N=Promise.all([(()=>{try{return U}catch{}})()]).then(async()=>{const g=[{label:"@commitlint/cli",value:"^17.7.1"},{label:"@commitlint/config-conventional",value:"^17.7.0"},{label:"@rushstack/eslint-patch",value:"^1.3.2"},{label:"@tsconfig/node18",value:"^18.2.0"},{label:"@types/node",value:"^18.17.5"},{label:"@types/nprogress",value:"^0.2.0"},{label:"@vitejs/plugin-vue",value:"^4.3.1"},{label:"@vue/eslint-config-prettier",value:"^8.0.0"},{label:"@vue/eslint-config-typescript",value:"^11.0.3"},{label:"@vue/tsconfig",value:"^0.4.0"},{label:"commitizen",value:"^4.3.0"},{label:"cz-conventional-changelog",value:"^3.3.0"},{label:"eslint",value:"^8.46.0"},{label:"eslint-plugin-vue",value:"^9.16.1"},{label:"husky",value:"^8.0.0"},{label:"npm-run-all",value:"^4.1.5"},{label:"prettier",value:"^3.0.0"},{label:"typescript",value:"~5.1.6"},{label:"vite",value:"^4.4.9"},{label:"vite-plugin-top-level-await",value:"^1.3.1"},{label:"vue-tsc",value:"^1.8.8"},{label:"@ant-design/icons-vue",value:"^6.1.0"},{label:"ant-design-vue",value:"^4.0.2"},{label:"axios",value:"^1.5.0"},{label:"dayjs",value:"^1.11.9"},{label:"echarts",value:"^5.4.3"},{label:"normalize.css",value:"^8.0.1"},{label:"nprogress",value:"^0.2.0"},{label:"pinia",value:"^2.1.6"},{label:"sass",value:"^1.66.1"},{label:"vue",value:"^3.3.4"},{label:"vue-i18n",value:"^9.4.0"},{label:"vue-router",value:"^4.2.4"},{label:"vuedraggable",value:"^4.1.0"}],h=`
|   .editorconfig
|   .eslintrc.cjs
|   .gitignore
|   .prettierrc.json
|   commitlint.config.js
|   deploy.sh
|   env.d.ts
|   index.html
|   package-lock.json
|   package.json
|   README.md
|   tsconfig.app.json
|   tsconfig.json
|   tsconfig.node.json
|   vite.config.ts
|
+---.husky
|   |   commit-msg
|   |   pre-commit
|   |
|   ---_
|           .gitignore
|           husky.sh
|
+---public
|       xiaoxing.png
|
---src
    |   App.vue
    |   main.ts
    |
    +---assets
    |   +---css
    |   |       base.css
    |   |       dark.ts
    |   |       light.ts
    |   |       theme.css
    |   |
    |   +---img
    |   |       1.png
    |   |       2.png
    |   |       3.png
    |   |       4.png
    |   |       5.png
    |   |       6.png
    |   |       7.png
    |   |
    |   ---js
    |           package.json.ts
    |           tree.ts
    |
    +---components
    |   |   index.ts
    |   |
    |   +---controlTableColumnsBtn
    |   |       ControlTableColumnsBtn.vue
    |   |
    |   +---customForm
    |   |       CustomForm.vue
    |   |       types.ts
    |   |
    |   +---echarts
    |   |       BaseECharts.vue
    |   |
    |   +---editor
    |   |       Editor.vue
    |   |
    |   ---headerTabs
    |           HeaderTabs.vue
    |
    +---global
    |       index.ts
    |       registerProperties.ts
    |
    +---hooks
    |       useECharts.ts
    |       useNotification.ts
    |       useSwitchTheme.ts
    |
    +---layout
    |   |   LayoutFooter.vue
    |   |   LayoutHeader.vue
    |   |   LayoutMenu.vue
    |   |
    |   ---components
    |           Language.vue
    |           SwitchTheme.vue
    |           UserInfo.vue
    |
    +---locals
    |       en.ts
    |       index.ts
    |       zh.ts
    |
    +---router
    |   |   index.ts
    |   |   mapRoutes.ts
    |   |
    |   ---main
    |       +---analysis
    |       |       dashboard.ts
    |       |       overview.ts
    |       |
    |       +---product
    |       |       category.ts
    |       |       goods.ts
    |       |
    |       +---story
    |       |       chat.ts
    |       |       list.ts
    |       |
    |       ---system
    |               department.ts
    |               menu.ts
    |               role.ts
    |               user.ts
    |
    +---service
    |   |   config.ts
    |   |   index.ts
    |   |   request.ts
    |   |   type.ts
    |   |
    |   ---api
    |       |   index.ts
    |       |
    |       +---analysis
    |       |       index.ts
    |       |       types.ts
    |       |
    |       +---login
    |       |       index.ts
    |       |       types.ts
    |       |
    |       +---product
    |       |       index.ts
    |       |       types.ts
    |       |
    |       +---story
    |       |       index.ts
    |       |       types.ts
    |       |
    |       ---system
    |               index.ts
    |               types.ts
    |
    +---stores
    |       login.ts
    |       system.ts
    |       user.ts
    |
    +---utils
    |       cache.ts
    |       getRoute.ts
    |       httpErrorStatusHandle.ts
    |       init.ts
    |       mapToMenuChildID.ts
    |
    ---views
        +---login
        |   |   LoginBox.vue
        |   |
        |   ---components
        |           AccountForm.vue
        |           PhoneForm.vue
        |
        +---main
        |   |   Main.vue
        |   |
        |   +---analysis
        |   |   |   Dashboard.vue
        |   |   |   Overview.vue
        |   |   |
        |   |   ---components
        |   |           AddressSale.vue
        |   |           AmountList.vue
        |   |           CategoryCount.vue
        |   |           CategoryFavor.vue
        |   |           CategorySale.vue
        |   |
        |   +---product
        |   |       Category.vue
        |   |       config.ts
        |   |       Goods.vue
        |   |
        |   +---story
        |   |       Chat.vue
        |   |       config.ts
        |   |       List.vue
        |   |
        |   ---system
        |       |   config.ts
        |       |   Department.vue
        |       |   Menu.vue
        |       |   Role.vue
        |       |   types.ts
        |       |   User.vue
        |       |
        |       ---components
        |               AddRole.vue
        |               AddUser.vue
        |               config.ts
        |
        ---not-found
                404.vue
                `,y=h,f={class:"box-module-shadow box-item"},x={class:"title"},_={class:"content"},C={class:"box-module-shadow box-item"},j={class:"title"},k={class:"content"},w={href:"#"},A={class:"box-module-shadow box-item"},F={class:"title"},L={class:"content"},T={class:"box-module-shadow box-item"},$={class:"title"},E={class:"content"},M=D({__name:"Overview",setup(q){const{t:r}=B(),R=I(()=>{const s=[];for(let l=2;l<20;l++)s.push({title:r(`home.text${l}`),content:r(`home.content${l-1}`)});return s});return(s,l)=>{const S=v("a-descriptions-item"),z=v("a-descriptions");return o(),i(u,null,[e("div",f,[e("div",x,t(s.$t("home.title1")),1),e("div",_,t(s.$t("home.text1")),1)]),e("div",C,[e("div",j,t(s.$t("home.title2")),1),e("div",k,[e("ul",null,[(o(!0),i(u,null,c(R.value,(a,n)=>(o(),i("li",{class:"li-item",key:n},[e("b",null,t(a.title)+":",1),m(),e("a",w,t(a.content),1)]))),128))])])]),e("div",A,[e("div",F,t(s.$t("home.title3")),1),e("div",L,[H(z,{bordered:""},{default:p(()=>[(o(!0),i(u,null,c(d(g),(a,n)=>(o(),O(S,{key:n,label:a.label},{default:p(()=>[m(t(a.value),1)]),_:2},1032,["label"]))),128))]),_:1})])]),e("div",T,[e("div",$,t(s.$t("home.title4")),1),e("div",E,[e("pre",null,t(d(y)),1)])])],64)}}});b=P(M,[["__scopeId","data-v-481da9b5"]])});export{N as __tla,b as default};
