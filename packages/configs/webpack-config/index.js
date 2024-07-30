require('dotenv').config();

const path = require('path');
const webpack = require('webpack');

const { resolveTsAliases } = require('resolve-ts-aliases');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const isProduction = process.env.NODE_ENV === 'production';

const getClientEnvironment = () => {
  const regexp = /^PUBLIC_/i;

  return Object.keys(process.env)
    .filter((key) => regexp.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        NODE_ENV: 'development',
      }
    );
};

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: false,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[fullhash].js',
    chunkFilename: '[id].[fullhash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: resolveTsAliases(path.resolve(__dirname, './tsconfig.json')),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [!isProduction && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: !isProduction,
        },
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(getClientEnvironment()),
    new CopyWebpackPlugin({ patterns: [{ from: 'public' }] }),
    new HtmlWebpackPlugin(),

    !isProduction && new ForkTsCheckerWebpackPlugin(),
    !isProduction && new ReactRefreshWebpackPlugin(),

    process.env.BUNDLE_ANALYZER && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  devServer: {
    historyApiFallback: true,
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
    hot: true,
  },
};
