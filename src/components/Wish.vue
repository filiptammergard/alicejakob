<template>
  <div id="wish-component" v-if="this.wish">
    <h1>{{ wish.item }}</h1>
    <img :src="wish.imagelink" />
    <p>
      <b>Antal:</b>
      {{ wish.amount - wish.given }}
    </p>
    <p>
      <b>Specifikation:</b>
      {{ wish.specification }}
    </p>
    <p>
      <b>
        <a :href="wish.link">Länk</a>
      </b>
    </p>
    <button class="btn btn-secondary">Boka önskesak</button>
    <br />
    <br />
    <router-link
      tag="button"
      class="btn btn-secondary"
      :to="{ name: 'wishlist' }"
    >Tillbaka till önskelistan</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

import db from "@/components/firebaseInit";

export default {
  name: "wish-component",
  data() {
    return {
      wish: null
    };
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
    ...mapState(["wishes"])
  }
};
</script>
