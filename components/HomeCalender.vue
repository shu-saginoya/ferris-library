<template>
  <v-card>
    <v-row class="text-center">
      <v-col cols="3">
        <v-card-text>
          <p class="today">{{ $dayjs().format('YYYY年M月D日dddd') }}</p>
          <p>本日の開館時間</p>
        </v-card-text>
      </v-col>
      <v-col cols="3">
        <v-card-text>
          <p class="library-name">緑園本館</p>
          <ul class="events">
            <li v-for="(item, i) in ryokuenEvents" :key="'ryokuen' + i">
              {{ item }}
            </li>
          </ul>
        </v-card-text>
      </v-col>
      <v-col cols="3">
        <v-card-text>
          <p class="library-name">山手分室</p>
          <ul class="events">
            <li v-for="(item, i) in yamateEvents" :key="'ryokuen' + i">
              {{ item }}
            </li>
          </ul>
        </v-card-text>
      </v-col>
      <v-col cols="3">
        <v-card-actions>
          <btn-inside link="カレンダーをみる" to="/calender"></btn-inside>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ryokuen from '@/assets/json/calender-ryokuen.json'
import yamate from '@/assets/json/calender-yamate.json'

export default {
  name: 'HomeCalender',
  data: () => ({
    ryokuen,
    yamate,
  }),
  computed: {
    ryokuenEvents() {
      const events = this.ryokuen
      const todayEvents = []
      const self = this
      events.forEach(function (value) {
        if (
          value.end !== undefined &&
          self.$dayjs().isBetween(value.start, value.end, null, '[]')
        ) {
          todayEvents.push(value.name)
        }
        else if (
          value.end === undefined &&
          self.$dayjs().isBetween(value.start, value.start, null, '[]')
        ) {
          todayEvents.push(value.name)
        }
      })
      return todayEvents
    },
    yamateEvents() {
      const events = this.yamate
      const todayEvents = []
      const self = this
      events.forEach(function (value) {
        if (
          value.end !== undefined &&
          self.$dayjs().isBetween(value.start, value.end, null, '[]')
        ) {
          todayEvents.push(value.name)
        }
        else if (
          value.end === undefined &&
          self.$dayjs().isBetween(value.start, value.start, null, '[]')
        ) {
          todayEvents.push(value.name)
        }
      })
      return todayEvents
    },
  },
}
</script>

<style scoped>
.today {
  font-weight: bold;
  color: gray;
}
.library-name {
  border-radius: 4px;
  padding: 4px;
  margin: 0;
  background-color: #B71C1C;
  color: white;
}
.events {
  list-style-type: none;
  padding: 0;
}
.events li {
  border: gray 1px solid;
  border-radius: 4px;
  padding: 4px;
  margin: 4px 0;
}
</style>