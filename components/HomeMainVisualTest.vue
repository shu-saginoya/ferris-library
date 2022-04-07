<template>
  <hooper :settings="hooperSettings" class="original-settings">
    <slide v-for="(item, i) in items" :key="i" class="px-1">
        <v-img :src="item.src" height="320" contain></v-img>
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-progress slot="hooper-addons"></hooper-progress>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'HomeMainVisualTest',
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 6000,
        transition: 600,
        centerMode: true,
        breakpoints: {
          500: {
            itemsToShow: 1,
          },
          960: {
            itemsToShow: 1.4,
          },
          1000: {
            itemsToShow: 2.4,
          }
        },
      },
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

<style scoped>
.imageFilter {
  filter: grayscale(20%);
}
.imageFilter:hover {
  filter: grayscale(0%);
  transition: all 1s;
}
.original-settings {
  margin: 0 auto;
  width: 100%;
  height: 320px;
}
</style>
