import Vue from 'vue';
import App from '../../src/pages/hotel/shop/shop.vue';
Vue.config.productionTip = false;
new Vue({ render: h => h(App) }).$mount('#shop'); 