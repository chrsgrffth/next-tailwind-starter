const withAwesomeTypescript = require('next-awesome-typescript')
const options = {}

const next = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    )
    return config
  }
}

module.exports = withAwesomeTypescript(options, next)

// Resources:
// * https://github.com/davibe/next.js-example-with-global-stylesheet/blob/master/next.config.js
