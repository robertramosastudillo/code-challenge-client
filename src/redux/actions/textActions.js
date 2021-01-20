import {
  INSERT_TEXT,
  INSERT_TEXT_SUCCESSFULLY,
  INSERT_TEXT_ERROR,
} from "../types";

import axiosClient from "../../config/axios";

// INSERT TEXT
export function insertTextAction(textToInvert) {
  return async (dispatch) => {
    dispatch(insertText());
    try {
      let invertedText = await axiosClient.get(`/texts?text=${textToInvert}`);
      dispatch(insertTextSuccessfully(invertedText.data));
    } catch (error) {
      console.log(error);
      dispatch(insertTextError(true));
    }
  };
}

const insertText = () => ({
  type: INSERT_TEXT,
  payload: true,
});

const insertTextSuccessfully = (invertedText) => ({
  type: INSERT_TEXT_SUCCESSFULLY,
  payload: invertedText,
});

const insertTextError = (status) => ({
  type: INSERT_TEXT_ERROR,
  payload: status,
});
// INSERT TEXT