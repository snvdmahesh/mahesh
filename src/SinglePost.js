// import React from 'react'
// import {  useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// // import { getSingleProductData } from './Redux/action'

// function SinglePost() {
//     const single=useSelector(state=>state.Posts.single)
    
//     const navigate=useNavigate()
//     const onClickBack=()=>{
//         navigate(`/posts/100`)
//     }

//   return (
//     <div>
//         <h1>{single.title}</h1>
//         <p>{single.body}</p>
//         <button onClick={onClickBack}>Back</button>
//     </div>
//   )
// }

// export default SinglePost

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postDetail } from "./Redux/action";

const Singlepost = () => {
  const { post} = useSelector((state) => ({ ...state.Post }));
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(postDetail(id));
  }, [dispatch, id]);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Singlepost;