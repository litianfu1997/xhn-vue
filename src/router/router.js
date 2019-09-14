import Vue from 'vue'
import Router from 'vue-router'

// 1. 使用Vue.use(插件),安装插件
Vue.use(Router)
// 2.创建路由对象并且导出对象，供vue实例使用
export default new Router({
    // 配置路由和组件之间的映射关系

    routes: [
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        // }
    ],
    mode: 'history'
})
