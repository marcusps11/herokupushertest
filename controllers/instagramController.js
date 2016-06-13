var Instagram = require('instagram-node').instagram();




Instagram.use({client_id: '7056aa7f2ef24f1286c943359d0a3c98',
              client_secret: 'c571c6e1a6274323bbf9d90613f03f7c' });

var baseURL = 'https://api.instagram.com/oauth/authorize';
var redirect_uri = 'http://localhost:3000/instagram/callback';

function authorize_user(req, res) {
  res.redirect(Instagram.get_authorization_url(redirect_uri));
}

function handleauth(req, res) {
  console.log('hello');
  Instagram.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if(err) {
      console.log(err);
    } else {
      console.log(result.access_token);
     
    }
  });
} 


function getPhotos(req, res) {
  Instagram.use({ access_token: '3461258.7056aa7.665938574e55444aa89227dd9385d1db'});
  Instagram.user_media_recent('3461258',  function(err, result, remaining, limit) {
    if(err) {
      console.log(err)
    } else {
      console.log(result[0].images.low_resolution.url)
      // console.log(remaining)
      // console.log(limit)
    }
    res.send()
  });
}



module.exports = {
  authorize_user:  authorize_user,
  handleauth: handleauth,
  getPhotos: getPhotos
};