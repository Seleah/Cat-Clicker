/* app.js */

// Only slightly modified from this version of a Cat Clicker:
// https://github.com/udacity/ud989-cat-clicker-premium-vanilla
// This project is intended for practice for a new skill, a chance to play with
// someone else's code to learn how it works.

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
		catListView.init();
	},
	getCurrentCat: function() {
		return model.currentCat;
	},
	// Increments the counter for the currently-selected cat
	incrementCounter: function() {
		model.currentCat.clickCount++;
		catViewer.render();
	}
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

let catListView = {
	init: function() {
		// Store the DOM element for easy access later
		this.catListElem = document.getElementById('cat-list');

		// Render this view (update the DOM elements with the right values)
		this.render();
	},
	render: function() {
		var cat, elem, i;
		// get the cats we'll be rendering from the octopus
		var cats = octopus.getCats();

		// empty the cat list
		this.catListElem.innerHTML = '';

		// loop over the cats
		for (i = 0; i < cats.length; i++) {
			// this is the cat we're currently looping over
			cat = cats[i];

			// make a new cat list item and set its text
			elem = document.createElement('li');
			elem.textContent = cat.name;

			// on click, setCurrentCat and render the catView
			// (this uses our closure-in-a-loop trick to connect the value
			//  of the cat variable to the click event function)
			elem.addEventListener('click', (function(catCopy) {
				return function() {
					octopus.setCurrentCat(catCopy);
					catViewer.render();
				};
			})(cat));

			// finally, add the element to the list
			this.catListElem.appendChild(elem);
		}
	}
};

octopus.init();