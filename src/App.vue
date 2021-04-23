<template>
  <div id="app">
    <calendar v-on:load="print"></calendar>
    <div>{{date}}</div>
    <div>{{day}}</div>
  </div>
</template>

<script>
import calendar from './components/calendar.vue'
import {store} from './store/store.js'

export default {
  name: 'App',
  data(){
    return{
     date: '',
    }
  },
  computed: {
    day(){
      return new Date(this.date).getDate();
    }
  },
  components: {
    calendar,
  },
  methods: {
    print(payload) {
      console.log(payload);
      this.date = payload.date;
    }
  },
  store,
}
</script>

<style>
#app {
  
}
</style>
