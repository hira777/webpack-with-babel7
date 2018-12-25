const path = require('path');

module.exports = {
  // エントリーポイントの設定
  entry: './src/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.js$/,
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
        use: [
          {
            // 利用するローダー
            loader: 'babel-loader',
            // ローダーのオプション
            options: {
              presets: [
                [
                  // プリセットに @babel/preset-env を指定する
                  '@babel/preset-env',
                  {
                    // サポートするブラウザ、この設定に応じて、必要な polyfill のみが import される
                    targets: {
                      edge: '17',
                      firefox: '60',
                      chrome: '67',
                      safari: '11.1'
                    },
                    // 必要な polyfill のみを import させたい場合、'usage'を指定する（必須）
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
};
