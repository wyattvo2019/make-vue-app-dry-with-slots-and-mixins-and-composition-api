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
import airportMixin from '@/mixins/airport.js'

export default {
  components: {
    TwoColumnLayout
  },
  mixins: [ airportMixin ],
  data() {
    return {
      airport: ''
    }
  },
  methods: {
  getAirportByCode() {
    return allAirports.filter(airport => airport.abbreviation === this.$route.params.code.toUpperCase())[0]
    }
  },
  mounted() {
    this.airport = this.getAirportByCode()
    this.getAirportWithCode(this.airport)
  }
}
</script>