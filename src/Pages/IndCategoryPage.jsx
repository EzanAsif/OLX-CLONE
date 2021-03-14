import React from 'react'
import IndvFreshRecom from '../Components/FreshRecommendation/IndvFreshRecom'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FilterSection = () => {

    let {id} = useParams()

    return(
        <div className="FilterSection">
            <h2>{id.replace('_', " ")}</h2>
            <div className="categories">
                <h2>categories</h2>
                <ul>
                    <li>
                        <div className="c3rwq"></div>
                        <h4>All Categories</h4>
                    </li>
                    <li>
                        <div className="c3rwq"></div>
                        <h4>Mobiles</h4>
                    </li>
                    <li className = "indented">
                        <ul>
                            <li>Tablets(7,021)</li>
                            <li>Accessories(7,021)</li>
                            <li className = "selected">Mobile Phone(178,627)</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
            
    )
}



const IndCategoryCards = ({thumb, price,title, desc, location, date}) => {
    return (
            <Link to={`/product/${title}`} className="IndivRecomCard">
                <div className="thumbnail">
                    <img src={thumb} alt={title} />
                </div>
                <div className="title">
                    {title}
                </div>
                <div className="description">
                    {desc.slice(0,100)}..
                </div>
                <div className="price">
                    <h3>Rs {price}</h3>
                </div>
                <div className="cardFooter">
                    {location}
                    <span>
                        {date}
                    </span>
                </div>
            </Link>         
    )
}

export {IndCategoryCards, FilterSection}


{/* <strong>{obj.title}</strong>
            <br/>
            {obj.date}
            <br/>
            {obj.desc}
            <br/>
            {obj.location}
            <br/>
            {obj.price}
            <br/>
            {obj.date}
            <br/>
            {obj.thumb}
            <br/> */}