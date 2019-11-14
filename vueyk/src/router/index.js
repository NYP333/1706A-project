import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js' //静态加载

Vue.use(VueRouter) //注册组件

const router = new VueRouter({
    mode: 'history', //设置路由模式 两种 history  hash
    // linkActiveClass: 'active', //给当前选中项添加类名
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // console.log(to, from, next())
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!window.localStorage.token) { //本地存储只能存字符串
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next();
        }
    } else {
        next();
    }
})

router.afterEach((to, from) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = "1706A"
    }
})

export default router