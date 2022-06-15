import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: 'root',
    path: '/',
    redirect: '/home',
    component: () => import('./views/root.vue'),
    children:[
      {
        name: 'about',
        path: '/about',
        component: () => import('./views/about.vue'),
       },
     {
      name: 'home',
      path: '/home',
      component: () => import('./views/home.vue'),
     },
     
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export async function setupRouter(app) {
  app.use(router);
  await router.isReady();
}