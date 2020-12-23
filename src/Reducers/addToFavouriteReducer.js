import {
  ADD_TO_FAV_FAILED,
  ADD_TO_FAV_REQUEST,
  ADD_TO_FAV_SUCCESS
} from "../Constants/addToFavouriteConstants";

export const addToFavouriteReducer = (
  state = { updatedContaact: [] },
  action
) => {
  switch (action.type) {
    case ADD_TO_FAV_REQUEST:
      return {
        updatedContact: [],
        loading: true
      };
    case ADD_TO_FAV_SUCCESS:
      return {
        updatedContact: action.payload,
        loading: false
      };
    case ADD_TO_FAV_FAILED:
      return {
        updatedContact: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
