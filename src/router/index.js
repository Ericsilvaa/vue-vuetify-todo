import Vue from 'vue'
import VueRouter from 'vue-router'

// View
import Tarefas from '@/views/Tarefas.vue'
import Sobre from '@/views/Sobre.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
