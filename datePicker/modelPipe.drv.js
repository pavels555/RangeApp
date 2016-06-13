(function () {
    'use strict';

    app.directive('modelOverride', modelOverride);

    modelOverride.$inject = [];
    function modelOverride() {

        var directive = {
            require: 'ngModel',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            moment.locale('he');

            // Date or ISOString into formatted string
            function formatter(value) {
                if (value) {
                    return moment(value).format('L LT');
                }
            }
            ngModel.$formatters.push(formatter);

            // formatted date into Date or ISOString
            function parser(value) {
                if (value) {
                    var newValue = moment(value, 'L LT');
                    if (newValue.isValid()) {
                        if (angular.isString(ngModel.$modelValue))
                            return newValue.toISOString();
                        else
                            return newValue.toDate();
                    } else {
                        return undefined;
                    }
                }
            }
            ngModel.$parsers.push(parser);
        }
    }
})();