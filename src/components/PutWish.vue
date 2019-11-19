<template>
  <div id="putwish-component">
    <h1>Ändra önsketips</h1>
    <form @submit.prevent="putWish(wish)">
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
      <button :disabled="!validWish" type="submit" class="btn btn-secondary btn-block">Ändra</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import db from "@/components/firebaseInit";

export default {
  name: "putwish-component",
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
    ...mapActions(["putWish"])
  },
  created() {
    if (this.wishes.length) {
      this.wish = this.wishes.filter(
        wish => wish.id == this.$route.params.id
      )[0];
    } else {
      db.collection("wishes")
        .doc(this.$route.params.id)
        .get()
        .then(doc => {
          this.wish = doc.data();
        });
    }
  },
  computed: {
    ...mapState(["wishes"]),
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
