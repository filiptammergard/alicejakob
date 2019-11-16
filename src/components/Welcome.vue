<template>
  <div id="welcome-component">
    <h1>Välkommen!</h1>
    <p>Hej och välkommen till vår bröllopshemsida! Här har vi samlat information som kan vara bra för dig som bröllopsgäst att få ta del av.</p>
    <div class="center">
      <img src="../../public/alicejakob.jpg" />
    </div>
    <br />
    <div class="d-flex flex-row justify-content-around countdown">
      <div>
        <p>
          <span>{{ daysToWedding }}</span>
          <br />
          <span>dagar</span>
        </p>
      </div>
      <div>
        <p>
          <span>{{ hoursToWedding }}</span>
          <br />
          <span>timmar</span>
        </p>
      </div>
      <div>
        <p>
          <span>{{ minutesToWedding }}</span>
          <br />
          <span>minuter</span>
        </p>
      </div>
      <div>
        <p>
          <span>{{ secondsToWedding }}</span>
          <br />
          <span>sekunder</span>
        </p>
      </div>
    </div>
    <h2 style="text-align: center;">... kvar till Alice &amp; Jakobs vigsel</h2>
  </div>
</template>

<script>
export default {
  name: "welcome-component",
  data() {
    return {
      timeToWedding: "",
      daysToWedding: "",
      hoursToWedding: "",
      minutesToWedding: "",
      secondsToWedding: ""
    };
  },
  created() {
    let countDownDate = new Date("Aug 1, 2020 14:30:00").getTime();
    this.countDownDate(countDownDate);
    setInterval(() => {
      this.countDownDate(countDownDate);
    }, 1000);
  },
  methods: {
    countDownDate(countDownDate) {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      this.daysToWedding = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hoursToWedding = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutesToWedding = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.secondsToWedding = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }
};
</script>