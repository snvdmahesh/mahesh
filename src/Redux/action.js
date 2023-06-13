import { GET_DATA, GET_UNIQUE, CREATE } from './actionType'
import axios from 'axios'


const fetchingData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            if (response.status === 200) {
                const cardsData = response.data
                console.log(cardsData)
                dispatch({ type: GET_DATA, payload: cardsData })
            }
        }
        catch (error) {
            console.log(error)
        }

    }
}
export default fetchingData

//single product

 export const postDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (response.status === 200) {
                dispatch({ type: GET_UNIQUE, payload: response.data })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

//create a post

export const create=(newDetails)=>async (dispatch)=>{
    try{
        
        const response=await axios.post("https://jsonplaceholder.typicode.com/posts",newDetails)
        if(response.status===200){
            dispatch({type:CREATE,payload:response.data})
            console.log(response.data)

        }

    }catch(error){
        console.log(error)

    }
}