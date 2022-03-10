<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    :height="height"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-row
        v-if="!englishPage"
        class="fill-height"
        align="center"
        justify="center"
      >
        <img src="@/assets/images/layouts/site-logo.png" width="350" height="113" />
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'HomeMainVisual',
  props: {
    englishPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      height: '260',
      items: [
        {
          src: require('@/assets/images/main-visual/main-visual-01.jpg'),
        },
        {
          src: require('@/assets/images/main-visual/main-visual-02.jpg'),
        },
        {
          src: require('@/assets/images/main-visual/main-visual-03.jpg'),
        },
        {
          src: require('@/assets/images/main-visual/main-visual-04.jpg'),
        },
        {
          src: require('@/assets/images/main-visual/main-visual-06.jpg'),
        },
        {
          src: require('@/assets/images/main-visual/main-visual-05.jpg'),
        },
        {
          src: require('@/assets/images/main-visual/main-visual-07.jpg'),
        },
        {
          src: require('@/assets/images/main-visual/main-visual-08.jpg'),
        },
      ],
    }
  },
}
</script>