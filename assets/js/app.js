(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreCtrl', ['$http', function($http){
		var store = this;

		store.products = [];

		$http.get('/bootsshop/products.json').success(function(data){
			store.products = data;
		});
	}]);


	app.controller("PanelCtrl", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checktab){
			return this.tab === checktab;
		};
	});

	app.controller("ReviewCtrl", function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	})

})();