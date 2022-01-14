<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <layout-navigation-drawer></layout-navigation-drawer>
    </v-navigation-drawer>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="pl-2">
        <img
          src="@/assets/image/ferris-logo.png"
          height="32"
          class="ferris-logo mr-2"
        />
        {{ siteTitle }}
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    siteTitle: {
      type: String,
      default: 'フェリス女学院大学附属図書館',
    }
  },
  data: () => ({
    drawer: null,
  }),
}
</script>

<style scoped>
.ferris-logo {
  vertical-align: middle;
}
</style>