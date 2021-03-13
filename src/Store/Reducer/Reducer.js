
const INITIAL_STATE = {
    recomData : {
        "Microsoft Surface Pro" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "Microsoft Surface Pro", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "",
        },
        "LENOVO IDEA PAD" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "LENOVO IDEA PAD", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
        },
        "PLOT IN 13D" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "PLOT IN 13D", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "",
        },
        "Home Ups" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "Home Ups", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "",
        },
        "DELL IDEA PAD" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "DELL IDEA PAD", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor Lorem ipsum, dolor sit amet consectetur dolor ", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "",
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