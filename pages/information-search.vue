<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-stepper v-model="active" vertical non-linear>
      <template v-for="(item, i) in items">
        <v-stepper-step
          :key="'item' + i"
          editable
          :complete="active > item.step"
          :step="item.step"
        >
          {{ item.subTitle }}
        </v-stepper-step>
        <v-stepper-content :key="'itemContent' + i" :step="item.step">
          <ul class="link-list">
            <li v-for="(listItem, j) in item.list" :key="'listItem' + i + j">
              <v-btn
                :to="listItem.push"
                :href="listItem.href"
                :target="listItem.href ? '_blank' : '_self'"
                outlined
              >
                {{ listItem.name }}
                <v-icon v-show="listItem.icon" right>
                  {{ listItem.icon }}</v-icon
                >
              </v-btn>
              <p class="grey--text">{{ listItem.comment }}</p>
            </li>
          </ul>
          <div class="text-right">
            <v-btn color="primary" @click="active = item.step + 1">
              つぎへ
            </v-btn>
          </div>
        </v-stepper-content>
      </template>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '情報検索',
    active: 1,
    items: [
      {
        subTitle: '学内の図書、雑誌、新聞を探す',
        step: 1,
        list: [
          {
            name: 'フェリス女学院大学附属図書館OPAC',
            href: 'https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init',
            icon: 'mdi-open-in-new',
          },
          {
            name: '新聞(緑園キャンパス)',
            push: '/newspaper',
          },
        ],
      },
      {
        subTitle: '論文や情報を探す',
        step: 2,
        list: [
          {
            name: 'オンラインデータベース一覧',
            push: '/database',
          },
        ],
      },
      {
        subTitle: 'OPACで見つからなかったら…学外の図書館にあるか調べる',
        step: 3,
        list: [
          {
            name: 'CiNii Books',
            href: 'http://ci.nii.ac.jp/books/',
            comment: '国立情報学研究所',
            icon: 'mdi-open-in-new',
          },
          {
            name: 'Webcat Plus',
            href: 'http://webcatplus.nii.ac.jp/',
            comment: '国立情報学研究所',
            icon: 'mdi-open-in-new',
          },
          {
            name: '国立国会図書館サーチ',
            href: 'http://iss.ndl.go.jp/',
            comment: '国立国会図書館',
            icon: 'mdi-open-in-new',
          },
        ],
      },
      {
        subTitle: 'リンク集',
        step: 4,
        list: [
          {
            name: '一次情報',
            push: '/links-collection-1',
            comment: '一次情報（本文そのもの）を入手できる外部のサイト集',
          },
          {
            name: '二次情報',
            push: '/links-collection-2',
            comment:
              '国内外の図書館の所蔵情報、図書や雑誌（論文）の書誌情報など、一次情報にアクセスするための二次情報を入手できる外部のサイト集',
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
.link-list {
  list-style: none;
  padding-left: 0;
}
</style>
