module.exports = mongoose => {
    const schema = mongoose.Schema({
        code: String,
        name: String,
        price: Number,
        description: String,
        imageUrl: String,
        averageRating: Number,
    })

    // mengubah cara panggil _id pada mongodb menjadi id 
    schema.method("toJSON" , function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    })

    // memasukkan schema diatas ke collection Product
    const Product = mongoose.model("Product", schema); 
    return Product;
}