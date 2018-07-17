import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import TruncateFilter from './filters/truncate'
import AlertCmp from './components/Shared/Alert.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueImg from 'v-img'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.filter('truncate', TruncateFilter)
Vue.component('app-alert', AlertCmp)
Vue.use(VueYouTubeEmbed)
Vue.use(VueImg)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBLnTSDp3CV3PAOdPvEFxfRdLEh-50RZFw',
      authDomain: 'bettyslip-47f63.firebaseapp.com',
      databaseURL: 'https://bettyslip-47f63.firebaseio.com',
      projectId: 'bettyslip-47f63',
      storageBucket: 'bettyslip-47f63.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
  }
})
