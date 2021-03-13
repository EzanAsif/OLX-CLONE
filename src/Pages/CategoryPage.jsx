import React from "react";
import './style.css'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {IndCategoryCards, FilterSection} from './IndCategoryPage'
import NavbarM from '../Components/Navbar/Navbar';


const CategoryPage = () => {

    let {id} = useParams()
    console.log(id)

    const data = useSelector(state => state.recomData)
    console.log(data);

    const keys = Object.keys(data)

    // if(id == data.)

    let ads = [];
    

    return (
        <div>
            <NavbarM />
            <FilterSection />
            {
            keys.map((obj) => {
                if(data[obj].category === id){
                    let {thumb, price,title, desc, location, date} = data[obj]
                    return(
                        <IndCategoryCards thumb = {thumb} price = {price} title = {title} desc = {desc} location = {location} date = {date} />
                    )
                }
            })
        }
        </div>
    )
}

export default CategoryPage
