
var example = angular.module('morningapp', ['ionic', 'ngCordova'])

.controller('FeedController', function($scope, $http, $ionicLoading, $cordovaSocialSharing) {

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

example.controller("ShareController", function($scope, $cordovaSocialSharing) {
 
    $scope.shareAnywhere = function(title, image, link) {
        $cordovaSocialSharing.share("Shared via Morning", title, image, link);
    }
 
    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function(error) {
            alert("Cannot share on Twitter");
        });
    }
 
});