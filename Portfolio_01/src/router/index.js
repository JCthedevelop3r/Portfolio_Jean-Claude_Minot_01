import { createRouter, createWebHistory } from 'vue-router'

import homepage from "../views/homepage.vue"
import figmaPage from "../views/figmaPage.vue"
import error404 from "../views/error404.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: homepage,
    },

    {
      path: "/figmapage",
      name: "figmapage",
      component: figmaPage,
    },

    {
      path: "/.catchAll(.*)",
      name: "error404",
      component: error404,
    }
  ]
})

export default router
