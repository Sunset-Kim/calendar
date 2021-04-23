import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {

  fetch() {
    let arr = [];
    for(let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        console.log(localStorage.key(i))
        let element = localStorage.getItem(localStorage.key(i))
        arr.push(JSON.parse(element))
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
    state: {
      taskList: storage.fetch(),
      dateId: '',
    },

    mutations: {
      loadDate(state, payload) {
        state.dateId = payload.id;
      },
      addNewTask(state, taskItem) {
        console.log(taskItem);
      }

    }
  })