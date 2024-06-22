const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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


