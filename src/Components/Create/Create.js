import React, { Fragment,useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context'
import { useHistory } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader'


const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [price, setPrice] = useState()
  const [image, setImage] = useState(null)
  const date = new Date()
  const history = useHistory()
  const handleSubmit =()=>{
    setIsLoading(true)
     firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        }).then(() => {
          console.log("Document successfully updated!");
          setIsLoading(false)
          history.push('/')
      }).catch((error) => {
        setIsLoading(false)
        // The document probably doesn't exist.
        alert("Error updating document: ", error);
    });
       
      }).catch((error)=>{
        setIsLoading(false)
        alert("Error updating document: ", error);
      })
    })
  }
  return (
    <Fragment>
      {isLoading && <Loader/>}
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              name="Name"
              
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              name="category"
              
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={price}
              onChange={(e)=>{
                setPrice(e.target.value)
              }}
              id="fname" name="Price" />
            <br />
         
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0])
            }} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
       
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
