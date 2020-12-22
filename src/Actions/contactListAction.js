import axios from "axios";
import {
  FETCH_CONTACT_FAILED,
  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS
} from "../Constants/contactListConstants";

export const contactListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_CONTACT_REQUEST
    });
    const { data } = await axios.get("http://localhost:8080/contacts");
    dispatch({
      type: FETCH_CONTACT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: FETCH_CONTACT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
