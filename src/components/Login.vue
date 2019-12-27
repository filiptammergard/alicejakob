<template>
  <div id="login-component">
    <section class="front-image">
      <div class="container">
        <div class="row glow">
          <div class="col-md-6"></div>
          <div class="col-md-6 text-right">
            <h1>Välkommen!</h1>
            <p>
              Välkommen till Alice &amp; Jakobs bröllopshemsida. Här kan du se informaiton som kan
              vara bra att hålla koll på och även anmäla dig till bröllopet eller anmäla att du vill
              hålla tal eller spexa på festen.
            </p>
            <p>Skrolla ner för att logga in!</p>
          </div>
        </div>
      </div>
      <a href="#login-form" class="scroll-down"></a>
    </section>
    <section class="dark d-flex" id="login-form">
      <div class="container align-self-center">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <h2>Logga in</h2>
            <p>
              För att få tillgång till hemsidan behöver du ange lösenordet som står på inbjudan till
              bröllopet. Om du har tappat bort inbjudan kan du mejla
              <a
                href="mailto:brudparet@aliceochjakob.se"
              >brudparet@aliceochjakob.se</a> för att få
              lösenordet igen.
            </p>
            <form @submit.prevent="login">
              <div class="form-group">
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  autocomplete="current-password"
                  placeholder="Lösenord"
                />
              </div>
              <button type="submit" class="btn btn-custom btn-block text-white">{{ loginBtnText }}</button>
            </form>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </section>
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
    ...mapActions(["login", "getWishes"]),
    async login() {
      this.loginBtnText = "Loggar in...";
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "welcome" });
          this.getWishes();
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
<style lang="scss" scoped>
.glow {
  color: black;
  text-shadow: 0 0 20px #d8d8d8, 0 0 30px #d8d8d8, 0 0 40px #d8d8d8,
    0 0 50px #d8d8d8, 0 0 60px #d8d8d8, 0 0 70px #d8d8d8, 0 0 80px #d8d8d8,
    0 0 90px #d8d8d8, 0 0 100px #d8d8d8;
}
</style>