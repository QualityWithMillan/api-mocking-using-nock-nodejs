/*
 * @author QualityWithMillan
 * @date 2024-03-23
 *
 * @license MIT
 */

/**
 * Helper functions
 */

import https from 'https';
import { expect } from 'chai';

// Helper function to fetch data from URL
export default async function fetchData(url) {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(JSON.parse(data)));
        console.log("Response STATUS: ",res.statusCode);
        /** assert using chai response code to be 200 **/
        expect(res.statusCode).to.equal(200)
      }).on('error', (error) => reject(error));
    });
  }

// CommonJS syntax
// module.exports = { fetchData };  
