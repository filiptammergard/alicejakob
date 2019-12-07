<template>
  <div id="wishlist-component">
    <section class="white d-flex align-items-center">
      <div class="container">
        <h1>Önskelista</h1>
        <p>
          Den finaste presenten ni kan ge är att få är att vi får dela vår bröllopsdag med er. Vill
          ni ändå gärna ge något extra så är här tips på saker som vi önskar oss!
        </p>
        <router-link
          class="btn btn-custom text-white btn-block"
          tag="button"
          v-if="isAdmin"
          :to="{ name: 'postwish' }"
          >Ny önskesak</router-link
        >
      </div>
    </section>

    <section class="dark d-flex-items-center" v-if="isAdmin">
      <div class="container">
        <h2>Boka bröllopspresent</h2>

        <draggable v-model="wishes" @end="onEnd" class="row">
          <div class="col-md-4 wish" v-for="wish in wishes" :key="wish.id">
            <div class="card">
              <div>
                <a class="imagelink" :href="wish.link" target="_blank">
                  <img v-if="wish.imagelink" :src="wish.imagelink" />
                </a>
              </div>
              <div class="card-body text-dark" style="height: 100%;">
                <div>
                  <div>
                    <p>
                      <b>{{ wish.item }}</b>
                    </p>
                    <p>Antal kvar: {{ wish.amount - wish.given }}</p>
                    <p class="card-text"></p>
                  </div>
                  <div>
                    <button @click="viewWish(wish)" class="btn btn-custom btn-block text-white">
                      Visa och boka
                    </button>
                    <router-link
                      tag="button"
                      :to="{ name: 'putwish', params: { id: wish.id } }"
                      class="btn btn-warning btn-block"
                      >Ändra önskesak</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </draggable>
      </div>
    </section>

    <section class="dark d-flex-items-center" v-else>
      <div class="container">
        <h2>Boka bröllopspresent</h2>
        <div class="row">
          <div v-for="wish in wishes" :key="wish.id" class="col-md-4 wish">
            <div class="card">
              <div>
                <a class="imagelink" :href="wish.link" target="_blank">
                  <img v-if="wish.imagelink" :src="wish.imagelink" />
                </a>
              </div>
              <div class="card-body text-dark" style="height: 100%;">
                <div>
                  <div>
                    <p>
                      <b>{{ wish.item }}</b>
                    </p>
                    <p>Antal kvar: {{ wish.amount - wish.given }}</p>
                    <p class="card-text"></p>
                  </div>
                  <div>
                    <button @click="viewWish(wish)" class="btn btn-custom btn-block text-white">
                      Visa och boka
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="opacity-overlay"
      :class="{ show: confirm }"
      @click="
        hideWish();
        confirm = false;
      "
    ></div>

    <div class="container container-fixed-centered" :class="{ hide: !confirm }">
      <div class="card text-center shadow">
        <h2 class="card-header">{{ wish.item }}</h2>
        <div class="card-body" v-if="!booked">
          <p>
            Klicka på
            <span class="btn btn-primary btn-sm btn-custom">+</span> eller
            <span class="btn btn-primary btn-sm btn-custom">−</span> för att bestämma antalet av
            önskesaken <strong>{{ wish.item }}</strong> du vill boka.
          </p>
          <p>
            Specifikation:
            <strong>{{ wish.specification }}</strong>
          </p>
          <p v-show="wish.link">
            <a :href="wish.link" target="_blank">Länk</a>
          </p>
          <p>
            Antal önskade:
            <strong>{{ wish.amount }} st</strong>
          </p>
          <p>
            Antal kvar:
            <strong>{{ wish.amount - wish.given }} st</strong>
          </p>
          <div>
            <br />
            <button
              class="btn btn-primary btn-sm btn-custom"
              @click="wish.bookingAmount--"
              :disabled="wish.bookingAmount <= 1"
            >
              −
            </button>
            <button class="btn btn-primary btn-custom" @click="bookWishHandler(wish)">
              Boka
              <span>{{ wish.bookingAmount }}</span>
            </button>
            <button
              class="btn btn-primary btn-sm btn-custom"
              @click="wish.bookingAmount++"
              :disabled="wish.bookingAmount >= wish.amount - wish.given"
            >
              +
            </button>
            <br />
            <br />
            <button class="btn btn-secondary" @click="confirm = false">Avbryt</button>
          </div>
        </div>
        <div class="card-body" v-else>
          <h2>Tack för din bokning!</h2>
          <br />
          <p>
            Du har bokat
            <strong>
              {{ wish.bookingAmount }}
              st
            </strong>
            av önskesaken <strong>{{ wish.item }}</strong
            >.
          </p>
          <p>
            Om någonting blev fel eller om du har en fråga går det bra att höra av sig till
            <router-link :to="{ name: 'contact' }">värdarna</router-link>&nbsp; så hjälper de dig.
            Tack!
          </p>
          <br />
          <button
            class="btn btn-primary btn-custom"
            @click="
              hideWish();
              confirm = false;
            "
          >
            Tillbaka till önskelistan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import draggable from "vuedraggable";

export default {
  name: "wishlist-component",
  data() {
    return {
      wish: "",
      confirm: false
    };
  },
  components: {
    draggable
  },
  computed: {
    ...mapState(["wishes", "isAdmin", "booked", "isAdmin"]),
    wishes: {
      get() {
        return this.$store.state.wishes;
      },
      set(wishes) {
        this.updateWishes(wishes);
        // eslint-disable-next-line no-console
        console.log(wishes);
      }
    }
  },
  methods: {
    ...mapActions(["hideWish", "bookWish", "onEnd", "updateWishes"]),
    viewWish(wish) {
      this.wish = wish;
      this.confirm = true;
    },
    bookWishHandler(wish) {
      this.bookWish(wish);
    }
  }
};
</script>
