const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const db = mongoose.connection;

db.once('open', () => {
    console.log('connected to mongo');
});
