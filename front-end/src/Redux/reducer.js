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

const initialState = {
  access: false,
  error: null,
  characters: [],
  characterDetail: {},
  myFav: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        access: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        access: false,
        error: payload,
      };
    case SEARCH_CHARACTERS:
      return {
        ...state,
        characters: [...state.characters, payload],
      };
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };
    case CLOSE_CARD:
      const filter = state.characters.filter(
        (character) => character.id !== payload
      );
      return {
        ...state,
        characters: filter,
      };
    case ADD_FAV:
      return {
        ...state,
        myFav: payload,
        allCharacters: payload,
      };

    case DELETE_FAV:
      return {
        ...state,
        myFav: payload,
      };

      // case FILTER:
      //   const characterFilter = state.allCharacters.filter(
      //     (character) => character.gender === payload
      //   );
      //   return {
      //     ...state,
      //     myFav: characterFilter,
      //   };
  
      // case ORDER:
      //   const orderCharacters = [...state.myFav].sort((a, b) => payload === "A" ? a.id - b.id : b.id - a.id );
      //   return {
      //     ...state,
      //     myFav: orderCharacters,
      //   };
      
    default:
      return state;
  }
};

export default reducer;
