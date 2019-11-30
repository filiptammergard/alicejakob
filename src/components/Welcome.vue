<template>
  <div id="welcome-component">
    <section class="white d-flex align-items-center">
      <div class="container">
        <h1>Välkommen!</h1>
        <p>
          Hej och välkommen till vår bröllopshemsida! Den 1 augusti 2020 ska vi säga JA till varandra
          och vi hoppas att ni vill dela denna dag med oss! På den här hemsidan finns förhoppningsvis
          allt ni behöver veta inför bröllopet, här kan ni exempelvis O.S.A. till bröllopet, få hjälp
          att hitta till vigsel och fest och anmäla om ni vill bidra genom tal eller liknande på
          bröllopsfesten.
        </p>
      </div>
    </section>
    <section class="dark d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6 align-self-center">
            <h2>
              <span>Datum</span>
              <span>1 augusti 2020</span>
            </h2>
            <h2>
              <span>Vigsel</span>
              <span>Danmarks Kyrka</span>
            </h2>
            <h2>
              <span>Fest</span>
              <span>Marma Gård</span>
            </h2>
          </div>
          <div class="col-md-6">
            <img src="../../public/par.png" alt="Alice &amp; Jakob" width="450" height="301" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "welcome-component"
};
</script>
