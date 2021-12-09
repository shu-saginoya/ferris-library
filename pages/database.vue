<template>
  <v-container>
    <base-page-title>{{ title }}</base-page-title>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12" xl="8">
        <v-card>
          <v-container>
            <v-row dense>
              <v-col cols="12" sm="4">
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-text>
                  <v-chip
                    v-for="(language, m) in item.languages"
                    :key="m"
                    small
                    color="secondary"
                    class="mb-1 mr-1"
                    >{{ language }}</v-chip
                  >
                  <v-chip
                    v-for="(cat, j) in item.categories"
                    :key="j"
                    small
                    color="blue lighten-1"
                    text-color="white"
                    class="mb-1 mr-1"
                  >
                    {{ cat }}
                  </v-chip>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="8">
                <v-card-text>
                  <div class="explanation" v-html="item.explanation"></div>
                  <div v-if="item.feature">
                    <v-chip small>特長</v-chip>
                    <div v-html="item.feature"></div>
                  </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text v-if="item.access">
                  同時アクセス数
                  <v-chip outlined> {{ item.access }} </v-chip>
                  <v-chip v-if="item.logout" color="warning" outlined small>
                    <v-icon left>mdi-alert-circle-outline</v-icon>
                    利用後は必ずログアウトしてください
                  </v-chip>
                  <span v-if="item.attention">※{{ item.attention }}</span>
                </v-card-text>
                <v-card-actions class="flex-wrap">
                  <v-btn
                    v-for="(link, k) in item.links"
                    :key="k"
                    :href="link.url"
                    target="_blank"
                    class="mr-2 mb-2"
                  >
                    {{ link.name }}
                    <v-icon right>mdi-open-in-new</v-icon>
                  </v-btn>
                  <template v-if="item.documents">
                    <v-btn
                      v-for="(file, n) in item.documents"
                      :key="n"
                      class="mr-2 mb-2"
                      @click="
                        ;(snackbar = true),
                          (university = file.type),
                          (file = file.url)
                      "
                    >
                      {{ file.name }}
                      <v-icon v-if="file.type == 'PDF'" dark right
                        >mdi-file-pdf-box</v-icon
                      >
                      <v-icon v-else-if="file.type == 'Excel'" dark right
                        >mdi-file-excel-outline</v-icon
                      >
                      <v-icon v-else dark right
                        >mdi-file-document-multiple-outline</v-icon
                      >
                    </v-btn>
                  </template>
                  <v-btn icon absolute bottom right><v-icon>mdi-heart-outline</v-icon></v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <p v-if="items.length === 0">該当する項目はみつかりませんでした。</p>
    <v-snackbar v-model="snackbar" :multi-line="multiLine" :timeout="timeout">
      {{ university }}ファイルを開きますか？

      <template #action="{ attrs }">
        <v-btn class="mx-3" :href="file" target="_blank"
          >はい<v-icon right>mdi-download</v-icon></v-btn
        >
        <v-btn icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import database from '@/assets/json/database.json'

export default {
  data: () => ({
    title: 'データベース・電子ブック',
    database,
    items: database,
    multiLine: true,
    snackbar: false,
    university: '',
    timeout: 6000,
    languages: [ "日本語", "外国語" ],
    categories: [ "電子ブック", "総合", "参考・辞書事典類", "新聞記事", "英米文学", "日本文学", "言語学", "社会科学", "音楽", "判例・法令・議会資料", ],
    value: null,
  }),
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    fetchItem() {
      const self = this
      self.items = self.database
    }
  }
}
</script>

<style scoped>
.explanation >>> caption {
  text-align: left;
}
.explanation >>> table {
  border-collapse: collapse;
}
.explanation >>> th,
.explanation >>> td {
  text-align: left;
  vertical-align: top;
  border-top: gray solid 1px;
  border-bottom: gray solid 1px;
}
</style>