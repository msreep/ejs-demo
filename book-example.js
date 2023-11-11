//my additons from other example - need to use browser to run 
const express = require("express");
const app = express();


//listing 14.23
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const db = mongoose.connection;

db.once('open', () => {
    console.log('connected to mongo');
});

//Listing 14.24

//const mongoose = require('mongoose');
// define a schema that maps to the structure of the data in MongoDB
const bookSchema = new mongoose.Schema({
id: Number,
isbn10: String,
isbn13: String,
title: String,
year: Number,
publisher: String,
production: {
status: String,
binding: String,
size: String,
pages: Number,
instock: String
},
category: {
main: String,
secondary: String
}
});
//my note - could not find export file or why it was necessary
// now create model using this schema that maps to books collection in database
//module.exports = mongoose.model('Book', bookSchema,'books');
// get our data model
//const Book = require('./models/Book.js');
//my addition to just use model

const Book = mongoose.model('Book', bookSchema);

//need a book to find
const book = new Book ({id : 10, isbn10 : '0010'} );
book.save();

app.get('/api/books', (req,resp) => {
	//muy note - code throws an error
	//Book.find({}, function(err, data) {
	//if (err) {
	    //resp.json({ message: 'Unable to connect to books' });
	//} else {
	    // return JSON retrieved by Mongo as response
	    //resp.json(data);
	//}

        //my note replacement code
	Book.find()
		.then(p => resp.json(p))
    		.catch(error => console.log(error)); //should change to return error
    //});
});

//I have not fixed this one
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
//more
app.listen(8080, () => {
    console.log("Example express file server listening on port 8080");
});

