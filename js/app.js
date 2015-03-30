
angular.module('morningapp', ['ionic'])

.controller('FeedController', function($scope, $http) {

  $http.get('http://orch.in/morningapp').then(function(resp) {
      console.log('Success', resp.data.data);
      $scope.feed = resp.data.data;
    }, function(err) {
      console.error('ERR', err);
    })
  
});