import {React, useState} from 'react'
import firebase from "firebase";
import { useSelector , useDispatch} from 'react-redux'

var firebaseConfig = {
    apiKey: "AIzaSyC6sNFttm5XFfR2IoK-SdLSF2W2IbGo72I",
    authDomain: "olx-clone-ea.firebaseapp.com",
    projectId: "olx-clone-ea",
    storageBucket: "olx-clone-ea.appspot.com",
    messagingSenderId: "987191221640",
    appId: "1:987191221640:web:bcb578c22d4ed66031ae3d",
};

firebase.initializeApp(firebaseConfig);

export const Auth = () => {
    
    let {name, email, photoUrl} = useSelector(state => state.user);
    console.log("COMMING FROM REDUCER", name, email, photoUrl)

    const [Uname, setUname] = useState("a")
    const [Uemail, setUemail] = useState("a")
    const [UphotoUrl, setUphotoUrl] = useState("a")

    const FacebookLogin = () => {
          console.log(name, email, photoUrl)
        
          var provider = new firebase.auth.FacebookAuthProvider();
          firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
            //   /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
        
                // The signed-in user info.
                var user = result.user;
                console.log(user.displayName, user.email, user.photoUrl);
                setUname(user.displayName)
                setUemail(user.email)
                setUphotoUrl(user.displayName)
                console.log("UNAME ======> " + Uname);
                console.log("UEMAIL ======> " + Uemail);
                console.log("UphotoUrl ======> " + UphotoUrl);
        
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
                    setUphotoUrl(user.photoURL)


                    name = Uname;
                    email = Uemail;
                    photoUrl = UphotoUrl;
                    console.log("IN GOOGLE LOGIN", Uname, Uemail, photoUrl);

                    let U = {
                        name : name,
                        email : email,
                        photoUrl : photoUrl
                    }
            
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
            

            name = Uname;
            email = Uemail;
            photoUrl = UphotoUrl;
            console.log("IN GOOGLE LOGIN", Uname, Uemail, photoUrl);

            let user = {
                name : name,
                email : email,
                photoUrl : photoUrl
            }


            useDispatch({
                type: "ADD_USER",
                payload : user
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
            <h5>{photoUrl}</h5>
            
        </div>
    )
}
