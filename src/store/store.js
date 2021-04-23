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
      // 시간순서대로 정리된 list
      sortList(state) {
        return state.taskList.sort((a,b) => {
          return a.time - b.time;
        })
      },
      // 현재 tasklist의 등록된 날짜값을 중복없이 가지고 옴
      attDate(state){
        let date = state.taskList.map(element => element.taskDate);
        return new Set(date);
      }
    },
    mutations: {
      // 현재날짜를 받아옴
      loadDate(state, payload) {
        if(state.dateId === payload.id) {
          state.dateId = '';
        } else {
          state.dateId = payload.id;
        }
      },
      // task를 등록함
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
       
      },
      // 완료된 리스트를 다시 로컬스토리지와 tasklist에 업데이트함
      toggleComplete(state,payload) {
        const result = state.taskList.find(element => {
          return element.taskId === payload.item.taskId;
        });
        result.completed = !result.completed;
        localStorage.setItem(result.taskId,JSON.stringify(result));
      },
      // 아이템을 지운다.
      removeTask(state,payload) {
        const index = state.taskList.indexOf(payload.item)
        if(index < 0) {
          return
        } else {
          state.taskList.splice(index,1);
          localStorage.removeItem(payload.item.taskId);
        }
      }
    }
  })