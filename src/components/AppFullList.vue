<template>
    <div>
        <ul>
            <h1>전체를 보여주는 리스트 컴포넌트 입니다</h1>
            <li v-for="(item,index) in allTasks" v-bind:key="item.taskId">
                <span>{{index}}</span>
                <span>{{item.taskName}}</span>
                <span></span>
            </li>
        </ul>
    </div>
  
</template>

<script>
export default {
    computed: {
        allTasks() {
            return this.$store.state.taskList;
        }
    }
}
</script>

<style>

</style>