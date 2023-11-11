// get our data model
const Book = require('./models/Book.js');
app.get('/api/books', (req,resp) => {
    // use mongoose to retrieve all books from Mongo
    Book.find({}, function(err, data) {
	if (err) {
	    resp.json({ message: 'Unable to connect to books' });
	} else {
	    // return JSON retrieved by Mongo as response
	    resp.json(data);
	}
    });
});
app.get('/api/books/:isbn', (req,resp) => {
    // use mongoose to retrieve all books from Mongo
    Book.find({isbn10: req.params.isbn}, function(err, data) {
	if (err) {
	    resp.json({ message: 'Book not found' });
	} else {
	    resp.json(data);
	}
    });
});
