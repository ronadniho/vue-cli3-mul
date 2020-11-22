import Vue from 'vue';
import App from '../../src/pages/layout/layout.vue';
import router from '../../src/pages/layout/router.js'
Vue.config.productionTip = false;
new Vue({ 
    render: h => h(App),
    router
 }).$mount('#layout'); 