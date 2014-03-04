App.Char = DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  author: DS.attr('string'),
  age: DS.attr('number'),
  type: DS.attr('string')
});

App.Char.FIXTURES = [
  {
    id: 1,
    name: "SpiderMan",
    category: "Hero",
    author: "Marvel",
    age: 21,
    type: 'spider'
  },
  {
    id: 2,
    name: "Batman",
    category: "Hero",
    author: "DC",
    age: 32,
    type: "bat"
  },
  {
    id: 3,
    name: "Lizard",
    category: "Villian",
    author: "Marvel",
    age: 26,
    type: 'lizard'
  },
  {
    id: 4,
    name: "Joker",
    category: "Villian",
    author: "DC",
    age: 18,
    type: 'joker'
  }
];
