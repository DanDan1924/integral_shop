const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 37.5
            })
          ]
        },
        less: {
          modifyVars: {
            // 'hack': `true; @import "${resolve('./src/assets/style/common.less')}";`
            'gradient-red': 'linear-gradient(to right, #6699ff, #0099ff)'
          }
        }
      }
  },
}