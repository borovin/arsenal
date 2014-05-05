require.config({
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        requireDom: 'bower_components/requireDom/requireDom'
    }
});

require(['jquery', 'requireDom'], function($, requireDom){
    $(function(){
        requireDom();
    });
});