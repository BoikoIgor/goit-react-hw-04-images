import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (searchSubmit, page = 1) => {
  const API_KEY = '3946216-2b497e878c369ff4a3d42cd49';
  const response = await axios.get(
    `/?q=${searchSubmit}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.status === 404) {
    throw new Error('Error loading images from Pixabay', response.status);
  }
  return response.data;
};
