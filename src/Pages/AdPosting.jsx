import {React, useState} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import FreshRecom from '../Components/FreshRecommendation/FreshRecom'



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
    console.log(PreviousAdData);

    const addAd = (Ad) => {
        dispatch({
            type : "ADD_AD",
            payload : Ad
        })
    }

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

    }

    return (
        <>
            <div>
                <h3>Ad A new Ad</h3>
                <form onSubmit ={(e) => onSubmit(e)}>
                    <label htmlFor="title">Title</label>
                    <input onChange = {(e) => setTitle(e.target.value)} value = {title} type="text" id = "title" placeholder="Enter Title of your Ad"/>

                    <label htmlFor="thumb">thumb</label>
                    <input onChange = {(e) => setThumb(e.target.value)} value = {thumb} type="text" id = "thumb" placeholder="Enter Title of your Ad"/>

                    <label htmlFor="price">price</label>
                    <input onChange = {(e) => setPrice(e.target.value)} value = {price} type="text" id = "price" placeholder="Enter Title of your Ad"/>

                    <label htmlFor="desc">desc</label>
                    <input onChange = {(e) => setDesc(e.target.value)} value = {desc} type="text" id = "desc" placeholder="Enter Title of your Ad"/>

                    <label htmlFor="location">location</label>
                    <input onChange = {(e) => setLocation(e.target.value)} value = {location} type="text" id = "location" placeholder="Enter Title of your Ad"/>

                    <label htmlFor="date">date</label>
                    <input onChange = {(e) => setDate(e.target.value)} value = {date} type="text" id = "date" placeholder="Enter Title of your Ad"/>

                    <label htmlFor="category">category</label>
                    <input onChange = {(e) => setCategory(e.target.value)} value = {category} type="text" id = "category" placeholder="Enter Title of your Ad"/>
                    <button>
                        POST!
                    </button>
                </form>
            </div>
            <FreshRecom/>
        </>
    )
}

export default AdPosting
