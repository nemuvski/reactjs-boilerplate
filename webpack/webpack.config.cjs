const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv-webpack')
const terserPlugin = require('terser-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const eslintWebpackPlugin = require('eslint-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const headerMessage = require('./scripts/header-message.cjs')

const ROOT_DIR_PATH = path.resolve(__dirname, '..')
const ENTRY_FILENAME = 'index.tsx'
const OUTPUT_DIRNAME = 'dist'
const DEV_SERVER_PORT = 3000

module.exports = (env, argv) => {
  const mode = argv.mode
  const isProductionMode = mode === 'production'
  const appVersion = isProductionMode ? env.version : `${env.version}-${mode}`

  headerMessage(mode, appVersion)

  return {
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
          use: [miniCssExtractPlugin.loader, 'css-loader'],
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
      new webpack.EnvironmentPlugin({
        APP_VERSION: appVersion,
      }),
      new dotenv({
        path: path.join(ROOT_DIR_PATH, `.env.${mode}`),
        ignoreStub: true,
        // ファイルがない場合を考慮
        silent: true,
      }),
      new htmlWebpackPlugin({
        template: path.resolve(ROOT_DIR_PATH, 'src', 'index.html'),
        // テンプレートで利用する変数
        APP_VERSION: appVersion,
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
}
