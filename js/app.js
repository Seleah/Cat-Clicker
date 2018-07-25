let clickCounter = document.querySelector('.click-count'),
	count = 0;

function loadCat() {
	let i = Math.floor(Math.random() * 8);
	let pic = `images/${i}.jpg`;
	document.getElementById('catpicture').src = pic;
}

loadCat();

function changeItUp() {
	document.removeEventListener('click', changeItUp);
	setTimeout(function() {
		loadCat();
		count += 1;
		clickCounter.innerText = `Clicks ${count}`;
		document.addEventListener('click', changeItUp);
	}, 3000);
}

document.addEventListener('click', changeItUp);