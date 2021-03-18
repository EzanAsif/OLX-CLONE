import React from 'react'
import Button from '../../assets/olxSellButton-01.png'
import { Link } from "react-router-dom";
import AdPosting from '../../Pages/AdPosting'
import {useDispatch} from 'react-redux'
import './style.css'


const SellButton = () => {

    const dispatch = useDispatch()

    return (
        <div className = "authenticated">
            <Link className = "sell_button" to = "/createAd" component = {AdPosting}>
                {/* <img src={Button} alt="sell-button"/> */}
                SELL
            </Link>
        </div>
    )
}

export default SellButton
