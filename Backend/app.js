const express = require('express')
const cors = require('cors');
const app = express()
const connection = require('./connection')
app.use(cors());

connection();

app.use(express.json())

// routes
const lostRouter = require('./routes/lostRouter')
// const lostItemRouter = require('./routes/lostItemRoute')
// const foundItemRouter = require('./routes/foundItemRouter')

app.use('/api', lostRouter)
// app.use('/api', foundItemRouter)



app.listen(1234, (error)=> {
    if(error){
        console.log(error);
    }

    else{
        console.log("server started and running at 1234");
    }
})
