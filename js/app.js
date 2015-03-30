
var feed= new Array();

angular.module('morningapp', ['ionic'])

.controller('FeedController', function($scope, $http) {

  window.onload = function(e){ 
      Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1dBRTBwNMzbCBriwe1evK4mxfo12r-q5ZRiUFBuP1RQE/pubhtml?gid=0&single=true',
                       callback: showInfo} ); 
  }
  

  function showInfo(data,tabletop) { 
    feed_ = data['main']['elements'];
    console.log(feed_);
    //$scope.feed = feed_; 
  }

  feed2 = [
     { title: 'Collect coins' },
     { title: 'Eat mushrooms' },
     { title: 'Get high enough to grab the flag' },
     { title: 'Find the Princess' }
   ];
   
  $scope.feed = feed2;
   
  
});