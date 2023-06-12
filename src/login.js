import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
// import axios from 'axios' 

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email,setEmail]=useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [uerror,setUerror]=useState('')
  const [perror,setPerror]=useState('')
  const [eerror,setEerror]=useState('')





  
 
  
  const userHandler = (e) => { 
    setUserName(e.target.value)
     setUerror('')
    }
const passwordHandler = (e) => { 
    setPassword(e.target.value) 
    setPerror('') 
}
const emailHandler = (e) => { 
    setEmail(e.target.value) 
    setEerror('') 
}
  const loginHandler = async (e) => {
    e.preventDefault()
    if(userName!==''&&password!==''){
      setLoggedIn(true)
      setUserName('')
      setEmail('')
      setPassword('')
    }
      
    }
    const usererrorHandler = () => {
        if (userName.trim() === '') {
            setUerror("enter Valid Username")
        }
    }
    const emailrerrorHandler = () => {
        if (email.trim() === '') {
            setEerror("enter Valid Email")
        }
    }

    const passerrorHandler = () => {
        if (password.trim() === '') {
            setPerror("enter Valid password")
        }
    }
  return (
    <div>
      {loggedIn ?
        (<div>
          <h1>Welcome,{userName}</h1>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
    </div>):
  (<div style={{border:'1px solidgrey'}}>
     <Form onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>userName</Form.Label>
                    <Form.Control type="text" onBlur={usererrorHandler} value={userName} onChange={userHandler} placeholder="Enter userName"/>
                    {uerror && <div>{uerror}</div>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" onBlur={emailrerrorHandler} value={userName} onChange={emailHandler} placeholder="Enter email"/>
                    {eerror && <div>{eerror}</div>}
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={passerrorHandler} type="password" value={password} onChange={passwordHandler} placeholder="Password" />
                    {perror && <div>{perror}</div>}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
    </div>)}
  </div>
  );
}

export default Login; 