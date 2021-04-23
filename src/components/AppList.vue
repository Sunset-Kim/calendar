<template>
    <div>
        <div class="btn-group">
            <button v-on:click="toggleActive" v-bind:class="{active: isActive}" class="btn-tap">전체보기</button>
            <button v-on:click="toggleActive" v-bind:class="{active: !isActive}" class="btn-tap">현재날짜보기</button>
        </div>
        <div class="list-container">
            <ul v-bind:class="{active: isActive}" class="task-list list-all">
                <h1>전체리스트</h1>
                <li v-for="(item,index) in allTasks" v-bind:key="item.taskId" v-bind:class="{completed: item.completed}" class="task-item">
                    <span v-on:click="toggleComplete(item,index)">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <span>{{item.taskName}}</span>
                    <span v-on:click="removeItem(item,index)" ><i class="fas fa-minus-circle"></i></span>
                </li>
            </ul>
            
            <ul v-bind:class="{active: !isActive}" class="task-list list-date">
                <h1>날짜리스트</h1>
                <li v-for="(item, index) in dateList" :key="item.taskId">
                    <span>{{index}}</span>
                    <span>{{item.taskName}}</span>
                    <span></span>
                </li>
            </ul>
        </div>
        
    </div>
    
  
</template>

<script>
export default {
    data() {
        return{
            isActive: true,
        }
    },
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
        },
        allTasks() {
            return this.$store.getters.sortList;
        }
    },
    methods: {
        toggleActive(){
            this.isActive = !this.isActive; 
        },
        toggleComplete(item,index) {
            this.$store.commit('toggleComplete',{item,index});
        },
        removeItem(item,index) {
            this.$store.commit('removeTask',{item,index});
        }
    }
}
</script>

<style>
.list-container {
    position: relative;
    height: 500px;
    border: 1px solid black;
}
.task-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s ease-in-out;
}
.task-item.completed {
    background: red;
}
.active {
    opacity: 1;
    visibility: visible;
}
.btn-group {
    display: flex;
}
.btn-tap {
    border: none;
    outline: none;
    padding: 5px 10px;
    border-radius: 5px 5px 0 0;
}
.btn-tap.active {
    background: gold;
}
</style>