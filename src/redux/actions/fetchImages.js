import axios from 'axios';

export default (searchText, amount) => async dispatch => {
  const REQUEST_URL = `${process.env.REACT_APP_API_URL}/?key=${process.env.API_KEY}&q=image_type=photo&per_page=${amount}&safesearch=true`;
  const {data}=await axios.get()
}