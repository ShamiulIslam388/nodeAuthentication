const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/authData'

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('db connect')
})