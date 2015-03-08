define(function (require) {

    var Block = require('kit/block/block');

    return Block.extend({
        activeItemIndex: 0,
        globalEvents: {
            'keydown': function (e) {

                var block = this;

                switch (e.which) {
                    case 37:
                        block.prevItem();
                        break;
                    case 39:
                        block.nextItem();
                        break;
                }
            }
        },
        events: {
            'click .carousel__nextLink': function (e) {

                e.preventDefault();

                var block = this;

                block.nextItem();
            },
            'click .carousel__navigationLink': function (e) {

                e.preventDefault();

                var block = this,
                    index = block.$navigationLink.index(e.currentTarget);

                block.toItem(index);
            }
        },
        render: function () {

            var block = this,
                render = Block.prototype.render.apply(block, arguments);

            block.$items = block.$('.carousel__item');
            block.$list = block.$('.carousel__list');
            block.$navigationLink = block.$('.carousel__navigationLink');

            return render;
        },
        nextItem: function () {

            var block = this;

            block.toItem(block.activeItemIndex + 1);

        },
        prevItem: function () {

            var block = this;

            block.toItem(block.activeItemIndex - 1);
        },
        toItem: function (index) {

            var block = this,
                indexDiff = index - block.activeItemIndex,
                firstItem = block.el.querySelector('.carousel__item');

            if ($(firstItem).is(':animated')) {
                return;
            }

            if (index >= block.$items.length) {
                block.activeItemIndex = 0;
            } else if (index < 0) {
                block.activeItemIndex = block.$items.length - 1;
            } else {
                block.activeItemIndex = index;
            }

            block.$navigationLink
                .eq(block.activeItemIndex)
                .addClass('carousel__navigationLink_active')
                .siblings('.carousel__navigationLink')
                .removeClass('carousel__navigationLink_active');

            if (indexDiff > 0) {
                $(firstItem).animate({
                    marginLeft: -1000 * indexDiff
                }, function () {
                    block.$('.carousel__item:lt(' + indexDiff + ')')
                        .css('marginLeft', 0)
                        .appendTo(block.$list);
                });
            }

            if (indexDiff < 0) {

                block.$('.carousel__item:lt(' + indexDiff + ')')
                    .appendTo(block.$list);

                firstItem = block.el.querySelector('.carousel__item');

                firstItem.style.marginLeft = 1000 * indexDiff + 'px';

                $(firstItem).animate({
                    marginLeft: 0
                });
            }

        }
    });
});