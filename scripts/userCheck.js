/*
	This script will wait for the user to be authenticated with faceboook, then it will check if the user already exists.
	If the user exists, it will redirect to the home page. If the user does not exist, it will create it and set the name
	and other data before redirecting to the home page.

	Created by: Lucas Message (09/28/2015)

	EDITS (Name, date and change):


*/

var isExistingUser = false;
var ref = new Firebase("https://interestmatcher.firebaseio.com/users/");

// Listens for when user has been authenticated.
ref.onAuth(function(authData){
	
	// Check if user is in database.
	ref.once("value",function(snapshot){
		isExistingUser = snapshot.hasChild(authData.uid);
	});	
	
	alert("Is Existing User:" + isExistingUser);
	
	// Creates new user if it does not exist.
	if (!isExistingUser && authData){
		ref.child(authData.uid).set({
			provider: authData.provider,
			name: getName(authData),
		})
		alert("User created.");
	}
	
	// Redirect to home screen.
	if (authData)
		window.location.href = "pages/home.html";
});

// Returns a good name for the user based on their login choice.
function getName(authData){
	switch(authData.provider){
		case "password":
			return authData.password.email.replace(/@.*/,'');
		case "facebook":
			return authData.facebook.displayName;
	}
}