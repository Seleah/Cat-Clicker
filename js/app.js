/* app.js */

/* ---------- Model ---------- */

let model = {
	currentCat: null,
	cats: [
		{
			name: 'Oscar',
			image: 'images/0.jpg',
			clickCount: 0
		},
		{
			name: 'Tiger',
			image: 'images/1.jpg',
			clickCount: 0
		},
		{
			name: 'Cleo',
			image: 'images/2.jpg',
			clickCount: 0
		},
		{
			name: 'Jack',
			image: 'images/3.jpg',
			clickCount: 0
		},
		{
			name: 'Smokey',
			image: 'images/4.jpg',
			clickCount: 0
		},
		{
			name: 'Milo',
			image: 'images/5.jpg',
			clickCount: 0
		},
		{
			name: 'Chloe',
			image: 'images/6.jpg',
			clickCount: 0
		},
		{
			name: 'Misty',
			image: 'images/7.jpg',
			clickCount: 0
		}
	]
};


/* --------- Octopus --------- */

let octopus = {
	init: function() {
		// Start off with the first cat in the list
		model.currentCat = model.cats[0];

		// Initialize views
		catViewer.init();
		catList.init();
	},
	getCurrentCat: function() {
		return model.currentCat;
	},
};


/* ---------- View ----------- */

let catViewer = {
	init: function() {
		// DOM element pointers
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		// on click, increment the current cat's counter
		this.catImageElem.addEventListener('click', function(){
			octopus.incrementCounter();
		});

		// render this view (update the DOM elements with the right values)
		this.render();
	},
	render: function() {
		// update the DOM elements with values from the current cat
		var currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.image;
	}
};

let catList = {
	init: function() {

	}
};

octopus.init();