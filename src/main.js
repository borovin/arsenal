define(function () {

    requirejs([document.body.dataset.page], function (Page) {
        new Page;
    });
});