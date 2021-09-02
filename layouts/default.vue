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

      <v-menu
        offset-y
        :rounded="rounded"
      >
        <template #activator="{ attrs, on }">
          <v-btn icon>
            <v-icon v-bind="attrs" v-on="on">mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/">
            <v-list-item-title>日本語</v-list-item-title>
          </v-list-item>
          <v-list-item to="english">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <Nuxt />
    <layout-footer />

    <v-dialog v-model="dialog" max-width="60%">
      <v-card>
        <v-card-title class="headline"
          >サイト内のページを検索します</v-card-title
        >
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="message"
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
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    dialog: false,
    valid: true,
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>