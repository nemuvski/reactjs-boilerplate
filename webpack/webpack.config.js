const path = require('path')
const terserPlugin = require('terser-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const eslintWebpackPlugin = require('eslint-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

const ROOT_DIR_PATH = path.resolve(__dirname, '..')
const ENTRY_FILENAME = 'index.tsx'
const OUTPUT_DIRNAME = 'dist'
const DEV_SERVER_PORT = 3000

module.exports = {
  entry: path.resolve(ROOT_DIR_PATH, 'src', ENTRY_FILENAME),
  resolve: {
    modules: [path.resolve(ROOT_DIR_PATH, 'node_modules')],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '~': path.resolve(ROOT_DIR_PATH, 'src'),
    },
  },
  output: {
    path: path.join(ROOT_DIR_PATH, OUTPUT_DIRNAME),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new terserPlugin({
        terserOptions: {
          compress: {
            // 次のものはproductionモードのときに除かれる
            pure_funcs: ['console.log', 'console.info', 'console.warn', 'console.debug'],
          },
        },
        extractComments: 'all',
      }),
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(ROOT_DIR_PATH, 'src', 'index.html'),
    }),
    new eslintWebpackPlugin({
      extensions: ['ts', 'tsx', 'js', 'jsx'],
    }),
    new miniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  devServer: {
    port: DEV_SERVER_PORT,
  },
}
