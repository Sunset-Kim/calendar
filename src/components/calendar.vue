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
        attrs: [
            // {
            // key: 'contain',
            // dot: 'blue',
            // dates: new Date('2021-04-24'),
            // },
        ],
        date: '',
        }
    },
    components: {
        DatePicker,
    },
    methods: {
        pickDate(payload) {
            console.log(payload);
            this.$store.commit('loadDate',payload);
        }
    }
}
</script>

<style>

</style>