<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <layout-navigation-drawer />
    </v-navigation-drawer>

    <v-app-bar app color="white" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-2"><img src="@/assets/image/ferris-logo.png" height="32" class="ferris-logo mr-2">フェリス女学院大学附属図書館</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <layout-footer />

    <transition name="fade">
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        class="mx-2"
        fab
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon large>mdi-format-vertical-align-top</v-icon>
      </v-btn>
    </transition>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    fab: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 500
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
.ferris-logo {
  vertical-align: middle;
}
</style>