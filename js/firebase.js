
var Firebase = require("firebase");

var ref = new Firebase("https://blazing-torch-3926.firebaseio.com/");

ref.authWithOAuthPopUp("facebook", function(error, authData)
	{
		
		
	}

)