import axios from 'axios';

export default function fetchImages(searchText) {
  const options = {
    params: {
      key: '49423998-53f799fc922e58b577969e777',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axios.get('https://pixabay.com/api/', options);
}
