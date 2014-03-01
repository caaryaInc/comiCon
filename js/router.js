App.Router.map(function () {
	this.resource('marvel');
	this.resource('chars');
});

App.charsRoute = Ember.Route.Extend()({
	/* model: function(){
		return this.store.find('chars');
	} */
});



