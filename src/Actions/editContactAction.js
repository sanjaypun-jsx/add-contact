import axios from "axios";
import {
  EDIT_CONTACT_FAILED,
  EDIT_CONTACT_REQUEST,
  EDIT_CONTACT_SUCCESS
} from "../Constants/editContactConstants";

export const editContactAction = (id, Name, Email, Phone) => async (
  dispatch
) => {
  try {
    dispatch({
      type: EDIT_CONTACT_REQUEST
    });
    const { data } = await axios.put(`http://localhost:8080/contacts/${id}`, {
      Name,
      Email,
      Phone
    });
    dispatch({
      type: EDIT_CONTACT_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: EDIT_CONTACT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
