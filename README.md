# React.js Boilerplate

🚧 あくまで個人用のReact.jsプロジェクトのたたき台です。

プロジェクトの構成の概要です。

- React.js
- TypeScript
- ESLint
- Prettier
- Webpack

ビルド設定のカスタマイズは `webpack/webpack.config.cjs` を編集してください。

## コマンド

- `yarn start`
  - `localhost:3000` でローカル環境が立ち上がります。
- `yarn build`
  - 問題なくビルドできれば、 `dist` ディレクトリが作成されます。

詳しくは `package.json` をご参照ください。

## `.env` ファイル

読み込むファイルは以下のパターンです。

- `.env.development` ファイル
  - `yarn start` コマンドを実行したときに読み込まれます。
- `.env.production` ファイル
  - `yarn build` コマンドを実行したときに読み込まれます。