  var app = angular.module('App', []);

  app.controller('TodoCtrl', function($scope, $http) {
      $http.get('js/todos.json')
          .then(function(res){
              $scope.todos = res.data;
          });
  });