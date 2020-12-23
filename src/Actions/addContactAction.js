import axios from "axios";
import {
  ADD_CONTACT_FAILED,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS
} from "../Constants/addContactConstants";

export const addContactAction = (Name, Email, Phone, Favourite) => async (
  dispatch
) => {
  try {
    dispatch({
      type: ADD_CONTACT_REQUEST
    });

    const { data } = await axios.post("http://localhost:8080/contacts", {
      Name,
      Email,
      Phone,
      Favourite
    });
    dispatch({
      type: ADD_CONTACT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ADD_CONTACT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
