import React,{useContext, useState} from 'react';
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import ChatIcon from '../../assets/ChatIcon'
import NotificationBellIcon from '../../assets/NotificationBellIcon';


function Header() {
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const [userOpen, setUserOpen] = useState(false)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="chaticonspallet">
        <ChatIcon></ChatIcon>
        <NotificationBellIcon></NotificationBellIcon>
        </div>
        <div className="userDetails" onClick={()=>setUserOpen(!userOpen)} >  
        <img src="Images/avatar.png" alt=""/>
        <Arrow ></Arrow>
        </div>
        
        
        {userOpen && <div className="UserPane">
        <img src="Images/avatar.png" alt=""/>
          <span>{user ? `Welcome ${user.displayName}` : <div onClick={()=>history.push('/login')}>Login</div>}</span>
          <hr />

        {user && <span onClick={()=>{
                firebase.auth().signOut();
                history.push('/login')
              }} >Logout</span>}
        </div>}


        <div onClick={()=>{
              history.push('/create')
            }} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
