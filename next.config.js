// const withMDX = require('@zeit/next-mdx')({
//   extension: /\.mdx?$/
// })
module.exports = {
  // pageExtensions: ['js', 'jsx', 'mdx'],
  webpack(config, options) {
    const { dev, isServer } = options
    config.module.rules.push({
      test: /\.mdx$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'mdx-deck/loader'
      ]
    })
    return config
  }
}