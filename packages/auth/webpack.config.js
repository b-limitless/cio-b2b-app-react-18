const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

const port = 8084;

const deps = require('./package.json').dependencies;
//http://www.ensemblecrafts.site

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    output: {
      publicPath: isProduction
        ? 'https://auth.ensemblecrafts.com/'
        : `http://localhost:${port}/`,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    devServer: {
      port: port,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(woff2?|jpe?g|png|gif|ico)$/,
          oneOf: [
            {
              include: path.resolve(__dirname, '../node_modules/'),
              use: 'svg-inline-loader',
            },
            {
              exclude: path.resolve(__dirname, '../node_modules/'),
              use: 'url-loader',
            },
          ],
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'auth',
        filename: 'remoteEntry.js',
        remotes: {},
        exposes: {
          './AuthApp': './src/bootstrap',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
          '@reduxjs/toolkit': {
            singleton: true,
            requiredVersion: deps['@reduxjs/toolkit'],
          },
          'react-router-dom': {
            singleton: true,
            requiredVersion: deps['react-router-dom'],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
      })
    ],
  };
};
