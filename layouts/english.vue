<template>
  <v-app id="inspire">
    <layout-header-test-1 :english-page="true"></layout-header-test-1>
    <v-main>
      <transition name="fade-page">
        <Nuxt />
      </transition>
    </v-main>
    <layout-footer></layout-footer>
    <layout-to-top></layout-to-top>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutEnglish',
  data: () => ({
  }),
}
</script>

<style scoped>
.fade-page-enter-active {
  transition: opacity 1s ease-in;
}
.fade-page-enter {
  opacity: 0;
}
</style>