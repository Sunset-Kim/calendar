<template>
  <div id="app-title">
      <h1>Schedule</h1>
      <div class="current-date">
        <h2>{{currentDate}}</h2>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
       currentDate() {
            let date = (this.$store.state.dateId === '') ? `Please select a date!`: this.$store.state.dateId;
            return date;
        }
  }
}
</script>

<style>
#app-title {
  position: relative;
  font-weight: 900;
  align-self: flex-start;
  font-size: 30px;
}
#app-title .current-date {
  position: absolute;
  font-size: 16px;
  top: 50%;
  right: 0;
}
</style>