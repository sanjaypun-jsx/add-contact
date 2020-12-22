import {
  ADD_CONTACT_FAILED,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS
} from "../Constants/addContactConstants";

export const addContactReducer = (state = { contact: [] }, action) => {
  switch (action.type) {
    case ADD_CONTACT_REQUEST:
      return {
        loading: true,
        contact: []
      };
    case ADD_CONTACT_SUCCESS:
      return {
        loading: false,
        contact: action.payload
      };
    case ADD_CONTACT_FAILED:
      return {
        loading: false,
        contact: action.payload
      };
    default:
      return state;
  }
};
