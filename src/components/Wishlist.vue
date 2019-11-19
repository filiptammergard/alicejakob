<template>
  <div id="wishlist-component">
    <h1>Önskelista</h1>
    <p>
      Den finaste presenten ni kan ge är att få är att vi får dela vår bröllopsdag med er. Vill ni
      ändå gärna ge något extra så är här tips på saker som vi önskar oss!
    </p>
    <router-link
      class="btn btn-secondary btn-block"
      tag="button"
      :to="{ name: 'postwish' }"
    >Ny önskesak</router-link>
    <br />
    <div class="d-flex flex-row justify-content-center flex-wrap">
      <div v-for="wish in wishes" :key="wish.id">
        <div class="card" style="width: 15rem;">
          <div>
            <img :src="wish.imagelink" class="card-img-top" />
          </div>
          <div class="card-body">
            <b>{{ wish.item }}</b>
            <p class="card-text"></p>
            <router-link
              tag="button"
              :to="{ name: 'wish', params: { id: wish.id } }"
              class="btn btn-secondary btn-block"
            >Visa önskesak</router-link>
            <router-link
              tag="button"
              :to="{ name: 'putwish', params: { id: wish.id } }"
              class="btn btn-warning btn-block"
            >Ändra önskesak</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "wishlist-component",
  data() {
    return {};
  },
  computed: {
    ...mapState(["wishes"])
  }
};
</script>
