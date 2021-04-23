import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      Alltask: '',
      dateId: '',
    },
    mutations: {
      loadDate(state, payload) {
        // 달력에서 날짜를 가지고 온다.
        // console.log(state,payload);
        state.dateId = payload.id;
      }
    }
  })