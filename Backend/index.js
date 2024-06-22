const express = require('express');
<<<<<<< HEAD
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
=======
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
>>>>>>> 8428b238f8a6752f3381a837f7b17a21f262cf9e

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
<<<<<<< HEAD
=======

mongoose.connect('mongodb://localhost:27017/LostAndFound', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const reportSchema = new mongoose.Schema({
  location: String,
  itemName: String,
  category: String,
  date: Date,
  description: String,
  images: [String],
});

const Report = mongoose.model('Report', reportSchema);

// API endpoint to handle form submission
app.post('/api/reports', async (req, res) => {
  const { location, itemName, category, date, description, images } = req.body;
  
  const newReport = new Report({
    location,
    itemName,
    category,
    date,
    description,
    images,
  });

  try {
    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


>>>>>>> 8428b238f8a6752f3381a837f7b17a21f262cf9e
