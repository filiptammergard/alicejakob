import Vue from "vue";
import Router from "vue-router";
import store from "./store.js";

import firebase from "firebase";

import Welcome from "./views/Welcome";
import Find from "./views/Find";
import Wishlist from "./views/Wishlist";
import Wish from "./views/Wish";
import PostWish from "./views/PostWish";
import PutWish from "./views/PutWish";
import OSA from "./views/OSA";
import Login from "./views/Login";
import Contact from "./views/Contact";
import FormSuccess from "./views/FormSuccess";
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
        title: "Välkommen",
        authRequired: true
      }
    },
    {
      path: "/hitta",
      name: "find",
      component: Find,
      meta: {
        title: "Hitta",
        authRequired: true
      }
    },
    {
      path: "/önskelista",
      name: "wishlist",
      component: Wishlist,
      meta: {
        title: "Önskelista",
        authRequired: true
      }
    },
    {
      path: "/önskelista/:id",
      name: "wish",
      component: Wish,
      meta: {
        title: "Önskesak",
        authRequired: true
      }
    },
    {
      path: "/önskelista/ny",
      name: "postwish",
      component: PostWish,
      meta: {
        title: "Lägg till önsketips",
        adminRequired: true
      }
    },
    {
      path: "/önskelista/:id/ändra",
      name: "putwish",
      component: PutWish,
      meta: {
        title: "Ändra önsketips",
        adminRequired: true
      }
    },
    {
      path: "/osa",
      name: "osa",
      component: OSA,
      meta: {
        title: "O.S.A",
        authRequired: true
      }
    },
    {
      path: "/kontakt",
      name: "contact",
      component: Contact,
      meta: {
        title: "Kontakt",
        authRequired: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "Logga in",
        guestRequired: true
      }
    },
    {
      path: "/tack",
      name: "FormSuccess",
      component: FormSuccess,
      meta: {
        title: "Tack",
        authRequired: true
      }
    },
    {
      path: "*",
      name: "404",
      component: FourOhFour,
      meta: {
        title: "404"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let adminRequired = to.matched.some(record => record.meta.adminRequired);
  let authRequired = to.matched.some(record => record.meta.authRequired);
  let guestRequired = to.matched.some(record => record.meta.guestRequired);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.state.isAuth = true;

      if (user.email == "admin@wishlist.com") {
        store.state.isAdmin = true;
      }
    } else {
      store.state.isAuth = false;
      store.state.isAdmin = false;
      store.state.isGuest = true;
    }
    if (adminRequired && !user) {
      next("/login");
    } else if (adminRequired && user.email == "guest@wishlist.com") {
      next("/login");
    } else if (authRequired && !user) {
      next("/login");
    } else if (guestRequired && user) {
      next("/");
    } else {
      next();
    }
  });
});

router.afterEach(to => {
  const defaultPageTitle = "Alice & Jakob";
  document.title = to.meta.title + " | " + defaultPageTitle || defaultPageTitle;
});

export default router;
