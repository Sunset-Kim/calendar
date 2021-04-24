<template>
  <div id="app">
    <div class="wrap">
      <app-title></app-title>
      <app-list></app-list>
      <app-input></app-input>
    </div>
    
    <calendar></calendar>
  </div>
</template>

<script>
import calendar from './components/calendar.vue';
import AppList from './components/AppList.vue';
import AppInput from './components/AppInput.vue';
import AppTitle from './components/AppTitle.vue'
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
    AppTitle,
  },
  store,
}
</script>

<style>
@import url("~reset-css/reset.css");
@import url('./css/style.css');
:root {
  --primary: #939597;
  --primary-light: #c3c6c8;
  --primary-dark: #656769;

  --secondary: #F5DF4D;
  --secondary-light: #ffff80;
  --secondary-dark: #bfae0e;

  --text-white: white;
  --text-primary: #2b2b2b;
  --text-secondary: #555;
}
#app {
  min-width: 300px;
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 0 auto;  
  border-radius: 30px;
  background: var(--primary);
  overflow: hidden;
  color: var(--text-white)
}
#app .wrap {
  padding: 0 35px;
}
#app-title {
  height: 100px;
  padding: 40px 0 35px;
}
#app-input {
  text-align: center;
  padding: 20px;
}
#calendar {
  height: calc(100% - 350px)
}
</style>
