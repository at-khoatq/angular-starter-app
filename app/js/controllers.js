'use strict';

// App controllers
var wfeApp = angular.module('wfeApp', []);

wfeApp.controller('PeopleListCtrl', ['$scope', function ($scope) {
  $scope.people = [
    {
      'empCode': 'AT0220',
      'fullName': 'Đinh Quang Huy',
    },
    {
      'empCode': 'AT0090',
      'fullName': 'Đặng Công Đạo',
    },
  ];
}]);