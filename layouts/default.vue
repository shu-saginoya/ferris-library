<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <navigation-drawer />
    </v-navigation-drawer>

    <v-app-bar app color="white" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>フェリス女学院大学附属図書館</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click.stop="dialog = true">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu bottom offset-y>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/" link>
            <v-list-item-title>日本語</v-list-item-title>
          </v-list-item>
          <v-list-item to="/english" link>
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <layout-footer />

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-text>
          <div class="pt-4 pb-2">サイト内のページを検索します</div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              label="Keyword"
              type="text"
              outlined
              append-outer-icon="mdi-send"
              prepend-inner-icon="mdi-magnify"
              clearable
              autofocus
              @click:append-outer="validate"
            ></v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

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
    dialog: false,
    valid: true,
    fab: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
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
</style>