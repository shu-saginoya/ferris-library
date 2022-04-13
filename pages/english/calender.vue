<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" xl="8">
        <the-calender></the-calender>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageEnglishCalender',
  data: () => ({
    title: 'Calendar',

  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
