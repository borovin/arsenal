({
    baseUrl: '../src/',

    mainConfigFile: '../src/require.config.js',
    dir: "../build",

    paths: {
        'jquery': 'bower_components/jquery/dist/jquery'
    },

    skipDirOptimize: true,
    optimizeAllPluginResources: true,
    removeCombined: true,

    preserveLicenseComments: false,
    optimizeCss: 'standard',

    modules: [
        {
            name: "pages/main",
            exclude: ['common']
        }
    ]

})