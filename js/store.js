App.ApplicationAdapter = DS.FixtureAdapter.extend({
  // as per the documentation, the fixture adapter needs you to define how to filter records
  // here we're just checking all keys of the filters and checking if their values are the same of each model
  queryFixtures: function (records, filters, modelClass) {
    return records.filter(function (record) {
      for (key in filters) {
        if (!filters.hasOwnProperty(key)) {
          continue;
        }
        if (filters[key] !== record[key]) {
          return false;
        }
      }
      return true;
    });
  }
});

