import { createRouter,createWebHashHistory } from "vue-router";
const routes = [
  {
    path: '/', 
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/article', 
    component: () => import('@/views/Article/index.vue')
  },
  {
    path: '/article/detail', 
    component: () => import('@/views/Article/detail.vue')
  },
  {
    path: '/article/editor', 
    component: () => import('@/views/Article/editor.vue')
  },
  {
    path: '/article/bin', 
    component: () => import('@/views/Article/bin.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router