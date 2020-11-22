import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router)
const router = new Router({
  mode: "hash",
  routes: [{
    path: '/',
    name: 'flight',
    component: () => import('../flight/index/index.vue'),
    meta: { title: 'flight', icon: 'guide' }
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('../hotel/shop/shop.vue'),
    meta: { title: 'hotel', icon: 'guide' },
    children: [{
      path: 'shopDetail',
      name: 'shopDetail',
      component: () => import('../hotel/shop/shopDetail.vue'),
      meta: { title: 'shopDetail', icon: 'guide' }
    }]
  }]
})
export default router;

