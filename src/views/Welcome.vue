<template>
  <div id="welcome-view" class="container">
    <Welcome />
    <Countdown />
    <Corona />
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
import Corona from "../components/Corona";

export default {
  name: "welcome-view",
  components: {
    Welcome,
    Countdown,
    Footer,
    Corona,
  },
};
</script>
