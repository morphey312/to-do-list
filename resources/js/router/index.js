import { createRouter, createWebHistory } from 'vue-router'
import CreateDaySchedule from "../components/pages/CreateDaySchedule.vue";
// import BooksRoutes from './routes/books.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CreateDaySchedule,
  },
  // {
  //   path: '/404',
  //   name: '404',
  //   // регистрируем необходимые страницы
  //   component: () => import('../pages/NotFound.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/404'
  // },
  // добавляем маршруты в роутер
  // ...BooksRoutes,
]

const router = createRouter({
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  history: createWebHistory(),
  routes
})

export default router
