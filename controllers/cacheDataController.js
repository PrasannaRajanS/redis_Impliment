const cacheData = require('../models/cacheDataModel'); 
const { client } = require('../config/redisClient'); 

class CacheController {

    createCache = async (req, res, next) => {
        try {
            const newProduct = new cacheData(req.body);
            await newProduct.save();
            res.status(201).json(newProduct);
        } catch (error) {
            next(error);
        }
    };

    getAllCache = async (req, res, next) => {
        try {
            const { fiscalYear } = req.query;
            if (!fiscalYear) {
                return res.status(400).json({ message: "fiscalYear query parameter is required" });
            }
    
            const cacheKey = `productsCache_${fiscalYear}`;
            const cachedData = await client.get(cacheKey);
            if (cachedData) {
                console.log("Cache Hit: Returning cached data.");
                return res.json(JSON.parse(cachedData));
            }
    
            console.log("Cache Miss: Fetching from MongoDB.");
            const products = await cacheData.find({ fiscalYear: parseInt(fiscalYear) });
    
            await client.set(cacheKey, JSON.stringify(products), {
                EX: 120, // Expire in 120 seconds (2 minutes)
            });
    
            res.json(products);
        } catch (error) {
            next(error);
        }
    };
    
    getCacheProductById = async (req, res, next) => {
        const { id } = req.params;
        try {
            const cacheKey = `product_${id}`;

            const cachedProduct = await client.get(cacheKey);
            if (cachedProduct) {
                console.log("Cache Hit: Returning cached product.");
                return res.json(JSON.parse(cachedProduct));
            }

            console.log("Cache Miss: Fetching product from MongoDB.");
            const product = await cacheData.findById(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            await client.set(cacheKey, JSON.stringify(product), {
                EX: 120, // Expire in 120 seconds (2 minutes)
            });

            res.json(product);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new CacheController();
