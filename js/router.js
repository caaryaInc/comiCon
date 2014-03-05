App.Router.map(function () {
  this.resource('author', { path: 'author/:author_name' }, function () {
    this.resource('category', { path: 'category/:category_name' }, function () {
      this.resource('heroes', { path: 'heroes' }, function () {
        this.route('create');
        this.resource('hero', { path: ':char_id' }, function () {
          this.route('edit');
          this.route('delete');
        });
      });
    });
  });
});


// to tell Ember that the route will be handling an array of model and not one model only
App.HeroesController = Ember.ArrayController.extend();

App.HeroesRoute = Ember.Route.extend({
  model: function () {
    // we grab models from the parent routes
    var filters = {
      author: this.modelFor('author').get('name'),
      category: this.modelFor('category').get('name')
    };
    // and call the store and ask for the char record corresponding to the filters
    return this.get('store').findQuery('char', filters);
  }
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('authors', Ember.A([
      Ember.Object.create({name: 'Marvel'}),
      Ember.Object.create({name: 'DC'})
    ]));
  }
});
App.AuthorRoute = Ember.Route.extend({
  model: function (params) {
    // the params contain the dynamic segments values of the route as defined in the path with ":"
    return Ember.Object.create({ name: params.author_name });
  },
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('categories', Ember.A([
      Ember.Object.create({name: 'Hero'}),
      Ember.Object.create({name: 'Villian'})
    ]));
  },
  serialize: function (model) {
    return {author_name: model.name};
  }
});
App.CategoryRoute = Ember.Route.extend({
  model: function (params) {
    return Ember.Object.create({ name: params.category_name });
  },
  afterModel: function () {
    this.transitionTo('heroes');
  },
  serialize: function (model) {
    return {category_name: model.name};
  }
});

App.HeroRoute = Ember.Route.extend({
  // you could comment this as it is the default of ember-data when the path of the route is :`modelName`_id
  model: function (params) {
    return this.get('store').find('char', params.char_id);
  }
});

App.HeroController = Ember.ObjectController.extend({
  actions: {
    edit: function(){
      this.transitionToRoute('hero.edit');
    },
    del: function(){
      var model = this.get('model');
      model.deleteRecord();
      model.save();
      this.transitionToRoute('heroes');
    }
  }
});

App.HeroEditRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('hero');
  }
});

App.HeroEditController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var hero = this.get('model');
      hero.save();
      this.transitionToRoute('hero', hero);
    }
  }
});

App.HeroesCreateRoute = Ember.Route.extend({
  model: function(){
    return Em.Object.create({});
  },
  renderTemplate: function(){
    this.render('hero.edit', {
      controller: 'heroesCreate'
    });
  }
});

App.HeroesCreateController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var model = this.get('model');
      var newentry = this.get('store').createRecord('char',model);
      newentry.save();
      this.transitionToRoute('heroes');
    }
  }
});