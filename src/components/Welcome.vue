<template>
  <div id="welcome-component">
    <section class="white front-image background-element">
      <div class="container base-element">
        <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-6 text-right">
            <h1>Välkommen!</h1>
            <p>
              Hej och välkommen till vår bröllopshemsida! Den 1 augusti 2020 ska vi säga JA till varandra
              och vi hoppas att ni vill dela denna dag med oss! På den här hemsidan finns förhoppningsvis
              allt ni behöver veta inför bröllopet, här kan ni exempelvis O.S.A. till bröllopet, få hjälp
              att hitta till vigsel och fest och anmäla om ni vill bidra genom tal eller liknande på
              bröllopsfesten.
            </p>
          </div>
        </div>
      </div>
      <a href="#info" class="scroll-down"></a>
    </section>
    <section id="info" class="dark row contains-image">
      <div class="container col-md-6 d-flex align-items-center">
        <div class="height-on-small d-flex align-items-center">
          <div>
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
        </div>
      </div>
      <div class="col-md-6 section-image">
        <img class="section-image" src="../../public/par2.png" alt="Alice &amp; Jakob" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "welcome-component"
};
</script>
