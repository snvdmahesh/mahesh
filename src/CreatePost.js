import React,{useState} from 'react'

function CreatePost() {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [value,setValue]=useState(false)

    const submitHandler=(e)=>{
           e.preventDefault()
           setValue(true)


    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}/>
            <button type="submit">Add</button>
        </form>

        <div>
            
        </div>
    </div>
  )
}

export default CreatePost