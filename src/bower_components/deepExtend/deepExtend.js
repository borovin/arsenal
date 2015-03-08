define(function(require) {
    //requirements
    var _ = require('bower_components/lodash/lodash');

    return function deepExtend(obj) {

        _.each([].slice.call(arguments, 1), function(source) {
            _.forOwn(source, function(value, key) {
                if (_.isPlainObject(value)) {
                    obj[key] = deepExtend({}, obj[key], value);
                } else if (_.isArray(value)) {
                    obj[key] = _.cloneDeep(value);
                } else {
                    obj[key] = value;
                }
            });
        });

        return obj;
    };
});
