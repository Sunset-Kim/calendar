<template>
    <div>
        <h1>여기는 테스트 코드입니다</h1>
        <h2>리스트의 컴퓨티드 데이터 입니다. {{dateId}}</h2>
        <ul>
            <li v-for="(item, index) in dateList" :key="item.taskId">
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
        dateId(){
            return this.$store.state.dateId;
        },
        dateList(){
            // 데이터 아이디에 맞는 리스트를 불러온다.
            let result = this.$store.state.taskList.filter(element => {
                return element.taskDate === this.dateId;
            })
            return result;
        }
    }
}
</script>

<style>

</style>