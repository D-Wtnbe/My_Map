import Vue from 'vue'
import App from './App.vue'
import router from './Routes'
import store from './store/index'
import vuetify from './plugins/vuetify'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "semantic-ui-css/semantic.min.css"
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(Toast);
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
  store
}).$mount('#app')