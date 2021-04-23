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
    height: 100%;
}
#calendar .vc-container {
    height: 100%;
}
#calendar #date-picker {
    height: 100%;
    border-radius: 0;
}
#calendar .vc-weeks {
    height: calc(100% - 100px);
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: 50px repeat(6,1fr)
}

#calendar .vc-header {
    height: 100px;
    padding: 0 50px;
}
#calendar .vc-weeks .vc-weekday {
    max-height: 50px;
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