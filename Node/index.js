var fetch = require('node-fetch');
fetch('https://api.github.com/users/pichaya/followers')
.then(function(result) {
    return result.text();
}).then(function(body) {
  var x = body
  console.log(body;

}).catch(function(err) {
      console.log(err);
  });
