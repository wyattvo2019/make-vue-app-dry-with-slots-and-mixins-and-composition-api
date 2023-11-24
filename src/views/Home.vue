<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <default-layout class="wrapper">
    <div v-for="airport in airports" :key="airport.abbreviation">
      <airport-card :airport="airport" />
    </div>
    <p>test: {{ airportWithCode }}</p>
  </default-layout>
</template>

<script>
import allAirports from '@/data/airports.js'
import AirportCard from '@/components/AirportCard.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import airportMixin from '@/mixins/airport.js'


export default {
  components: {
    AirportCard,
    DefaultLayout
  },
  mixins: [ airportMixin ],
  data() {
    return {
      airports: allAirports
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
}

p,
h3 {
  grid-column: span 3;
}
</style>