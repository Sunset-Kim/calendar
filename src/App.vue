<template>
  <div id="app">
    <div class="wrap">
      <div id="app-title">
      <h1>Schedule</h1>
      </div>
      <app-list></app-list>
      <app-input></app-input>
    </div>
    
    <calendar></calendar>
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
:root {
  --primary: #242947;
  --primary-light: #4e5173;
  --primary-dark: #000020;

  --secondary: #e23d55;
  --secondary-light: #ff7281;
  --secondary-dark: #aa002d;

}
#app {
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 30px;
  background: #252A48;
  overflow: hidden;
}
#app .wrap {
  padding: 0 35px;
}
#app-title {
  color: white;
  padding: 40px 0 35px;
  font-weight: 900;
  align-self: flex-start;
  font-size: 30px;
}
#app-input {
  text-align: center;
  padding: 20px;
}
#calendar {
  height: calc(100% - 355px)
}
</style>
