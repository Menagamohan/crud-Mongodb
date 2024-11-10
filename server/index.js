// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/fooddb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Define a schema and model
const foodSchema = new mongoose.Schema({
  foodName: String,
  description: String,
});

const Food = mongoose.model('Food', foodSchema);

// Routes

// GET - Read all food items
app.get('/read', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Insert new food item
app.post('/insert', async (req, res) => {
  const { foodName, description } = req.body;
  const food = new Food({ foodName, description });
  
  try {
    const newFood = await food.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT - Update food item
app.put('/update', async (req, res) => {
  const { id, newFoodName } = req.body;
  
  try {
    const updatedFood = await Food.findByIdAndUpdate(id, { foodName: newFoodName }, { new: true });
    res.json(updatedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Delete food item
app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedFood = await Food.findByIdAndDelete(id);
    res.json(deletedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
