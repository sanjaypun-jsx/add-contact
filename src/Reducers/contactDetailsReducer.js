import {
  CONTACT_DETAILS_FAILED,
  CONTACT_DETAILS_REQUEST,
  CONTACT_DETAILS_SUCCESS
} from "../Constants/contactDetailsConstants";

export const contactDetailsReducer = (state = { contact: [] }, action) => {
  switch (action.type) {
    case CONTACT_DETAILS_REQUEST:
      return {
        contact: [],
        loading: true
      };
    case CONTACT_DETAILS_SUCCESS:
      return {
        contact: action.payload,
        loading: false
      };
    case CONTACT_DETAILS_FAILED:
      return {
        contact: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
