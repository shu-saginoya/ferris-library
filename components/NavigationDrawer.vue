<template>
  <v-list>
    <template v-for="menu in menus">
      <v-list-item v-if="menu.link" :key="menu.category - eng" :to="menu.link">
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ menu.category }}</v-list-item-title>
      </v-list-item>
      <v-list-group v-else :key="menu.category - eng" :prepend-icon="menu.icon">
        <template #activator>
          <v-list-item-title>{{ menu.category }}</v-list-item-title>
        </template>

        <v-list-item
          v-for="content in menu.contents"
          :key="content.eng"
          :to="content.link"
          link
        >
          <v-list-item-title v-text="content.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </template>
  </v-list>
</template>

<script>
import menus from '@/assets/json/menu.json'

export default {
  name: 'NavigationDrawer',
  data: () => ({
    menus,
  }),
}
</script>
