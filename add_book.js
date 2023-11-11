const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const db = mongoose.connection;

db.once('open', () => {
    console.log('connected to mongo');
});

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

console.log('schema defined');
const Book = mongoose.model('Book', bookSchema);
const book = new Book ({id : 14, isbn10 : '0014'} );
book.save();
console.log('Book made');

//const onebook = await Book.find ({isbn : '0014'} ).exec();
Book.find()
    .then(p => console.log(p))
    .catch(error => console.log(error));
const onebook = Book.exec();

console.log('Book find');
//await onebook.exec();
//console.log('Book exec');
//console.log(onebook);

