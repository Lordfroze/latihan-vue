const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // middleware untuk parsing request body menjadi JSON
app.use(express.urlencoded({ extended: true })); // untuk menerima data form  

app.get('/' , (req, res) => {
    res.json({
        message: 'Welcome to vuestore-server'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})