import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import fetchingData, { postDetail }  from './Redux/action'
import {Link, useNavigate} from 'react-router-dom'
import CreatePost from './CreatePost'


function Post() {
  const postsData=useSelector((state)=>state.Posts.card)
  const navigate=useNavigate()
  console.log(postsData)

  
  const getSingleProduct=(id)=>{
    dispatch(postDetail(id))
    navigate(`/posts/${id}`)
  }
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchingData())
  },[dispatch])

  return (
    <div>
        <Link to='/login' style={{textAlign:'center'}}>LoginPage</Link>
        <CreatePost/>
    {postsData.map((data,index)=>{
      return(
        <div key={index} className='card'>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <button onClick={()=>getSingleProduct(data.id)}>ViewDetails</button>
        </div>
      )
    })}
    </div>
  )
}

export default Post