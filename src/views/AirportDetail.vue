<template>
  <two-column-layout>
    <template v-slot:sideBar>
      <p>Sidebar</p>
    </template>
    <template v-slot:content>
      <p>Main Content</p>
    </template>
  </two-column-layout>
</template>

<script>
import TwoColumnLayout from '@/layouts/TwoColumnLayout.vue'

export default {
  components: {
    TwoColumnLayout
  },
}
</script>