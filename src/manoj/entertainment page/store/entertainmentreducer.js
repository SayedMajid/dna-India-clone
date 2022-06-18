import { GET_ENTERTAINMENT_DATA_ERROR, GET_ENTERTAINMENT_DATA_LOADING, GET_ENTERTAINMENT_DATA_SUCCESS, GET_ENTERTAINMENT_INDIVISUAL_DATA } from "./actiontype"

const initial={
    entertainment:{
        entertainment_loading:false,
        entertainment_success:false,
        entertainment_error:false,
data:[]
    },
    entertainmentitems:{}
}

export const entertainmentreducer=(state=initial,{type,payload})=>{
switch(type){
    case GET_ENTERTAINMENT_DATA_LOADING :{
        state.entertainment.entertainment_api_loading=true
        return {...state}
    }

    case GET_ENTERTAINMENT_DATA_SUCCESS :{
        state.entertainment.entertainment_api_success=true
        state.entertainment.entertainment_api_loading=false
        console.log(payload)
        state.entertainment.data=payload
        localStorage.setItem("entertainment",JSON.stringify(state.entertainment.data))
        return {...state}
    }

    case GET_ENTERTAINMENT_DATA_ERROR :{
        state.entertainment.entertainment_api_error=true
        return {...state}
    }
    case GET_ENTERTAINMENT_INDIVISUAL_DATA :{
let entertainment=JSON.parse(localStorage.getItem("entertainment"))||[]

        let showdata=entertainment.filter((el,index)=>{
            return index===Number(payload)
        })
        state.entertainmentitems=showdata[0]
        return {...state}
    }
default :{
    return state
}
}
}