import firebase from 'firebase'

const recomData = {
        "Microsoft Surface Pro" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "Microsoft Surface Pro", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "Laptops",
        },
        "United CD70":{
            thumb : "https://apollo-singapore.akamaized.net/v1/files/f1kama9ycz003-PK/image;s=300x600;q=60",
            price : "50,000",
            title : "United CD70", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "Motorcycles",
        },
        "LENOVO A350" : {
            thumb : "https://apollo-singapore.akamaized.net/v1/files/877vefh69y2v-PK/image;s=300x600;q=60",
            price : "50,000",
            title : "LENOVO A350", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "Mobile_Phones",
        },
        "QMOBILE N406" : {
            thumb : "https://apollo-singapore.akamaized.net/v1/files/x42gegdhx24l3-PK/image;s=300x600;q=60",
            price : "50,000",
            title : "QMOBILE N406", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "Mobile_Phones",
        },
        "PLOT IN 13D" : {
            thumb : "https://apollo-singapore.akamaized.net/v1/files/m2hjiq552b3p1-PK/image;s=300x600;q=60",
            price : "50,000",
            title : "PLOT IN 13D", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "Land_And_Plots",
        },
        "Home Ups" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "Home Ups", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "House",
        },
}

var firebaseConfig = {
    apiKey: "AIzaSyC6sNFttm5XFfR2IoK-SdLSF2W2IbGo72I",
    authDomain: "olx-clone-ea.firebaseapp.com",
    databaseUrl : "https://olx-clone-ea-default-rtdb.firebaseio.com/",
    projectId: "olx-clone-ea",
    storageBucket: "olx-clone-ea.appspot.com",
    messagingSenderId: "987191221640",
    appId: "1:987191221640:web:bcb578c22d4ed66031ae3d",
};


// firebase.initializeApp(firebaseConfig);


let database = firebase.database();

const INITIAL_STATE_USER = {
    Ustate:{}
}

let dbData;


database.ref().set({ads:recomData})

let commingData;
database.ref().child('/ads').get().then(function(ad) {
    
    if (ad.exists()) {
      commingData = ad.val()
      console.log("COMMING DATA : ");
      console.log(commingData.ads);
  
      let new_data = {
        ads : commingData
      }
      
      console.log("NEW DATA : ");
      console.log(new_data.ads);
      
      commingData = new_data.ads
    }
    else {
      console.log("No data available");
    }
})

    

// if (commingData){

//     dbData = commingData
    
// }

// else {
//     dbData = recomData;
// }


function AdReducer( Adstate = recomData , action ){
    switch (action.type) {
        case "ADD_AD":
            return{
                ...Adstate,
                [action.payload.title] : action.payload,
                // [database.ref('/ads').push({[action.payload.title] : action.payload})]
                
            };

        default:
            return Adstate;
    } 
} 

function UserReducer(Ustate = INITIAL_STATE_USER, action){
    switch (action.type) {
        case "ADD_USER":
            return{
                ...Ustate,
                Ustate : action.payload,
            };
        default:
            return Ustate;
    } 
}

export  {AdReducer, UserReducer};





// console.log("IN REDUCER");
// console.log("===========================================");
// console.log(INITIAL_STATE_USER.Ustate);
// console.log(INITIAL_STATE_USER.Ustate.email)
// console.log(INITIAL_STATE_USER.Ustate.name)
// console.log(INITIAL_STATE_USER.Ustate.photoUrl)
// console.log("===========================================");