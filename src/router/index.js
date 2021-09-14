import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const ClassifiCation = () => import('../views/classification/ClassifiCation')
const ShoppingCart = () => import('../views/shoppingcart/ShoppingCart')
const ProFile = () => import('../views/profile/ProFile')

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/classification',
    component:ClassifiCation
  },
  {
    path: '/shoppingcart',
    component:ShoppingCart
  },
  {
    path: '/profile',
    component:ProFile
  }
  ]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
