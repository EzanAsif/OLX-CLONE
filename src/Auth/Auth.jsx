import {React, useState} from 'react'
import firebase from "firebase";
import { useSelector , useDispatch} from 'react-redux'
// import { store, userData } from '../Store';

var firebaseConfig = {
    apiKey: "AIzaSyC6sNFttm5XFfR2IoK-SdLSF2W2IbGo72I",
    authDomain: "olx-clone-ea.firebaseapp.com",
    databaseURL: "https://olx-clone-ea-default-rtdb.firebaseio.com",
    projectId: "olx-clone-ea",
    storageBucket: "olx-clone-ea.appspot.com",
    messagingSenderId: "987191221640",
    appId: "1:987191221640:web:876953759fc99b5b31ae3d"
}
firebase.initializeApp(firebaseConfig);

export const Auth = () => {
    
    let Comminguser = useSelector(state => state.userData);
    console.log("COMMING FROM REDUCER =>", Comminguser)

    const dispatch = useDispatch();


    const FacebookLogin = () => {
        //   console.log(name, email, photoUrl)
        
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
                    var token = credential.accessToken;
                    var user = result.user;
                    console.log(user.displayName, user.email, user.photoURL);

                    let userDetails = {
                        name : user.displayName,
                        email : user.email,
                        photoUrl : user.photoURL
                    }
    
                    console.log("USER DETAILS", userDetails);
                    
                    dispatch({type: "ADD_USER", payload:userDetails})

            
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

    return (
        <div>
            <button onClick = {GoogleLogin}>GoogleLogin</button>
            <button onClick = {FacebookLogin}>FacebookLogin</button>
            {/* <button onClick = {updateReducer}>UPDATE REDUCER</button> */}
            <h2>
                DETAILS
            </h2>

            <h2> NAME : 
            {
                Comminguser.Ustate.name ? Comminguser.Ustate.name : "NO DATA"
            }
            </h2>
            <h2> email : 
            {
                Comminguser.Ustate.email ? Comminguser.Ustate.email : "NO DATA"
            }
            </h2>
            <h2> PhotoUrl : 
            {
                Comminguser.Ustate.photoUrl ? Comminguser.Ustate.photoUrl : "NO DATA"
            }
            </h2>
            
        </div>
    )
}
