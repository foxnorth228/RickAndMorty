const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      "@src":        path.resolve( __dirname, "src"),
      "@assets":     path.resolve( __dirname, "src/assets"),
      "@components": path.resolve( __dirname, "src/components"),
      "@constants":   path.resolve( __dirname, "src/constants"),
      "@hooks":   path.resolve( __dirname, "src/hooks"),
      "@layouts":   path.resolve( __dirname, "src/layouts"),
      "@pages":      path.resolve( __dirname, "src/pages"),
      "@services":   path.resolve( __dirname, "src/services"),
      "@store":   path.resolve( __dirname, "src/store"),
      "@utils":   path.resolve( __dirname, "src/utils"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.draft.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets',
          to: '',
          noErrorOnMissing: true
        },
      ],
    }),
  ],
}
