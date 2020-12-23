import {
  EDIT_CONTACT_FAILED,
  EDIT_CONTACT_REQUEST,
  EDIT_CONTACT_SUCCESS
} from "../Constants/editContactConstants";

export const editContactReducer = (state = { edited: [] }, action) => {
  switch (action.type) {
    case EDIT_CONTACT_REQUEST:
      return {
        edited: [],
        loading: true
      };
    case EDIT_CONTACT_SUCCESS:
      return {
        edited: action.payload,
        loading: false
      };
    case EDIT_CONTACT_FAILED:
      return {
        edited: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
