<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab> 検索フォーム </v-tab>
      <v-tab> スマートフォン </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <form
              name="QSearch"
              action="https://www2.library.ferris.ac.jp/gate"
              method="POST"
              target="_blank"
            >
              <input type="hidden" name="module" value="search" />
              <input type="hidden" name="path" value="switch" />
              <input type="hidden" name="method" value="search" />
              <input type="hidden" name="quick" value="true" />
              <input type="hidden" name="prefix" value="/search" />
              <input type="hidden" name="page" value="/search" />
              <v-text-field
                id="QSearch"
                name="word"
                label="クイックリサーチ"
                placeholder="キーワードを入力してください"
                outlined
                dense
                prepend-inner-icon="mdi-magnify"
                clearable
              >
                <template #append-outer>
                  <v-btn type="submit" class="submit-btn" small fab icon color="primary"><v-icon>mdi-send</v-icon></v-btn>
                </template>
              </v-text-field>
            </form>

            <v-btn
              href="https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init"
              target="_blank"
            >
              詳細検索
              <v-icon right>mdi-open-in-new</v-icon>
            </v-btn>
            <v-btn
              href="https://www2.library.ferris.ac.jp/gate?module=portal&path=ml/top&method=open"
              target="_blank"
            >
              My library login
              <v-icon right>mdi-open-in-new</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat class="d-md-flex justify-start">
          <div>
            <v-card-title>スマートフォン版OPAC</v-card-title>
            <v-card-text>
              <v-btn href="http://osirabe.net/opac.ferris/" target="_blank">
                http://osirabe.net/opac.ferris/
                <v-icon right>mdi-open-in-new</v-icon>
              </v-btn>
            </v-card-text>
          </div>
          <div>
            <img src="@/assets/image/qr.gif" />
          </div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: 'Opac',
  data: () => ({
    tab: null,
  }),
}
</script>

<style scoped>
.submit-btn {
  margin-top: -8px;
}
</style>