import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import store from '@/store/'

import { RepositoryFactory } from './repositories/repositoryFactory'

import { SET_CURRENT_USER } from '@/store/types/mutation-types'


Vue.use(Router);

const userHasPermission = (requiredRole, { types: userRoles }) => {
  return userRoles
  .includes('admin') || userRoles.includes(requiredRole);
}


const getCurrentUser = async redirectTo => {
  
  try {
    let user = store.getters.user.currentUser;
    console.log(user);
    if(!user) {
      const AuthRepository = RepositoryFactory.get('auth');

      const { data } = await AuthRepository.me();
    
      user = data;
      store.commit(SET_CURRENT_USER , user);

      return user;
    }

  } catch(err) {
    localStorage.removeItem('token');
    
    return redirectTo('/login');
  }
}

const router =  new Router({
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
          meta: { requiresAuth: true },
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },

        {
          path: '/escolas',
          component: () => import(/* webpackChunkName: "demo" */ './views/Schools/Index.vue'),
          meta: { requiresAuth: true },
          children: [
            {
              path: '',
              component: () => import('./views/Schools/List.vue'),
              meta: { requiresAuth: true, role: 'manager' },
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
          meta: { requiresAuth: true },
          children: [
            {
              path: '',
              component: () => import('./views/Violences/List.vue'),
              meta: { requiresAuth: true, role: 'manager' },
            },
            {
              path: 'criar',
              meta: { requiresAuth: true, role: 'manager' },


              component: () => import(/* webpackChunkName: "demo" */ './views/Violences/Create.vue')
            },
          ]
        },
        {
          path: '/relatos',
          meta: { requiresAuth: true },
          component: () => import(/* webpackChunkName: "demo" */ './views/Infractions/Index.vue'),
          children: [
            {
              path: 'criar',
              component: () => import('./views/Infractions/Create.vue'),
              meta: { requiresAuth: true, role: 'school' }
            },
            {
              path: '',
              component: () => import('./views/Infractions/List.vue'),
              meta: { requiresAuth: true, role: 'school' }
            },
            
          ]
        },
        {
          path: '/relatorios',
          meta: { requiresAuth: true },
          component: () => import(/* webpackChunkName: "demo" */ './views/Reports/Index.vue'),
          children: [
            {
              path: '',
              component: () => import('./views/Reports/Show.vue'),
              meta: { requiresAuth: true, role: 'manager' },
            },
            {
              path: 'criar',
              name: 'Criar Relatorio',
              meta: { 
                meta: { requiresAuth: true, role: 'manager' },
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
      ]
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if(to.meta.requiresAuth && !isAuthenticate()) {
     return next('/login');
  }
  if(to.name === 'login' && isAuthenticate()){
    const user = await getCurrentUser(next);
    console.log(user);
    if(to.meta.role) 
      return next(
        userHasPermission(to.meta.role, user)
      )
   return next('/dashboard');
  }

  return next();
});

const isAuthenticate = () => {
  const token = localStorage.getItem('token');

    if(!token) return false;
    return true;
}

export default router;