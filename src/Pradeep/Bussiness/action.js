import axios from "axios";
import {
  LIFESTYLE_ERROR,
  LIFESTYLE_LOADING,
  LIFESTYLE_SUCCESS,
} from "./action.type";

export const lifestyleApi = () => (dispatch) => {
  dispatch({ type: LIFESTYLE_LOADING });
  axios
    .get(
      "http://localhost:8080/lifestyle?_page=1&_limit=20"
    )
    .then((r) =>
      (console.log(r.data),dispatch({ type: LIFESTYLE_SUCCESS, payload:r.data }))
    )
    .catch((err) => dispatch({ type: LIFESTYLE_ERROR }));
};
