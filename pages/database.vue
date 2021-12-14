<template>
  <v-container>
    <base-page-title>{{ title }}</base-page-title>
    <v-row dense>
      <v-col cols="12" sm="3">
        <v-select
          v-model.lazy="filterLanguage"
          :items="languages"
          label="言語"
          solo
          clearable
        ></v-select>
      </v-col>
      <v-col cols="12" sm="9">
        <v-select
          v-model.lazy="filterCategory"
          :items="categories"
          label="カテゴリー"
          chips
          multiple
          solo
          clearable
        ></v-select>
      </v-col>
      <v-col cols="12">
        <p v-if="listfilter.length === 0">
          該当する項目はみつかりませんでした。
        </p>
        <p v-else>{{ listfilter.length }}件の項目を表示しています</p>
      </v-col>
    </v-row>
    <database-list :items="listfilter"></database-list>
  </v-container>
</template>

<script>
import database from '@/assets/json/database.json'

export default {
  data: () => ({
    title: 'データベース・電子ブック',
    database,
    items: database,
    languages: ['日本語', '外国語'],
    categories: [
      '電子ブック',
      '総合',
      '参考・辞書事典類',
      '新聞記事',
      '英米文学',
      '日本文学',
      '言語学',
      '社会科学',
      '音楽',
      '判例・法令・議会資料',
    ],
    filterLanguage: '',
    filterCategory: [],
  }),
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    listfilter() {
      const searchLanguage = this.filterLanguage
      const searchCategory = this.filterCategory

      return this.items.filter(function (value) {
        let flagLanguage = true
        let flagCategory = true
        if (searchLanguage) {
          flagLanguage = value.languages.includes(searchLanguage)
        }
        if (searchCategory.length !== 0) {
          flagCategory = false
          for (let i = 0; i < searchCategory.length; i++) {
            if (value.categories.includes(searchCategory[i])) {
              flagCategory = true
            }
          }
        }
        const flag = flagLanguage && flagCategory
        return flag
      })
    },
  },
}
</script>