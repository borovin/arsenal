(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals
        root.initDom = factory();
    }
}(this, function () {
    return function(opt) {

        opt = opt || {};

        opt.root = opt.root || [document];
        opt.attributeName = opt.attributeName || 'require';
        opt.handler = opt.handler || function(el) {
            if (typeof requirejs === 'function'){
                requirejs([el.getAttribute(opt.attributeName)], function(module) {
                    module(el);
                });
            }
        };

        var elements = [];

        switch (typeof opt.root) {
            case 'string':
                opt.root = document.querySelectorAll(opt.root);
                break;
            default:
                if (opt.root instanceof HTMLElement) {
                    opt.root = [opt.root]
                }
        }

        for (var n = 0; n < opt.root.length; n++) {
            (function(n) {
                var containerElement = opt.root[n];
                elements = elements.concat([].slice.call(containerElement.querySelectorAll('[' + opt.attributeName + ']')));
            })(n)
        }

        for (var i = 0; i < elements.length; i++) {
            (function(i) {
                var el = elements[i];
                opt.handler(el);
                el.removeAttribute(opt.attributeName);
            })(i)
        }
    };
}));