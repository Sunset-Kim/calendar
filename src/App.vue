<template>
  <div id="app">
    <div class="app-left">
      <calendar></calendar>
    </div>
    <div class="app-right">
      <app-input></app-input>
      <app-list></app-list>
    </div>
    
    
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
@import url("~reset-css/reset.css");
@import url('./css/style.css');

#app {
  width: 100%;
  height: 100%;
  display: flex;
}
.app-left {
  width: 60%;
}
</style>
