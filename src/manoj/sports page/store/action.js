import { GET_SPORTS_DATA_ERROR, GET_SPORTS_DATA_LOADING, GET_SPORTS_DATA_SUCCESS, GET_SPORTS_INDIVISUAL_DATA } from "./actiontype"
import axios from "axios"
export const getapidata=()=>(dispatch)=>{
dispatch({type:GET_SPORTS_DATA_LOADING})
axios.get("https://ndtvnews-api.herokuapp.com/sports?category=values(cricket)").then((res)=>{
    dispatch({type:GET_SPORTS_DATA_SUCCESS,payload:res.data.news[0].articles})
    console.log(res.data.news[0].articles)
}).catch(()=>{dispatch({type:GET_SPORTS_DATA_ERROR})})
}


export const get_indivisual_data=(id)=>(dispatch)=>{
    dispatch({type:GET_SPORTS_INDIVISUAL_DATA,payload:id})
}