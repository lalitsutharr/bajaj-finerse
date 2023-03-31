const mongoose = require("mongoose");

var mongoURL =''

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})

var connection =mongoose.connection

connection.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Sucessful')
})

module.exports= mongoose