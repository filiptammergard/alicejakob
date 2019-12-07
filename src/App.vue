<template>
  <div id="app">
    <section class="app-section">
      <Navbar />
      <main>
        <router-view />
      </main>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  },
  created() {
    this.getWishes();
  },
  methods: {
    ...mapActions(["getWishes"])
  }
};
</script>

<style lang="scss">
@import "src/assets/main.scss";
</style>
