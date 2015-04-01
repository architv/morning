
angular.module('morningapp', ['ionic', 'ngCordova'])

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

  $scope.shareAnywhere = function() {
    $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "http://blog.nraboy.com");
  }
 
  $scope.shareViaTwitter = function(message, image, link) {
    $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
        $cordovaSocialSharing.shareViaTwitter(message, image, link);
    }, function(error) {
        alert("Cannot share on Twitter");
    });
  }
  
});