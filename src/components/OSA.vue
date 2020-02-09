<template>
  <div id="osa-component">
    <section class="white d-flex align-items-center">
      <div class="container">
        <div class="align-self-center">
          <h1>O.S.A.</h1>
          <p>
            I det här formuläret kan du som har fått en inbjudan i brevlådan meddela om du kan komma eller inte på bröllopsfesten. Det går också bra att anmäla dig eller meddela att du inte kan komma genom att höra av dig till värdarna på annat sätt, se kontaktuppgifter i fliken
            <router-link :to="{ name: 'contact' }">Kontakt</router-link>. O.S.A. senast 1 juni.
          </p>
        </div>
      </div>
    </section>
    <section class="dark d-flex align-items-center">
      <div class="container">
        <h2>Anmälan till bröllopsfesten</h2>
        <form name="anmälan" method="POST" action="/tack" netlify data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="anmälan" />
          <b for>Svar*</b>
          <div class="form-row">
            <div class="col-md">
              <div class="form-check">
                <input
                  v-model="isComing"
                  class="form-check-input"
                  type="radio"
                  name="Svar"
                  id="Ja"
                  value="Jag kommer"
                />
                <label class="form-check-label" for="Ja">Jag kommer</label>
              </div>
              <div class="form-check">
                <input
                  v-model="isComing"
                  class="form-check-input"
                  type="radio"
                  name="Svar"
                  id="Nej"
                  value="Jag kan tyvärr inte komma"
                />
                <label class="form-check-label" for="Nej">Jag kan tyvärr inte komma</label>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md">
              <b>För- och efternamn*</b>
              <input type="text" name="För- och efternamn" class="form-control" />
            </div>
            <div class="col-md">
              <b>Mejladress*</b>
              <input type="email" name="Mejladress" class="form-control" />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md">
              <b>Matpreferenser</b>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="Vegetarisk"
                  value="Ja"
                  id="Vegetarisk"
                  :disabled="isComing == 'Jag kan tyvärr inte komma'"
                />
                <label class="form-check-label" for="Vegetarisk">Vegetarisk</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="Vegansk"
                  value="Ja"
                  id="Vegansk"
                  :disabled="isComing == 'Jag kan tyvärr inte komma'"
                />
                <label class="form-check-label" for="Vegansk">Vegansk</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="Glutenfri"
                  value="Ja"
                  id="Glutenfri"
                  :disabled="isComing == 'Jag kan tyvärr inte komma'"
                />
                <label class="form-check-label" for="Glutenfri">Glutenfri</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="Laktosfri"
                  value="Ja"
                  id="Laktosfri"
                  :disabled="isComing == 'Jag kan tyvärr inte komma'"
                />
                <label class="form-check-label" for="Laktosfri">Laktosfri</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="Mjölkfri"
                  value="Ja"
                  id="Mjölkfri"
                  :disabled="isComing == 'Jag kan tyvärr inte komma'"
                />
                <label class="form-check-label" for="Mjölkfri">Mjölkfri</label>
              </div>
            </div>
            <div class="col-md">
              <b>Övriga matpreferenser</b>
              <input
                type="text"
                name="Övriga matpreferenser"
                class="form-control"
                :disabled="isComing == 'Jag kan tyvärr inte komma'"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md">
              <b>Övriga upplysningar</b>
              <textarea
                class="form-control"
                name="Övriga upplysningar"
                rows="3"
                :disabled="isComing == 'Jag kan tyvärr inte komma'"
              ></textarea>
            </div>
            <div class="col-md">
              <b>Hälsning till brudparet</b>
              <textarea class="form-control" name="Hälsning till brudparet" rows="3"></textarea>
            </div>
          </div>
          <button class="btn btn-custom btn-block text-white" type="submit">Anmäl</button>
        </form>
        <br />
        <p>Fält markerade med * är obligatoriska och måste fyllas i.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "osa-component",
  data() {
    return {
      isComing: null
    };
  }
};
</script>