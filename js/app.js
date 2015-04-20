(function(){
var app = angular.module('store', []);

app.controller('StoreController', function(){
	this.products = gems;
});

app.controller('ReviewController', function(){
	this.review = {};

	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review = {};
	};
});

app.directive('productGallery', function(){
    return {
      	restrict: 'E',
	    templateUrl: 'product-gallery.html',
	    controller: function(){
	        this.current = 0;
	        this.setCurrent = function(imageNumber){
	            this.current = imageNumber || 0;
	        };
	    },
	    controllerAs: 'gallery'
	};
});

app.directive('productTabs', function(){
	return {
		restrict: 'E',
		templateUrl: 'product-tabs.html',
		controller: function(){
			this.tab = 1;
			this.selectTab = function(setTab){
				this.tab = setTab;
			};
			this.isSelected = function(checkTab){
				return this.tab === checkTab;
			};	
		},
		controllerAs: 'panel'
	};
});

app.directive('productDescriptions', function(){
	return {
		restrict: 'E',
		templateUrl: 'product-descriptions.html'
	};
});

app.directive('productSpecs', function(){
	return {
		restrict: 'E',
		templateUrl: 'product-specs.html'
	};
});

app.directive('productReviews', function(){
	return {
		restrict: 'E',
		templateUrl: 'product-reviews.html'
	};
});

var gems = [
	{
		name: 'Azurite',
      	description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      	price: 110.50, 
		images: [
	        "images/gem-02.gif",
	        "images/gem-05.gif",
	        "images/gem-09.gif"
      	],
		reviews: []
	},
	{
		name: 'Bloodstone',
      	description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      	price: 22.90,
		images: [
	        "images/gem-01.gif",
	        "images/gem-03.gif",
	        "images/gem-04.gif"
      	],
		reviews: []
	},
	{
		name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        price: 1100,
        rarity: 2,
        images: [
          "images/gem-06.gif",
          "images/gem-07.gif",
          "images/gem-08.gif"
        ],
        reviews: []
	}
];	

})();