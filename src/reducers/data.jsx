import { MDE_STATE } from "../actions";

const initialState = {
  datas: ""
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case MDE_STATE:
      return {
        datas: action.data
      };
    default:
      return state;
  }
}
