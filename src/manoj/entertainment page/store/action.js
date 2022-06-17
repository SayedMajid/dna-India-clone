import { GET_ENTERTAINMENT_DATA_ERROR, GET_ENTERTAINMENT_DATA_LOADING, GET_ENTERTAINMENT_DATA_SUCCESS, GET_ENTERTAINMENT_INDIVISUAL_DATA } from "./actiontype"
import axios from "axios"
export const getapidata=()=>(dispatch)=>{
dispatch({type:GET_ENTERTAINMENT_DATA_LOADING})
axios.get("https://ndtvnews-api.herokuapp.com/general?category=values(entertainment)").then((res)=>{
    dispatch({type:GET_ENTERTAINMENT_DATA_SUCCESS,payload:res.data.news[0].articles})
    console.log(res.data.news[0].articles)
}).catch(()=>{dispatch({type:GET_ENTERTAINMENT_DATA_ERROR})})
}


export const get_indivisual_data=(id)=>(dispatch)=>{
    dispatch({type:GET_ENTERTAINMENT_INDIVISUAL_DATA,payload:id})
}