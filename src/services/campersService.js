import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

const getCampers = async (filters) => {
  const response = await axios.get(BASE_URL, { params: filters });
  return response;
};

const getCamperById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response;
};

export default {
  getCampers,
  getCamperById,
};
