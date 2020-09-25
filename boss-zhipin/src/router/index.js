import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JobList from '@/components/JobList'
import JobDetail from '@/components/JobDetail'
import User from '@/components/User'
import Chat from '@/components/Chat'
import Register from '@/components/Register'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/job-list',
            name: 'JobList',
            component: JobList
        },
        {
            path: '/job-detail',
            name: 'JobDetail',
            component: JobDetail
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
        {
            path: '/chat',
            name: 'Chat',
            component: Chat
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        }
    ]
})
