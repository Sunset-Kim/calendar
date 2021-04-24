<template>
  <div id="app-input">
      <form v-on:submit="addNewTask" action="">
        <input v-model="taskItem" type="text" placeholder="date select">
        <button type="submit">
            <i class="fas fa-plus"></i>
        </button>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return{
            taskItem: '',
            isShown: false,
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
            if(this.taskItem === '' || this.dateId === null || this.dateId === '') {
                // 모달을 실행하는 부분
                console.log('입력이 없거나 날짜값이 없습니다.')
                this.taskItem = '';
                return
            }
            this.$store.commit('addNewTask',this.taskItem);
            this.taskItem = '';
        }
    }
    

}
</script>

<style>
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