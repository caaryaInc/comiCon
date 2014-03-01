App.Router.map(function () {
  this.resource('marvel', function() {
	this.resource('marvelheroes',{ path:'/heroes' }, function() {
		this.resource('marvelhero', { path:'/:char_id' }, function(){
		this.route('edit');
		this.route('delete');
    });
	this.route('create');
	});
	this.resource('marvelvillians', { path:'/villans' }, function() {
		this.resource('marvelvillian', { path:'/:char_id' }, function(){
			this.route('edit');
			this.route('delete');
		});
		this.route('create');
	});
	});
 this.resource('dc', function() {
	this.resource('dcheroes', { path:'/heroes' }, function() {
		this.resource('dchero', { path:'/:char_id' }, function(){
		this.route('edit');
		this.route('delete');
    });
	this.route('create');
	});
	this.resource('dcvillians',{ path:'/villans' }, function() {
		this.resource('dcvillian', { path:'/:char_id' }, function(){
			this.route('edit');
			this.route('delete');
		});
		this.route('create');
	});
	});
});


App.MarvelheroesRoute = Ember.Route.Extend()({
	model: function(){
		return App.chars.Fixtures;
	} 
});  



