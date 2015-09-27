var app = angular.module('loginApp', ["firebase"]);

app.factory("usersRef", ["$firebaseArray", function($firebaseArray){
  
  var ref = new Firebase("https://interestmatcher.firebaseio.com/users//");
  var usersRef = $firebaseArray(ref);
  
  return $firebaseArray(ref);
}])

app.controller('loginCtrl', ["$scope","usersRef", function($scope, usersRef){
 
  $scope.authData = {};
  $scope.authFB = authFB;
  
}]);


function authFB($scope, usersRef){
  
  var ref = new Firebase("https://interestmatcher.firebaseio.com/");
  
  ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);   
    }
    
  },
  {
	scope: "email"
  }
);

    var authData = ref.getAuth();


}

//Checks if user exists and returns it.
function getUser(authdata, usersRef){
  
  var user = usersRef.$getRecord(authdata.uid);
  
  if (user == null){
    usersRef.$add(
      {
        id:authdata.uid,
      }
    );
    
    user = usersRef.$getRectord(authdata.uid);
  }
  return user;
}


