import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import {FirebaseContext } from '../../store/Context'
import { useHistory } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader'
export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pswd, setPswd] = useState('')
  const [pswd1, setPswd1] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsLoading(true)
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('user').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          setIsLoading(false) 
          history.push("/login")
        })
      })
      
    }).catch((error) => {
      setIsLoading(false)
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
  }
  return (
    <div>
      {isLoading && <Loader/>}
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            placeholder="Type your username"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            placeholder="type your Email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            placeholder="Type your Phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={pswd}
            onChange={(e)=>setPswd(e.target.value)}
            name="password"
            placeholder="Set your Password"
          />
          <br/>
          <input
            className="input"
            type="password"
            id="lname"
            value={pswd1}
            onChange={(e)=>setPswd1(e.target.value)}
            name="password"
            placeholder="Confirm your Password"
          />
          <br />
          <br />
          <button onClick={()=>pswd===pswd1 ? setPassword(pswd1): alert('Password did not match')}>Signup</button>
        </form>
        <a onClick={()=>history.push('/login')}>Login</a>
      </div>
    </div>
  );
}
