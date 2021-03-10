import React from 'react'

const IndvFreshRecom = ({thumb, price,title, desc, location, date}) => {
    return (
        <div className = "IndivRecomCard">
            <div className="thumbnail">
                    <img src={thumb} alt=""/>
            </div>
            <div className="title">{title}</div>
            <div className="description">
                {desc}
            </div>
            <div className="price">
                Rs {price} 
            </div>
            <div className="cardFooter">
                {location} <span>{date}</span>
            </div>
        </div>
    )
}

export default IndvFreshRecom
