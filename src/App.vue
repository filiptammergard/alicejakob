<template>
  <div id="app">
    <section>
      <Navbar />
      <main>
        <router-view />
      </main>
      <br />
      <br />
      <br />
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
@import "src/assets/main.scss";
</style>