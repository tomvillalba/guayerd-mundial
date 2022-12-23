if (localStorage.getItem('logged') === 'true') {
	location.href = 'map.html';
}
const form = document.querySelector('.form-login');

const user = {
	email: 'estudiante@guayerd.com',
	password: '123456'
};

const showPassword = form.querySelector('.show-password');

showPassword.addEventListener('click', () => {
	const password = form.elements.password;

	if (password.type === 'password') {
		password.type = 'text';
		showPassword.src = "../public/img/show-password.jpg";
	} else {
		password.type = 'password';
		showPassword.src = "../public/img/show-hide-password.png";;
	}

});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let email = form.elements.email.value;
	let password = form.elements.password.value;

	if (email === user.email && password === user.password) {
		localStorage.setItem('logged', 'true');
		location.href = 'map.html';
	} else {
		alert('Usuario o contraseña incorrectos');
		return;
	}

});
