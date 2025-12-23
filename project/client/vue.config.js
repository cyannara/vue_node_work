const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000';
var path = require("path");
module.exports = defineConfig({
  outputDir : path.resolve("../server/public"),
  transpileDependencies: true,
  //lintOnSave : false,
  devServer : {
    proxy : {
      '^/api' : {
        target,
        changeOrigin : true,
        ws : false,
        pathRewrite : { '^/api' :'/' }
      }
    }
  }
})