import React from "react";
import './styles.css'
import IndvFreshRecom from "./IndvFreshRecom";
import { useSelector , useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

const FreshRecom = () => {
    
    const data = useSelector(state => state.adData)
    // console.log("DATA===>" + data);
    // let Objkeys;
    // data.map(
        // );
        
    let  Objkeys = Object.keys(data)
    console.log(Objkeys[0]);

//   const dispatch = useDispatch()

//   dispatch({type : 'default'})

  return (
    <div className="FreshRecom_Section">
        <div className="heading">
            Fresh Recommendations
        </div>
        <div className="FreshRecom_cards">
            {Objkeys.map((obj, index) => {
                return (
                    <Link className = "IndivRecomCard" to={`/product/${obj}`} >
                    {console.log("FROM FRESH RECOMMENDATION ")}
                    {console.log(data[obj].title)}
                    {console.log(data[obj])}
                    
                    <IndvFreshRecom
                        thumb={data[obj].thumb}
                        price={data[obj].price}
                        title={data[obj].title}
                        desc={data[obj].desc}
                        location={data[obj].location}
                        date={data[obj].date}
                    />
                </Link>
                );
            })}
        </div>
    </div>
  );
};

export default FreshRecom;
