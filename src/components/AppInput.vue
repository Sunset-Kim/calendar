<template>
  <div>
      <input v-model="todoList" type="text" placeholder="add your task">
  </div>
</template>

<script>
export default {
    data() {
        return{
            todoList: '',
        }
    }

}
</script>

<style>

</style>