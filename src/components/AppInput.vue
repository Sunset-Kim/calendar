<template>
  <div>
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
            console.log(this.dateId);
            e.preventDefault();
            if(this.taskItem === '' || this.dateId === null) {
                // 모달을 실행하는 부분
                return
            }
            this.$store.commit('addNewTask', this.taskItem);
        }
    }
    

}
</script>

<style>

</style>