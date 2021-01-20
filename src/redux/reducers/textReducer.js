import {
  INSERT_TEXT,
  INSERT_TEXT_SUCCESSFULLY,
  INSERT_TEXT_ERROR,
} from "../types";

const initialState = {
  texts: [],
  error: false,
  loading: false,
};

export const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TEXT:
      return {
        ...state,
        loading: action.payload,
      };

    case INSERT_TEXT_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        error: false,
        texts: [...state.texts, action.payload],
      };

    case INSERT_TEXT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
