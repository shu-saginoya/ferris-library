<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-select
          v-model="selected"
          :items="items"
          filled
          label="選択してください"
        ></v-select>
        <template v-for="(content, index) in contents">
          <v-card
            v-if="selected == content.name"
            :key="index"
            transition="scroll-x-transition"
          >
            <v-card-title>{{ content.name }}</v-card-title>
            <v-card-text>
              <v-alert
                v-if="content.replenishment"
                outlined
                type="warning"
                prominent
              >
                {{ content.replenishment }}
              </v-alert>
              <template v-for="(service, index2) in content.service">
                <v-alert
                  v-if="service.judgment"
                  :key="index2"
                  outlined
                  type="success"
                  prominent
                >
                  <div class="text-h6">{{ service.title }}</div>
                  {{ service.notes }}
                </v-alert>

                <v-alert
                  v-else
                  :key="index2"
                  color="error"
                  outlined
                  icon="mdi-close"
                  prominent
                >
                  <div class="text-h6">{{ service.title }}</div>
                  {{ service.notes }}
                </v-alert>
              </template>
            </v-card-text>
            <v-card-actions>
              <v-list v-if="content.pdfs">
                <v-list-item
                  v-for="(pdf, index3) in content.pdfs"
                  :key="index3"
                  link
                  @click="
                    ;(snackbar = true), (fileName = pdf.title), (url = pdf.url)
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
            </v-card-actions>
          </v-card>
        </template>
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
    title: '学外の方へ',
    selected: '',
    snackbar: false,
    timeout: 6000,
    fileName: '',
    multiLine: true,
    url: '',
    items: [
      '卒業生・修了生',
      '定年退職教職員',
      '他大学所属の教員、学生の方',
      '神奈川県内大学図書館共通閲覧証をお持ちの方',
      '横浜市内大学図書館コンソーシアム参加大学所属の方',
      '一般の方',
    ],
    contents: [
      {
        name: '卒業生・修了生',
        service: [
          {
            title: '来館 館内複写',
            judgment: true,
            notes: '身分証明書をお持ちください。',
          },
          {
            title: '貸出',
            judgment: true,
            notes:
              'カウンターでライブラリーカードの発行手続きをしてください。貸出冊数・期間については貸出サービスをご覧ください。',
          },
          {
            title: '複写取り寄せ',
            judgment: false,
            notes: '直接ご来館の上、複写してください。',
          },
        ],
      },
      {
        name: '定年退職教職員',
        service: [
          {
            title: '来館 館内複写',
            judgment: true,
            notes: '身分証明書をお持ちください。',
          },
          {
            title: '貸出',
            judgment: true,
            notes:
              'カウンターでライブラリーカードの発行手続きをしてください。貸出冊数・期間については貸出サービスをご覧ください。',
          },
          {
            title: '複写取り寄せ',
            judgment: false,
            notes: '直接ご来館の上、複写してください。',
          },
        ],
      },
      {
        name: '他大学所属の教員、学生の方',
        service: [
          {
            title: '来館 館内複写',
            judgment: true,
            notes:
              '所属の大学図書館発行の紹介状と学生証・身分証明書をお持ちください。また、事前に所属の図書館を通じて来館日と利用資料をお知らせください。',
          },
          {
            title: '貸出',
            judgment: false,
            notes: '館外貸出はできません。図書館間貸出をご利用ください。',
          },
          {
            title: '複写取り寄せ',
            judgment: true,
            notes:
              '所属の大学図書館を通じて、著作権の範囲で資料のコピーを取り寄せることが出来ます。',
          },
          {
            title: '図書館間貸出',
            judgment: true,
            notes:
              '所属の大学図書館に資料をお送りします。楽譜・AV資料・雑誌・貴重書は対象外です。お送りした資料は館内利用（閲覧）のみ可能です。持ち出し、複写はできません。',
          },
        ],
      },
      {
        name: '神奈川県内大学図書館共通閲覧証をお持ちの方',
        service: [
          {
            title: '来館 館内複写',
            judgment: true,
            notes:
              '学生は大学院女子学生、学部女子学生に限ります。共通閲覧証と学生証・身分証明書をお持ちの上、直接ご来館ください。定期試験期間のため、1月、7月を除きます。',
          },
          {
            title: '貸出',
            judgment: false,
            notes: '館外貸出はできません。図書館間貸出をご利用ください。',
          },
        ],
      },
      {
        name: '横浜市内大学図書館コンソーシアム参加大学所属の方',
        service: [
          {
            title: '来館 館内複写',
            judgment: true,
            notes:
              '学生は大学院女子学生、学部女子学生に限ります。学生証・身分証明書をお持ちの上、直接ご来館ください。定期試験期間のため1月、7月を除きます。',
          },
          {
            title: '貸出',
            judgment: false,
            notes: '館外貸出はできません。図書館間貸出をご利用ください。',
          },
        ],
        pdfs: [
          {
            title: 'コンソーシアム利用案内',
            url: 'pdf/consortium/ferris.pdf',
          },
        ],
      },
      {
        name: '一般の方',
        replenishment:
          '原則、一般の方のご来館は、ご遠慮いただいております。ただし、特定テーマを持って研究している方で、当館でしか所蔵していない資料を希望する方に限りご利用いただけます。ご来館前に、必ずお近くの公共図書館を通じて「利用希望資料」「利用希望日時」をお知らせ下さい。（2021年5月12日現在）',
        service: [
          {
            title: '来館 館内複写',
            judgment: true,
            notes:
              '「利用希望資料」「利用希望日時」を明記した公共図書館など公的機関発行の紹介状と、身分証明書をお持ちください。',
          },
          {
            title: '貸出',
            judgment: false,
            notes: '館外貸出はできません。',
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