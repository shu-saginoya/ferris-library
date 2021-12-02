<template>
  <v-container>
    <base-page-title>{{ title }}</base-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="9">
        <v-alert border="top" colored-border type="info" elevation="2">
          <p>
            各学科の専任教員が「〇〇学科の学生なら読んでおいてほしい本」として選定された図書です。
          </p>
          <p>
            専門分野、履修科目に関わらず、所属学科における基本知識として読むことが期待されています。
          </p>
          <p>
            <v-chip class="mr-2">配架場所</v-chip
            >緑園本館2階（図書館エリア／メディアカウンター向かい）
          </p>
          <p><v-chip class="mr-2">貸出期間</v-chip>2週間</p>
          <p>＊所属学科以外の「学科推奨図書」も借りられます。</p>
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        md="10"
        lg="8"
        xl="3"
      >
        <v-card>
          <v-card-title>{{ item.category }}</v-card-title>
          <v-list>
            <v-list-item
              v-for="(content, j) in item.contents"
              :key="j"
              link
              @click="
                ;(snackbar = true),
                  (fileName = content.name),
                  (url = content.url)
              "
            >
              <v-list-item-content>
                <v-list-item-title class="wrap-text">
                  {{ content.name }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-file-pdf-box</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :multi-line="multiLine" :timeout="timeout">
      {{ fileName }}のPDFファイルを開きますか？

      <template #action="{ attrs }">
        <v-btn class="mx-3" :href="url" target="_blank"
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
export default {
  data: () => ({
    title: '学科推奨図書',
    snackbar: false,
    timeout: 6000,
    fileName: '',
    url: '',
    items: [
      {
        category: '文学部',
        contents: [
          {
            name: '英語英米文学科',
            url: '/pdf/recommend/recommend-english-literature.pdf',
          },
          {
            name: '日本語日本文学科',
            url: '/pdf/recommend/recommend-japanese-literature.pdf',
          },
          {
            name: 'コミュニケーション学科',
            url: '/pdf/recommend/recommend-communication.pdf',
          },
        ],
      },
      {
        category: '音楽学部',
        contents: [
          {
            name: '音楽芸術学科',
            url: '/pdf/recommend/recommend-musical-art.pdf',
          },
        ],
      },
      {
        category: '国際交流学部',
        contents: [
          {
            name: '国際交流学科',
            url: '/pdf/recommend/recommend-international-exchange.pdf',
          },
        ],
      },
    ],
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
