import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。

/* 资源引入 02 优化*/

//配置应用的字体比例
// import './assets/css/core.css'; //全局暴露
// import './assets/css/icon.css'; //全局暴露
// import './assets/css/home.css'; //全局暴露
// import './assets/js/jquery-1.10.2.js';
// import './assets/js/aui.js' 


//引入路由模块
import router from './plugins/router'

//引入axios插件配置模块
import axios from  './plugins/axios';
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);

Vue.prototype.baseUrl = 'http://localhost:3000'//注册服务器的地址

//注册全局过滤器
// Vue.filter('过滤名',函数)
import date from './filters/date';
Vue.filter('date',date);

import store from './plugins/store'

import { Tab, Tabs } from 'vant';
import { SubmitBar } from 'vant';
Vue.use(Tab).use(Tabs);
Vue.use(SubmitBar);
let vm = new Vue({
  data:{
   
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')

axios.setupInterceptors(vm);




