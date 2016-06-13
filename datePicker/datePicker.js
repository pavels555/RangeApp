(function () {
    'use strict';

    app.directive('datePicker', datePicker);

    datePicker.$inject = [];
    function datePicker() {

        var directive = {
            bindToController: true,
            require: 'ngModel',
            controller: DatePickerController,
            controllerAs: 'ctrl',
            restrict: 'E',
            link: link,
            scope: {
                date: '=ngModel',
                minDate: '=?',
                maxDate: '=?'
            },
            templateUrl: 'datePicker/datePicker.html'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            
            // moment.locale('he');

            // // Date or ISOString into formatted string
            // function formatter(value) {
            //     if (value) {
            //         return moment(value).format('L LT');
            //     }
            // }
            // ngModel.$formatters.push(formatter);

            // // formatted date into Date or ISOString
            // function parser(value) {
            //     if (value) {
            //         var newValue = moment(value, 'L LT');
            //         if (newValue.isValid()) {
            //             if (angular.isString(ngModel.$modelValue))
            //                 return newValue.toISOString();
            //             else
            //                 return newValue.toDate();
            //         } else {
            //             return undefined;
            //         }
            //     }
            // }
            // ngModel.$parsers.push(parser);
        }
    }

    /* @ngInject */
    function DatePickerController() {
        var ctrl = this
        // ctrl.change = change;
        // ctrl.format = 'L LT';
        // ctrl.locale = 'he';

        activate();

        function activate() {
            moment.locale(ctrl.locale);
            // ctrl.pickerDate = moment(ctrl.date).format(ctrl.format);
        }

        // function change(newValue, oldValue) {
        //     if (newValue == '') {
        //         ctrl.pickerDate = '';
        //         ctrl.date = undefined;
        //     } else {
        //         var newValue = moment(newValue, ctrl.format);
        //         if (newValue.isValid()) {
        //             if (angular.isString(ctrl.date))
        //                 ctrl.date = moment(ctrl.pickerDate, ctrl.format).toISOString();
        //             else
        //                 ctrl.date = moment(ctrl.pickerDate, ctrl.format).toDate();
        //         } else {
        //             ctrl.pickerDate = oldValue;
        //         }
        //     }
        // }
    }
})();