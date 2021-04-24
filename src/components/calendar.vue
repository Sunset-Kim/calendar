<template>
    <div id="calendar">
        <DatePicker id="date-picker"
        v-on:dayclick="pickDate"
        v-model="date"
        :value="null"
        color="purple"
        :is-expanded="true"
        :attributes="attrs"
        title-position="left"
        ></DatePicker>
    </div>
    
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
    data() {
    return {
        date: '',
        }
    },
    computed: {
        attrs() {
        let arr = [];
        let date = this.$store.getters.attDate;
        date.forEach(element => {
            let obj = {
                key: 'remainTask',
                dot: 'purple',
                dates: new Date(element)
            }
            arr.push(obj);
        });
            return arr
        } 
    },
    components: {
        DatePicker,
    },
    methods: {
        pickDate(payload) {
            this.$store.commit('loadDate',payload);
        },
    }
}
</script>

<style>
#calendar {
    
}
#calendar .vc-header {
    height: 20%;
    padding: 0 45px;
}
#calendar .vc-arrows-container {
    top: 10px;
    right: 30px;
}
#calendar .vc-container {
    height: 100%;
}
#calendar #date-picker {
    background: var(--secondary);
    color: var(--text-secondary);
    border: none;
    border-radius: 50px 50px 0 0;
}
#calendar .vc-pane-layout {
    height: 100%;
}
#calendar .vc-weeks {
    height: 80%;
    padding: 0 20px; 
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: 10% repeat(6,1fr)
}
#calendar .vc-weeks .vc-weekday {
    /* max-height: 50px; */
    color: #111;
    font-weight: 900;
}
#calendar .vc-day {
    min-height:fit-content;
}
#calendar .vc-highlights {
    transform: scale(1.2);
}
</style>