import axios from "axios";
import history from "../history";

const API_URL = "http://localhost:3001/api";

export const MDE_STATE = "MDE_STATE";
export const SAVE_CONTENT = "SAVE_CONTENT";
export const SAVE_CONTENT_SUCCESS = "SAVE_CONTENT_SUCCESS";
export const FETCH_CONTENT = "FETCH_CONTENT";
export const FETCH_CONTENT_SUCCESS = "FETCH_CONTENT_SUCCESS";

export function mdeState(data) {
  return {
    type: MDE_STATE,
    data
  };
}

export function saveContent(content) {
  return function(dispatch) {
    axios
      .post(`${API_URL}/content`, { content })
      .then(res => {
        dispatch(saveContentSuccess(res.data));
        console.log(res.data);
        history.push("/content/" + res.data._id);
      })
      .catch(err => console.log(err));
  };
}

export function saveContentSuccess(data) {
  return {
    type: SAVE_CONTENT_SUCCESS,
    data
  };
}

export function fetchContent(contentId) {
  return function(dispatch) {
    axios
      .get(`${API_URL}/content/` + contentId)
      .then(res => {
        dispatch(fetchContentSuccess(res.data));
      })
      .catch(err => console.log(err));
  };
}

export function fetchContentSuccess(data) {
  return {
    type: FETCH_CONTENT_SUCCESS,
    data
  };
}
