<template>
  <v-main>
    <v-carousel
      cycle
      height="440px"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('@/assets/image/img_02.png'),
        },
        {
          src: require('@/assets/image/img_07.png'),
        },
        {
          src: require('@/assets/image/img_09.png'),
        },
      ],
    }
  },
}
</script>