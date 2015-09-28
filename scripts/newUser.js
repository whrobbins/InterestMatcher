var isNewUser = true;

var ref = new Firebase("https://interestmatcher.firebaseio.com");

// Listens for when user is authenticated.
ref.onAuth(function(authData){
	
	var answer = ref.child("users").$getRecord(authData.uid);
	alert(answer);
	
	// User does not exist.
	if (answer != -1){
		isNewUser = false;
		alert("Is not new user.");
	}
	
	// Creates new user if it does not exist.
	if (isNewUser && authData){
		ref.child("users").child(authData.uid).set({
			provider: authData.provider,
			name: getName(authData),
		})
		alert("User created.");
	}
	
	// Change page to home screen.
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