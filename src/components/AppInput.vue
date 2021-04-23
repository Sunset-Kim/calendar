<template>
  <div id="app-input">
      <form v-on:submit="addNewTask" action="">
        <input v-model="taskItem" type="text" placeholder="add your task">
        <button type="submit">add</button>
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

</style>