<template>
  <div id="app">
    <Navbar />
    <br />
    <br />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "src/assets/main.scss";
</style>