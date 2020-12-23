import axios from "axios";
import {
  DELETE_CONTACT_FAILED,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS
} from "../Constants/deleteContactConstants";

export const deleteContactAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CONTACT_REQUEST
    });
    const { data } = await axios.delete(`http://localhost:8080/contacts/${id}`);
    dispatch({
      type: DELETE_CONTACT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: DELETE_CONTACT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
