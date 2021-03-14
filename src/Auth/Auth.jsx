import {React, useState} from 'react'
import firebase from "firebase";
import { useSelector , useDispatch} from 'react-redux'


export const Auth = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyC6sNFttm5XFfR2IoK-SdLSF2W2IbGo72I",
        authDomain: "olx-clone-ea.firebaseapp.com",
        projectId: "olx-clone-ea",
        storageBucket: "olx-clone-ea.appspot.com",
        messagingSenderId: "987191221640",
        appId: "1:987191221640:web:bcb578c22d4ed66031ae3d",
    };
    
    // firebase.initializeApp(firebaseConfig);
    const {name, email, photoURL} = useSelector(state => state.user);

    const [Uname, setUname] = useState("a")
    const [Uemail, setUemail] = useState("a")
    const [UphotoURL, setUphotoURL] = useState("a")

    const FacebookLogin = () => {
          console.log(name, email, photoURL)
        
          var provider = new firebase.auth.FacebookAuthProvider();
          firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
            //   /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
        
                // The signed-in user info.
                var user = result.user;
                console.log(user.displayName, user.email, user.photoURL);
                setUname(user.displayName)
                setUemail(user.email)
                setUphotoURL(user.displayName)
                console.log("UNAME ======> " + Uname);
                console.log("UEMAIL ======> " + Uemail);
                console.log("UphotoURL ======> " + UphotoURL);
        
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
        
    const GoogleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
                .signInWithPopup(provider)
                .then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    var credential = result.credential;

                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(user.displayName, user.email, user.photoURL);
                    setUname(user.displayName)
                    setUemail(user.email)
                    setUphotoURL(user.photoURL)
                    name = Uname;
                    email = Uemail;
                    photoURL = UphotoURL;

                    
            
                }).catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });
    }
    
    useDispatch({
        type: "ADD_USER",
        payload : {name, email, photoURL}
    })

    return (
        <div>
            <button onClick = {FacebookLogin}>FacebookLogin</button>
            <button onClick = {GoogleLogin}>GoogleLogin</button>
            <h2>
                DETAILS
            </h2>
            <h5>{name}</h5>
            <h5>{email}</h5>
            <h5>{photoURL}</h5>
            
        </div>
    )
}
