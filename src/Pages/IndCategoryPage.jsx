import React from 'react'

const FilterSection = () => {
    return(
        <div className="FilterSection">
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
        <>
            <div className="Category">
                <strong>{title}</strong>
                <br/>
                {thumb}
                <br/>
                {price}
                <br/>
                {desc}
                <br/>
                {location}
                 <br/>
                {date}
                <br/>
                <br/>
            </div>         
        </>
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