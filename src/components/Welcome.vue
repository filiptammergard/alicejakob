<template>
  <div id="welcome-component">
    <h1>Välkommen!</h1>
    <p>Hej och välkommen till vår bröllopshemsida! Här har vi samlat information som kan vara bra för dig som bröllopsgäst att få ta del av.</p>
    <h2>Nedräkning</h2>
    <div class>
      <div class="card">
        <div class="card-header">Dagar</div>
        <div class="card-body">
          <p>{{ daysToWedding }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Timmar</div>
        <div class="card-body">
          <p>{{ hoursToWedding }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Minuter</div>
        <div class="card-body">
          <p>{{ minutesToWedding }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Sekunder</div>
        <div class="card-body">
          <p>{{ secondsToWedding }}</p>
        </div>
      </div>
    </div>
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
    let countDownDate = new Date("Aug 1, 2020 13:00:00").getTime();
    this.countDownDate(countDownDate);
    setInterval(() => {
      this.countDownDate(countDownDate);
    }, 1000);
  },
  methods: {
    countDownDate(countDownDate) {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
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