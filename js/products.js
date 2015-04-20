(function(){
	var app = angular.module('store-products', []);

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

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();