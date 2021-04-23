<template>
    <div>
        <h1>여기는 테스트 코드입니다</h1>
        <h2>리스트의 컴퓨티드 데이터 입니다. {{dateId}}</h2>
        <ul>
            <li v-for="(item, index) in dateList" :key="item.name">
                <span>{{index}}</span>
                <span>{{item.name}}</span>
                <span></span>
            </li>
        </ul>
    </div>
    
  
</template>

<script>
export default {
    computed: {
        dateId(){
            return this.$store.state.dateId;
        },
        dateList(){
            return this.$store.state.taskList;
        }
    }
}
</script>

<style>

</style>