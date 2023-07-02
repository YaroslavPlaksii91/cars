import axios from 'axios';

export const getCars = async () => {
  try {
    const response = await axios.get('https://myfakeapi.com/api/cars');

    return response.data.cars;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
