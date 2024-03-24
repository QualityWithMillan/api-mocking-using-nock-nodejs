/*
 * @author QualityWithMillan
 * @date 2024-03-23
 *
 * @license mit
 */


const nock = require('nock');
const { fetchData } = require('./util/util');

// Swagger spec https://petstore.swagger.io/#/pet/getPetById
const _URL = 'https://petstore.swagger.io';
const _PATH = '/v2/pet/';
let _PET_ID = 2;

// Make the API request without mocking the response
async function fetchPetDetailsWithoutMocking() {
  try {
    const data = await fetchData(_URL + _PATH + `${_PET_ID}`);
    console.log('\nOriginal Response:', data);
    console.log('\n-------------');

    // Call fetchPetDetails() after fetching the original response
    fetchPetDetails();
  } catch (error) {
    console.error('Error fetching pet details without mocking:', error);
  }
}

fetchPetDetailsWithoutMocking();

// Mock and Modify the API response
nock(_URL)
  .get(_PATH + _PET_ID)
  .reply(200, {
    id: 1,
    category: { id: 1, name: 'mocked name' },
    name: 'meetup pet name',
    photoUrls: ['mocked photoUrls 🐈🐶🐕🐩'],
    tags: [{ id: 1, name: 'mocked tag' }],
    status: 'un-available ❌',
  });

// Make the API request
async function fetchPetDetails() {
  try {
    const data = await fetchData(_URL + _PATH + `${_PET_ID}`);
    console.log('\nMocked Response:', data);
  } catch (error) {
    console.error('Error fetching pet details:', error);
  }
}
