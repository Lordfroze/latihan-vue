const db = require('../models'); // import db
const Product = db.products; // import product model dari db

exports.findAll = (req, res) => {
    Product.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(409).send({
                message: err.message
            });
        });
}