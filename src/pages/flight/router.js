import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router)
const router = new Router({
    mode: "hash",
    routes: [{
      path: '/',
      name: 'flight',
      component: ()=>import('../layout/layout.vue'),
      redirect: '/flight',
      children: [{
        path: 'flight',
        name: 'flight',
        component: () => import('./index/index.vue'),
        meta: { title: 'flight', icon: 'guide' }
      }]
    }]
  })
  export default router;

