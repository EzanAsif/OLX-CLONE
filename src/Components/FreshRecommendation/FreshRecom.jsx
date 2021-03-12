import React from "react";
import './styles.css'
import IndvFreshRecom from "./IndvFreshRecom";
import { recomData } from "./RecomData";
import { useSelector , useDispatch } from 'react-redux'

const FreshRecom = () => {
    
    const data = useSelector(state => state.recomData)
    // console.log(Objkeys);
    let Objkeys = Object.keys(data);

    console.log(data);

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
                <IndvFreshRecom
                    thumb={recomData[obj].thumb}
                    price={recomData[obj].price}
                    title={recomData[obj].title}
                    desc={recomData[obj].desc}
                    location={recomData[obj].location}
                    date={recomData[obj].date}
                />
                );
            })}
        </div>
    </div>
  );
};

export default FreshRecom;
