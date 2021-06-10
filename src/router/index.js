import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import resipeDetails from '../views/recipeDetales'
import selecredIngredient from '../views/selectedIngredient'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 {
    path:'/Recipe',
    name:'Recipe',
    component: resipeDetails
 },
 {
    path:'/Ingredient',
    name:'Ingredient',
    component: selecredIngredient
 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
