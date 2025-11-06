const db = require('../models/index') // memanggil model index
const Order = db.orders  // memanggil db orders


exports.findOrder = (req, res) => {
    const id = Number(req.params.id)

    // Join collection oder dengan collection product
    Order.aggregate([{
        // mencocokan user_id dari collection order dengan url id yang didapat
        $match: {
            user_id: id
        }
    }, {
        // mencocokan field cart_items dari collection order dengan field code dari collection product
        $lookup: {
            from: "products",
            localField: "cart_items",
            foreignField: "code",
            as : "products" // memasukkan hasil lookup ke field products dari collection order
        }
    }])
    .then ((result) => {
        res.send(result)
    }).catch ((err) => {
        res.status(409).send({
            message: err.message || "Some error occurred while retrieving orders."
        })
    })
}

