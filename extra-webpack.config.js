const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        SPOTIFY_REDIRECT_URI: JSON.stringify(process.env.SPOTIFY_REDIRECT_URI),
        SPOTIFY_CLIENT_ID: JSON.stringify(process.env.SPOTIFY_CLIENT_ID),
        SPOTIFY_CLIENT_SECRET: JSON.stringify(process.env.SPOTIFY_CLIENT_SECRET),
        AZURE_KEY: JSON.stringify(process.env.AZURE_KEY)
      }
    })
  ]
}
