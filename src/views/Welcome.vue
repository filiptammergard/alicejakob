<template>
  <div id="welcome-view" class="container">
    <Welcome />
    <Countdown />
  </div>
</template>

<script>
import Welcome from "../components/Welcome";
import Countdown from "../components/Countdown";

export default {
  name: "welcome-view",
  components: {
    Welcome,
    Countdown
  }
};
</script>