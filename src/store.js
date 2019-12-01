/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

import db from "@/components/firebaseInit";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adminPassword: "adminadmin",
    guestPassword: "aliceochjakob2020",

    isAdmin: false,
    isAuth: false,
    isGuest: true,

    wishes: [],

    booked: false
  },
  mutations: {
    getWishes(state, wishes) {
      state.wishes = wishes;
    },
    logout(state) {
      state.isAdmin = false;
      state.isAuth = false;
      state.isGuest = true;
    },
    hideWish(state) {
      setTimeout(() => {
        state.booked = false;
      }, 300);
    },

    updateWishes(state, wishes) {
      state.wishes = wishes;
    },
    bookedTrue(state) {
      state.booked = true;
    },
    bookedFalse(state) {
      setTimeout(() => {
        state.booked = false;
      }, 300);
    }
  },
  actions: {
    getWishes({ commit }) {
      db.collection("wishes")
        .orderBy("order")
        .onSnapshot(querySnapshot => {
          let wishes = [];
          querySnapshot.forEach(doc => {
            wishes.push({
              id: doc.id,
              item: doc.data().item,
              amount: doc.data().amount,
              specification: doc.data().specification,
              link: doc.data().link,
              given: doc.data().given,
              order: doc.data().order,
              bookingAmount: 1,
              imagelink: doc.data().imagelink
            });
          });
          commit("getWishes", wishes);
        });
    },
    postWish(context, wish) {
      db.collection("wishes")
        .orderBy("order")
        .get()
        .then(querySnapshot => {
          if (querySnapshot.docs.length) {
            db.collection("wishes")
              .add({
                item: wish.item,
                amount: Number(wish.amount),
                specification: wish.specification,
                link: wish.link,
                imagelink: wish.imagelink,
                order: querySnapshot.docs[querySnapshot.docs.length - 1].data().order + 1,
                given: 0
              })
              .then(router.push({ name: "wishlist" }));
          } else {
            db.collection("wishes")
              .add({
                item: wish.item,
                amount: Number(wish.amount),
                specification: wish.specification,
                link: wish.link,
                imagelink: wish.imagelink,
                order: 0,
                given: 0
              })
              .then(router.push({ name: "wishlist" }));
          }
        });
    },
    async putWish(context, wish) {
      let given = await db
        .collection("wishes")
        .doc(router.currentRoute.params.id)
        .get()
        .then(doc => {
          return doc.data().given;
        });

      if (Number(wish.amount) >= Number(given)) {
        db.collection("wishes")
          .doc(router.currentRoute.params.id)
          .update({
            item: wish.item,
            amount: Number(wish.amount),
            specification: wish.specification,
            link: wish.link
          });
        router.push({ name: "wishlist" });
      } else {
        alert(
          'Du kan inte ändra antalet önskade av önsketipset "' +
            wish.item +
            '" så att det understiger vad som redan är bokat. Var vänlig försök igen.'
        );
      }
    },
    async deleteWish() {
      let wish = await db
        .collection("wishes")
        .doc(router.currentRoute.params.id)
        .get()
        .then(doc => {
          return doc.data();
        });
      if (
        confirm(
          'Är du säker på att du vill radera önsketipset "' + wish.item + '" från önskelistan?'
        )
      ) {
        db.collection("wishes")
          .doc(router.currentRoute.params.id)
          .delete();
        router.push({ name: "wishlist" });
        db.collection("wishes")
          .where("order", ">", wish.order)
          .orderBy("order")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              db.collection("wishes")
                .doc(doc.id)
                .update({ order: doc.data().order - 1 });
            });
          });
      }
    },
    logout({ commit }) {
      commit("logout");
      firebase.auth().signOut();
    },
    hideWish({ commit }) {
      commit("hideWish");
    },
    bookWish(context, wish) {
      db.collection("wishes")
        .doc(wish.id)
        .update({ given: wish.given + wish.bookingAmount });
      db.collection("wishes")
        .doc(wish.id)
        .collection("bookings")
        .add({
          booking_amount: Number(wish.bookingAmount),
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
      context.commit("bookedTrue");
    },

    updateWishes(context, wishes) {
      context.commit("updateWishes", wishes);
    },

    onEnd(context, e) {
      db.collection("wishes")
        .orderBy("order")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (e.newIndex > e.oldIndex) {
              if (doc.data().order == e.oldIndex) {
                db.collection("wishes")
                  .doc(doc.id)
                  .update({ order: e.newIndex });
              } else if (doc.data().order > e.oldIndex && doc.data().order <= e.newIndex) {
                db.collection("wishes")
                  .doc(doc.id)
                  .update({ order: doc.data().order - 1 });
              }
            } else if (e.newIndex < e.oldIndex) {
              if (doc.data().order < e.oldIndex && doc.data().order >= e.newIndex) {
                db.collection("wishes")
                  .doc(doc.id)
                  .update({ order: doc.data().order + 1 });
              } else if (doc.data().order == e.oldIndex) {
                db.collection("wishes")
                  .doc(doc.id)
                  .update({ order: e.newIndex });
              }
            }
          });
        });
    }
  }
});
