
angular.module('morningapp', ['ionic'])

.controller('FeedController', function($scope, $http, $ionicLoading) {

  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  $http.get('http://orch.in/morningapp').then(function(resp) {
      console.log('Success', resp.data.data);
      $ionicLoading.hide();
      $scope.feed = resp.data.data;
    }, function(err) {
      console.error('ERR', err);
    })
  
});