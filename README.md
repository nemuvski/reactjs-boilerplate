# React.js Boilerplate

🚧 あくまで個人用のReact.jsプロジェクトのたたき台です。

プロジェクトの構成の概要です。

- React.js
- TypeScript
- ESLint
- Prettier
- Webpack

ビルド設定のカスタマイズは `webpack/webpack.config.cjs` を編集してください。

## ディレクトリ

- `dist`
  - ビルドすると生成されます。
- `src`
  - 開発コードを入れておく。
- `webpack`
  - Webpack関連のコードを入れておく。
- `static`
  - 静的なファイルを入れておく。
  - ビルド時にコピーされて配置されます。

## コマンド

- `yarn start`
  - `localhost:3000` でローカル環境が立ち上がります。
- `yarn build`
  - 問題なくビルドできれば、 `dist` ディレクトリが作成されます。

詳しくは `package.json` をご参照ください。

## その他

### `.env` ファイル

読み込むファイルは以下のパターンです。

- `.env.development` ファイル
  - `yarn start` コマンドを実行したときに読み込まれます。
- `.env.production` ファイル
  - `yarn build` コマンドを実行したときに読み込まれます。

### 独自の型定義ファイル

プロジェクトで独自の型定義ファイルが必要な場合は、`src/types` にファイルを配置してください。
