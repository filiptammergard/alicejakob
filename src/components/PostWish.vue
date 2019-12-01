<template>
  <div id="postwish-component">
    <section class="white d-flex align-items-center">
      <div class="container">
        <h1>Ny önskesak</h1>
        <p>Här kan ni lägga till saker i önskelistan! :)</p>
      </div>
    </section>

    <section class="dark d-flex align-items-center">
      <div class="container">
        <h1>Lägg till önskesak</h1>
        <form @submit.prevent="postWish(wish)">
          <div class="form-group">
            <input
              v-model="wish.item"
              type="text"
              autofocus
              required
              class="form-control"
              placeholder="Sak"
            />
          </div>
          <div class="form-group">
            <input
              v-model="wish.amount"
              required
              type="number"
              class="form-control"
              placeholder="Antal"
            />
          </div>
          <div class="form-group">
            <input
              v-model="wish.specification"
              type="text"
              class="form-control"
              placeholder="Specifikation"
            />
          </div>
          <div class="form-group">
            <input v-model="wish.link" type="text" class="form-control" placeholder="Länk" />
          </div>
          <div class="form-group">
            <input v-model="wish.imagelink" type="text" class="form-control" placeholder="Bildlänk" />
          </div>
          <button
            :disabled="!validWish"
            type="submit"
            class="btn btn-custom btn-block"
          >Lägg till önskesak</button>
          <router-link
            class="btn btn-secondary btn-block"
            tag="button"
            :to="{ name: 'wishlist'}"
          >Tillbaka till önskelistan</router-link>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "postwish-component",
  data() {
    return {
      wish: {
        item: null,
        amount: null,
        specification: null,
        link: null,
        imagelink: null
      }
    };
  },
  methods: {
    ...mapActions(["postWish"])
  },
  computed: {
    validWish() {
      if (
        this.wish.item != null &&
        this.wish.amount != null &&
        this.wish.amount > 0
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
