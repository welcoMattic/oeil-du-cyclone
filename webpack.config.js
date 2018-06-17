const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('build')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    
    .addStyleEntry('css/style', './assets/scss/style.scss')
    .enableSassLoader(sassOptions => {}, {
        resolveUrlLoader: false,
    })

    .addEntry('js/app', './assets/js/app.js')
    .configureBabel(babelConfig => {
        babelConfig.presets.push('env');
    })

    .enableSourceMaps(!Encore.isProduction())
    .enableBuildNotifications(!Encore.isProduction())

    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
