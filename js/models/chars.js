App.Char = DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  author: DS.attr('string')
});

App.Char.FIXTURES = [
  {
    id: 1,
    name: "SpiderMan",
    category: "Hero",
    author: "Marvel"
  },
  {
    id: 2,
    name: "Batman",
    category: "Hero",
    author: "DC"
  },
  {
    id: 3,
    name: "Lizard",
    category: "Villian",
    author: "Marvel"
  },
  {
    id: 4,
    name: "Joker",
    category: "Villian",
    author: "DC"
  }
];
