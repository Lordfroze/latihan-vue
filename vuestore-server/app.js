const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // middleware untuk parsing request body menjadi JSON
app.use(express.urlencoded({ extended: true })); // untuk menerima data form  

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})