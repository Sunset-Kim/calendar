<template>
  <div id="app">
    <calendar></calendar>
    <app-input></app-input>
    <app-list></app-list>
    <app-full-list></app-full-list>
  </div>
</template>

<script>
import calendar from './components/calendar.vue'
import AppList from './components/AppList.vue'
import AppInput from './components/AppInput.vue'
import AppFullList from './components/AppFullList.vue'
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
    AppFullList,
  },
  store,
}
</script>

<style>
#app {
  
}
</style>
