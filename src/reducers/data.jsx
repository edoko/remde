import {
  MDE_STATE,
  SAVE_CONTENT_SUCCESS,
  FETCH_CONTENT_SUCCESS
} from "../actions";

const initialState = {
  datas: "",
  content: ""
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case MDE_STATE:
      return {
        datas: action.data
      };
    case SAVE_CONTENT_SUCCESS:
      return {
        ...state,
        content: action.data
      };
    case FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        content: action.data.content
      };
    default:
      return state;
  }
}
