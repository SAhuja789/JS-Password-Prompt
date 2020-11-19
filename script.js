		var password;
		var pass1 = "password";
		password = prompt('Enter Password', ' ');

		if (password == pass1) {
			window.alert('Correct Password');
		}
		else {
			window.location = "errorfile.html";
		}
