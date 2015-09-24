 var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject){
  var ref = new Firebase("https://interestmatcher.firebaseio.com");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  
  syncObject.$bindTo($scope,"data");
});