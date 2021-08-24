<template>
  <v-main>
    <v-carousel cycle height="440px" hide-delimiter-background>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        class="mein-visual"
      >
        <v-row class="fill-height" align="center" justify="center">
          <img src="@/assets/image/site-logo.png" width="403" height="130" />
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <div>
      あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />あ<br />
    </div>
  </v-main>
</template>

<script>
export default {
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
          src: require('@/assets/image/main-visual/main-visual-05.jpg'),
        },
        {
          src: require('@/assets/image/main-visual/main-visual-06.jpg'),
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

<style scoped>
.mein-visual {
  filter: brightness(110%) grayscale(10%);
}
</style>