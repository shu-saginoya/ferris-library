<template>
  <v-list>
    <template v-for="menu in menus">
      <v-list-item v-if="menu.push" :key="menu.category-eng" :to="menu.push">
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ menu.category }}</v-list-item-title>
      </v-list-item>
      <v-list-group v-else :key="menu.category-eng" :prepend-icon="menu.icon">
        <template #activator>
          <v-list-item-title>{{ menu.category }}</v-list-item-title>
        </template>

        <template v-for="content in menu.contents">
        <v-list-item
          v-if="content.push"
          :key="content.eng"
          :to="content.push"
          link
        >
          <v-list-item-title v-text="content.title"></v-list-item-title>
        </v-list-item>

        <v-list-item
          v-if="content.href"
          :key="content.eng"
          :href="content.href"
          target="_blank"
          link
        >
          <v-list-item-title v-text="content.title"></v-list-item-title>
          <v-list-item-icon>
            <v-icon v-text="content.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
        </template>
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
