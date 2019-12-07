<template>
  <div id="contact-view" class="container">
    <Contact />
    <div class="to-edges">
      <div class="center logo-container d-flex aligm-items-center">
        <img class="logo" src="../../public/logga2.png" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  name: "contact-view",
  components: {
    Contact,
    Footer
  }
};
</script>