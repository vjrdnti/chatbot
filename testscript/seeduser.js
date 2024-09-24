// seedUser.js

const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config(); // Load environment variables

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected for seeding'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedUser = async () => {
  try {
    // Define the test user
    const user = new User({
      phoneNumber: '1234567899', // The test number you will use for login
      token: 'dummyToken1234567890', // Pre-generated dummy token for testing
    });

    // Save the user to the database
    await user.save();
    console.log('Test user created successfully.');
  } catch (err) {
    console.error('Error creating test user:', err);
  } finally {
    mongoose.connection.close(); // Close the connection after seeding
  }
};

// Run the seeding function
seedUser();

