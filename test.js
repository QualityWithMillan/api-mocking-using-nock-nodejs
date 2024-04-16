/*
 * @author QualityWithMillan
 * @date 2024-03-23
 *
 * @license mit
 */


import nock from 'nock';
import fetchData from './util/util.js';

// Swagger spec https://petstore.swagger.io/#/pet/getPetById
const _URL = 'https://petstore.swagger.io';
const _PATH = '/v2/pet/';
let _PET_ID = 2; // change to one available

// Make the API request without mocking the response
async function fetchPetDetailsWithoutMocking() {
  try {
    const data = await fetchData(_URL + _PATH + `${_PET_ID}`);
    console.log('\n** Original Response **\n\n', data);

    // // uncomment to mock : After fetching the original response  ----- 1
    // fetchPetDetails();
  } catch (error) {
    console.error('Error fetching pet details without mocking:', error);
  }
}

fetchPetDetailsWithoutMocking();

// Mock and Modify the API response
  // nock(_URL)
  //  .get(_PATH + _PET_ID)
  //  .reply(200, {
  //    id: 1,
  //    category: { id: 1, name: 'mocked name' },
  //    name: 'meetup pet name',
  //    photoUrls: ['mocked photoUrls 🐈🐶🐕🐩'],
  //    tags: [{ id: 1, name: 'mocked tag' }],
  //    status: 'un-available ❌',
  //  });


// Mock and Modify response code / status 404   ----- 3
  // nock(_URL)
  // .get(_PATH + _PET_ID)
  // .reply(404,{});


// Mock and Modify response code / status 503   ----- 4
  // nock(_URL)
  // .get(_PATH + _PET_ID)
  // .reply(503,{});

// Make the API request
async function fetchPetDetails() {
  try {
    const data = await fetchData(_URL + _PATH + `${_PET_ID}`);
    console.log('\nMocked Response:', data);
  } catch (error) {
    console.error('Error fetching pet details:', error);
  }
}
