require.config({
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        initDom: 'bower_components/initDom/initDom',
        jcarousel: 'bower_components/jcarousel/dist/jquery.jcarousel'
    },
    shim: {
        jcarousel: ['jquery']
    }
});

require(['jquery', 'initDom'], function($, initDom){
    $(function(){
        initDom();
    });
});