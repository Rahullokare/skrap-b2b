import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyB1PLqHTqUrwgBUA9rylgGJFBTC9Tye_Jw",
  authDomain: "skrap-bb.firebaseapp.com",
  projectId: "skrap-bb",
  storageBucket: "skrap-bb.appspot.com",
  messagingSenderId: "545746582343",
  appId: "1:545746582343:web:91506bb5a5601dc9ea2a62"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
