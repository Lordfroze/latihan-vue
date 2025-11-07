module.exports = (app) => {
    const products = require('../controllers/product.controller');
    const router = require('express').Router();

    
    router.get('/', products.findAll); // route untuk mengambil semua data product
    router.get('/:id', products.findOne); // route untuk mengambil 1 data product berdasarkan id

    app.use('/api/products', router);
}