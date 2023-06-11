const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./models/User');

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

// Middleware
app.use(express.json());

// Create new user route
app.post('/user', async (req, res) => {
  try {
    const { id, name, passageId } = req.body;
    const newUser = new User({ id, name, passageId });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Retrieve user information route
app.get('/user/:passageId', async (req, res) => {
  try {
    const { passageId } = req.params;
    const user = await User.findOne({ passageId });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error('Error retrieving user information:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
