<template>
  <div id="osa-view" class="container">
    <OSA />
    <div class="to-edges">
      <div class="center logo-container d-flex aligm-items-center">
        <img class="logo" src="../../public/logga.png" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import OSA from "../components/OSA";
import Footer from "../components/Footer";

export default {
  name: "osa-view",
  components: {
    OSA,
    Footer
  }
};
</script>