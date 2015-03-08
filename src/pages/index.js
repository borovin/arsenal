define(function (require) {

    var Page = require('kit/page/page');

    return Page.extend({
        blocks: {
            carousel: require('blocks/carousel/carousel')
        }
    });
});