<template>
  <div id="contact-component">
    <section class="white d-flex align-items-center">
      <div class="container">
        <h1>Kontakt</h1>
        <p>Värdarna för bröllopsfesten är brudens tvillingbror Filip och hans fru Ida. Hör gärna av dig till dem om du har någon fråga om vad som helst som rör bröllopsfesten!</p>
        <p>För att värdarna ska kunna planera bröllopsfesten på ett bra sätt önskar de att du hör av dig så tidigt som möjligt om du vill hålla tal eller liknande på festen. Helst genom att fylla i formuläret nedan, men det går också bra att meddela värdarna genom någon av kontaktuppgifterna nedan. Försök så gott det går att anmäla tal eller spex innan den 20 juli.</p>
        <p>
          <b>Filip: &nbsp;</b> 076-138 98 24
        </p>
        <p>
          <b>Ida: &nbsp;</b> 073-890 31 86
        </p>
        <p>
          <b>Båda: &nbsp;</b>
          <a href="mailto:vardar@aliceochjakob.se">vardar@aliceochjakob.se</a>
        </p>
      </div>
    </section>
    <section class="dark d-flex align-items-center">
      <div class="container">
        <h2>Anmäl tal eller spex</h2>
        <p>Använd det här formuläret för att anmäla om du vill hålla tal eller liknande på bröllopsfesten. Värdarna kommer att höra av sig till dig när de har fått din anmälan om tal eller spex för vidare information.</p>
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
                placeholder="Till exempel brudens gammelfarbror"
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
    <section class="light d-flex align-items-center">
      <div class="container">
        <h2>Kontakta brudparet</h2>
        <p>Om du har en fråga som behöver ställas direkt till brudparet kan du göra det via någon av följande kontaktuppgifter:</p>
        <p>
          <b>Alice: &nbsp;</b> 070-394 62 66
        </p>
        <p>
          <b>Jakob: &nbsp;</b> 073-827 92 99
        </p>
        <p>
          <b>Båda: &nbsp;</b>
          <a href="mailto:brudparet@aliceochjakob.se">brudparet@aliceochjakob.se</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "contact-component"
};
</script>