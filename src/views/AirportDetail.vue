<template>
  <two-column-layout>
    <template v-slot:sideBar>
      <p>Sidebar</p>
    </template>
    <template v-slot:content>
      <p>Main Content</p>
      <p>{{ airportWithCode }}</p>
    </template>
  </two-column-layout>
</template>

<script>
import TwoColumnLayout from '@/layouts/TwoColumnLayout.vue'
import allAirports from '@/data/airports.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    TwoColumnLayout
  },
  data() {
    return {
      airport: ''
    }
  },
  setup() {
    const route = useRoute()
    const airportWithCode = ref('')
    function getAirportByCode() {
      return allAirports.filter(airport => airport.abbreviation === route.params.code.toUpperCase())[0];
    }
    function getAirportWithCode(airport) {
      return `${airport.name} - ${airport.abbreviation}`
    }
    onMounted(() => {
      const airport = ref(getAirportByCode())
      airportWithCode.value = getAirportWithCode(airport.value)

    })
    return { airportWithCode }
  }
}
</script>