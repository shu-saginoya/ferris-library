<template>
  <v-container>
    <base-page-title>横浜市内大学図書館コンソーシアム</base-page-title>
    <v-alert border="top" colored-border type="info" elevation="2">
      横浜市内大学図書館コンソーシアムは、「横浜市内大学間学術・教育交流協議会」の会員校によって、学生の教育機会の多様化を図ること、相互に各図書館の特性を生かしつつ協力し、交流を深め、教育・研究活動の推進を図ることを目的として結成されました。
    </v-alert>
    <v-card>
      <v-card-actions @click="show = !show">
        <v-btn color="primary" text> 大学名一覧（50音順） </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-list>
            <template v-for="(item, i) in items">
              <v-list-item
                v-if="item.url"
                :key="i"
                link
                :href="item.url"
                target="_blank"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-file-pdf-box</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item v-else :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card class="mt-4">
      <v-card-text>
        大学名一覧の13大学の学生・教職員は、以下のとおりそれぞれの図書館を利用することができます。
      </v-card-text>
      <v-card-text class="text-h6 pt-12">１．所蔵情報の提供</v-card-text>
      <v-card-text
        >各大学図書館ホームページから、オンライン蔵書検索OPAC（Online Public
        Access
        Catalog）によって、所蔵情報を検索することができます。</v-card-text
      >
      <v-card-text class="text-h6 pt-12">２．図書館の館内利用</v-card-text>
      <v-card-text>
        <p>
          原則として、学生証又は大学発行の身分証明書を提示し、手続きすることで、館内利用ができます。
        </p>
        <p>
          （手続き方法は、各館によって異なります。事前連絡、紹介状が必要な館もあります。また、利用時期等に制限がある場合もありますので、記載事項を確認してください。東洋英和女学院大学図書館、フェリス女学院大学附属図書館の場合学生による利用は女子に限ります。）
        </p>
        <a href="static/pdf/consortium/kanagawa20161005.pdf" target="_blank">神奈川大学図書館</a>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    items: [
      {
        name: '神奈川大学図書館',
        url: '@/assets/pdf/consortium/kanagawa20161005.pdf',
      },
      {
        name: '関東学院大学図書館',
        url: 'https://www.library.ferris.ac.jp/library/consortium/kangaku_hon20161005.pdf',
      },
      {
        name: '慶應義塾大学日吉メディアセンター',
        url: 'https://www.library.ferris.ac.jp/library/consortium/keio20150801.pdf',
      },
      {
        name: '國學院大學たまプラーザ図書館',
        url: 'https://www.library.ferris.ac.jp/library/consortium/kokugakuin20150801.pdf',
      },
      {
        name: '鶴見大学図書館',
        url: 'https://www.library.ferris.ac.jp/library/consortium/turumi20161005.pdf',
      },
      {
        name: '桐蔭横浜大学大学情報センター',
        url: 'https://www.library.ferris.ac.jp/library/consortium/toin20150801.pdf',
      },
      {
        name: '東京都市大学横浜キャンパス図書館',
        url: 'https://www.library.ferris.ac.jp/library/consortium/toshi20161005.pdf',
      },
      {
        name: '東洋英和女学院大学図書館',
        url: 'https://www.library.ferris.ac.jp/library/consortium/toyoeiwa20150801.pdf',
      },
      {
        name: 'フェリス女学院大学附属図書館',
      },
      {
        name: '明治学院大学横浜校舎図書館',
        url: 'https://www.library.ferris.ac.jp/library/consortium/meigaku20170401.pdf',
      },
      {
        name: '横浜国立大学附属図書館',
        url: 'https://www.library.ferris.ac.jp/library/consortium/yokokoku20150801.pdf',
      },
      {
        name: '横浜商科大学図書館',
        url: 'https://www.library.ferris.ac.jp/library/consortium/yokosho20150801.pdf',
      },
      {
        name: '横浜市立大学学術情報センター',
        url: 'https://www.library.ferris.ac.jp/library/consortium/yokoichi20150801.pdf',
      },
    ],
  }),
}
</script>