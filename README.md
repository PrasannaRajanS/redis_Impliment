# Redis Implementation

# Install Redis in Node.js
    Make sure that you have installed redis package in your local
    using ubuntu or docker

# Set Up Redis in Node.js
    Inside the config folder there is an redisClient.js file
    for the redis setup

# Implement Caching in Controller
    1.Inside the controller we had done the implimentation for the cache. 
    2.If there is data already inside the cache it take data from there.
    3.Otherwise it will fetch data from the Db to cache and clint side.
    4.TTL - Time to leave after certain time the data will be erased from the cache
    