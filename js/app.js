// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var feed2;
angular.module('morningapp', ['ionic'])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })

.controller('FeedController', function($scope, $http) {
  //var my_feed = new Array();

  window.onload = function(e){ 
      Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1dBRTBwNMzbCBriwe1evK4mxfo12r-q5ZRiUFBuP1RQE/pubhtml?gid=0&single=true',
                       callback: showInfo} ); 
  }
  

  function showInfo(data,tabletop) { 
    var my_feed_ = [];
    console.log(data['main']['elements']); 
    feed_ = data['main']['elements'];
    //console.log(feed[0]);
    for (var i = 0; i < feed_.length; i++) {
      var foo = { title: "foo"};
      console.log(foo);
      my_feed_.push(foo)
    }
    console.log(my_feed_);
    console.log("^^");
    
  }

  feed2 = [
     { title: 'Collect coins' },
     { title: 'Eat mushrooms' },
     { title: 'Get high enough to grab the flag' },
     { title: 'Find the Princess' }
   ];
   
  $scope.feed = feed2;
   
   //console.log(my_feed);
   //console.log("^^");
   //$scope.feed = feed2;
  /*
  $http.get('https://spreadsheets.google.com/feeds/list/1dBRTBwNMzbCBriwe1evK4mxfo12r-q5ZRiUFBuP1RQE/od6/public/basic?alt=json').
  success(function(data, status, headers, config) {
    //console.log(data);
    feed_data = data;
    //console.log(feed_data);
    item_data = feed_data["feed"]["entry"];
    //console.log(item_data)
    // conole.log(feed_data);
    for (var i = 0; i < item_data.length; i++) {
      try{
        item = item_data[i]["content"]["$t"].split(",")
        //console.log(item);
        //my_feed.push({ title: item[1].split(":")[1], link: item[2].split(":")[1] + item[2].split(":")[2] })
        // title = i["gsx$title"]["$t"]
        // description = i["gsx$description"]["$t"]
        // image = i["gsx$image"]["$t"]
        // time = i["gsx$time"]["$t"]
        // venue = i["gsx$venue"]["$t"]
        // tags = i["gsx$tags"]["$t"]
      } catch (err) {}
    }
    //console.log(my_feed);
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  */
  
  //console.log($scope.feed);
  // $scope.feed = [
  //   { title: 'Collect coins' },
  //   { title: 'Eat mushrooms' },
  //   { title: 'Get high enough to grab the flag' },
  //   { title: 'Find the Princess' }
  // ];

  // $http.get('https://spreadsheets.google.com/feeds/cells/1dBRTBwNMzbCBriwe1evK4mxfo12r-q5ZRiUFBuP1RQE/od6/public/basic?alt=json').success(successCallback);
});