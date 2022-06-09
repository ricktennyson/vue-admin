import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup,
  Dropdown, DropdownMenu,DropdownItem
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

Vue.config.productionTip = false

Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(Button)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
