var express = require('express');
var app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  const opts = { maxAge: 24 * 60 * 60 * 1000, httpOnly : true }
  res.cookie('myname', 'Mike', opts);	
  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  var myName = req.cookies.myname;
  res.render('pages/about-2', 
	{myName: myName});
});

app.listen(8080);
console.log('Server is listening on port 8080');
