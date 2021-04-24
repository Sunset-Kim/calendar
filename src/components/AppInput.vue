<template>
  <div id="app-input">
      <form v-on:submit="addNewTask" action="">
        <input v-model="taskItem" ref="input" type="text" placeholder="date select">
        <button type="submit">
            <i class="fas fa-plus"></i>
        </button>
      </form>
      <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">안내메세지</h3>
            <p slot="body">{{errorMsg}}</p>
      </modal>
  </div>
</template>

<script>
import modal from '../components/common/modal'

export default {
    data() {
        return{
            taskItem: '',
            isShown: false,
            showModal: false,
            errorMsg: '',
        }
    },
    computed: {
        dateId() {
            return this.$store.state.dateId;
        }
        
    },
    methods: {
        addNewTask(e){
            e.preventDefault();
            if(this.dateId === null || this.dateId === '') {
                this.showModal = true;
                this.errorMsg = `날짜가 선택되지 않았습니다. 캘린더에서 날짜를 선택해주세요`;
                this.taskItem = '';
                this.$refs.input.blur();
                return
            } else if (this.taskItem === '') {
                this.showModal = true;
                this.errorMsg = `입력값이 감지 되지 않았습니다.`
                this.taskItem = '';
                this.$refs.input.blur();
                this.
                return
            }
            this.$store.commit('addNewTask',this.taskItem);
            this.taskItem = '';
        }
    },
    components: {
        modal,
    }
    

}
</script>

<style scoped>
#app-input form{
    position: relative;
}
#app-input input {
    width: 100%;
    height: 30px;
    padding-left: 20px;
    border-radius: 20px;
}
#app-input input::placeholder {
    transition: 0.3s ease-in-out;
}
#app-input input:focus::placeholder {
    opacity: 0;
}
#app-input button {
    position: absolute;
    right: 10px;
    top: 50%;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--secondary-light);
    transform: translateY(-50%);
    transition: 0.2s ease-in-out;
}
#app-input button:hover,
#app-input button:active {
    background: var(--secondary);
}
</style>