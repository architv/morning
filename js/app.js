
angular.module('morningapp', ['ionic'])

.controller('FeedController', function($scope, $http) {

  window.onload = function(e){ 
      Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1dBRTBwNMzbCBriwe1evK4mxfo12r-q5ZRiUFBuP1RQE/pubhtml?gid=0&single=true',
                       callback: showInfo,
                     simpleSheet: true} ); 
  }
  

  function showInfo(data,tabletop) { 
    console.log(data);
    $scope.feed = data;
    window.data = data;
  }

  test_feed = [
     { title: 'Collect coins' },
     { title: 'Eat mushrooms' },
     { title: 'Get high enough to grab the flag' },
     { title: 'Find the Princess' }
   ];
   
  $scope.feed = window.data;
  //$scope.feed = test_feed;

  
});