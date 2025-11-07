module.exports = (app) => {
    const orders = require('../controllers/order.controller');
    const router = require('express').Router();

    router.get('/user/:id', orders.findOrder); // mendapatkan order berdasarkan user_id dan memanggil fungsi findOrder
    router.post('/user/:id/add', orders.addToCart); // menambahkan productCode ke field cart_items berdasar user_id dan memanggil fungsi addToCart
    router.delete('/user/:id/product/:product', orders.removeFromCart) // menghapus item dari cart

    app.use('/api/orders', router);
}