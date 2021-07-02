import React,{useState} from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

function Home(props) {
  const [userOpen, setUserOpen] = useState(false)
  const toggling = () => setUserOpen(!userOpen);
  return (
    <div onClick={toggling} className="homeParentDiv">
      <Header userOpen={userOpen} setUserOpen={setUserOpen} toggling={toggling} />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
