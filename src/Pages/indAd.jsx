import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux'
import NavbarM from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Avatar from '../assets/avatar.jpeg'
import './style.css'

const IndAd = () => {

    let {id} = useParams()
    // console.log(id)
    const data = useSelector(state => state.adData)
    // console.log(data)
    
    return (
        <>
            <NavbarM/>
            <div className = {`individual_ad ${id}`} >
                <div className="left">
                    <div className="img">
                        <img src={data[id].thumb} alt={data[id].title}/>
                    </div>
                    <div className="description">
                        <h2>Description</h2>
                        <p>{data[id].desc}</p>
                    </div>
                </div>
                <div className="right">
                    <div className="titleAmount">
                        <div className="amount">
                            <h1>Rs {data[id].price}</h1>
                        </div>
                        <div className="title">
                            <h3>{data[id].title}</h3>
                        </div>
                        <div className="location">
                            {data[id].location}
                            <span>
                                {data[id].date}
                            </span>
                        </div>
                    </div>
                    <div className="sellerDetails">
                        <div className="heading">Seller Details</div>
                        <div className="detailsContainer">
                            <div className="profile">
                                <img src={Avatar} />
                            </div>
                            <div className="details">
                                <div className="name">
                                    User User
                                </div>
                            </div>
                        </div>
                        <div className="button">
                                <a href="#">
                                    Chat with seller
                                </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default IndAd
