var fetch = require('node-fetch');
exports.search = function(req , res){
  var key = req.body.key;
  var url = 'https://api.github.com/users/'+key+'/followers';
  fetch(url , { method: 'GET'})
  .then(function(result) {
     return result.json ();
  }).then(function(json) {
    console.log(json);
      res.render('index', { data: json });
  });


}
