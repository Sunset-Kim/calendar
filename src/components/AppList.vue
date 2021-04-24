<template>
    <div id="app-list">
        <div class="btn-group">
            <button v-on:click="toggleActive" v-bind:class="{active: isActive}" class="btn btn-tap">전체보기</button>
            <button v-on:click="toggleActive" v-bind:class="{active: !isActive}" class="btn btn-tap">현재날짜보기</button>
        </div>
        <div class="list-container">
            <ul v-bind:class="{active: isActive}" class="task-list list-all">
                <li v-for="(item,index) in allTasks" v-bind:key="item.taskId" v-bind:class="{completed: item.completed}" class="task-item">
                    <div v-on:click="toggleComplete(item,index)" class="btn-complete"></div>
                    <div class="task-content">
                        <h6 class="task-content-date">{{item.taskDate}}</h6>
                        <h4 class="task-content-name">{{item.taskName}}</h4>    
                    </div>
                    <div v-on:click="removeItem(item,index)" class="btn-remove" ><i class="fas fa-minus-circle"></i></div>
                </li>
            </ul>
            
            <ul v-bind:class="{active: !isActive}" class="task-list list-date">
                <li v-for="(item, index) in dateList" :key="item.taskId" v-bind:class="{completed: item.completed}" class="task-item">
                    <div v-on:click="toggleComplete(item,index)" class="btn-complete"></div>
                    <div class="task-content">
                        <h6 class="task-content-date">{{item.taskDate}}</h6>
                        <h4 class="task-content-name">{{item.taskName}}</h4>    
                    </div>
                    <div v-on:click="removeItem(item,index)" class="btn-remove" ><i class="fas fa-minus-circle"></i></div>
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
    height: 150px;
    border: 2px solid var(--primary-light);
    border-radius: 0 20px 20px 20px;
    overflow-y: scroll;
    transform: translateY(-2px);
}
.list-container::-webkit-scrollbar {
    display: none;
}
.task-list {
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s ease-in-out;
}
.task-item {
    min-height: 50px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    background: var(--primary-dark);
    color: white;
    overflow: hidden;
}

.task-item .btn-complete {
    float: left;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
}
.task-item .task-content {
    float: left;
    width: calc(100% - 60px);
}
.task-item .task-content .task-content-date {
    
    font-size: 14px;
    margin-bottom: 10px;
}
.task-item .btn-remove {
    float: right;
    cursor: pointer;
    transition: 0.3s;
}
.task-item .btn-remove:hover {
    color: var(--secondary);
}
/* toggle-completed style */
.task-item:hover {
    background: var(--primary-dark);
}
.task-item.completed {
    
}
.task-item.completed .task-content {
    color: var(--primary-light);
}
.task-item.completed .task-content .task-content-name {
    text-decoration: line-through;
    font-style: italic;
}
.task-item.completed .btn-complete {
    background: white;
}
/* tapmenu active style */
.active {
    opacity: 1;
    visibility: visible;
}
.btn-group {
    display: flex;
}
.btn-group {
    position: relative;
    height: 30px;
    cursor: pointer;
    z-index: 1;
}
.btn-tap {
    color: white;
    padding: 5px 10px;
    background: var(--primary-light);
    border-radius: 5px 5px 0 0;
    transition: 0.5s ease-in-out;
}
.btn-tap.active {
    background: var(--secondary);
}
</style>