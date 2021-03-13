import React from 'react'

const IndvFreshRecom = ({thumb, price,title, desc, location, date}) => {
    return (
        <>
            <div className="thumbnail">
                    <img src={thumb} alt=""/>
            </div>
            <div className="title">{title}</div>
            <div className="description">
                {desc.slice(0,50)}...
            </div>
            <div className="price">
                Rs {price} 
            </div>
            <div className="cardFooter">
                {location} <span>{date}</span>
            </div>
        </>
    )
}

export default IndvFreshRecom
