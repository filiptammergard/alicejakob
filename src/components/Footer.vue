<template>
  <div id="footer-component">
    <footer>&copy; {{ currentYear}} Tammergård</footer>
  </div>
</template>

<script>
export default {
  name: "footer-component",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>