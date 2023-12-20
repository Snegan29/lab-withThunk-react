

import {fetchData} from "./actionType";
import axios from "axios";

export const dataFetching = () => (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response.data),
      dispatch(fetchDataFunc(response.data));
    })
    .catch(error => {
      console.error('Error in webbing data:', error);
    });
  }

export const fetchDataFunc = (payload) => {
    return {
        type:fetchData,
        payload
    }
}            

