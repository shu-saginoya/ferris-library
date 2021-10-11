<template>
  <v-card>
    <v-subheader><slot name="name">News</slot></v-subheader>

    <v-list two-line>
      <template v-for="info in reverseNews">
        <v-divider :key="info.id"></v-divider>

        <v-list-item :key="info.id">
          <v-list-item-content>
            <v-list-item-title>{{ info.title }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ info.date }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-dialog :key="info.id" v-model="dialog" max-width="600">
              <template #activator="{ on, attrs }">
                <v-btn
                  class="dialog-btn ma-2"
                  color="primary lighten-1"
                  v-bind="attrs"
                  icon
                  v-on="on"
                >
                  <v-icon color="grey lighten-1"
                    >mdi-arrow-right-circle-outline</v-icon
                  >
                </v-btn>
              </template>
              <template #default="dialog">
                <v-card>
                  <v-card-title>
                    {{ info.title }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ info.date }}
                  </v-card-subtitle>
                  <v-card-text class="mt-6" v-html="info.contents">
                  </v-card-text>
                  <v-card-actions v-if="info.actions">
                    <base-btn-inside v-for="btn in info.actions" :key="btn.id" :link="btn.link" :to="btn.to"></base-btn-inside>
                  </v-card-actions>
                  <v-card-actions v-if="info.openinnew">
                    <base-btn-open-in-new v-for="btn in info.openinnew" :key="btn.id" :link="btn.link" :url="btn.url"></base-btn-open-in-new>
                  </v-card-actions>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import news from '@/assets/json/news.json'

export default {
  name: 'NewsList',
  data: () => ({
    news,
  }),
  computed: {
    reverseNews() {
      return this.news.slice().reverse()
    },
  },
}
</script>