define(function(require, exports, module) {
    //requirements
    var initDom = require('./initDom');

    describe(module.id, function() {

        afterEach(function() {
            document.body.innerHTML = '';
        });

        it('init AMD module', function(done) {
            var div = document.createElement('div');

            div.setAttribute('require', 'path/to/anonymousModule');

            document.body.appendChild(div);

            initDom();

            var interval = setInterval(function() {
                if (div.classList.contains('initialized')) {
                    clearInterval(interval);
                    done();
                }
            }, 100);
        }, 7000);

        it('init AMD module with custom handler', function(done) {
            var div = document.createElement('div');

            div.setAttribute('require', 'path/to/anonymousModule');

            document.body.appendChild(div);

            initDom({
                handler: function(el) {
                    el.classList.add('customClass');
                }
            });

            var interval = setInterval(function() {
                if (div.classList.contains('customClass')) {
                    clearInterval(interval);
                    done();
                }
            }, 100);
        }, 7000);

        it('init AMD module with custom attribute', function(done) {
            var div = document.createElement('div');

            div.setAttribute('init', 'path/to/anonymousModule');

            document.body.appendChild(div);

            initDom({
                attributeName: 'init'
            });

            var interval = setInterval(function() {
                if (div.classList.contains('initialized')) {
                    clearInterval(interval);
                    done();
                }
            }, 100);
        }, 7000);

        it('init AMD module inside custom container', function(done) {
            var div1 = document.createElement('div'),
                div2 = document.createElement('div'),
                container = document.createElement('div');

            div1.setAttribute('require', 'path/to/anonymousModule');
            div2.setAttribute('require', 'path/to/anonymousModule');

            document.body.appendChild(div1);
            document.body.appendChild(container);
            container.appendChild(div2);

            initDom({
                root: container
            });

            var interval = setInterval(function() {
                if (div2.classList.contains('initialized')) {
                    clearInterval(interval);
                    expect(div1.classList.contains('initialized')).toBeFalsy();
                    done();
                }
            }, 100);
        }, 7000);

        it('init AMD module inside custom container by selector', function(done) {
            var div1 = document.createElement('div'),
                div2 = document.createElement('div'),
                container = document.createElement('div');

            div1.setAttribute('require', 'path/to/anonymousModule');
            div2.setAttribute('require', 'path/to/anonymousModule');
            container.id = 'container';

            document.body.appendChild(div1);
            document.body.appendChild(container);
            container.appendChild(div2);

            initDom({
                root: '#container'
            });

            var interval = setInterval(function() {
                if (div2.classList.contains('initialized')) {
                    clearInterval(interval);
                    expect(div1.classList.contains('initialized')).toBeFalsy();
                    done();
                }
            }, 100);
        }, 7000);

        it('init AMD module inside custom containers', function(done) {
            var div1 = document.createElement('div'),
                div2 = document.createElement('div'),
                div3 = document.createElement('div'),
                container1 = document.createElement('div'),
                container2 = document.createElement('div');

            div1.setAttribute('require', 'path/to/anonymousModule');
            div2.setAttribute('require', 'path/to/anonymousModule');
            div3.setAttribute('require', 'path/to/anonymousModule');

            container1.classList.add('container');
            container2.classList.add('container');

            document.body.appendChild(div1);
            document.body.appendChild(container1);
            document.body.appendChild(container2);

            container1.appendChild(div2);
            container2.appendChild(div3);

            initDom({
                root: document.querySelectorAll('.container')
            });

            var interval = setInterval(function() {
                if (div2.classList.contains('initialized')) {
                    clearInterval(interval);
                    expect(div1.classList.contains('initialized')).toBeFalsy();
                    expect(div3.classList.contains('initialized')).toBeTruthy();
                    done();
                }
            }, 100);
        }, 7000);

        it('init AMD module inside custom containers by selector', function(done) {
            var div1 = document.createElement('div'),
                div2 = document.createElement('div'),
                div3 = document.createElement('div'),
                container1 = document.createElement('div'),
                container2 = document.createElement('div');

            div1.setAttribute('require', 'path/to/anonymousModule');
            div2.setAttribute('require', 'path/to/anonymousModule');
            div3.setAttribute('require', 'path/to/anonymousModule');

            container1.classList.add('container');
            container2.classList.add('container');

            document.body.appendChild(div1);
            document.body.appendChild(container1);
            document.body.appendChild(container2);

            container1.appendChild(div2);
            container2.appendChild(div3);

            initDom({
                root: '.container'
            });

            var interval = setInterval(function() {
                if (div2.classList.contains('initialized')) {
                    clearInterval(interval);
                    expect(div1.classList.contains('initialized')).toBeFalsy();
                    expect(div3.classList.contains('initialized')).toBeTruthy();
                    done();
                }
            }, 100);
        }, 7000);
    });
});