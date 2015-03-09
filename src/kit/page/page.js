define(function (require) {

    var Block = require('kit/block/block');

    return Block.extend({
        el: document.body,
        events: {
            'click .page__tab': function(e){

                e.preventDefault();

                var $tab = $(e.currentTarget),
                    $tabContent = $('.page__tabContent[data-tab="' + e.currentTarget.dataset.tab + '"]');

                $tab
                    .addClass('page__tab_active')
                    .siblings('.page__tab_active')
                    .removeClass('page__tab_active');

                $tabContent
                    .addClass('page__tabContent_active')
                    .siblings('.page__tabContent_active')
                    .removeClass('page__tabContent_active');

                $tabContent
                    .find('[autofocus]')
                    .focus();
            }
        }
    });
});