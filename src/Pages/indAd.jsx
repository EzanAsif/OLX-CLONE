import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux'
import NavbarM from '../Components/Navbar/Navbar'
import './style.css'

const IndAd = () => {

    let {id} = useParams()
    const data = useSelector(state => state.recomData)
    
    return (
        <>
            <NavbarM/>
            <div className = {`individual_ad ${id}`} >
                <div className="img">
                    <img src={data[id].thumb} alt={data[id].title}/>
                </div>
                <div className="title">
                    {data[id].title}
                </div>
                <div className="img">
                    {data[id].desc}
                </div>
                <div className="img">
                    {data[id].price}
                </div>
            </div>
        </>
    )
}

export default IndAd
