<template>
  <div id="app">
    <calendar></calendar>
    <app-input></app-input>
    <app-list></app-list>
  </div>
</template>

<script>
import calendar from './components/calendar.vue'
import AppList from './components/AppList.vue'
import AppInput from './components/AppInput.vue'
import {store} from './store/store.js'

export default {
  name: 'App',
  data(){
    return{}
  },
  components: {
    calendar,
    AppList,
    AppInput,
  },
  store,
}
</script>

<style>
#app {
  
}
</style>
