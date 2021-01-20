// alert("Hi");

let circle = document.querySelector('.circle');

let  shootingStars = document.getElementsByClassName('shootingStar');

for (let shootingStar of shootingStars){
	let duration = randNumber(10, 30);
	let delay = randNumber(1, 20);
	shootingStar.style.top = randNumber(0, -200)+'px';
	shootingStar.style.left = '-50px';
	shootingStar.animate([
		{transform: 'translate(0, 0) scale(0.1, 0.1)  rotate(105deg)'},
		{transform: 'translate(400px, 80px) scale(0.1, 0.1)  rotate(105deg)', offset: 1/duration},
		{transform: 'translate(400px, 80px) scale(0.1, 0.1)  rotate(105deg)'}
	],{ 
		duration: duration * 1000,
		iterations: Infinity,
		delay: delay*1000,
	});
}

function changeAnimationTime(elem){
	elem.classList.toggle('animate');
}

for (let stars = 0; stars <= randNumber(200, 300); stars++) {
	let star = document.createElement('div');
	let duration = randNumber(500, 3000);

	star.className = 'star';
	let randDimentions = randNumber(10, 30);
	duration = randDimentions > 25? randNumber(100000, 300000): duration;
	randDimentions = (0.1 * randDimentions)+'vmin';

	star.style.width = randDimentions;
	star.style.height = randDimentions;
	star.style.top = randNumber(0, 70)+'%';
	star.style.left = randNumber(0, 5)+'%';
	star.animate([
		{opacity: 1},
		{opacity: 0, offset: 0.5},
		{opacity: 1}
	], {
		duration: duration,
		iterations: Infinity,
		easing: 'ease-in-out'
	})
	circle.appendChild(star);
}

function randNumber(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}




