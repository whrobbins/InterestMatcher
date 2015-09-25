var ref = new Firebase("https://interestmatcher.firebaseio.com");

var app = angular.module('login', []);
app.controller('loginCtrl', function($scope){
  $scope.auth = 0;  
  
});

function authFB(){
  ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  },{
	scope: "email"
  }
);
}

//Checks if user exists
function authUser(authdata){
  
  
}


//Returns the name of the user.
function getName(authData){
  return authData.facebook.displayName;
}

