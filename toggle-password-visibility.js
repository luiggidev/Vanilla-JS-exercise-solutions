// Campo de senha e toggle check
var password = Array.prototype.slice.call(document.querySelectorAll('[type="password"]'));

var toggle = document.querySelector('#show-passwords');

// Escuta clicks no toggle
toggle.addEventListener('click', function (event) {
	// Se toggle estiver marcado mudar pra texto se não pra senha
	password.forEach(function (password) {

		if (toggle.checked) {
			password.type = 'text';

		} else {
				password.type = 'password';
		}
	});

}, false);
