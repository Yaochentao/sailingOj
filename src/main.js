import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuexStore from './store'   
import './registerServiceWorker'

import './assets/css/reset.css'

import axios from 'axios'

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/element-#2E9D81/index.css';
Vue.use(ElementUI);
import VueParticles from 'vue-particles'
Vue.use(VueParticles);

import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer);
Vue.prototype.$http= axios

Vue.config.productionTip = false

new Vue({
  router,
  store:vuexStore,
  render: h => h(App)
}).$mount('#app')
