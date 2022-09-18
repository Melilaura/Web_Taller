import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

/*import Categories from '../views/Categories.vue'
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
      component: () => import('../views/categories.vue')
    },

    {
      path:'/aboutUs',
      name: 'aboutUs',
      //component: AboutUs
      component: () => import('../views/aboutUs.vue')
    },

  ]
})

export default router
