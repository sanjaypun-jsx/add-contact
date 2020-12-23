import axios from "axios";
import {
  CONTACT_DETAILS_FAILED,
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS
} from "../Constants/contactDetailsConstants";

export const contactDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_DETAILS_REQUEST
    });
    const { data } = await axios.get(`http://localhost:8080/contacts/${id}`);
    dispatch({
      type: CONTACT_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CONTACT_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
