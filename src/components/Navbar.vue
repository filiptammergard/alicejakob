<template>
  <div id="navbar-component">
    <nav v-if="isAuth">
      <div class="d-flex flex-row justify-content-between container">
        <router-link :to="{ name: 'welcome' }">
          <span>Välkommen</span>
          <i class="fas fa-child"></i>
        </router-link>
        <router-link :to="{ name: 'find' }">
          <span>Hitta</span>
          <i class="fas fa-map-marked-alt"></i>
        </router-link>
        <router-link :to="{ name: 'wishlist' }">
          <span>Önskelista</span>
          <i class="fas fa-list-ul"></i>
        </router-link>
        <router-link :to="{ name: 'osa' }">
          <span>O.S.A.</span>
          <i class="fas fa-paper-plane"></i>
        </router-link>
        <router-link :to="{ name: 'contact' }">
          <span>Kontakt</span>
          <i class="fas fa-envelope"></i>
        </router-link>
        <a style="display:none" class="nav-item nav-link" @click="logout">Logga ut</a>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "navbar-component",
  computed: {
    ...mapState(["isAuth"])
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>
