const mongoose = require('mongoose');

const host = 'localhost';
const port = '2717';
const db = 'todo';


const url = 'mongodb://localhost:27017/todo';

mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

module.exports = mongoose;