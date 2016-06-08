// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase'])

.factory('Items', ['$firebaseArray', function($firebaseArray){
	var itemsRef = new Firebase('https://pruebaionicfirebase1.firebaseio.com/items');
	return $firebaseArray(itemsRef);
}])


.controller('ListCtrl', function($scope, $ionicListDelegate, Items){
    $scope.items = Items;
    $scope.addItem = function(){
      var name = prompt('What do you need to buy?');
      if (name) {
        $scope.items.$add({'name': name});
      }
    };

$scope.purchaseItem = function(item){
	$scope.item = item;
	$scope.item['status'] = 'purchased';
	$ionicListDelegate.closeOptionButtons();
	};
});