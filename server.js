require('dotenv').config();
const app = require('./app');
const connectToDatabase = require('./config/db');
const { connectRedis } = require('./config/redisClient');

const startServer = async () => {
  try {
    await connectToDatabase();
    await connectRedis(); 
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server started successfully on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

module.exports = startServer;
