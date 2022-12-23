if (localStorage.getItem('logged') !== 'true') {
	location.href = 'index.html';
}

const logouts = document.querySelectorAll('.logout');
logouts.forEach((logout) => logout.addEventListener('click', () => {
	localStorage.setItem('logged', 'false');
	location.href = "index.html";
}));

const data = await fetch("https://639a535a3a5fbccb5264b073.mockapi.io/jugadores");
const jugadores = await data.json();
const jugadoresContainer = document.querySelector('.carta');


jugadores.forEach((jugador) => {
	jugadoresContainer.innerHTML += `
		<div class="jugador col-12 col-sm-6 col-md-4 ">
			<div class=" card my-4 " >
					<div class="overflow">
						<img
						class="img-jugador"
						src="https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg"
						alt="${jugador.name}">
						<span class="jugador-dorsal">${jugador.dorsal}</span>
					</div>
					<div class="card-body">
						<h2 class="card-title m-1">${jugador.name}</h2>
						<p class="card-text m-1">Edad: ${jugador.edad}</p>
						<p class="card-text m-1">Posicion: ${jugador.posicion}</p>
						<p class="card-text m-1">Peso: ${jugador["stats-fisico"].peso}</p>
						<p class="card-text m-1">Altura: ${jugador["stats-fisico"].altura}</p>
						<p class="card-text m-1">Equipo Actual: ${jugador['equipo-actual']}</p>
						<p class="card-text m-1">Fecha de nacimiento: ${jugador['fecha-nacimiento']}</p>
					</div >
			</div >
		</div>
	`;
});
