<template>
  <layout-wrapper>
    <Nuxt />
  </layout-wrapper>
</template>

<script>
export default {
  name: 'LayoutEnglish',
  created() {
    this.$store.commit('languageEn')
  },
}
</script>
