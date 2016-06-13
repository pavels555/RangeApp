var app = angular.module('RangeApp', ['ngMaterial', 'moment-picker']);

app.controller('AppCtrl', ['$scope', function ($scope) {
    var ctrl = this
    ctrl.change = change;
    ctrl.format = 'L LT';
    ctrl.locale = 'he';

    ctrl.date = '2016-05-26T21:08:52Z';

    activate();

    function activate() {
        moment.locale(ctrl.locale);
        ctrl.pickerDate = moment(ctrl.date).format(ctrl.format);
    }

    function change(newValue, oldValue) {
        if (newValue == '') {
            ctrl.date = '';
        } else {
            var newValue = moment(newValue, ctrl.format);
            if (newValue.isValid()) {
                if (angular.isString(ctrl.date))
                    ctrl.date = moment(ctrl.pickerDate, ctrl.format).toISOString();
                else
                    ctrl.date = moment(ctrl.pickerDate, ctrl.format).toDate();
            } else {
                ctrl.pickerDate = oldValue;
            }
        }
    }
}]);

