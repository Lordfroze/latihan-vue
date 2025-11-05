const dbConfig = require('../../config/db.config'); // import db config
const mongoose = require('mongoose'); // import mongoose

mongoose.Promise = global.Promise; // set mongoose untuk menggunakan Promise global

const db = {} // buat object db
db.mongoose = mongoose; // set mongoose ke object db
db.url = dbConfig.url; // set url db ke object db
db.products = require("./product.model.js")(mongoose); // import product model serta mongoose dan masukkan ke object db

module.exports = db; // export object db agar bisa digunakan di file lain