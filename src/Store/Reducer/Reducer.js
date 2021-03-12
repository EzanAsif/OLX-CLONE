
const INITIAL_STATE = {
    recomData : {
        "Microsoft Surface Pro" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "Microsoft Surface Pro", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor sit...", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
        },
        "LENOVO IDEA PAD" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "Lenovo Surface Pro", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor sit...", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
        },
        "PLOT IN 13/D" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "Lenovo Surface Pro", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor sit...", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "",
        },
        "Home Ups" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "Lenovo Surface Pro", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor sit...", 
            location : "Karachi, Sindh", 
            date : "11/03/2021",
            category : "",
        },
        "DELL IDEA PAD" : {
            thumb : "https://apollo-singapore.akamaized.net:443/v1/files/epc9wup1cjaa3-PK/image;s=272x0",
            price : "50,000",
            title : "Lenovo Surface Pro", 
            desc : "Lorem ipsum, dolor sit amet consectetur dolor sit...", 
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