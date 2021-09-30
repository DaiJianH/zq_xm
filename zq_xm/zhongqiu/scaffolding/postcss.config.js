
module.exports = {
  plugins: {
    autoprefixer: {
        overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8'],
    },
    // px转换成rem
    'postcss-pxtorem': {
        // vant-UI的官方根字体大小是37.5
        rootValue: 37.5,
        propList: ['*'],
    },
},
}
