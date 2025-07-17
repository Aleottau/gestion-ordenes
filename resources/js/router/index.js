import { createRouter, createWebHistory } from 'vue-router'

// Importar rutas por módulo
import authRoutes from '@/modules/auth/authRouter'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  ...authRoutes  // ← Aquí inyectas las rutas del módulo de auth
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
