// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入屏幕适配脚本
import "./assets/rem.js";
// 导入默认样式表
import "./assets/reset.css";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//倒入请求模块
import req from "./api/req.js";
Vue.use(ElementUI);
Vue.prototype.$swiper = Swiper;
Vue.prototype.$http = req;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
