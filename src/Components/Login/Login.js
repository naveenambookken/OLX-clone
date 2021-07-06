import {React,useState,useContext} from 'react';
import {} from '../../firebase/config'
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import Loader from '../../Components/Loader/Loader'
import { useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin=(e)=>{
    e.preventDefault()
    setIsLoading(true)
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      setIsLoading(false)
      history.push("/")
    }).catch((error)=>{
      setIsLoading(false)
      alert(error.message)
    })

  }
  return (
    <div>
      {isLoading && <Loader/>}
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{history.push('/signup')}}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
