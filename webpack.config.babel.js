import webpack from 'webpack';
import path from 'path';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import NpmInstallPlugin from 'npm-install-webpack-plugin';
const ROOT_PATH = path.resolve(__dirname);

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 1337;
const HOST = '0.0.0.0'; // Set to localhost if need be.
const URL = `http://${HOST}:${PORT}`


module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry: [
    path.resolve(ROOT_PATH,'app/src/index')
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: process.env.NODE_ENV === 'production' ? [] : ['eslint'],
        include: path.resolve(ROOT_PATH, './app')
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },
    {
      test: /\.svg$/,
      loader: 'babel!svg-react'
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    {
      test: /\.module\.scss$/,
      loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass'
      ]
    },
    {
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      loaders: ["style", "css", "sass"]
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "url-loader?mimetype=application/font-woff"
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "file-loader?name=[name].[ext]"
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'file?name=[path][name].[hash].[ext]'
    }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages'),
      styles: path.resolve(ROOT_PATH, 'app/styles'),
      utils: path.resolve(ROOT_PATH, 'app/utils'),
    },
  },
  output: {
    path: process.env.NODE_ENV === 'production' ?
      path.resolve(ROOT_PATH, 'server/public') : path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    // Constants defined above take care of logic
    // For setting host and port
    host: HOST,
    port: PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin(),
    new HtmlwebpackPlugin({
      title: 'Restaurant Reviewer',
      template: 'index.html'
    })
  ]
};
