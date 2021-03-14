import firebase from "firebase";
import { useSelector , useDispatch } from 'react-redux'

const userDetails = useSelector(state => state.user);



export const FirebaseInit = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyC6sNFttm5XFfR2IoK-SdLSF2W2IbGo72I",
    authDomain: "olx-clone-ea.firebaseapp.com",
    projectId: "olx-clone-ea",
    storageBucket: "olx-clone-ea.appspot.com",
    messagingSenderId: "987191221640",
    appId: "1:987191221640:web:bcb578c22d4ed66031ae3d",
  };

  firebase.initializeApp(firebaseConfig);
};

export const FacebookLogin = () => {
  FirebaseInit();
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;
        console.log(user.displayName, user.email, user.photoURL);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;

        // ...
        }
    )
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
        console.log(errorMessage)

      // ...
    });
};
