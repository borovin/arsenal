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
            $el.find('.carousel__item').eq(0).appendTo($el.find('.carousel__list'));
            carousel.reload();
        });

        $el.on('click', '.carousel__nextLink', function(){
            $el.jcarousel('scroll', '+=1');
        });
    }
});