require('dotenv').config(); 
const mongoose = require('mongoose');

// Database connection function
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log("Successfully Connected to Database");
  } catch (error) {
    console.error("Error Connecting to Database:", error);
    throw error; 
  }
};

module.exports = connectToDatabase;
