<template>
  <div id="app">
    <section class="app-section">
      <Navbar />
      <main>
        <router-view />
      </main>
      <br />
    </section>
    <!-- <div class="center">
      <img class="logo" src="../public/logga2.png" />
    </div>-->
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
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
