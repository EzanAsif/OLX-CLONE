import React from 'react'
import NavbarM from '../Components/Navbar/Navbar'
import HomePageBanner from "../Components/HomePage_Banner/HomePage_Banner"
import FreshRecom from '../Components/FreshRecommendation/FreshRecom'

const HomePage = () => {
    return (
        <div className = "HomePage">
            <NavbarM/>
            <HomePageBanner />
            <FreshRecom />
        </div>
    )
}

export default HomePage
