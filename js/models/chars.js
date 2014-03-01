App.chars = DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  belongsTo: DS.attr('string')

});

App.chars.FIXTURES = [{
id: 1,
name: "SpiderMan",
category: "Hero",
belongsTo: "marvel"
},
{
id:2,
name: "Batman",
category: "Hero",
belongsTo: "DC"
},
{
id: 3,
name: "Lizard",
category: "Villian",
belongsTo: "marvel"
},
{
id:4,
name: "Joker",
category: "Villian",
belongsTo: "DC"
}];