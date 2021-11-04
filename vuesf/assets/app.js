/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
// new Vue({
//     el:"#app",
//     Vuetify,
//     components:{App},
//     data () {
//         return {
//           info: null,
//         }
//       }
//     })

new Vue({
    Vuetify,
    render: (h) => h(App),
    }).$mount('#app');