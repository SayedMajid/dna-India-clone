import { WORLD_ERROR, WORLD_LOADING, WORLD_SUCCESS } from "./actiontype"
import axios from "axios"

export const worldApi = () => (dispatch) =>{
    dispatch({type:WORLD_LOADING})

    axios.get("http://localhost:8080/articles?_page=1&_limit=20")
    .then((r)=>(console.log(r.data),dispatch({type:WORLD_SUCCESS,payload:r.data})))
    .catch((err)=>(console.log(err),dispatch({type:WORLD_ERROR})))

}