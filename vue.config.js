module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy: 'https://alaatv.com/api/v2'
  }
}
