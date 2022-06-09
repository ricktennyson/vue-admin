import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User/')
    }
]
const route = new VueRouter({
    mode: 'history',
    routes
})
export default route