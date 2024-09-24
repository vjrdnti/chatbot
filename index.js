// index.js

const axios = require('axios');

// Set the base URL of your server
const BASE_URL = 'http://localhost:5000';

// Function to test login API
const testLogin = async () => {
  try {
    // Log what you are sending
    console.log('Sending Login Request...');
    const response = await axios.post(`${BASE_URL}/api/users/login`, {
      phoneNumber: '1234567899', // Replace with a test phone number
    });
    console.log('Login Response:', response.data);
    return response.data; // Return response data to use later
  } catch (err) {
    // Log detailed error information
    console.error('Login Error:', err.response ? err.response.data : err.message);
    return null; // Return null on error
  }
};

// Function to test get user API
const testGetUser = async (user) => {
  try {
    // Log what you are sending
    console.log('Sending Get User Request...');
    const response = await axios.get(`${BASE_URL}/api/users/me`, {
      headers: { Authorization: user.token }, // Add JWT token to the headers
      body: JSON.stringify(user),
    });
    console.log('Get User Response:', response.data);
  } catch (err) {
    // Log detailed error information
    console.error('Get User Error:', err.response ? err.response.data : err.message);
  }
};

// Run the tests sequentially
const runTests = async () => {
  // Test login
  console.log('Testing Login...');
  const loginResult = await testLogin();

  // If login is successful, use the token to test get user API
  if (loginResult && loginResult.token) {
    console.log('Testing Get User...');
    await testGetUser(loginResult);
  } else {
    console.error('Login failed, skipping Get User test.');
  }
};

// Start the tests
runTests();

