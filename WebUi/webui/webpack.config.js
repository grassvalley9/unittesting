const path = require("path");
const fs = require("fs-extra");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("babel-register");
const path = require('path')
const fs = require('fs-extra')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('babel-register')

if (!fs.existsSync(path.join(__dirname, "./dist"))) {
    fs.mkdirSync(path.join(__dirname, "./dist"));
if (!fs.existsSync(path.join(__dirname, './dist'))) {
  fs.mkdirSync(path.join(__dirname, './dist'))
}

if (!fs.existsSync(path.join(__dirname, "./dist/icons"))) {
    fs.copySync(
        path.join(__dirname, "../deps/GV.Cluster.UI.Base/dist/icons"),
        path.join(__dirname, "./dist/icons")
    );
if (!fs.existsSync(path.join(__dirname, './dist/icons'))) {
  fs.copySync(
    path.join(__dirname, '../deps/GV.Cluster.UI.Base/dist/icons'),
    path.join(__dirname, './dist/icons')
  )
}

fs.copySync(
    path.join(__dirname, "./frontend/static"),
    path.join(__dirname, "./dist")
);
  path.join(__dirname, './frontend/static'),
  path.join(__dirname, './dist')
)

module.exports = {
    entry: "./frontend/index.jsx",
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx"]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](?!.*(ag-grid|grassvalley))/,
                    name: "vendor",
                    chunks: "all"
                },
                agGrid: {
                    test: /[\\/]ag-grid/,
                    name: "ag-grid",
                    chunks: "all"
                }
            },
            chunks: "all",
            name: "main"
  entry: './frontend/index.js',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](?!.*(ag-grid|grassvalley))/,
          name: 'vendor',
          chunks: 'all'
        },
        agGrid: {
          test: /[\\/]ag-grid/,
          name: 'ag-grid',
          chunks: 'all'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "resolve-url-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: [{ loader: "url-loader" }]
      },
      chunks: 'all',
      name: 'main'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
    }
};
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [{ loader: 'url-loader' }]
      }
    ]
  }
}