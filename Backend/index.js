const express = require('express');
const cors = require('cors');
const connectDB = require('./connection');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();


//Set up routes
const reportRouter = require('./routes/reportRouter')
app.use('/api', reportRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
