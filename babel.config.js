module.exports = {
  env: {
    test: {
      presets: [["@babel/preset-env", { targets: { node: 'current' } }]],
      plugins: [
        ["@vue/babel-plugin-jsx", { mergeProps: false }]
      ]
    }
  }
};