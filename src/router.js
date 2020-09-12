import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },

        {
          path: '/escolas',
          component: () => import(/* webpackChunkName: "demo" */ './views/Schools/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('./views/Schools/List.vue'),
              // meta: { requiresAuth: true },
            },
            {
              path: 'criar',
              meta: { 
                requiresAuth: true,
                role: 'manager',
              },
              component: () => import(/* webpackChunkName: "demo" */ './views/Schools/Create.vue')
            },
          ]
        },
        {
          path: '/tipos-violencia',
          component: () => import(/* webpackChunkName: "demo" */ './views/Violences/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('./views/Violences/List.vue'),
              // meta: { requiresAuth: true },
            },
            {
              path: 'criar',
              meta: { 
                requiresAuth: true,
                role: 'manager',
              },
              component: () => import(/* webpackChunkName: "demo" */ './views/Violences/Create.vue')
            },
          ]
        },
        {
          path: '/relatos',
          
          component: () => import(/* webpackChunkName: "demo" */ './views/Infractions/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('./views/Infractions/List.vue'),
              meta: { requiresAuth: true },
            },
            {
              path: 'criar',
              name: 'Criar Relato',
              meta: { 
                requiresAuth: true,
                role: 'manager',
              },
              component: () => import(/* webpackChunkName: "demo" */ './views/Infractions/Create.vue')
            },
          ]
        },
        {
          path: '/relatorios',
          
          component: () => import(/* webpackChunkName: "demo" */ './views/Reports/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('./views/Reports/Show.vue'),
              meta: { requiresAuth: true },
            },
            {
              path: 'criar',
              name: 'Criar Relatorio',
              meta: { 
                requiresAuth: true,
                role: 'manager',
              },
              component: () => import(/* webpackChunkName: "demo" */ './views/Reports/Create.vue')
            },
          ]
        },
      ]
    },



    







    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
