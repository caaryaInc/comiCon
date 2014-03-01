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