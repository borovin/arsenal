define(function(require, exports, module) {
    //requirements
    require('jquery');

    return function(el) {
        var $el = $(el);

        $el.on('click', '.page__tab', function(e) {
            e.preventDefault();

            var $tab = $(this),
                contentID = $tab.attr('rel'),
                $content = $(document.getElementById(contentID));

            $tab
                .addClass('page__tab_active')
                .siblings('.page__tab')
                .removeClass('page__tab_active');

            $content
                .addClass('page__tabContent_active')
                .siblings('.page__tabContent')
                .removeClass('page__tabContent_active');
        })
    }
});