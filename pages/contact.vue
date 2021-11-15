<template>
  <v-container>
    <base-page-title>{{ title }}</base-page-title>
    <div class="d-md-flex">
      <v-card
        v-for="(item, i) in items"
        :key="i"
        max-width="375"
        class="mx-auto my-4"
      >
        <v-img
          :src="item.image"
          height="200px"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          class="align-end"
          dark
        >
          <v-card-title>
            <div class="text-h5">
              {{ item.name }}
            </div>
          </v-card-title>
        </v-img>
        <v-list two-line>
          <v-list-item :href="'tel:' + item.tel">
            <v-list-item-icon>
              <v-icon color="primary"> mdi-phone </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.tel }}</v-list-item-title>
              <v-list-item-subtitle>Phone</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action></v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.fax }}</v-list-item-title>
              <v-list-item-subtitle>Fax</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item :href="'mailto:' + item.eMali">
            <v-list-item-icon>
              <v-icon color="primary"> mdi-email </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.eMali }}</v-list-item-title>
              <v-list-item-subtitle>Organization</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item :href="item.googleMap" target="_blank">
            <v-list-item-icon>
              <v-icon color="primary"> mdi-map-marker </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.address }}</v-list-item-title>
              <v-list-item-subtitle
                >〒{{ item.addressNumber }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-icon>

                <v-icon>mdi-open-in-new</v-icon>

            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'アクセス・問い合わせ',
    items: [
      {
        name: '緑園本館',
        addressNumber: '245-8651',
        address: '横浜市泉区緑園4-5-3',
        googleMap: 'https://goo.gl/maps/EN6qf9SdPTx8woMv6',
        tel: '045 (812) 6999',
        fax: '045 (812) 9772',
        eMali: 'r_library@ferris.ac.jp',
        image: require(`@/assets/image/contact-ryokuen.jpg`),
      },
      {
        name: '山手分室',
        addressNumber: '231-8651',
        address: '横浜市中区山手町37',
        googleMap: 'https://goo.gl/maps/8KJm93i6qN7kL6Eb8',
        tel: '045 (681) 5149',
        fax: '045 (681) 5188',
        eMali: 'y_library@ferris.ac.jp',
        image: require(`@/assets/image/contact-yamate.jpg`),
      },
    ],
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>