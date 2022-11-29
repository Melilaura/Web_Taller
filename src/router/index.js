import { createRouter, createWebHistory } from 'vue-router'
import Error404 from '../views/404Error.vue'
/*import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import AddProduct from '../views/AddProduct.vue'
import AboutUs from '../views/AboutUs.vue'*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      //component: Home
      component: () => import('../views/Home.vue')
    },
    {
      path: '/addProduct',
		name: 'addProduct',
		//component: AddProduct
    component: () => import('../views/AddProduct.vue')
    },

    {
      path:'/categories',
      name: 'categories',
      //component: Categories
      component: () => import('../views/Categories.vue')
    },

    {
      path:'/aboutUs',
      name: 'aboutUs',
      //component: AboutUs
      component: () => import('../views/AboutUs.vue')
    },
    {
      path:'/product/:wineId',
      name: 'product',
      //component: AboutUs
      component: () => import('../views/Product.vue')
    },
    {
      path: '/login',
      name: 'login',
      //component: Login
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      //component: Login
      component: () => import('../views/SignUp.vue')
    },

    {
      path: '/cart',
      name: 'cart',
      //component: Login
      component: () => import('../views/Cart.vue')
    },

    {
      path: '/:pathMatch(.*)*',
      component: Error404,
    },

  ]
})

export default router
