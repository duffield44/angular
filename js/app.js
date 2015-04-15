(function(){
var app = angular.module('store', []);

app.controller('StoreController', function(){
	this.products = gems;
});

var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
		image: "images/gem-01.gif",
		reviews: []
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'Origin of the Pentagonal Gem is unknown, hence its low value. It has a very high shine and 12 sides however.',
		image: "images/gem-02.gif",
		reviews: []
	}
];	

app.controller('PanelController', function(){
	this.tab = 1;
	this.selectTab = function(setTab){
		this.tab = setTab;
	};
	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};	
});

app.controller('ReviewController', function(){
	this.review = {};

	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review = {};
	};
});

})();