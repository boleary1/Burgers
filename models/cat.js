// Import the ORM to create functions that will interact with the database.
const dbManager = require("../config/catsDbManager");

var cat = {
  all: function() {
    return dbManager.all("cats");
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals) {
    return dbManager.create("cats", cols, vals);
  },
  update: function(objColVals, condition) {
    return dbManager.update("cats", objColVals, condition);
  },
  delete: function(condition) {
    return dbManager.delete("cats", condition);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
