const routes = [{
    path: '/index',
    name: 'index',
    children: [{
        path: 'home',
        name: 'home', //命名路由
        component: () => //动态加载，运行时才加载
            import ('@/views/index/home/home.vue'),
        meta: {
            title: '首页',
            requiresAuth: false
        }
    }, {
        path: 'classify',
        name: 'classify',
        component: () =>
            import ('@/views/index/classify/classify.vue'),
        meta: {
            title: '分类',
            requiresAuth: false
        }
    }, {
        path: 'rank',
        name: 'rank',
        component: () =>
            import ('@/views/index/rank/rank.vue'),
        meta: {
            title: '排行',
            requiresAuth: false
        }
    }, {
        path: 'book',
        name: 'book',
        component: () =>
            import ('@/views/index/book/book.vue'),
        meta: {
            title: '书架',
            requiresAuth: true
        }
    }, {
        path: '/index',
        redirect: '/index/home'
    }],
    component: () =>
        import ('@/views/index/index.vue'),
    meta: {
        title: '主页',
        requiresAuth: false
    }
}, {
    path: '/login',
    name: 'login',
    component: () =>
        import ('@/views/login/login.vue'),
    meta: {
        title: '登录',
        requiresAuth: false
    }
}, {
    path: '/detail',
    name: 'detail',
    component: () =>
        import ('@/views/detail/detail.vue'),
    meta: {
        title: '详情',
        requiresAuth: false
    }
}, {
    path: '/',
    redirect: '/index'
}]

export default routes;