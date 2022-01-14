<template>
  <v-card outlined color="grey lighten-3">
    <v-card-actions>
      <v-btn block text @click="show = !show">
        <v-skeleton-loader type="text" :loading="loading">
          新型コロナウイルス関連のお知らせ
        </v-skeleton-loader>
        <v-spacer></v-spacer>
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <template v-for="(section, i) in mainContents">
          <v-card-title :key="'section-title' + i">
            {{ section.title }}
          </v-card-title>
          <v-card-text :key="'section-text' + i">
            <template v-for="(item, j) in section.contents">
              <div
                v-if="item.subtitle"
                :key="'subtitle' + j"
                class="subtitle-2 text-decoration-underline mt-2"
              >
                {{ item.subtitle }}
              </div>
              <p :key="'text' + j">{{ item.text }}</p>
            </template>
            <p v-if="section.date" class="text-right">{{ section.date }}</p>
          </v-card-text>
        </template>
        <v-card-actions>
          <v-row>
            <v-col
              v-for="(sub, k) in subContents"
              :key="'dialogBtn' + k"
              cols="12"
              md="6"
            >
              <v-btn
                block
                outlined
                @click.native="
                  ;(subContentsDialog = true), (subContentsCard = sub)
                "
              >
                {{ sub.title }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </div>
    </v-expand-transition>

    <v-dialog v-model="subContentsDialog" max-width="600">
      <v-card>
        <v-card-title>
          {{ subContentsCard.title }}
        </v-card-title>
        <v-card-subtitle v-if="subContentsCard.date">
          {{ subContentsCard.date }}
        </v-card-subtitle>
        <v-card-text>
          <template v-for="(item, m) in subContentsCard.contents">
            <div
              v-if="item.subtitle"
              :key="'subContentsTitle' + m"
              class="subtitle-2 text-decoration-underline mt-2"
            >
              {{ item.subtitle }}
            </div>
            <p :key="'subContentsText' + m">{{ item.text }}</p>
          </template>
        </v-card-text>
        <v-card-actions v-if="subContentsCard.actions">
          <btn-inside
            v-for="btn in subContentsCard.actions"
            :key="btn.id"
            :link="btn.link"
            :to="btn.to"
          ></btn-inside>
        </v-card-actions>
        <v-card-actions class="justify-end">
          <v-btn text @click="subContentsDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'TextCovid19',
  data: () => ({
    loading: true,
    show: false,
    subContentsDialog: false,
    subContentsCard: [],
    mainContents: [
      {
        title: '緑園・山手とも対象者を限定して開館',
        contents: [
          {
            subtitle: 'ご利用いただける方',
            text: '学部生、大学院生、専任教員、2021年度ご出講の非常勤講師、事務職員（副手を含む）',
          },
          {
            subtitle: 'ご予約によりご利用いただける方',
            text: '名誉教授',
          },
          {
            text: '当面の間、上記以外の方は対象外とさせていただきます。一般公開はしていません。開館日時は変更する可能性があります。',
          },
          {
            text: '今後の予定は状況により予告なく変更することがあります。今後のスケジュールにつきましては、学生：FerrisPassport、教職員：グループウェアでご確認ください。',
          },
        ],
        date: '2022年1月5日現在',
      },
    ],
    subContents: [
      {
        title: '名誉教授の先生方へ',
        contents: [
          {
            text: '名誉教授の先生方にはご不便をおかけしておりましたが、研究支援の観点から図書館をご利用いただけるようにいたします。',
          },
          {
            text: 'ご入構、正門でのスムーズな受付のために名誉教授の先生方におかれましては',
          },
          {
            text: '（１）前日までに電話、メール等で図書館あてにご連絡ください。',
          },
          {
            text: '（２）ご来館予定の月日、時間（午前か午後かなど）をお知らせください。',
          },
          {
            text: '（３）正門での消毒、検温、ご本人確認にご協力をお願いいたします。',
          },
          {
            subtitle: '資料貸出',
            text: '資料貸出を希望される方には、宅配による発送も可能です。図書館あてメールにてご相談ください。',
          },
        ],
        date: '2021年5月12日',
      },
      {
        title: '2021年度後期の宅配貸出について',
        contents: [
          {
            text: '新型コロナ感染対策等のためキャンパス入構が困難な学部生及び大学院生については、後期（2021/09/23（木）～）も引き続き宅配貸出を行います。',
          },
          {
            subtitle: '申込み',
            text: '学外から受けられるサポート＞「宅配による貸出について（PDF）」にしたがい、オンラインレファレンスから申し込んでください。',
          },
          {
            subtitle: '注意点',
            text: '（１）1回の申込は10冊以内とし、できるだけまとめて申し込んでください。',
          },
          {
            text: '（２）発送は毎週木曜日の予定です。',
          },
          {
            text: '（３）「遠隔受講授業名」を忘れずに入力してください。',
          },
        ],
        actions: [
          {
            link: '学外から受けられるサポート',
            to: '/off-campus',
          },
        ],
      },
    ],
  }),
  mounted() {
    this.loading = false
  },
}
</script>