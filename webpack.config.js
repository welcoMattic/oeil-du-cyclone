const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('build')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    
    .addStyleEntry('css/style', './style.scss')
    .enableSassLoader(sassOptions => {}, {
        resolveUrlLoader: false,
    })

    .addEntry('js/index', './index.js')
    .configureBabel(babelConfig => {
        babelConfig.presets.push('env');
    })

    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableBuildNotifications()

    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
