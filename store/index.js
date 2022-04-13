export const state = () => ({
  language: 'ja',
})

export const mutations = {
  languageJa(state) {
    state.language = 'ja'
  },
  languageEn(state) {
    state.language = 'en'
  },
}
