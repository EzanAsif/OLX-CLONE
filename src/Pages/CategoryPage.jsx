import React from "react";
import './style.css'
import { useSelector , useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import {IndCategoryCards, FilterSection} from './IndCategoryPage'
import NavbarM from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer'


const CategoryPage = () => {

    let {id} = useParams()
    console.log(id)

    const data = useSelector(state => state.adData)

    const keys = Object.keys(data)  

    return (
        <div>
            <NavbarM />
            <div className="wrapper">
                <FilterSection />
                <div className="categoryCards">
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
            </div>
            <Footer/>
        </div>
    )
}

export default CategoryPage
