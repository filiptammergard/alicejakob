<template>
  <div id="navbar-component">
    <nav class="d-flex align-items-center">
      <div class="d-flex flex-row justify-content-around container">
        <router-link :to="{ name: 'welcome'}">
          Välkommen
          <i class="fas fa-child"></i>
        </router-link>
        <router-link :to="{ name: 'find'}">
          Hitta
          <i class="fas fa-map-marked-alt"></i>
        </router-link>
        <router-link :to="{ name: 'accomodation'}">
          Boende
          <i class="fas fa-home"></i>
        </router-link>
        <router-link :to="{ name: 'wishlist'}">
          Önskelista
          <i class="fas fa-list-ul"></i>
        </router-link>
        <router-link :to="{ name: 'osa'}">
          O.S.A
          <i class="fas fa-paper-plane"></i>
        </router-link>
        <router-link :to="{ name: 'contact'}">
          Kontakt
          <i class="fas fa-envelope"></i>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar-component",
  methods: {}
};
</script>