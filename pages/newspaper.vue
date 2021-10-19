<template>
  <v-container>
    <base-page-title>新聞（緑園キャンパス）</base-page-title>
    <display-pdf :location="location" :name="name"></display-pdf>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    location: 'pdf/newspaper.pdf',
    name: 'newspaper.pdf',
  }),
}
</script>