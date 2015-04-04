var example = angular.module('morningapp', ['ionic', 'ngCordova'])
// var favourite = ular.module('morningapp', ['ionic', 'ionic.utils'])


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
      alert(post);

    }
});

example.controller('MenuController', function($scope, $ionicSideMenuDelegate) {

  $scope.toggleMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
});

// favourite.controller('FavouriteController', function($scope, $localstorage)) {

// }
