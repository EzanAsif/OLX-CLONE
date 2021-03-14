
const INITIAL_STATE = {
    recomData : {
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
        "DELL IDEA PAD" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "DELL IDEA PAD", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "Laptop",
        },
        "REDMI 9C" : {
            thumb : "https://apollo-singapore.akamaized.net/v1/files/877vefh69y2v-PK/image;s=300x600;q=60",
            price : "65,000",
            title : "REDMI 9C", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "Mobile_Phones",
        },
        "77GX LG OLED TV" : {
            thumb : "https://apollo-singapore.akamaized.net/v1/files/kjhqmlomar7r-PK/image;s=300x600;q=60",
            price : "65,000",
            title : "77GX LG OLED TV", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "TV",
        }
    },
    user : {
        name : "",
        email : "",
        photoUrl : "",
    },
} 



function reducer( state = INITIAL_STATE , action ){
    switch (action.type) {
        default:
            return state;
    } 
} 

export default reducer;