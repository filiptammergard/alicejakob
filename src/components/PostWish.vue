<template>
  <div id="postwish-component">
    <div class="row">
      <div class="col-md"></div>
      <div class="col-md-8">
        <h1>Lägg till önsketips</h1>
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
            <input
              v-model="wish.imagelink"
              type="text"
              class="form-control"
              placeholder="Bildlänk"
            />
          </div>
          <button :disabled="!validWish" type="submit" class="btn btn-secondary btn-block">
            Lägg till
          </button>
        </form>
      </div>
      <div class="col-md"></div>
    </div>
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
      if (this.wish.item != null && this.wish.amount != null && this.wish.amount > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
