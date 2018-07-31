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
};


/* ---------- View ----------- */

let catViewer = {
	init: function() {

	}
};

let catList = {
	init: function() {

	}
};

octopus.init();