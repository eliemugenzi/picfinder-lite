import axios from 'axios';
import { IMAGES_FETCHED } from './types';

export const fetchImages= (searchText, amount) => async dispatch => {
  const REQUEST_URL = `${process.env.REACT_APP_API_URL}/?key=${process.env.API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`;
  try {
    const { data: response } = await axios.get(REQUEST_URL);
    dispatch({
      type: IMAGES_FETCHED,
      payload:response.hits
    })
  } catch (error) {
    console.log(error);
  }
  
}
export const resetImages = () => {
  
}