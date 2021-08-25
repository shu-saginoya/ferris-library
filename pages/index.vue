<template>
  <v-main>
    <v-container>
      <main-visual />
      <section>
        <h2 class="v-heading text-h4 pt-6 mb-2">Calender</h2><p>※調整中です</p>
        <v-row justify="space-around">
          <v-col cols="12" md="6" class="pa-6"><calender /></v-col>
          <v-col cols="12" md="6" class="pa-6"><calender /></v-col>
        </v-row>
      </section>
      <section>
        <h2 class="v-heading text-h4 pt-6 mb-2">News</h2>
      </section>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({}),
}
</script>