import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '../components/login-page'
import GettingInfo from '../components/GettingInfo.vue'
import UserForm from '../components/User-form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loginPage
  },
  {
    path: '/info',
    name: 'info',
    component: GettingInfo
  },
  {
    path: '/form',
    name: 'form',
    component: UserForm
  },
  
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router
