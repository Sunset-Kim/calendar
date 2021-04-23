import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {

  fetch() {
    let arr = [];
    for(let i = 0; i < localStorage.length; i++) {
      if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
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
    getters: {
      attDate(state){
        return state.taskList.map(element => element.taskDate)
      }
    },
    mutations: {
      loadDate(state, payload) {
        state.dateId = payload.id;
      },
      addNewTask(state, taskItem) {
        //전송(저장)할 데이터 오브젝트를 만든다.
        let obj = {
          taskId : state.dateId + taskItem,
          taskName: taskItem,
          taskDate: state.dateId,
          completed: false,
          time: new Date(state.dateId).getTime(),
        }
        if(localStorage.getItem(obj.taskId)) {
          // list에서 받아가서 모달창을 on하는 기능
          console.log('중복값입니다')
          return
        } else {
          state.taskList.push(obj);
          localStorage.setItem(obj.taskId, JSON.stringify(obj))
        }
       
      }

    }
  })