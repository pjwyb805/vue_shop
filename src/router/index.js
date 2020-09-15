import Vue from 'vue'
import VueRouter from 'vue-router'
// import message from '../main'
// Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/Home.vue')
  }
]




const router = new VueRouter({
  routes,
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的都路径
  //from 代表从哪个路径跳转而来
  //next是一个函数 表示放行
  //next()放行  next('/login') 强制跳转
  if (to.path === '/login') return next() 
  // alert('请登录')

  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')//如果没有token，就跳转到登录页面
  next()
})
export default router
