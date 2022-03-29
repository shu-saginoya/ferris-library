<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12" lg="6">
        <v-card>
          <v-card-title>{{ item.category }}</v-card-title>
          <v-list>
            <v-list-item
              v-for="(content, j) in item.contents"
              :key="j"
              link
              @click="openConfirmDownload(content)"
            >
              <v-list-item-content>
                <v-list-item-subtitle class="mb-2">
                  <v-chip v-if="content.target" small color="primary lighten-2">
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
      </v-col>
    </v-row>
    <confirm-download ref="confirmDownload" :file="openFile"></confirm-download>
  </v-container>
</template>

<script>
export default {
  name: 'PageHowToFind',
  data: () => ({
    title: '資料の探し方',
    openFile: {},
    items: [
      {
        category: '音楽資料の探し方',
        contents: [
          {
            target: '学部生向け',
            name: '音楽資料の探し方：超入門',
            date: '2021年2月',
            url: '/documents/how-to-find/music-materials.pdf',
            type: 'PDF',
          },
        ],
      },
      {
        category: '検索ツールの使い方',
        contents: [
          {
            target: '学部生向け',
            name: 'OPACの使い方',
            date: '2020年6月',
            url: '/documents/how-to-find/how-to-use-opac.pdf',
            type: 'PDF',
          },
          {
            target: '学部生向け',
            name: 'CiNiiの使い方',
            date: '2020年6月',
            url: '/documents/how-to-find/how-to-use-cinii.pdf',
            type: 'PDF',
          },
        ],
      },
      {
        category: '図書館アドバイス会配付資料',
        contents: [
          {
            target: '学部生向け',
            name: 'かしこい図書館の使い方ちょっとアドバイス会（レポート準備編）',
            date: '2021年6月3日実施',
            url: '/documents/how-to-find/report-advice.pdf',
            type: 'PDF',
          },
          {
            target: '留学生向け',
            name: 'かしこい図書館の使い方ちょっとアドバイス会',
            date: '2021年4月23日実施',
            url: '/documents/how-to-find/advice-for-international-students.pdf',
            type: 'PDF',
          },
          {
            target: '学部生向け',
            name: 'かしこい図書館の使い方ちょっとアドバイス会（卒論準備編）',
            date: '2021年7月6日実施',
            url: '/documents/how-to-find/graduation-thesis-advice.pdf',
            type: 'PDF',
          },
        ],
      },
      {
        category: '参考：文献検索のレッスン資料',
        contents: [
          {
            target: '3～4年生向け',
            name: '英語英米文学科専門ゼミ説明資料',
            date: '2021年5月実施',
            url: '/documents/how-to-find/english-literature-seminar.pdf',
            type: 'PDF',
          },
          {
            target: '3～4年生向け',
            name: '国際交流学科専門演習説明資料',
            date: '2020年12月実施',
            url: '/documents/how-to-find/international-exchange-seminar.pdf',
            type: 'PDF',
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
  methods: {
    openConfirmDownload(content) {
      this.openFile = content
      this.$refs.confirmDownload.dialogOpen()
    },
  },
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
