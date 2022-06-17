
import { WORLDPAGE_ERROR, WORLDPAGE_LOADING, WORLDPAGE_SUCCESS } from "./actiontype";

const initialState = {
  loading: false,
  error: false,
  data: {},
};

export const worldpageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case WORLDPAGE_LOADING: {
      return {
        ...state,
        loading: true,
        error:false
      };
    }
    case WORLDPAGE_SUCCESS: {
      return { ...state, loading: false,error:false, data: payload[0] };
    }
    case WORLDPAGE_ERROR: {
      return { ...state, error: true ,loading:false};
    }
    default: {
      return state;
    }
  }
};
