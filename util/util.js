/*
 * @author QualityWithMillan
 * @date 2024-03-23
 *
 * @license MIT
 */

/**
 * All Helper functions 
 */
const https = require('https');

// Helper function to fetch data from URL
async function fetchData(url) {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', (error) => reject(error));
    });
  }

// CommonJS syntax
module.exports = { fetchData };  
