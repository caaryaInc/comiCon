/* App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});*/
/*
 App.store = DS.Store.create({
   adapter: 'App.CustomAdapter'
 });*/

App.ApplicationAdapter = DS.FixtureAdapter;

App.chars = DS.Model.extend({
  name: DS.attr('string'),
  belongsTo: DS.attr('string')
});

App.chars.FIXTURES = [{
id: 1,
name: "SpiderMan",
belongsTo: "marvel"
},
{
id:2,
name: "Batman",
belongsTo: "DC"
}];
