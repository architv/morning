angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('MainCtrl', function($scope, $http, $ionicLoading) {
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
})

.controller('FavoriteCtrl', function($scope, $http, $ionicLoading) {
    $scope.feed = JSON.parse( window.localStorage["post"] || '{}');
    console.log($scope.feed);
})

.controller('ArchiveCtrl', function($scope, $http, $ionicLoading) {
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
})

.controller("ShareController", function($scope) {
 
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

    $scope.setFavourite = function(post_id, title, url, image, description) {

      if(!((typeof localStorage["post"]) === 'undefined')) {
        var post = JSON.parse(window.localStorage['post']);
      } else {
        var post = new Array();
      }

      var isFavourite = false;
      for (var i = 0; i < post.length; i++) {
        if (post[i].url == url) {
          isFavourite = true;
        }
      }

      console.log(post);
      if (!isFavourite) {
        post.push({
          'id': post_id,
          'title': title,
          'url': url,
          'image': image,
          'description': description
        });
      }
      console.log(post);
      window.localStorage['post'] = JSON.stringify(post);
      //alert(post);

    }
});