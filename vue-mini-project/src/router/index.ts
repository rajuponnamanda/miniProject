import { createRouter, createWebHistory } from 'vue-router'
import MainLayoutVue from '@/layouts/MainLayout.vue'
import NavBarVue from '@/components/NavBar.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      component:NavBarVue,
      children: [
        {
          path:'Mainlayout',
          component:MainLayoutVue
        }
      ]
    },

    
  ]
})

export default router