import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SEARCH_CHARACTERS,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
  CLOSE_CARD,
  ADD_FAV,
  DELETE_FAV,
  // FILTER,
  // ORDER,
} from "./action-types";

const URL_API = "https://rickandmortyapi.com/api/character";
const LOGIN_ENDPOINT = "http://localhost:3001/rickandmorty/login";
const FAV_ENDPOINT = "http://localhost:3001/rickandmorty/fav";

const handleError = (error) => {
  console.log(error.message);
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${LOGIN_ENDPOINT}`, {
        email,
        password,
      });

      response.status === 200
        ? dispatch({ type: LOGIN_SUCCESS, payload: response.data.access })
        : dispatch({ type: LOGIN_FAILURE, payload: response.data.message });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };
};

export const searchCharacters = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${URL_API}/${id}`);
    const data = response.data;
    console.log(data);
    if (data.name) {
      await dispatch({
        type: SEARCH_CHARACTERS,
        payload: data,
      });
    }
  } catch (error) {
    window.alert(`There are no characters with the id ${id}`);
  }
};

export const getCharacterDetail = (id) => async (dispatch) => {
  try {
    const response = await axios(`${URL_API}/${id}`);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  } catch (error) {
    handleError(error);
  }
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const closeCard = (id) => {
  return { type: CLOSE_CARD, payload: id };
};

export const addFav = (character) => async (dispatch) => {
  try {
    const { data } = await axios.post(FAV_ENDPOINT, character);
    dispatch({
      type: ADD_FAV,
      payload: data,
    });
    console.log(data)
  } catch (error) {
    handleError(error);
  }
};

export const deleteFav = (id) => async (dispatch) => {
  try {
    await axios.delete(`${FAV_ENDPOINT}/${id}`);
    dispatch({
      type: DELETE_FAV,
      payload: id,
    });
  } catch (error) {
    handleError(error);
  }
};

// export const filterCards = (gender) => {
//   return { type: FILTER, payload: gender };
// };

// export const orderCards = (orden) => {
//   return { type: ORDER, payload: orden };
// };
