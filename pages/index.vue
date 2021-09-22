<template>
  <v-container>
    <main-visual />
    <!--<section>
      <base-page-title>Calender※調整中です</base-page-title>
      <v-row justify="space-around">
        <v-col cols="12" md="6" class="pa-6"><calender /></v-col>
        <v-col cols="12" md="6" class="pa-6"><calender /></v-col>
      </v-row>
    </section>-->
    <!--<section>
      <base-page-title>News</base-page-title>
    </section>-->
    <section>
      <base-page-title>OPAC 蔵書検索</base-page-title>
      <opac />
    </section>
    <!--<section>
      <base-page-title>Topics</base-page-title>
    </section>-->
    <v-card class="mt-6">
      <v-card-title>制作状況について</v-card-title>
      <v-card-subtitle>業務連絡欄</v-card-subtitle>
      <v-card-text>
        <h3>全体的な事柄について</h3>
        <p>
          制作状況の確認用のサーバーを立ち上げました。完成したコンテンツから次第順次こちらにアップロードいたします。
        </p>
        <p>ヘッダー：検索機能については仕様を検討中です。</p>
        <p>サイドのドロワーメニュー：折りたたみ式に仕様変更しました。</p>
        <p>フッター：著作権表記のみのシンプルなものにしました。</p>
        <p>スクロールするとトップへもどるボタンが表示されるようにしました。（9月16日追加）</p>
      </v-card-text>
      <v-card-text>
        <h3>各ページについて</h3>
        <p>
          メインビジュアル：カルーセルで図書館の雰囲気が伝わる写真を並べました。
        </p>
        <p>
          エラーページ：存在しないページにアクセスした場合エラーページが表示されるようにしました。現在まだ制作されていないページでも表示されます。
        </p>
        <p>
          貸出サービス：（9月16日追加）
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
}
</script>