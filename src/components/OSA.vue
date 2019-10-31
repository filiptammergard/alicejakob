<template>
  <div id="osa-component">
    <h1>O.S.A</h1>
    <p>
      I det här formuläret kan du som har fått en inbjudan i brevlådan meddela om du kan komma eller inte på bröllopsfesten. Om du inte kan komma vill vi veta även det, men då går det också bra att meddela det på något annat sätt om det känns smidigare. Om du upplever att formuläret är knepigt går det även att höra av sig till värdarna på annat sätt i fliken
      <router-link :to="{ name: 'contact' }">Kontakt</router-link>.
    </p>
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
              id="option1"
              value="Jag kommer"
            />
            <label class="form-check-label" for="option1">Jag kommer</label>
          </div>
          <div class="form-check">
            <input
              v-model="isComing"
              class="form-check-input"
              type="radio"
              name="Svar"
              id="option2"
              value="Jag kan tyvärr inte komma"
            />
            <label class="form-check-label" for="option2">Jag kan tyvärr inte komma</label>
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
          <input type="text" name="Mejladress" class="form-control" />
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
              id="foodOption1"
              :disabled="isComing == 'false'"
            />
            <label class="form-check-label" for="foodOption1">Vegetarisk</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="Vegansk"
              value="Ja"
              id="foodOption2"
              :disabled="isComing == 'false'"
            />
            <label class="form-check-label" for="foodOption2">Vegansk</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="Glutenfri"
              value="Ja"
              id="foodOption3"
              :disabled="isComing == 'false'"
            />
            <label class="form-check-label" for="foodOption3">Glutenfri</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="Laktosfri"
              value="Ja"
              id="foodOption4"
              :disabled="isComing == 'false'"
            />
            <label class="form-check-label" for="foodOption4">Laktosfri</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              name="Mjölkfri"
              value="Ja"
              id="foodOption5"
              :disabled="isComing == 'false'"
            />
            <label class="form-check-label" for="foodOption5">Mjölkfri</label>
          </div>
        </div>
        <div class="col-md">
          <b>Övriga matpreferenser</b>
          <input
            type="text"
            name="Övriga matpreferenser"
            class="form-control"
            :disabled="isComing == 'false'"
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
            :disabled="isComing == 'false'"
          ></textarea>
        </div>
        <div class="col-md">
          <b>Hälsning till brudparet</b>
          <textarea class="form-control" name="Hälsning till brudparet" rows="3"></textarea>
        </div>
      </div>
      <button class="btn btn-secondary btn-block" type="submit">Anmäl</button>
    </form>
    <p>Fält markerade med * är obligatoriska och måste fyllas i.</p>
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