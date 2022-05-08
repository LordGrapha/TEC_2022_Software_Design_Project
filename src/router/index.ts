import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import Informes from '@/views/Informes.vue'
import Gestion from '@/views/Gestion.vue'
import Menu from '@/components/Menu.vue'
import Reservacion from '@/components/Reservacion.vue'
import Parqueos from '@/components/Parqueos.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Login },
  { path: '/menu', component: Menu },
  { path: '/gestion_reserva', component: Reservacion },
  { path: '/consulta_parqueos', component: Parqueos },
  { path: '/informes', component: Informes },
  { path: '/gestion', component: Gestion },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
