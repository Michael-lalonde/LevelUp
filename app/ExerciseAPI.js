const request = require('request');
var muscle = 'biceps';
request.get({
  url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
  headers: {
    'X-Api-Key': 'Ag3dgnzp8hnZ04UC+DEWpA==8sp2aku0pZKaZNGr'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});
