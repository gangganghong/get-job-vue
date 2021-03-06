// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

// 可以使用 this.$http.post
Vue.use(VueResource)
Vue.config.productionTip = false

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// cnpm install vue-cookies --save
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
// set global cookie
Vue.$cookies.set('theme', 'default');
Vue.$cookies.set('hover-time', '10s');

import global_ from './components/common/Global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
