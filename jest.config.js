module.exports = {
  preset: "ts-jest", // Jest 配置基础的预设
  testEnvironment: 'jest-environment-jsdom-fifteen', // 测试环境。Jest 中的默认环境是 Node.js 环境。如果正在构建 Web 应用程序，则可以改用类似浏览器的环境jsdom。此处使用jsdom15，需安装相应依赖
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // 文件扩展名数组
  globals: {
    "ts-jest": {
      babelConfig: true // 启用 Babel 处理，使用 babel.config.js
    }
  }
}
