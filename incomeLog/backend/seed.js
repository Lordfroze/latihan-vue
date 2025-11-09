const mongoose = require('mongoose');
const Income = require('./models/income');
mongoose.connect('mongodb://192.168.2.10:27017/incomelog').then((result) => {
    console.log('connected to mongodb')
}).catch((err) => {
    console.log(err);
});

const seedIncome =
    [
        {
            name: 'penjualan',
            price: 500000,
            category: 'Income'
        },
        {
            name: 'Bonus',
            price: 1000000,
            category: 'Income'
        },
        {
            name: 'penjualan',
            price: 500000,
            category: 'Income'
        }
    ];
Income.insertMany(seedIncome).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
console.log('Seed data inserted');