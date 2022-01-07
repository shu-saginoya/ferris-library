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
            <li
              v-for="(item, i) in todayEvents('ryokuen')"
              :key="'ryokuen' + i"
            >
              {{ item }}
            </li>
          </ul>
        </v-card-text>
      </v-col>
      <v-col cols="3">
        <v-card-text>
          <p class="library-name">山手分室</p>
          <ul class="events">
            <li v-for="(item, i) in todayEvents('yamate')" :key="'yamate' + i">
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
  methods: {
    todayEvents(libraryName) {
      let events = []
      const todayEvents = []
      const today = this.$dayjs()
      switch (libraryName) {
        case 'ryokuen':
          events = this.ryokuen
          break
        case 'yamate':
          events = this.yamate
          break
      }
      events.forEach(function (value) {
        const start = new Date(value.start)
        start.setHours(0, 0, 0)
        const end =
          value.end !== undefined ? new Date(value.end) : new Date(value.start)
        end.setHours(23, 59, 59)
        if (today.isBetween(start, end, null, '[)')) {
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
  background-color: #b71c1c;
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