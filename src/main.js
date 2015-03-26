define(function () {

    requirejs([document.body.getAttribute('page')], function (Page) {
        new Page;
    });
});