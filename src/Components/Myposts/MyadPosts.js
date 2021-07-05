import React, { useContext, useEffect, useState } from "react";
import "./MyadPosts.css";
import { useHistory } from "react-router-dom";
import EmptyState from "../EmptyState/EmptyState";
import { FirebaseContext, AuthContext } from "../../store/Context";
import Loader from "../../Components/Loader/Loader";

function MyadPosts() {
  const [mypost, setMypost] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged((user) => {
      
      if (user) {
        const myUserId = user.uid;
        firebase
          .firestore()
          .collection("products")
          .where("userId", "==", myUserId)
          .get()
          .then((snapshot) => {
           
            const myads = snapshot.docs.map((ad) => {
              return {
                ...ad.data(),
                id: ad.id,
              };
            });
            setMypost(myads);
            setIsloading(false);
          });
      }
    });
  }, [mypost]);

  
   const handleDelete = (id)=>{
    firebase
    .firestore()
    .collection("products")
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");

    });
   } 
  

  

  
  return (
    <div>
      {isloading && <Loader />}

      {mypost.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="recommendations">
          {/* <div className="heading">
            <span>My Ads</span>
          </div> */}
          <div className="cards">
            {mypost.map((obj) => {
              return (
                <div className="card">
                  <div className="favorite">
                    <i
                      onClick={() => handleDelete(obj.id)}
                      class="fas fa-trash-alt"
                    ></i>
                  </div>
                  <div className="image">
                    <img src={obj.url} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {obj.price}</p>
                    <span className="kilometer">{obj.category}</span>
                    <p className="name"> {obj.name}</p>
                  </div>
                  <div className="date">
                    <span>{obj.createdAt}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyadPosts;
