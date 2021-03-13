
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
        "LENOVO A350" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "LENOVO A350", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "Mobile_Phones",
        },
        "QMOBILE N406" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "QMOBILE N406", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "Mobile_Phones",
        },
        "PLOT IN 13D" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "PLOT IN 13D", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "Land And Plots",
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
    },
} 



function reducer( state = INITIAL_STATE , action ){
    switch (action.type) {
        default:
            return state;
    } 
} 

export default reducer;