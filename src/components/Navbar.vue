<template>
  <div id="navbar-component">
    <nav class="d-flex align-items-center">
      <div class="d-flex flex-row justify-content-between container">
        <router-link :to="{ name: 'welcome'}">
          <span>Välkommen</span>
          <i class="fas fa-child"></i>
        </router-link>
        <router-link :to="{ name: 'find'}">
          <span>Hitta</span>
          <i class="fas fa-map-marked-alt"></i>
        </router-link>
        <router-link :to="{ name: 'wishlist'}">
          <span>Önskelista</span>
          <i class="fas fa-list-ul"></i>
        </router-link>
        <router-link :to="{ name: 'osa'}">
          <span>O.S.A</span>
          <i class="fas fa-paper-plane"></i>
        </router-link>
        <router-link :to="{ name: 'contact'}">
          <span>Kontakt</span>
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