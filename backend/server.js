const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/paymentSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Your routes will go here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); // Use '/api/users' as a prefix for user-related routes
