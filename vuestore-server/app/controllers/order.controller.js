const db = require('../models/index') // memanggil model index
const Order = db.orders  // memanggil db orders

// fungsi untuk mencari order berdasarkan user_id
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

// fungsi untuk menambah item pada order
exports.addToCart = (req, res) => {
    const id = Number(req.params.id)
    const productCode = String(req.body.product)

    // mengupdate order dengan menambahkan productCode ke field cart_items berdasar user_id
    Order.updateOne({
        user_id : id
    }, {
        // menghindari duplikasi productCode di field cart_items
        $addToSet : {
            cart_items : productCode // menambahkan productCode ke field cart_items
        }
    })
    .then ((result) => {
        res.send(result)
    }).catch ((err) => {
        res.status(409).send({
            message: err.message || "Some error occurred while adding to cart."
        })
    })
}

// fungsi untuk menghapus item pada order
exports.removeFromCart = (req, res) => {
    const id = Number(req.params.id)
    const productCode = String(req.params.product) // mendapatkan params dari url

    // mengupdate order dengan menambahkan productCode ke field cart_items berdasar user_id
    Order.updateOne({
        user_id : id
    }, {
        // menghindari duplikasi productCode di field cart_items
        $pull : { // menghapus productCode dari field cart_items
            cart_items : productCode // 
        }
    })
    .then ((result) => {
        res.send(result)
    }).catch ((err) => {
        res.status(409).send({
            message: err.message || "Some error occurred while adding to cart."
        })
    })
}