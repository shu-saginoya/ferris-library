<template>
  <v-carousel cycle height="330" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    >
      <v-row class="fill-height" align="center" justify="center">
        <img src="@/assets/image/site-logo.png" width="350" height="113" />
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'MainVisual',
  data() {
    return {
      items: [
        {
          src: require('@/assets/image/main-visual/main-visual-01.jpg'),
        },
        {
          src: require('@/assets/image/main-visual/main-visual-02.jpg'),
        },
        {
          src: require('@/assets/image/main-visual/main-visual-03.jpg'),
        },
        {
          src: require('@/assets/image/main-visual/main-visual-04.jpg'),
        },
        {
          src: require('@/assets/image/main-visual/main-visual-06.jpg'),
        },
        {
          src: require('@/assets/image/main-visual/main-visual-05.jpg'),
        },
        {
          src: require('@/assets/image/main-visual/main-visual-07.jpg'),
        },
        {
          src: require('@/assets/image/main-visual/main-visual-08.jpg'),
        },
      ],
    }
  },
}
</script>