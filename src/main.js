import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
