require('dotenv').config(); 
const redis = require('redis');

const client = redis.createClient({
    socket: {
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: process.env.REDIS_PORT || 6379,
    }
  });

const connectRedis = async () => {
    try {
        await client.connect();
        console.log("Connected to Redis");
    } catch (error) {
        console.error("Redis Error:", error);
        throw error;
    }
};

module.exports = { client, connectRedis };