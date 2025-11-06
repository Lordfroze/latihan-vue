module.exports = mongoose => {
    // membuat schema
    const schema = mongoose.Schema({
        user_id : Number,
        cart_items : [String],
    })

    // mengubah cara panggil _id pada mongodb menjadi id 
    schema.method("toJSON" , function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    })

    // memasukkan shema diatas ke collection orders pada mongodb 
    const Order = mongoose.model("orders", schema)
    return Order
}
