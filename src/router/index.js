import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Good from '@/pages/good'
import Share from '@/pages/share'
import Ask from '@/pages/ask'
import Job from '@/pages/job'
import Detail from '@/pages/detail'
import Pick from '@/pages/pick'
import Demo from '@/pages/demo'
import Todo from '@/example/todomvc/todo'
import Dynamic from '@/example/dynamic'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base:'/topic/',
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            name: 'index',
            alias:'/all',
            component: Index
        },
        {
            path:'/good',
            name:'good',
            component:Good
        },
        {
            path:'/share',
            name:'share',
            component:Share
        },
        {
            path:'/ask',
            name:'ask',
            component:Ask
        },
        {
            path:'/job',
            name:'job',
            component:Job
        },
        {
            path:'/pick',
            name:'pick',
            component:Pick
        },
        {
            path: '/demo',
            name: 'demo',
            component: Demo
        },
        {
            path:'/todo',
            name:'todo',
            component:Todo
        },
        {
            path:'/dynamic',
            name:'dynamic',
            component:Dynamic
        },
        {
            path:'/:id',
            name:'detail',
            component:Detail
        }
    ]
})
