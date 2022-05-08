import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import Informes from '@/views/Informes.vue'
import Register from '@/views/Register.vue'
import Menu from '@/components/Menu.vue'
import Reservacion from '@/components/Reservacion.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Login },
  { path: '/menu', component: Menu },
  { path: '/gestion_reserva', component: Reservacion },
  { path: '/Informes', component: Informes },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
