import {
  DELETE_CONTACT_FAILED,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS
} from "../Constants/deleteContactConstants";

export const deleteContactReducer = (state = { delete: [] }, action) => {
  switch (action.type) {
    case DELETE_CONTACT_REQUEST:
      return {
        delete: [],
        loading: true
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        delete: action.payload,
        loading: false
      };
    case DELETE_CONTACT_FAILED:
      return {
        delete: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
