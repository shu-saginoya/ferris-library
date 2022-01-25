<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <list-information-search :items="items" :english-page="true"></list-information-search>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'Information search',
    items: [
      {
        subTitle: 'Searching for Books, Journals and Newspapers in Ferris University Library',
        step: 1,
        list: [
          {
            name: 'Ferris University Library OPAC',
            href: 'https://www2.library.ferris.ac.jp/gate?module=search&path=index&method=init',
            icon: 'mdi-open-in-new',
          },
          {
            name: 'Newspaper list (Ryokuen Library)',
            comment: 'This is only a Japanese page',
            push: '/newspaper',
          },
        ],
      },
      {
        subTitle: 'Searching for Journal Articles and Information',
        step: 2,
        list: [
          {
            name: 'Database and eBook list',
            push: '/database',
            comment: 'This is only a Japanese page',
          },
        ],
      },
      {
        subTitle: 'Searching for Information at Other Libraries',
        step: 3,
        list: [
          {
            name: 'CiNii Books',
            href: 'http://ci.nii.ac.jp/books/',
            comment: 'operated by the National Institute of Informatics',
            icon: 'mdi-open-in-new',
          },
          {
            name: 'Webcat Plus',
            href: 'http://webcatplus.nii.ac.jp/',
            comment: 'operated by the National Institute of Informatics',
            icon: 'mdi-open-in-new',
          },
          {
            name: 'National Diet Library Search',
            href: 'http://iss.ndl.go.jp/',
            comment: 'operated by the National Diet Library',
            icon: 'mdi-open-in-new',
          },
        ],
      },
      {
        subTitle: 'External Links',
        step: 4,
        list: [
          {
            name: 'Primary Sources',
            push: '/links-collection-1',
            comment: 'Links to sites containing full-text primary sources (free). This is only a Japanese page',
          },
          {
            name: 'Secondary Sources',
            push: '/links-collection-2',
            comment:
              'Links to external sites enabling searches for secondary sources, such as the catalogs of libraries both in Japan and abroad, and portal sites for searching for books and journal articles. This is only a Japanese page',
          },
        ],
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

<style scoped>
.link-list {
  list-style: none;
  padding-left: 0;
}
</style>
