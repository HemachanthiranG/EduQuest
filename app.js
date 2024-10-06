// Import necessary modules
const express = require('express');
const cors = require('cors'); // Import CORS module

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 3000; // Set the port

// Middleware to parse JSON data
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Example route to get users
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  res.json(users); // Send the user data as a JSON response
});

// Example route to add a user
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Get the new user data from the request body
  // Here you would typically add the user to a database
  res.status(201).json({ message: 'User created', user: newUser }); // Respond with a success message
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ error: 'Something went wrong!' }); // Respond with a 500 error
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
