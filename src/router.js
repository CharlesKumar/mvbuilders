import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import About from "./views/About.vue";
// import Aboutbkp from "./views/Aboutbkp.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   Component: Aboutbkp
    // },
    {
      path: "/project",
      name: "project",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Project.vue")
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contact.vue")
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  let navT = document.querySelector("#mm-toggle");
  if (navT.classList.contains("menu-active")) {
    navT.click();
  }
  // console.log(document.querySelector('#mm-toggle').classList.remove('menu-active'));
  next();
});

export default router;
