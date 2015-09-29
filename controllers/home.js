var app2 = angular.module("homeApp", []);

app2.controller("RedirectCtrl",["$scope", function($scope){
	$scope.redirect = function(filename){
			window.location.href = fileName;
}}
]);