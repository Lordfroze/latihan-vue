const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());

// import model
const Income = require('./models/income');

// connect to mongodb
mongoose.connect('mongodb://192.168.2.10:27017/incomelog').then((result) => {
    console.log('connected to mongodb')
}).catch((err) => {
    console.log(err);
});

app.set('views', path.join(__dirname, 'views'));  // menentukan folder views
app.set('view engine', 'ejs');  // menentukan engine yang digunakan

// route
// home
app.get('/', (req, res) => {
    res.send('Hello World');
})

// menampilkan seluruh data income
app.get('/incomes', async(req, res) => {
    const incomes = await Income.find({});
    res.send(incomes);
});

app.listen(3000, () => {
    console.log('shop app listen on http://localhost:3000/')
})