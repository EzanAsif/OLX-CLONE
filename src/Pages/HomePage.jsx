import React from 'react'
import NavbarM from '../Components/Navbar/Navbar'
import HomePageBanner from "../Components/HomePage_Banner/HomePage_Banner"
import FreshRecom from '../Components/FreshRecommendation/FreshRecom'
import BottomBanner from '../Components/BottomBanner/BottomBanner'
import Footer from '../Components/Footer/Footer'
import './style.css';
import BackToTop from 'react-easy-back-to-top';

const HomePage = () => {
    return (
        <div className = "HomePage">
            <BackToTop
                backgroundColor="#002f34"
                position={{ left : "50%", transform : "translateX(-50%)" }}
                hover={{ backgroundColor: "black", color: "gray" }}
                transition="all 0.5s"
                showOnDistance={50}
                borderRadius={16}
                opacity="1"
                color="white"
                fontSize="15px"
                text = "Back to top"
                className = "backToTop"
                padding = "8px 20px"
            />
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
