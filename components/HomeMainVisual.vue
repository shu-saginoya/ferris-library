<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    :height="carouselHeight"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img
        :src="item.src"
        class="imageFilter"
        :height="carouselHeight"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
  <!--   <hooper :settings="hooperSettings">
    <slide v-for="(item, i) in items" :key="i">
      <v-sheet class="px-1">
        <v-img :src="item.src" contain></v-img>
      </v-sheet>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper> -->
</template>

<script>
/* import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper'
import 'hooper/dist/hooper.css' */

export default {
  name: 'HomeMainVisual',
  /*   components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  }, */
  data() {
    return {
      /*       hooperSettings: {
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 6000,
        transition: 600,
        centerMode: true,
        breakpoints: {
          480: {
            itemsToShow: 1.75,
          },
          640: {
            itemsToShow: 2.3,
          },
        },
      }, */
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
  computed: {
    carouselHeight() {
      let height
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          height = 260
          break
        case 'sm':
          height = 280
          break
        case 'md':
          height = 300
          break
        case 'lg':
          height = 320
          break
        case 'xl':
          height = 340
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
.imageFilter:hover {
  filter: grayscale(0%);
  transition: all 1s;
}
</style>
