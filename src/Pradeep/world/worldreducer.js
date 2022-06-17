import { WORLD_ERROR, WORLD_LOADING, WORLD_SUCCESS } from "./actiontype";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const worldReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case WORLD_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case WORLD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }

    case WORLD_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
