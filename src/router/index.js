import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Demo from '@/pages/demo'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/demo',
            name: 'demo',
            component: Demo
        }
    ]
})
