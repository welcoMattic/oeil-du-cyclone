const Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('build')
    .setPublicPath(Encore.isProduction() ? '/build' : '/build')
    .setManifestKeyPrefix(Encore.isProduction() ? 'build' : 'build')
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
        { from: './assets/images', to: 'images/' },
    ]))

    .enableSourceMaps(!Encore.isProduction())
    .enableBuildNotifications(!Encore.isProduction())

    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
