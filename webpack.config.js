const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname,'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: true, config: {path: path.resolve(__dirname,'src/js/postcss.config.js')}  }
          },  
        ],
      },  
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: true, config: {path: './src/js/postcss.config.js'}  }
          },
          {
            loader: "sass-loader",
            options: {  sourceMap: true,  implementation: require('sass') }
          },
        ],
      },
      {
        test: /\.(eot|woff|ttf|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    overlay: true,
    host: '0.0.0.0',
    port: '8082'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: './src/index.html', 
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};