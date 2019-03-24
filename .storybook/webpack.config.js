const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.module\.(scss|sass)$/,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 2,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      require.resolve('sass-loader')
    ]
  });

  config.module.rules.push({
    test: /\.(scss|sass)$/,
    exclude: /\.module\.(scss|sass)$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });

  return config;
};
