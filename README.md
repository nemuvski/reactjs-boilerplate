# React.js Boilerplate

🚧 あくまで個人用のReact.jsプロジェクトのたたき台です。

プロジェクトの構成の概要です。

- React.js
- TypeScript
- ESLint
- Prettier
- Vite

ビルド設定のカスタマイズは`vite.config.ts`を編集してください。

## ディレクトリ

- `dist`
  - ビルドすると生成されます。
- `src`
  - 開発コードを入れておく。
- `static`
  - 静的なファイルを入れておく。
  - ビルド時にコピーされて配置されます。

## コマンド

- `yarn start`
  - `localhost:3000` でローカル環境が立ち上がります。
  - ※ すでにポートが利用されている場合は、自動的に他のポートがあてられます。
- `yarn build`
  - 問題なくビルドできれば、 `dist` ディレクトリが作成されます。

詳しくは `package.json` をご参照ください。

## その他

### `.env` ファイル

`PUBLIC_` から始まる変数がクライアントのソースコードに公開されます。

### 独自の型定義ファイル

プロジェクトで独自の型定義ファイルが必要な場合は、`src/types` にファイルを配置してください。
