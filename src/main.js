import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import stickybits from "stickybits";
import zenscroll from "zenscroll";
import * as help from "./js/helpers.js";
import VueHead from "vue-head";

Vue.use(VueHead);

Vue.config.productionTip = false;

Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);

new Vue({
  router,
  head: {
    title: {
      inner: "MV Builders - Srirangam",
      seperator: "-"
    },
    meta: [
      {
        name: "keywords",
        content:
          "srirangam, flats, apartments, sale, affordable, price, railway, bus, station"
      },
      { name: "author", content: "MV Builders" },
      { name: "description", content: "Buy flats in lush green environment" }
    ]
  },
  mounted() {
    help.attachNavEvent();
    // document.getElementById('scroll-top').onclick = function() {
    //   zenscroll.to(0);
    // };
    document.getElementById("scroll-top").addEventListener("click", function() {
      zenscroll.to(document.getElementById("app"));
    });
  },
  render: h => h(App)
}).$mount("#app");

stickybits(document.querySelector("header"), { useStickyClasses: true });
