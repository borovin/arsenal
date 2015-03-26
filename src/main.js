define(function () {

    var page = document.body.getAttribute('page');

    page && requirejs([page], function (Page) {
        new Page;
    });
});