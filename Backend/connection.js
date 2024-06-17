const mongoose = require('mongoose');
require("dotenv").config();
const url = process.env.atlasUrl;


const connection = ()=> {
    mongoose.connect(url).then(()=>{
        console.log("Connected to database")
    }).catch((error)=>{
        console.log("Database not connected", error);
    });
}

module.exports = connection;