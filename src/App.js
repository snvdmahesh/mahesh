import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Post from './Post'
import SinglePost from './SinglePost'
import Login from './login'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path ='/posts/100' element={<Post/>}/>
      <Route exact path='/posts/id' element={<SinglePost/>}/>
      <Route exact path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


