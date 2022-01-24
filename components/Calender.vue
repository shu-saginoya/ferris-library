<template>
  <div>
    <v-toolbar flat>
      <v-menu bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            outlined
            color="grey darken-2"
            class="text-none"
            v-bind="attrs"
            v-on="on"
          >
            <span>{{
              englishPage ? placeToLabel[place][1] : placeToLabel[place][0]
            }}</span>
            <v-icon right> mdi-menu-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="place = 'ryokuen'" @change="eventColor">
            <v-list-item-title>{{
              englishPage ? 'Ryokuen' : '緑園本館'
            }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="place = 'yamate'" @change="eventColor">
            <v-list-item-title>{{
              englishPage ? 'Yamate' : '山手分室'
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn fab text small color="grey darken-2" @click="prev">
        <v-icon small> mdi-chevron-left </v-icon>
      </v-btn>
      <v-btn fab text small color="grey darken-2" @click="next">
        <v-icon small> mdi-chevron-right </v-icon>
      </v-btn>
      <v-toolbar-title v-if="$refs.calendar" class="wrap-text">
        {{ $refs.calendar.title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            right
            color="grey darken-2"
            icon
            v-bind="attrs"
            v-on="on"
            @click="setToday"
          >
            <v-icon>mdi-calendar-today</v-icon>
          </v-btn>
        </template>
        <span>today</span>
      </v-tooltip>
    </v-toolbar>
    <v-sheet height="700">
      <v-calendar
        ref="calendar"
        v-model="focus"
        color="primary"
        :events="events"
        :event-color="getEventColor"
        :type="type"
        :locale="locale"
        @change="eventColor"
        @click:more="viewDay"
        @click:date="viewDay"
      >
        <template #event="props">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <div class="pl-1" v-bind="attrs" v-on="on">
                {{ props.event.name }}
              </div>
            </template>
            <span>{{ props.event.name }}</span>
          </v-tooltip>
        </template>
      </v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import ryokuen from '@/assets/json/calender-ryokuen.json'
import yamate from '@/assets/json/calender-yamate.json'

export default {
  name: 'Calender',
  props: {
    englishPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    place: 'ryokuen',
    placeToLabel: {
      ryokuen: ['緑園本館', 'Ryokuen'],
      yamate: ['山手分室', 'Yamate'],
    },
    setPlace: [],
    ryokuen,
    yamate,
    focus: '',
    type: 'month',
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      'indigo lighten-1',
      'grey lighten-1',
      'grey lighten-1',
      'grey lighten-1',
      'blue lighten-1',
      'orange lighten-1',
      'green lighten-1',
      'amber lighten-1',
      'purple lighten-1',
      'deep-orange lighten-1',
      'pink lighten-1',
      'lime lighten-1',
    ],
    names: [
      'イベント',
      '閉館',
      '閉室',
      'Closed',
      '8:50～21:00',
      '9:00～19:00',
      '9:00～17:00',
      '9:00～18:00',
      '8:50～18:30',
      '10:00～15:00',
      '8:50～18:00',
      '10:00～17:00',
    ],
  }),
  computed: {
    locale() {
      return this.englishPage ? 'en' : 'ja'
    },
  },
  mounted() {
    this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay({ date }) {
      this.focus = date
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    eventColor() {
      if (this.place === 'ryokuen') {
        this.setPlace = this.ryokuen
      } else {
        this.setPlace = this.yamate
      }
      for (let i = 0; i < this.setPlace.length; i++) {
        const number = this.names.indexOf(this.setPlace[i].name)
        if (number >= 0) {
          this.setPlace[i].color = this.colors[number]
        } else {
          this.setPlace[i].color = this.colors[0]
        }
        if (
          this.englishPage &&
          (this.setPlace[i].name === '閉館' || this.setPlace[i].name === '閉室')
        ) {
          this.setPlace[i].name = 'Closed'
        }
      }
      this.events = this.setPlace
    },
  },
}
</script>