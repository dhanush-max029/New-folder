const keys = document.querySelectorAll('.white-key, .black-key');

keys.forEach((key) => {
	key.addEventListener('click', () => {
		const audio = new Audio('sound.mp3');
		audio.play();
	});
});
