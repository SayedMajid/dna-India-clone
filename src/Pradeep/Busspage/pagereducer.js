import { LIFESTYLE_PAGE_ERROR, LIFESTYLE_PAGE_LOADING, LIFESTYLE_PAGE_SUCCESS } from "./action.type"

const initialState={
    loading: false,
    error:false,
    data:{}
}

export const pageReducer = (state=initialState, {type,payload}) =>{
    switch(type){

        case LIFESTYLE_PAGE_LOADING:{
            return {
                ...state,
                loading:true,
                error:false,
            }
        }

        case LIFESTYLE_PAGE_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                data:payload[0]
            }
        }

        case LIFESTYLE_PAGE_ERROR:{
            return {
                ...state,
                error:true,
                loading:false,

            }
        }

        default:{
            return state
        }
    }

}