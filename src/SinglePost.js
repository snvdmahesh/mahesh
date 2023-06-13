import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { getSingleProductData } from './Redux/action'

function SinglePost() {
    const single = useSelector(state => state.Posts.single)
    console.log(single)

    const navigate = useNavigate()
    const onClickBack = () => {
        navigate(`/`)
    }

    return (
        <div>
            {single.map((value, i) => {
                return (
                    <div key={i}>
                        <h1>{value.title}</h1>
                        <p>{value.body}</p>
                        <button onClick={onClickBack}>Back</button>
                    </div>
                )
            })

            }
        </div>
    )
}

export default SinglePost


