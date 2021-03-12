import React from 'react'
import './style.css'
const BottomBanner = () => {
    return (
        <div className="last-sec-cont">
                <div className="last-sec-img">
                    <img src="https://statics.olx.com.pk/external/base/img/phone-app.png" alt="....."/>
                </div>
                <div className="last-sec-text">
                    <div className="heading">
                        <h2>Try the olx app</h2>
                    </div>
                    <div className="para">
                    Buy, sell and find just about anything using the app on your mobile.
                    </div>
                </div>
                <div className="last-sec-divider">
                    <div className="divider">

                    </div>
                </div>
                <div className="last-sec-store-links">
                    <div className="store-links-heading">
                        get your app today
                    </div>
                    <div className="last-sec-store-links-icon">
                        <a href="#home">
                            <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt="...."/>
                        </a>
                        <a href="#home">
                            <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="...."/>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default BottomBanner
