document.addEventListener('DOMContentLoaded', function () {
	const screen = document.getElementById('canvas');
	const countButtons = document.querySelectorAll('.block-count button');
	const result = document.querySelector('.count');
	const btnPlus = document.querySelector('.btn-plus');
	const btnMinus = document.querySelector('.btn-minus');
	const btnStart = document.querySelector('.btn-start');
	const btnStop = document.querySelector('.btn-stop');

	const figures = {
		star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0l4.96 10.56 11.040 1.68-8 8.24 1.92 11.52-9.92-5.44-9.92 5.44 1.92-11.52-8-8.24 11.040-1.68z"></path></svg>`,
		circle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"></path></svg>`,
		square: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M0 0h32v32h-32v-32z"></path></svg>`,
		triangle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 32h-32l16-32z"></path></svg>`
	}

	const figureColor = '#FFD166';
	const figureSize = 30;
	let activeFigures = [];
	let checkCount = () => result.innerHTML = activeFigures.length;

	let randomFigure = (obj) => {
		const keys = Object.keys(obj);

		return obj[keys[Math.floor(Math.random() * keys.length)]];
	};

	function creatFigure(figure, color, size) {
		elem = document.createElement('div');

		elem.className = 'figure';
		elem.style.width = size + 'px';
		elem.innerHTML = figure;

		let figureImg = elem.querySelector('svg');
		figureImg.setAttribute('fill', color);
		screen.appendChild(elem);
		activeFigures.push(elem);
		screen.appendChild(elem);
	}

	function deleteFigure() {
		if (activeFigures.length) {
			activeFigures[activeFigures.length - 1].remove();
			activeFigures.pop();
		}
	}

	function disableButtons() {
		countButtons.forEach(function(item) {
			item.setAttribute('disabled', 'disabled');
		});
	}

	function enableButtons() {
		countButtons.forEach(function(item) {
			item.removeAttribute('disabled');
		});
	}

	btnPlus.addEventListener('click', () => {
		let figure = randomFigure(figures);
		let color = figureColor;
		let size = figureSize;

		creatFigure(figure, color, size);
		checkCount();
	});


	btnMinus.addEventListener('click', () => {
		deleteFigure();
		checkCount();
	});

	checkCount();
	disableButtons();

	btnStart.addEventListener('click', () => {
		enableButtons();
	});

	btnStop.addEventListener('click', () => {
		disableButtons();
		screen.innerHTML = '';
		activeFigures = [];
		checkCount();
	});
}, false);
