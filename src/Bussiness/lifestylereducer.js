import { LIFESTYLE_ERROR, LIFESTYLE_LOADING, LIFESTYLE_SUCCESS } from "./action.type";

const initialState = {
  loading: false,
  error: false,
  data: [],
  totalResult: 0,
};

export const lifestyleReducer = (state = initialState, { type, payload }) => {
  // console.log(payload);
  // console.log(payload);
  switch (type) {
    case LIFESTYLE_LOADING:{
        return {
            ...state,
            loading:true,
        }
    }
    case LIFESTYLE_SUCCESS:{
        
        return {
            ...state,
            loading:false,
            data:payload,
            // totalResult:payload.totalResults
        }
    }
    case LIFESTYLE_ERROR:{
        return {
            ...state,
            error:true,
        }
    }
    default: {
      return state;
    }
  }
};
