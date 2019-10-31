<template>
  <div id="fourohfour-component">
    <h1>404</h1>
    <p>
      Tyvärr finns inte sidan som angavs. Klicka
      <router-link :to="{ name: 'welcome' }">här</router-link>&nbsp;för att komma tillbaka till startsidan.
    </p>
  </div>
</template>

<script>
export default {
  name: "fourohfour-component"
};
</script>