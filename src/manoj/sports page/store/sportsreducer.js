import { GET_SPORTS_DATA_ERROR, GET_SPORTS_DATA_LOADING, GET_SPORTS_DATA_SUCCESS, GET_SPORTS_INDIVISUAL_DATA } from "./actiontype"

const initial={
    sports:{
        sports_api_loading:false,
        sports_api_success:false,
        sports_api_error:false,
data:[]
    },
    sportsitems:{}
}

export const sportsreducer=(state=initial,{type,payload})=>{
switch(type){
    case GET_SPORTS_DATA_LOADING :{
        state.sports.sports_api_loading=true
        return {...state}
    }

    case GET_SPORTS_DATA_SUCCESS :{
        state.sports.sports_api_success=true
        state.sports.sports_api_loading=false
        console.log(payload)
        state.sports.data=payload
        localStorage.setItem("maindata",JSON.stringify(state.sports.data))
        return {...state}
    }

    case GET_SPORTS_DATA_ERROR :{
        state.sports.sports_api_error=true
        return {...state}
    }
    case GET_SPORTS_INDIVISUAL_DATA :{
        let maindata=JSON.parse(localStorage.getItem("maindata"))||[]

        let showdata=maindata.filter((el,index)=>{
            return index===Number(payload)
        })
        state.sportsitems=showdata[0]
        return {...state}
    }
default :{
    return state
}
}
}