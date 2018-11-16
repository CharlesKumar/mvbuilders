import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import stickybits from "stickybits";
import * as help from "./js/helpers.js";

Vue.config.productionTip = false;

new Vue({
  router,
  mounted() {
    help.attachNavEvent();
  },
  render: h => h(App)
}).$mount("#app");

stickybits(document.querySelector("header"), { useStickyClasses: true });
