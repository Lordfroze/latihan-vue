const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path') // import parth dari nodejs

app.use(express.json()); // middleware untuk parsing request body menjadi JSON
app.use(express.urlencoded({ extended: true })); // untuk menerima data form  
app.use('/img', express.static(path.join(__dirname, './public/img'))) // registerkan directory image

// Memanggil model dan seluruh konfigurasinya dari app/models/index.js
const db = require('./app/models'); // import db
db.mongoose
    .connect(db.url, {
    })
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch(err => {
        console.log("Connection failed", err);
        process.exit();
    });


app.get('/' , (req, res) => {
    res.json({
        message: 'Welcome to vuestore-server'
    })
})

// Memanggil route dari app/routes/product.route.js
require('./app/routes/product.route')(app);
// Memanggil route dari app/routes/order.route.js
require('./app/routes/order.route')(app);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})