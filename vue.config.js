const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    css:{
      // modules:false,
      // extract:true,
      sourceMap:false,
      loaderOptions: {
        postcss: {
          plugins: [
            autoprefixer(),
            pxtorem({
              rootValue: 37.5,
              propList: ['*']
            })
          ]
        }
      }
    },
    chainWebpack: (config)=>{
      config.resolve.alias
          .set('@', resolve('src'))
        }

}

