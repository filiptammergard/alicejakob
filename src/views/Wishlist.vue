<template>
  <div id="wishlist-view" class="container">
    <Wishlist />
    <div class="to-edges">
      <div class="center logo-container d-flex aligm-items-center">
        <img class="logo" src="../../public/logga2.png" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Wishlist from "../components/Wishlist";
import Footer from "../components/Footer";

export default {
  name: "wishlist-view",
  components: {
    Wishlist,
    Footer
  }
};
</script>