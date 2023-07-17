## Using webpack-bundle-analyzer to Analyze Bundle content

1. Installation
   
   ```
   $ npm install --save-dev webpack-bundle-analyzer
   ```

2. In `webpack.config.js`, add 
   
   ```js
   //add to top
   const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
   
   // add to plugins
   module.exports={
     plugins: [
       new BundleAnalyzerPlugin({
         analyzerMode: 'disabled',
         generateStatsFile: true, //disable it if you don't need the json file
       }),
     ]
   }
   ```

3. In `package.json`, add customised scripts
   
   ```json
   {
    "scripts": {
       "generateAnalyzFile": "webpack --profile --json > stats.json", // 生成分析文件
       "analyz": "webpack-bundle-analyzer --port 8888 ./dist/stats.json" // 启动展示打包报告的http服务器
     }
   }
   ```



4. To generate the stats file, and analyze
   
   ```
   $ npm run generateAnalyzFile
   $ npm run analyz
   ```
   
   
   
   
