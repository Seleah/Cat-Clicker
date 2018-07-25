let clickCounter = document.querySelector('.click-count');
clickCounter.innerText = 0;

(function loadCat() {
	let i = Math.floor(Math.random() * 8);
	let pic = `images/${i}.jpg`;
	document.getElementById('catpicture').src = pic;
} ());