<template>
  <v-app id="inspire">
    <layout-header :english-page="true"></layout-header>
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