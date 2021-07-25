module.exports = {
  preset: "ts-jest", // Jest 配置基础的预设
  testEnvironment: 'jest-environment-jsdom-fifteen', // 测试环境。Jest 中的默认环境是 Node.js 环境。如果正在构建 Web 应用程序，则可以改用类似浏览器的环境jsdom。此处使用jsdom15，需安装相应依赖
  testRegex: "(/__test__/.*/*.(test|spec))\\.tsx?$", // 匹配的测试文件路径 __test__下文件内的 xx.spec.ts 或 xx.test.ts 文件
  transform: {
    "^.+\\.(vue|md)$": "<rootDir>/node_modules/vue-jest"
  },  // 用 `vue-jest` 处理 `*.vue` 文件
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // 文件扩展名数组
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__test__/fileMock.ts", // 重定向至自己写的mock文件中，mock上述文件
    "\\.(css|less)$": "<rootDir>/__test__/fileMock.ts"
  }, // 路径解析，图片与css格式mock
  globals: {
    "ts-jest": {
      babelConfig: true // 启用 Babel 处理，使用 babel.config.js
    }
  }
}
