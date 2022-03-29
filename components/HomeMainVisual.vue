<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    :height="carouselHeight"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" class="imageFilter">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'HomeMainVisual',
  data() {
    return {
      items: [
        {
          src: require('@/assets/images/main-visual/main-visual-01.jpg'),
          note: '緑園本館　外観',
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
  computed: {
    carouselHeight() {
      let height
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          height = 260
          break
        case 'sm':
          height = 310
          break
        case 'md':
          height = 360
          break
        case 'lg':
          height = 460
          break
        case 'xl':
          height = 560
          break
      }
      return height
    },
  },
}
</script>

<style scoped>
.imageFilter {
  filter: grayscale(20%);
}
.imageFilter:hover{
  filter: grayscale(0%);
  transition: all 1s;
}
</style>
