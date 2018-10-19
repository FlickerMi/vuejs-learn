// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import {Button} from 'mint-ui'

Vue.config.productionTip = false

// 注册成mint标签（全局）
Vue.component(Button.name, Button)
// 声明使用VueResource插件
Vue.use(VueResource)// 内部会给vm对象和组件对象添加一个熟悉

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
