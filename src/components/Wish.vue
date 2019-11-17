<template>
  <div id="wish-component">
    <h1>{{ wish.item }}</h1>
    <img :src="wish.imagelink" />
    <p><b>Antal: </b>{{ wish.amount - wish.given }}</p>
    <p><b>Specifikation: </b>{{ wish.specification }}</p>
    <p>
      <b><a :href="wish.link">Länk</a></b>
    </p>
    <button class="btn btn-secondary">Boka önskesak</button>
    <br />
    <br />
    <router-link tag="button" class="btn btn-secondary" :to="{ name: 'wishlist' }"
      >Tillbaka till önskelistan</router-link
    >
  </div>
</template>

<script>
export default {
  name: "wish-component",
  data() {
    return {};
  }
};
</script>
