<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card>
          <v-card-title> ツアー </v-card-title>
          <v-card-text>
            新入生が大学での学習を始めるにあたり、必要不可欠な図書館の利用方法を知ってもらうことを目的としています。R&Rや導入演習などの授業単位で実施します。専任教員・非常勤教員の方々からのお申し込みを受け付けます。
          </v-card-text>
          <v-card-actions @click="show = !show">
            <v-btn color="primary" text> 詳細をみる </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                <div class="text-h6 pt-6">実施期間</div>
                <p>毎年度4月上旬から6月下旬</p>
                <div class="text-h6 pt-6">内容</div>
                <ul>
                  <li>
                    図書館案内…図書館内を見て回りながら、施設設備の配置やその使い方を紹介します。
                  </li>
                  <li>
                    蔵書検索…OPACの使い方と検索結果の見方、入手までを解説します。
                  </li>
                </ul>
                <div class="text-h6 pt-6">申込方法</div>
                <p>
                  毎年度3月中旬に配付する「新入生図書館ツアー申込書」（MyLibraryにログインして取得できます）にご記入の上お申し込みください。
                </p>
              </v-card-text>
              <v-card-actions>
                <btn-my-library></btn-my-library>
              </v-card-actions>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card>
          <v-card-title> ガイダンス </v-card-title>
          <v-card-text>
            卒業論文やレポートを執筆する際に必要となる、文献の探し方の習得を目的としています。
            基礎的な文献検索の実習などをパッケージ化して、ゼミ単位・授業単位で実施します。専任教員・非常勤教員の方々からのお申し込みを受け付けます。
          </v-card-text>
          <v-card-actions @click="show2 = !show2">
            <v-btn color="primary" text> 詳細をみる </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>{{
                show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>
              <v-card-text>
                <div class="text-h6 pt-6">実施期間</div>
                <p>
                  学期期間中の平日※図書館ツアーが集中する4月から5月はツアーを優先させていただきます。
                </p>
                <div class="text-h6 pt-6">内容</div>
                <ul>
                  <li>
                    DVD視聴…レポート・論文を書くためのステップを解説します。上映時間は約30分です。
                  </li>
                  <li>各種データベースの検索方法の説明と実習を実施します。</li>
                  <li>その他、ゼミの内容に応じた文献の紹介などを行います。</li>
                </ul>
                <div class="text-h6 pt-6">申込方法</div>
                <p>
                  「ゼミ対象図書館ガイダンス申込書」（MyLibraryにログインして取得できます）にご記入の上お申し込みください。
                </p>
              </v-card-text>
              <v-card-actions>
                <btn-my-library></btn-my-library>
              </v-card-actions>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'ツアー・ガイダンス',
    show: false,
    show2: false,
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>