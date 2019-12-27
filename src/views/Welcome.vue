<template>
  <div id="welcome-view" class="container">
    <Welcome />
    <Countdown />
    <div class="to-edges">
      <div class="center logo-container d-flex aligm-items-center">
        <img class="logo" src="../../public/logga.png" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Welcome from "../components/Welcome";
import Countdown from "../components/Countdown";
import Footer from "../components/Footer";

export default {
  name: "welcome-view",
  components: {
    Welcome,
    Countdown,
    Footer
  }
};
</script>