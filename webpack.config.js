const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './pages/index.jsx', // Caminho do arquivo de entrada
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: __dirname + '/dist', // Diretório de saída
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        // Opções de minimização
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
};
