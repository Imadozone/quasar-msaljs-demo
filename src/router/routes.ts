import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'index',
        component: () => import('pages/IndexPage.vue'),
        // meta: {
        //   requiresAuth: true,
        // }
      },
      {
        path: 'profile',
        component: () => import('pages/ProfilePage.vue'),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: 'form',
        component: () => import('pages/ProfileNoGuardPage.vue'),
      },
      {
        path: 'error',
        component: () => import('pages/ErrorNotFound.vue')
      }

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
