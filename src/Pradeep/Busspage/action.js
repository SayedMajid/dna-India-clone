import axios from "axios";
import { LIFESTYLE_PAGE_ERROR, LIFESTYLE_PAGE_LOADING, LIFESTYLE_PAGE_SUCCESS } from "./action.type";


export const lifestylePageApi = (id) =>(dispatch) =>{
dispatch({type:LIFESTYLE_PAGE_LOADING});
axios.get(`http://localhost:8080/lifestyle?q=${id}`)
.then((r)=>(dispatch({type:LIFESTYLE_PAGE_SUCCESS,payload:r.data})))
.catch((e)=>dispatch({type:LIFESTYLE_PAGE_ERROR}))

}