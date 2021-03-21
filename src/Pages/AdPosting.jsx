import {React, useState} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import NavbarM from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { useHistory } from "react-router-dom";
import firebase from 'firebase'

const AdPosting = () => {

    const [title, setTitle] = useState("")
    const [thumb, setThumb] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")


    const dispatch = useDispatch();

    let PreviousAdData = useSelector(state => state.adData);
    console.log("PREVIOUS DATA");
    console.log(PreviousAdData);

    const addAd = (Ad) => {
        dispatch({
            type : "ADD_AD",
            payload : Ad
        })
    }

    let history = useHistory();

    const onSubmit = (e) => {

        e.preventDefault();

        const newAd = {
            title : String(title),
            thumb : String(thumb),
            price : String(price),
            desc : String(desc),
            location : String(location),
            date : String(date),
            category : String(category),
        }

        console.log(newAd);

        addAd(newAd)

        
        let database = firebase.database();


        database.ref('/ads/').child(newAd.title).set({
            title : newAd.title,
            thumb : newAd.thumb,
            price : newAd.price,
            desc : newAd.desc,
            location : newAd.location,
            date : newAd.date,
            category : newAd.category,
        })



        alert("AD POSTED SUCCESSFULLY")


        history.push('/')

    }

    return (
        <>
            <NavbarM />
            <div className = "adForm">
                <h3>Post A new Ad</h3>
                <form onSubmit ={(e) => onSubmit(e)}>
                    <input requiredashboardd onChange = {(e) => setTitle(e.target.value)} value = {title} type="text" id = "title" placeholder="Enter Title of your Ad"/>
                    <label htmlFor="title">Title</label>

                    <label htmlFor="thumb">Thumbnail</label>
                    <input required onChange = {(e) => setThumb(e.target.value)} value = {thumb} type="text" id = "thumb" placeholder="Enter url of thumbnail of your Ad"/>

                    <label htmlFor="price">Price</label>
                    <input required onChange = {(e) => setPrice(e.target.value)} value = {price} type="text" id = "price" placeholder="Enter Price of your product"/>

                    <label htmlFor="desc">Description</label>
                    <input required onChange = {(e) => setDesc(e.target.value)} value = {desc} type="text" id = "desc" placeholder="Enter description of your Ad"/>

                    <label htmlFor="location">Location</label>
                    <input required onChange = {(e) => setLocation(e.target.value)} value = {location} type="text" id = "location" placeholder="Enter location of your product"/>

                    <label htmlFor="date">Date</label>
                    <input required onChange = {(e) => setDate(e.target.value)} value = {date} type="text" id = "date" placeholder="Enter Date"/>

                    <label htmlFor="category">Category</label>
                    <input required onChange = {(e) => setCategory(e.target.value)} value = {category} type="text" id = "category" placeholder="Enter Category of your Ad"/>
                    <button>
                        POST!
                    </button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default AdPosting
