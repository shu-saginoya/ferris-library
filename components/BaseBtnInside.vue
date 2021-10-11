<template>
  <v-btn color="primary" outlined :to="to">
    {{ link }}
  </v-btn>
</template>

<script>
export default {
  name: 'BaseBtnInside',
  props: {
    link: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
}
</script>