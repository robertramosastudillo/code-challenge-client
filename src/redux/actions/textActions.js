import {
  INSERT_TEXT,
  INSERT_TEXT_SUCCESSFULLY,
  INSERT_TEXT_ERROR,
} from "../types";

import axiosClient from "../../config/axios";

export function insertTextAction(textToInvert) {
  return async (dispatch) => {
    dispatch(insertText());
    try {
        
      console.log(textToInvert);
      // const params = new URLSearchParams({
      //   text: textToInvert,
      // }).toString();

      // await axiosClient.post(`/texts?${params})}`);
      dispatch(insertTextSuccessfully(textToInvert));
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

const insertTextSuccessfully = (textToInvert) => ({
  type: INSERT_TEXT_SUCCESSFULLY,
  payload: textToInvert,
});

const insertTextError = (status) => ({
  type: INSERT_TEXT_ERROR,
  payload: status,
});
