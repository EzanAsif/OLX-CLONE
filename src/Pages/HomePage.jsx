import React from 'react'
import NavbarM from '../Components/Navbar/Navbar'
import HomePageBanner from "../Components/HomePage_Banner/HomePage_Banner"
import FreshRecom from '../Components/FreshRecommendation/FreshRecom'
import BottomBanner from '../Components/BottomBanner/BottomBanner'
import Footer from '../Components/Footer/Footer'
import './style.css'
const HomePage = () => {
    return (
        <div className = "HomePage">
            <NavbarM/>
            <HomePageBanner />
            <FreshRecom />
            <div className="lastSection">
                <BottomBanner /> 
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage
