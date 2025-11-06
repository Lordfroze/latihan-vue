module.exports = (app) => {
    const orders = require('../controllers/order.controller');
    const router = require('express').Router();

    router.get('/user/:id', orders.findOrder); // mendapatkan order berdasarkan user_id dan memanggil fungsi findOrder

    app.use('/api/orders', router);
}