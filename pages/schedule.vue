<template>
    <v-container>
        <text-page-title>{{ title }}</text-page-title>
        <v-card>
            <v-card-text>
                2021年度のスケジュールは開館カレンダーをご確認ください
            </v-card-text>
            <v-card-actions>
                <btn-inside link="開館カレンダーへ" to="calender"></btn-inside>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
  data: () => ({
      title: '年間予定'
  }),
  head () {
    return {
      title: this.title,
    }
  }
}
</script>