import {GET_DATA,GET_UNIQUE,CREATE} from './actionType'


const ReducerData=(state={card:[],single:[]},action)=>{
     switch(action.type){
        case GET_DATA:
            return{
                ...state,
                card:action.payload

            }
            case GET_UNIQUE:
                return {
                    ...state,
                    single:[action.payload]
                    
                }
            default :return state
     }
}
export default ReducerData




