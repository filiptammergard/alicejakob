<template>
  <div id="wishlist-component">
    <section class="dark">
      <div class="container">
        <div class="row">
          <div class="align-self-center">
            <h1>Önskelista</h1>
            <p>
              Den finaste presenten ni kan ge är att få är att vi får dela vår bröllopsdag med er. Vill ni
              ändå gärna ge något extra så är här tips på saker som vi önskar oss!
            </p>
            <router-link
              class="btn btn-custom text-white btn-block"
              tag="button"
              v-if="isAdmin"
              :to="{ name: 'postwish' }"
            >Ny önskesak</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="light">
      <div class="container">
        <div class="row">
          <div v-for="wish in wishes" :key="wish.id" class="col-md-4 align-self-stretch">
            <div class="card" style>
              <div>
                <img v-if="wish.imagelink" :src="wish.imagelink" class="card-img-top" />
              </div>
              <div class="card-body text-dark">
                <b>{{ wish.item }}</b>
                <p>Antal kvar: {{ wish.amount - wish.given }}</p>
                <p class="card-text"></p>
                <div>
                  <router-link
                    tag="button"
                    :to="{ name: 'wish', params: { id: wish.id } }"
                    class="btn btn-custom btn-block text-white"
                  >Visa önskesak</router-link>
                  <router-link
                    tag="button"
                    v-if="isAdmin"
                    :to="{ name: 'putwish', params: { id: wish.id } }"
                    class="btn btn-warning btn-block"
                  >Ändra önskesak</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    ...mapState(["wishes", "isAdmin"])
  }
};
</script>
