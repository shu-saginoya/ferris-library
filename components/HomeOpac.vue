<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab> 検索 </v-tab>
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
                append-icon="mdi-open-in-new"
                prepend-inner-icon="mdi-magnify"
                clearable
              >
                <template #append-outer>
                  <v-btn
                    type="submit"
                    class="submit-btn"
                    small
                    fab
                    icon
                    color="primary"
                    ><v-icon>mdi-send</v-icon></v-btn
                  >
                </template>
              </v-text-field>
            </form>
            <btn-open-in-new
              link="詳細検索"
              url="https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init"
            ></btn-open-in-new>
            <btn-my-library></btn-my-library>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat class="d-md-flex justify-start">
          <div>
            <v-card-text>
              <btn-open-in-new
                link="スマートフォン版OPAC"
                url="http://osirabe.net/opac.ferris/"
              ></btn-open-in-new>
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
  name: 'HomeOpac',
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