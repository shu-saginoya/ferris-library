<template>
  <v-container>
    <base-page-title>学外から受けられるサポート</base-page-title>

    <template v-for="(item, i) in items">
      <v-card :key="i" class="my-6">
        <v-card-title>{{ item.category }}</v-card-title>
        <v-card-text>{{ item.text }}</v-card-text>
        <v-list>
          <v-list-item
            v-for="(content, j) in item.contents"
            :key="j"
            link
            @click="
              ;(snackbar = true), (fileName = content.name), (url = content.url)
            "
          >
            <v-list-item-content>
              <v-list-item-subtitle v-if="content.target" class="mb-2">
                <v-chip
                  small
                  color="primary lighten-2"
                >
                  {{ content.target }}
                </v-chip>
                <v-chip v-if="content.date" small outlined>
                  {{ content.date }}
                </v-chip>
              </v-list-item-subtitle>
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
    </template>

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
    snackbar: false,
    timeout: 6000,
    fileName: '',
    url: '',
    items: [
      {
        category: '新型コロナウイルス感染拡大防止措置：宅配による貸出',
        text: '2021年度以降は、感染不安等の理由により、対面授業を遠隔受講する学部生及び大学院生を対象として宅配による貸出を継続しています。',
        contents: [
          {
            name: '宅配による貸出について',
            url: '/pdf/off-campus/delivery-01.pdf',
          },
          {
            target: '学部生',
            name: 'MyLibraryで文献複写を申し込む',
            url: '/pdf/off-campus/delivery-02.pdf',
          },
          {
            target: '大学院生',
            name: '文献複写を申し込む',
            url: '/pdf/off-campus/delivery-03.pdf',
          },
          {
            target: 'Ｑ＆Ａ',
            name: '宅配貸出について',
            url: '/pdf/off-campus/delivery-04.pdf',
          },
          {
            target: 'Ｑ＆Ａ',
            name: '返却期限の延長等について',
            url: '/pdf/off-campus/delivery-05.pdf',
          },
        ],
      },
    ],
  }),
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
