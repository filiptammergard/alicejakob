<template>
  <div id="login-component">
    <h1>Logga in</h1>
    <p>
      Välkommen till Alice &amp; Jakobs bröllopshemsida. Här kan du logga in och se informaiton som kan vara bra att hålla koll på och även anmäla dig till bröllopet eller anmäla att du vill hålla tal eller spexa på festen. Lösenordet finns på inbjudan till bröllopet. Om du har tappat bort inbjudan kan du mejla
      <a
        href="mailto:brudparet@aliceochjakob.se"
      >brudparet@aliceochjakob.se</a> för att få lösenordet igen.
    </p>
    <form @submit.prevent="login">
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          autofocus
          class="form-control"
          autocomplete="current-password"
          placeholder="Lösenord"
        />
      </div>
      <button type="submit" class="btn btn-custom btn-block text-white">{{ loginBtnText }}</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";

export default {
  name: "login-component",
  data() {
    return {
      password: "",
      loginBtnText: "Logga in"
    };
  },
  computed: {
    ...mapState(["adminPassword", "guestPassword"]),
    email() {
      if (this.password == this.adminPassword) {
        return "admin@wishlist.com";
      } else if (this.password == this.guestPassword) {
        return "guest@wishlist.com";
      } else {
        return "";
      }
    }
  },
  methods: {
    ...mapActions(["login"]),
    async login() {
      this.loginBtnText = "Loggar in...";
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "welcome" });
        })
        .catch(() => {
          alert("Fel lösenord. Försök igen.");
        });
      this.password = "";
      this.loginBtnText = "Logga in";
    }
  }
};
</script>