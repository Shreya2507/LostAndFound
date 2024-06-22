const express = require('express');
const cors = require('cors');
const connectDB = require('./connection'); // Adjust the path if needed
const { Lost, Found } = require('./models/Report'); // Adjust the path as needed

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.post('/api/reports/lost', async (req, res) => {
  try {
    const lostReport = new Lost(req.body);
    await lostReport.save();
    res.status(201).send(lostReport);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/api/reports/found', async (req, res) => {
  try {
    const foundReport = new Found(req.body);
    await foundReport.save();
    res.status(201).send(foundReport);
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
