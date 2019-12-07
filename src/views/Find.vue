<template>
  <div id="find-view" class="container">
    <Find />
    <div class="to-edges">
      <div class="center logo-container d-flex aligm-items-center">
        <img class="logo" src="../../public/logga2.png" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Find from "../components/Find";
import Footer from "../components/Footer";

export default {
  name: "find-view",
  components: {
    Find,
    Footer
  }
};
</script>