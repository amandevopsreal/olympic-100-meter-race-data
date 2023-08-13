const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/olympics').then(console.log("Connection Successfull"))
    .catch((e) => {
        console.log("No connection")
    })



