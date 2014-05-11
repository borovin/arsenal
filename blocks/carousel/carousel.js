define(function(require, exports, module) {
    //requirements

    require('jquery');
    require('jcarousel');

    return function(el){
        var $el = $(el);

        $el.jcarousel({
            transitions: {
                transforms3d: true
            }
        });

        $el.on('jcarousel:animateend', function(event, carousel) {
            var $target = carousel.target(),
                targetId = $target.attr('id'),
                firstIndex = $el.find('.carousel__item').index($target);

            $el.find('.carousel__navigationLink[rel="' + targetId + '"]')
                .addClass('carousel__navigationLink_active')
                .siblings('.carousel__navigationLink')
                .removeClass('carousel__navigationLink_active');

            $el.find('.carousel__item').slice(0, firstIndex).appendTo($el.find('.carousel__list'));
            carousel.reload();
        });

        $el.on('click', '.carousel__nextLink', function(e){
            e.preventDefault();
            $el.jcarousel('scroll', '+=1');
        });

        $el.on('click', '.carousel__navigationLink', function(e){
            e.preventDefault();

            var itemId = $(this).attr('rel');

            $el.jcarousel('scroll', $('#' + itemId));
        });
    }
});