import { createRouter, createWebHistory } from 'vue-router'

import homepage from "../views/homepage.vue"
import figmaPage from "../views/figmaPage.vue"
import notFoundPage from "../views/notFoundPage.vue"

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
      path: "/:catchAll(.*)",
      name: "notfoundpage",
      component: notFoundPage,
    }
  ]
})

export default router
