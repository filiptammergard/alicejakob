<template>
  <div id="navbar-component">
    <nav class="navbar navbar-expand navbar-light shadow">
      <div class="container">
        <div class="navbar-nav">
          <router-link class="nav-link" :class="{ 'active': isRoute('') }" :to="{ name: 'welcome'}">
            Välkommen
            <i class="fas fa-child"></i>
          </router-link>
          <router-link
            class="nav-link"
            :class="{ 'active': isRoute('/hitta') }"
            :to="{ name: 'find'}"
          >
            Hitta
            <i class="fas fa-map-marked-alt"></i>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar-component",
  methods: {
    isRoute(currentRoute) {
      return this.$route.matched.some(route => route.path === currentRoute);
    }
  }
};
</script>