import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/Home/index.vue')
            },
            {
                path: '/user',
                name: 'User',
                component: () => import('../views/User/index.vue')
            }
        ]
    },
]
const route = new VueRouter({
    mode: 'history',
    routes
})
export default route