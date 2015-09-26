var isNewUser = true;

var ref = new Firebase("https://interestmatcher.firebaseio.com");

ref.onAuth(function(authData){
	if (authData && isNewUser){
		ref.child("users").child(authData.uid).set({
			provider: authData.provider,
			name: getName(authData),
		})
	}
});

function getName(authData){
	switch(authData.provider){
		case "password":
			return authData.password.email.replace(/@.*/,'');
		case "facebook":
			return authData.facebook.displayName;
	}
}