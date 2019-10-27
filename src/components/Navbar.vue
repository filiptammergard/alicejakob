<template>
  <div id="navbar-component">
    <nav class="navbar navbar-expand navbar-dark navbar-custom shadow">
      <div class="container">
        <div class="navbar-nav">
          <router-link
            class="nav-item nav-link"
            :class="{ 'active': isRoute('') }"
            :to="{ name: 'welcome'}"
          >Välkommen</router-link>
          <router-link
            class="nav-item nav-link"
            :class="{ 'active': isRoute('/hitta') }"
            :to="{ name: 'find'}"
          >Hitta</router-link>
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