const Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('build')
    .setPublicPath(Encore.isProduction() ? '/oeil-du-cyclone/build' : '/build')
    .setManifestKeyPrefix('oeil-du-cyclone')
    .cleanupOutputBeforeBuild()
    
    .addStyleEntry('css/style', './assets/scss/style.scss')
    .enableSassLoader(sassOptions => {}, {
        resolveUrlLoader: false,
    })

    .addEntry('js/app', './assets/js/app.js')
    .configureBabel(babelConfig => {
        babelConfig.presets.push('env');
    })

    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/fonts', to: 'fonts/' },
      ]))

    .enableSourceMaps(!Encore.isProduction())
    .enableBuildNotifications(!Encore.isProduction())

    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
