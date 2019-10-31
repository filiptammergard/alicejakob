import Vue from "vue";
import Router from "vue-router";

import Welcome from "./views/Welcome";
import Find from "./views/Find";
import Accomodation from "./views/Accomodation";
import Wishlist from "./views/Wishlist";
import OSA from "./views/OSA";
import Contact from "./views/Contact";
import FourOhFour from "./views/404";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome,
      meta: {
        title: "Välkommen | Alice & Jakob"
      }
    },
    {
      path: "/hitta",
      name: "find",
      component: Find,
      meta: {
        title: "Hitta | Alice & Jakob"
      }
    },
    {
      path: "/boende",
      name: "accomodation",
      component: Accomodation,
      meta: {
        title: "Boende | Alice & Jakob"
      }
    },
    {
      path: "/önskelista",
      name: "wishlist",
      component: Wishlist,
      meta: {
        title: "Önskelista | Alice & Jakob"
      }
    },
    {
      path: "/osa",
      name: "osa",
      component: OSA,
      meta: {
        title: "O.S.A | Alice & Jakob"
      }
    },
    {
      path: "/kontakt",
      name: "contact",
      component: Contact,
      meta: {
        title: "Kontakt | Alice & Jakob"
      }
    },
    {
      path: "*",
      name: "404",
      component: FourOhFour,
      meta: {
        title: "404 | Alice & Jakob"
      }
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   let adminRequired = to.matched.some(record => record.meta.adminRequired);
//   let authRequired = to.matched.some(record => record.meta.authRequired);

//   firebase.auth().onAuthStateChanged(async user => {
//     if (user) {
//       await store.dispatch("fetchWishes");
//       store.state.isLoggedIn = true;

//       if (user.email == "admin@wishlist.com") {
//         store.state.isAdmin = true;
//       }
//     } else {
//       store.state.isLoggedIn = false;
//       store.state.isAdmin = false;
//     }
//     if (adminRequired && !user) {
//       next("/");
//     } else if (adminRequired && user.email == "guest@wishlist.com") {
//       next("/");
//     } else if (authRequired && !user) {
//       next("/");
//     } else {
//       next();
//     }
//   });
// });

router.afterEach(to => {
  const defaultPageTitle = "Alice & Jakob";
  document.title = to.meta.title || defaultPageTitle;
});

export default router;
