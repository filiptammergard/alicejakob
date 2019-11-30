<template>
  <div id="contact-component">
    <section class="light">
      <div class="container">
        <div class="align-self-center">
          <h1>Kontakt</h1>
          <p>
            Om du har en fråga eller vill komma i kontakt med värdarna av någon annan anledning går det bra att höra av sig till
            <a
              href="mailto:vardar@aliceochjakob.se"
            >vardar@aliceochjakob.se</a>
          </p>
        </div>
      </div>
    </section>
    <section class="dark">
      <div class="container">
        <h2>Hålla tal</h2>
        <p>Använd det här formuläret för att anmäla om du vill hålla tal eller spexa på bröllopsfesten. Värdarna kommer att höra av sig till dig när de har fått din anmälan om tal eller spex för vidare information.</p>
        <form
          name="talanmälan"
          method="POST"
          action="/tack"
          netlify
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="talanmälan" />
          <div class="form-row">
            <div class="col-md">
              <b>För- och efternamn*</b>
              <input type="text" class="form-control" name="För- och efternamn" required />
            </div>
            <div class="col-md">
              <b>Mejladress*</b>
              <input type="email" class="form-control" name="Mejladress" required />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md">
              <b>Relation till brudparet*</b>
              <input
                type="text"
                class="form-control"
                placeholder="Till exempel brudgummens gammelfarbror"
                name="Relation till brudparet"
                required
              />
            </div>
            <div class="col-md">
              <b>Ungefärlig tidsåtgång*</b>
              <input
                type="number"
                class="form-control"
                placeholder="Svara i antal minuter"
                name="Ungefärlig tidsåtgång"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md">
              <b>Hjälpmedel</b>
              <input
                type="text"
                class="form-control"
                placeholder="Till exempel projektor"
                name="Hjälpmedel"
              />
            </div>
            <div class="col-md">
              <b>Övriga önskemål</b>
              <input type="text" class="form-control" name="Övriga önskemål" />
            </div>
          </div>
          <button class="btn btn-custom btn-block text-white" type="submit">Skicka</button>
        </form>
        <br />
        <p>Fält markerade med * är obligatoriska och måste fyllas i.</p>
      </div>
    </section>
    <section class="light">
      <div class="container">
        <div class="align-self-center">
          <h2>Kontakt brudparet</h2>
          <p>
            Om du har en fråga som behöver ställas direkt till brudparet kan du göra det via
            <a
              href="mailto:brudparet@aliceochjakob.se"
            >brudparet@aliceochjakob.se</a>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "contact-component"
};
</script>