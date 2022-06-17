import { WORLD_LOADING } from "../world/actiontype"
import axios from "axios"
import { WORLDPAGE_ERROR, WORLDPAGE_LOADING, WORLDPAGE_SUCCESS } from "./actiontype"


export const  worldPageApi =(id)=> (dispatch) => {
    dispatch({type:WORLDPAGE_LOADING})

    axios.get(`http://localhost:8080/articles?q=${id}`)
    .then((r)=>(console.log(r),dispatch({type:WORLDPAGE_SUCCESS,payload:r.data})))
    .catch((err)=>(console.log(err),dispatch({type:WORLDPAGE_ERROR})))
}