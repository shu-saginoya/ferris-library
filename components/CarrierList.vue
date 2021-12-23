<template>
  <v-row dense>
    <v-col v-for="(item, i) in items" :key="'item' + i" cols="12" lg="6">
      <v-card>
        <v-card-title>
          {{ item.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ item.type }}
        </v-card-subtitle>
        <v-card-text>
          {{ item.content }}
          <p v-if="item.logout" class="mb-0">
            <span class="orange--text ml-2">
              <v-icon small color="orange">mdi-alert-circle-outline</v-icon>
              利用後は必ずログアウトしてください
            </span>
          </p>
        </v-card-text>
        <div class="d-flex">
          <v-card-text>
            <v-chip small class="mr-2">アクセス</v-chip>{{ item.access }}
          </v-card-text>
          <v-card-actions v-if="item.links">
            <base-btn-open-in-new
              v-for="(link, j) in item.links"
              :key="'link' + j"
              :link="link.name"
              :url="link.url"
            ></base-btn-open-in-new>
          </v-card-actions>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CarrierList',
  props: {
    items: { type: Array, required: true },
  },
  data: () => ({}),
}
</script>
