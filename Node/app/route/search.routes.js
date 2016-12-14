module.exports = function(app , fetch){
  var search = require('../controller/search.controller');
  app.post('/search' , search.search);
}
