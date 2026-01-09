const imgOffset = -100;
const textOffset = -120;
const drag = 8;

document.addEventListener('DOMContentLoaded', (e) => {

	const text = document.getElementByClassName('parallax-text')[0];
	const defender = document.getElementByClassName('defender')[0];
	const touchscreen = document.getElementByClassName('touchscreen')[0];

	window.addEventListener('scroll', (se) => {
		const newOffset = imgOffset + window.scrollY / drag;

		if (newOffset < 0) {
			defender.style.bottom = newOffset + 'px';
		}
	});
});