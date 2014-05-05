define(function(require, exports, module) {

    return function(opt) {

        opt = opt || {};

        opt.container = opt.container || [document.body];
        opt.attributeName = opt.attributeName || 'require';
        opt.removeAttribute = typeof opt.removeAttribute === 'undefined' ? true : opt.removeAttribute;
        opt.iterator = opt.iterator || function(el, module) {
            module(el);
        };

        var elements = [];

        switch (typeof opt.container) {
            case 'string':
                opt.container = document.querySelectorAll(opt.container);
                break;
            default:
                if (opt.container instanceof HTMLElement) {
                    opt.container = [opt.container]
                }
        }

        for (var n = 0; n < opt.container.length; n++) {
            (function(n) {
                var containerElement = opt.container[n];
                elements = elements.concat([].slice.call(containerElement.querySelectorAll('[' + opt.attributeName + ']')));
            })(n)
        }

        for (var i = 0; i < elements.length; i++) {
            (function(i) {
                var el = elements[i],
                    moduleId = el.getAttribute(opt.attributeName);

                requirejs([moduleId], function(module) {
                    opt.iterator(el, module);
                    !opt.removeAttribute || el.removeAttribute(opt.attributeName);
                });
            })(i)
        }
    };
});