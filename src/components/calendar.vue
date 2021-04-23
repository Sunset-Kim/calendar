<template>
    <div id="calendar">
        <DatePicker id="date-picker"
        v-on:dayclick="pickDate"
        v-model="date"
        :value="null"
        :is-dark="true"
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
                dot: 'red',
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
    margin-right: 20px;
}
#calendar .vc-day {
    min-height: 80px;
}
#calendar .vc-header {
    padding: 50px;
}
#calendar .vc-weeks .vc-weekday:first-child{
    color: crimson;
}
#calendar .vc-weeks .vc-weekday:nth-child(7){
    color: dodgerblue;
}
#calendar .vc-highlights {
    transform: scale(1.2);
}
</style>