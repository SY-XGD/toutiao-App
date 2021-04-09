module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      // 函数：动态处理返回
      // postcss-pxtorem处理每个css文件时，都会来调用这个函数，它会把被处理的css文件相关的信息通过参数传递给该函数
      // rootValue: 37.5,
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
