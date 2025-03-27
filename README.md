# Redis Implementation

# Install Redis in Node.js
    Make sure that you have installed redis package in your local
    using ubuntu or docker 

# Set Up Redis in Node.js
    Inside the config folder there is an redisClient.js file
    for the redis setup using (npm install redis)

# Implement Caching in Controller
    1.Inside the controller we had done the implimentation for the cache. 
    2.If there is data already inside the cache it take data from there.
    3.Otherwise it will fetch data from the Db to cache and clint side.
    4.TTL - Time to leave after certain time the data will be erased from the cache
    
# Monitor Redis
    After the data triggered through post-man or frontend
    we can monitor datas in redis using cmd in (Ubuntu)

    prasanna@LT-134:~$ redis-cli ping (To Start the Server) 
    PONG   ( response )
    prasanna@LT-134:~$ redis-cli 

    127.0.0.1:6379> KEYS *
        Shows that you have a key named productsCache_2023 stored in Redis.

    127.0.0.1:6379> TTL productsCache_2023
        The key has a Time-To-Live (TTL) of 120 seconds, meaning it will expire in 120 seconds.

    127.0.0.1:6379> TYPE productsCache_2023
        The key is of type string, meaning it holds a text value.
        
    127.0.0.1:6379> GET productsCache_2023
        Retrieve the stored value of productsCache_2023 key.
