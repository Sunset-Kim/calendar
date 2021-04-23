<template>
    <DatePicker 
    v-on:dayclick="pickDate"
    v-model="date"
    :value="null"
    :is-expanded="true"
    :attributes='attrs'
     ></DatePicker>
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
                dot: 'blue',
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

</style>