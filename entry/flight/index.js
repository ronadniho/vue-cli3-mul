import Vue from 'vue';
import App from '../../src/pages/flight/index/index.vue';
// import router from '../../src/pages/flight/router.js'
Vue.config.productionTip = false;
new Vue({
    render: h => h(App),
    // router
}).$mount('#index'); 