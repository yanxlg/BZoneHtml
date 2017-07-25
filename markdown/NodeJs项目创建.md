## Node环境安装
1. Node.js安装
    [官网](https://nodejs.org/en/)下载相应平台最新版本，一路安装即可
2. 设置npm镜像加速模块安装
    ```cmd
    //不建议使用cnpm，cnpm安装模块路径比较奇怪，packager不能正常识别，并且容易出现异常问题
    $ npm config set registry https://registry.npm.taobao.org --global
    $ npm config set disturl https://npm.taobao.org/dist --global
    ```

## 项目创建
1. 创建空项目文件夹
2. 在项目根目录创建package.json文件
    ```js
    {
      "name": "cross-framework",
      "version": "1.0.0",
      "private": true,
      "keywords": [
        "cross",
        "framework"
      ],
      "nodeVersion": "6.x",
      "scripts": {
        "prebuild": "webpack",
        "build": "gulp",
        "watch": "fis3 release -w",
        "build web": "fis3 release -d ./build/web",
        "local": "fis3 release",
        "release": "fis3 release -wL",
        "server": "fis3 server start",
        "open": "fis3 server open",
        "prod": "fis3 release prod",
        "upload":"fis3 release upload"
      },
      "devDependencies": {
        "css-loader": "^0.28.4",
        "uglify-js": "^3.0.18",
        "clean-css": "^4.1.4",
        "fis-optimizer-png-compressor": "^0.1.6",
        "fis3-hook-relative": "^2.0.0",
        "webpack": "^2.6.1",
        "babel-core": "^6.25.0",
        "babel-loader": "^7.0.0",
        "babel-preset-env": "^1.5.2",
        "babel-preset-es2015": "^6.24.1",
        "babel-plugin-transform-beautifier": "^0.1.0",
        "weex-devtool": "^0.2.80",
        "weex-loader": "^0.4.4",
        "weex-vue-loader": "^0.2.12",
        "art-template": "^4.11.0",
        "art-template-loader": "^1.4.3",
        "html-loader": "^0.4.5",
        "autoprefixer": "^7.1.1",
        "sass-loader": "^6.0.6",
        "gulp-babel": "^6.1.2",
        "gulp-autoprefixer": "^4.0.0",
        "gulp-rename": "^1.2.2",
        "gulp": "^3.9.1",
        "gulp-sass": "^3.1.0",
        "gulp-clean-css": "^3.4.2",
        "gulp-minify": "^1.0.0",
        "gulp-scss": "^1.4.0",
        "gulp-base64": "^0.1.3",
        "minimatch": "^3.0.4",
        "graceful-fs": "^4.1.11",
        "fis3-postpackager-loader": "^2.1.4",
        "gulp-cssbeautify": "^0.1.3",
        "node-sass-import-once": "^1.2.0",
        "gulp-sass-import-json": "^1.0.0",
        "fis3-deploy-replace": "^1.0.2",
        "fis3-deploy-http-push": "^2.0.6"
      }
    }
    ```

3. 项目模块安装
    ```cmd
    npm i||npm install
    ```