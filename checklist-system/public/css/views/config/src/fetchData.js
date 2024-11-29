const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get(
      'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639'
    );
    return response.data; // Ensure the data matches the structure in rules.
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw new Error('Failed to fetch data');
  }
};

module.exports = fetchData;
