<template>
  <div id="welcome-component">
    <section class="white front-image-color background-element">
      <div class="container base-element">
        <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-6 text-right">
            <h1>Välkommen!</h1>
            <p class="glow">
              Hej och välkommen till vår bröllopshemsida! Den 1 augusti 2020 ska vi säga JA till
              varandra och vi hoppas att ni vill dela denna dag med oss! På den här hemsidan finns
              förhoppningsvis allt ni behöver veta inför bröllopet, här kan ni exempelvis O.S.A.
              till bröllopet, få hjälp att hitta till vigsel och fest och anmäla om ni vill bidra
              genom tal eller liknande på bröllopsfesten.
            </p>
          </div>
        </div>
      </div>
      <a href="#info" class="scroll-down"></a>
    </section>
    <section id="info" class="dark row contains-image">
      <div class="container col-md-6 d-flex align-items-center">
        <div class="height-on-small d-flex align-items-center" style="width: 100%;">
          <div style="width:75%;max-width:30rem;">
            <table style="width:100%">
              <tr>
                <td>
                  <h2>Datum</h2>
                </td>
                <td>
                  <h2>1 augusti 2020</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h2>Vigsel</h2>
                </td>
                <td>
                  <h2>Danmarks Kyrka</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h2>Fest</h2>
                </td>
                <td>
                  <h2>Marma Gård</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h2>Klädsel</h2>
                </td>
                <td>
                  <h2>Festfin</h2>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-6 section-image3"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "welcome-component"
};
</script>

<style lang="scss" scoped>
.glow {
  color: black;
  text-shadow: 0 0 20px #d4e6f4, 0 0 30px #d4e6f4, 0 0 40px #d4e6f4,
    0 0 50px #d4e6f4, 0 0 60px #d4e6f4, 0 0 70px #d4e6f4, 0 0 80px #d4e6f4,
    0 0 90px #d4e6f4, 0 0 100px #d4e6f4;
}
</style>