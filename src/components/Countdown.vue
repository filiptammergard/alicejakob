<template>
  <div id="countdown-component">
    <section class="light">
      <div class="d-flex flex-row justify-content-around">
        <div>
          <p>{{ daysToWedding }}</p>
          <p>Dagar</p>
        </div>
        <div>
          <p>{{ hoursToWedding }}</p>
          <p>Timmar</p>
        </div>
        <div>
          <p>{{ minutesToWedding }}</p>
          <p>Minuter</p>
        </div>
        <div>
          <p>{{ secondsToWedding }}</p>
          <p>Sekunder</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "countdown-component",
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
