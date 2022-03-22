import { createRouter, createWebHistory  } from "vue-router";

const routes = [

  {
    path: "/",
    name: "main",
    component: function () {
      return import("@/pages/main.vue");
    },
  },
  {
    path: "/authorization",
    name: "auth",
    component: function () {
      return import("@/pages/AdminPages/authorization.vue");
    },
  },
  {
    path: '/grants',
    meta: {
        title: 'grants'
    },
    component: () => import ('@/pages/grants.vue')
},
{
    path: '/tax-exemption',
    meta: {
        title: 'tax'
    },
    component: () => import ('@/pages/taxExemption.vue')
},
{
    path: '/register',
    meta: {
        title: 'register'
    },
    component: () => import ('@/pages/register.vue')
},
{
  path: '/dashboard',
  meta: {
      title: 'Dashboard'
  },
  component: () => import ('@/pages/dashboard/index.vue'),
  children: [
    {
      path: '/students',
      component: () => import ('@/pages/dashboard/students.vue'),
    },
    {
      path: '/sponsors',
      component: () => import ('@/pages/dashboard/sponsors.vue'),
    },
    {
      path: '/dashboard/statistics',
      component: () => import ('@/pages/dashboard/statistics.vue'),
    },
  ]
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// });

export default router;
