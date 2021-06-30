import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBGAgf1mjQJb-dbkTPShP4_4wLobGFAUM8",
    authDomain: "olx-clone-d0373.firebaseapp.com",
    projectId: "olx-clone-d0373",
    storageBucket: "olx-clone-d0373.appspot.com",
    messagingSenderId: "428526391329",
    appId: "1:428526391329:web:6945d0df754fcce4add360"
  };

export default firebase.initializeApp(firebaseConfig)