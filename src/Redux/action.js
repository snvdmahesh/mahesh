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
// export default postDetail

//create New one
// export const createNewProductData=()=>{
//     return async(dispatch)=>{
//         try{
    
//         }
//     }
// }